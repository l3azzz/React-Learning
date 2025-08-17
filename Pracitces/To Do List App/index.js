// index.js

// Grab DOM elements
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const doList = document.getElementById("do");
const doneList = document.getElementById("done");

// Remove previously added <li> on page load (since no tasks should start present)
function clearLists() {
  document.querySelectorAll("#do li").forEach((li) => li.remove());
  document.querySelectorAll("#done li").forEach((li) => li.remove());
}
clearLists();

// Add To Do
function addItem() {
  const value = inputBox.value.trim();
  if (!value) return;
  // Create new list item
  const li = document.createElement("li");

  // Checkbox (complete)
  const chkDiv = document.createElement("div");
  chkDiv.className = "chk";
  const chkImg = document.createElement("img");
  chkImg.src = "click.png";
  chkImg.alt = "Complete";
  chkImg.style.cursor = "pointer";
  chkDiv.appendChild(chkImg);

  // Delete button
  const delDiv = document.createElement("div");
  delDiv.className = "delete";
  const delImg = document.createElement("img");
  delImg.src = "delete.png";
  delImg.alt = "Delete";
  delImg.style.cursor = "pointer";
  delDiv.appendChild(delImg);

  // Add elements
  li.appendChild(chkDiv);
  li.appendChild(document.createTextNode(value));
  li.appendChild(delDiv);

  // Delete logic
  delDiv.onclick = () => li.remove();

  // Complete logic
  chkDiv.onclick = () => moveToDone(li, value);

  // Insert just after <h3>
  const h3 = doList.querySelector("h3");
  if (h3.nextSibling) {
    doList.insertBefore(li, h3.nextSibling);
  } else {
    doList.appendChild(li);
  }

  inputBox.value = "";
}

// Move item to Done
function moveToDone(li, value) {
  li.remove();
  const doneLi = document.createElement("li");

  // Revert button
  const revertDiv = document.createElement("div");
  revertDiv.className = "revert-btn";
  const revertImg = document.createElement("img");
  revertImg.src = "revert.png";
  revertImg.alt = "Revert";
  revertImg.style.cursor = "pointer";
  revertDiv.appendChild(revertImg);

  // Delete button
  const delDiv = document.createElement("div");
  delDiv.className = "delete";
  const delImg = document.createElement("img");
  delImg.src = "delete.png";
  delImg.alt = "Delete";
  delImg.style.cursor = "pointer";
  delDiv.appendChild(delImg);

  // Add elements
  doneLi.appendChild(revertDiv);
  doneLi.appendChild(document.createTextNode(value));
  doneLi.appendChild(delDiv);

  // Delete logic
  delDiv.onclick = () => doneLi.remove();

  // Revert logic
  revertDiv.onclick = () => moveToDo(doneLi, value);

  // Insert just after <h3>
  const h3 = doneList.querySelector("h3");
  if (h3.nextSibling) {
    doneList.insertBefore(doneLi, h3.nextSibling);
  } else {
    doneList.appendChild(doneLi);
  }
}

// Move item back to To Do
function moveToDo(doneLi, value) {
  doneLi.remove();
  addItemFromRevert(value);
}

// Helper for revert so the task goes back to To Do without triggering input
function addItemFromRevert(value) {
  const li = document.createElement("li");

  const chkDiv = document.createElement("div");
  chkDiv.className = "chk";
  const chkImg = document.createElement("img");
  chkImg.src = "click.png";
  chkImg.alt = "Complete";
  chkImg.style.cursor = "pointer";
  chkDiv.appendChild(chkImg);

  const delDiv = document.createElement("div");
  delDiv.className = "delete";
  const delImg = document.createElement("img");
  delImg.src = "delete.png";
  delImg.alt = "Delete";
  delImg.style.cursor = "pointer";
  delDiv.appendChild(delImg);

  li.appendChild(chkDiv);
  li.appendChild(document.createTextNode(value));
  li.appendChild(delDiv);

  delDiv.onclick = () => li.remove();
  chkDiv.onclick = () => moveToDone(li, value);

  const h3 = doList.querySelector("h3");
  if (h3.nextSibling) {
    doList.insertBefore(li, h3.nextSibling);
  } else {
    doList.appendChild(li);
  }
}

// Add click and Enter event
addBtn.onclick = addItem;
inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addItem();
});
