///MOSTRAR MODAL DONATION///

$(window).on('load', function () {
    $('#myModal').modal('show');
});

$("#toggle").click(function () {
    $(".mobile-menu").toggleClass('active');
    $('body').toggleClass('overflow-hidden');
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