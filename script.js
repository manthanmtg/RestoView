seconds = 5;
function redirect(event){
 if (seconds <=0){
 // redirect to new url after counter  down.
  window.open("res_login.html","_self");
 }else{
  seconds--;
  document.getElementById("pageInfo").innerHTML = "Form Successfully Submitted. Redirecting to login page in "+seconds+" seconds.Please wait...";
  setTimeout("redirect()", 1000);
 }
 event.stopPropagation();
}