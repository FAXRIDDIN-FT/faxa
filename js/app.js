const mainCarusel = document.querySelector(".carusel_img img");
const toPopap = document.querySelector(".card_section");
const btnHiddin = document.querySelector(".btn");

function changeImage(poth) {
  mainCarusel.setAttribute("src", poth);
}
function showSection() {
  toPopap.classList.toggle("show");
}
function hideSection() {
  toPopap.classList.remove("show");
}
function hidebtn() {
  btnHiddin.classList.remove("show");
}
function showbtn() {
  btnHiddin.classList.add("show");
}
//table//

const tableEl = document.querySelector(".table tbody")
 

function add() {
    const newRow = tableEl.insertRow();
    newRow.innerHTML = `
      <td>2025-04-20 12:00</td>
      <td>200399</td>
      <td>New Product</td>
      <td>$123.45</td>
      <td>1</td>
      <td>$123.45</td>
    `;
  }

