const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const btn = document.querySelector(".btn");

myForm.addEventListener("submit", onSubmit);
// btn.addEventListener("mouseover", over);
// btn.addEventListener('mouseout', out);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    localStorage.setItem(nameInput.value, emailInput.value);
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    userList.appendChild(li);
    // userList.firstElementChild.textContent = "hello";
    userList.firstElementChild.style.background = "green";
    if (userList.children[1]) {
      userList.children[1].style.background = "yellow";
      nameInput.value = "";
      emailInput.value = "";
    }
  }
}

// function over(e) {
//   e.preventDefault();
//   if (nameInput.value === "" || emailInput.value === "") {
//     // alert('Please enter all fields');
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
//     );
//     userList.appendChild(li);
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }

// function out(e) {
//   e.preventDefault();
//   if (nameInput.value === "" || emailInput.value === "") {
//     // alert('Please enter all fields');
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
//     );
//     userList.appendChild(li);
//     userList.firstElementChild.textContent = "hello";
//     userList.firstElementChild.style.background = "green";
//     if(userList.children[1])
//     userList.children[1].style.background = "yellow";
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }
