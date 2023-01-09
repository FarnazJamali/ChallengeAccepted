toggle_btn_img = () => {
  let btn = document.getElementById("btn");
  let image = document.getElementById("avatar");
  if (image.classList.contains("w3-hide")) {
    image.classList.remove("w3-hide");
    btn.innerHTML = "Hide";
  } else {
    image.classList.add("w3-hide");
    btn.innerHTML = "Show";
  }
};
