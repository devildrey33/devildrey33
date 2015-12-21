var Render;
var Escena;
var Camara;
var Serpiente;
/* Direcciones   */
/*  0 Arriba     */
/*  1 Derecha    */
/*  2 Abajo      */
/*  3 Izquierda  */
var Direccion = 1;

function IniciarNibblesGL() {
	var Ancho = window.innerWidth;
	var Alto = window.innerHeight;
	
	// Render
	Render = new THREE.WebGLRenderer();
	Render.setClearColor(0xCCCCCCC, 1);
	Render.setSize(Ancho, Alto);
	Render.domElement.style.position = 'absolute';
	
	document.getElementById("CanvasNibblesGL").appendChild(Render.domElement);
	
	// Escena
	Escena = new THREE.Scene();
	
	// Camara
	Camara = new THREE.PerspectiveCamera(60, Ancho / Alto, 1, 100);
	Camara.position.set(0, 0, 0);
	Camara.lookAt(Escena.position);
	Escena.add(Camara);	
	
	// Parrilla
	var geometry = new THREE.Geometry();

	geometry.vertices.push( new THREE.Vector3(-0.1, 0.1,  0.1 ) );
	geometry.vertices.push( new THREE.Vector3( 0.1, -0.1, 0.1 ) );
	geometry.vertices.push( new THREE.Vector3( 0.1, 0.1,  0.1 ) );
	geometry.vertices.push( new THREE.Vector3( -0.1, -0.1, -0.1 ) );

/*	for (var i = -1.0; i < 1.0; i += 0.1) {
		geometry.vertices.push( new THREE.Vector3( -1.0, i, -0.7 ) );
		geometry.vertices.push( new THREE.Vector3( 1.0, i, -0.7 ) );
	}*/
/*	var size = 500, step = 50;
	for ( var i = - size; i <= size; i += step ) {
		geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
		geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );
		geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
		geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );
	}*/
	var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );
	var line = new THREE.Line( geometry, material );
	line.type = THREE.LinePieces;
	Escena.add( line );				
	
	// Cuadrados
	var cuboMaterialesInicio = [
		new THREE.MeshBasicMaterial({color:0x000000}), // Lateral Dret
		new THREE.MeshBasicMaterial({color:0x000000}), // Lateral Esquerra
		new THREE.MeshBasicMaterial({color:0x000000}),
		new THREE.MeshBasicMaterial({color:0x000000}),
		new THREE.MeshBasicMaterial({color:0x000099}), // Cara frontal
		new THREE.MeshBasicMaterial({color:0x000000})
	];
	var cuboMateriales = [
		new THREE.MeshBasicMaterial({color:0x000000}), // Lateral Dret
		new THREE.MeshBasicMaterial({color:0x000000}), // Lateral Esquerra
		new THREE.MeshBasicMaterial({color:0x000000}),
		new THREE.MeshBasicMaterial({color:0x000000}),
		new THREE.MeshBasicMaterial({color:0x0000CC}), // Cara frontal
		new THREE.MeshBasicMaterial({color:0x000000})
	];
	var cuboMaterialInicio = new THREE.MeshFaceMaterial(cuboMaterialesInicio)
	var cuboMaterial = new THREE.MeshFaceMaterial(cuboMateriales)

	var cuboGeometria = new THREE.CubeGeometry(0.1, 0.1, 0.02);

	Serpiente = Array(
		new THREE.Mesh(cuboGeometria, cuboMaterialInicio),
		new THREE.Mesh(cuboGeometria, cuboMaterial),
		new THREE.Mesh(cuboGeometria, cuboMaterial),
		new THREE.Mesh(cuboGeometria, cuboMaterial)
	);

	Serpiente[0].position.set(0.0, 0.0, -7.0);
	Serpiente[1].position.set(-0.1, 0.0, -7.0);
	Serpiente[2].position.set(-0.2, 0.0, -7.0);
	Serpiente[3].position.set(-0.3, 0.0, -7.0);
	Escena.add(Serpiente[0]);
	Escena.add(Serpiente[1]);
	Escena.add(Serpiente[2]);
	Escena.add(Serpiente[3]);

	// Evento resize
	window.addEventListener( 'resize', onWindowResize, false );

	AnimarEscena();
	AvanzarSerpiente();
}

function AvanzarSerpiente() {
	for (var i = Serpiente.length - 1; i > 0; i--) {
		Serpiente[i].position.x = Serpiente[i - 1].position.x;
		Serpiente[i].position.y = Serpiente[i - 1].position.y;
	}
	switch (Direccion) {
		case 0 : Serpiente[0].position.y -= 0.1; break; // Arriba
		case 1 : Serpiente[0].position.x += 0.1; break; // Derecha
		case 2 : Serpiente[0].position.y += 0.1; break; // Abajo
		case 3 : Serpiente[0].position.x -= 0.1; break; // Izquierda
	}
	setTimeout(function() { AvanzarSerpiente(); }, 300);
}

function AnimarEscena() {
	Render.render(Escena, Camara);
	requestAnimationFrame(AnimarEscena);
}

function onWindowResize() {
	Camara.aspect = window.innerWidth / window.innerHeight;
	Camara.updateProjectionMatrix();
	Render.setSize( window.innerWidth, window.innerHeight );
}