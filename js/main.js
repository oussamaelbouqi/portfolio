// add class active to header on scroll

let header = document.querySelector("header")

window.onscroll = function(){
    if (this.scrollY >= 50) {
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

let nav_links = document.getElementById("links");

function Open_colose_Menu() {
    nav_links.classList.toggle("active")
}
function sendContact() {
    // اجلب القيم من الحقول
    var name = document.querySelector('input[placeholder="Full Name"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var phone = document.querySelector('input[placeholder="Mobile Number"]').value;
    var subject = document.querySelector('input[placeholder="Subject"]').value;
    var message = document.querySelector('textarea[placeholder="Your Message Here ..."]').value;

    // نص الرسالة
    var fullMessage = 
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Phone: " + phone + "%0A" +
        "Subject: " + subject + "%0A" +
        "Message: " + message;

    ///// رابط واتساب (ضع رقمك بدل 212711726768)
    var whatsappUrl = "https://wa.me/212711726768?text=" + encodeURIComponent(fullMessage) + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(fullMessage.replace(/%0A/g, "\n"));;

    // رابط mailto
    var mailtoUrl = "mailto:elbouqi.oussama@gmail.com"
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(fullMessage.replace(/%0A/g, "\n"));

    // افتح واتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');

    // افتح البريد في نافذة جديدة
    window.open(mailtoUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    const words = ["Web Developer", "Programmer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const speed = 120;
    const eraseSpeed = 60;
    const delay = 1200;
    const typedText = document.getElementById("typed-text");

    function type() {
        currentWord = words[i];
        if (!isDeleting) {
            typedText.textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
                setTimeout(type, delay);
                return;
            }
        } else {
            typedText.textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        }
        setTimeout(type, isDeleting ? eraseSpeed : speed);
    }
    if(typedText) type();
});
