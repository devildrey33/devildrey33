<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    include 'Web/devildrey33_htaccess.php';


    echo "<table>".
            "<th>"."<tr>"."<td></td>"."<td><code>Base::URL</code></td>"."<td><code>Base::Path</code></td>"."<td><code>Base::PathRelativo</code></td>"."</tr>"."</th>".
            "<tr>"."<td>Raíz</td>".         "<td>".Base::URL_Raiz().        "</td>"."<td>".Base::Path_Raiz().       "</td>"."<td>".Base::PathRelativo_Raiz().       "</td>"."</tr>".
            "<tr>"."<td>Web</td>".          "<td>".Base::URL_Web().         "</td>"."<td>".Base::Path_Web().        "</td>"."<td>".Base::PathRelativo_Web().        "</td>"."</tr>".
            "<tr>"."<td>JS</td>".           "<td>".Base::URL_JS().          "</td>"."<td>".Base::Path_JS().         "</td>"."<td>".Base::PathRelativo_JS().         "</td>"."</tr>".
            "<tr>"."<td>CSS</td>".          "<td>".Base::URL_CSS().         "</td>"."<td>".Base::Path_CSS().        "</td>"."<td>".Base::PathRelativo_CSS().        "</td>"."</tr>".
            "<tr>"."<td>Cache</td>".        "<td>".Base::URL_Cache().       "</td>"."<td>".Base::Path_CSS().        "</td>"."<td>".Base::PathRelativo_CSS().        "</td>"."</tr>".
            "<tr>"."<td>Graficos</td>".     "<td>".Base::URL_Graficos().    "</td>"."<td>".Base::Path_Graficos().   "</td>"."<td>".Base::PathRelativo_Graficos().   "</td>"."</tr>".
            "<tr>"."<td>Descargas</td>".    "<td>".Base::URL_Descargas().   "</td>"."<td>".Base::Path_Descargas().  "</td>"."<td>".Base::PathRelativo_Descargas().  "</td>"."</tr>".
            "<tr>"."<td>Blog</td>".         "<td>".Base::URL_Blog().        "</td>"."<td>".Base::Path_Blog().       "</td>"."<td>".Base::PathRelativo_Blog().       "</td>"."</tr>".
            "<tr>"."<td>Lab</td>".          "<td>".Base::URL_Lab().         "</td>"."<td>".Base::Path_Lab().        "</td>"."<td>".Base::PathRelativo_Lab().        "</td>"."</tr>".
        "</table>";
  
       devildrey33_htaccess::ReasignarPaths();
?>