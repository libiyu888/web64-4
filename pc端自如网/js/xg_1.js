
//轮播图
var j;
var banner;
var jj;
var zz;
function lbt(){
    banner=document.getElementById("banner");
    banner.scrollTop+=593;
    if(banner.scrollTop>=593){
    document.getElementById("banner").appendChild(document.getElementById("banner").children[0])
    banner.scrollTop=0;
    clearInterval(j);
   yc()
    }
   
   // document.getElementById("banner").appendChild(banner);
}
function yc(){
	z=setTimeout(function(){
		j=setInterval("lbt()",1000)
	},2000)
}
yc();
window.onscroll=function(){
	if(document.documentElement.scrollTop>0){
		clearTimeout(z)
		clearInterval(j)
	}
		if(document.documentElement.scrollTop>=90){
			document.getElementById("top").style.background="#fff";
			document.getElementById("top").style.position="fixed";
			var son=document.getElementsByName("shouye")
			for(var i=0;i<son.length;i++){
				son[i].style.color="#000"
			}
		}else{
			document.getElementById("top").style.background="rgba(0,0,0,0.3)";
			document.getElementById("top").style.position="absolute";
			var son=document.getElementsByName("shouye")
			for(var i=0;i<son.length;i++){
				son[i].style.color="#fff"
			}
		}

}
//点击按钮切换图片
document.getElementById("banner").onmouseover=function(){
	clearTimeout(z);
	clearInterval(j);
	
}
document.getElementById("banner").onmouseout=function(){
       z=setTimeout(function(){
		j=setInterval("lbt()",1000)
	},2000)
}
document.getElementById("xg_an").onmouseover=function(){
	clearTimeout(z);
	clearInterval(j);
	var img=document.getElementById("xg_an").children;
	img[0].style.display="none"
	img[1].style.display="block"
}
document.getElementById("xg_an1").onmouseover=function(){
	clearTimeout(z);
	clearInterval(j);
	var img=document.getElementById("xg_an1").children;
	img[0].style.display="none"
	img[1].style.display="block"
}
document.getElementById("xg_an").onmouseout=function(){
	clearTimeout(z);
	clearInterval(j);
	var img=document.getElementById("xg_an").children;
	img[0].style.display="block"
	img[1].style.display="none"
}
document.getElementById("xg_an1").onmouseout=function(){
	clearTimeout(z);
	clearInterval(j);
	var img=document.getElementById("xg_an1").children;
	img[0].style.display="block"
	img[1].style.display="none"
}
document.getElementById("xg_an").onclick=function(){
	clearTimeout(z);
	clearInterval(j)
	var ban=document.getElementById("banner").children[2];
	document.getElementById("banner").insertBefore(ban,document.getElementById("banner").children[0])
}
document.getElementById("xg_an1").onclick=function(){
	clearTimeout(z);
	clearInterval(j);
	var ban=document.getElementById("banner").children[0];
	document.getElementById("banner").appendChild(ban)
}
// var an=document.getElementsByClassName("xg_an");
//    for(var i=0;i<an.length;i++){
//    	an[i].onmouseover=function(e){
//    	   clearTimeout(z);
// 	   clearInterval(j);
// 	   	var img=e.target.children;
// 	   img[0].style.display="none"
// 	   img[1].style.display="block"
//    	}
//    }
document.getElementById("content_1").onclick=function(e){
	var so=document.getElementById("content_1").children;
	var di=document.getElementsByName("tap");
	for(var i=0;i<so.length;i++){
		so[i].style.borderBottom="none";
		di[i].style.display="none"
	}
	e.target.style.borderBottomColor="#ffa000";
	e.target.style.borderBottomWidth=2+"px";
	e.target.style.borderBottomStyle="solid"
	var da=e.target.getAttribute("data-index");
	di[da].style.display="block"
}
function l_bt(){
     var tt=document.getElementsByClassName("content_left")[0];
     var li=tt.scrollTop/570;
          tt.scrollTop+=15;
     if(tt.scrollTop%570==0){
     	clearInterval(zz)
         lt()

     	//alert(zz)
     }
     var ty=document.getElementsByClassName("content_right")[0].children;
     for(var xx=0;xx<ty.length;xx++){
               ty[xx].style.borderBottom="none"           	
        if(li>0.8 && li<1){
        	ty[xx].style.borderBottom="none"
              ty[1].style.borderBottomWidth=1+"px";
              ty[1].style.borderBottomColor="#ffa000";
              ty[1].style.borderBottomStyle="solid";
             }
        if(li>1 && li<2){
        	  ty[xx].style.borderBottom="none"
              ty[2].style.borderBottomWidth=1+"px";
              ty[2].style.borderBottomColor="#ffa000";
              ty[2].style.borderBottomStyle="solid";
             }
        if(li>2 && li<3){
        	  ty[xx].style.borderBottom="none"
              ty[3].style.borderBottomWidth=1+"px";
              ty[3].style.borderBottomColor="#ffa000";
              ty[3].style.borderBottomStyle="solid";
             }
        if(li>3 && li<4){
        	  ty[xx].style.borderBottom="none"
              ty[4].style.borderBottomWidth=1+"px";
              ty[4].style.borderBottomColor="#ffa000";
              ty[4].style.borderBottomStyle="solid";
             }
       if(li>4 && li<5){
        	  ty[xx].style.borderBottom="none"
              ty[5].style.borderBottomWidth=1+"px";
              ty[5].style.borderBottomColor="#ffa000";
              ty[5].style.borderBottomStyle="solid";
             }
           if(li>=0 && li<0.8){
     		  ty[5].style.borderBottom="none"
              ty[0].style.borderBottomWidth=1+"px";
              ty[0].style.borderBottomColor="#ffa000";
              ty[0].style.borderBottomStyle="solid";
             }
     }
     
     console.log(tt.scrollTop)
         if(tt.scrollTop>=2850){
         	clearTimeout(jj)
        	clearInterval(zz)
        	tt.scrollTop=0;
        	lt()
        } 
 }
 function lt(){
 	jj=setTimeout(function(){
     		  zz=setInterval("l_bt()",50)
     		},2000)
 }
lt();
document.getElementsByClassName("content_right")[0].onclick=function(e){
	var tt=document.getElementsByClassName("content_left")[0];
	if(e.target.nodeName=="LI"){
		var dd=e.target.getAttribute("data-index");
		clearTimeout(jj)
		clearInterval(zz)
        tt.scrollTop=parseInt(dd)*570;
         var ty=document.getElementsByClassName("content_right")[0].children;
        for(var i=0;i<ty.length;i++){
        	ty[i].style.borderBottom="none"
        }
        e.target.style.borderBottomStyle="solid";
        e.target.style.borderBottomColor="#ffa000";
        e.target.style.borderBottomWidth=1+"px"
        lt()
	}
}