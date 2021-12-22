
function deleteitem(){
    var option = confirm("Bạn chắc xóa chứ?");
    if(!option){
        return;
    }
}


function showForm()
{
    return $(".formorder").slideToggle();
}

function hiddenButton()
{
    return $(".hidden").hide();
}