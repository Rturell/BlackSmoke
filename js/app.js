
//////EFECTO LOGO MENÚ////

// $('.js-logo-menu').hide();

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 150) {
//         $('.js-logo-menu').fadeIn();
//     }
//     if ($(this).scrollTop() < 150) {
//         $('.js-logo-menu').fadeOut();
//     }
// });


//////VALIDACIÓN E-MAIL DE NEWSLETTER///// 

$("#newsletter").on("keyup", function() { 
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

$(document).on('click',function(){ $('.collapse').collapse('hide'); })


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

sr.reveal('.card', {
});

///CAMBIAR PLACEHOLDER AL SUBIR ARCHIVO///

$("[type=file]").on("change", function(){
    // Name of file and placeholder
    var file = this.files[0].name;
    var dflt = $(this).attr("placeholder");
    if($(this).val()!=""){
      $(this).next().text(file);
    } else {
      $(this).next().text(dflt);
    }
  });

