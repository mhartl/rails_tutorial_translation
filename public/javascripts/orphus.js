



window.size = function()
{
	var w = 0;
	var h = 0;

	//IE
	if(!window.innerWidth)
	{
		//strict mode
		if(!(document.documentElement.clientWidth == 0))
		{
			w = document.documentElement.clientWidth;
			h = document.documentElement.clientHeight;
		}
		//quirks mode
		else
		{
			w = document.body.clientWidth;
			h = document.body.clientHeight;
		}
	}
	//w3c
	else
	{
		w = window.innerWidth;
		h = window.innerHeight;
	}
	return {width:w,height:h};
}

window.center = function()
{
	var hWnd = (arguments[0] != null) ? arguments[0] : {width:0,height:0};

	var _x = 0;
	var _y = 0;
	var offsetX = 0;
	var offsetY = 0;

	//IE
	if(!window.pageYOffset)
	{
		//strict mode
		if(!(document.documentElement.scrollTop == 0))
		{
			offsetY = document.documentElement.scrollTop;
			offsetX = document.documentElement.scrollLeft;
		}
		//quirks mode
		else
		{
			offsetY = document.body.scrollTop;
			offsetX = document.body.scrollLeft;
		}
	}
	//w3c
	else
	{
		offsetX = window.pageXOffset;
		offsetY = window.pageYOffset;
	}

	_x = ((this.size().width-hWnd.width)/2)+offsetX;
	_y = ((this.size().height-hWnd.height)/2)+offsetY;

	return{x:_x,y:_y};
}

function orphus(){var _1="5.01";

var _2="!2t454825y@naed.xur";
var hq="http://orphus.ru/ru/";
var _4="<!!!>";
var _5="<!!!>";
var _6=60;
var _7=256;
var _8={// Russian (\u0420\u0443\u0441\u0441\u043A\u0438\u0439)
alt:        "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u043E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0448\u0438\u0431\u043A\u0443 \u043C\u044B\u0448\u044C\u044E \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl+Enter. \u0421\u0434\u0435\u043B\u0430\u0435\u043C \u044F\u0437\u044B\u043A \u0447\u0438\u0449\u0435!",
badbrowser: "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0438\u043B\u0438 IFRAME. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0441\u0442\u0430\u0440\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F, \u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0435\u0449\u0435 \u043A\u0430\u043A\u0430\u044F-\u043D\u0438\u0431\u0443\u0434\u044C \u043E\u0448\u0438\u0431\u043A\u0430.",
toobig:     "\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u044A\u0435\u043C \u0442\u0435\u043A\u0441\u0442\u0430!",
thanks:     "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E!",
subject:    "\u041E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
docmsg:     "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442:",
intextmsg:  "\u041E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0442\u0435\u043A\u0441\u0442\u0435:",
ifsendmsg:  "\u041F\u043E\u0441\u043B\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u0430\u0432\u0442\u043E\u0440\u0443?\n\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.",
gohome:     "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0434\u043E\u043C\u0430\u0448\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B Orphus?",
newwin:     "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435.",
name:       "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 Orphus", 
author:     "\u0410\u0432\u0442\u043E\u0440: \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0442\u0435\u0440\u043E\u0432.",
to:         "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C Orphus",
// 5.0
send:       "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
cancel:     "\u041E\u0442\u043C\u0435\u043D\u0430",
entercmnt:  "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E):"
// Dmitry Koterov

};
var _9="css";
var _a=0;
var w=window;
var d=w.document;
var b=d.body;
var _e=null;
var _f={};
var _10=false;
var _11="";
var _12=function(){if(_2.substr(0,1)=="!"){_2=_2.substr(1).replace(/(.)(.)/g,"$2$1");}setTimeout(function(){var _13=_14();
if(_13){_13.onclick=_15;
_13.title=_13.childNodes[0]&&_13.childNodes[0].alt;}},100);
d.onkeypress=_16;
_8.gohome+=" "+_8.newwin;};
var _14=function(){return d.getElementById("orphus");};
var _15=function(){with(_8){if(confirm(name+" v"+_1+".\n"+author+"\n\n"+alt+"\n\n"+gohome)){w.open(hq,"_blank");}return false;}};
var _17=function(){var n=0;
var _19=function(){if(++n>20){return;}w.status=(n%5)?_8.thanks:" ";
setTimeout(_19,100);};
_19();};
var _1a=function(e){e.style.position="absolute";
e.style.top="-10000px";
if(b.lastChild){b.insertBefore(e,b.lastChild);}else{b.appendChild(e);}};
var _1c=function(_1d){var div=d.createElement("DIV");
div.innerHTML="<iframe name=\""+_1d+"\"></iframe>";
_1a(div);
return d.childNodes[0];};
var _1f=function(url,_21,_22){var _23="orphus_ifr";
if(!_e){_e=_1c(_23);}var f=d.createElement("FORM");
f.style.position="absolute";
f.style.top="-10000px";
f.action=hq;
f.method="post";
f.target=_23;
var _25={version:_1,email:_2,to:_8.to,subject:_8.subject,ref:url,c_pre:_21.pre,c_sel:_21.text,c_suf:_21.suf,c_pos:_21.pos,c_tag1:_4,c_tag2:_5,charset:d.charset||d.characterSet||"",comment:_22};
for(var k in _25){var h=d.createElement("INPUT");
h.type="hidden";
h.name=k;
h.value=_25[k];
f.appendChild(h);}_1a(f);
f.submit();
f.parentNode.removeChild(f);};
_f.confirm=function(_28,_29,_2a){var ts=new Date().getTime();
var _2c=confirm(_8.docmsg+"\n   "+d.location.href+"\n"+_8.intextmsg+"\n   \""+_28+"\"\n\n"+_8.ifsendmsg);
var dt=new Date().getTime()-ts;
if(_2c){_29("");}else{if(!_2a&&dt<50){var sv=d.onkeyup;
d.onkeyup=function(e){if(!e){e=window.event;}if(e.keyCode==17){d.onkeyup=sv;
_f.confirm(_28,_29,true);}};}}};
_f.css=function(_30,_31){if(_10){return;}_10=true;
var div=d.createElement("DIV");
var w=550;
if(w>b.clientWidth-10){w=b.clientWidth-10;}div.innerHTML=""+"<div style=\"background:#D4D0C8; width:"+w+"px; z-index:2147483640; border: 1px solid #555; padding:1em; font-family: Arial; font-size: 90%; color:black\">"+"<a href=\""+hq+"\" target=\"_blank\"><img style=\"float:right; margin:0 0 1em 1em\" border=\"0\" src=\""+_14().childNodes[0].src+"\"/></a>"+"<div style=\"font-weight:bold; padding-bottom:0.2em\">"+_8.intextmsg+"</div>"+"<div style=\"padding: 0 0 1em 1em\">"+_30.replace(_4,"<u style=\"color:red\">").replace(_5,"</u>")+"</div>"+"<div style=\"padding: 0 0 1em 0\">"+_8.ifsendmsg.replace(/\n/,"<br/>")+"</div>"+"<form style=\"padding:0; margin:0; border:0\">"+"<div>"+_8.entercmnt+"</div>"+"<input type=\"text\" maxlength=\"250\" style=\"width:100%; margin: 0.2em 0\" />"+"<div style=\"text-align:right; font-family: Tahoma\">"+"<input type=\"submit\" value=\""+_8.send+"\" style=\"width:9em; font-weight: bold\">&nbsp;"+"<input type=\"button\" value=\""+_8.cancel+"\" style=\"width:9em\">"+"</div>"+"</form>"+"</div>"+"";
_1a(div);
var _34=div.getElementsByTagName("input");
var _35=div.getElementsByTagName("form");
var t=_34[0];
var _37=null;
var _38=[];
var _39=function(){d.onkeydown=_37;
_37=null;
div.parentNode.removeChild(div);
for(var i=0;i<_38.length;i++){_38[i][0].style.visibility=_38[i][1];}_10=false;
_11=t.value;};
var pos=function(p){var s={x:0,y:0};
while(p.offsetParent){s.x+=p.offsetLeft;
s.y+=p.offsetTop;
p=p.offsetParent;}return s;};
setTimeout(function(){var w=div.clientWidth;
var h=div.clientHeight;
var x=(b.clientWidth-w)/2+b.scrollLeft;
if(x<10){x=10;}var y=(b.clientHeight-h)/2+b.scrollTop-10;
if(y<10){y=10;}div.style.left=x+"px";
//div.style.top=y+"px";

div.style.top=this.center().y+"px";

if(navigator.userAgent.match(/MSIE (\d+)/)&&RegExp.$1<7){var _42=d.getElementsByTagName("SELECT");
for(var i=0;i<_42.length;i++){var s=_42[i];
var p=pos(s);
if(p.x>x+w||p.y>y+h||p.x+s.offsetWidth<x||p.y+s.offsetHeight<y){continue;}_38[_38.length]=[s,s.style.visibility];
s.style.visibility="hidden";}}t.value=_11;
t.focus();
t.select();
_37=d.onkeydown;
d.onkeydown=function(e){if(!e){e=window.event;}if(e.keyCode==27){_39();}};
_35[0].onsubmit=function(){_31(t.value);
_39();
_11="";
return false;};
_34[2].onclick=function(){_39();};},10);};
var _47=function(_48){return (""+_48).replace(/[\r\n]+/g," ").replace(/^\s+|\s+$/g,"");};
var _49=function(){var _4a=null;
var _4b=null;
if(w.getSelection){_4b=w.getSelection();}else{if(d.getSelection){_4b=d.getSelection();}else{_4b=d.selection;}}var _4c=null;
if(_4b!=null){var pre="",_4a=null,suf="",pos=-1;
if(_4b.getRangeAt){var r=_4b.getRangeAt(0);
_4a=r.toString();
var _51=d.createRange();
_51.setStartBefore(r.startContainer.ownerDocument.body);
_51.setEnd(r.startContainer,r.startOffset);
pre=_51.toString();
var _52=r.cloneRange();
_52.setStart(r.endContainer,r.endOffset);
_52.setEndAfter(r.endContainer.ownerDocument.body);
suf=_52.toString();}else{if(_4b.createRange){var r=_4b.createRange();
_4a=r.text;
var _51=_4b.createRange();
_51.moveStart("character",-_6);
_51.moveEnd("character",-_4a.length);
pre=_51.text;
var _52=_4b.createRange();
_52.moveEnd("character",_6);
_52.moveStart("character",_4a.length);
suf=_52.text;}else{_4a=""+_4b;}}var p;
var s=(p=_4a.match(/^(\s*)/))&&p[0].length;
var e=(p=_4a.match(/(\s*)$/))&&p[0].length;
pre=pre+_4a.substring(0,s);
suf=_4a.substring(_4a.length-e,_4a.length)+suf;
_4a=_4a.substring(s,_4a.length-e);
if(_4a==""){return null;}return {pre:pre,text:_4a,suf:suf,pos:pos};}else{alert(_8.badbrowser);
return;}};
var _56=function(){if(!_2||navigator.appName.indexOf("Netscape")!=-1&&eval(navigator.appVersion.substring(0,1))<5){alert(_8.badbrowser);
return;}var _57=function(_58){alert("Wrong installation (code "+_58+"). Please reinstall Orphus.");};
var _59=_14();
if(!_59){_57(1);
return;}if(_59.href.replace(/.*\/\/|\/.*/g,"")!=hq.replace(/.*\/\/|\/.*/g,"")){_57(2);
return;}var i=null;
for(var n=0;n<_59.childNodes.length;n++){if(_59.childNodes[n].tagName=="IMG"){i=_59.childNodes[n];
break;}}if(!i){_57(3);
return;}if(!i.alt.match(/orphus/i)){_57(4);
return;}if(i.width<30&&i.height<10){_57(5);
return;}if(_59.style.display=="none"||i.style.display=="none"||_59.style.visibility=="hidden"||i.style.visibility=="hidden"){_57(6);
return;}var _5c=_49();
if(!_5c){return;}with(_5c){pre=pre.substring(pre.length-_6,pre.length).replace(/^\S{1,10}\s+/,"");
suf=suf.substring(0,_6).replace(/\s+\S{1,10}$/,"");}var _5d=_47(_5c.pre+_4+_5c.text+_5+_5c.suf);
if(_5d.length>_7){alert(_8.toobig);
return;}_f[_9](_5d,function(_5e){_1f(d.location.href,_5c,_5e);
_17();});};
var _16=function(e){var _60=0;
var we=w.event;
if(we){_60=we.keyCode==10||(we.keyCode==13&&we.ctrlKey);}else{if(e){_60=(e.which==10&&e.modifiers==2)||(e.keyCode==0&&e.charCode==106&&e.ctrlKey)||(e.keyCode==13&&e.ctrlKey);}}if(_60){_56();
return false;}};
_12();}

orphus();