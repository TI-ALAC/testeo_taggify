const url = "https://ssp-connector-ds-api.taggify.net/AdService/ad?id_screen=6395&w=768&h=384";

async function init() {
  getUser();
}

init();
async function getUser(){
          
  // Obtener el JSON de la URL
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extraer la URL del video del JSON
      const videoUrl = data.media;

      // Obtener el reproductor de video
      const videoPlayer = document.getElementById('videoPlayer');

      // Establecer la fuente del video en el reproductor
      videoPlayer.src = videoUrl;
    })
    .catch(error => console.error('Error al obtener el JSON:', error));
}