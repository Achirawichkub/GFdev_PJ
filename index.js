
function sayno(){
	alert("⚠ขออภัยหน้าเว็บนี้ยังไม่พร้อมใช้งาน ขณะนี้ทีมงานกำลังพัฒนาอยู่⚠")
}
//window.onscroll = function() {myFunction()};
//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
//function myFunction() {
//	if (window.pageYOffset >= sticky) {
//	  navbar.classList.add("sticky")
//	} else {
//	  navbar.classList.remove("sticky");
//	}
  //}
    function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


 var objpeople = [{
  username: "GFdev1",
  password: "GFdev2"
 },
 {
 username:"GFDEV",
 password:"gfdev"
}
];

function check(){
  var Uname = document.getElementById("username").value;
  var Pname = document.getElementById("password").value;
 
  for (i = 0; i < objpeople.length; i++){
    if (Uname == objpeople[i].username && Pname == objpeople[i].password){
      Swal.fire({
        icon: 'success',
        title: 'You are login now!',
        confirmButtonText:'<a href="Backend.html" style="text-decoration:none;">OK</a>'
        
      })
      return false;
    }
  } 
  Swal.fire({
    icon:'error',
    title: 'Oops...',
    text:'Username or password is wrong!!!'
  })
}
 




var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});


function Test(){
  var TT = document.getElementById("T1").value;

  document.getElementById("BUG").innerHTML = TT;
}


//database 
