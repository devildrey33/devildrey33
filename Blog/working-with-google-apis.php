<?php
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;

    $META = '<meta name="description" content="Working with google APIs">'.Intro().
            '<meta name="keywords" content="google api, google apis">';

    $Base->InicioPlantilla(basename(__FILE__), "Working with google APIs", $META);

    $Base->InicioBlog(basename(__FILE__), "Working with google APIs");
    $File_Source_1 = '../Codigo/GoogleAPI/simple_gAPI_example_empty.html';
    $File_Source_2 = '../Codigo/GoogleAPI/simple_gAPI_example.html';


?>

<script type="text/javascript">
    $Base.CargarCSS('Barba_Posts.css');
</script> 

<!-- <div style="display: inline-block; margin-bottom: 30px;"> -->
    <img class="ImagenPortada2" src="/Web/Graficos/250x200_google_apis.jpg" alt="working with google apis" />

    <p>We’ve already seen <a href="how-to-use-google-app-scripts" target="_blank">how to develop a whole web app using the "Web App Scripts"</a>.</p>
    <p>However, many times we would like to keep our web app into another place/server, or just connect an existing web app with the google services, so in this case we must use the google APIs to interact with the google services.</p>

    <p>We're going to split this explanation in 2 parts:</p>
    <ul>
        <li><b>Grant access to the APIs</b></li>
        <li><b>Access the API</b> (authorization and methods to access)</li>
    </ul>

    <p>The first part is common, and you would need to set it whatever type of client access you'd like to use. The second, though, can be implemented in many languages, as well as in the client or the server side. Here we're going to focus on how to implement it with javascript. Let’s see how to do it.</p>
<!-- </div> -->

<h2>Grant access to the APIs</h2>

<p>Before coding anything, we must grant the access to the APIs we’re going to use into our google account.</p>

<p>So go to your <a href="https://console.developers.google.com/" target="_blank">https://console.developers.google.com/</a> and create a new project (for instance, project2):</p>
<img src="/Web/Graficos/working_with_google_apis_1.png" />

<p>Then, go to <b>APIs & auth</b> &rarr; <b>APIs</b> option of the new Project, and there select the API you want to enable for the project. In our example it will be the <b>Drive API</b> :</p>
<img src="/Web/Graficos/working_with_google_apis_2.png" />

<p>And set <b>enable</b> the API for the project :</p>
<img src="/Web/Graficos/working_with_google_apis_3.png" />

<p>You may add more information about why your app needs to be connected into the Google Drive Service :</p>
<img src="/Web/Graficos/working_with_google_apis_4.png" />

<p>Now go to the <b>APIs & auth</b> &rarr; <b>Credentials</b> option, and add a new credential of <b>OAuth 2.0 client ID</b>:</p>
<img src="/Web/Graficos/working_with_google_apis_5.png" />

<p>There are 2 authentication methods depending on which sort of use it will be needed:</p>
<ul style='list-style:decimal'>
    <li>We could launch requests to APIs which doesn’t need to access private data in the google account, and therefore it doesn’t need authorization, so we can use a simple access with <a href="https://developers.google.com/api-client-library/javascript/samples/samples#LoadinganAPIandMakingaRequest" target="_blank">gapi.client.setApiKey(API KEY)</a>.</li>
    <li>If we have to access private data with the APIs, we have to use the <a href="https://developers.google.com/identity/protocols/OAuth2" target="_blank">OAuth 2.0.</a></li>
</ul>
<p>In the example, we’ll use the OAuth 2.0 method, so we’ll work with private data.</p>

<p>However, before creating it, you must setup the <b>Consent Screen</b>. This is the screen that will be shown to get the authorization when the app tries to access google API for first time. So go to set it up :</p>
<img src="/Web/Graficos/working_with_google_apis_6.png" />

<p>type a <b>Product Name</b> and save it.</p>
<img src="/Web/Graficos/working_with_google_apis_7.png" />

<p>Afterwards, choose the <b>Web application</b> type and – for more safety – I advise to filter the origin domains where the app will access (in the example, we’ll use a local server, so we’ll access from local http://localhost) :</p>
<img src="/Web/Graficos/working_with_google_apis_8.png" />

<p>Then, you will get the <b>Client ID</b> and <b>Client Secret</b> keys. Keep your "Client ID" because we’ll need it later.</p>
<img src="/Web/Graficos/working_with_google_apis_9.png" />

<p>So we’ve already got it. Now we can access the services using the API.</p>
<p>The first time you try to access to the API, if the request parameter "<b>immediate</b>" is false (we’ll see it later), a window screen pop up will ask you for login into google account (if you’re not yet):</p>
<img src="/Web/Graficos/working_with_google_apis_10.png" />

<p>and also to allow the access to the google service:</p>
<img src="/Web/Graficos/working_with_google_apis_11.png" />




<h2>Access the API</h2>
<p>Now that we have the access available, let’s going to see how to use it.</p>
<p>We wrote this simple html page to show an easy example:</p>
<?php $Base->PintarCodigo->PintarArchivoHTML("", "", $File_Source_1, ""); ?>

<p class="nota">If you wish you can download the full example code <a href="https://github.com/joelbarba/Google_API_example" target="_blank">here in this GitHub repository</a>.</p>
<p>The first we need is to include the <a href="https://developers.google.com/api-client-library/javascript/" target="_blank">google API’s JS library</a> into our page (https://apis.google.com/js/client.js). We’re going to launch the request with a javascript code, although there’re many other ways to do it. You can also use PHP, Java, Python, etc.. (<a href="https://developers.google.com/api-client-library/" target="_blank">Check it out</a> for more info).</p>
<p>As you can guess, before anything the app has to authenticate the client access to the API services. In the example, as we’ve set it up before, we’ll use the <b>OAuth 2.0</b>. As you can see in the code, we put a button that calls a javascript function <b>checkAuth</b>, where we use the <a href="https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauthauthorizeparams--------callback" target="_blank">gapi.auth.authorize()</a> function. This uses 2 parameters. The first parameter is an object with the following values:<p>
<ul style='list-style:decimal'>
    <li><b>client_id:</b> This is the ID you’ve got after setting up the google API service access. Just put the code there, or use an input parameter to set it.</li>
    <li><b>scope:</b> Here we have to specify which scope (part of the service) we will use. Each API has many scopes, and depending on what our app wants to do, we must choose the most suitable. In the example, we’re using the "drive.metadata.readonly" scope of the Google Drive API. However we could use <a href="https://developers.google.com/drive/web/scopes" target="_blank">many others</a>.</li>
    <li><b>immediate:</b> This (true/false) value – as we’ve seen before – sets the app to show the authorization popup window, or not. (true = it doesn’t show the popup / false = it does show the popup).</li>
</ul>

<p>And the second parameter, is a handler function (<b>handleAuthResult</b>), to be called after the request finishes, in order to handle the answer. The most common we should do here is to test the result of the request with the parameter (<b>authRestful</b>), and then proceed as the app needs.</p>
<p>If you try to execute the example, you’ll see that there’s an authorization request to the API:</p>
<img src="/Web/Graficos/working_with_google_apis_12.png" />
<img src="/Web/Graficos/working_with_google_apis_13.png" />

<p>As you may know, the google API works as a <b>RESTful</b> method. It means that the client (javascript, or any else we’re using) and the server (google) uses a http URL structured interface to compose the messages for sending requests and responses.</p>
<p class="nota">You can learn more about this process <a href="http://www.restapitutorial.com/lessons/whatisrest.html" target="_blank">there</a>.</p>
<p>So, let’s see how to build and send a request. Here we have 3 different options. We can either use a simple request call (with <b>gapi.client.request</b>), or a faster technique, that loads previously the API interface. Even more, we can also build an XHR request (with CORS) manualy.</p>





<h2>Method 1: gapi.client.request</h2>
<p>The easier one. We can quickly compose a http request using the <a href="https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientrequestargs" target="_blank">gapi.client.request</a> function. This uses an object parameter where we must set the required values to build the request, as the "path" (in the example, we’re using the <a href="https://developers.google.com/drive/v2/reference/files/list" target="_blank">drive file list request</a>), the "method" (GET by default for reading, although it could be POST / PUT / DELETE), "params" for specific parameters of the request, and "headers" and "body", which we’re not going to use for now.</p>
<?php $Base->PintarCodigo->PintarArchivoJavascript("ID2", "Simple request method", $File_Source_2, "ID2"); ?>


<p>After the request, as we have previously set with the <b>restRequest.then</b>, it will launch the response handled function (load_result if it goes ok).</p>
<p>The request we’ve used for the example (<b>drive/v2/files</b>), as you may have already read in the documentation, asks google Drive for a metadata list of our stored files, and returns it in a JSON structure:</p>
<?php $Base->PintarCodigo->PintarArchivoJavascript("ID3", "JSON response", $File_Source_2, "ID3"); ?>


<p>As an example, we could print it into the page with and easy dynamic script :</p>
<?php $Base->PintarCodigo->PintarArchivoJavascript("ID4", "Load a list with the result of the API", $File_Source_2, "ID4"); ?>


<p>And get the following result:</p>
<img src="/Web/Graficos/working_with_google_apis_14.png" />

<p>As you’ve seen, after pushing the button, the page launched a XHR request to talk with the API, with the URL and defined parameters:</p>
<img src="/Web/Graficos/working_with_google_apis_15.png" />





<h2>Method 2: gapi.client.load</h2>

<p>There’s another way to exactly do the same, though with a better performance. We could load the full client API’s interface, with the <a href="https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientloadname--------version-callback" target="_blank">gapi.client.load()</a> function, and use it henceforth to launch many requests. As you can imagine, it should be faster in a many requests scenario.</p>
<p>After loading the API interface, we can call all its available requests (for instance, <a href="https://developers.google.com/drive/v2/reference/" target="_blank">those of the Drive API</a>) through each of its functions (like <b>gapi.client.drive.files.list</b>). So we can manage to the same result as in the last method with the following code:</p>
<?php $Base->PintarCodigo->PintarArchivoJavascript("ID5", "Load the API interface, and then, launch the request", $File_Source_2, "ID5"); ?>


<p>As you can see, the result is the same, and the XHR request has the same structure and parameters :</p>
<img src="/Web/Graficos/working_with_google_apis_16.png" />





<h2>Method 3: Direct request with CORS</h2>

<p>We have also another method to send a request to a google API: with a direct <a href="http://www.w3.org/TR/cors/" target="_blank">CORS request</a>.</p>
<p class="nota">I recommend you <a href="http://www.html5rocks.com/en/tutorials/cors/" target="_blank">this magnific tutorial</a> to learn more about the Cross-Origin Resource Sharing (CORS).</p>
<p>To take it lighter, we may just load the <linea cid="ID6" l="3">auth.js</linea> library instead of the whole <linea cid="ID6" l="2">client.js</linea>:</p>
<?php
/* -[INICIO devildrey33.ID6]-

    <script src="https://apis.google.com/js/client.js"></script>  <!-- use this for full client API -->
    <script src="https://apis.google.com/js/auth.js"></script>    <!-- use this for only CORS auth  -->

-[FIN devildrey33.ID6]- */
    $Base->PintarCodigo->PintarArchivoHTML("ID6", "", basename(__FILE__), "ID6");
?>

<p>and then, after getting permission from the <a href="https://developers.google.com/api-client-library/javascript/features/authentication" target="_blank">gapi.auth.authorize</a> function, built the XHR request directly:</p>
<?php $Base->PintarCodigo->PintarArchivoJavascript("ID7", "Manual request with CORS", $File_Source_2, "ID7"); ?>

<p>This works in the same way as a simple <b>XMLHttpRequest</b>.</p>
<p>Nevertheless, we shouldn’t forget adding the authorization token to the request. We have 2 ways to do it:</p>
<ul style='list-style:decimal'>
    <li><p>Add the access_token parameter to the URL:</p>
        <?php
        /* -[INICIO devildrey33.ID8]-
 var oauthToken = gapi.auth.getToken();
 var url_request = 'https://www.googleapis.com/drive/v2/files?maxResults=10' + '&access_token=' + encodeURIComponent(oauthToken.access_token);
        -[FIN devildrey33.ID8]- */
            $Base->PintarCodigo->PintarArchivoJavascript("ID8", "", basename(__FILE__), "ID8");
        ?>
    </li>
    <li><p>Or add it to the request’s header (with the setRequestHeader function):</p>
        <?php
        /* -[INICIO devildrey33.ID9]-
 var oauthToken = gapi.auth.getToken();
 xhr.setRequestHeader('Authorization', 'Bearer ' + oauthToken.access_token);
        -[FIN devildrey33.ID9]- */
            $Base->PintarCodigo->PintarArchivoJavascript("ID9", "", basename(__FILE__), "ID9");
        ?>
    </li>
</ul>

<p class="nota">There’s more info about this method <a href="https://developers.google.com/api-client-library/javascript/features/cors" target="_blank">right here</a>.</p>

<p>Now that you know how to use the google APIs, you can make your web apps get a step further by them. There's lots of google services that could be used to improve the data sharing of your applications, as GMail, GCalendar, G+, GMaps, etc. So don't let it go, just use them and make your apps get better!</p>


<?php
    $Base->FinBlog();
    $Base->FinPlantilla();
?>
