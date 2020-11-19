var banner=document.getElementById("banner");
var show=document.getElementById("show");
var list=document.getElementById("list").children;
/* 轮播图自动切换 */
function lbt(){
    banner.scrollLeft+=1898;
    if(banner.scrollLeft>=1898){
        banner.scrollLeft=0;
        show.appendChild(show.children[0]);
        clearInterval(s);
        s2=setTimeout("ks()",1000);
        for(i=0;i<list.length;i++){
            list[i].className="moren";
        }
        ss=show.children[0].getAttribute("data-index");
        list[ss].className="action";
    }
}
var s,ss,s1,s2;
setTimeout("ks()",1000);
function ks(){
    clearInterval(s);
    s=setInterval("lbt()",1000);
}
/* 鼠标划入焦点切换图片 */
document.getElementById("list").onmouseover=function(e){
    if(e.target.nodeName=="LI"){
        clearInterval(s);
        clearTimeout(s2);
        var q=e.target.getAttribute("data-index");
        var index1=show.children[0].getAttribute("data-index");
        if(q>=index1){
            var ll=q-index1;
            }else{
                var ll=index1+index1-q;
            }
            for(j=0;j<ll;j++){
                show.appendChild(show.children[0]);
            }
            for(i=0;i<list.length;i++){
                list[i].className="moren";
            }
            ss=show.children[0].getAttribute("data-index");
            list[ss].className="action";
    }
}
document.getElementById("list").onmouseleave=function(e){
    if(e.target.nodeName=="LI"){
        setTimeout("ks()",500);
    }
}
/* 鼠标划入banner暂停轮播图 */
banner.onmouseenter=function(){
    clearInterval(s);
    clearTimeout(s2);
}
banner.onmouseleave=function(){
    setTimeout("ks()",1000);
}
/* 鼠标划入banner的左右侧箭头变色 */
var b_left=document.getElementById("b_left");
var b_right=document.getElementById("b_right");
b_left.onmouseover=function(){
    this.children[0].className="b-left2";
}
b_left.onmouseout=function(){
    this.children[0].className="b-left1";
}
b_right.onmouseover=function(){
    this.children[0].className="b-right2";
}
b_right.onmouseout=function(){
    this.children[0].className="b-right1";
}
/* 鼠标点击banner的左右侧箭头切换图片 */
b_left.onclick=function(){
    show.appendChild(show.children[0]);
    show.appendChild(show.children[0]);
    show.appendChild(show.children[0]);
    for(i=0;i<list.length;i++){
        list[i].className="moren";
    }
    ss=show.children[0].getAttribute("data-index");
    list[ss].className="action";
}
b_right.onclick=function(){
    show.appendChild(show.children[0]);
    for(i=0;i<list.length;i++){
        list[i].className="moren";
    }
    ss=show.children[0].getAttribute("data-index");
    list[ss].className="action";
}
/* 产品展示划入切换效果 */
var cpzs_1=document.getElementById("cpzs-1");
var cpzs_2=document.getElementById("cpzs-2");
cpzs_1.children[0].onmouseover=function(){
    cpzs_1.children[1].className="";
    this.className="scf";
    cpzs_2.children[1].style.display="none";
    cpzs_2.children[0].style.display="block";

}
cpzs_1.children[1].onmouseover=function(){
    cpzs_2.children[0].style.display="none";
    cpzs_2.children[1].style.display="block";
    cpzs_1.children[0].className="";
    this.className="scf";
}
/* 产品展示点击左箭头 */
document.getElementById("cpleft").onclick=function(){
    var aq=cpzs_1.children[0].className;
    if(aq=="scf"){
        cpzs_2.children[0].style.display="none";
        cpzs_2.children[1].style.display="block";
        cpzs_1.children[0].className="";
        cpzs_1.children[1].className="scf";
    }else{
        cpzs_1.children[1].className="";
        cpzs_1.children[0].className="scf";
        cpzs_2.children[1].style.display="none";
        cpzs_2.children[0].style.display="block";
    }
}
/* 产品展示点击右箭头 */
document.getElementById("cpright").onclick=function(){
    var aq=cpzs_1.children[0].className;
    if(aq=="scf"){
        cpzs_2.children[0].style.display="none";
        cpzs_2.children[1].style.display="block";
        cpzs_1.children[0].className="";
        cpzs_1.children[1].className="scf";
    }else{
        cpzs_1.children[1].className="";
        cpzs_1.children[0].className="scf";
        cpzs_2.children[1].style.display="none";
        cpzs_2.children[0].style.display="block";
    }
}
window.onscroll=function(){
    var distance=document.documentElement.scrollTop;
    var s=document.getElementById("aside");
    if(distance>0){
        s.style.display="block";
    }else{
        s.style.display="none";  
}
}

