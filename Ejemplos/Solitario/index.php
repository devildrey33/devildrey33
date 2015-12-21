<!-- Ejemplo creado por Josep Antoni Bover Comas para devildrey33.es el 28/11/2015 
     Se distribuye bajo licencia Creative Commons. (http://es.creativecommons.org/blog/licencias/) 
     Versión 1.0
     Última modificación : 15/12/2015  
      TODO :
                - Hacer un set de cartas mas pequeño para resoluciones bajas.
                - Crear opcion para que juegue solo, para asi poder revisar algunos detalles de la IA.
                - Revisar la detección de la derrota, he visto alguna cosa rara... pero necesito ver mas..
 -->
<html>
    <head>
        <title>Solitario</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='stylesheet' type="text/css" href='Solitario.css' />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="Solitario.js" type="text/javascript"></script> 
    </head>
    <body>
    	<Tablero>
            <!-- Marco para mostrar los posibles movimientos y su valoración según la IA -->           
            <Opciones>
                <mMenu>
                    <input id='Input_Menu' type='checkbox' />
                    <label for='Input_Menu'></label>                    
                    <BotonMenu>
                        <IconoMenu></IconoMenu>
                    </BotonMenu>                    
                    <VentanaMenu>
                        <button>Nueva partida<br /><span>(N)</span></button>
                        <button>Des-hacer<br /><span>(Control+Z)</span></button>
                        <button>Re-hacer<br /><span>(Control+Y)</span></button>
                        <button>Ayuda<br /><span>(Espacio)</span></button>
                        <p>Creado por : <a href="http://devildrey33.es" target="_blank">Josep Antoni Bover</a>.</p>
                        <p>Diseño cartas : <a href="http://www.snap2objects.com/2012/01/free-vector-playing-cards-deck/" target="_blank">Charles</a>.</p>
                    </VentanaMenu>
                    
                    <input id='Input_Debug' type='checkbox' />
                    <label for='Input_Debug'></label>                    
                    <BotonMenu>
                        <IconoMenu></IconoMenu>
                    </BotonMenu>                    
                    <DebugIA>aaa
                    </DebugIA>
                    
                    
                </mMenu>
                <Movimientos>0</Movimientos>
            </Opciones>
            <Baraja num="1"></Baraja>
            <Baraja num="2"></Baraja>
            <Solucion num="1"></Solucion>
            <Solucion num="2"></Solucion>
            <Solucion num="3"></Solucion>
            <Solucion num="4"></Solucion>
            <Columna num="1"></Columna>
            <Columna num="2"></Columna>
            <Columna num="3"></Columna>
            <Columna num="4"></Columna>
            <Columna num="5"></Columna>
            <Columna num="6"></Columna>
            <Columna num="7"></Columna>
            <Columna num="0">
                <Carta id='ImgDrag' tapada='false'></Carta>
            </Columna>
            
            <Derrota>Has perdido!</Derrota>
            <Victoria>Has ganado!</Victoria>
            
        </Tablero>
    
        
    </body>
</html>