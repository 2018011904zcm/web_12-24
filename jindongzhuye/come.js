/*
* @Author: 11
* @Date:   2019-12-23 18:43:12
* @Last Modified by:   11
* @Last Modified time: 2019-12-25 08:47:24
*/
function onCome(a,b){
	var flag;
	a.onmouseover = function(){
		a.setAttribute("style", "background-color:white;");
		b.setAttribute("style","display:block;" );
	}
	a.onmouseout = function(){
		b.onmouseover = function(){
			a.setAttribute("style", "background-color:white;");
			b.setAttribute("style","display:block;" );
		}
		a.setAttribute("style", "background-color:WhiteSmoke;");
		b.setAttribute("style","display:none;" );
	}
	
	b.onmouseout = function(){
		a.setAttribute("style", "background-color:WhiteSmoke;");
		b.setAttribute("style","display:none;" );
	}
	
}
function caidan(a,b){
	a.onmouseover = function(){
		var help = "right:" +0 + "px";
		b.setAttribute("style", help);

	}
	b.onmouseout = function(){
		var help = "right" + -80 +"px";
		b.setAttribute("style", help);
	}
}
