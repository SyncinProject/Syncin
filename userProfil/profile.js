var currentUser=JSON.parse(localStorage.getItem("CurrentUser"))

function showProfile(currentUser){
    console.log("here")
      user = currentUser[0]
     var element = `<div class="user">
     <img src="pic.webp">
     <h1>Your id : <span id="id">${user.id}</span></h1>
     <h1>Name : <span id="id">${user.name}</span></h1>
     <h1>Email : <span id="id">${user.email}</span></h1>
     <h1>Role : <span id="id">${user.status}</span></h1>
   </div>`




   $(".container").append(element)
}
showProfile(currentUser)