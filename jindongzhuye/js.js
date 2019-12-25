/*
* @Author: 11
* @Date:   2019-12-10 14:20:16
* @Last Modified by:   11
* @Last Modified time: 2019-12-10 18:55:06
*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json)
		{
			var now = parseInt(getStyle(obj,attr));
			var speed = (json[attr] - now)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var current = now +speed;
			obj.style[attr]= current + "px";
			if(json[attr] !== current)
			{
				isStop = false;
			}
		}
		if(isStop)
		{
			clearInterval(obj.timer);
			if(callback){callback()};
		}
	}, 30)
}