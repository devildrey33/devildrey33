<?php 
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
/*	$META = "<meta name='description' content='Buscar devildrey33'>
	<meta name='keywords' content='Buscar, devildrey33'>";*/


        $Buscar = "";
        if (isset($_GET["Search"])) $Buscar = $_GET["Search"];
        if (isset($_POST["Search"])) $Buscar = $_POST["Search"];
        
        $nBuscar = str_replace(".php", "", $Buscar);
        
/*	include("devildrey33.php");*/
//	$Base = new devildrey33(devildrey33_TipoPlantilla::Buscador, basename(__FILE__));
	
	$DHE = "<meta name='description' content='Buscar devildrey33'>".Intro().
"<meta name='keywords' content='Buscar, devildrey33'>".Intro();
/*"<script type='text/javascript' src='https://www.google.es/jsapi'></script>".Intro().


"<script type='text/javascript'>
    google.load('search', '1');
    google.setOnLoadCallback(function(){
        new google.search.CustomSearchControl().draw('cse');
    }, true);
    google.load('search', '1');
			
    function OnLoad() {
        // Create a custom search control that uses a CSE restricted to code.google.com
        var customSearchControl = new google.search.CustomSearchControl('005953647264407381580:5hnum4vxqqo');

        // Draw the control in content div
        customSearchControl.draw('content');";
        
        if ($nBuscar !== "") $DHE .= "customSearchControl.execute('".$nBuscar."');";
        $DHE .= " 
    }
</script>    
";*/
        


	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Buscar", $DHE);
        }
        
/*echo "        
    <div id='cse' style='width: 100%;'>Cargando</div>
    <script src='//www.google.com/jsapi' type='text/javascript'></script>
    <script type='text/javascript'>
    google.load('search', '1', {language: 'es', style: google.loader.themes.V2_DEFAULT});
    google.setOnLoadCallback(function() {
      var customSearchOptions = {};
      var imageSearchOptions = {};
      imageSearchOptions['layout'] = 'google.search.ImageSearch.LAYOUT_POPUP';
      customSearchOptions['enableImageSearch'] = true;
      customSearchOptions['adoptions'] = {'layout' : 'noTop'};
      var customSearchControl =   new google.search.CustomSearchControl('005953647264407381580:5hnum4vxqqo', customSearchOptions);
      customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
      var options = new google.search.DrawOptions();
      customSearchControl.draw('cse', options);";      
if ($nBuscar !== "") echo "customSearchControl.execute('".$nBuscar."');"; 
echo "}, true);
    </script>";*/
      
        
        
        $Base->InicioSinCabecera(basename(__FILE__), "Buscar");
        
//        if ($nBuscar !== "") echo "<script>customSearchControl.execute('".$nBuscar."');</script>"; 
        
        
//	$Base->InicioPlantilla("Buscador", $DeclaracionesHeadExtras);
?>	

    <p>El buscador aún no funciona, perdona las molestias.</p>

<!--    <script>
      (function() {
        var cx = '005953647264407381580:5hnum4vxqqo';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      })();
    </script>
    <gcse:search></gcse:search>        
    -->
<?php
    $Base->FinSinCabecera();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     