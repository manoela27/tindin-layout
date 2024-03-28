window.addEventListener('scroll', function() {
    var menuRegister = document.querySelector('.menu-register');
    var menuFooter = document.querySelector('.menu-footer');

    if (menuRegister.scrollHeight > menuRegister.clientHeight) {
        menuFooter.classList.add('show-before');
    } else {
        menuFooter.classList.remove('show-before');
    }
});

document.getElementById("maximize").addEventListener("click", function() {
    var menuTindin = document.querySelector(".c-menu-tindin");
    var menuFooter = document.querySelector(".menu-footer");

    menuTindin.classList.toggle("maximized");
    
    if (menuTindin.classList.contains("maximized")){
        menuFooter.classList.toggle("justify-center");
        menuFooter.classList.remove("justify-between");
    }
    else{
        menuFooter.classList.toggle("justify-between");
        menuFooter.classList.remove("justify-center");
    }
    

    var maximizeIcon = document.querySelector("#maximize svg use");
    if (menuTindin.classList.contains("maximized")) {
        maximizeIcon.setAttribute("xlink:href", "assets/img/icons/menu-expanded.svg#menu-expanded");
    } else {
        maximizeIcon.setAttribute("xlink:href", "assets/img/icons/maximize.svg#maximize");
    }
});


