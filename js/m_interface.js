function toggleFeedbackDiv () {
    $('.read-more').on('click', function () {
        $('.js-fun-fact').toggle();
    });
}

function alertFeedbackUpdate () {
    $('.read-more button').addClass('alert');
    $('.read-more button').text('How\'d I do?');
}

// ensures feedback div "hide" state toggled via JS will also be dynamically removed
// on the transition to wider viewports
// when the user *manually* resizes the window on browsers. (inline styling)
// optional "hide" state is toggled via JS only on narrower/mobile viewports

function detectViewportWidth () {
    const viewportWidth = $(window).width();
    if (viewportWidth < 750) {
        $('.js-fun-fact').hide();
    } else if (viewportWidth >= 750) {
        $('.js-fun-fact').show();
    }
}

function listenForResizeWindow () {
    $(window).resize(function () {
        detectViewportWidth();
    });
}

function main () {
    detectViewportWidth();
    toggleFeedbackDiv();
    listenForResizeWindow();
}

$(main);

