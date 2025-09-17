// add class active to header on scroll
let header = document.querySelector("header");

// Optimized scroll event with requestAnimationFrame
let lastScrollY = 0;
let ticking = false;

window.addEventListener('scroll', function() {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            if (lastScrollY >= 50) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
            ticking = false;
        });
        
        ticking = true;
    }
});

let nav_links = document.getElementById("links");

function Open_colose_Menu() {
    nav_links.classList.toggle("active");
}

// Typing effect for the main heading with alternating words
document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        const words = ["Développeur web", "programmeur"];
        let currentWordIndex = 0;
        typedTextElement.textContent = '';
        
        function typeWord(word) {
            let i = 0;
            const typeInterval = setInterval(function() {
                if (i < word.length) {
                    typedTextElement.textContent += word.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(eraseWord, 2000); // Wait before erasing
                }
            }, 100);
        }
        
        function eraseWord() {
            let text = typedTextElement.textContent;
            const eraseInterval = setInterval(function() {
                if (text.length > 0) {
                    text = text.substring(0, text.length - 1);
                    typedTextElement.textContent = text;
                } else {
                    clearInterval(eraseInterval);
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    setTimeout(function() {
                        typeWord(words[currentWordIndex]);
                    }, 500); // Wait before typing next word
                }
            }, 50);
        }
        
        setTimeout(function() {
            typeWord(words[currentWordIndex]);
        }, 1000);
    }
});
function sendContact() {
    // جلب القيم
    var name = document.getElementById('nameInput').value.trim();
    var email = document.getElementById('emailInput').value.trim();
    var phone = document.getElementById('phoneInput').value.trim();
    var subject = document.getElementById('subjectInput').value.trim();
    var message = document.getElementById('messageInput').value.trim();

    // جلب سبانات الأخطاء
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var subjectError = document.getElementById('subjectError');
    var messageError = document.getElementById('messageError');

    // إعادة تعيين الأخطاء
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if (!name) {
        nameError.textContent = "Veuillez saisir votre nom complet.";
        valid = false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = "Veuillez saisir votre adresse e-mail.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Adresse e-mail invalide.";
        valid = false;
    }
    var phonePattern = /^\+?\d+$/;
    if (!phone) {
        phoneError.textContent = "Veuillez saisir votre numéro de téléphone.";
        valid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Numéro invalide (chiffres et + seulement)";
        valid = false;
    }
    if (!subject) {
        subjectError.textContent = "Veuillez saisir le sujet.";
        valid = false;
    }
    if (!message) {
        messageError.textContent = "Veuillez écrire votre message.";
        valid = false;
    }

    if (!valid) return;

    // إعداد الرسالة
    var body =
        "Bonjour,%0A%0A" +
        "Vous avez reçu un nouveau message depuis le portfolio :%0A%0A" +
        "Nom : " + name + "%0A" +
        "Email : " + email + "%0A" +
        "Téléphone : " + phone + "%0A" +
        "Sujet : " + subject + "%0A%0A" +
        "Message :%0A" + message + "%0A%0A" +
        "Cordialement,%0ALe site portfolio";

    var gmailUrl = "https://mail.google.com/mail/?view=cm&to=elbouqi.oussama@gmail.com"
        + "&su=" + encodeURIComponent(subject)
        + "&body=" + body;

    var whatsappMessage =
        "Nom : " + name + "\n" +
        "Email : " + email + "\n" +
        "Téléphone : " + phone + "\n" +
        "Sujet : " + subject + "\n" +
        "Message : " + message;
    var whatsappUrl = "https://wa.me/212711726768?text=" + encodeURIComponent(whatsappMessage);

    // عرض النافذة المنبثقة للاختيار
    var modal = document.getElementById('sendModal');
    modal.style.display = 'flex';

    document.getElementById('sendGmail').onclick = function() {
        window.open(gmailUrl, '_blank');
        modal.style.display = 'none';
    };
    document.getElementById('sendWhatsapp').onclick = function() {
        window.open(whatsappUrl, '_blank');
        modal.style.display = 'none';
    };
}

// لإرجاع placeholder الأصلي عند الكتابة
document.addEventListener("DOMContentLoaded", function() {
    var fields = [
        {el: document.querySelector('input[placeholder="Nom Complet"]'), ph: "Nom Complet"},
        {el: document.querySelector('input[placeholder="Email"]'), ph: "Email"},
        {el: document.querySelector('input[placeholder="Numéro de téléphone"]'), ph: "Numéro de téléphone"},
        {el: document.querySelector('input[placeholder="Sujet"]'), ph: "Sujet"},
        {el: document.querySelector('textarea[placeholder="Votre message ici ..."]'), ph: "Votre message ici ..."}
    ];
    fields.forEach(function(field) {
        if (field.el) {
            field.el.addEventListener("input", function() {
                field.el.placeholder = field.ph;
            });
        }
    });
    var phoneInput = document.querySelector('input[placeholder="Numéro de téléphone"]');
    if (phoneInput) {
        phoneInput.addEventListener("input", function(e) {
            // يسمح فقط بالأرقام و+ في البداية
            let value = phoneInput.value;
            value = value.replace(/[^0-9+]/g, '');
            // لا يسمح بأكثر من + واحدة وفي البداية فقط
            value = value.replace(/(?!^)\+/g, '');
            if (value.indexOf('+') > 0) value = value.replace(/\+/g, '');
            phoneInput.value = value;
        });
    }
});

