var index = 0;//当前位置
//上一张图片
function middle_before(){
	if(index<=0){
		index = 2;
	}else{
		index--;
	}
	document.getElementById("middle_img").src="img/banner"+(index+1)+".jpg";
}
function middle_next(){
	if(index>=2){
		index = 0;
	}else{
		index++;
	}
	document.getElementById("middle_img").src="img/banner"+(index+1)+".jpg";
}
//鼠标放到指定列表项
function middle_li(icon_index){
	index = icon_index;
	document.getElementById("middle_img").src="img/banner"+(index)+".jpg";
}

