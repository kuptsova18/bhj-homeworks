document.addEventListener('DOMContentLoaded', function () {
    const subscribe = document.getElementById('subscribe-modal');
    const closeBtn = subscribe.querySelector('.modal__close');

    const modalClosed = getCookie('modalClosed');
    console.log(getCookie('modalClosed'))

    if (modalClosed !== 'true') {
        subscribe.classList.add('modal_active');
    }
    

    closeBtn.addEventListener('click', function () {
        subscribe.classList.remove('modal_active');
        setCookie('modalClosed','true');
        
    });

    function setCookie(modalClosed,value){
        document.cookie = modalClosed +'=' + encodeURIComponent(value);
    }
    function getCookie(modalClosed){
        const pairs = document.cookie.split('; ');
        const cookies = pairs.find(p => p.startsWith(modalClosed + '='));
        return cookies.substring(modalClosed.length+1);
    }
});