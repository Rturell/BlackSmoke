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