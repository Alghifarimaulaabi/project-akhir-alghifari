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

  //pemesanan
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('travelForm');
    const steps = document.querySelectorAll('.form-step');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const packageCards = document.querySelectorAll('.package-card');
    const packageSelectBtns = document.querySelectorAll('.select-btn');
    
    let currentStep = 1;
    let selectedPackage = {
        name: 'Bali Explorer',
        price: 'Rp 3.500.000'
    };

    // Initialize form
    showStep(currentStep);

    // Package selection
    packageCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            packageCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Update select button text
            const selectBtn = this.querySelector('.select-btn');
            packageSelectBtns.forEach(btn => {
                btn.textContent = 'Pilih';
                btn.style.backgroundColor = 'white';
                btn.style.color = 'var(--primary)';
                btn.style.border = '1px solid var(--primary)';
            });
            
            selectBtn.textContent = 'Dipilih';
            selectBtn.style.backgroundColor = 'var(--primary)';
            selectBtn.style.color = 'white';
            selectBtn.style.border = 'none';
            
            // Update selected package
            const packageName = this.querySelector('h3').textContent;
            const packagePrice = this.querySelector('.price').textContent;
            selectedPackage = {
                name: packageName,
                price: packagePrice
            };
        });
    });

    // Next button click
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
                updateStepIndicator(currentStep);
            }
        });
    });

    // Previous button click
    prevBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentStep--;
            showStep(currentStep);
            updateStepIndicator(currentStep);
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            // Update summary
            document.getElementById('summary-package').textContent = selectedPackage.name;
            document.getElementById('summary-date').textContent = document.getElementById('travelDate').value;
            document.getElementById('summary-participants').textContent = document.getElementById('participants').value + ' Orang';
            document.getElementById('summary-total').textContent = selectedPackage.price;
            
            currentStep++;
            showStep(currentStep);
            updateStepIndicator(currentStep);
        }
    });

    // Show current step
    function showStep(step) {
        steps.forEach(stepElement => {
            stepElement.classList.remove('active');
            if (parseInt(stepElement.dataset.step) === step) {
                stepElement.classList.add('active');
            }
        });
    }

    // Update step indicator
    function updateStepIndicator(step) {
        document.querySelectorAll('.step').forEach((stepElement, index) => {
            if (index + 1 < step) {
                stepElement.classList.add('completed');
                stepElement.classList.remove('active');
            } else if (index + 1 === step) {
                stepElement.classList.add('active');
                stepElement.classList.remove('completed');
            } else {
                stepElement.classList.remove('active', 'completed');
            }
        });
    }

    // Validate current step
    function validateStep(step) {
        let isValid = true;
        
        if (step === 1) {
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            if (!fullName || !email || !phone) {
                isValid = false;
                alert('Harap lengkapi semua informasi pribadi');
            }
        } else if (step === 3) {
            const travelDate = document.getElementById('travelDate').value;
            
            if (!travelDate) {
                isValid = false;
                alert('Harap pilih tanggal keberangkatan');
            }
        }
        
        return isValid;
    }
});