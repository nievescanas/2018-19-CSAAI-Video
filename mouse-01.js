
function video(name_video,width,height){
  this.video = document.getElementById(name_video);
  this.video.width = width;
  this.video.height = height;
  this.play = function(ubicacion, inicio){
    this.video.src = ubicacion;
    this.video.currentTime  =  inicio ;
  }
  this.audio = function(res){
    this.video.muted = res;
  }
  this.time = function(){
    return this.video.currentTime;
  }
  this.ubicacion = function(ubicacion, inicio){
    return this.video.src;
  }
}
function hora(segundos){
 var d=new Date(segundos*1000);
 // Ajuste de las 23 horas
 var hora = (d.getHours()==0)?23:d.getHours()-1;
 var hora = (hora<9)?"0"+hora:hora;
 var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
 var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
 return hora+":"+minuto+":"+segundo;
}

function main(){
  //-- Inicialización y construcción de los videos
  var video0 = new video('video0',600,300)
  var video1 = new video('video1',200,100)
  var video2 = new video('video2',200,100)
  var video3 = new video('video3',200,100)

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')
  //--
  time0 = document.getElementById('Time0')
  time1 = document.getElementById('Time1')
  time2 = document.getElementById('Time2')
  time3 = document.getElementById('Time3')

  play = document.getElementById('play')
  play.onclick = () => {
    document.getElementById('play').style.display = 'none';
    //-- Contador
    setInterval(()=>{
        time0.innerHTML = hora(0);
      },20);
    setInterval(()=>{
        time1.innerHTML = hora(video1.time());
      },20);
    setInterval(()=>{
        time2.innerHTML = hora(video2.time());
      },20);
    setInterval(()=>{
        time3.innerHTML = hora(video3.time());
      },20);

    //-- Play videos de selección
    video1.play("Mb.mp4",0)
    video2.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4",0)
    video3.play("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4",0)

    //-- Al apretar el boton de ver video
    ver1.onclick = () => {
      //-- Indicar la fuente del vídeo
      video0.play(video1.ubicacion(),video1.time())
    }
    ver2.onclick = () => {
      video0.play(video2.ubicacion(),video2.time())
    }
    ver3.onclick = () => {
      video0.play(video3.ubicacion(),video3.time())
    }

    //-- Salida de audio
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
}
