document.getElementById("zhankai").children[0].onclick=function(){
		this.parentNode.style.display="none";
		var a=document.getElementsByClassName("yincang")
		for(var i=0;i<a.length;i++){
			a[i].style.display="block";
		}
		document.getElementById("shouqi").style.display="block"
	}
document.getElementById("shouqi").children[0].onclick=function(){
	   this.parentNode.style.display="none";
	   document.getElementById("zhankai").style.display="block";
	   var a=document.getElementsByClassName("yincang")
		for(var i=0;i<a.length;i++){
			a[i].style.display="none";
		}
}
 var m=0+"%";
 var y=-105+"%";
var b=document.getElementById("texiao");
var c=document.getElementById("texiao1");
b.onmouseenter=function(){
	 var x=100;
  js1=setInterval(function(){
 	b.children[0].style.top=x+"%";	
 	 if(b.children[0].style.top==m){ 
 	clearInterval(js1) ;
 	return false;
}
x--;
},5)
}
b.onmouseleave=function(){
	 var x=0;
   js2=setInterval(function(){
 	b.children[0].style.top=-x+"%"; 
 	 if(b.children[0].style.top==y){
 	clearInterval(js2) ;
 	return false;
}
x++;
},5)
}


c.onmouseenter=function(){
	 var x=100;
  js3=setInterval(function(){
 	c.children[1].style.top=x+"%";	
 	 if(c.children[1].style.top==m){ 
 	clearInterval(js3) ;
 	return false;
}
x--;
},5)
}
c.onmouseleave=function(){
	 var x=0;
   js4=setInterval(function(){
 	c.children[1].style.top=-x+"%"; 
 	 if(c.children[1].style.top==y){
 	clearInterval(js4) ;
 	return false;
}
x++;
},5)
}





document.getElementById("totop").onclick=function(){
	var top=setInterval(function(){
		if(document.body.scrollTop){
			var t=document.body.scrollTop;
		}else{
			var t=document.documentElement.scrollTop
		}
         if(t!=0){
         	document.documentElement.scrollTop-=200;
         }else{
         	clearInterval(top)
         }
     },100)
}