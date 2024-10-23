const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    handleEvents: function () {
        const getCurrentDay = () => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const dateInput = document.getElementById('date-input');
            const currentDate = `${year}-${month}-${day}`;

            dateInput.value = currentDate;
        }



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

        const lazyLoadElements = $$('.wrapper__img__service_spa, .wrapper_img_price, .wrapper__img__service_process, .content_img_spa_1, .content_img_spa_2, .content_img_spa_3, .content_img_spa_4, .combo1, .combo2, .combo3, .content-process-5');
        lazyLoadElements.forEach(el => observer.observe(el));
        getCurrentDay();
    },

    start: function () {
        this.handleEvents();
    }
}

app.start();