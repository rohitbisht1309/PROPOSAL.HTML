const gun = document.getElementById("gun");
const blast = document.getElementById("blast");
const text = document.getElementById("text");

let canFire = true;

gun.addEventListener("click", () => {
  if (!canFire) {
    return;
  }

  canFire = false;
  blast.classList.remove("active");
  text.classList.remove("show");

  void blast.offsetWidth;
  blast.classList.add("active");
  text.classList.add("show");

  setTimeout(() => {
    canFire = true;
  }, 500);
});
