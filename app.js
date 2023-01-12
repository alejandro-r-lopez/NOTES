const htmlButton = document.getElementById('html-button');
const cssButton = document.getElementById('css-button');
const jsButton = document.getElementById('js-button');

const htmlPage = document.getElementById('html-page');
const cssPage = document.getElementById('css-page');
const jsPage = document.getElementById('js-page');

htmlButton.addEventListener('click', () => {
    htmlPage.classList.toggle('page');
    cssPage.classList.add('page');
    jsPage.classList.add('page');
});

cssButton.addEventListener('click', () => {
    cssPage.classList.toggle('page');
    htmlPage.classList.add('page');
    jsPage.classList.add('page');
});

jsButton.addEventListener('click', () => {
    jsPage.classList.toggle('page');
    cssPage.classList.add('page');
    htmlPage.classList.add('page');
});
