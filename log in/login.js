<<<<<<< HEAD
=======
//login check//
>>>>>>> 5ca6ae1f8377d40d509b7320daa1600f3988b3cd
var workers=JSON.parse(localStorage.getItem("data"))

var employment=JSON.parse(localStorage.getItem("info"))

<<<<<<< HEAD
$('#login').on('click',function(){
=======
$('#login').on('click',function(){       
>>>>>>> 5ca6ae1f8377d40d509b7320daa1600f3988b3cd
     var emailcheck=$('#email').val()
    var passcheck=$('#password').val()
for(var i=0;employment.length>i;i++){
if(employment[i].mail.includes(emailcheck) && employment[i].password.includes(passcheck))
{
<<<<<<< HEAD
    $(location).attr("href","../main page/main.html")
=======
    window.location.href='main.html'
>>>>>>> 5ca6ae1f8377d40d509b7320daa1600f3988b3cd
} 

    else {
        $('#alert').text('Please try again ')
<<<<<<< HEAD
    }
=======
    }   
>>>>>>> 5ca6ae1f8377d40d509b7320daa1600f3988b3cd
}
for(var i=0;workers.length>i;i++){
    if(workers[i].mail.includes(emailcheck) && workers[i].password.includes(passcheck))
    {
<<<<<<< HEAD
        $(location).attr("href","http://127.0.0.1:5500/main%20page/main.html")
    } 

        else {
            $('#alert').text('Please try again ')
        }
    }

})
=======
        window.location.href='main.html'
    } 
    
        else {
            $('#alert').text('Please try again ')
        }   
    }

})
>>>>>>> 5ca6ae1f8377d40d509b7320daa1600f3988b3cd
