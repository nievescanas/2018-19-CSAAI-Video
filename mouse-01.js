function video(name_video,width,height){
  this.video = document.getElementById(name_video);
  this.video.width = width;
  this.video.height = height;
  this.play = function(ubicacion){
    this.video.src = ubicacion;
  }
  this.audio = function(res){
    this.video.muted = res;
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

  video1.play("Mb.mp4")
  video2.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  video3.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")


  ver2.onclick = () => {
    //-- Indicar la fuente del vídeo
    video0.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }
  ver3.onclick = () => {
    //-- Indicar la fuente del vídeo
    video0.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }

  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    //-- Indicar la fuente del vídeo
    video0.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }
  ver2.onclick = () => {
    //-- Indicar la fuente del vídeo
    video0.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }
  ver3.onclick = () => {
    //-- Indicar la fuente del vídeo
    video0.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4")
  }

  ver1.onmouseover = () => {
    video1.audio(false);
  }
  ver1.onmouseout = () => {
    video1.audio(true);
  }
  ver2.onmouseover = () => {
    video2.audio(false);
  }
  ver2.onmouseout = () => {
    video2.audio(true);
  }
  ver3.onmouseover = () => {
    video3.audio(false);
  }
  ver3.onmouseout = () => {
    video3.audio(true);
  }
}
