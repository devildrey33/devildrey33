<?php
        include("../Web/devildrey33.php");
	$Base = new devildrey33;

	$META = '<meta name="description" content="How to use google app scripts">
        <meta name="keywords" content="google app scripts, google scripts how to, google app, google scripts">';

        $Base->InicioPlantilla(basename(__FILE__), "How to use google app scripts", $META);

        $Base->InicioBlog(basename(__FILE__), "How to use google app scripts");
?>


<p>Google has a huge collection of tools which allow developers interact with its services.</p>
<p>One of my favourites is the <a href="https://developers.google.com/apps-script/" target="_blank">Google App Scripts</a>. This a great tool that allow us to develop software that can work together with the most Google common services, as Gmail, Calendar, Drive, Maps, Translator, etc. Actually, this is very similar to an API, but in my opinion, what Google people are offering here is something more powerful, and easier to use, than the Google APIs.</p>

<p>However, we can always use the <a href="https://developers.google.com/api-client-library/" target="_blank">Google APIs</a> with the same aim, but for non complex aplications I think it is better to use <b>“Google App Scripts”</b>.</p>

<p>To work with “Google App Scripts” we need a Google account. So all the references to the Google Services we are going to use, are going to point to the ones of the logged session in the browser.</p>
<p><b>“Google App Script”</b> can be used in several ways. We are not going to talk about scripts integrated into the Google services. Rather we are going to suppose that we have a personal Web App, and we want to link it to one of our Google services.</p>
<p>At this point, we have 2 choices:</p>
<ul>
    <li>We can create our Web App completely as a “Google App Script”.</li>
    <li>Or we can create a Script, and use it as an API, requested from another Web App.</li>
</ul>
<p>We’re going to start with the first case.</p>
<h2 style="margin-top: 60px;">Create a Web App Script</h2>
<p>We can write and host a whole html dynamic page with google services. The only thing we need, is a google account with a Google Drive service. The project will be stored as a file into your Google Drive unit. So you can create one directly with the Drive New File button:</p>
<img src="/Web/Graficos/how-to-use-google-app-scripts-2.png" />

<p>or going directly to this URL: <a href='https://script.google.com' target='_blank'>https://script.google.com</a></p>
<p>Both cases, we’ll get the start wizard, where there are many options, but what we are looking for is the last of the left column «Web App»</p>
<img src="/Web/Graficos/how-to-use-google-app-scripts-3.png" />
<p>After choosing, we’ll get that framework with an implemented example :</p>
<img src="/Web/Graficos/how-to-use-google-app-scripts-4.png" />
<p>As you can see, the project has 4 files :</p>
<ul style='list-style:decimal'>
    <li><b>Code.gs</b> : Here we must write our Google App Scripts. With this functions we can bind our javascript code with Google Services.</li>
    <li><b>Index.html</b> : This is the main html file of our web page.</li>
    <li><b>Javascript.html</b> : Here we can write the javascript code for our web app.</li>
    <li><b>Stylesheet.html</b> :  Here we can write the CSS styles for our web app.</li>
</ul>
<p>Let’s try to execute the project:</p>
<ul style='list-style:decimal'>

    <li><p>Go to the menu &rarr; Publish &rarr; Deploy as a web app</p>
        <img src="/Web/Graficos/how-to-use-google-app-scripts-5.png" />
    </li>
    <li><p>Choose a name for the project (f.e. <b>project_1</b>).</p>
        <img src="/Web/Graficos/how-to-use-google-app-scripts-6.png" />
    </li>
    <li><p>Select the Project options and access permissions.</p>
        <img src="/Web/Graficos/how-to-use-google-app-scripts-7.png" />
    </li>

    <li>
        <p>And then we’ll get an URL, ended with “/exec“, like this «https://script.google.com/macros/s/[…ID…]/exec».</p>
        <img src="/Web/Graficos/how-to-use-google-app-scripts-8.png" />
    </li>
</ul>
<p>This URL contains de ID of the Web App. You can change the last part of it in order to work with it. The possible endings are:</p>
<ul>
    <li><b>/exec</b> : With this URL, you will send the request for the published version of the Web App, and get the HTML main page.</li>
    <li><b>/dev</b> : With this one, you will also send the request, but rather than the last published version, you’ll get the currently developed version of the Web App.</li>
    <li><b>/edit</b> : With this one, you will be redirected to the “web framework” where Google allows to develop the Web App..</li>
</ul>
<p>If we try to go to the /exec url (in a new browser window), the first time we try to launch the app, Google will ask us to grant it. So give it permission.</p>
<img src="/Web/Graficos/how-to-use-google-app-scripts-9.png" />
<p>And finally we will get the result page. The example Web App shows a list with the name of our 20 first files in our Google Drive main folder.</p>
<img src="/Web/Graficos/how-to-use-google-app-scripts-10.png" />

<p>Let’s going to see how does it work.</p>
<h2 style="margin-top: 60px;">Initial funcion doGet()</h2>
<p>When we launch the a GET request URL (ended with /exec), the first what Google executes is the «<b>doGet(e)</b>» function, stored in the <b>Code.gs</b> file</p>
<?php
/* -[INICIO devildrey33.ID1]-
function doGet(e) {
    var template = HtmlService.CreateTemplateFromFile('Index');
    // Rretrieve and preocess any URL parameters, as necessary.
    if (e.parameter.folderId) { template.folderId = e.parameter.folderId; }
    else                      { template.folderId = 'root'; }

    // Build and return HTML in IFRAME sandbox mode
    return template.evaluate()
        .setTitle('Web App Window Title')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
-[FIN devildrey33.ID1]- */
    $Base->PintarCodigo->PintarArchivoJavaScript("ID1", "", basename(__FILE__), "ID1");
?>
<p>We can pass “GET parameters” to this function, collected in the “<b>e</b>” main parameter. For example, if I called the URL with https://script.google.com/macros/s/.../exec<b>?fold4erId=id001</b>“, we could read (in the doGet function) the <b>folderId</b> value as <b>e.parameter.folderId</b>.</p>
<p>After recieving the GET request, it constructs a template object, taking the “<b>Index.html</b>” template file with the <b>HtmlService.</b><a href='https://developers.google.com/apps-script/reference/html/html-service#createTemplateFromFile(String)' target="_blank">createTemplateFromFile()</a> function.</p>
<p>If there’s a “<b>folderId</b>” parameter into the URL, it passes this value to the template variable, or ‘root’ value if not. It means that everywhere where there’s a &lt;?=<b>folderId</b>?&gt; in the template code, will be translated by the same value we’ve given to it.</p>

<p>And then, the template object launches 3 methods and returns the result.</p>
<ul style='list-style:decimal'>
    <li>With the <a href="https://developers.google.com/apps-script/reference/html/html-output#setsandboxmodemode" target="_blank">setSandboxMode()</a>, the result web page is served into an iFrame structure, as a sandbox, in order to protect the client browser to execute malicious javascript code.</li>
    <li>With <a href='https://developers.google.com/apps-script/reference/html/html-output#settitletitle' target="_blank">setTitle()</a>, we can set a Window title.</li>
    <li>With <a href='https://developers.google.com/apps-script/reference/html/html-template#evaluate()' target="_blank">evaluate()</a>, the template code is evaluated, converted and returned as a final HTML code.</li>
</ul>
<p>As you must have realized, this <b>doGet()</b> function only return an HTML code for our main page. We could write a simpler function like that :</p>

<?php
/* -[INICIO devildrey33.ID2]-
function doGet(e) {
    return HtmlService.createHtmlOutput('<html> <body> <p> Hello World </p>
    </body> </html>');
}
-[FIN devildrey33.ID2]- */
    $Base->PintarCodigo->PintarArchivoJavaScript("ID2", "", basename(__FILE__), "ID2"); ?>
    <p>and after the URL request we would get this simple html page.</p>

    <h2 style="margin-top: 60px;">Template file Index.html</h2>
    <p>Now, let’s take a glance to the <b>Index.html</b> template file :</p>

    <?php
/* -[INICIO devildrey33.ID3]-
<!DOCTYPE html>
<html>
    <head>
        <base target='_top'>
        <?!= HtmlService.CreateHtmlOutputFromFile('Stylesheet').getContent(); ?>
        <script> var folderId = <?= folderId ?> </script>
        <?!= HtmlService.CreateHtmlOutputFromFile('JavaScript').getContent(); ?>
    </head>
    <body>
        <h1> Google Drive Explorer - Folder <?= folderId ?> </h1>
        <h1 id='main-heading'>Loading...</h1>

        <div class='block result-display' id='results'>
            <div class='hidden' id='error-message'> You have no permission </div>
        </div>
    </body>
</html>
-[FIN devildrey33.ID3]- */
        $Base->PintarCodigo->PintarArchivoHTML("ID3", "", basename(__FILE__), "ID3");
    ?>
    <p>As you can see, there are some &lt;?= <b>folderId</b> ?&gt; template tabs, which as we know they will be overwritten with the URL parameter value.</p>
    <p>However, there are also another &lt;?!= <b>HtmlService.createHtmlOutputFromFile</b>(‘[file name]’).<b>getContent</b>(); ?&gt; template tabs.</p>
    <p>When the template is evaluated, the <a href="https://developers.google.com/apps-script/reference/html/html-service#createHtmlOutputFromFile(String)" target="_blank">createHtmlOutputFromFile('')</a> function creates a new HtmlOutput object, and loads all the html content of the file into the final html page result. So, in this case, it takes the ‘<b>Stylesheet.html</b>‘ and ‘<b>Javascript.html</b>‘ files, and loads all their content into the final served page.</p>
    <?php
/* -[INICIO devildrey33.ID4]-
<!DOCTYPE html>
<html>
    <head>
        <base target=”_top”>

        <!-- [All the Stylesheet.html content] -->
        <script> var folderId = 'root'; </script>

        <!-- [All the JavaScript.html content] -->
    </head>
…
</html>
-[FIN devildrey33.ID4]- */
        $Base->PintarCodigo->PintarArchivoHTML("ID4", "", basename(__FILE__), "ID4"); ?>
    <p>If you wish, you can add more files, to make your application more modular. For instance, if you have to add a jQuery-UI custom library, you can add the file to the project :</p>
    <img src="/Web/Graficos/how-to-use-google-app-scripts-11.png" />
    <p>and then, insert this code into the header of the main page :</p>
<?php
/* -[INICIO devildrey33.ID5]-
<?!= HtmlService.createHtmlOutputFromFile('jquery_ui').getContent(); ?>
-[FIN devildrey33.ID5]- */
$Base->PintarCodigo->PintarArchivoJavaScript("ID5", "", basename(__FILE__), "ID5"); ?>

    <p></p>
    <h2 style="margin-top: 60px;">Bind Google Scripts with Javascript.</h2>
    <p>Now that we have the static page, let’s see the dinamic part.<br />
        Opening the «<b>JavaScript.html</b>» file, we can find this:</p>
<?php
/* -[INICIO devildrey33.ID6]-
<script str='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
<script>
    $(function() { // Call the server here to retrieve any information needed to build the page.
        google.script.run
            .withSuccessHandler(function(contents) { // Respond to success conditions here.
                updateDisplay(contents);
            })
            .withFailureHandler(function(msg) {
                $('#main-heading').text(msg).addClass('error');
                $('#error-message').show();
            })
        .getFolderContents(folderId);
    });

    function updateDisplay(contents) {
        var headingText = 'Display contents for' + contents.rootName + ' folder:';
        $('main-heading').text(headingText);
        for (var i = 0; i < contents.children.lenght; i++) {
            $('#results').append('<div>' + contents.children[i] + '</div>');
        }
    }
</script>
-[FIN devildrey33.ID6]- */
$Base->PintarCodigo->PintarArchivoHTML("ID6", "", basename(__FILE__), "ID6"); ?>

    <p>First of all, we can realize that we’re going to work with a jQuery framework, therefore there is a library link at the top.</p>
    <p>Then, we can see the <b>$(function() {})</b> declaration. As you may know, this is the way (or one of them) to implement the short <a href='http://www.w3schools.com/jquery/event_ready.asp' target='_blank'>document onready function in jQuery</a>. That means that it will be executed when the page is loaded in the browser.</p>
    <p>So, when our page is loaded in the browser, this javascript will call automaticaly the “<a href='https://developers.google.com/apps-script/guides/html/reference/run' target='_blank'>google.script.run</a>” method, that binds the javascript client side code with de Google Script in the server.</p>
    <p>In order to use this method, we must to declare :</p>
    <ul>
        <li><b>getFolderContents</b>: The “Script” function to be called (into the <b>Code.gs</b> file). In this case, we’re going to call the <b>getFolderContents()</b> script function.</li>
        <li><a href='https://developers.google.com/apps-script/guides/html/reference/run#withSuccessHandler(Function)' target='_blank'>withSuccesHandler</a>: This is the handler function that will be called after the script function, if all goes ok.</li>
        <li><a href='https://developers.google.com/apps-script/guides/html/reference/run#withfailurehandlerfunction' target='_blank'>withFailureHandler</a>: This is the handler function that will be called after the macro function, if anything goes wrong.</li>
    </ul>
    <p>As you can see, if the macro function goes wrong, we’ll load and show the error message into the “<b>error-message</b>” div, giving the apropiate style to it.</p>
    <p>Before understanding the succes handler, we must to see how the Google Script.</p>
    <p>So, let’s open the <b>Code.gs</b> file again, and look to the <b>getFolderContents</b>() function :</p>

    <!-- Unaltre que no s'asembla gaire al Codi.gs -->
<?php
/* -[INICIO devildrey33.ID7]-
function getFolderContents(folderId) {
    var topFolder;
    var contents = { children: [] };

    if (folderId == 'root') topFolder = DriveApp.getRootFoolder();
    else                    topFolder = DriveApp.getFolderByID(folderId);

    contents.rootName = topFolder.getName() + '/';

    var files = topFolder.getFiles();
    var numFiles = 0;

    while (files.hasNext() && numFiles < 20) {
        var file = files.next();
        contents.children.push(fiile.getName());
        numfiles++;
    }

    return contents;
}
-[FIN devildrey33.ID7]- */
$Base->PintarCodigo->PintarArchivoJavaScript("ID7", "", basename(__FILE__), "ID7"); ?>

    <p>This is an easy example about how can we deal with Google Services there. In this case, it is using the <a href='https://developers.google.com/apps-script/reference/drive/' target="_blank">Drive App Service</a>, that allows us to work with the Google Drive.</p>
    <p>The script gets an initial folder. If we have passed the ID parameter, it uses <a href='https://developers.google.com/apps-script/reference/drive/drive-app#getFolderById(String)' target="_blank">getFolderById()</a> function, else the <a href='https://developers.google.com/apps-script/reference/drive/drive-app#getrootfolder' target='_blank'>getRootFolder()</a> function. Then, it gets the folder file list (with <a href='https://developers.google.com/apps-script/reference/drive/drive-app#getfiles' target='_blank'>getFiles</a>) and loops its 20 first files, and gets the name of each one (with getName). It loads the list into an array object (<b>contents.children</b>), and returns the object.</p>
    <p>Now, into the Javascript client side, if the macro ended ok, the updateDisplay function will be executed.</p>

<?php
/* -[INICIO devildrey33.ID8]-
function updateDisplay(contents) {
    var headingText = 'Display contents for' + contents.rootName + ' folder:';
    $('main-heading').text(headingText);
    for (var i = 0; i < contents.children.lenght; i++) {
        $('#results').append('<div>' + contents.children[i] + '</div>');
    }
}
-[FIN devildrey33.ID8]- */
$Base->PintarCodigo->PintarArchivoJavaScript("ID8", "", basename(__FILE__), "ID8"); ?>

    <p>This function collect the result array into the <b>contents</b> parameter, and loads the list into the page with a simple loop and some dynamic html construction.</p>

    <h2 style="margin-top: 60px;">Developing a new version</h2>
    <p>Now that we have seen how the script works, we’re going to add some new code to the example, in order to understand it a little bit better.</p>
    <p>For example, we will add a button to create a new folder. This is not complicated.</p>
    <p>First, we add a submit input into the HTML main page :</p>
<?php
/* -[INICIO devildrey33.ID9]-
<input type='submit' id='id_add_folder_button' value='ADD NEW FOLDER' />
-[FIN devildrey33.ID9]- */
$Base->PintarCodigo->PintarArchivoHTML("ID9", "", basename(__FILE__), "ID9"); ?>

    <p>and in our init javascript function, we link a function to call when it’s clicked:</p>


<?php
/* -[INICIO devildrey33.ID10]-
$(function() {
    $('#id_add_folder_button').click(fun_add_folder);
    …
}
-[FIN devildrey33.ID10]- */
$Base->PintarCodigo->PintarArchivoJavaScript("ID10", "", basename(__FILE__), "ID10"); ?>

    <p>In the <b>fun_add_folder</b> javascript function, we have to call a new Google Script (addFolder) :</p>

<?php
/* -[INICIO devildrey33.ID11]-
function fun_add_folder() {
    var fname = prompt('Folder name:', 'New folder');
    if ((fname != null) && (fname != '')) {
        $('#id_add_folder_button').attr('disabled', 'true');
        google.script.run
            .withSuccessHandler(function() {
                $('#id_add_folder_button').removeAttr('disabled'):
            })
            .withFailureHandler(function(msg) {
                $('#error-message').text(msg).addClass('error').show();
                $('#id_add_folder_button').removeAttr('disabled');
            })
        .addFolder(folderId, fname);
    }
}
-[FIN devildrey33.ID11]- */
$Base->PintarCodigo->PintarArchivoJavaScript("ID11", "", basename(__FILE__), "ID11"); ?>

<p>In order to avoid parallel requests, note that just after calling the function, the <linea cid='ID11' l='4'>button turns disabled</linea>, and after executing the Google Script it turns on again. This is not the best way to prevent multiple calls at the same time, but it is helpful show the user that he shouldn’t click again the button until the answer.</p>

    <p>In the <b>Code.gs file</b>, we must code the <b>addFolder</b> function as :</p>

<?php
/* -[INICIO devildrey33.ID12]-
function addFolder(folderId, folder_name) {
    if (folderId == 'root') Current_Folder = DriveApp.getRootFolder();
    else                    Current_Folder = DriveApp.getFolderById(folderId);
    Current_Folder.createFolder(folder_name);
}
-[FIN devildrey33.ID12]- */
$Base->PintarCodigo->PintarArchivoJavaScript("ID12", "", basename(__FILE__), "ID11"); ?>

    <p>In this case, we have 2 input parameters (the folder parent ID, and the new folder name), and none for return.</p>
    <p>We can create a new folder as easily as with calling the <a href='https://developers.google.com/apps-script/reference/drive/folder#createFolder(String)' target="_blank">createFolder()</a> function.</p>
    <p>Now, we can try our new version with launching the /dev URL. However, this must be a provisional URL, to try the App while we’re developing. If we try to use the /exec URL, we will not see the changes, because before that, we must publish the new version of the Web App.</p>
    <p>To get it, we must go to “Publish” – “Deploy as web app…”, and then choose a “New” Project version. It is advised to write a comment about the changes.</p>
    <img src="/Web/Graficos/how-to-use-google-app-scripts-12.png" />
    <p>And finally, updating the project version we can use the /exec URL as well.</p>

<?php
    $Base->FinBlog();
    $Base->FinPlantilla();
?>
