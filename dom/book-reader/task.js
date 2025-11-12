document.addEventListener('DOMContentLoaded', function () {
    const bookElement = document.getElementById('book');
    const fontSizes = document.querySelectorAll('.font-size');
    //изменение размера текста
    fontSizes.forEach(fontSize => {
        fontSize.addEventListener('click', function (event) {
            event.preventDefault();
            //кружок
            fontSizes.forEach(el => el.classList.remove('font-size_active'));
            this.classList.add('font-size_active');
            //изменение размера
            bookElement.classList.remove('book_fs-small', 'book_fs-big');
            const size = this.dataset.size;
            if (size === "small") {
                bookElement.classList.add('book_fs-small');
            } else if (size === "big") {
                bookElement.classList.add('book_fs-big');
            }
        })
    })
    //изменение цвета текста
    const colorTexts = document.querySelectorAll('[data-text-color]');
    colorTexts.forEach(color => {
        color.addEventListener('click', function(event){
            event.preventDefault();
            colorTexts.forEach(el => el.classList.remove('color_active'));
            this.classList.add('color_active');
            bookElement.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
            const textColor = this.dataset.textColor;
            if (textColor) {
                bookElement.classList.add(`book_color-${textColor}`);
            }
        })
    })
    //изменение фона текста
    const bgColors = document.querySelectorAll('[data-bg-color]');
    bgColors.forEach(bgColor => {
        bgColor.addEventListener('click', function(event){
            event.preventDefault();
            colorTexts.forEach(el => el.classList.remove('color_active'));
            this.classList.add('color_active');
            bookElement.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
            const bgColor = this.dataset.bgColor;
            if (bgColor) {
                bookElement.classList.add(`book_bg-${bgColor}`);
            }
        })
    })
})

