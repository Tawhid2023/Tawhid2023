
//doctor.js start
var definedoctor = document.querySelector("#doctorForm");
var Name =definedoctor.querySelector("#Dname");
var degree =definedoctor.querySelector("#ddegree")
var doctor =definedoctor.querySelector("#doctor")
var divition =definedoctor.querySelector("#dition")
var distric =definedoctor.querySelector("#distric")
var upazila =definedoctor.querySelector("#upazila")
var snumber =definedoctor.querySelector("#sNumber")
var asnumber =definedoctor.querySelector("#asNumber")
var Email =definedoctor.querySelector("#email")
var password =definedoctor.querySelector("#password")
var cPassword =definedoctor.querySelector("#confirmPassword")
var rbtn =definedoctor.querySelector("#rbtn")


//psw validation start
var definemessage= document.querySelector("#message");
var letter = definemessage.querySelector("#letter");
var capital = definemessage.querySelector("#capital");
var number = definemessage.querySelector("#number");
var length = definemessage.querySelector("#length");

// When the user clicks on the password field, show the message box
password.addEventListener("focus",focuss);
 function focuss() {
  definemessage.style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
password.addEventListener("blur",display );
function display(){
  definemessage.style.display = "none";
}

// When the user starts to type something inside the password field
password.onkeyup = function() {

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  

  // Validate length
  if(password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
 
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
 
  }
 
  if(password.value.match(lowerCaseLetters)&& password.value.match(upperCaseLetters)&& password.value.match(numbers)&& password.value.length >= 8){
  display();
  }
  else{
  focuss();
  }
  
  
}
//password validation end
 // When the user clicks on the password field, show the message box
  
 
 const feedback = document.getElementById("confirmPassword-feedback");
 let isPasswordMatch = false;

cPassword.addEventListener("input", () => {
  if (password.value != cPassword.value) {
    feedback.innerHTML = "Password did not match.";
    isPasswordMatch = false;
  } else {
    feedback.innerHTML = "";
    isPasswordMatch = true;
  }
});

//doctor select litchner start
doctor.addEventListener("change",selector);
 
 function selector(e){
console.log(e.target.value);
}
//doctor select litchner end
//divition litchner start
divition.addEventListener("change",dvition)
function dvition(e){
console.log(e.target.value);
}
//divition litchner end

//form litchner start
definedoctor.addEventListener("submit",dformHandeler);

function dformHandeler(e){
		e.preventDefault();
		
 var data = {
 name:Name.value,
 degree:degree.value,
 doctor:doctor.value,
 divition:divition.value,
 distric:distric.value,
 upazila:upazila.value,
 snumber: snumber.value,
 asnumber: asnumber.value,
 Email: Email.value,
 password: password.value,
 cpassword:cpassword.value,
 }
console.log(data);

if (isPasswordMatch) {
  		  alert("Form submitted. Great!");
   		  Name.value=""
  		  degree.value=""
    	  doctor.value=""
   		  divition.value=""
  		  distric.value=""
	      upazila.value=""
   		  snumber.value=""
    	  asnumber.value=""
 	      Email.value=""
  		  password.value=""
   		  cpassword.value="" 
   		  return true;
   		  }
  else{
  
  alert("Wait! Password did not match.");
  return false;}

};
//form litchner end
 //doctor.js end