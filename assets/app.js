const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    handleEvents: function () {
        const searchIcon = $('.search_icon');
        const wrapperSearch = $('.wrapper__search');

        searchIcon.onclick = () => {
            wrapperSearch.classList.toggle('hidden');
        };

        const menuItems = $$('.menu-sidebar a');
        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });

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

        const lazyLoadElements = $$('.wrapper__img__service, .img-choose-us');
        lazyLoadElements.forEach(el => observer.observe(el));
    },

    start: function () {
        this.handleEvents();
    }
};

app.start();
