// ==UserScript==
// @name         Minimap
// @namespace    plutorising/Minimap
// @version      0.14.0
// @description  Minimap for PixelCanvas forked by Boboss#2324
// @author       Exel80#0001 & olegispe#2453
// @match        http://pixelcanvas.io/*
// @match        https://pixelcanvas.io/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://use.fontawesome.com/releases/v5.0.10/js/all.js
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource     jQueryCss https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css
// @copyright    2018 © Exel80#0080 & Olegisp#9389
// @license      https://creativecommons.org/licenses/by-nc-nd/4.0/
// @updateURL    https://raw.githubusercontent.com/plutorising/Minimap/master/minimap.pub.user.js
// @downloadURL  https://raw.githubusercontent.com/plutorising/Minimap/master/minimap.pub.user.js
// ==/UserScript==

var _0x58a2 = [`TmgPl`, `textDisplay`, `gIwzk`, `#config-text`, `ZPSYU`, `yqtpu`, `Icons and Text`, `fomNR`, `.menu-text`, `uPQcP`, `Text only`, `sntuh`, `acTRU`, `.menu-icon`, `CVhCN`, `Icons only`, `MDdTE`, `zoom`, `jIsmc`, `categories`, `JEjku`, `!data.json`, `DOYOJ`, `GET`, `nGRby`, `json`, `false`, `CqHjC`, `hide`, `LhRuz`, `show`, `log`, `gecCs`, `#config-hidezoom`, `text`, `suKlm`, `OQwEW`, `centerPallet`, `pIrVU`, `addClass`, `koUPH`, `QtAIn`, `prop`, `HsILV`, `pow`, `Checked categories: `, `, Cookie: `, `ajax`, `parseJSON`, `stringify`, `Categories`, `sort`, `qDxGz`, `inArray`, `ccFPw`, ` id="check-`, `</label>`, `jdKTx`, `wMMNc`, `jvedM`, `#CookieBar`, `EAvZs`, `ejcZS`, `DdRJS`, `VkaRb`, `vUpvy`, `ozFiD`, `oDyuE`, `3|2|1|4|0`, `xZwAc`, `.GotoCss:visible`, `UNLKp`, `TpoKB`, `#goto`, `DTOjm`, `lWUOF`, `BbkxG`, `PkhfI`, `uEjGb`, `RXlfa`, `ssDtc`, `XrxwG`, `hcZGO`, `3|0|6|18|9|14|19|20|15|7|10|17|12|11|16|1|5|2|4|13|8`, `Hzvzv`, `FWuvi`, `TrdxS`, `dhLbY`, `kxGUi`, `qxpYe`, `ThceY`, `#config-text option:selected`, `UWEXE`, `BlJkF`, `kYYEP`, `SUIaH`, `ergdm`, `KWfIX`, `aagPN`, `ijKQX`, `uRzqE`, `wPJKA`, `RWirA`, `AEcoR`, `lhpPB`, `wAdfQ`, `xUcEj`, `dZpcs`, `cfXJM`, `ZkAwF`, `#config-centerpallet`, `Ophon`, `Center`, `EUuCY`, `xKbFa`, `SAAvX`, `kfYmd`, `QDzLw`, `yjNom`, `nQxRE`, `groupUp`, `OrMaM`, `lwoim`, `UgOlB`, `3|1|2|4|0`, `liLsh`, `.SettingsCss:visible`, `owLlM`, `XxTyt`, `tnYgD`, `#settings`, `oTXXw`, `eHnRM`, `:visible`, `pIWlE`, `lXHyw`, `hxqEa`, `wPqgH`, `qjUQK`, `FmzzB`, `2|3|5|4|1|0`, `RjHzT`, `iBffh`, `oSLoL`, `#CursorColor`, `jIFso`, `zjjgA`, `tfrYR`, `#enter-goto`, `TzBeg`, `#open-goto`, `NAdsi`, `#custom-slider-grid`, `BkksE`, `#slider-grid`, `BikGK`, `PjqPO`, `NLtAv`, `Mrrhh`, `iYdZY`, `#open-settings`, `LyEaf`, `MGDim`, `#close-settings`, `#close-goto`, `phXpk`, `hSzqh`, `#hide-map`, `pFIls`, `change`, `val`, `fKvXi`, `#CookiesOk`, `click`, `slideUp`, `yUCjX`, `#discord-link`, `open`, `UNUVP`, `autocomplete`, `hasOwnProperty`, `round`, `UKjqL`, `height`, `location`, `replace`, `http://pixelcanvas.io/@`, `#inputName`, `YRLnk`, `slideDown`, `length`, `cQoqF`, `#custom-slider-cursor`, `#slider-cursor`, `OWTKJ`, `confirm`, `Are you sure?`, `reload`, `GUvEN`, `BstgM`, `toggleClass`, `FoOcx`, `fCQbt`, `UPvDV`, `VUnGl`, `mouseover`, `dBDPP`, `hasClass`, `removeClass`, `eRGXR`, `mousemove`, `div[style*="position: absolute; left: 1em; bottom: 1em;"]`, `innerText`, `aZiCR`, `jiJpC`, `mlqLc`, `background-color`, `FrVAn`, `DAGSu`, `BLUE`, `eBAay`, `cBBGY`, `#0074D9`, `NrZnE`, `AQUA`, `YncJK`, `tRHIv`, `#7FDBFF`, `TpHyS`, `MrCKO`, `fkOOe`, `#39CCCC`, `OOJUT`, `OLIVE`, `RpVDL`, `zHhyn`, `GREEN`, `dDYDx`, `#2ECC40`, `tyonR`, `LIME`, `uZBZz`, `#01FF70`, `IAwOJ`, `YELLOW`, `UInad`, `EDNZH`, `mARXQ`, `GYQRO`, `#FF851B`, `rDzib`, `RED`, `jJobJ`, `#FF4136`, `MAROON`, `BHMwa`, `#85144b`, `FUCHSIA`, `iFtIP`, `PURPLE`, `toNWx`, `#B10DC9`, `KWLxo`, `BLACK`, `qPLRV`, `#111111`, `bcfTP`, `GRAY`, `#AAAAAA`, `sWzRe`, `SILVER`, `OBxCU`, `UXNIm`, `css`, `isYgf`, `lDvgg`, `#F012BE`, `fsoxh`, `MoFHL`, `LWtWj`, `HgMhI`, `OiNMn`, `hOJWy`, `HLDyB`, `hZbrY`, `GFfls`, `YuIQF`, `Rxhtq`, `nzImb`, `qAVqK`, `KXckc`, `cpZSM`, `Templates`, `XvQmI`, `exec`, `uqpTF`, `UUrfv`, `KNnRS`, `feGfw`, `vdvgt`, `rfaoi`, `jPNLe`, `eDnfZ`, `PxKJx`, `strokeStyle`, `rgba(`, `beginPath`, `width`, `rect`, `lineWidth`, `clearRect`, `stroke`, `hPpzv`, `3|4|2|0|1`, `vbrGm`, `Hitzone`, `biVRK`, `RlpsN`, `PUCQP`, `RJURW`, `eYwol`, `lasAh`, `QCfgr`, `RyjmQ`, `omkfD`, `hsKCf`, `GkIat`, `jcBiO`, `vxOpX`, `translate`, `Drawing grid board = [`, `] and offset = [`, `fillStyle`, `rgba(34, 34, 34, `, `fillRect`, `LdoqN`, `1|8|7|5|9|2|0|6|3|4`, `SArbb`, `DPogY`, `ntdjj`, `LGRCi`, `YPyDs`, `tWHdC`, `minimize`, `oqyub`, `x: `, ` y: `, ` W: `, ` H: `, ` | z: (`, `) (`, `drawImage`, `src`, `.png`, `onload`, `SDBkG`, `push`, `vWIFm`, `4|1|3|5|2|0`, `CpohK`, `VYnfY`, `lwkSn`, `Ccnif`, `BGMdq`, `jBFYI`, `aaGkG`, `cOkUW`, `EPjjX`, `Drawing`, `snxrD`, `HvTaK`, `sXhsj`, `includes`, `WFgSx`, `#config-categorie input:checked`, `each`, `attr`, `join`, `#minimap`, `some`, `bxaxA`, `xhQHV`, `PdWYJ`, `DtnwG`, `SSKfW`, `hkQDS`, `get`, `imageSmoothingEnabled`, `mozImageSmoothingEnabled`, `webkitImageSmoothingEnabled`, `IPqWM`, `getContext`, `getImageData`, `data`, `prototype`,
`between`, `UTvsN`, `min`, `apply`, `max`,
`https://raw.githubusercontent.com/plutorising/Minimap/master/templates/`, `head`, `append`, `<link rel='stylesheet' href='https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css' type='text/css' media='screen'>`,
`<style>h2.title { margin:0px auto; padding:10px; }
.moveUp {position:absolute; bottom:6em; left:0.3333em;}
.groupUp { bottom: initial !important; left: initial !important; position: initial !important; display: inline-block !important;}
.colorsLeft {margin-left:0.333em !important;}
.close { color:black; position:absolute; top:0.8em; right:1em; cursor:pointer; }
.discord { color:black; position:absolute; top:0.75em; right:2.55em; cursor:pointer; }
.smooth { overflow:auto; padding-top:4px; padding-bottom:4px; }
.settings-list { margin:2px; text-shadow:1px 1px 8px white; position:relative; list-style-type:none; padding:0; display:table; width:99%;}
.settings-list li:nth-child(odd) { background:linear-gradient(to right, rgba(228,228,228,0.65), rgba(0,0,0,0)); }
.settings-button { right:0.5em; } .small{font-size:12px;} .smalltext{font-size:10px; width:120px;}
.SettingsCss { width:280px; height:400px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-10%; bottom:0; left:0; right:0; margin:auto; }
.GotoCss { width:280px; height:110px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-20%; bottom:0; left:0; right:0; margin:auto; }
#minimap-backup {background-color:rgba(0,0,0,0.75); height:50px; border-radius:5px; position:absolute; right:1em; bottom:1em;}
#minimap-content {background-color:rgba(0,0,0,0.75); width:480px; height:270px; border-radius:5px; position:absolute; right:1em; bottom:1em; outline: 4px solid white;}
.fleft {float:left;} .fright {float:right;}
.minimize { opacity: 0.45; filter: alpha(opacity=45); /* For IE8 and earlier */ }
#minimap-settings { z-index:6; position:absolute; right:0em; bottom:0; width:480px; background-color:rgba(0,0,0,0.5);}
#minimap {width:100%; top:0; height:100%; z-index:0; outline: 4px solid black!important; outline-offset: -2px;} #minimap-grid {width:100%; top:0; height:100%; z-index:1;} #minimap-cursor {width:100%; top:0; height:100%; z-index:2;}
.clickable { cursor:pointer; font-weight:bold; }
ul.toolbar { justify-content: space-around; white-space:nowrap;  display:-webkit-flex; -webkit-justify-content:center; display:flex; justify-content:center; z-index:6; position:relative !important; line-height:25px; list-style-type:none; margin:0; border-style:none; overflow:hidden; text-align:center; color:white; }
li.toolbar { z-index:6; float:left; } li.padding { padding-left:20px; } li.smallPadding { padding-left:4px; }
.ui-slider .ui-slider-handle { width:1em !important; }
.footer { font-size:8px; position:absolute; bottom:.5em; text-align:center; }
.slider { right:0em !important; width:6.25em !important; }
#config-categorie { height:50px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }
#BoxedSettings { height:180px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }
#i1, #i2, #i3 { text-align: center; display:inline-block; width: 33.3%; }
#custom-slider-cursor { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }
#custom-slider-grid { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }
canvas { position:absolute; image-rendering:optimizeSpeed; image-rendering:-moz-crisp-edges; image-rendering:-webkit-optimize-contrast; image-rendering:-o-crisp-edges; image-rendering:optimize-contrast; -ms-interpolation-mode:nearest-neighbor; }
.menu-text { display:inline; }
.CookiesButton { float:right; background-color:DarkGreen; color:white; font-weight:bold; cursor:pointer; border-color:DarkGreen; font-size: 14px !important; }
.CookiesButton:hover { float:right; background-color:DarkGreen !important; color:white; font-weight:bold; cursor:pointer; border-color:lime !important; font-size: 14px !important; }
span.cookiesAndMilk { color:white; float:left; padding-top:5px; display:block; margin-left:.5em; font-size: 13px; }</style>`, `
<div id="goto" class="GotoCss">
  <h2 class="title"> Goto template </h2>
  <div id="close-goto" class="close"><i class="fas fa-window-close"></i></div>
  <div class="ui-widget" style="padding:5px;">
    <label for="inputName">Template name: </label>
    <input id="inputName">
    <button id="enter-goto" class="ui-button ui-widget ui-corner-all">GO!</button>
  </div>
</div>
<div id="settings" class="SettingsCss">
   <h2 class="title"> Settings </h2>
   <div id="discord-link" class="discord"><small><u>Join Discord</u></small> <i class="fab fa-discord"></i></div>
   <div id="close-settings" class="close"><i class="fas fa-window-close"></i></div>
   <ul class="settings-list">

      <!-- CATEGORIE  -->
      <li class="smooth"><div class="fleft small">Template categorie(s): </div>
      <div id="config-categorie"></div></li>

     <div id="BoxedSettings">
        <!-- HIDE ZOOM -->
        <li class="smooth"><div class="fleft small">Hide zoom slider</div>
          <div id="config-hidezoom" class="fright clickable settings-button">Hide</div>
        </li>

        <!-- HIDE CURSOR  -->
        <li class="smooth"><div class="fleft small">Hide cursor</div>
          <div id="config-hidecursor" class="fright clickable settings-button">Hide</div>
        </li>

        <!-- HIDE GRID  -->
        <li class="smooth"><div class="fleft small">Hide grid</div>
          <div id="config-hidegrid" class="fright clickable settings-button">Hide</div>
        </li>

        <!-- PLACE PALLET -->
        <li class="smooth"><div class="fleft small">Place palette</div>
          <div id="config-centerpallet" class="fright clickable settings-button">Center</div>
        </li>

        <!-- DISPLAY TEXT  -->
        <li class="smooth"><div class="fleft small">Display text</div><div id="config-displaytext" class="fright settings-button">
        <select id="config-text" class="fright">
          <option>Icons and Text</option>
          <option>Text only</option>
          <option>Icons only</option>
        </select>
        </div></li>

        <!-- CURSOR COLOR  -->
        <li class="smooth" style="padding-bottom:0.5em;"><div class="fleft small">Cursor color</div><div id="config-cursorcolor" class="fright settings-button">
          <select runat="server" id="CursorColor" style="min-width:105px;">
            <option value="NAVY" style="background-color: #001f3f;" />
            <option value="BLUE" style="background-color: #0074D9;" />
            <option value="AQUA" style="background-color: #7FDBFF;" />
            <option value="TEAL" style="background-color: #39CCCC;" />
            <option value="OLIVE" style="background-color: #3D9970;" />
            <option value="GREEN" style="background-color: #2ECC40;" />
            <option value="LIME" style="background-color: #01FF70;" />
            <option value="YELLOW" style="background-color: #FFDC00;" />
            <option value="ORANGE" style="background-color: #FF851B;" />
            <option value="RED" style="background-color: #FF4136;" />
            <option value="MAROON" style="background-color: #85144b;" />
            <option value="FUCHSIA" style="background-color: #F012BE;" />
            <option value="PURPLE" style="background-color: #B10DC9;" />
            <option value="BLACK" style="background-color: #111111;" />
            <option value="GRAY" style="background-color: #AAAAAA;" />
            <option value="SILVER" style="background-color: #DDDDDD;" />
          </select>
        </div></li>

        <!-- SLIDER CURSOR  -->
        <li class="smooth"><div class="fleft small">Cursor transparency</div><div id="config-cursoralpha" class="fright settings-button">
          <div id="slider-cursor" class="slider"><div id="custom-slider-cursor" class="ui-slider-handle"></div></div>
        </div></li>

        <!-- SLIDER GRID  -->
        <li class="smooth"><div class="fleft small">Grid transparency</div><div id="config-gridalpha" class="fright settings-button">
          <div id="slider-grid" class="slider"><div id="custom-slider-grid" class="ui-slider-handle"></div></div>
        </div></li>
    </div>

     <li style="padding:3px"><!-- SPACE --></li>

     <!-- RESET BUTTON -->
     <li class="smooth">
       <div id="config-reset" class="fright clickable settings-button">Reset settings</div>
     </li>
   </ul>

   <div class="footer"><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0; float:left; margin-top:10px; margin-left:5px;" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</div>
</div>
<div id="minimap-backup" style="display:none"><span class="clickable" style="color:white; display:block;padding: 15px 20px;"> <i class="fas fa-eye menu-icon"></i> <div class="menu-text"> Open minimap </div> </span></div>
<div id="minimap-content">
   <div id="slider-vertical" style="height:200px; width:0.5em; position:absolute; top:1em; right:1em; opacity:0.45; z-index:9;"></div>
   <canvas id="minimap" width="1024" height="540"></canvas>
   <canvas id="minimap-grid" width="1024" height="540"></canvas>
   <canvas id="minimap-cursor" width="1024" height="540"></canvas>
<div id="minimap-settings" style="margin-left: -20px">
  <ul class="toolbar">
      <div id="i1"> <li class="toolbar clickable" id="hide-map"> <i class="fas fa-eye-slash menu-icon"></i> <div class="menu-text"> Hide minimap </div> </li> </div>
      <div id="i2"> <li class="toolbar clickable" id="open-goto"> <i class="fas fa-chevron-circle-up menu-icon"></i> <div class="menu-text"> Goto template </div> </li> </div>
      <div id="i3"> <li class="toolbar clickable" id="open-settings"> <i class="fas fa-cog menu-icon"></i> <div class="menu-text"> Settings </div> </li> </div>
  </ul>
</div>
</div>`, `
<div id="CookieBar" style="z-index:999; position:absolute; background-color:black; right:0; top:0; width:480px;">
  <span class="cookiesAndMilk">We use cookies and milk to keep track your settings.</span>
  <button id="CookiesOk" class="CookiesButton ui-button ui-widget ui-corner-all">I Understand!</button>
</div>`, `#001f3f`, `ready`, `nEZJD`, `SoYjo`, `#slider-vertical`, `vgvdF`, `value`, `PCEjc`, `LwKHV`, `eVLKc`, `ASqER`, `ZpLAf`, `WeUseCookies`, `xlVbF`, `div#minimap-content`, `split`, `children`, `slider`, `cookie`, `vdymG`, `undefined`, `hZjjR`, `QyfZO`, `checked=true`, `oTaYI`, `CrrdT`, `LufqS`, `showMinimap`, `gFaNV`, `true`, `YTVoE`, `JJgFV`, `#minimap-content`, `#minimap-backup`, `tNoKU`, `cursorColor`, `SwXcR`, `PjyNl`, `NAVY`, `YnQpk`, `Bjimi`, `cursorAlpha`, `aWkAx`, `gridAlpha`, `csteS`, `Nqkiw`, `showSlider`, `SqtfM`, `Show`, `NkGyg`, `Hide`, `AGXHp`, `rIIbo`, `yxnlN`, `ALfiI`, `showCursor`, `ljWRh`, `Wuvcj`, `#config-hidecursor`, `snWUc`, `showGrid`, `zrtij`, `#config-hidegrid`, `rQigH`, `DExUn`, `vIabY`, `XwMyq`, `Left`, `XAUrU`, `colorsLeft`, `xlPjr`, `qBBMA`, `#app > div:nth-child(1) > div:nth-child(9)`, `Ebbij`, `moveUp`, `dbuVm`, `#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(2)`, `xmHQW`, `#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)`];

(function(_0xa96417,_0x4ace23){
	var _0x4859a8=function(_0x8f6849){
		while (--_0x8f6849) { _0xa96417['push'](_0xa96417['shift']()); }
	};
	var _0x4760d2=function(){
		var _0x4ba707={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1dcaec,_0x35c631,_0x1739ab,_0x147f85){_0x147f85=_0x147f85||{};
		var _0x166e38=_0x35c631+'='+_0x1739ab;var _0x4837f0=0x0;for(var _0x4837f0=0x0,_0x45ded7=_0x1dcaec['length'];_0x4837f0<_0x45ded7;_0x4837f0++){
		var _0x387dff=_0x1dcaec[_0x4837f0];_0x166e38+=';\x20'+_0x387dff;var _0x2f8a1d=_0x1dcaec[_0x387dff];_0x1dcaec['push'](_0x2f8a1d);_0x45ded7=_0x1dcaec['length'];if(_0x2f8a1d!==true){_0x166e38+='='+_0x2f8a1d;}}_0x147f85['cookie']=_0x166e38;},'removeCookie':function(){return'dev';},'getCookie':function(_0x26f737,_0x227271){_0x26f737=_0x26f737||function(_0x63a4ab){return _0x63a4ab;};
		var _0x41b154=_0x26f737(new RegExp('(?:^|;\x20)'+_0x227271['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3a6be3=function(_0x41623e,_0x586f1b){_0x41623e(++_0x586f1b);};_0x3a6be3(_0x4859a8,_0x4ace23);return _0x41b154?decodeURIComponent(_0x41b154[0x1]):undefined;}};
		var _0x24b4c6=function(){
			var _0x28c5c2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
			return _0x28c5c2['test'](_0x4ba707['removeCookie']['toString']());
		};
		_0x4ba707['updateCookie']=_0x24b4c6;
		var _0x36cb5c='';
		var _0x2a8c16=_0x4ba707['updateCookie']();
		if(!_0x2a8c16){_0x4ba707['setCookie'](['*'],'counter',0x1);
		}else if(_0x2a8c16){
			_0x36cb5c=_0x4ba707['getCookie'](null,'counter');
		}else{_0x4ba707['removeCookie']();}
	};
	_0x4760d2();
}(_0x58a2,0x18a));

var _0x41f5=function(_0xc12aa2){
	_0xc12aa2=_0xc12aa2-0x0;

	var _0x23d31c=_0x58a2[_0xc12aa2];
	if(_0x41f5['HsbJYd']===undefined){
		_0x41f5['OwfZKd']=function(v){return v;};
		_0x41f5['bRJSQu']={};
		_0x41f5['HsbJYd']=true;
	}
	// console.log("_0x41f5['bRJSQu']", _0x41f5['bRJSQu'])
	var _0x105190=_0x41f5['bRJSQu'][_0xc12aa2];
	if(_0x105190===undefined){
		var _0x253715=function(_0x550849){this['TJOpJu']=_0x550849;this['vMpEEo']=[0x1,0x0,0x0];this['hdLgdD']=function(){return'newState';};this['PQvcmD']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['jUjBDe']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x253715['prototype']['htQUEe']=function(){
		var _0x5ab6be=new RegExp(this['PQvcmD']+this['jUjBDe']);var _0x4e6202=_0x5ab6be['test'](this['hdLgdD']['toString']())?--this['vMpEEo'][0x1]:--this['vMpEEo'][0x0];return this['FxXenE'](_0x4e6202);};_0x253715['prototype']['FxXenE']=function(_0x9421){if(!Boolean(~_0x9421)){return _0x9421;}return this['xogNZP'](this['TJOpJu']);};_0x253715['prototype']['xogNZP']=function(_0x298c39){for(var _0x49af22=0x0,_0x4cbe3c=this['vMpEEo']['length'];_0x49af22<_0x4cbe3c;_0x49af22++){this['vMpEEo']['push'](Math['round'](Math['random']()));_0x4cbe3c=this['vMpEEo']['length'];}return _0x298c39(this['vMpEEo'][0x0]);};new _0x253715(_0x41f5)['htQUEe']();_0x23d31c=_0x41f5['OwfZKd'](_0x23d31c);_0x41f5['bRJSQu'][_0xc12aa2]=_0x23d31c;
	}else{_0x23d31c=_0x105190;}
	// console.log(_0xc12aa2, '==>', _0x23d31c)
	return _0x23d31c;
};

Number[_0x41f5('0x0')][_0x41f5('0x1')]=function(_0x3f3bd8,_0x4114d8){
	var _0x35786e={};_0x35786e[_0x41f5('0x2')]=function(_0x41eba2,_0x543cbf){return _0x41eba2>_0x543cbf;};
	var _0x29cf58=Math[_0x41f5('0x3')][_0x41f5('0x4')](Math,[_0x3f3bd8,_0x4114d8]),_0x44d501=Math[_0x41f5('0x5')][_0x41f5('0x4')](Math,[_0x3f3bd8,_0x4114d8]);
	return _0x35786e[_0x41f5('0x2')](this,_0x29cf58)&&this<_0x44d501;
};

dataUrl=_0x41f5('0x6');
$(_0x41f5('0x7'))[_0x41f5('0x8')](_0x41f5('0x9'));$(_0x41f5('0x7'))[_0x41f5('0x8')]($(_0x41f5('0xa')));
minimapHTML=_0x41f5('0xb');
cookieHTML=_0x41f5('0xc');
var attempt=0;
var curX=null;
var curY=null;
var _zoom=35;
var max_zoom=60;
var FinalZoom=calcZoom(Math['pow'](1.1,_zoom));
var templateList=[];
var categorieList=[];
var storedTemplates={};
var cursorColor=_0x41f5('0xd');
var cursorAlpha=90;
var gridAlpha=50;
var showSlider=true;
var showCursor=true;
var showGrid=true;
var textDisplay=0;
var centerPallet=true;
var availableFactions=[];
var hitzone=0;

$(document)[_0x41f5('0xe')]

(function(){
var _0x5bac57={};_0x5bac57[_0x41f5('0xf')]=function(_0x28ff44,_0x806b28){return _0x28ff44(_0x806b28);};_0x5bac57[_0x41f5('0x10')]=_0x41f5('0x11');_0x5bac57[_0x41f5('0x12')]=_0x41f5('0x13');_0x5bac57[_0x41f5('0x14')]=function(_0xe3a46){return _0xe3a46();};_0x5bac57[_0x41f5('0x15')]=function(_0x2a96ee){return _0x2a96ee();};_0x5bac57[_0x41f5('0x16')]=function(_0x2c25da){return _0x2c25da();};_0x5bac57[_0x41f5('0x17')]=function(_0x2e3fc8,_0x43913f){return _0x2e3fc8===_0x43913f;};_0x5bac57[_0x41f5('0x18')]=function(_0x307c6d,_0x4563eb){return _0x307c6d===_0x4563eb;};_0x5bac57['\x76\x64\x79\x6d\x47']=_0x41f5('0x19');_0x5bac57[_0x41f5('0x1a')]=_0x41f5('0x1b');var _0x2ff01d='\x34\x7c\x35\x7c\x37\x7c\x30\x7c\x38\x7c\x36\x7c\x33\x7c\x32\x7c\x31'[_0x41f5('0x1c')]('\x7c'),_0x17cca3=0x0;while(true){switch(_0x2ff01d[_0x17cca3++]){case'\x30':_0x5bac57[_0x41f5('0xf')]($,'\x64\x69\x76\x23\x61\x70\x70')[_0x41f5('0x1d')]()[_0x41f5('0x8')](minimapHTML);continue;case'\x31':$(_0x5bac57[_0x41f5('0x10')])[_0x41f5('0x1e')](_0x5bac57[_0x41f5('0x12')],_zoom);continue;case'\x32':_0x5bac57['\x50\x43\x45\x6a\x63'](setupEvents);continue;case'\x33':_0x5bac57[_0x41f5('0x15')](setupCanvas);continue;case'\x34':'use strict';continue;case'\x35':_0x5bac57[_0x41f5('0x15')](loadJsonLoop);continue;case'\x36':_0x5bac57[_0x41f5('0x16')](setupCookies);continue;case'\x37':loadTemplates();continue;case'\x38':if(_0x5bac57[_0x41f5('0x17')]($['\x63\x6f\x6f\x6b\x69\x65']('\x57\x65\x55\x73\x65\x43\x6f\x6f\x6b\x69\x65\x73'),'\x30')||_0x5bac57[_0x41f5('0x18')](typeof $[_0x41f5('0x1f')](_0x5bac57[_0x41f5('0x20')]),_0x41f5('0x21')))$(_0x5bac57['\x78\x6c\x56\x62\x46'])['\x61\x70\x70\x65\x6e\x64'](cookieHTML);continue;}break;}});
function setupCookies(){
var _0x2c74c3={};_0x2c74c3[_0x41f5('0x22')]=function(_0x3be564,_0x19523b){return _0x3be564<_0x19523b;};_0x2c74c3[_0x41f5('0x23')]=function(_0x526daf,_0x2bbea5){return _0x526daf(_0x2bbea5);};_0x2c74c3['\x71\x44\x78\x47\x7a']=function(_0x3bc81,_0x27e436){return _0x3bc81>_0x27e436;};_0x2c74c3['\x63\x63\x46\x50\x77']=_0x41f5('0x24');_0x2c74c3[_0x41f5('0x25')]=function(_0x53471e,_0x3934d7){return _0x53471e===_0x3934d7;};_0x2c74c3[_0x41f5('0x26')]=_0x41f5('0x21');_0x2c74c3[_0x41f5('0x27')]=_0x41f5('0x28');_0x2c74c3[_0x41f5('0x29')]=_0x41f5('0x2a');_0x2c74c3[_0x41f5('0x2b')]=function(_0x3e70da,_0x5f5bd1){return _0x3e70da===_0x5f5bd1;};_0x2c74c3[_0x41f5('0x2c')]=function(_0x16cda5,_0x3416c5){return _0x16cda5(_0x3416c5);};_0x2c74c3['\x43\x71\x48\x6a\x43']=_0x41f5('0x2d');_0x2c74c3['\x4c\x68\x52\x75\x7a']=_0x41f5('0x2e');_0x2c74c3[_0x41f5('0x2f')]=_0x41f5('0x30');_0x2c74c3[_0x41f5('0x31')]=function(_0x4c28f6,_0x4dd270,_0x23bf20){return _0x4c28f6(_0x4dd270,_0x23bf20);};_0x2c74c3[_0x41f5('0x32')]=_0x41f5('0x33');_0x2c74c3['\x75\x75\x46\x6d\x6f']=function(_0x255945,_0x9a75d1){return _0x255945(_0x9a75d1);};_0x2c74c3[_0x41f5('0x34')]=function(_0xf618a5,_0x349fb0){return _0xf618a5(_0x349fb0);};_0x2c74c3['\x67\x65\x63\x43\x73']=_0x41f5('0x19');_0x2c74c3[_0x41f5('0x35')]=_0x41f5('0x36');_0x2c74c3[_0x41f5('0x37')]=_0x41f5('0x38');_0x2c74c3[_0x41f5('0x39')]=function(_0x39099,_0x5a3c3e){return _0x39099===_0x5a3c3e;};_0x2c74c3[_0x41f5('0x3a')]=_0x41f5('0x3b');_0x2c74c3[_0x41f5('0x3c')]=_0x41f5('0x3d');_0x2c74c3[_0x41f5('0x3e')]=_0x41f5('0x3f');_0x2c74c3[_0x41f5('0x40')]=function(_0xb8829d,_0x2798b6){return _0xb8829d(_0x2798b6);};_0x2c74c3[_0x41f5('0x41')]=_0x41f5('0x11');_0x2c74c3[_0x41f5('0x42')]=function(_0x6cfadb,_0xc1c96e){return _0x6cfadb===_0xc1c96e;};_0x2c74c3[_0x41f5('0x43')]=_0x41f5('0x44');_0x2c74c3[_0x41f5('0x45')]=function(_0x16459c,_0x3af87f){return _0x16459c===_0x3af87f;};
_0x2c74c3[_0x41f5('0x46')]=_0x41f5('0x47');_0x2c74c3[_0x41f5('0x48')]=function(_0x527f8e,_0x1358af){return _0x527f8e===_0x1358af;};_0x2c74c3['\x73\x75\x4b\x6c\x6d']=_0x41f5('0x49');_0x2c74c3[_0x41f5('0x4a')]=function(_0x54a7a1,_0x5536bd){return _0x54a7a1(_0x5536bd);};_0x2c74c3['\x4f\x51\x77\x45\x57']=_0x41f5('0x4b');_0x2c74c3[_0x41f5('0x4c')]=function(_0x1d8f98,_0x4da909){return _0x1d8f98===_0x4da909;};_0x2c74c3[_0x41f5('0x4d')]='\x63\x65\x6e\x74\x65\x72\x50\x61\x6c\x6c\x65\x74';_0x2c74c3[_0x41f5('0x4e')]='\x23\x63\x6f\x6e\x66\x69\x67\x2d\x63\x65\x6e\x74\x65\x72\x70\x61\x6c\x6c\x65\x74';_0x2c74c3[_0x41f5('0x4f')]='\x43\x65\x6e\x74\x65\x72';_0x2c74c3['\x70\x49\x72\x56\x55']=_0x41f5('0x50');_0x2c74c3[_0x41f5('0x51')]='\x64\x69\x76\x23\x63\x6f\x6c\x6f\x72\x73';_0x2c74c3['\x6b\x6f\x55\x50\x48']=_0x41f5('0x52');_0x2c74c3[_0x41f5('0x53')]=function(_0x415cca,_0x276876){return _0x415cca(_0x276876);};_0x2c74c3[_0x41f5('0x54')]=_0x41f5('0x55');_0x2c74c3[_0x41f5('0x56')]=_0x41f5('0x57');_0x2c74c3[_0x41f5('0x58')]=_0x41f5('0x59');_0x2c74c3['\x51\x74\x41\x49\x6e']='\x67\x72\x6f\x75\x70\x55\x70';_0x2c74c3[_0x41f5('0x5a')]=_0x41f5('0x5b');_0x2c74c3[_0x41f5('0x5c')]=_0x41f5('0x5d');_0x2c74c3[_0x41f5('0x5e')]=_0x41f5('0x5f');_0x2c74c3[_0x41f5('0x60')]='\x23\x63\x6f\x6e\x66\x69\x67\x2d\x74\x65\x78\x74\x20\x6f\x70\x74\x69\x6f\x6e\x3a\x73\x65\x6c\x65\x63\x74\x65\x64';_0x2c74c3[_0x41f5('0x61')]=_0x41f5('0x62');_0x2c74c3[_0x41f5('0x63')]=function(_0x3b1f82,_0x4ccf5d){return _0x3b1f82(_0x4ccf5d);};_0x2c74c3['\x48\x73\x49\x4c\x56']=_0x41f5('0x64');_0x2c74c3[_0x41f5('0x65')]=_0x41f5('0x66');_0x2c74c3[_0x41f5('0x67')]=function(_0xbd21a6,_0x3a039d){return _0xbd21a6(_0x3a039d);};_0x2c74c3[_0x41f5('0x68')]=_0x41f5('0x69');_0x2c74c3[_0x41f5('0x6a')]=_0x41f5('0x6b');_0x2c74c3[_0x41f5('0x6c')]=_0x41f5('0x6d');_0x2c74c3[_0x41f5('0x6e')]=_0x41f5('0x6f');_0x2c74c3[_0x41f5('0x70')]=_0x41f5('0x71');_0x2c74c3[_0x41f5('0x72')]=_0x41f5('0x73');_0x2c74c3[_0x41f5('0x74')]=_0x41f5('0x75');if(_0x2c74c3[_0x41f5('0x25')](typeof $['\x63\x6f\x6f\x6b\x69\x65'](_0x41f5('0x28')),_0x2c74c3[_0x41f5('0x26')])){$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x27')],_0x2c74c3[_0x41f5('0x29')],{'expires':0x16d});
}else{if(_0x2c74c3[_0x41f5('0x2b')]($[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x27')]),_0x41f5('0x76'))){_0x2c74c3[_0x41f5('0x2c')]($,_0x2c74c3[_0x41f5('0x77')])[_0x41f5('0x78')]();_0x2c74c3['\x4a\x4a\x67\x46\x56']($,_0x2c74c3[_0x41f5('0x79')])[_0x41f5('0x7a')]();}}if(typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x2f')])===_0x2c74c3[_0x41f5('0x26')]){_0x2c74c3[_0x41f5('0x31')](getCursorColor,_0x2c74c3[_0x41f5('0x32')],true);}else{/*console.log(_0x2c74c3['\x75\x75\x46\x6d\x6f'](getCursorColor,$['\x63\x6f\x6f\x6b\x69\x65'](_0x2c74c3[_0x41f5('0x2f')])));*/_0x2c74c3[_0x41f5('0x34')](getCursorColor,$[_0x41f5('0x1f')](_0x41f5('0x30')));}if(_0x2c74c3[_0x41f5('0x2b')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7c')]),_0x2c74c3[_0x41f5('0x26')])){$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7c')],0x0,{'expires':0x16d});
}if(_0x2c74c3[_0x41f5('0x2b')](typeof $['\x63\x6f\x6f\x6b\x69\x65'](_0x2c74c3[_0x41f5('0x35')]),_0x41f5('0x21'))){$['\x63\x6f\x6f\x6b\x69\x65'](_0x41f5('0x36'),cursorAlpha,{'expires':0x16d});
}else{cursorAlpha=$['\x63\x6f\x6f\x6b\x69\x65'](_0x41f5('0x36'));}if(_0x2c74c3[_0x41f5('0x2b')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x37')]),_0x2c74c3['\x43\x72\x72\x64\x54'])){$[_0x41f5('0x1f')](_0x41f5('0x38'),gridAlpha,{'expires':0x16d});
}else{gridAlpha=$['\x63\x6f\x6f\x6b\x69\x65'](_0x2c74c3[_0x41f5('0x37')]);}if(_0x2c74c3[_0x41f5('0x39')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x3a')]),_0x2c74c3[_0x41f5('0x26')])){$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x3a')],_0x2c74c3[_0x41f5('0x29')],{'expires':0x16d});
}else{showSlider=$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x3a')])===_0x2c74c3[_0x41f5('0x29')]?true:false;_0x2c74c3[_0x41f5('0x34')]($,_0x41f5('0x7d'))[_0x41f5('0x7e')](!showSlider?_0x2c74c3[_0x41f5('0x3c')]:_0x2c74c3[_0x41f5('0x3e')]);if(showSlider){_0x2c74c3[_0x41f5('0x40')]($,_0x2c74c3[_0x41f5('0x41')])['\x73\x68\x6f\x77']();}else{_0x2c74c3[_0x41f5('0x40')]($,_0x2c74c3[_0x41f5('0x41')])[_0x41f5('0x78')]();}}if(_0x2c74c3[_0x41f5('0x42')](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x43')]),_0x41f5('0x21'))){$['\x63\x6f\x6f\x6b\x69\x65'](_0x2c74c3[_0x41f5('0x43')],_0x2c74c3[_0x41f5('0x29')],{'expires':0x16d});
}else{showCursor=_0x2c74c3[_0x41f5('0x45')]($[_0x41f5('0x1f')](_0x41f5('0x44')),_0x2c74c3[_0x41f5('0x29')])?true:false;$(_0x2c74c3[_0x41f5('0x46')])[_0x41f5('0x7e')](!showCursor?_0x2c74c3[_0x41f5('0x3c')]:_0x2c74c3[_0x41f5('0x3e')]);}if(_0x2c74c3['\x73\x6e\x57\x55\x63'](typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7f')]),_0x2c74c3[_0x41f5('0x26')])){$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x7f')],_0x2c74c3[_0x41f5('0x29')],{'expires':0x16d});
}else{showGrid=$['\x63\x6f\x6f\x6b\x69\x65']('\x73\x68\x6f\x77\x47\x72\x69\x64')==='\x74\x72\x75\x65'?true:false;_0x2c74c3['\x7a\x72\x74\x69\x6a']($,_0x2c74c3[_0x41f5('0x80')])[_0x41f5('0x7e')](!showGrid?_0x2c74c3[_0x41f5('0x3c')]:_0x2c74c3['\x4e\x6b\x47\x79\x67']);}if(_0x2c74c3[_0x41f5('0x4c')](typeof $['\x63\x6f\x6f\x6b\x69\x65'](_0x41f5('0x81')),_0x2c74c3['\x43\x72\x72\x64\x54'])){$['\x63\x6f\x6f\x6b\x69\x65'](_0x2c74c3[_0x41f5('0x4d')],_0x2c74c3[_0x41f5('0x29')],{'expires':0x16d});
}else{centerPallet=_0x2c74c3[_0x41f5('0x4c')]($[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x4d')]),_0x2c74c3[_0x41f5('0x29')])?true:false;_0x2c74c3['\x7a\x72\x74\x69\x6a']($,_0x2c74c3[_0x41f5('0x4e')])[_0x41f5('0x7e')](!centerPallet?_0x2c74c3[_0x41f5('0x4f')]:_0x2c74c3[_0x41f5('0x82')]);if(!centerPallet){$(_0x2c74c3['\x58\x41\x55\x72\x55'])[_0x41f5('0x83')](_0x2c74c3[_0x41f5('0x84')]);_0x2c74c3['\x78\x6c\x50\x6a\x72']($,_0x2c74c3['\x71\x42\x42\x4d\x41'])[_0x41f5('0x83')](_0x2c74c3['\x45\x62\x62\x69\x6a']);_0x2c74c3[_0x41f5('0x53')]($,_0x2c74c3[_0x41f5('0x58')])[_0x41f5('0x83')](_0x2c74c3[_0x41f5('0x85')]);_0x2c74c3[_0x41f5('0x53')]($,_0x2c74c3[_0x41f5('0x5a')])[_0x41f5('0x83')](_0x2c74c3['\x51\x74\x41\x49\x6e']);}}if(_0x2c74c3[_0x41f5('0x4c')](typeof $[_0x41f5('0x1f')](_0x2c74c3['\x54\x6d\x67\x50\x6c']),_0x2c74c3[_0x41f5('0x26')])){$['\x63\x6f\x6f\x6b\x69\x65'](_0x2c74c3[_0x41f5('0x5c')],textDisplay,{'expires':0x16d});
}else{textDisplay=$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')]);_0x2c74c3[_0x41f5('0x53')]($,_0x2c74c3[_0x41f5('0x5e')])[_0x41f5('0x86')]('\x73\x65\x6c\x65\x63\x74\x65\x64\x49\x6e\x64\x65\x78',textDisplay);_displayText=_0x2c74c3[_0x41f5('0x53')]($,_0x2c74c3[_0x41f5('0x60')])['\x74\x65\x78\x74']();if(_0x2c74c3[_0x41f5('0x4c')](_displayText,_0x2c74c3['\x79\x71\x74\x70\x75'])){textDisplay=0x0;$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')],0x0,{'expires':0x16d});
_0x2c74c3[_0x41f5('0x63')]($,_0x2c74c3[_0x41f5('0x87')])[_0x41f5('0x7a')]();_0x2c74c3[_0x41f5('0x63')]($,_0x41f5('0x69'))[_0x41f5('0x7a')]();}else if(
_0x2c74c3[_0x41f5('0x4c')](_displayText,_0x2c74c3[_0x41f5('0x65')])){textDisplay=0x1;$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')],0x1,{'expires':0x16d});
_0x2c74c3[_0x41f5('0x67')]($,_0x41f5('0x64'))[_0x41f5('0x7a')]();_0x2c74c3[_0x41f5('0x67')]($,_0x2c74c3[_0x41f5('0x68')])[_0x41f5('0x78')]();}else if(
_0x2c74c3[_0x41f5('0x4c')](_displayText,_0x2c74c3[_0x41f5('0x6a')])){textDisplay=0x2;$[_0x41f5('0x1f')](_0x2c74c3['\x54\x6d\x67\x50\x6c'],0x2,{'expires':0x16d});
_0x2c74c3[_0x41f5('0x67')]($,_0x41f5('0x64'))[_0x41f5('0x78')]();$(_0x2c74c3[_0x41f5('0x68')])['\x73\x68\x6f\x77']();}}if(typeof $[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x6c')])===_0x2c74c3[_0x41f5('0x26')]){$[_0x41f5('0x1f')](_0x41f5('0x6d'),_zoom,{'expires':0x16d});
}else{_zoom=$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x6c')]);FinalZoom=_0x2c74c3[_0x41f5('0x67')](calcZoom,Math[_0x41f5('0x88')](1.1,_zoom));}if(_0x2c74c3[_0x41f5('0x4c')](typeof $[_0x41f5('0x1f')]('\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73'),_0x2c74c3[_0x41f5('0x26')])){$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x6e')],'',{'expires':0x16d});
}else{var _0x396274=$[_0x41f5('0x1f')](_0x2c74c3['\x6a\x49\x73\x6d\x63'])['\x73\x70\x6c\x69\x74']('\x20');/*console.log(_0x41f5('0x89')+_0x396274+_0x41f5('0x8a')+$['\x63\x6f\x6f\x6b\x69\x65'](_0x2c74c3['\x6a\x49\x73\x6d\x63'])+'\x2c\x20');*/_url=dataUrl+_0x2c74c3[_0x41f5('0x70')];$[_0x41f5('0x8b')]({'type':_0x2c74c3[_0x41f5('0x72')],'url':_url,'dataType':_0x2c74c3[_0x41f5('0x74')],'success':function(_0x44e860){categories=jQuery[_0x41f5('0x8c')](JSON[_0x41f5('0x8d')](_0x44e860))[_0x41f5('0x8e')];categories[_0x41f5('0x8f')]();for(var _0x5261f4=0x0;_0x2c74c3['\x68\x5a\x6a\x6a\x52'](_0x5261f4,categories['\x6c\x65\x6e\x67\x74\x68']);_0x5261f4++){_0x2c74c3[_0x41f5('0x23')]($,'\x23\x63\x6f\x6e\x66\x69\x67\x2d\x63\x61\x74\x65\x67\x6f\x72\x69\x65')[_0x41f5('0x8')]('\x3c\x6c\x61\x62\x65\x6c\x3e\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x22\x63\x68\x65\x63\x6b\x62\x6f\x78\x22\x20\x6e\x61\x6d\x65\x3d\x22'+categories[_0x5261f4][0x1]+'\x22\x20'+(_0x2c74c3[_0x41f5('0x90')]($[_0x41f5('0x91')](categories[_0x5261f4][0x1],_0x396274),-0x1)?_0x2c74c3[_0x41f5('0x92')]:'')+_0x41f5('0x93')+categories[_0x5261f4][0x1]+'\x22\x3e'+categories[_0x5261f4][0x0]+_0x41f5('0x94'));}}});
}/*console.log($[_0x41f5('0x1f')](_0x2c74c3['\x42\x6a\x69\x6d\x69'])+'\x20'+$[_0x41f5('0x1f')](_0x2c74c3['\x61\x57\x6b\x41\x78'])+'\x20'+$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x43')])+'\x20'+$[_0x41f5('0x1f')](_0x41f5('0x49'))+'\x20'+$[_0x41f5('0x1f')](_0x2c74c3[_0x41f5('0x5c')])+'\x20'+$[_0x41f5('0x1f')](_0x41f5('0x6d')));*/}function setupEvents(){
var _0x1cd393={};_0x1cd393[_0x41f5('0x95')]=function(_0x459eac,_0x140c70,_0xbe528c){return _0x459eac(_0x140c70,_0xbe528c);};_0x1cd393[_0x41f5('0x96')]=function(_0x50f060,_0x4fe4da){return _0x50f060(_0x4fe4da);};_0x1cd393[_0x41f5('0x97')]=_0x41f5('0x98');_0x1cd393[_0x41f5('0x99')]='\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x73\x63\x6f\x72\x64\x2e\x69\x6f\x2f\x70\x69\x78\x65\x6c\x61\x74\x6c\x61\x73';_0x1cd393[_0x41f5('0x9a')]='\x5f\x62\x6c\x61\x6e\x6b';_0x1cd393['\x55\x4e\x55\x56\x50']='\x23\x69\x6e\x70\x75\x74\x4e\x61\x6d\x65';
_0x1cd393[_0x41f5('0x9b')]=function(_0x4b08d7,_0x36d31f){return _0x4b08d7/_0x36d31f;};_0x1cd393[_0x41f5('0x9c')]=function(_0x9a1a27,_0x177190){return _0x9a1a27+_0x177190;};_0x1cd393['\x55\x4b\x6a\x71\x4c']=function(_0x17624c,_0x2336f5){return _0x17624c/_0x2336f5;};_0x1cd393[_0x41f5('0x9d')]=function(_0x20cf5f,_0xc65ae5){return _0x20cf5f==_0xc65ae5;};_0x1cd393[_0x41f5('0x9e')]=function(_0x5b9f72,_0x403a3e){return _0x5b9f72(_0x403a3e);};_0x1cd393[_0x41f5('0x9f')]=function(_0x56a729,_0x225a3e){return _0x56a729+_0x225a3e;};_0x1cd393['\x59\x52\x4c\x6e\x6b']=_0x41f5('0xa0');_0x1cd393[_0x41f5('0xa1')]=_0x41f5('0xa2');_0x1cd393[_0x41f5('0xa3')]=function(_0x340abe,_0x55d904){return _0x340abe(_0x55d904);};_0x1cd393[_0x41f5('0xa4')]=_0x41f5('0xa5');_0x1cd393[_0x41f5('0xa6')]=function(_0x34cd51){return _0x34cd51();};_0x1cd393[_0x41f5('0xa7')]=function(_0x475c31,_0xe990fb){return _0x475c31(_0xe990fb);};_0x1cd393[_0x41f5('0xa8')]=_0x41f5('0x13');_0x1cd393[_0x41f5('0xa9')]='\x63\x75\x72\x73\x6f\x72\x41\x6c\x70\x68\x61';_0x1cd393[_0x41f5('0xaa')]=function(_0x384ee0,_0x3b579f){return _0x384ee0(_0x3b579f);};_0x1cd393[_0x41f5('0xab')]=function(_0x1e383d,_0x34479c){return _0x1e383d(_0x34479c);};_0x1cd393[_0x41f5('0xac')]=function(_0x2cf85e,_0x4b3a80){return _0x2cf85e(_0x4b3a80);};_0x1cd393['\x4f\x57\x54\x4b\x4a']=_0x41f5('0x38');_0x1cd393[_0x41f5('0xad')]=function(_0x1681b5,_0x182c32){return _0x1681b5(_0x182c32);};_0x1cd393[_0x41f5('0xae')]=_0x41f5('0xaf');_0x1cd393[_0x41f5('0xb0')]=_0x41f5('0x33');_0x1cd393[_0x41f5('0xb1')]=_0x41f5('0x81');_0x1cd393[_0x41f5('0xb2')]='\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73';_0x1cd393[_0x41f5('0xb3')]='\x7a\x6f\x6f\x6d';_0x1cd393[_0x41f5('0xb4')]=_0x41f5('0x30');_0x1cd393[_0x41f5('0xb5')]='\x73\x68\x6f\x77\x47\x72\x69\x64';_0x1cd393[_0x41f5('0xb6')]=_0x41f5('0xb7');_0x1cd393[_0x41f5('0xb8')]=function(_0x2b54d7,_0x50885a){return _0x2b54d7===_0x50885a;};_0x1cd393[_0x41f5('0xb9')]='\x74\x65\x78\x74\x44\x69\x73\x70\x6c\x61\x79';_0x1cd393[_0x41f5('0xba')]=_0x41f5('0x64');_0x1cd393[_0x41f5('0xbb')]=function(_0x30a135,_0x585d32){return _0x30a135(_0x585d32);};_0x1cd393[_0x41f5('0xbc')]=_0x41f5('0x69');_0x1cd393[_0x41f5('0xbd')]=function(_0x47d377,_0x5d71d6){return _0x47d377(_0x5d71d6);};_0x1cd393[_0x41f5('0xbe')]=_0x41f5('0x6b');_0x1cd393['\x47\x55\x76\x45\x4e']=function(_0x481721,_0x1cd5f0){return _0x481721(_0x1cd5f0);};_0x1cd393[_0x41f5('0xbf')]=function(_0x2d523b,_0x402691){return _0x2d523b(_0x402691);};_0x1cd393[_0x41f5('0xc0')]=_0x41f5('0x47');_0x1cd393[_0x41f5('0xc1')]='\x53\x68\x6f\x77';_0x1cd393[_0x41f5('0xc2')]=_0x41f5('0x44');_0x1cd393[_0x41f5('0xc3')]='\x23\x63\x6f\x6e\x66\x69\x67\x2d\x68\x69\x64\x65\x67\x72\x69\x64';_0x1cd393[_0x41f5('0xc4')]=_0x41f5('0x3f');_0x1cd393[_0x41f5('0xc5')]=function(_0x416ab0,_0x3c0877){return _0x416ab0(_0x3c0877);};_0x1cd393[_0x41f5('0xc6')]='\x23\x63\x6f\x6e\x66\x69\x67\x2d\x68\x69\x64\x65\x7a\x6f\x6f\x6d';_0x1cd393[_0x41f5('0xc7')]=function(_0x699491,_0xb0b502){return _0x699491(_0xb0b502);};_0x1cd393[_0x41f5('0xc8')]=_0x41f5('0x11');_0x1cd393['\x42\x73\x74\x67\x4d']=_0x41f5('0x3b');_0x1cd393[_0x41f5('0xc9')]=_0x41f5('0xca');_0x1cd393[_0x41f5('0xcb')]=_0x41f5('0xcc');_0x1cd393[_0x41f5('0xcd')]=_0x41f5('0x50');_0x1cd393[_0x41f5('0xce')]=function(_0x39e7d6,_0xb38309){return _0x39e7d6(_0xb38309);};_0x1cd393[_0x41f5('0xcf')]='\x64\x69\x76\x23\x63\x6f\x6c\x6f\x72\x73';_0x1cd393[_0x41f5('0xd0')]='\x63\x6f\x6c\x6f\x72\x73\x4c\x65\x66\x74';_0x1cd393[_0x41f5('0xd1')]=_0x41f5('0x55');_0x1cd393[_0x41f5('0xd2')]=_0x41f5('0x57');_0x1cd393['\x46\x6f\x4f\x63\x78']=_0x41f5('0x59');_0x1cd393[_0x41f5('0xd3')]=_0x41f5('0xd4');_0x1cd393[_0x41f5('0xd5')]=function(_0x58b2b7,_0x3687d6){return _0x58b2b7(_0x3687d6);};_0x1cd393[_0x41f5('0xd6')]=_0x41f5('0x5b');_0x1cd393[_0x41f5('0xd7')]=_0x41f5('0xd8');_0x1cd393['\x66\x43\x51\x62\x74']=function(_0xb7a1c,_0x2c0c13){return _0xb7a1c(_0x2c0c13);};_0x1cd393[_0x41f5('0xd9')]=_0x41f5('0xda');_0x1cd393[_0x41f5('0xdb')]=function(_0xb54215,_0x2eb378){return _0xb54215>_0x2eb378;};_0x1cd393[_0x41f5('0xdc')]=function(_0x49c399,_0x814681){return _0x49c399(_0x814681);};_0x1cd393[_0x41f5('0xdd')]=_0x41f5('0xde');_0x1cd393[_0x41f5('0xdf')]=function(_0x36b20f){return _0x36b20f();};_0x1cd393[_0x41f5('0xe0')]=_0x41f5('0xe1');_0x1cd393['\x56\x55\x6e\x47\x6c']=function(_0x5b1748,_0x9617b7){return _0x5b1748(_0x9617b7);};_0x1cd393[_0x41f5('0xe2')]=function(_0x199612,_0xec4b7d){return _0x199612(_0xec4b7d);};_0x1cd393['\x64\x42\x44\x50\x50']=_0x41f5('0x2d');_0x1cd393[_0x41f5('0xe3')]='\x6d\x69\x6e\x69\x6d\x69\x7a\x65';_0x1cd393['\x65\x52\x47\x58\x52']=_0x41f5('0x2e');_0x1cd393[_0x41f5('0xe4')]=_0x41f5('0x28');_0x1cd393[_0x41f5('0xe5')]=function(_0x345e9f,_0x5d1262){return _0x345e9f(_0x5d1262);};_0x1cd393[_0x41f5('0xe6')]=_0x41f5('0x2a');_0x1cd393[_0x41f5('0xe7')]=_0x41f5('0xe8');_0x1cd393['\x61\x5a\x69\x43\x52']=function(_0x1f0d82,_0x4ef0f3){return _0x1f0d82(_0x4ef0f3);};_0x1cd393[_0x41f5('0xe9')]=function(_0x455238){return _0x455238();};_0x1cd393[_0x41f5('0xea')]=function(_0xda4090,_0x29d753){return _0xda4090(_0x29d753);};_0x1cd393[_0x41f5('0xeb')]=_0x41f5('0xec');_0x1cd393['\x66\x4b\x76\x58\x69']=function(_0x1d40e4,_0x1d5779){return _0x1d40e4(_0x1d5779);};_0x1cd393['\x79\x55\x43\x6a\x58']=function(_0x2efe4b,_0x434362){return _0x2efe4b(_0x434362);};_0x1cd393[_0x41f5('0xed')]=function(_0x17434d,_0x9491e8){return _0x17434d(_0x9491e8);};_0x1cd393[_0x41f5('0xee')]=function(_0x127637,_0x4758d7){return _0x127637(_0x4758d7);};_0x1cd393[_0x41f5('0xef')]=_0x41f5('0xf0');_0x1cd393[_0x41f5('0xf1')]=_0x41f5('0xf2');_0x1cd393['\x63\x51\x6f\x71\x46']=function(_0x2d924b,_0x18675e){return _0x2d924b(_0x18675e);};_0x1cd393[_0x41f5('0xf3')]=_0x41f5('0xf4');_0x1cd393[_0x41f5('0xf5')]=_0x41f5('0xf6');_0x1cd393[_0x41f5('0xf7')]='\x23\x63\x6f\x6e\x66\x69\x67\x2d\x72\x65\x73\x65\x74';_0x1cd393[_0x41f5('0xf8')]='\x23\x63\x6f\x6e\x66\x69\x67\x2d\x74\x65\x78\x74';_0x1cd393[_0x41f5('0xf9')]='\x76\x65\x72\x74\x69\x63\x61\x6c';_0x1cd393[_0x41f5('0xfa')]=_0x41f5('0x3');_0x1cd393[_0x41f5('0xfb')]=_0x41f5('0xfc');_0x1cd393[_0x41f5('0xfd')]=function(_0x4c5ccc,_0x2984ac){return _0x4c5ccc(_0x2984ac);};_0x1cd393[_0x41f5('0xfe')]=_0x41f5('0xff');_0x1cd393['\x55\x50\x76\x44\x56']=_0x41f5('0x100');_0x1cd393[_0x41f5('0x101')]=function(_0x43b970,_0x1a9ed0){return _0x43b970(_0x1a9ed0);};_0x1cd393[_0x41f5('0x102')]=_0x41f5('0x103');_0x1cd393[_0x41f5('0x104')]='\x23\x67\x61\x6d\x65\x57\x69\x6e\x64\x6f\x77';_0x1cd393[_0x41f5('0xea')]($,_0x1cd393['\x6f\x53\x4c\x6f\x4c'])[_0x41f5('0x105')]
(function(){_0x1cd393[_0x41f5('0x95')](getCursorColor,$(this)[_0x41f5('0x106')](),true);});
_0x1cd393[_0x41f5('0x107')]($,_0x41f5('0x108'))[_0x41f5('0x109')]
(function(){$[_0x41f5('0x1f')](_0x41f5('0x19'),0x1,{'expires':0x16d});
_0x1cd393[_0x41f5('0x96')]($,_0x1cd393[_0x41f5('0x97')])[_0x41f5('0x10a')](0x64);});
_0x1cd393[_0x41f5('0x10b')]($,_0x41f5('0x10c'))[_0x41f5('0x109')]
(function(){window[_0x41f5('0x10d')](_0x1cd393[_0x41f5('0x99')],_0x1cd393['\x65\x6a\x63\x5a\x53']);});
_0x1cd393[_0x41f5('0xed')]($,_0x1cd393[_0x41f5('0x10e')])[_0x41f5('0x10f')]({'source':availableFactions});
_0x1cd393[_0x41f5('0xee')]($,_0x1cd393['\x74\x66\x72\x59\x52'])[_0x41f5('0x109')]
(function(){inputTxt=_0x1cd393[_0x41f5('0x96')]($,_0x1cd393['\x55\x4e\x55\x56\x50'])[_0x41f5('0x106')]();if(templateList[_0x41f5('0x110')](inputTxt)){
var _0x4ed03f=Math[_0x41f5('0x111')](templateList[inputTxt]['\x78']+_0x1cd393['\x44\x64\x52\x4a\x53'](templateList[inputTxt]['\x77\x69\x64\x74\x68'],0x2));var _0x237aa0=Math['\x72\x6f\x75\x6e\x64'](_0x1cd393[_0x41f5('0x9c')](templateList[inputTxt]['\x79'],_0x1cd393[_0x41f5('0x112')](templateList[inputTxt][_0x41f5('0x113')],0x2)));window[_0x41f5('0x114')][_0x41f5('0x115')](_0x41f5('0x116')+_0x4ed03f+'\x2c'+_0x237aa0);}});
_0x1cd393[_0x41f5('0xee')]($,_0x1cd393[_0x41f5('0x10e')])['\x6b\x65\x79\x70\x72\x65\x73\x73']
(function(_0xd167a){if(_0x1cd393['\x76\x55\x70\x76\x79'](_0xd167a['\x77\x68\x69\x63\x68'],0xd)){inputTxt=_0x1cd393[_0x41f5('0x9e')]($,_0x41f5('0x117'))[_0x41f5('0x106')]();if(templateList[_0x41f5('0x110')](inputTxt)){
var _0x55e907=Math[_0x41f5('0x111')](templateList[inputTxt]['\x78']+_0x1cd393[_0x41f5('0x112')](templateList[inputTxt]['\x77\x69\x64\x74\x68'],0x2));var _0x4de2db=Math[_0x41f5('0x111')](_0x1cd393[_0x41f5('0x9f')](templateList[inputTxt]['\x79'],_0x1cd393['\x55\x4b\x6a\x71\x4c'](templateList[inputTxt][_0x41f5('0x113')],0x2)));window[_0x41f5('0x114')][_0x41f5('0x115')](_0x41f5('0x116')+_0x55e907+'\x2c'+_0x4de2db);}}});
_0x1cd393[_0x41f5('0xee')]($,_0x1cd393[_0x41f5('0xf1')])[_0x41f5('0x109')]
(function(){
var _0x390412=_0x1cd393[_0x41f5('0x118')][_0x41f5('0x1c')]('\x7c'),_0xed5296=0x0;while(true){switch(_0x390412[_0xed5296++]){case'\x30':_0xf031b2[_0x41f5('0x119')](0x1f4);continue;case'\x31':if(_0x53f2ab[_0x41f5('0x11a')]>0x0){_0x1cd393['\x6f\x7a\x46\x69\x44']($,_0x1cd393[_0x41f5('0xa1')])[_0x41f5('0x10a')](0x1f4);return;}continue;case'\x32':var _0x53f2ab=$(_0x1cd393['\x78\x5a\x77\x41\x63']);continue;case'\x33':var _0xf031b2=_0x1cd393[_0x41f5('0xa3')]($,_0x1cd393[_0x41f5('0xa4')]);continue;case'\x34':_0x1cd393[_0x41f5('0xa6')](VisibleBoxies);continue;}break;}});
var _0x55304d=_0x1cd393[_0x41f5('0x11b')]($,_0x41f5('0x11c'));$(_0x41f5('0x11d'))[_0x41f5('0x1e')]({'range':_0x41f5('0x3'),'min':0x0,'max':0x64,'value':$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xa9')]),'create':function(){val=_0x1cd393[_0x41f5('0xa7')]($,this)[_0x41f5('0x1e')](_0x1cd393['\x42\x62\x6b\x78\x47']);_0x55304d['\x74\x65\x78\x74'](val);cursorAlpha=parseInt(val);$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xa9')],cursorAlpha,{'expires':0x16d});
},'slide':function(_0x4da056,_0x31ef8f){val=_0x31ef8f[_0x41f5('0x13')];_0x55304d[_0x41f5('0x7e')](_0x31ef8f[_0x41f5('0x13')]);cursorAlpha=_0x1cd393[_0x41f5('0xaa')](parseInt,val);$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xa9')],cursorAlpha,{'expires':0x16d});
}});
var _0x451535=$(_0x1cd393[_0x41f5('0xf3')]);$(_0x1cd393[_0x41f5('0xf5')])[_0x41f5('0x1e')]({'range':'\x6d\x69\x6e','min':0x0,'max':0x64,'value':$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0x11e')]),'create':function(){val=_0x1cd393[_0x41f5('0xab')]($,this)[_0x41f5('0x1e')](_0x1cd393[_0x41f5('0xa8')]);_0x451535['\x74\x65\x78\x74']($(this)[_0x41f5('0x1e')](_0x41f5('0x13')));gridAlpha=_0x1cd393[_0x41f5('0xac')](parseInt,val);$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0x11e')],gridAlpha,{'expires':0x16d});
},'slide':function(_0x71bb6,_0xa04f5){val=_0xa04f5[_0x41f5('0x13')];_0x451535[_0x41f5('0x7e')](_0xa04f5[_0x41f5('0x13')]);gridAlpha=_0x1cd393[_0x41f5('0xad')](parseInt,val);$[_0x41f5('0x1f')]('\x67\x72\x69\x64\x41\x6c\x70\x68\x61',gridAlpha,{'expires':0x16d});
}});
_0x1cd393[_0x41f5('0x11b')]($,_0x1cd393[_0x41f5('0xf7')])[_0x41f5('0x109')]
(function(){if(window[_0x41f5('0x11f')](_0x41f5('0x120'))){
var _0x4db085=_0x1cd393['\x68\x63\x5a\x47\x4f'][_0x41f5('0x1c')]('\x7c'),_0x5b8047=0x0;while(true){switch(_0x4db085[_0x5b8047++]){case'\x30':cursorColor=_0x1cd393[_0x41f5('0xb0')];continue;case'\x31':$[_0x41f5('0x1f')](_0x41f5('0x5d'),textDisplay,{'expires':0x16d});
continue;case'\x32':$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb1')],centerPallet,{'expires':0x16d});
continue;case'\x33':cursorAlpha=0x5a;continue;case'\x34':$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb2')],'',{'expires':0x16d});
continue;case'\x35':$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb3')],_zoom,{'expires':0x16d});
continue;case'\x36':gridAlpha=0x32;continue;case'\x37':_0x55304d[_0x41f5('0x7e')](cursorAlpha);continue;case'\x38':window[_0x41f5('0x114')][_0x41f5('0x121')]();continue;case'\x39':showCursor=true;continue;case'\x31\x30':_0x451535[_0x41f5('0x7e')](gridAlpha);continue;case'\x31\x31':$[_0x41f5('0x1f')](_0x41f5('0x44'),showCursor,{'expires':0x16d});
continue;case'\x31\x32':$['\x63\x6f\x6f\x6b\x69\x65'](_0x1cd393['\x4f\x57\x54\x4b\x4a'],gridAlpha,{'expires':0x16d});
continue;case'\x31\x33':$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb4')],_0x1cd393[_0x41f5('0xb0')],{'expires':0x16d});
continue;case'\x31\x34':showGrid=true;continue;case'\x31\x35':centerPallet=true;continue;case'\x31\x36':$['\x63\x6f\x6f\x6b\x69\x65'](_0x1cd393[_0x41f5('0xb5')],showGrid,{'expires':0x16d});
continue;case'\x31\x37':$[_0x41f5('0x1f')](_0x1cd393['\x50\x6b\x68\x66\x49'],cursorAlpha,{'expires':0x16d});
continue;case'\x31\x38':showSlider=true;continue;case'\x31\x39':textDisplay=0x0;continue;case'\x32\x30':_zoom=0x1e;continue;}break;}}});
$(_0x1cd393[_0x41f5('0xf8')])[_0x41f5('0x109')]
(function(){_displayText=$(_0x1cd393[_0x41f5('0xb6')])[_0x41f5('0x7e')]();/*console.log(_displayText);*/if(_0x1cd393['\x55\x57\x45\x58\x45'](_displayText,_0x41f5('0x62'))){textDisplay=0x0;$['\x63\x6f\x6f\x6b\x69\x65'](_0x1cd393['\x42\x6c\x4a\x6b\x46'],0x0,{'expires':0x16d});
_0x1cd393[_0x41f5('0xad')]($,_0x1cd393[_0x41f5('0xba')])[_0x41f5('0x7a')]();_0x1cd393[_0x41f5('0xbb')]($,_0x1cd393['\x65\x72\x67\x64\x6d'])[_0x41f5('0x7a')]();}else if(
_displayText==='\x54\x65\x78\x74\x20\x6f\x6e\x6c\x79'){textDisplay=0x1;$[_0x41f5('0x1f')](_0x1cd393['\x42\x6c\x4a\x6b\x46'],0x1,{'expires':0x16d});
_0x1cd393[_0x41f5('0xbd')]($,_0x1cd393[_0x41f5('0xba')])[_0x41f5('0x7a')]();_0x1cd393['\x4b\x57\x66\x49\x58']($,_0x1cd393[_0x41f5('0xbc')])['\x68\x69\x64\x65']();}else if(
_0x1cd393[_0x41f5('0xb8')](_displayText,_0x1cd393['\x61\x61\x67\x50\x4e'])){textDisplay=0x2;$[_0x41f5('0x1f')](_0x1cd393['\x42\x6c\x4a\x6b\x46'],0x2,{'expires':0x16d});
_0x1cd393[_0x41f5('0x122')]($,_0x41f5('0x64'))[_0x41f5('0x78')]();_0x1cd393[_0x41f5('0x122')]($,_0x41f5('0x69'))[_0x41f5('0x7a')]();}});
_0x1cd393[_0x41f5('0x11b')]($,_0x1cd393[_0x41f5('0xc0')])[_0x41f5('0x109')]
(function(){showCursor=!showCursor;_0x1cd393[_0x41f5('0xbf')]($,_0x1cd393[_0x41f5('0xc0')])[_0x41f5('0x7e')](!showCursor?_0x1cd393[_0x41f5('0xc1')]:_0x41f5('0x3f'));$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xc2')],showCursor,{'expires':0x16d});
});
_0x1cd393['\x63\x51\x6f\x71\x46']($,_0x1cd393['\x41\x45\x63\x6f\x52'])[_0x41f5('0x109')]
(function(){showGrid=!showGrid;$(_0x1cd393[_0x41f5('0xc3')])[_0x41f5('0x7e')](!showGrid?_0x1cd393[_0x41f5('0xc1')]:_0x1cd393[_0x41f5('0xc4')]);$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb5')],showGrid,{'expires':0x16d});
});
$(_0x1cd393[_0x41f5('0xc6')])[_0x41f5('0x109')]
(function(){showSlider=!showSlider;_0x1cd393[_0x41f5('0xc5')]($,_0x1cd393[_0x41f5('0xc6')])[_0x41f5('0x7e')](!showSlider?_0x41f5('0x3d'):_0x1cd393[_0x41f5('0xc4')]);if(showSlider){_0x1cd393[_0x41f5('0xc7')]($,_0x1cd393[_0x41f5('0xc8')])[_0x41f5('0x7a')]();}else{_0x1cd393[_0x41f5('0xc7')]($,_0x1cd393[_0x41f5('0xc8')])['\x68\x69\x64\x65']();}$['\x63\x6f\x6f\x6b\x69\x65'](_0x1cd393[_0x41f5('0x123')],showSlider,{'expires':0x16d});
});
_0x1cd393[_0x41f5('0x11b')]($,_0x1cd393[_0x41f5('0xc9')])['\x63\x6c\x69\x63\x6b']
(function(){centerPallet=!centerPallet;$(_0x1cd393['\x5a\x6b\x41\x77\x46'])[_0x41f5('0x7e')](!centerPallet?_0x1cd393[_0x41f5('0xcb')]:_0x1cd393[_0x41f5('0xcd')]);_0x1cd393[_0x41f5('0xce')]($,_0x1cd393[_0x41f5('0xcf')])[_0x41f5('0x124')](_0x1cd393['\x6b\x66\x59\x6d\x64']);$(_0x1cd393[_0x41f5('0xd1')])['\x74\x6f\x67\x67\x6c\x65\x43\x6c\x61\x73\x73'](_0x1cd393[_0x41f5('0xd2')]);$(_0x1cd393[_0x41f5('0x125')])[_0x41f5('0x124')](_0x1cd393[_0x41f5('0xd3')]);_0x1cd393[_0x41f5('0xd5')]($,_0x1cd393[_0x41f5('0xd6')])[_0x41f5('0x124')](_0x1cd393[_0x41f5('0xd3')]);$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xb1')],centerPallet,{'expires':0x16d});
});
_0x1cd393['\x63\x51\x6f\x71\x46']($,_0x1cd393[_0x41f5('0xc8')])['\x73\x6c\x69\x64\x65\x72']({'orientation':_0x1cd393[_0x41f5('0xf9')],'range':_0x1cd393[_0x41f5('0xfa')],'min':0xa,'max':0x3c,'value':0x1e,'slide':function(_0x54d3b0,_0x23bd3d){_zoom=_0x23bd3d[_0x41f5('0x13')];FinalZoom=calcZoom(Math[_0x41f5('0x88')](1.1,_zoom));$[_0x41f5('0x1f')](_0x41f5('0x6d'),_zoom,{'expires':0x16d});
}});
_0x1cd393[_0x41f5('0x11b')]($,_0x1cd393[_0x41f5('0xfb')])[_0x41f5('0x109')]
(function(){
var _0x1bf50a=_0x1cd393[_0x41f5('0xd7')][_0x41f5('0x1c')]('\x7c'),_0x2bb8f2=0x0;while(true){switch(_0x1bf50a[_0x2bb8f2++]){case'\x30':_0x3a05a6[_0x41f5('0x119')](0x1f4);continue;case'\x31':var _0x500551=_0x1cd393[_0x41f5('0x126')]($,_0x1cd393['\x6c\x69\x4c\x73\x68']);continue;case'\x32':if(_0x1cd393[_0x41f5('0xdb')](_0x500551[_0x41f5('0x11a')],0x0)){_0x1cd393[_0x41f5('0xdc')]($,_0x1cd393[_0x41f5('0xd9')])['\x73\x6c\x69\x64\x65\x55\x70'](0x1f4);return;}continue;case'\x33':var _0x3a05a6=$(_0x1cd393['\x74\x6e\x59\x67\x44']);continue;case'\x34':_0x1cd393[_0x41f5('0xdf')](VisibleBoxies);continue;}break;}});
_0x1cd393[_0x41f5('0xfd')]($,_0x1cd393[_0x41f5('0xfe')])[_0x41f5('0x109')]
(function(){
var _0x449425=$(_0x1cd393[_0x41f5('0xdd')]);if(_0x449425['\x69\x73'](_0x1cd393[_0x41f5('0xe0')])){_0x449425[_0x41f5('0x10a')](0x1f4);return;}var _0xe76531=_0x1cd393[_0x41f5('0xdc')]($,_0x1cd393[_0x41f5('0xd9')]);if(_0x1cd393[_0x41f5('0xdb')](_0xe76531[_0x41f5('0x11a')],0x0)){_0x1cd393[_0x41f5('0xdc')]($,_0x1cd393[_0x41f5('0xd9')])[_0x41f5('0x10a')](0x1f4);}});
_0x1cd393[_0x41f5('0xfd')]($,_0x1cd393[_0x41f5('0x127')])[_0x41f5('0x109')]
(function(){
var _0x11141f=_0x1cd393[_0x41f5('0xdc')]($,_0x1cd393[_0x41f5('0xa4')]);if(_0x11141f['\x69\x73'](_0x1cd393['\x65\x48\x6e\x52\x4d'])){_0x11141f[_0x41f5('0x10a')](0x1f4);return;}var _0x4f128f=_0x1cd393[_0x41f5('0x128')]($,_0x41f5('0xa2'));if(_0x4f128f[_0x41f5('0x11a')]>0x0){_0x1cd393[_0x41f5('0xe2')]($,_0x1cd393[_0x41f5('0xa1')])[_0x41f5('0x10a')](0x1f4);}});
_0x1cd393[_0x41f5('0x101')]($,_0x41f5('0x2d'))[_0x41f5('0x129')]
(function(){if($(_0x1cd393[_0x41f5('0x12a')])[_0x41f5('0x12b')](_0x1cd393[_0x41f5('0xe3')])){_0x1cd393[_0x41f5('0xe2')]($,_0x1cd393[_0x41f5('0x12a')])[_0x41f5('0x12c')](_0x1cd393[_0x41f5('0xe3')]);}});
_0x1cd393[_0x41f5('0x101')]($,_0x1cd393[_0x41f5('0x102')])[_0x41f5('0x109')]
(function(){$(_0x1cd393[_0x41f5('0x12a')])[_0x41f5('0x78')]();$(_0x1cd393[_0x41f5('0x12d')])[_0x41f5('0x7a')]();$['\x63\x6f\x6f\x6b\x69\x65'](_0x1cd393['\x68\x78\x71\x45\x61'],'\x66\x61\x6c\x73\x65',{'expires':0x16d});
});
_0x1cd393[_0x41f5('0x101')]($,_0x1cd393[_0x41f5('0x12d')])[_0x41f5('0x109')]
(function(){$(_0x1cd393[_0x41f5('0x12a')])['\x73\x68\x6f\x77']();_0x1cd393[_0x41f5('0xe5')]($,_0x1cd393[_0x41f5('0x12d')])[_0x41f5('0x78')]();$[_0x41f5('0x1f')](_0x1cd393[_0x41f5('0xe4')],_0x1cd393[_0x41f5('0xe6')],{'expires':0x16d});
});
_0x1cd393[_0x41f5('0x101')]($,_0x1cd393[_0x41f5('0x104')])[_0x41f5('0x12e')]
(function(){
var _0x1d5eb1=_0x1cd393[_0x41f5('0xe7')][_0x41f5('0x1c')]('\x7c'),_0x2c870=0x0;while(true){switch(_0x1d5eb1[_0x2c870++]){case'\x30':_0x1cd393['\x6f\x54\x58\x58\x77'](drawCursor);continue;case'\x31':_0x1cd393['\x6f\x54\x58\x58\x77'](drawGrid);continue;case'\x32':var _0xd7e6f0=_0x1cd393['\x77\x50\x71\x67\x48']($,_0x41f5('0x12f'))[0x0][_0x41f5('0x130')][_0x41f5('0x115')]('\x28','')['\x72\x65\x70\x6c\x61\x63\x65']('\x29','')['\x73\x70\x6c\x69\x74']('\x2c');continue;case'\x33':curX=_0x1cd393[_0x41f5('0x131')](parseInt,_0xd7e6f0[0x0]);continue;case'\x34':_0x1cd393[_0x41f5('0xe9')](loadTemplates);continue;case'\x35':curY=_0x1cd393[_0x41f5('0xea')](parseInt,_0xd7e6f0[0x1]);continue;}break;}});
}

function getCursorColor(_0x4d6b0b, _0x49e0d1 = false) {
  var _0x5a6ee7 = {};
  _0x5a6ee7["UXNIm"] = _0x41f5("0x33");
  _0x5a6ee7[_0x41f5("0x132")] = "#CursorColor";
  _0x5a6ee7[_0x41f5("0x133")] = _0x41f5("0x134");
  _0x5a6ee7["isYgf"] = _0x41f5("0xd");
  _0x5a6ee7[_0x41f5("0x135")] = _0x41f5("0x30");
  _0x5a6ee7[_0x41f5("0x136")] = _0x41f5("0x137");
  _0x5a6ee7[_0x41f5("0x138")] = function(_0x105f67, _0x4682f5) {
    return _0x105f67(_0x4682f5);
  };
  _0x5a6ee7[_0x41f5("0x139")] = _0x41f5("0x13a");
  _0x5a6ee7[_0x41f5("0x13b")] = _0x41f5("0x13c");
  _0x5a6ee7[_0x41f5("0x13d")] = function(_0x24233d, _0x3273e3) {
    return _0x24233d(_0x3273e3);
  };
  _0x5a6ee7[_0x41f5("0x13e")] = _0x41f5("0x13f");
  _0x5a6ee7[_0x41f5("0x140")] = "TEAL";
  _0x5a6ee7[_0x41f5("0x141")] = function(_0xcde2, _0x50485f) {
    return _0xcde2(_0x50485f);
  };
  _0x5a6ee7[_0x41f5("0x142")] = _0x41f5("0x143");
  _0x5a6ee7[_0x41f5("0x144")] = _0x41f5("0x145");
  _0x5a6ee7[_0x41f5("0x146")] = "#3D9970";
  _0x5a6ee7[_0x41f5("0x147")] = _0x41f5("0x148");
  _0x5a6ee7[_0x41f5("0x149")] = _0x41f5("0x14a");
  _0x5a6ee7[_0x41f5("0x14b")] = _0x41f5("0x14c");
  _0x5a6ee7[_0x41f5("0x14d")] = _0x41f5("0x14e");
  _0x5a6ee7[_0x41f5("0x14f")] = _0x41f5("0x150");
  _0x5a6ee7[_0x41f5("0x151")] = "#FFDC00";
  _0x5a6ee7[_0x41f5("0x152")] = "ORANGE";
  _0x5a6ee7[_0x41f5("0x153")] = function(_0x109a46, _0x1576c5) {
    return _0x109a46(_0x1576c5);
  };
  _0x5a6ee7[_0x41f5("0x154")] = _0x41f5("0x155");
  _0x5a6ee7[_0x41f5("0x156")] = _0x41f5("0x157");
  _0x5a6ee7[_0x41f5("0x158")] = _0x41f5("0x159");
  _0x5a6ee7["lDvgg"] = _0x41f5("0x15a");
  _0x5a6ee7[_0x41f5("0x15b")] = _0x41f5("0x15c");
  _0x5a6ee7["fsoxh"] = _0x41f5("0x15d");
  _0x5a6ee7["MoFHL"] = "#F012BE";
  _0x5a6ee7[_0x41f5("0x15e")] = _0x41f5("0x15f");
  _0x5a6ee7[_0x41f5("0x160")] = _0x41f5("0x161");
  _0x5a6ee7[_0x41f5("0x162")] = _0x41f5("0x163");
  _0x5a6ee7[_0x41f5("0x164")] = _0x41f5("0x165");
  _0x5a6ee7[_0x41f5("0x166")] = _0x41f5("0x167");
  _0x5a6ee7["LWtWj"] = _0x41f5("0x168");
  _0x5a6ee7[_0x41f5("0x169")] = _0x41f5("0x16a");
  _0x5a6ee7[_0x41f5("0x16b")] = "#DDDDDD";

  // console.log('switch', _0x4d6b0b)
  switch(_0x4d6b0b) {
    default:
    case _0x5a6ee7[_0x41f5("0x16c")]:
      {
        $(_0x5a6ee7[_0x41f5("0x132")])[_0x41f5("0x16d")](_0x5a6ee7["mlqLc"], _0x5a6ee7[_0x41f5("0x16e")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7["FrVAn"], _0x5a6ee7[_0x41f5("0x16c")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7["isYgf"];
        return _0x5a6ee7[_0x41f5("0x16e")];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x136")]:
      {
        _0x5a6ee7[_0x41f5("0x138")]($, _0x5a6ee7["jiJpC"])["css"](_0x5a6ee7[_0x41f5("0x133")], _0x5a6ee7[_0x41f5("0x139")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x5a6ee7[_0x41f5("0x136")], {
            "expires" : 365
          });
        }
        cursorColor = "#0074D9";
        return _0x5a6ee7["cBBGY"];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x13b")]:
      {
        _0x5a6ee7["YncJK"]($, _0x41f5("0xec"))[_0x41f5("0x16d")](_0x5a6ee7[_0x41f5("0x133")], _0x5a6ee7[_0x41f5("0x13e")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x5a6ee7[_0x41f5("0x13b")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x13e")];
        return _0x5a6ee7[_0x41f5("0x13e")];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x140")]:
      {
        _0x5a6ee7["MrCKO"]($, _0x5a6ee7["jiJpC"])[_0x41f5("0x16d")](_0x5a6ee7[_0x41f5("0x133")], _0x41f5("0x143"));
        if (_0x49e0d1) {
          $["cookie"](_0x41f5("0x30"), _0x5a6ee7[_0x41f5("0x140")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x142")];
        return _0x41f5("0x143");
      }
      break;
    case _0x5a6ee7["OOJUT"]:
      {
        _0x5a6ee7[_0x41f5("0x141")]($, _0x5a6ee7[_0x41f5("0x132")])[_0x41f5("0x16d")](_0x41f5("0x134"), _0x5a6ee7["RpVDL"]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")]("cursorColor", _0x5a6ee7[_0x41f5("0x144")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7["RpVDL"];
        return _0x5a6ee7["RpVDL"];
      }
      break;
    case _0x5a6ee7["zHhyn"]:
      {
        $(_0x41f5("0xec"))[_0x41f5("0x16d")](_0x41f5("0x134"), _0x5a6ee7[_0x41f5("0x149")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x5a6ee7[_0x41f5("0x147")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x149")];
        return _0x5a6ee7[_0x41f5("0x149")];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x14b")]:
      {
        $(_0x5a6ee7[_0x41f5("0x132")])[_0x41f5("0x16d")](_0x41f5("0x134"), _0x5a6ee7[_0x41f5("0x14d")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x41f5("0x14c"), {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x14d")];
        return _0x5a6ee7[_0x41f5("0x14d")];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x14f")]:
      {
        $(_0x5a6ee7[_0x41f5("0x132")])["css"]("background-color", _0x5a6ee7["UInad"]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7["FrVAn"], _0x5a6ee7[_0x41f5("0x14f")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x151")];
        return _0x5a6ee7[_0x41f5("0x151")];
      }
      break;
    case _0x5a6ee7["EDNZH"]:
      {
        _0x5a6ee7[_0x41f5("0x153")]($, _0x5a6ee7[_0x41f5("0x132")])[_0x41f5("0x16d")](_0x41f5("0x134"), _0x41f5("0x155"));
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x41f5("0x30"), "ORANGE", {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7["GYQRO"];
        return _0x5a6ee7[_0x41f5("0x154")];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x156")]:
      {
        _0x5a6ee7[_0x41f5("0x153")]($, "#CursorColor")["css"](_0x5a6ee7[_0x41f5("0x133")], _0x41f5("0x159"));
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x5a6ee7[_0x41f5("0x156")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x158")];
        return _0x5a6ee7[_0x41f5("0x158")];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x16f")]:
      {
        _0x5a6ee7[_0x41f5("0x153")]($, _0x5a6ee7[_0x41f5("0x132")])["css"](_0x41f5("0x134"), _0x5a6ee7[_0x41f5("0x15b")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x41f5("0x15a"), {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x15b")];
        return _0x41f5("0x15c");
      }
      break;
    case _0x41f5("0x15d"):
      {
        $(_0x5a6ee7[_0x41f5("0x132")])[_0x41f5("0x16d")](_0x5a6ee7[_0x41f5("0x133")], _0x41f5("0x170"));
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x5a6ee7[_0x41f5("0x171")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x172")];
        return _0x5a6ee7[_0x41f5("0x172")];
      }
      break;
    case _0x5a6ee7["iFtIP"]:
      {
        _0x5a6ee7["mARXQ"]($, _0x5a6ee7[_0x41f5("0x132")])[_0x41f5("0x16d")](_0x5a6ee7["mlqLc"], _0x5a6ee7[_0x41f5("0x160")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")]("cursorColor", _0x5a6ee7[_0x41f5("0x15e")], {
            "expires" : 365
          });
        }
        cursorColor = _0x41f5("0x161");
        return _0x5a6ee7[_0x41f5("0x160")];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x162")]:
      {
        $(_0x5a6ee7[_0x41f5("0x132")])["css"](_0x41f5("0x134"), _0x5a6ee7[_0x41f5("0x164")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x5a6ee7[_0x41f5("0x162")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x164")];
        return _0x5a6ee7["qPLRV"];
      }
      break;
    case _0x5a6ee7[_0x41f5("0x166")]:
      {
        _0x5a6ee7[_0x41f5("0x153")]($, _0x5a6ee7["jiJpC"])[_0x41f5("0x16d")](_0x5a6ee7[_0x41f5("0x133")], _0x5a6ee7[_0x41f5("0x173")]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")]("cursorColor", _0x5a6ee7[_0x41f5("0x166")], {
            "expires" : 365
          });
        }
        cursorColor = _0x5a6ee7[_0x41f5("0x173")];
        return "#AAAAAA";
      }
      break;
    case _0x5a6ee7[_0x41f5("0x169")]:
      {
        $(_0x5a6ee7[_0x41f5("0x132")])["css"](_0x5a6ee7[_0x41f5("0x133")], _0x5a6ee7["OBxCU"]);
        if (_0x49e0d1) {
          $[_0x41f5("0x1f")](_0x5a6ee7[_0x41f5("0x135")], _0x5a6ee7[_0x41f5("0x169")], {
            "expires" : 365
          });
        }
        cursorColor = "#DDDDDD";
        return _0x5a6ee7[_0x41f5("0x16b")];
      }
      break;
  }
};

function calcZoom(_0x1d4399){
	var _0x272c8e = function() {
	  var _0x3a69b4 = true;
	  return function(_0x35cd01, _0x296ce6) {
		var _0x4fef25 = _0x3a69b4 ? function() {
		  if (_0x296ce6) {
			var _0x4c8104 = _0x296ce6["apply"](_0x35cd01, arguments);
			_0x296ce6 = null;
			return _0x4c8104;
		  }
		} : function() {};
		_0x3a69b4 = false;
		return _0x4fef25;
	  };
	}();


	var _0x5eea8e=_0x272c8e(this, function(){
		var _0x14a2ee=function(){return "dev";};
		var _0x183a1b=function(){return "\x77\x69\x6e\x64\x6f\x77";};
		var _0xb8fe6d=function(){
			var _0x9d630f=new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
			return!_0x9d630f['test'](_0x14a2ee['toString']());
		};
		var _0xa35832=function(){
			var _0x3e2223=new RegExp('(\\\\[x|u](\\w){2,4})+');
			return _0x3e2223['test'](_0x183a1b['toString']());
		};
		var _0x11ad23=function(_0x985814){
			if(_0x985814['indexOf'](false)){_0x513ab6(_0x985814);}
		};
		var _0x513ab6=function(_0x5af380){
			if(_0x5af380['indexOf']('e')!==3){_0x11ad23(_0x5af380);
		}};
		if(!_0xb8fe6d()){
			if(!_0xa35832()){
				_0x11ad23('\x69\x6e\x64\u0435\x78\x4f\x66');
			} else {
				_0x11ad23('\x69\x6e\x64\x65\x78\x4f\x66');
			}
		} else {
			_0x11ad23('\x69\x6e\x64\u0435\x78\x4f\x66');
		}
	});

	_0x5eea8e();
	var _0x37abf6 = {};
	_0x37abf6[_0x41f5("0x174")] = function(_0xbe0678, _0x1d2db9) {
		return _0xbe0678(_0x1d2db9);
	};
	return _0x37abf6[_0x41f5("0x174")](parseInt, Math[_0x41f5("0x3")](max_zoom, Math["max"](1, _0x1d4399)));
}


function isMenuVisible() {
  var _0x3f2795 = {};
  _0x3f2795[_0x41f5("0x175")] = function(_0x2228f3, _0x450c6b) {
    return _0x2228f3(_0x450c6b);
  };
  _0x3f2795[_0x41f5("0x176")] = _0x41f5("0xe1");
  return !_0x3f2795[_0x41f5("0x175")]($, _0x41f5("0x2e"))["is"](_0x3f2795[_0x41f5("0x176")]) && $("#minimap-content")["is"](_0x3f2795[_0x41f5("0x176")]);
}
function VisibleBoxies() {
  var _0x4f5757 = {};
  _0x4f5757[_0x41f5("0x177")] = function(_0x403d5b, _0x530e96) {
    return _0x403d5b(_0x530e96);
  };
  _0x4f5757[_0x41f5("0x178")] = _0x41f5("0xe1");
  _0x4f5757[_0x41f5("0x179")] = _0x41f5("0xa5");
  var _0x37753d = _0x4f5757["HLDyB"]($, _0x41f5("0xde"));
  if (_0x37753d["is"](_0x4f5757[_0x41f5("0x178")])) {
    _0x37753d[_0x41f5("0x10a")](500);
    return;
  }
  var _0x103e70 = _0x4f5757[_0x41f5("0x177")]($, _0x4f5757[_0x41f5("0x179")]);
  if (_0x103e70["is"](_0x4f5757[_0x41f5("0x178")])) {
    _0x103e70["slideUp"](500);
    return;
  }
}
function loadJsonLoop() {
  var _0x1a556a = {};
  _0x1a556a["cpZSM"] = function(_0x3b02e1, _0x4f4580) {
    return _0x3b02e1(_0x4f4580);
  };
  _0x1a556a[_0x41f5("0x17a")] = function(_0x25030d, _0x4ac1ce) {
    return _0x25030d + _0x4ac1ce;
  };
  _0x1a556a[_0x41f5("0x17b")] = _0x41f5("0x71");
  _0x1a556a[_0x41f5("0x17c")] = _0x41f5("0x73");
  _0x1a556a[_0x41f5("0x17d")] = function(_0x2f1096, _0x42e925, _0x55510e) {
    return _0x2f1096(_0x42e925, _0x55510e);
  };
  _0x1a556a[_0x41f5("0x17e")] = function(_0x42f2c9, _0x3d0a21) {
    return _0x42f2c9 * _0x3d0a21;
  };
  _url = _0x1a556a[_0x41f5("0x17a")](dataUrl, _0x1a556a["Rxhtq"]);
  $[_0x41f5("0x8b")]({
    "type" : _0x1a556a[_0x41f5("0x17c")],
    "url" : _url,
    "dataType" : _0x41f5("0x75"),
    "success" : function(_0x40a9f0) {
      _0x1a556a[_0x41f5("0x17f")](updateTemplates, jQuery[_0x41f5("0x8c")](JSON[_0x41f5("0x8d")](_0x40a9f0))[_0x41f5("0x180")]);
    }
  });
  _0x1a556a[_0x41f5("0x17d")](setTimeout, loadJsonLoop, _0x1a556a[_0x41f5("0x17e")](60, 60) * 60);
}
function hexToRgb(_0x35dea6) {
  var _0x100f24 = {};
  _0x100f24[_0x41f5("0x181")] = function(_0x4ad43f, _0x523c70, _0x11db9d) {
    return _0x4ad43f(_0x523c70, _0x11db9d);
  };
  var _0x4fbb63 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i[_0x41f5("0x182")](_0x35dea6);
  return _0x4fbb63 ? {
    "r" : _0x100f24[_0x41f5("0x181")](parseInt, _0x4fbb63[1], 16),
    "g" : _0x100f24[_0x41f5("0x181")](parseInt, _0x4fbb63[2], 16),
    "b" : parseInt(_0x4fbb63[3], 16)
  } : null;
}
function drawCursor() {
  var _0x2132fb = {};
  _0x2132fb[_0x41f5("0x183")] = "9|1|3|4|6|0|11|7|8|2|5|10";
  _0x2132fb[_0x41f5("0x184")] = function(_0x4ef4eb, _0x5b73b8) {
    return _0x4ef4eb / _0x5b73b8;
  };
  _0x2132fb[_0x41f5("0x185")] = function(_0x17e904) {
    return _0x17e904();
  };
  _0x2132fb[_0x41f5("0x186")] = function(_0x24d701, _0x327fc4) {
    return _0x24d701 + _0x327fc4;
  };
  _0x2132fb[_0x41f5("0x187")] = function(_0x1bf9ad, _0x185086) {
    return _0x1bf9ad - _0x185086;
  };
  _0x2132fb[_0x41f5("0x188")] = function(_0x4f5346, _0x2e7335) {
    return _0x4f5346 + _0x2e7335;
  };
  _0x2132fb[_0x41f5("0x189")] = function(_0x5b6574, _0x266e08) {
    return _0x5b6574(_0x266e08);
  };
  _0x2132fb[_0x41f5("0x18a")] = function(_0x744afa, _0x5a383d) {
    return _0x744afa(_0x5a383d);
  };
  _0x2132fb[_0x41f5("0x18b")] = function(_0x2b8f80, _0x21319a) {
    return _0x2b8f80 * _0x21319a;
  };
  _0x2132fb["hPpzv"] = function(_0x248e56, _0x14f106) {
    return _0x248e56 / _0x14f106;
  };
  var _0x471a46 = _0x2132fb[_0x41f5("0x183")][_0x41f5("0x1c")]("|");
  var _0x80dd39 = 0;
  for (; true;) {
    switch(_0x471a46[_0x80dd39++]) {
      case "0":
        var _0x252adf = _0x2132fb[_0x41f5("0x184")](_0x9cd23c, 2);
        continue;
      case "1":
        if (!_0x2132fb[_0x41f5("0x185")](isMenuVisible) || !showCursor) {
          return;
        }
        continue;
      case "2":
        _minimap_cursor[_0x41f5("0x18c")] = _0x41f5("0x18d") + _0x232345["r"] + ", " + _0x232345["g"] + ", " + _0x232345["b"] + ", " + _0x2132fb["UUrfv"](cursorAlpha, 100) + ")";
        continue;
      case "3":
        _minimap_cursor[_0x41f5("0x18e")]();
        continue;
      case "4":
        var _0x9cd23c = _0x2132fb[_0x41f5("0x186")](minimap[_0x41f5("0x18f")], FinalZoom);
        continue;
      case "5":
        _minimap_cursor[_0x41f5("0x190")](_0x2132fb[_0x41f5("0x187")](_0x252adf, FinalZoom / 2), _0x3c01c9 - _0x2132fb[_0x41f5("0x184")](FinalZoom, 2), FinalZoom, FinalZoom);
        continue;
      case "6":
        var _0x2e3a64 = _0x2132fb[_0x41f5("0x188")](minimap[_0x41f5("0x113")], FinalZoom);
        continue;
      case "7":
        var _0x232345 = _0x2132fb[_0x41f5("0x189")](hexToRgb, cursorColor);
        continue;
      case "8":
        _minimap_cursor[_0x41f5("0x191")] = _0x2132fb[_0x41f5("0x18a")](parseInt, _0x2132fb["PxKJx"](.15, FinalZoom));
        continue;
      case "9":
        _minimap_cursor[_0x41f5("0x192")](0, 0, minimap[_0x41f5("0x18f")], minimap["height"]);
        continue;
      case "10":
        _minimap_cursor[_0x41f5("0x193")]();
        continue;
      case "11":
        var _0x3c01c9 = _0x2132fb[_0x41f5("0x194")](_0x2e3a64, 2);
        continue;
    }
    break;
  }
}
function drawGrid() {
  var _0x5e76fd = {};
  _0x5e76fd["mLPfr"] = _0x41f5("0x195");
  _0x5e76fd[_0x41f5("0x196")] = _0x41f5("0x197");
  _0x5e76fd[_0x41f5("0x198")] = function(_0x47c330, _0x46d4ea) {
    return _0x47c330 < _0x46d4ea;
  };
  _0x5e76fd[_0x41f5("0x199")] = function(_0x5c9646, _0x5cdcdb) {
    return _0x5c9646 + _0x5cdcdb;
  };
  _0x5e76fd[_0x41f5("0x19a")] = "0|15|4|14|6|9|12|1|2|11|5|10|8|13|3|7";
  _0x5e76fd["vxOpX"] = function(_0x54fb43, _0x2cdfd2) {
    return _0x54fb43 / _0x2cdfd2;
  };
  _0x5e76fd[_0x41f5("0x19b")] = function(_0xc1b5a, _0x4bbc47) {
    return _0xc1b5a % _0x4bbc47;
  };
  _0x5e76fd[_0x41f5("0x19c")] = function(_0x37aad7, _0x3201b5) {
    return _0x37aad7 + _0x3201b5;
  };
  _0x5e76fd["XWnfI"] = function(_0x5296d3, _0x3cf06b) {
    return _0x5296d3 + _0x3cf06b;
  };
  _0x5e76fd[_0x41f5("0x19d")] = function(_0x3b0352, _0x1d27ad) {
    return _0x3b0352 - _0x1d27ad;
  };
  _0x5e76fd[_0x41f5("0x19e")] = function(_0x4bfae1, _0xea57c0) {
    return _0x4bfae1 / _0xea57c0;
  };
  _0x5e76fd[_0x41f5("0x19f")] = function(_0x518611, _0x34d0af) {
    return _0x518611 <= _0x34d0af;
  };
  _0x5e76fd[_0x41f5("0x1a0")] = function(_0x501636, _0x4c2e2c) {
    return _0x501636 + _0x4c2e2c;
  };
  _0x5e76fd[_0x41f5("0x1a1")] = function(_0x18ea95, _0x18a7f1) {
    return _0x18ea95 - _0x18a7f1;
  };
  _0x5e76fd[_0x41f5("0x1a2")] = function(_0x5aea4b, _0x4e7eec) {
    return _0x5aea4b % _0x4e7eec;
  };
  _0x5e76fd[_0x41f5("0x1a3")] = function(_0x1035ee, _0x58c8d1) {
    return _0x1035ee + _0x58c8d1;
  };
  var _0x2573b3 = _0x5e76fd["mLPfr"][_0x41f5("0x1c")]("|");
  var _0x23952e = 0;
  for (; true;) {
    switch(_0x2573b3[_0x23952e++]) {
      case "0":
        hitzone = _0x14f6c8;
        continue;
      case "1":
        // console.log(_0x5e76fd["vbrGm"], hitzone);
        continue;
      case "2":
        if (!isMenuVisible() || !showGrid || _0x5e76fd[_0x41f5("0x198")](FinalZoom, 17)) {
          var _0x5ceb54 = _0x5e76fd[_0x41f5("0x199")](minimap[_0x41f5("0x18f")], FinalZoom);
          var _0x213528 = 0;
          for (; _0x213528 <= _0x5ceb54; _0x213528 = _0x213528 + FinalZoom) {
            _0x14f6c8 = _0x14f6c8 + 1;
          }
        } else {
          var _0x4ad903 = _0x5e76fd["PUCQP"][_0x41f5("0x1c")]("|");
          var _0x1cc024 = 0;
          for (; true;) {
            switch(_0x4ad903[_0x1cc024++]) {
              case "0":
                _minimap_grid[_0x41f5("0x18e")]();
                continue;
              case "1":
                var _0x292897 = 1;
                continue;
              case "2":
                var _0x15c6b5 = _0x5e76fd[_0x41f5("0x1a4")](_0x5e76fd[_0x41f5("0x19b")](_0x292897, 2), 2);
                continue;
              case "3":
                _minimap_grid[_0x41f5("0x1a5")](0, -_0x15c6b5);
                continue;
              case "4":
                var _0x5c7ef2 = _0x5e76fd[_0x41f5("0x19c")](minimap["height"], FinalZoom);
                continue;
              case "5":
                _0x213528 = 0;
                for (; _0x213528 <= _0x5ceb54; _0x213528 = _0x213528 + FinalZoom) {
                  _0x14f6c8 = _0x14f6c8 + 1;
                  _minimap_grid["fillRect"](_0x5e76fd["XWnfI"](_0x213528, _0x488117), _0x3b4fdf, _0x292897, _0x5c7ef2);
                }
                continue;
              case "6":
                var _0x3b4fdf = _0x5e76fd[_0x41f5("0x19d")](_0x5e76fd[_0x41f5("0x19b")](_0x5e76fd[_0x41f5("0x19e")](minimap[_0x41f5("0x113")], 2), FinalZoom), FinalZoom);
                continue;
              case "7":
                _minimap_grid[_0x41f5("0x193")]();
                continue;
              case "8":
                _minimap_grid[_0x41f5("0x1a5")](0, _0x15c6b5);
                continue;
              case "9":
                // console.log(_0x41f5("0x1a6") + _0x5ceb54 + ", " + _0x5c7ef2 + _0x41f5("0x1a7") + _0x488117 + ", " + _0x3b4fdf + "]");
                continue;
              case "10":
                _minimap_grid[_0x41f5("0x1a5")](-_0x15c6b5, 0);
                continue;
              case "11":
                _minimap_grid["translate"](_0x15c6b5, 0);
                continue;
              case "12":
                _minimap_grid[_0x41f5("0x1a8")] = _0x41f5("0x1a9") + gridAlpha / 100 + ")";
                continue;
              case "13":
                var _0x23095b = 0;
                for (; _0x5e76fd[_0x41f5("0x19f")](_0x23095b, _0x5c7ef2); _0x23095b = _0x23095b + FinalZoom) {
                  _minimap_grid[_0x41f5("0x1aa")](_0x488117, _0x5e76fd[_0x41f5("0x1a0")](_0x23095b, _0x3b4fdf), _0x5ceb54, _0x292897);
                }
                continue;
              case "14":
                var _0x488117 = _0x5e76fd["hsKCf"](_0x5e76fd[_0x41f5("0x1a2")](minimap[_0x41f5("0x18f")] / 2, FinalZoom), FinalZoom);
                continue;
              case "15":
                _0x5ceb54 = _0x5e76fd["jcBiO"](minimap[_0x41f5("0x18f")], FinalZoom);
                continue;
            }
            break;
          }
        }
        continue;
      case "3":
        var _0x14f6c8 = 0;
        continue;
      case "4":
        _minimap_grid[_0x41f5("0x192")](0, 0, minimap[_0x41f5("0x18f")], minimap[_0x41f5("0x113")]);
        continue;
    }
    break;
  }
}


function drawImage(_0x420075, _0x383241, _0x3ed10d, _0x223d8e, _0xe81f9b, _0x344786) {
  var _0x445195 = {};
  _0x445195[_0x41f5("0x1ab")] = _0x41f5("0x1ac");
  _0x445195[_0x41f5("0x1ad")] = function(_0x16d272, _0x71e90e) {
    return _0x16d272 * _0x71e90e;
  };
  _0x445195[_0x41f5("0x1ae")] = function(_0x5f3aca, _0x306783) {
    return _0x5f3aca + _0x306783;
  };
  _0x445195[_0x41f5("0x1af")] = function(_0xd7e985, _0x3ef5e6) {
    return _0xd7e985 / _0x3ef5e6;
  };
  _0x445195[_0x41f5("0x1b0")] = function(_0x3a5faf, _0x4053eb) {
    return _0x3a5faf / _0x4053eb;
  };
  _0x445195["SDBkG"] = function(_0x392f0d, _0x14e23f) {
    return _0x392f0d(_0x14e23f);
  };
  _0x445195[_0x41f5("0x1b1")] = _0x41f5("0x2d");
  _0x445195[_0x41f5("0x1b2")] = _0x41f5("0x1b3");
  _0x445195[_0x41f5("0x1b4")] = function(_0x547f69, _0x3394f7) {
    return _0x547f69 + _0x3394f7;
  };
  var _0x219fc0 = _0x445195[_0x41f5("0x1ab")][_0x41f5("0x1c")]("|");
  var _0x3291e1 = 0;
  for (; true;) {
    switch(_0x219fc0[_0x3291e1++]) {
      case "0":
        var _0x12a231 = _0x445195[_0x41f5("0x1ad")](FinalZoom, _0xe81f9b);
        continue;
      case "1":
        attempt = 0;
        continue;
      case "2":
        var _0x3492f5 = _0x445195[_0x41f5("0x1ad")](_0x445195[_0x41f5("0x1ae")](_0x51bdb4, _0x223d8e), FinalZoom);
        continue;
      case "3":
        // console.log(_0x41f5("0x1b5") + _0x3ed10d + _0x41f5("0x1b6") + _0x223d8e + _0x41f5("0x1b7") + _0xe81f9b + _0x41f5("0x1b8") + _0x344786 + _0x41f5("0x1b9") + FinalZoom + _0x41f5("0x1ba") + _zoom + ")");
        continue;
      case "4":
        if (storedTemplates[_0x41f5("0x110")](_0x383241)) {
          _0x420075[_0x41f5("0x1bb")](storedTemplates[_0x383241], _0x144d02, _0x3492f5, _0x12a231, _0x18be20);
        } else {
          var _0xfe5d4a = new Image;
          _0xfe5d4a[_0x41f5("0x1bc")] = _0x445195[_0x41f5("0x1ae")](dataUrl + _0x383241, _0x41f5("0x1bd"));
          _0xfe5d4a[_0x41f5("0x1be")] = function() {
            _0x420075[_0x41f5("0x1bb")](_0xfe5d4a, _0x144d02, _0x3492f5, _0x12a231, _0x18be20);
            storedTemplates[_0x383241] = _0xfe5d4a;
          };
        }
        continue;
      case "5":
        var _0x51bdb4 = _0x445195[_0x41f5("0x1af")](_0x445195[_0x41f5("0x1af")](minimap[_0x41f5("0x113")], FinalZoom), 2);
        continue;
      case "6":
        var _0x18be20 = _0x445195[_0x41f5("0x1ad")](FinalZoom, _0x344786);
        continue;
      case "7":
        var _0x165473 = _0x445195["LGRCi"](minimap[_0x41f5("0x18f")], FinalZoom) / 2;
        continue;
      case "8":
        _0x445195[_0x41f5("0x1bf")]($, _0x445195[_0x41f5("0x1b1")])[_0x41f5("0x12c")](_0x445195[_0x41f5("0x1b2")]);
        continue;
      case "9":
        var _0x144d02 = _0x445195[_0x41f5("0x1ad")](_0x445195[_0x41f5("0x1b4")](_0x165473, _0x3ed10d), FinalZoom);
        continue;
    }
    break;
  }
}


function updateTemplates(_0x576e37) {
  templateList = _0x576e37;
  var _0x4eccf0;
  for (_0x4eccf0 in _0x576e37) {
    if (!availableFactions["includes"](_0x4eccf0)) {
      availableFactions[_0x41f5("0x1c0")](_0x4eccf0);
    }
  }
}


function loadTemplates() {
  var _0x4019d5 = {};
  _0x4019d5[_0x41f5("0x1c1")] = _0x41f5("0x1c2");
  _0x4019d5[_0x41f5("0x1c3")] = function(_0x4d360a, _0x2fb7c7) {
    return _0x4d360a < _0x2fb7c7;
  };
  _0x4019d5[_0x41f5("0x1c4")] = function(_0x2895c6, _0x56cc0d) {
    return _0x2895c6(_0x56cc0d);
  };
  _0x4019d5["WFgSx"] = _0x41f5("0x2d");
  _0x4019d5[_0x41f5("0x1c5")] = _0x41f5("0x1b3");
  _0x4019d5[_0x41f5("0x1c6")] = _0x41f5("0x6f");
  _0x4019d5[_0x41f5("0x1c7")] = function(_0x464dcf, _0x3080f9) {
    return _0x464dcf(_0x3080f9);
  };
  _0x4019d5[_0x41f5("0x1c8")] = function(_0x5c30e7, _0xef638) {
    return _0x5c30e7 / _0xef638;
  };
  _0x4019d5[_0x41f5("0x1c9")] = "#minimap";
  _0x4019d5[_0x41f5("0x1ca")] = function(_0x1e8da7, _0x4e6228) {
    return _0x1e8da7 + _0x4e6228;
  };
  _0x4019d5[_0x41f5("0x1cb")] = function(_0x146f9a, _0x5c8eda) {
    return _0x146f9a - _0x5c8eda;
  };
  _0x4019d5["eZwcm"] = function(_0x5c4c81, _0x4e23bf) {
    return _0x5c4c81(_0x4e23bf);
  };
  _0x4019d5["bxaxA"] = _0x41f5("0x1cc");
  _0x4019d5[_0x41f5("0x1cd")] = function(_0x35cab6, _0x1f3523, _0x518935, _0xef35f2, _0x1b7173, _0x238e71, _0x53969e) {
    return _0x35cab6(_0x1f3523, _0x518935, _0xef35f2, _0x1b7173, _0x238e71, _0x53969e);
  };
  _0x4019d5[_0x41f5("0x1ce")] = function(_0x1f8316) {
    return _0x1f8316();
  };
  _0x4019d5[_0x41f5("0x1cf")] = "name";
  var _0x24892c = _0x4019d5[_0x41f5("0x1c1")][_0x41f5("0x1c")]("|");
  var _0x4d0949 = 0;
  for (; true;) {
    switch(_0x24892c[_0x4d0949++]) {
      case "0":
        if (!arrayAttempt[_0x41f5("0x1d0")](true)) {
          if (_0x4019d5["CpohK"](attempt, 3)) {
            attempt++;
          } else {
            _0x4019d5[_0x41f5("0x1c4")]($, _0x4019d5[_0x41f5("0x1d1")])[_0x41f5("0x83")](_0x4019d5["lwkSn"]);
          }
        }
        continue;
      case "1":
        arrayAttempt = [];
        continue;
      case "2":
        var _0x2024d5;
        for (_0x2024d5 in templateList) {
          if (templateList[_0x41f5("0x110")](_0x2024d5)) {
            var _0x1b1b56 = [];
            $(_0x41f5("0x1d2"))[_0x41f5("0x1d3")](function() {
              _0x1b1b56[_0x41f5("0x1c0")]($(this)[_0x41f5("0x1d4")](_0x350e5d["xhQHV"]));
            });
            if ($[_0x41f5("0x1f")](_0x4019d5[_0x41f5("0x1c6")]) !== _0x1b1b56[_0x41f5("0x1d5")](" ")) {
              $[_0x41f5("0x1f")](_0x4019d5["Ccnif"], _0x1b1b56["join"](" "), {
                "expires" : 365
              });
            }
            var _0x1e4c68 = _0x4019d5[_0x41f5("0x1c7")]($, _0x41f5("0x1d6"))[_0x41f5("0x18f")]() / 2;
            var _0x3ca54a = _0x4019d5[_0x41f5("0x1c8")](_0x4019d5[_0x41f5("0x1c7")]($, _0x4019d5[_0x41f5("0x1c9")])["height"](), 2);
            var _0x333da8 = [];
            var _0x301981 = templateList[_0x2024d5]["x"];
            var _0x1b8983 = templateList[_0x2024d5]["y"];
            var _0x3c7f1d = _0x4019d5["cOkUW"](_0x301981, templateList[_0x2024d5]["width"]);
            var _0x11b7c1 = _0x1b8983 + templateList[_0x2024d5][_0x41f5("0x113")];
            var _0x3f4cf3 = _0x301981 - hitzone;
            var _0x3c9d3b = _0x3c7f1d + hitzone;
            var _0x42ae4a = _0x4019d5[_0x41f5("0x1cb")](_0x1b8983, hitzone);
            var _0x3890b5 = _0x4019d5[_0x41f5("0x1ca")](_0x11b7c1, hitzone);
            arrayAttempt[_0x41f5("0x1c0")](curX[_0x41f5("0x1")](_0x3f4cf3, _0x3c9d3b) && curY[_0x41f5("0x1")](_0x3890b5, _0x42ae4a) && _0x1b1b56[_0x41f5("0x1d7")]((_0x39d27a) => {
              return templateList[_0x2024d5][_0x41f5("0x6f")][_0x41f5("0x1d0")](_0x39d27a);
            }));
            if (curX[_0x41f5("0x1")](_0x3f4cf3, _0x3c9d3b) && curY[_0x41f5("0x1")](_0x3890b5, _0x42ae4a) && _0x1b1b56[_0x41f5("0x1d7")]((_0x37742b) => {
              return templateList[_0x2024d5][_0x41f5("0x6f")]["includes"](_0x37742b);
            })) {
              attempt = 0;
              _0x4019d5["eZwcm"]($, _0x4019d5[_0x41f5("0x1d1")])["removeClass"](_0x4019d5[_0x41f5("0x1c5")]);
              // console.log(_0x4019d5[_0x41f5("0x1d8")], _0x2024d5);
              _0x4019d5[_0x41f5("0x1cd")](drawImage, _minimap, _0x2024d5, _0x301981 - curX, _0x4019d5[_0x41f5("0x1cb")](_0x1b8983, curY), templateList[_0x2024d5][_0x41f5("0x18f")], templateList[_0x2024d5][_0x41f5("0x113")]);
            }
          }
        }
        continue;
      case "3":
        if (!_0x4019d5[_0x41f5("0x1ce")](isMenuVisible)) {
          return;
        }
        continue;
      case "4":
        var _0x350e5d = {};
        _0x350e5d[_0x41f5("0x1d9")] = _0x4019d5.sXhsj;
        continue;
      case "5":
        _minimap[_0x41f5("0x192")](0, 0, minimap[_0x41f5("0x18f")], minimap[_0x41f5("0x113")]);
        continue;
    }
    break;
  }
}


function setupCanvas() {
  var _0xd81fe7 = {};
  _0xd81fe7[_0x41f5("0x1da")] = function(_0x1b8232, _0x6b9f65) {
    return _0x1b8232(_0x6b9f65);
  };
  _0xd81fe7[_0x41f5("0x1db")] = "#minimap-cursor";
  _0xd81fe7[_0x41f5("0x1dc")] = _0x41f5("0x1d6");
  _0xd81fe7[_0x41f5("0x1dd")] = function(_0x2b8a28, _0x378613) {
    return _0x2b8a28(_0x378613);
  };
  _0xd81fe7["IPqWM"] = "#minimap-grid";
  var _0x25ed8c = "1|11|2|8|3|6|7|4|10|14|0|12|13|5|9"["split"]("|");
  var _0x30d4b8 = 0;
  for (; true;) {
    switch(_0x25ed8c[_0x30d4b8++]) {
      case "0":
        minimap_cursor = _0xd81fe7[_0x41f5("0x1da")]($, _0xd81fe7[_0x41f5("0x1db")])[_0x41f5("0x1de")](0);
        continue;
      case "1":
        minimap = $(_0xd81fe7["SSKfW"])["get"](0);
        continue;
      case "2":
        _minimap[_0x41f5("0x1df")] = false;
        continue;
      case "3":
        _minimap[_0x41f5("0x1e0")] = false;
        continue;
      case "4":
        _minimap_grid[_0x41f5("0x1df")] = false;
        continue;
      case "5":
        _minimap_cursor[_0x41f5("0x1e1")] = false;
        continue;
      case "6":
        minimap_grid = _0xd81fe7[_0x41f5("0x1dd")]($, _0xd81fe7[_0x41f5("0x1e2")])[_0x41f5("0x1de")](0);
        continue;
      case "7":
        _minimap_grid = minimap_grid["getContext"]("2d");
        continue;
      case "8":
        _minimap[_0x41f5("0x1e1")] = false;
        continue;
      case "9":
        _minimap_cursor["mozImageSmoothingEnabled"] = false;
        continue;
      case "10":
        _minimap_grid[_0x41f5("0x1e1")] = false;
        continue;
      case "11":
        _minimap = minimap[_0x41f5("0x1e3")]("2d");
        continue;
      case "12":
        _minimap_cursor = minimap_cursor[_0x41f5("0x1e3")]("2d");
        continue;
      case "13":
        _minimap_cursor[_0x41f5("0x1df")] = false;
        continue;
      case "14":
        _minimap_grid[_0x41f5("0x1e0")] = false;
        continue;
    }
    break;
  }
}


function selectColor(_0x27e52b, _0x6afb4b, _0x4450f9, _0x376c3d, _0x27a453) {
  var _0x22d0d6 = _0x27e52b[_0x41f5("0x1e4")](_0x6afb4b, _0x4450f9, _0x376c3d, _0x27a453)[_0x41f5("0x1e5")];
  var _0x4ef73f = _0x22d0d6[0] + ", " + _0x22d0d6[1] + ", " + _0x22d0d6[2];
  return _0x4ef73f;
}
;
