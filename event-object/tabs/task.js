const tabsContainers = document.querySelectorAll(".tabs");

tabsContainers.forEach(initTabs);
    
function initTabs(tabsContainer) {
    const tabs = tabsContainer.querySelectorAll('.tab');
    const contents = tabsContainer.querySelectorAll('.tab__content');
    
    tabs.forEach((tab, index) =>{
        tab.addEventListener('click', function(){
            tabs.forEach(tabBth => tabBth.classList.remove('tab_active'));

            contents.forEach(contentBth => contentBth.classList.remove('tab__content_active'));

            this.classList.add('tab_active');

            contents[index].classList.add('tab__content_active')
        })
    })
}