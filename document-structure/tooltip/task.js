const hasTooltips = document.querySelectorAll(".has-tooltip");

hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener('click', (e) => {
        e.preventDefault();
        const currentTarget = e.target;
        if (currentTarget._activeTooltip) {
            hideTooltip(currentTarget);
        }
        else {
            showTooltip(currentTarget, hasTooltip.getAttribute('title'));
        }
    }
    )
})

//скрытие всех подсказок
function hideAllTooltips() {
    document.querySelectorAll('.tooltip_active').forEach(tooltip => tooltip.remove());
    document.querySelectorAll('.has-tooltip').forEach(element => delete element._activeTooltip);
}

//скрытие конкретной подсказки
function hideTooltip(element) {
    if (element._activeTooltip) {
        element._activeTooltip.remove();
        delete element._activeTooltip;
    }
}

function showTooltip(element, title) {
    hideAllTooltips();
    const tooltip = document.createElement('div');
    //добавляем подсказку
    tooltip.textContent = title;
    tooltip.className = 'tooltip tooltip_active';
    element.appendChild(tooltip);
    //позиционируем
    const rect = element.getBoundingClientRect();
    const position = element.getAttribute('data-position')|| 'top';
    const scrollY = window.pageYOffset;
    const scrollX = window.pageXOffset;
    let left, top;
    switch(position) {
        case 'top':
            left = rect.left + scrollX;
            top = rect.top + scrollY - tooltip.offsetHeight;
            break;
        case 'bottom':
            left = rect.left + scrollX;
            top = rect.bottom + scrollY;
            break;
        case 'left':
            left = rect.left + scrollX - tooltip.offsetWidth;
            top = rect.top + scrollY + (rect.height - tooltip.offsetHeight) / 2;
            break;
        case 'right':
            left = rect.right + scrollX;
            top = rect.top + scrollY + (rect.height - tooltip.offsetHeight) / 2;
            break;
        default:
            left = rect.left + scrollX;
            top = rect.top + scrollY - tooltip.offsetHeight;
    }
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';

    element._activeTooltip = tooltip;
}