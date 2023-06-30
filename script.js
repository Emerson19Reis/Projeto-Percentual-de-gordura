window.addEventListener('DOMContentLoaded', (event) => {
    const fileUpload = document.getElementById('file-upload');
    const imagePreview = document.getElementById('image-preview');
    const gorduraInfo = document.getElementById('gordura');
    const carneInfo = document.getElementById('carne');
    const naoDeterminadoInfo = document.getElementById('nao-determinado');

    fileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = document.createElement('img');
            image.src = e.target.result;
            imagePreview.innerHTML = '';
            imagePreview.appendChild(image);
        }

        reader.readAsDataURL(file);
    });
});
