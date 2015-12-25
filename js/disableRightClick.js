﻿//******************************************************************************
// Module  :   rightClick.js
//Original code taken from: https://rightclick.codeplex.com/
//disabled alert.
//******************************************************************************
// DISCLAIMER: This Application is provide on AS IS basis without any warranty
//******************************************************************************

var BM = 2; // button middle
var BR = 3; // button right
var msg = "Right click disabled.";

function mouseDown(e) {
    try { if (event.button == BM || event.button == BR) { return false; } }
    catch (e) { if (e.which == BR) { return false; } }
}
document.oncontextmenu = function () {  return false; }
document.onmousedown = mouseDown;
//******************************************************************************