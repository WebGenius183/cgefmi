document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("hamburger");
        const menu = document.getElementById("menu");
        const buttons = document.getElementById("buttons");

        hamburger.addEventListener("click", function () {
            menu.classList.toggle("active");
            buttons.classList.toggle("active");
        });
    });


    function notifPopup(){
        const notif = document.querySelector('.card');
        notif.classList.toggle('active');
    }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')
            }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
