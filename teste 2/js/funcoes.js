$(window).ready(function(){
    lightBoxCenter(1);
    //lightBoxOpen(1);
});

$(window).resize(function(){
    lightBoxCenter(1);
});

function lightBoxCenter(id){
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    
    var altura = $('#light'+id).height();
    var largura = $('#light'+id).width();
    
    var lef = (windowWidth - largura)/2;
    var alt = (windowHeight - altura)/2;
    
    $('#light'+id).css({
        "top":alt,
        "left":lef
    });
}

function lightBoxOpen(id){
    lightBoxCenter(id);
    
    $('#fade'+id).show();
    $('#light'+id).show();
}

function lightBoxClosed(id){
    document.getElementById('light'+id).style.display='none';
    document.getElementById('fade'+id).style.display='none';
}