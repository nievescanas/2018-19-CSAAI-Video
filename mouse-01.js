function video(name_video,width,height){
  this.video = document.getElementById(name_video);
  this.video.width = width;
  this.video.height = height;
  this.play = function(ubicación){
    this.video.src = ubicación;
  }
}

function main()
{
  //-- Inicialización y construcción de los videos

  var video1 = new video('video1',200,100)
  var video2 = new video('video2',200,100)
  var video3 = new video('video3',200,100)
  var video0 = new video('video0',600,300)

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')



  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    //-- Indicar la fuente del vídeo
video0.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")

    video1.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }
  ver2.onclick = () => {
    //-- Indicar la fuente del vídeo
    video2.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }
  ver3.onclick = () => {
    //-- Indicar la fuente del vídeo
    video3.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }
}
