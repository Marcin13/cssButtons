/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var data = {"button": [
        {
         "value": "Przycisk!1",
         "class": "button",
         "id": "button",
         "color": "red"
        },
         {
         "value": "Przycisk!2",
         "class": "button",
         "id": "button",
         "color": "blue"
         },
           {
         "value": "Przycisk!3",
         "class": "button",
         "id": "button",
         "color": "black"
         }

    ]};

var render = Mustache.to_html($('#button-template').html(), data);
$('body').append(render);