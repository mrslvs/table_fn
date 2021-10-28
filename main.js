var calculateButton = document.querySelector("#calculate");

calculateButton.addEventListener("click", () => {
  document.querySelector(".backdrop").dispatchEvent(
    new CustomEvent("calculate", {
      detail: {
        x: document.querySelector("#y-value").value,
        y: document.querySelector("#x-value").value,
      },
    })
  );
});

var closeModal = document.querySelector("#close-modal");
closeModal.addEventListener("click", () => {
  document.querySelector(".backdrop").style.display = "none";
  parent = document.querySelector(".table-wrapper");
  remChild = document.querySelector("table");
  parent.removeChild(remChild);
});

document.querySelector(".backdrop").addEventListener("calculate", (e) => {
  // show modal
  document.querySelector(".backdrop").style.display = "grid";
  //   create table
  const table = document.createElement("table");
  table.style.border = "1px solid black";

  var row_x = 1;
  var col_y = 1;
  for (let r = 0; r <= e.detail.x; r++) {
    const row = table.insertRow();
    for (let c = 0; c <= e.detail.y; c++) {
      if (r == 0 && c == 0) {
        const cell = row.insertCell();
        cell.innerText = " ";
        // cell style
        cell.style.padding = "5px";
        cell.style.border = "1px solid black";
      } else if (r == 0) {
        const cell = row.insertCell();
        cell.innerText = `X=${row_x}`;
        row_x++;
        // cell style
        cell.style.padding = "5px";
        cell.style.border = "1px solid black";
      } else if (c == 0) {
        const cell = row.insertCell();
        cell.innerText = `Y=${col_y}`;
        col_y++;
        // cell style
        cell.style.padding = "5px";
        cell.style.border = "1px solid black";
      } else {
        const cell = row.insertCell();
        var res = r * c;
        cell.innerText = `${res}`;
        // cell style
        cell.style.padding = "5px";
        cell.style.border = "1px solid black";
      }
    }
  }
  document.querySelector(".table-wrapper").appendChild(table);
});

// validate inputs
var inputX = document.getElementById("x-value");
var inputY = document.getElementById("y-value");

inputX.addEventListener("blur", function () {
  if (
    //   both invalid
    (inputX.value < 1 || inputX.value > 9) &&
    (inputY.value < 1 || inputY.value > 9)
  ) {
    alert("Invalid input for X&Y!");
    calculateButton.disabled = true;
    return false;
  } else if (
    // X valid, Y invalid
    (inputX.value > 0 || inputX.value < 10) &&
    (inputY.value < 1 || inputY.value > 9)
  ) {
    alert("Invalid input for Y!");
    calculateButton.disabled = true;
    return false;
  } else if (
    // X invalid, Y valid
    (inputX.value < 1 || inputX.value > 9) &&
    (inputY.value > 0 || inputY.value < 10)
  ) {
    alert("Invalid input for X!");
    calculateButton.disabled = true;
    return false;
  } else {
    //   both valid
    calculateButton.disabled = false;
    return true;
  }
});

inputY.addEventListener("blur", function () {
  if (
    //   both invalid
    (inputX.value < 1 || inputX.value > 9) &&
    (inputY.value < 1 || inputY.value > 9)
  ) {
    alert("Invalid input for X&Y!");
    calculateButton.disabled = true;
    return false;
  } else if (
    // X valid, Y invalid
    (inputX.value > 0 || inputX.value < 10) &&
    (inputY.value < 1 || inputY.value > 9)
  ) {
    alert("Invalid input for Y!");
    calculateButton.disabled = true;
    return false;
  } else if (
    // X invalid, Y valid
    (inputX.value < 1 || inputX.value > 9) &&
    (inputY.value > 0 || inputY.value < 10)
  ) {
    alert("Invalid input for X!");
    calculateButton.disabled = true;
    return false;
  } else {
    //   both valid
    calculateButton.disabled = false;
    return true;
  }
});
