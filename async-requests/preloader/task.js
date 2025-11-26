var xhr = new XMLHttpRequest();
const loaderActive = document.querySelector('.loader');
const item = document.querySelector('.item');
const items = document.getElementById('items');
let countInsert = 0;
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.responseText);
        const valutes = data.response.Valute;
        items.innerHTML = '';
       for (let key in valutes) {
            const currency = valutes[key];
            if(countInsert===0){
                countInsert ++;
               item.insertAdjacentHTML('afterBegin', 
                `<div class="item__code">
                        ${currency.CharCode}
                    </div>
                    <div class="item__value">
                        ${currency.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                `); 
            } else {
                items.insertAdjacentHTML('beforeend', 
                `<div class="item">
                    <div class="item__code">
                        ${currency.CharCode}
                    </div>
                    <div class="item__value">
                        ${currency.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`);
            }
            
        }
        loaderActive.classList.remove('loader_active');
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.send();