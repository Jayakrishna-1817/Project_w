document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
 
  var USERNAME = document.getElementById("username").value;
  var PASSWORD = document.getElementById("password").value;
  
 
  if (USERNAME === "admin" && PASSWORD === "vvit@123") {
   var nextPageURL = "button_file.html"; // Replace with the actual URL of your next page

        // Use window.location to navigate to the next page
        window.location.href = nextPageURL;
  
  } else {
    
    alert(" Invalid User"); }
});