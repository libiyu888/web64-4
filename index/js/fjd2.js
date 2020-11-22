function change(){
    var iw=window.innerWidth;
    var fs= iw*100/1898;
    document.getElementsByTagName("html")[0].style.fontSize=fs+"px";
}
window.onresize=change;
change();