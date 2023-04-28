function render(qator) {
  let index = 0;
  tBody.innerHTML = "";

  qator.forEach((item) => {
    let trBody = document.createElement("tr");
    trBody.className = "border text-center";
    let tdName = document.createElement("td");
    let tdFname = document.createElement("td");
    let tdLavozim = document.createElement("td");
    let tdTelefon = document.createElement("td");
    let tdBtn = document.createElement("td");
    let tdBtn1 = document.createElement("td");

    let btn = document.createElement("button");
    btn.innerText = "O'chirish";
    btn.classList.add("btn", "btn-danger");
    btn.setAttribute("onclick", `newIndex(${index})`);

    let btn1 = document.createElement("button");
    btn1.innerText = "Tahrirlash";
    btn1.classList.add("btn", "btn-success");
    btn1.setAttribute("onclick", `newTahrirlash(${index})`);
    btn1.setAttribute("data-bs-target", "#navbarTop");
    btn1.setAttribute("data-bs-toggle", "offcanvas");
  
    tdName.innerText = item.name;
    tdFname.innerText = item.fname;
    tdLavozim.innerText = item.lavozim;
    tdTelefon.innerText = item.telefon;
   
    tdBtn.appendChild(btn);
    tdBtn1.appendChild(btn1);
    trBody.appendChild(tdName);
    trBody.appendChild(tdFname);
    trBody.appendChild(tdLavozim);
    trBody.appendChild(tdTelefon);
    trBody.appendChild(tdBtn1);
    trBody.appendChild(tdBtn);
    tBody.appendChild(trBody);
    index++
  });
}

let tBody = document.querySelector("#tBody");
let clear = document.querySelector("#clear");
let form = document.querySelector("#form");

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

let tahrirForm = document.querySelector(".tahrirForm");
let editIndex;

function newTahrirlash(index) {
  editIndex = index;
  document.querySelector("#ofname").value = bush[index].name;
  document.querySelector("#offname").value = bush[index].fname;
  document.querySelector("#offlavozim").value = bush[index].lavozim;
  document.querySelector("#offtelefon").value = bush[index].telefon;
};


tahrirForm.addEventListener("submit", function (e) {
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

