const formContainer = document.getElementById("formContainer");
const subscribe = document.getElementById("subscribe");
const closeForm = document.getElementById("closeForm");
const form = document.getElementById ("form");

subscribe.onclick = function () {
  if (formContainer.getAttribute("class") == "form-container") {
    formContainer.setAttribute("class", "form-none");
  } else {
    formContainer.setAttribute("class", "form-container");
  }
};
closeForm.onclick = function () {
  formContainer.setAttribute("class", "form-none");
};
form.onsubmit = (event)=>{
  event.preventdefault;
  formContainer.setAttribute("class", "form-none");
}
