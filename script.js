let pass = document.getElementById("pass");
let icon = document.getElementById("icon");

function passShow() {
  if (pass.type === "password") {
    pass.type = "text";
    icon.innerHTML = `<i class="fa-solid fa-eye" onclick="passShow()"></i>`;
    icon.style.color = "black";
  } else {
    pass.type = "password";
    icon.innerHTML = `<i class="fa-solid fa-eye-slash" onclick="passShow()"></i>`;
    icon.style.color = "rgb(190, 190, 190)";
  }
}
