const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    handleEvents: function () {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const lazyLoadElements = $$('.wrapper__img__hotel, .wrapper__img_take_shower, .content_img_1, .content_img_2, .content_img_3, .content_img_4');
        lazyLoadElements.forEach(el => observer.observe(el));

        const getCurrentDay = () => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const dateInput = document.getElementById('date-input');
            const currentDate = `${year}-${month}-${day}`;

            dateInput.value = currentDate; 
        }

        getCurrentDay();
    },

    start: function () {
        this.handleEvents();
    }
}

app.start();