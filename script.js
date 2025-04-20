
document.getElementById('generateButton').addEventListener('click', async function() {
    let prompt = document.getElementById('promptInput').value;
    if (!prompt) {
        alert('Por favor, escribe un prompt bien rico UwU');
        return;
    }

    try {
        const response = await fetch('https://api.horde.ai/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer AIzaSyDhHE3se8e6jyZR7fZRn81alfvHt3lTb-o'
            },
            body: JSON.stringify({ prompt: prompt })
        });

        const data = await response.json();
        const imageUrl = data.image_url;

        document.getElementById('imageContainer').innerHTML = `<img src="${imageUrl}" alt="Imagen generada">`;
        document.getElementById('downloadButton').style.display = 'inline-block';
        document.getElementById('downloadButton').addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'imagen_hentai_kawaii.png';
            link.click();
        });

    } catch (error) {
        console.error('Error al generar la imagen:', error);
        alert('Hubo un error al generar la imagen traviesa.');
    }
});
