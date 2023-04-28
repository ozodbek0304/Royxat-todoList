let tBody = document.querySelector("#tBody");
let form = document.querySelector("#form");

function render(todoList) {
  let index = 0;
  tBody.innerHTML = "";

  todoList.forEach((item) => {
    let trBody = document.createElement("tr");
    trBody.className = "border text-center";
    let tdName = document.createElement("td");
    let tdFname = document.createElement("td");
    let tdLavozim = document.createElement("td");
    let tdTelefon = document.createElement("td");
    let tdDeleteBtn = document.createElement("td");
    let tdEditBtn = document.createElement("td");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "O'chirish";
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.setAttribute("onclick", `newIndex(${index})`);

    let editBtn = document.createElement("button");
    editBtn.innerText = "Tahrirlash";
    editBtn.classList.add("btn", "btn-success");
    editBtn.setAttribute("onclick", `newTahrirlash(${index})`);
    editBtn.setAttribute("data-bs-target", "#navbarTop");
    editBtn.setAttribute("data-bs-toggle", "offcanvas");

    tdName.innerText = item.name;
    tdFname.innerText = item.fname;
    tdLavozim.innerText = item.lavozim;
    tdTelefon.innerText = item.telefon;

    tdDeleteBtn.appendChild(deleteBtn);
    tdEditBtn.appendChild(editBtn);
    trBody.appendChild(tdName);
    trBody.appendChild(tdFname);
    trBody.appendChild(tdLavozim);
    trBody.appendChild(tdTelefon);
    trBody.appendChild(tdEditBtn);
    trBody.appendChild(tdDeleteBtn);
    tBody.appendChild(trBody);
    index++;
  });
}

let bush = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let fname = document.querySelector("#fname").value;
  let lavozim = document.querySelector("#lavozim").value;
  let telefon = parseInt(document.querySelector("#telefon").value);

  bush.push({
    name: name,
    fname: fname,
    lavozim: lavozim,
    telefon: telefon,
  });

  e.target.reset();
  render(bush);
});

function newIndex(index) {
  bush.splice(index, 1);
  render(bush);
}

let editForm = document.querySelector("#editForm");
let editIndex;

function newTahrirlash(index) {
  editIndex = index;
  document.querySelector("#ofname").value = bush[index].name;
  document.querySelector("#offname").value = bush[index].fname;
  document.querySelector("#offlavozim").value = bush[index].lavozim;
  document.querySelector("#offtelefon").value = bush[index].telefon;
}

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  bush[editIndex].name = document.querySelector("#ofname").value;
  bush[editIndex].fname = document.querySelector("#offname").value;
  bush[editIndex].lavozim = document.querySelector("#offlavozim").value;
  bush[editIndex].telefon = document.querySelector("#offtelefon").value;

  render(bush);
  // e.target.reset();
  document.querySelector("#ofname").value = "";
  document.querySelector("#offname").value = "";
  document.querySelector("#offlavozim").value = "";
  document.querySelector("#offtelefon").value = "";
});
