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

const data = [
  ["Date", "Order Id", "Name", "Price", "Quantity", "Total"],
  ["2017-09-29 01:22", 200397, "Samsung S8 Black", "$735.00", 1, "$735.00"],
  ["2017-09-29 01:22", 200397, "Samsung S8 Black", "$735.00", 1, "$735.00"],
  ["2017-09-29 01:22", 200397, "Samsung S8 Black", "$735.00", 1, "$735.00"],
  ["2017-09-29 01:22", 200397, "Samsung S8 Black", "$735.00", 1, "$735.00"],
];

const table = document.createElement("table");

const headerRow = document.createElement("tr");
data[0].forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

document.getElementById("table-container").appendChild(table);

let rowIndex = 1;
document.getElementById("addRowBtn").addEventListener("click", () => {
  const sourceRow = data[(rowIndex % (data.length - 1)) + 1];
  const row = document.createElement("tr");

  sourceRow.forEach((cellData) => {
    const td = document.createElement("td");
    td.textContent = cellData;
    row.appendChild(td);
  });

  table.appendChild(row);
  rowIndex++;
});
