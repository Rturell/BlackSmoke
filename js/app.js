$(function () {
    $("#toggle").click(function () {
        $(".mobile-menu").toggleClass('active');
    });

    $(".mobile-link").click(function () {

        $(".mobile-menu").removeClass('active');
        $('input[name=toggle-checkbox]').attr('checked', false);

    });

});

//////VALIDACIÓN E-MAIL DE NEWSLETTER///// 

$("#newsletter").on("keyup", function () {
    var email = $("#newsletter").val();

    if ((validarEmail(email)) === true) {
        $("#newsletter").addClass("is-valid");
        $("#newsletter").removeClass("is-invalid");
    } else {
        $("#newsletter").addClass("is-invalid");
        $("#newsletter").removeClass("is-valid");
    }
});

function validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

////////BTN-NEWS ACTIVADO CON ENTER //////////

$('#newsletter').keyup(function (e) {
    if (e.keyCode == 13) {
        $('#btn-news').click();
    }
});

///ESCONDER MENÚ AL HACER CLICK///

$(document).on('click', function () {
    $('.mobile-menu').collapse('hide');
})


///SCROLL REVEAL /// 

var sr = ScrollReveal({
    duration: 2000,
    mobile: false,

});

sr.reveal('.disc1', {
    scale: 0.5,
});

sr.reveal('.title-album', {
    origin: 'right',
    distance: '100px',
});

sr.reveal('hr', {
    origin: 'right',
    distance: '100px',
});

sr.reveal('.text-album', {
    origin: 'right',
    distance: '100px',
});

sr.reveal('.credits', {
    origin: 'right',
    distance: '100px',
});

sr.reveal('.icons', {
    origin: 'right',
    distance: '100px',
});

sr.reveal('.disc2', {
    origin: 'right',
    scale: 0.5,
});

sr.reveal('.title-album2', {
    origin: 'left',
    distance: '100px',
});

sr.reveal('.js-digital-btn', {
    origin: 'left',
    distance: '100px',
});

sr.reveal('.card', {});

let modalId = $('#image-gallery');

$(document)
    .ready(function () {

        loadGallery(true, 'a.thumbnail');

        //This function disables buttons when needed
        function disableButtons(counter_max, counter_current) {
            $('#show-previous-image, #show-next-image')
                .show();
            if (counter_max === counter_current) {
                $('#show-next-image')
                    .hide();
            } else if (counter_current === 1) {
                $('#show-previous-image')
                    .hide();
            }
        }

        /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */

        function loadGallery(setIDs, setClickAttr) {
            let current_image,
                selector,
                counter = 0;

            $('#show-next-image, #show-previous-image')
                .click(function () {
                    if ($(this)
                        .attr('id') === 'show-previous-image') {
                        current_image--;
                    } else {
                        current_image++;
                    }

                    selector = $('[data-image-id="' + current_image + '"]');
                    updateGallery(selector);
                });

            function updateGallery(selector) {
                let $sel = selector;
                current_image = $sel.data('image-id');
                $('#image-gallery-title')
                    .text($sel.data('title'));
                $('#image-gallery-image')
                    .attr('src', $sel.data('image'));
                disableButtons(counter, $sel.data('image-id'));
            }

            if (setIDs == true) {
                $('[data-image-id]')
                    .each(function () {
                        counter++;
                        $(this)
                            .attr('data-image-id', counter);
                    });
            }
            $(setClickAttr)
                .on('click', function () {
                    updateGallery($(this));
                });
        }
    });

// build key actions
$(document)
    .keydown(function (e) {
        switch (e.which) {
            case 37: // left
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
                    $('#show-previous-image')
                        .click();
                }
                break;

            case 39: // right
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
                    $('#show-next-image')
                        .click();
                }
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });