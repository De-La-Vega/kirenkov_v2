import { TTimelineItem } from '../../models';
import { TIMELINE_ITEM_TYPE } from '../../enums';
import { YEAR_OFFSETS } from '../../data/timeline';

type TSortedElement = {
    top: number;
    element: Element;
}

export const getYearOffset = (year: number) => Object.prototype.hasOwnProperty.call(YEAR_OFFSETS, year) ? YEAR_OFFSETS[year] : 500;

const calculateTop = (
    itemStartYear: number,
    yearsHeight: number,
    uniqueYears: number[],
) => {
    let totalOffset = 0;
    const filteredYears = uniqueYears.filter(year => year <= itemStartYear);

    if (filteredYears.length > 0) {
        // Считаем отступ для каждого года в диапазоне до (и включая) начального года элемента
        filteredYears.forEach((year) => {
            totalOffset += yearsHeight; // Добавляем высоту блока года
            if (year < itemStartYear) {
                // Для каждого года, кроме самого начального года элемента, добавляем отступ после года
                totalOffset += getYearOffset(year);
            }
        });
    }

    // Последнее добавление к totalOffset в цикле forEach было для начального года элемента,
    // поэтому текущее значение totalOffset соответствует нижней границе начального года элемента.
    return totalOffset;
};

export const calculateHeightAndTop = (
    item: TTimelineItem,
    type: TIMELINE_ITEM_TYPE,
    yearsHeight: number,
    uniqueYears: number[],
) => {
    const { dateRange } = item;
    let itemHeight = 0;
    // Вычисляем начальное смещение от нижней границы начального года
    let itemTop = calculateTop(dateRange[0], yearsHeight, uniqueYears);

    if (type === TIMELINE_ITEM_TYPE.RANGE) {
        // Для диапазонных событий начинаем с отступа начального года
        itemHeight += getYearOffset(dateRange[0]);
        
        // Добавляем высоту года и отступ каждого последующего года в диапазоне, 
        // кроме последнего, так как нам нужна верхняя граница последнего года
        for (let year = dateRange[0] + 1; year < dateRange[1]; year++) {
            itemHeight += yearsHeight; // Добавляем высоту года
            itemHeight += getYearOffset(year); // Добавляем отступ после года
        }
    } else {
        // Для точечных событий высота равна высоте одного блока года
        itemHeight = yearsHeight;
    }

    if (type === TIMELINE_ITEM_TYPE.POINT) {
        itemTop -= yearsHeight;
    }

    return {
        itemHeight,
        itemTop
    };
};

export const getUniqueYearsFromItems = (items: TTimelineItem[]): number[] => {
    const yearSet = new Set<number>();

    items.forEach(item => {
        const { dateRange } = item;
        for (let year = dateRange[0]; year <= dateRange[1]; year++) {
            yearSet.add(year);
        }
    });

    return Array.from(yearSet).sort((a, b) => a - b);
};


function getSortedElements(selector: string): TSortedElement[] {
    const elements = document.querySelectorAll(selector);
    const sortedElements = Array.from(elements).map(element => ({
        top: element.getBoundingClientRect().top + window.scrollY, // Абсолютное вертикальное положение
        element,
    })).sort((a, b) => a.top - b.top); // Сортировка по вертикальному положению
  
    return sortedElements;
}

// function updateNearestElements(sortedElements: TSortedElement[], centerY: number) {
//     // Изменяем логику поиска ближайшего элемента к центру экрана
//     let nearestIndex = -1;
//     let smallestDistance = Infinity;

//     sortedElements.forEach(({ top, element }, index) => {
//         const elementCenter = top + (element as HTMLElement).offsetHeight / 2;
//         const distance = Math.abs(centerY - elementCenter); // Расстояние от центра элемента до центра экрана

//         if (distance < smallestDistance) {
//             smallestDistance = distance;
//             nearestIndex = index;
//         }
//     });

//     if (nearestIndex !== -1) {
//         // Сбрасываем классы всех элементов
//         sortedElements.forEach(({ element }) => {
//             element.classList.remove('center-level-0', 'center-level-1', 'center-level-2', 'center-level-3');
//         });

//         // Обновляем классы для ближайших элементов
//         const levels = [-3, -2, -1, 0, 1, 2, 3];
//         levels.forEach(level => {
//             const index = nearestIndex + level;
//             if (sortedElements[index]) {
//                 sortedElements[index].element.classList.add(`center-level-${Math.abs(level)}`);
//             }
//         });
//     }
// }

function updateNearestElements(sortedElements: TSortedElement[], centerY: number) {
    let nearestIndex = -1;
    let smallestDistance = Infinity;

    sortedElements.forEach(({ top, element }, index) => {
        const elementHeight = (element as HTMLElement).offsetHeight;
        const elementCenter = top + elementHeight / 2;
        let referencePoint = elementCenter; // По умолчанию используем центр элемента

        // Если высота элемента больше 50% высоты окна, используем его верхнюю границу в качестве точки отсчета
        if (elementHeight > window.innerHeight * 0.6) {
            referencePoint = top;
        }

        const distance = Math.abs(centerY - referencePoint); // Расстояние от точки отсчета до центра экрана

        if (distance < smallestDistance) {
            smallestDistance = distance;
            nearestIndex = index;
        }
    });

    if (nearestIndex !== -1) {
        // Сбрасываем классы всех элементов
        sortedElements.forEach(({ element }) => {
            element.classList.remove('center-level-0', 'center-level-1', 'center-level-2', 'center-level-3');
        });

        // Обновляем классы для ближайших элементов
        const levels = [-3, -2, -1, 0, 1, 2, 3];
        levels.forEach(level => {
            const index = nearestIndex + level;
            if (sortedElements[index]) {
                sortedElements[index].element.classList.add(`center-level-${Math.abs(level)}`);
            }
        });
    }
}

export function handleScroll() {
    const centerY = window.scrollY + window.innerHeight / 2;
    const sortedLeft = getSortedElements('.timeline-left .timeline__item');
    const sortedRightRanges = getSortedElements('.timeline-right .timeline__item_type-range');
    // const sortedRightPoints = getSortedElements('.timeline-right .timeline__item_type-point');
  
    // Функция для обновления классов на основе близости к центру
    updateNearestElements(sortedLeft, centerY);
    updateNearestElements(sortedRightRanges, centerY);
    // updateNearestElements(sortedRightPoints, centerY);
}
