$().ready(function() {
	
	 $('.dropdown select').change( function(){
        var id = $($(this).parents("div")).attr('id');
        var selected = $("#"+id+" select option:selected");
        var value = "";
        if(selected.val() != 0 ){
            if(selected.text().length < 28){
                value = selected.text();
            }else{
                value = truncar(selected.text(),28);
            }
        }
        if(selected.val() == '' ){
            value = '<< Selecione >>';
        }
        $("#"+id+" label").html(value);
    });
	
});