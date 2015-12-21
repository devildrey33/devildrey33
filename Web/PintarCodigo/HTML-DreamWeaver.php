<?php

/* Diccionario de colores HTML estilo DreamWeaver */

return array(   array("Palabra" => "table"                      , "Color" => "TxtVerdeClaro"),
                array("Palabra" => "tr"                         , "Color" => "TxtVerdeClaro"),
                array("Palabra" => "td"                         , "Color" => "TxtVerdeClaro"),

                array("Palabra" => "form"                       , "Color" => "TxtAmarillo"),
                array("Palabra" => "select"                     , "Color" => "TxtAmarillo"),
                array("Palabra" => "option"                     , "Color" => "TxtAmarillo"),
                array("Palabra" => "input"                      , "Color" => "TxtAmarillo"),
                array("Palabra" => "label"                      , "Color" => "TxtAmarillo"),

                array("Palabra" => "img"                        , "Color" => "TxtLila"),

                array("Palabra" => "a"                          , "Color" => "TxtVerde"),

                /* Los estados SIEMPRE deben estar al final del array y con el mismo orden */
                array("RESERVADO"           => ""               , "Color" => "TxtNegro"),   // count-10
                array("RESERVADO"           => ""               , "Color" => "TxtNegro"),   // count-9
                array("RESERVADO"           => ""               , "Color" => "TxtNegro"),   // count-8
                array("RESERVADO"           => ""               , "Color" => "TxtNegro"),   // count-7
                array("RESERVADO"           => ""               , "Color" => "TxtNegro"),   // count-6
                array("Estado_Normal"       => ""               , "Color" => "TxtNegro"),   // count-5
                array("Estado_Comentarios"  => ""               , "Color" => "TxtVerde"),   // count-4
                array("Estado_String"       => ""               , "Color" => "TxtRojo"),    // count-3
                array("Estado_Variable"     => ""               , "Color" => "TxtAzul"),    // count-2 (SE USA PARA LAS DIRECTIVAS)
                array("Estado_Numero"       => ""               , "Color" => "TxtRosa")     // count-1 (NO SE USA)
        
);
