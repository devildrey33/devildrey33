<?php 
	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="SQLLite C++">
        <meta name="keywords" content="SQL, SQLLite, SQL C++, SQLLite C++, SQLLite Visual Studio, SQLLite VisualStudio">';

	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Empezando con SQLite en C++", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Empezando con SQLite en C++");

/*        echo "<pre>";
        echo print_r($_POST);
        echo "</pre>";*/
        ?>	
    

        <!-- INTRODUCCION -->
        <img class="ImagenPortada" src="/Web/Graficos/250x200_Sqlite.png" alt="Varios Menus" />
        <p>Últimamente estoy inmerso en un proyecto C++ que requiere una base de datos y me decidí por probar SQLite, y a decir verdad la documentación que hay sobre el tema es algo escasa, por ello voy a aportar mi granito de arena creando una aplicación de prueba en la cual se creara una base de datos con una tabla, y luego se usara esta base de datos para leer y escribir datos en ella.</p>
        <p>La intención es ver como podemos añadir a un proyecto en C++ una base de datos SQL y como trabajar con ella.</p>
        <p>SQLite se puede usar tanto de forma dinamica como estática, es decir con una dll externa o compilando el código dentro de nuestra aplicación. En este documento solo mostraré como compilar SQLite dentro de nuestra aplicación de forma estática.</p>
        <!-- FIN_INTRODUCCION -->
        <div class='nota'>El código de ejemplo está hecho para compilar en <a href="http://www.visualstudio.com/es-es/visual-studio-homepage-vs.aspx" target="_blank" title="Enlace a VisualStudio Express 2013 (Gratuito)">VisualStudio 2013</a>.</div>
        <p>En primer lugar debemos descargar el código de SQLite desde el siguiente enlace : <a href="http://www.sqlite.org/download.html" target="_blank">SQLite Home</a>.</p>
        <p>Yo os recomiendo descargar la última versión de sqlite-amalgamation, que básicamente consta de una cabecera 'h' y un archivo de código 'c'. El termino amalgamation se refiere a que todo el código esta agrupado en un solo archivo 'c', por lo que resulta mucho mas fácil añadir SQLite a cualquier proyecto.</p>

                        <br />
        <h2>Añadiendo SQLite a nuestro proyecto</h2>                
        <p>Con el SQLite descargado ya podemos crear el proyecto, para este caso yo utilizare una aplicación de consola, y de esta forma me ahorrare bastante código para el interface gráfico.</p>
        <p>Una vez creado el proyecto descomprimimos el zip del SQLite en la carpeta donde tenemos el código de este proyecto, y añadimos al proyecto los archivos <i>"sqlite3.h"</i> y <i>"sqlite3.c"</i>.</p>
        <p>SQLite está hecho en C, por lo que si trabajamos en C++ podemos tener problemas con los encabezados precompilados de visual studio (stdafx.h).</p>
                        <img src='/Graficos/SQLiteprop.png' style='float:right; max-width:25%; max-height:25%' alt='Propiedades del archivo de código'>
        <p>Para evitar errores de compilación relacionados con el archivo stdafx tenemos 2 opciones :</p>
        <ul style="list-style:decimal">
                <li>Crear el proyecto sin encabezado precompilado <b>(No es recomendable para aplicaciones medias o grandes)</b>.</li>
            <li>Excluir el archivo <i>"sqlite3.c"</i> del encabezado precompilado. Para ello debemos ir al explorador de soluciones, buscar el archivo mencionado, y hacer click en propiedades. (observa la imagen de la derecha)<br />
            Una vez dentro de las propiedades debemos ir a <i>Propiedades de configuración</i> -> <i>C/C++</i> -> <i>Encabezado precompilado</i>, y desde allí estableceremos la opción <i>Encabezado precompilado</i> a <b>No utilizar encabezados precompilados</b>.
            </li>
        </ul>
        <img src='/Graficos/SQLitePropiedades2.png' alt='Propiedades de sqlite3.c'>

        <p>Ahora que ya tenemos el proyecto configurado, podemos compilarlo para ver que no da error.</p>
        <p>Si os aparece el siguiente error es que no habéis seguido los pasos anteriores correctamente.</p>
                        <img src='/Graficos/SQLiteErrorStdafx.png' alt='Error encabezado precompilado'><br /><br />
                        <br />
                        <h2>Empezando</h2>
        <p>Antes de nada debemos tener claro que en windows por defecto se utiliza el tipo <i>wchar_t</i> para las cadenas de caracteres, y la verdad es que es un follón tener que ir pasando de <i>char</i> a <i>wchar_t</i>, por lo que vamos a programar todo utilizando <i>wchar_t</i>.</p>
        <p>SQLite trae con sigo un set de funciones para trabajar con wchar_t, y todas ellas terminan con '16'. Por ejemplo para crear/abrir una base de datos se utiliza la función <a href="http://www.sqlite.org/c3ref/open.html" target="_blank">sqlite3_open</a> para <i>char</i> y <a href="http://www.sqlite.org/c3ref/open.html" target="_blank">sqlite3_open16</a> para <i>wchar_t</i>.</p>
        <p>Vamos a empezar por declarar una clase desde donde controlaremos la base de datos, que se llamara BaseDatos.</p>

        <?php $Base->PintarCodigo->PintarArchivoC("BaseDatos", "Archivo : <a href='/Codigo/EmpezandoSQLite/BaseDatos.h' target='_blank'>BaseDatos.h</a>", "../Codigo/EmpezandoSQLite/BaseDatos.h"); ?>

        <p>La estructura de la clase BaseDatos es bastante intuitiva, por lo que no requiere explicación.</p>
                        <br />
        <h2>Iniciando y terminando la base de datos</h2>
        <p>Bueno para empezar, vamos a necesitar una ubicación donde guardar la base de datos en la que tengamos permisos de escritura. Lo mas fácil es crear un directorio dentro de ProgramData / AppData y tener la base de datos allí. En Windows XP esto no es un problema y podemos crear la base de datos donde nos plazca, pero a partir de Windows Vista necesitamos permisos de escritura para casi todos los directorios.</p>
        <p>Veamos la función BaseDatos::Iniciar.</p>
        <?php $Base->PintarCodigo->PintarArchivoC("BaseDatos_Iniciar", "BaseDatos::Iniciar", "../Codigo/EmpezandoSQLite/BaseDatos.cpp", "BaseDatos::Iniciar"); ?>
        <p>Lo primero que hace esta función es <linea cid="BaseDatos_Iniciar" l="6">obtener el directorio ProgramData</linea> para todos los usuarios utilizando la API <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/bb762188(v=vs.85).aspx" target="_blank">SHGetKnownFolderPath</a>. Luego en la <linea cid="BaseDatos_Iniciar" l="12">línea 12</linea> compruebo si existe el directorio para esta aplicación "Empezando  con SQLite" utilizando la API <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa364944(v=vs.85).aspx" target="_blank">GetFileAttributes</a>, y <linea cid="BaseDatos_Iniciar" l="13">en caso de no existir lo creamos</linea> utilizando la API <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa363855(v=vs.85).aspx" target="_blank">CreateDirectory</a>.</p>
        <p>Una vez estamos seguros de tener el directorio para la base de datos, en la <linea cid="BaseDatos_Iniciar" l="17">línea 17</linea> creamos la base de datos utilizando la función <a href="http://www.sqlite.org/c3ref/open.html" target="_blank">sqlite3_open16</a>.</p>
        <p>Y por ultimo comprobamos si ha habido algún error, y en ese caso <linea cid="BaseDatos_Iniciar" l="19">lo obtenemos</linea> con la función <a href="http://www.sqlite.org/c3ref/errcode.html" target="_blank">sqlite3_errmsg16</a>, y luego cerramos la base de datos con la función <a href="http://www.sqlite.org/c3ref/errcode.html" target="_blank">sqlite3_close_v2</a>.</p>
        <p>Hay que remarcar que al terminar la aplicación hay que llamar a la función <a href="http://www.sqlite.org/c3ref/errcode.html" target="_blank">sqlite3_close_v2</a> para cerrar la base de datos como es debido.</p>
        <br />
        <h2>Creando una tabla para la base de datos</h2>
        <p>Antes de nada hay que tener claro como realizar consultas a la base de datos, para empezar utilizaremos consultas que no devuelven datos, que son las mas fáciles de implementar. Echad un vistazo a la función BaseDatos::Consulta.</p>
        <?php $Base->PintarCodigo->PintarArchivoC("BaseDatos_Consulta", "BaseDatos::Consulta", "../Codigo/EmpezandoSQLite/BaseDatos.cpp", "BaseDatos::Consulta"); ?>
        <p>Para realizar cualquier consulta hay que utilizar la función <a href="http://www.sqlite.org/c3ref/prepare.html" target="_blank">sqlite3_prepare16_v2</a>, que prepara una estructura del tipo <i>sqlite3_stmt</i>, que luego debemos utilizar con la función <a href="http://www.sqlite.org/c3ref/step.html" target="_blank">sqlite3_step</a>. Una vez preparada la consulta debemos llamar a la función <a href="http://www.sqlite.org/c3ref/step.html" target="_blank">sqlite3_step</a> tantas veces como sea necesario hasta que devuelva <i>SQLITE_DONE</i> o <i>SQLITE_ERROR</i>, y por último debemos finalizar la consulta con la función <a href="http://www.sqlite.org/c3ref/finalize.html" target="_blank">sqlite3_finalize</a>.</p>
        <p>En resumen, hay que seguir 3 pasos : <linea cid="BaseDatos_Consulta" l="5">preparación</linea>, <linea cid="BaseDatos_Consulta" l="13">ejecución de cada paso (interno)</linea>, y <linea cid="BaseDatos_Consulta" l="15">finalización de la consulta</linea>. Visto así puede parecer algo incomodo, pero cuando una consulta tiene que devolver datos, hay que mirar en cada <a href="http://www.sqlite.org/c3ref/step.html" target="_blank">sqlite3_step</a> si nos ha devuelto datos de la tabla. (lo veremos mas adelante)</p>
        <p>Ahora que ya he explicado como funciona una consulta ya podemos empezar por crear una tabla, echad un vistazo a la función <linea cid="BaseDatos_CrearTabla" l="2">BaseDatos::CrearTabla</linea>.</p>
        <?php $Base->PintarCodigo->PintarArchivoC("BaseDatos_CrearTabla", "BaseDatos::CrearTabla", "../Codigo/EmpezandoSQLite/BaseDatos.cpp", "BaseDatos::CrearTabla"); ?>
        <p>Como podéis ver, crear una tabla es de lo mas simple una vez tenemos una función para hacer consultas. También quería remarcar que en SQLite no podemos utilizar la sentencia AUTOINCREMENT, y si queremos tener una Id que se autoincremente tenemos que especificarla como <linea cid="BaseDatos_CrearTabla" l="3">INTEGER PRIMARY KEY</linea>. Para mas información echad un vistazo al siguiente enlace : <a href="http://sqlite.org/autoinc.html" target="_blank">SQLite AUTOINCREMENT</a>.</p>
        <p>En esencia se ha creado una tabla con 3 campos, Id que es un valor entero que se autoincrementa (no puede haber 2 ids iguales en la tabla), Nombre que es una cadena de caracteres con un máximo de 260 caracteres, y Edad que es un valor entero.</p>
        <br />
        <h2>Insertando datos en la base de datos</h2>
        <p>El tema de insertar datos a decir verdad no tiene gran complicación tampoco, pero me gustaría remarcar que a la hora de insertar una gran cantidad de filas, el proceso se vuelve bastante lento, y hay una forma de acelerarlo bastante. Echad un vistazo a la función BaseDatos::InsertarDatosPorDefecto.</p>
        <?php $Base->PintarCodigo->PintarArchivoC("BaseDatos_InsertarDatosPorDefecto", "BaseDatos::InsertarDatosPorDefecto", "../Codigo/EmpezandoSQLite/BaseDatos.cpp", "BaseDatos::InsertarDatosPorDefecto"); ?>
        <p>Como podéis ver, he utilizado la sentencia <linea cid="BaseDatos_InsertarDatosPorDefecto" l="4">BEGIN TRANSACTION</linea> antes de empezar a insertar los datos, y luego he terminado con la sentencia <linea cid="BaseDatos_InsertarDatosPorDefecto" l="13">COMMIT TRANSACTION</linea>. Al hacer el <linea cid="BaseDatos_InsertarDatosPorDefecto" l="4">BEGIN TRANSACTION</linea> lo que sucede es que se hacen todas las operaciones en memoria, y hasta que no terminamos con la sentencia <linea cid="BaseDatos_InsertarDatosPorDefecto" l="13">COMMIT TRANSACTION</linea> no se guardan en el disco. Otra cosa a destacar es que si sucede un error durante la transacción, todos los datos introducidos durante la misma se perderán.</p> 
        <div class='nota'>Durante una transacción la base de datos queda bloqueada para escritura, de forma que si intentamos hacer algo que no sea un SELECT desde otro hilo/thread al llamar a <ocde>sqlite3_step</code> nos devolvera SQLITE_BUSY.</div>
        <p>Para mas información os recomiendo el siguiente enlace : <a href="http://www.sqlite.org/lang_transaction.html" target="_blank">SQLite BEGIN TRANSACTION</a>.</p>
        <br />
        <h2>Obteniendo datos de la base de datos</h2>
        <p>En esencia obtener datos de la base de datos viene a ser muy similar a una consulta que no devuelva datos, pero hay que mirar en cada paso si nos devuelve <i>SQLITE_ROW</i>, y en tal caso significa que podemos obtener los datos de una fila. Echad un vistazo a la función <linea cid="BaseDatos_MostrarDatos" l="1">BaseDatos::MostrarDatos</linea>.</p>
        <?php $Base->PintarCodigo->PintarArchivoC("BaseDatos_MostrarDatos", "BaseDatos::MostrarDatos", "../Codigo/EmpezandoSQLite/BaseDatos.cpp", "BaseDatos::MostrarDatos"); ?>
        <p>Cuando la función <a href="http://www.sqlite.org/c3ref/step.html" target="_blank">sqlite3_step</a> devuelve <linea cid="BaseDatos_MostrarDatos" l="14">SQLITE_ROW</linea> significa que estamos en una fila y podemos obtener sus datos. Para obtener los datos de dicha fila hay que tener muy claro el orden en que se han creado las columnas. Para este caso en concreto la columna 0 es la Id, <linea cid="BaseDatos_MostrarDatos" l="15">la columna 1 es el Nombre</linea>, y <linea cid="BaseDatos_MostrarDatos" l="17">la columna 2 es la Edad</linea>.</p>
<p>Para extraer los datos de una columna se pueden utilizar varias funciones dependiendo del tipo de datos a obtener, por ejemplo en la <linea cid="BaseDatos_MostrarDatos" l="15">línea 15</linea> utilizamos <a href="http://www.sqlite.org/c3ref/column_blob.html" target="_blank">sqlite3_column_text16</a> para obtener la columna Nombre en formato wchar_t, y en la <linea cid="BaseDatos_MostrarDatos" l="17">línea 17</linea> utilizamos la función <a href="http://www.sqlite.org/c3ref/column_blob.html" target="_blank">sqlite3_column_int</a> para obtener la Edad en formato int.</p>
        <p>También es posible obtener datos de un tipo formateados a otro tipo (siempre que la conversión sea posible), por ejemplo si deseamos obtener la columna de la Edad en formato wchar_t podemos utilizar perfectamente la función <a href="http://www.sqlite.org/c3ref/column_blob.html" target="_blank">sqlite3_column_text16</a>.</p>
        <p>Para mas información os recomiendo el siguiente enlace : <a href="http://www.sqlite.org/c3ref/column_blob.html" target="_blank">SQLite Result Values From A Query</a>.</p>
        <br />
        <h2>La función main de este ejemplo</h2>
        <p>Para terminar solo queda ver la función main que se ha creado para este ejemplo.</p>
        <?php $Base->PintarCodigo->PintarArchivoC("ECS", "_tmain", "../Codigo/EmpezandoSQLite/Empezando con SQLite.cpp"); ?>
        <p>Y esto es todo, mi intención era crear un documento donde se explicase como crear una base de datos SQLite dentro de una aplicación de VisualC++, y de esta forma tener mis propios apuntes sobre el tema. Y ya de paso si este documento puede ser de ayuda para alguien mas, mejor que mejor.</p>
        <p>Como siempre, podéis descargar el ejemplo de mi web y compilarlo vosotros mismos, el ejemplo incluye el código de SQLite.</p>
        <?php // $Base->CrearBotonDescarga("BotonDescarga1", "/Descargas/EmpezandoConSQLite.zip", "Descargar ejemplo", 1494358, TRUE); ?>               	
                        
        <a href='/Descargas/EmpezandoConSQLite.zip' target="_blank" class='Boton Centrado'>Descargar ejemplo</a>
                
        
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>