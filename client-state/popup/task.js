document.addEventListener('DOMContentLoaded', function () {
    const subscribe = document.getElementById('subscribe-modal');
    const closeBtn = subscribe.querySelector('.modal__close');
    
    // Проверяем, было ли окно закрыто ранее
    const modalClosed = localStorage.getItem('modalClosed');
    
    // Если окно не было закрыто - показываем его
    if (modalClosed !== 'true') {
        subscribe.classList.add('modal_active');
    }
    
    // Обработчик закрытия окна
    closeBtn.addEventListener('click', function () {
        subscribe.classList.remove('modal_active');
        // Сохраняем информацию, что окно было закрыто
        localStorage.setItem('modalClosed', 'true');
    });
});