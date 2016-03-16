<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));
	
	$DeclaracionesHeadExtras = "
		<style type='text/css'>
            .TablaSoportadoTitulo {
                border-bottom:solid #CCCCCC 1px;
            }
            .TablaFotosEjemplos {
                border-left:solid #CCCCCC 1px;
            }
            .TablaSoportadoTituloR {
                border-bottom:solid #CCCCCC 1px;
                border-right:solid #CCCCCC 1px;
            }
            .TablaSoportadoTituloB {
                border-right:solid #CCCCCC 1px;
            }
            
            .TablaSoportado {
                padding: 4px 4px 4px 4px;
                border-right:solid #000000 2px;
                border-left:solid #000000 2px;
                border-top:solid #000000 2px;
                border-bottom:solid #000000 2px;
                -moz-border-radius-topleft: 8px;
                -moz-border-radius-topright: 8px;
                -moz-border-radius-bottomleft: 8px;
                -moz-border-radius-bottomright: 8px;
                -moz-box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 5px;
                -webkit-border-top-left-radius: 8px;
                -webkit-border-top-right-radius: 8px;
                -webkit-border-bottom-left-radius: 8px;
                -webkit-border-bottom-right-radius: 8px;
                -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
            }	
            .Soportado {
                color : green;
                text-align : center;
            }
        </style>";
	
	$Base->InicioPlantilla("BubaTronik : Formatos", $DeclaracionesHeadExtras);*/
	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Formatos BubaTronik">
        <meta name="keywords" content="Formatos BubaTronik">';

	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "BubaTronik : Formatos", $META);
        }
        
        $Base->InicioSinCabecera(basename(__FILE__), "BubaTronik : Formatos");

?>	

                <p>La siguiente tabla es una relación de los formatos soportados por BubaTronik</p>
                <table class='Tabla'>
                  <tr>
                    <th>Extensión</th>
                    <th>Descripción</th>
                    <th>Lista</th>
                    <th>Solo Audio</th>
                    <th>Audio + Video</th>
                  </tr>
                  <tr>
                    <td>ASF</td>
                    <td>Advanced Systems Format </td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>AMV</td>
                    <td>Formato AMV</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>AVI</td>
                    <td> Audio Video Interleaved. </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>CDA</td>
                    <td>CD Audio. </td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>DIVX</td>
                    <td>Codec de audio/video de la compañia DIVX.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>DV</td>
                    <td>Digital Video. </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>FLAC</td>
                    <td>Free Lossless Audio Codec</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>FLV</td>
                    <td>Flash Video.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>GXF</td>
                    <td>Motion Picture and Television Engineers format. </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>IT</td>
                    <td>Impulse Tracker</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>MID</td>
                    <td>Midi</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>MKV</td>
                    <td>Matroska Video. </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MOV</td>
                    <td>QuickTime Movie. </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MPE</td>
                    <td>Moving Picture Experts Group.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MPG</td>
                    <td> Moving Picture Experts Group.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MPEG</td>
                    <td>Moving Picture Experts Group.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MPEG1</td>
                    <td>Moving Picture Experts Group versión 1.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MPEG2</td>
                    <td>Moving Picture Experts Group versión 2.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MPEG4</td>
                    <td>Moving Picture Experts Group versión 4.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MP2</td>
                    <td> MPEG-1 Audio Layer-2.</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>MP3</td>
                    <td> MPEG-1 Audio Layer-3 . </td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>MP4</td>
                    <td>MPEG-4.</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MP4V</td>
                    <td>MPEG-4 Video.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MTS</td>
                    <td> MPEG transport stream  </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>MXF</td>
                    <td> Material eXchange Format </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>M1V</td>
                    <td>Moving Picture Experts Group versión 1.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>M2T</td>
                    <td>Contenedor de audio / video (Blu-ray) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>M2TS</td>
                    <td>Contenedor de audio / video (Blu-ray) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>M2V</td>
                    <td>Moving Picture Experts Group versión 2.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>M3U</td>
                    <td>Lista de medios M3U</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>M4V</td>
                    <td>Moving Picture Experts Group versión 4.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>OGG</td>
                    <td>Archivo contenedor multimedia (Xiph.org) </td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>OGM</td>
                    <td>Archivo contenedor multimedia (Xiph.org) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>OGV</td>
                    <td>Archivo contenedor multimedia (Xiph.org) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>OGX</td>
                    <td>Archivo contenedor multimedia (Xiph.org) </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>PS</td>
                    <td>Program Stream </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>RMVB</td>
                    <td> Real Media Variable Bitrate</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>SDP</td>
                    <td>Session Description Protocol File</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>S3M</td>
                    <td>Advanced module format</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>TOD</td>
                    <td>High definition video</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>TS</td>
                    <td>Transport Stream </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>VOB</td>
                    <td> DVD-Video Object </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>VRO</td>
                    <td>VRO</em> DVD-VR </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>WAV</td>
                    <td>Waveform Audio Format </td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>WEBM</td>
                    <td>Web  media file</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>WMA</td>
                    <td>Windows Media Audio </td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>WMV</td>
                    <td>Windows Media Video </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                  <tr>
                    <td>XM</td>
                    <td>eXtended Module</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>XVID</td>
                    <td>Libreria de codecs de video. </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><div class='Soportado'>soportado</div></td>
                  </tr>
                </table>
                <div class='Centrado'>
                    <a class="Boton-Normal" href="BubaTronik">Volver a la pagina principal de BubaTronik</a>
                </div>

<?php
    $Base->FinBlog(true);
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>