document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const showLessButtons = document.querySelectorAll('.show-less');

    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const fullArticle = this.parentElement.querySelector('.full-article');
            const showLessButton = this.parentElement.querySelector('.show-less');
            fullArticle.classList.toggle('d-none');
            showLessButton.classList.toggle('d-none');
            this.classList.add('d-none');
        });
    });

    showLessButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const fullArticle = this.parentElement.querySelector('.full-article');
            const readMoreButton = this.parentElement.querySelector('.read-more');
            fullArticle.classList.add('d-none');
            readMoreButton.classList.remove('d-none');
            this.classList.add('d-none');
        });
    });
});
