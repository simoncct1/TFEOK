
<template>
 <h1 id="part1">Jeunes années</h1> 
    <h1 id="part2" style="display:none">La tempête</h1>
    <h1 id="part3" style="display:none">Leningrad</h1>
   
<div id="overlay">
			<button id="startButton"><img src="/src/assets/play.png" alt=""></button>
	</div>

  <p id="1">
    Pour survire à la pauvreté, en plus de devoir revendre son piano, Shostakovich à commencé à jouer dans des cinéma. Il composera par la suite plusieurs musiques de film, notament vers la fin de sa vie où il a souffert d'une crise d'inspiration.
  </p>
   <p id="2">
    Difficile de savoir ce qu'il pouvait y avoir dans ses caisses. Des partitions surement, des livres et problablement un ou deux ballons de football, un sport dont Shostakovich était fan.
  </p>
   <p id="3">
    La période a été évidement dure pour la mère de shostakovich, qui devait affronter la mort de son mari et s'occuper de deux enfants dont un malade. Heureusement pour elle, elle a pu bénéficier du soutien des habitants de la maison commune dans laquelle ils ont déménagé.
  </p>
  <p id="4">
   Shostakovich a commencé très tôt à souffrir de maladies graves. Ca ne le quittera pas jusqu'à la fin de sa vie et il finira par en décéder.
  </p>
  <p id="5">
  On ne connait pas le contenu exact du discours de Shostakovich au Three Days Meeting. Il dira néanmoins dans ses correspondances qu'il en est ressorti humilié et épuisé.
  </p>
  <p id="6">
    Le directeur de l'union des compositeurs russes de l'époque avait une dent contre shostakovich. C'est d'ailleurs un des responsables de la parution de l'article à charge dans la pravda.
  </p>
  <p id="7">
    Nombreux sont les musiciens à s'être faits humilier pendant ses trois jours: Tous ont subi le même sort que Shostakovich, monter sur scène et s'auto humilier.
  </p>
  <p id="8">
  Certains disent que c'est Staline lui même qui a écrit l'article dans la Pravda. Cette information est très controversée.
  </p>
  <p id="9">
    Dans le contexte, de l'époque, on peut estimer que Shostakovich n'était pas le seul à vivre dans l'angoisse permanente, beaucoup ont quitté le pays. Les raisons qui l'ont poussé a resté en U.R.S.S dans ce climat sont floues.
  </p>
  <p id="10">
    Shostakovich se préparant à être enmené au goulag ou exécuté, on peut se demander pourquoi il avait pris une valise avec lui.
  </p>
<video id="video" playsinline webkit-playsinline muted loop autoplay width="320" height="240" src="/src\assets\glasses.mp4" style="display: none;"></video>
 <div id="player">
   <button id="stop" > Passer </button>
<video id="partie1" class="mainvid" controls playsinline webkit-playsinline autoplay  src="/src/assets/part1.mp4" style="display: none;" >  </video>
<video id="partie2"  class="mainvid" controls playsinline webkit-playsinline  autoplay  src="/src/assets/part2.mp4" style="display: none;" ></video>
<video id="partie3" class="mainvid" controls playsinline webkit-playsinlineautoplay  src="/src/assets/part3.mp4" style="display: none;" ></video>
 </div>
 <video id="generique" playsinline webkit-playsinline muted src="/src\assets\test.mp4"></video>
    <div id="app"></div>
    
</template>
<script>

  export default {
    
    data: () => ({
     
    }),
    mounted() {
      
      let threescript = document.createElement('script')
      threescript.setAttribute('src', './src/components/page2.js')
      threescript.setAttribute('type', 'module')
      document.head.appendChild(threescript)
    },
    methods: {
    
    }
  }
  
</script>
<style scoped>

.mainvid{
  width: 85% !important;
  height: auto;
 margin: auto 0px;
   transform: translate(-50%, -50%);
  position: absolute;
  top: 50% !important;
  left: 50% !important;
}
#player{
  display: flex;
  justify-content: center;
}
#flex{
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
}
body{
  background-color:black;
}
canvas#flex{
  background: black;
}
 h1, button{
   color: white;

    position: fixed;
    display: block;
    z-index: 99;
    left: 50%;
    top: 50%;
 }
  p{
  
     color: white;
     position: absolute;
    z-index: 98;
      top: 10;
     right: 0;
     bottom: 0;
     left: 0;
      font-size: 56px;
     font-family: "Time";
    margin: 0 auto;
    width: 80vw;
    min-height: 8vh;
     background-color: rgba(0, 0, 0, 0.854);
     padding: 30px 90px 90px 90px;
     border-top: 7px solid white;
      border-left: 7px solid white;
       border-right: 7px solid white;
       animation: 1s ease-out 0s 1 slideInFromRight forwards;
  }
 

@keyframes slideInFromRight {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
 #generique{
   color: white;

    position: absolute;
    display: block;
    z-index: 99;
    left:0;
    top:0;
    width: 100vw;
    height: auto;
 }
  #partie1, #partie2, #partie3{
   color: white;

    position: absolute;
    display: block;
    z-index: 99;
    left:0;
    top:0;
    width: 100vw;
    height: auto;
 }
#part2{
  color: white;
  font-size: 100px;
     font-family: "Time";
      position: absolute;
    display: block;
    z-index: 99;
      left:75vw;
      top:32vh;
       margin-right: 10vw;

      white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
        margin: auto;
        margin-top: 10vh;
}
#part3{
  color: white;
  font-size: 100px;
     font-family: "Time";
      position: absolute;
    display: block;
    z-index: 99;
   left:5vw;
    top:10vh;
        margin-left: 5vw;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
}
#part1{
  color: white;
  font-size: 100px;
     font-family: "Time";
      position: absolute;
    display: block;
    z-index: 99;
    left:0vw;
    top:70vh;
    margin-left: 5vw;
  
      white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
}
a, a:visited{
  color: white;
   text-decoration: none;
}
 button#startButton{
   background-color: black ;
    position: absolute;
    display: block;
    z-index: 199;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    font-size: 160px;
     font-family: "Time";

 }
   #stop {
      font-family: "Time";
     font-size: 80px;
     background-color: rgba(250, 235, 215, 0);
     border: none;
      position: fixed;
  top: 1%;
  left: 0.75vw;
  z-index: 300;
  display: none;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.461);
  border: 4px solid white;
  border-radius: 5%;
    }
 @font-face {
 font-family: "Time";
 src: url("src\assets\Timeline.otf") format("otf")
}
</style>