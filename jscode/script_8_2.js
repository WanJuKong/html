function changeImg(imageId,buttonId) {
	let txt = document.getElementById(buttonId).innerHTML;
	let src = 'test_elements/';
	if(txt=='To cat'){
		txt = 'To flower';
		src += 'test_img_2.jpg';
	}
	else{
		txt = 'To cat';
		src += 'test_img.jpg';
	}
        document.getElementById(imageId).src = src;
        document.getElementById(buttonId).innerHTML = txt;
}
