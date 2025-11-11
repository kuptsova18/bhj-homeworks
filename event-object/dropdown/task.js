const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');
    valueElement.addEventListener("click", function (event) {
        event.stopPropagation();
        listElement.classList.toggle("dropdown__list_active");
    })

    items.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const link = this.querySelector('.dropdown__link');
            valueElement.textContent = link.textContent;
            listElement.classList.remove("dropdown__list_active");
        })
    })
})

