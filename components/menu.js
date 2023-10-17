export default function menu() {
  const openBar = document.querySelector("#openBar");
  const closeBar = document.querySelector("#closeBar");
  const menuBar = document.querySelector("#menuBar");

  openBar.addEventListener("click", () => {
    menuBar.classList.toggle("activeMenu");
  });

  closeBar.addEventListener("click", () => {
    menuBar.classList.remove("activeMenu");
  });
}
