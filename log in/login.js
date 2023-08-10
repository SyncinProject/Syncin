var workers=JSON.parse(localStorage.getItem("data"))

var employment=JSON.parse(localStorage.getItem("info"))

$('#login').on('click',function(){
     var emailcheck=$('#email').val()
    var passcheck=$('#password').val()
for(var i=0;employment.length>i;i++){
if(employment[i].mail.includes(emailcheck) && employment[i].password.includes(passcheck))
{
    $(location).attr("href","../main page/main.html")
} 

    else {
        $('#alert').text('Please try again ')
    }
}
for(var i=0;workers.length>i;i++){
    if(workers[i].mail.includes(emailcheck) && workers[i].password.includes(passcheck))
    {
        $(location).attr("href","http://127.0.0.1:5500/main%20page/main.html")
    } 

        else {
            $('#alert').text('Please try again ')
        }
    }

})