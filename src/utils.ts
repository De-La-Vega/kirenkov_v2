import scrollToElement from 'scroll-to-element';

/**
 * Scroll to item.
 *
 * @param {string} className - class
 */
export function scrollTo (className: string): void {
    scrollToElement('.' + className, {
        duration: 200,
        ease: 'linear',
        offset: 0,
    });
}
