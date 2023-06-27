var p = 1;
var srcc={
        'cat':"test_elements/test_img.jpg",
        'flower':"test_elements/test_img_2.jpg"
};

var altt={
        '0':"to cat",
        '1':"to flower"
};

function changeImg() {
        document.getElementById('imgc').src = srcc['flower'];
        document.getElementById('button_text')innerHTML() = altt['flower'];
        p = (p++)%2;
}
