 // contact form handeler start
 //submit handeler
 var bcontactform = document.querySelector("#bcontactform");
 var email = bcontactform.querySelector("#email");
 var address = bcontactform.querySelector("#address");
 var comment= bcontactform.querySelector("#comment");
 //
 bcontactform.addEventListener("submit",formHandeler)
 
 
 function formHandeler(e){
 e.preventDefault(); // value ondiplay
 var userinfo = {
 email: email.value,
 address: address.value,
 comment: comment.value,
 
 };
 
 
 console.log(userinfo);//print object data
 //when submit then empty field
 email.value=""
 address.value=""
 comment.value=""
 };
  // contact form handeler end