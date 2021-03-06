﻿/*declaring 3 global variables*/
var panel, field, saved;


function update() {
    panel.innerHTML = saved + " changed to " + field.value + "<br>";
    saved = field.value;
}
function wipe() {
    panel.innerHTML = "<br>";
}

function init() {
    /*initialize the global values*/
    panel = document.getElementById("panel");
    field = document.getElementById("txt");
    saved = field.value;

    /*plus one local variable*/
    var form = document.getElementById("lang");


    /*attaching event hanlder functions to the form object and textfield object*/
    form.onreset = wipe;
    field.onchange = update;/*event handler gets nominated to the onchange property of the 'field' object to respond to changes in its content. interestingly the change event is not fired until the text element loses focus*/
    wipe();
}
/*Execute a JavaScript immediately after a page has been loaded*/
onload = init;
