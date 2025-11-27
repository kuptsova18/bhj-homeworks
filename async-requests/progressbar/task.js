const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');
const fileName = document.querySelector('.input__wrapper-desc');

fileInput.addEventListener('change', function(){
    if(this.files.length > 0){
        fileName.textContent = this.files[0].name;
    } else {
        fileName.textContent = 'Имя файла...';
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    

    if (!fileInput.files[0]) {
        alert('Пожалуйста, выберите файл');
        return;
    }
    
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function(e){

        if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total);
            progress.value = percentComplete;
        }
    });

    xhr.addEventListener('load', function() {
        if (xhr.status === 201) {
            alert('Файл успешно загружен!');

            progress.value = 1.0;
        } else {
            alert('Ошибка при загрузке файла');
            progress.value = 0.0;
        }
    });

    xhr.addEventListener('error', function() {
        alert('Произошла ошибка сети');

        progress.value = 0.0;
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
})