const singup = (e) => {
  e.preventDefault();
  let username = document.querySelector("#username").value
  let password = document.querySelector("#password").value
  var nameRegex = /^[a-zA-Z\-]+$/;
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (nameRegex.test(username) == false) {
    alert("please enter valid username")
    return
  }
  else{
    alert("valid username")
  }
  if (regularExpression.test(password) == false) {
    alert("please enter valid password")
    return
  }
  else{
    alert("valid password")
  }

}
document.querySelector("form").addEventListener("submit", singup);