//
// Copyright (C) 2012 Midwinter Duncan Grant http://www.midwinter-dg.com/
// Copyright (C) 2012 Duncan Midwinter
//
// CSS3 ButtonBuilder makes use of the following resources:
// jQuery					http://jquery.com
// jQueryUI					http://jqueryui.com
// jQuery-gradient-picker	https://github.com/tantaman/jquery-gradient-picker
// jQuery color picker		http://www.eyecon.ro/colorpicker/
// jQuery AlphaNumeric		http://www.shiguenori.com/material/alphanumeric/index.html
//

//////////////////////// INTERFACE PRESETS ////////////////////////

//////////////////////// DIMENSIONS ////////////////////////

if(localStorage.getItem("pre1") === null) { localStorage.setItem("pre1" , "86"); } // button width
if(localStorage.getItem("pre2") === null) { localStorage.setItem("pre2" , "19"); } // button height

//////////////////////// GRADIENT ////////////////////////

if(localStorage.getItem("pre3") === null) { localStorage.setItem("pre3" , "0"); } // gradient direction
if(localStorage.getItem("pre4") === null) { localStorage.setItem("pre4" , '[\"#fffefe 0%\",\"#efefef 50%\",\"#e7e7e7 50%\",\"#eeeeee 100%\"]'); } // gradient stops JSON
if(localStorage.getItem("pre4") === '[""]') { localStorage.setItem("pre4", '["#ffffff 0%", "#000000 100%"]'); } // if no gradient stops

//////////////////////// BORDER ////////////////////////

if(localStorage.getItem("pre5") === null) { localStorage.setItem("pre5" , "1"); } // border width
if(localStorage.getItem("pre6") === null) { localStorage.setItem("pre6" , "154"); } // border red
if(localStorage.getItem("pre7") === null) { localStorage.setItem("pre7" , "154"); } // border green
if(localStorage.getItem("pre8") === null) { localStorage.setItem("pre8" , "154"); } // border blue
if(localStorage.getItem("pre9") === null) { localStorage.setItem("pre9" , "100"); } // border alpha

//////////////////////// BORDER RADIUS ////////////////////////

if(localStorage.getItem("pre10") === null) { localStorage.setItem("pre10" , "1"); } // radius lock values
if(localStorage.getItem("pre11") === null) { localStorage.setItem("pre11" , "4"); } // radius top left
if(localStorage.getItem("pre12") === null) { localStorage.setItem("pre12" , "4"); } // radius top right
if(localStorage.getItem("pre13") === null) { localStorage.setItem("pre13" , "4"); } // radius bottom right
if(localStorage.getItem("pre14") === null) { localStorage.setItem("pre14" , "4"); } // radius bottom left

//////////////////////// INNER SHADOW ////////////////////////

if(localStorage.getItem("pre15") === null) { localStorage.setItem("pre15" , "0"); } // inner x
if(localStorage.getItem("pre16") === null) { localStorage.setItem("pre16" , "1"); } // inner y
if(localStorage.getItem("pre17") === null) { localStorage.setItem("pre17" , "2"); } // inner blur
if(localStorage.getItem("pre18") === null) { localStorage.setItem("pre18" , "0"); } // inner spread
if(localStorage.getItem("pre19") === null) { localStorage.setItem("pre19" , "255"); } // inner red
if(localStorage.getItem("pre20") === null) { localStorage.setItem("pre20" , "255"); } // inner green
if(localStorage.getItem("pre21") === null) { localStorage.setItem("pre21" , "255"); } // inner blue
if(localStorage.getItem("pre22") === null) { localStorage.setItem("pre22" , "40"); } // inner alpha

//////////////////////// OUTER SHADOW ////////////////////////

if(localStorage.getItem("pre23") === null) { localStorage.setItem("pre23" , "0"); } // outer x
if(localStorage.getItem("pre24") === null) { localStorage.setItem("pre24" , "1"); } // outer y
if(localStorage.getItem("pre25") === null) { localStorage.setItem("pre25" , "0"); } // outer blur
if(localStorage.getItem("pre26") === null) { localStorage.setItem("pre26" , "0"); } // outer spread
if(localStorage.getItem("pre27") === null) { localStorage.setItem("pre27" , "0"); } // outer red
if(localStorage.getItem("pre28") === null) { localStorage.setItem("pre28" , "0"); } // outer green
if(localStorage.getItem("pre29") === null) { localStorage.setItem("pre29" , "0"); } // outer blue
if(localStorage.getItem("pre30") === null) { localStorage.setItem("pre30" , "10"); } // outer alpha

//////////////////////// TEXT ////////////////////////

if(localStorage.getItem("pre31") === null) { localStorage.setItem("pre31" , "Lucida Grande"); } // text font
if(localStorage.getItem("pre32") === null) { localStorage.setItem("pre32" , "0"); } // text style
if(localStorage.getItem("pre33") === null) { localStorage.setItem("pre33" , "13"); } // text size
if(localStorage.getItem("pre34") === null) { localStorage.setItem("pre34" , "0"); } // text red
if(localStorage.getItem("pre35") === null) { localStorage.setItem("pre35" , "0"); } // text green
if(localStorage.getItem("pre36") === null) { localStorage.setItem("pre36" , "0"); } // text blue
if(localStorage.getItem("pre37") === null) { localStorage.setItem("pre37" , "100"); } // text alpha

//////////////////////// TEXT SHADOW ////////////////////////

if(localStorage.getItem("pre38") === null) { localStorage.setItem("pre38" , "0"); } // shadow x
if(localStorage.getItem("pre39") === null) { localStorage.setItem("pre39" , "1"); } // shadow y
if(localStorage.getItem("pre40") === null) { localStorage.setItem("pre40" , "0"); } // shadow blur
if(localStorage.getItem("pre41") === null) { localStorage.setItem("pre41" , "255"); } // shadow red
if(localStorage.getItem("pre42") === null) { localStorage.setItem("pre42" , "255"); } // shadow green
if(localStorage.getItem("pre43") === null) { localStorage.setItem("pre43" , "255"); } // shadow blue
if(localStorage.getItem("pre44") === null) { localStorage.setItem("pre44" , "100"); } // shadow alpha

//////////////////////// PREVIEW BUTTON TEXT ////////////////////////

if(localStorage.getItem("pre45") === null) { localStorage.setItem("pre45" , "Button"); } // sample text

//////////////////////// ACTIVATE PROPERTY ////////////////////////

if(localStorage.getItem("pre46") === null) { localStorage.setItem("pre46" , "1"); } // activate border
if(localStorage.getItem("pre47") === null) { localStorage.setItem("pre47" , "1"); } // activate radius
if(localStorage.getItem("pre48") === null) { localStorage.setItem("pre48" , "1"); } // activate inner shadow
if(localStorage.getItem("pre49") === null) { localStorage.setItem("pre49" , "1"); } // activate outer shadow
if(localStorage.getItem("pre50") === null) { localStorage.setItem("pre50" , "0"); } // activate text shadow

//////////////////////// PREVIEW BACKGROUND ////////////////////////

if(localStorage.getItem("pre51") === null) { localStorage.setItem("pre51" , "237"); } // preview red
if(localStorage.getItem("pre52") === null) { localStorage.setItem("pre52" , "237"); } // preview green
if(localStorage.getItem("pre53") === null) { localStorage.setItem("pre53" , "237"); } // preview blue
if(localStorage.getItem("pre54") === null) { localStorage.setItem("pre54" , "100"); } // preview alpha


//////////////////////// PICKER LOCKS ////////////////////////

if(localStorage.getItem("pre55") === null) { localStorage.setItem("pre55" , "1"); } // picker-1 (border)
if(localStorage.getItem("pre56") === null) { localStorage.setItem("pre56" , "0"); } // picker-2 (inner)
if(localStorage.getItem("pre57") === null) { localStorage.setItem("pre57" , "0"); } // picker-3 (outer)
if(localStorage.getItem("pre58") === null) { localStorage.setItem("pre58" , "0"); } // picker-4 (text)
if(localStorage.getItem("pre59") === null) { localStorage.setItem("pre59" , "0"); } // picker-5 (shadow)
if(localStorage.getItem("pre60") === null) { localStorage.setItem("pre60" , "1"); } // picker-6 (preview)
if(localStorage.getItem("pre61") === null) { localStorage.setItem("pre61" , "1"); } // picker-7 (solid)

//////////////////////// SOLID FILL ////////////////////////

if(localStorage.getItem("pre62") === null) { localStorage.setItem("pre62" , "1"); } // use gradient/solid
if(localStorage.getItem("pre63") === null) { localStorage.setItem("pre63" , "235"); } // solid red
if(localStorage.getItem("pre64") === null) { localStorage.setItem("pre64" , "235"); } // solid green
if(localStorage.getItem("pre65") === null) { localStorage.setItem("pre65" , "235"); } // solid blue
if(localStorage.getItem("pre66") === null) { localStorage.setItem("pre66" , "100"); } // solid alpha

//////////////////////// PREFERENCES ////////////////////////

if(localStorage.getItem("pref1") === null) { localStorage.setItem("pref1" , "1"); } // webkit
if(localStorage.getItem("pref2") === null) { localStorage.setItem("pref2" , "1"); } // mozilla
if(localStorage.getItem("pref3") === null) { localStorage.setItem("pref3" , "1"); } // opera
if(localStorage.getItem("pref4") === null) { localStorage.setItem("pref4" , "1"); } // fallback color y/n
if(localStorage.getItem("pref5") === null) { localStorage.setItem("pref5" , "2"); } // fallback value
if(localStorage.getItem("pref6") === null) { localStorage.setItem("pref6" , "0"); } // ie10
if(localStorage.getItem("pref7") === null) { localStorage.setItem("pref7" , "0"); } // output class or id

//////////////////////// SAVED BUTTONS ////////////////////////

if(localStorage.getItem("saveList") === null) {	
	
	localStorage.setItem('saveList' , '["Mac Button|1351767684420","Mac Button Active|1351767804167"]');
	
	localStorage.setItem('saved_Mac Button|1351767684420', '[\"86\",\"19\",\"0\",\"[\\"#fffefe 0%\\",\\"#efefef 50%\\",\\"#e7e7e7 50%\\",\\"#eeeeee 100%\\"]\","1",\"154\",\"154\",\"154\",\"100\",\"1\",\"4\",\"4\",\"4\",\"4\",\"0\",\"1\",\"2\",\"0\",\"255\",\"255\",\"255\",\"40\",\"0\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"10\",\"Lucida Grande\",\"0\",\"13\",\"0\",\"0\",\"0\",\"100\",\"0\",\"1\",\"0\",\"255\",\"255\",\"255\",\"100\",\"Button\",\"1\",\"1\",\"1\",\"1\",\"0\",\"237\",\"237\",\"237\",\"100\",\"1\",\"0\",\"0\",\"0\",\"0\",\"1\",\"1\",\"1\",\"235\",\"235\",\"235\",\"100\"]');
	
	localStorage.setItem('saved_Mac Button Active|1351767804167', '[\"86\",\"19\",\"0\",\"[\\"#c7e3fb 0%\\",\\"#8fc4f3 50%\\",\\"#70b5f2 50%\\",\\"#c5f4fc 100%\\"]\",\"1\",\"91\",\"97\",\"171\",\"100\",\"1\",\"4\",\"4\",\"4\",\"4\",\"0\",\"1\",\"2\",\"0\",\"255\",\"255\",\"255\",\"40\",\"0\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"10\",\"Lucida Grande\",\"0\",\"13\",\"0\",\"0\",\"0\",\"100\",\"0\",\"1\",\"0\",\"255\",\"255\",\"255\",\"100\",\"Button\",\"1\",\"1\",\"1\",\"1\",\"0\",\"237\",\"237\",\"237\",\"100\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\",\"0\",\"1\",\"112\",\"181\",\"242\",\"100\"]');
		
}
