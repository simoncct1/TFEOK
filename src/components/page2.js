import * as THREE from "three";
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector';
import { Object3D } from "three";


let groundMirror, verticalMirror;
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x464646 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 200);
const coloor = 0x000000;  // white
const density = 0.043;
scene.fog = new THREE.FogExp2(coloor, density);
const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#flex'),
  alpha: true,

  antialias: true
});
scene.background = new THREE.Color( 0x000000 );
let geometrye, materiale;
const textureLoader = new THREE.TextureLoader();
const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
geometrye = new THREE.PlaneGeometry(1000,1000);
const texture3 = textureLoader.load( "/src/assets/floor.png" );
texture3.anisotropy = maxAnisotropy;
texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
texture3.repeat.set(20,20);

materiale = new THREE.MeshPhongMaterial({ color: 0x404040, map: texture3 });

const floor = new THREE.Mesh( geometrye, materiale );
floor.position.z = 1;
floor.position.x = 72;
floor.rotation.x= -Math.PI/2
scene.add(floor);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);



// const light = new THREE.PointLight( 0x464646,4, 160 );
// light.position.set( 20,110,0 );
// scene.add( light );

// const ulight = new THREE.PointLight( 0x464646, 4, 160 );
// ulight.position.set( -20, -110, 0 );
// scene.add( ulight );

const controls = new OrbitControls( camera, renderer.domElement );


camera.position.set( 0, 25 , 0 );
camera.rotation.y = 90 * Math.PI / 180
controls.target.set(0,0,0)

controls.update();
camera.rotation.y = Math.PI;
//generique
document.getElementById('generique').addEventListener('ended',myHandler,false);
function myHandler(e) {
	if(!e) { e = window.event; }
	// What you want to do after the event
	document.getElementById('generique').style.display="none";
   
}
var audio = new Audio('/src/assets/bck.mp3');
audio.loop = true;
//video texture
const generique = document.getElementById('generique');

const video = document.getElementById( 'video' );
const videoTexture = new THREE.VideoTexture(video);
const videoMaterial =  new THREE.MeshBasicMaterial( {map: videoTexture, side: THREE.FrontSide, toneMapped: false} );
//Create screen
const screen = new THREE.CircleGeometry(2, 32);
const videoScreen = new THREE.Mesh(screen, videoMaterial);
const videoScreen2 = new THREE.Mesh(screen, videoMaterial);
scene.add(videoScreen, videoScreen2);
videoScreen.position.set(3, 15.5,0);
videoScreen.rotateX( - Math.PI / 2 );
videoScreen2.position.set(-3, 15.5, 0);
videoScreen2.rotateX( - Math.PI / 2 );
const startButton = document.getElementById( 'startButton' );
			startButton.addEventListener( 'click', function () {

			launchVid();

			} );
	function launchVid(){
		generique.play();
		audio.play();
		audio.volume = 0.1;
				video.play();
				video.addEventListener( 'play', function () {

					this.currentTime = 3;
					startButton.style.display="none";	
				} );

	}
	var played1 = false;
	var played2 = false;
	const partie1 = document.getElementById( 'partie1' );
	const partie2 = document.getElementById( 'partie2' );
	const partie3 = document.getElementById( 'partie3' );
	const part1 = document.getElementById( 'part1' );
	
			part1.addEventListener( 'click', function () {
			
			launchPart1();
			document.querySelector('h1').style.display="none";
			} );
	const part2 = document.getElementById( 'part2' );
			part2.addEventListener( 'click', function () {
				
			launchPart2();
			document.querySelector('h1').style.display="none";
			document.querySelector('#part2').style.display="none";
			} );
	const part3 = document.getElementById( 'part3' );
			part3.addEventListener( 'click', function () {
				
			launchPart3();
			document.querySelector('h1').style.display="none";
			document.querySelector('#part2').style.display="none";
			document.querySelector('#part3').style.display="none";
			} );
			const  closeBtn = document.getElementById("stop");
	function launchPart1(){
	 partie1.style.display = "block";
		partie1.play();
		partie1.addEventListener( 'play', function () {
			audio.pause();
			arrow1.visible= true;
			const  closeBtn = document.getElementById("stop");
			closeBtn.style.display = "block";
			closeBtn.addEventListener("click", function () {
			 partie1.pause();
			 partie1.currentTime = 10000;
			 closeBtn.style.display = "none";
			})
					startButton.style.display="none";	
				} );
				partie1.addEventListener( 'ended', function () {
					audio.play();
					document.getElementById('part1').style.display="block";
					partie1.style.display="none";	
					arrow1.visible = true;
					played1 = true;
					 part2.style.display = "block";
					 closeBtn.style.display = "none";
				} );
		
	}
	function launchPart2(){
		partie2.style.display = "block";
		   partie2.play();
		   audio.pause();
		   partie2.addEventListener( 'play', function () {
			const  closeBtn = document.getElementById("stop");
			closeBtn.style.display = "block";
			closeBtn.addEventListener("click", function () {
			 partie2.pause();
			 partie2.currentTime = 10000;
			 closeBtn.style.display = "none";
			})
					   startButton.style.display="none";	
				   } );
				   partie2.addEventListener( 'ended', function () {
					arrow2.visible = true;
					played2 = true;
					   partie2.style.display="none";	
					   part3.style.display = "block";
					   document.getElementById('part1').style.display="block";
					   document.getElementById('part2').style.display="block";
					   audio.play();
					   closeBtn.style.display = "none";
				   } );
		   
	   }
	   function launchPart3(){
		partie3.style.display = "block";
		audio.pause();
		   partie3.play();
		   partie3.addEventListener( 'play', function () {
			const  closeBtn = document.getElementById("stop");
			closeBtn.style.display = "block";
			closeBtn.addEventListener("click", function () {
			 partie3.pause();
			 partie3.currentTime = 10000;
			 closeBtn.style.display = "none";
			})
					   startButton.style.display="none";	
				   } );
				   partie3.addEventListener( 'ended', function () {
					   console.log("cc")
					arrow3.visible = true;
					partie3.style.display="none";	
					audio.play();
					document.getElementById('part1').style.display="block";
					   document.getElementById('part2').style.display="block";
					   document.getElementById('part3').style.display="block";
					   closeBtn.style.display = "none";
					  
				   } );
		   
	   }


	  
			// reflectors/mirrors

		let geometry, material;

		geometry = new THREE.PlaneGeometry( 50, 50 );
		groundMirror = new Reflector( geometry, {
			clipBias: 1.008,
			textureWidth: window.innerWidth * window.devicePixelRatio,
			textureHeight: window.innerHeight * window.devicePixelRatio,
			color: 0x333333
		} );

	//miror
		groundMirror.position.y = 0;
groundMirror.position.x = 10;
		groundMirror.rotateX( - Math.PI / 2 );
		// scene.add( groundMirror );


		

		//ligths
	var mainRGB = 0x444444;
	var intensity = 0.3;
material = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x666666 } );
const mainLight = new THREE.PointLight( mainRGB, intensity, 700 );
		mainLight.position.y = 3.7;

		scene.add( mainLight );

		const mainLight22 = new THREE.PointLight( mainRGB, intensity, 1500 );
		mainLight22.position.y = 12.7;
mainLight22.position.z = -1.5;
		scene.add( mainLight22 );

		// const mainLightElevator = new THREE.PointLight( mainRGB, intensity, 700 );
		// mainLightElevator.position.y = 8.5;
		// mainLightElevator.position.x = 6;
		// scene.add( mainLightElevator );

		// const mainLightElevatorColored = new THREE.PointLight( mainRGB, intensity, 700 );
		// mainLightElevatorColored.position.x = 6;
		// mainLightElevatorColored.position.y = 15;
		// mainLightElevatorColored.position.z = 1;
		// scene.add( mainLightElevatorColored );


		const mainSuitcase = new THREE.PointLight( 0x202020, 3.6, 23200 );
		mainSuitcase.position.x = 72.5;
		mainSuitcase.position.z =0;
		mainSuitcase.position.y = 15.9;
		scene.add( mainSuitcase );
		const mainSuitcase2 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		mainSuitcase2.position.x = 92.5;
		mainSuitcase2.position.z =0;
		mainSuitcase2.position.y = 15.9;
		scene.add( mainSuitcase2 );
		const mainSuitcase3 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		mainSuitcase3.position.x =72.5;
		mainSuitcase3.position.z =20;
		mainSuitcase3.position.y = 15.9;
		scene.add( mainSuitcase3 );
		const mainSuitcase4 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		mainSuitcase4.position.x =72.5;
		mainSuitcase4.position.z =-20;
		mainSuitcase4.position.y = 15.9;
		scene.add( mainSuitcase4 );
		const mainSuitcase5 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		mainSuitcase5.position.x =52.5;
		mainSuitcase5.position.z =0;
		mainSuitcase5.position.y = 15.9;
		scene.add( mainSuitcase5 );

		const ainSuitcase = new THREE.PointLight( 0x202020, 3.6, 23200 );
		ainSuitcase.position.x = -40;
	ainSuitcase.position.z =-70;
		ainSuitcase.position.y = 15.9;
		scene.add( ainSuitcase );
		const ainSuitcase2 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		ainSuitcase2.position.x = -60;
		ainSuitcase2.position.z =-70;
		ainSuitcase2.position.y = 15.9;
		scene.add( ainSuitcase2 );
		const ainSuitcase3 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		ainSuitcase3.position.x =-20;
		ainSuitcase3.position.z =-70;
		ainSuitcase3.position.y = 15.9;
		scene.add( ainSuitcase3 );
		const ainSuitcase4 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		ainSuitcase4.position.x =-40;
		ainSuitcase4.position.z =-90;
		ainSuitcase4.position.y = 15.9;
		scene.add( ainSuitcase4 );
		const ainSuitcase5 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		ainSuitcase5.position.x =-40;
		ainSuitcase5.position.z =-50;
		ainSuitcase5.position.y = 15.9;
		scene.add( ainSuitcase5 );
	
		const inSuitcase = new THREE.PointLight( 0x202020, 3.6, 23200 );
		inSuitcase.position.x = -40;
	inSuitcase.position.z =70;
		inSuitcase.position.y = 15.9;
		scene.add(inSuitcase );
		const inSuitcase2 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		inSuitcase2.position.x = -60;
		inSuitcase2.position.z =70;
		inSuitcase2.position.y = 15.9;
		scene.add( inSuitcase2 );
		const inSuitcase3 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		inSuitcase3.position.x =-20;
		inSuitcase3.position.z =70;
		inSuitcase3.position.y = 15.9;
		scene.add( inSuitcase3 );
		const inSuitcase4 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		inSuitcase4.position.x =-40;
		inSuitcase4.position.z =90;
		inSuitcase4.position.y = 15.9;
		scene.add( inSuitcase4 );
		const inSuitcase5 = new THREE.PointLight( 0x202020, 3.6, 13200 );
		inSuitcase5.position.x =-40;
		inSuitcase5.position.z =50;
		inSuitcase5.position.y = 15.9;
		scene.add( inSuitcase5 );
	

const alight = new THREE.AmbientLight( 0x404040, 3.5, 3800 ); // soft white light
alight.position.y = 2;
scene.add( alight );
			
        //glb's

const loader = new GLTFLoader();
var wheel= new THREE.Object3D();
var wheel2= new THREE.Object3D();
var wheel3= new THREE.Object3D();
var wheel4= new THREE.Object3D();
var elevator= new THREE.Object3D();
var wires= new THREE.Object3D();
var suitcase= new THREE.Object3D();
var wall= new THREE.Object3D();
var arrow1= new THREE.Object3D();
var arrow2= new THREE.Object3D();
var arrow3= new THREE.Object3D();
var glasses= new THREE.Object3D();
var piano= new THREE.Object3D();
var mum= new THREE.Object3D();
var child= new THREE.Object3D();
var caisses= new THREE.Object3D();
var feuilles= new THREE.Object3D();
var musicien= new THREE.Object3D();
var chef= new THREE.Object3D();
var pravda = new THREE.Object3D();
var shosta = new THREE.Object3D();
loader.load( './src/assets/layingS.glb', function ( gltf ) {
  gltf.scene.scale.set(0.7, 0.7, 0.7);
gltf.scene.position.x = 70;
gltf.scene.position.z = -5.1;
	scene.add( gltf.scene );
shosta = gltf.scene.getObjectByName( "shosta", true );
}, undefined, function ( error ) {

	console.error( error );

} );
console.log(shosta);
console.log(feuilles);
loader.load( './src/assets/elevator.glb', function ( gltf ) {
	elevator = gltf.scene;
	
	gltf.scene.position.x = 76;
	gltf.scene.position.y = -0.28;
	gltf.scene.position.z = 1;
	elevator.rotation.y = Math.PI;
	  scene.add( gltf.scene );

  
  }, undefined, function ( error ) {
  
	  console.error( error );
  
  } );


loader.load( './src/assets/arrow.glb', function ( gltf ) {
	gltf.scene.scale.set(2,2,2);
	gltf.scene.position.y = 5.5;
	scene.add( gltf.scene );
	arrow1 = gltf.scene.getObjectByName( "arrow1", true );
	arrow2 = gltf.scene.getObjectByName( "arrow2", true );
	arrow3 = gltf.scene.getObjectByName( "arrow3", true );
    arrow1.visible = false;
	arrow2.visible = false;
	arrow3.visible = false;
}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( './src/assets/glasses.glb', function ( gltf ) {

	gltf.scene.position.y = 12.9;
	gltf.scene.rotation.y = -Math.PI/2;
	
	glasses= gltf.scene;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
  
loader.load( './src/assets/suitcase.glb', function ( gltf ) {
	gltf.scene.scale.set(3, 3, 3);
	suitcase = gltf.scene;
	gltf.scene.position.x = 72.5;
	gltf.scene.position.z = 5.9;
	suitcase.rotation.y = 4;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
loader.load( './src/assets/chairs.glb', function ( gltf ) {
	gltf.scene.scale.set(1.5,1.5,1.5);
	gltf.scene.position.z= -70;
	gltf.scene.position.x= -45;
	  scene.add( gltf.scene );
  
	  chef = gltf.scene.getObjectByName( "chef", true );
	  musicien = gltf.scene.getObjectByName( "musicien", true );
	  feuilles = gltf.scene.getObjectByName( "feuilles", true );

	}, undefined, function ( error ) {
	
	  console.error( error );
	
	} );
	loader.load( './src/assets/facade.glb', function ( gltf ) {
		gltf.scene.scale.set(1.5,1.5,1.5);
		gltf.scene.position.z= 70;
		gltf.scene.position.x= -45;
		  scene.add( gltf.scene );
		  piano = gltf.scene.getObjectByName( "piano", true );
		  caisses = gltf.scene.getObjectByName( "caisses", true );
		  child = gltf.scene.getObjectByName( "child", true );
		mum = gltf.scene.getObjectByName( "mum", true );

		}, undefined, function ( error ) {
		
		  console.error( error );
		
		} );
loader.load( './src/assets/floor.glb', function ( gltf ) {
	gltf.scene.scale.set(1, 1, 1.4);
	wall = gltf.scene;
	gltf.scene.position.x = 72;
	gltf.scene.position.z = -6;
	
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( './src/assets/chair.glb', function ( gltf ) {
	gltf.scene.scale.set(1.2, 1.2, 1.2);
	gltf.scene.position.x = 65.5;
	gltf.scene.position.z = 6;
	gltf.scene.rotation.y= -Math.PI/2;
	
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
loader.load( './src/assets/pravda.glb', function ( gltf ) {
	gltf.scene.scale.set(1.2, 1.2, 1.2);
	
	gltf.scene.position.x = 72;
	gltf.scene.position.z = -6;
	
	
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

  //interaction
  window.addEventListener('click', onDocumentMouseDown, false);

  window.addEventListener('mousemove', onHover, false);

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
function onHover() {

	var intersects = raycaster.intersectObjects(scene.children, true);
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
	raycaster.setFromCamera(mouse, camera);
	if (intersects.length > 0 && intersects[0].object.name == "piano") {
		document.getElementById("1").style.display = "block";
	}
	else{
		document.getElementById("1").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "caisses") {
		document.getElementById("2").style.display = "block";
	}
	else{
		document.getElementById("2").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "mum") {
		document.getElementById("3").style.display = "block";
	}
	else{
		document.getElementById("3").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "child") {
		document.getElementById("4").style.display = "block";
	}
	else{
		document.getElementById("4").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "feuilles") {
		document.getElementById("5").style.display = "block";
	}
	else{
		document.getElementById("5").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "chef") {
		console.log("xx");
		document.getElementById("6").style.display = "block";
	}
	else{
		document.getElementById("6").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "musicien") {
		document.getElementById("7").style.display = "block";
	}
	else{
		document.getElementById("7").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "pravda") {
		document.getElementById("8").style.display = "block";
		console.log("cc");
	}
	else{
		document.getElementById("8").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "chair") {
		document.getElementById("9").style.display = "block";
		console.log("cc");
	}
	else{
		document.getElementById("9").style.display = "none";	
	}
	if (intersects.length > 0 && intersects[0].object.name == "suitcase") {
		document.getElementById("10").style.display = "block";
		console.log("cc");
	}
	else{
		document.getElementById("10").style.display = "none";	
	}
}

function onDocumentMouseDown() {
 
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
	raycaster.setFromCamera(mouse, camera);
  
	var intersects = raycaster.intersectObjects(scene.children, true);

	if (intersects.length > 0 && intersects[0].object.name == "arrow2" && arrow2.visible == true ) {
	  moveToTwo();
	  
	}
	if (intersects.length > 0 && intersects[0].object.name == "arrow3" && arrow3.visible == true ) {
		moveToThree();
		
	  }
	  if (intersects.length > 0 && intersects[0].object.name == "arrow1" && arrow1.visible == true ) {
		moveToOne();
		
	  }
	  if (intersects.length > 0 && intersects[0].object.name == "arrowok") {
		moveToStart();
		console.log("cc");
	  }
  }

  function moveToTwo(){

	const coords = { x: camera.position.x, y: camera.position.y };
	new TWEEN.Tween(coords)
	.to({ x: 70, y: 35 })
	.onUpdate(() =>
	  camera.position.set(coords.x, coords.y, 0)
	)
	.start();
	controls.target.set( 70, -5 , 5 );
	document.getElementById("part1").style.display = "none"
	document.getElementById("part2").style.display = "none"
	document.getElementById("part3").style.display = "none"
  }
  //animation
  function moveToThree(){

	const coords = { x: camera.position.x, y: camera.position.y, z: camera.position.z  };
	new TWEEN.Tween(coords)
	.to({ x: -40, y: 35, z:-70 })
	.onUpdate(() =>
	  camera.position.set(coords.x, coords.y, coords.z)
	)
	.start();
	controls.target.set( -40, 0 , -70 );
	document.getElementById("part1").style.display = "none"
	document.getElementById("part2").style.display = "none"
	document.getElementById("part3").style.display = "none"
  }
  function moveToOne(){

	const coords = { x: camera.position.x, y: camera.position.y, z: camera.position.z  };
	new TWEEN.Tween(coords)
	.to({ x: -30, y: 35, z:70 })
	.onUpdate(() =>
	  camera.position.set(coords.x, coords.y, coords.z)
	)
	.start();
	controls.target.set( -40, 0 , 70 );
	document.getElementById("part1").style.display = "none"
	document.getElementById("part2").style.display = "none"
	document.getElementById("part3").style.display = "none"
  }
  function moveToStart(){

	const coords = { x: camera.position.x, y: camera.position.y, z: camera.position.z  };
	new TWEEN.Tween(coords)
	.to({ x: 0, y: 25, z:0 })
	.onUpdate(() =>
	  camera.position.set(coords.x, coords.y, coords.z)
	)
	.start();
	controls.target.set( 0, 0 , 0 );
	document.getElementById("part1").style.display = "block"
	if(played1==true){
	document.getElementById("part2").style.display = "block";
	}
	if(played2==true){
	document.getElementById("part3").style.display = "block";
	}
  }
function animate(){
  requestAnimationFrame( animate );
	controls.update(); 
	wheel.rotation.z += 0.01;
	wheel2.rotation.z += 0.01;
	// if(up == false){
	// getup();
	// }
	// else if(up == true){
	// nevermind();
	// }
	TWEEN.update();
  renderer.render(scene, camera);
}



animate();