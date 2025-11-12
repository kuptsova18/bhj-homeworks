function initRotators(){
    const Rotators = document.querySelectorAll(".rotator");
    Rotators.forEach(rotator =>{
        const cases = document.querySelectorAll(".rotator__case");
        let currentCaseIndex = 0;
        
        function rotateCase(){
            cases[currentCaseIndex].classList.remove("rotator__case_active");
            currentCaseIndex = (currentCaseIndex+1)%cases.length;
            const activeCase = cases[currentCaseIndex];
            activeCase.classList.add("rotator__case_active");
            const speed = activeCase.dataset.speed||'1000';
            activeCase.style.color = activeCase.dataset.color||'inherit';
            setTimeout(rotateCase,speed);
        }
       
        setInterval(rotateCase,1000);
    })
}
document.addEventListener('DOMContentLoaded', initRotators);
