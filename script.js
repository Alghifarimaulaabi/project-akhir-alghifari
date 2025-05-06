  // Simulate async loading like fetching data, etc.
  document.addEventListener('DOMContentLoaded', () => {
    // After delay, hide loading and show main content
    setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      const mainContent = document.getElementById('main-content');
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.7s ease';
      // After fade out, hide loading and show main content
      loadingScreen.addEventListener('transitionend', () => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.focus();
      }, { once: true });
    }, 3000);
  });


//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function() {
        menu.toggle(); 
    });
    menu.click(function() {
        menu.toggle(); 
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) { 
        klikMenu();
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}


//check lebar
$(window).resize(function(){
    var width = $(window).width();
    if (width > 989) {
        menu.css("display","block");
        //display block
    }else{
        menu.css("display","none");
    }
    klikMenu();
});

function toggleFAQ() {
    var faq = document.getElementById("faq");
    faq.style.display = faq.style.display === "none" || faq.style.display === "" ? "block" : "none";
}

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
    
})


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
showSlide(currentIndex);

function setLightMode() {
    document.body.classList.toggle('light-mode');
  }