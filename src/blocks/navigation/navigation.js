/**
 * @file Implementation of the navigation block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
// TODO: add code here
// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
// TODO: add code here
// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------
// TODO: add code here
// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
// TODO: add code here
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the navigation block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here
    $('.navigation__ul').on('click', 'a', function () {
        // полчаем смещение елемента с id якоря
        let offset = $($(this).attr('href')).offset().top;
        $('html').stop().animate({scrollTop: offset}, 500, 'swing', function () {

        });
    });
    $('.navigation__list').on('click', 'a', function () {
        // полчаем смещение елемента с id якоря
        let offset = $($(this).attr('href')).offset().top;
        $('html').stop().animate({scrollTop: offset}, 1000, 'swing', function () {

        });
    });
    return true;
}
// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
