window.addEventListener('DOMContentLoaded', (event) => {
    const fileUpload = document.getElementById('file-upload');
    const imagePreview = document.getElementById('image-preview');
    const gorduraInfo = document.getElementById('gordura');
    const carneInfo = document.getElementById('carne');
    const naoDeterminadoInfo = document.getElementById('nao-determinado');
    const videoPreview = document.getElementById('video-preview');

    // Função para exibir a imagem no preview
    function displayImage(image) {
        imagePreview.innerHTML = '';
        imagePreview.appendChild(image);
    }

    // Evento de upload de arquivo
    fileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = document.createElement('img');
            image.src = e.target.result;
            displayImage(image);
        }

        reader.readAsDataURL(file);
    });

    // Função para tirar foto diretamente da câmera
    function captureImageFromCamera() {
        const constraints = { video: true };

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                videoPreview.style.display = 'block';
                videoPreview.srcObject = stream;

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                const captureBtn = document.getElementById('capture-btn');
                captureBtn.addEventListener('click', () => {
                    canvas.width = videoPreview.videoWidth;
                    canvas.height = videoPreview.videoHeight;
                    context.drawImage(videoPreview, 0, 0, canvas.width, canvas.height);

                    const image = document.createElement('img');
                    image.src = canvas.toDataURL('image/png');
                    displayImage(image);

                    videoPreview.style.display = 'none';
                    videoPreview.srcObject = null;
                    stream.getTracks().forEach(track => track.stop());
                });
            })
            .catch((error) => {
                console.error('Erro ao acessar a câmera: ', error);
            });
    }

    // Evento do botão "Processar"
    const processarBtn = document.getElementById('processar-btn');
    processarBtn.addEventListener('click', () => {
        // Chamar função de processamento da imagem aqui
        console.log('Processando imagem...');
    });

    // Evento do botão "Salvar"
    const salvarBtn = document.getElementById('salvar-btn');
    salvarBtn.addEventListener('click', () => {
        // Chamar função de salvar as informações no banco de dados aqui
        console.log('Salvando informações...');
    });

    // Evento do botão "Tirar foto"
    const captureBtn = document.getElementById('capture-btn');
    captureBtn.addEventListener('click', () => {
        captureImageFromCamera();
    });
});
