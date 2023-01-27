let myForm = document.getElementById("my-form");
let price = document.querySelector("#price");
let dish = document.querySelector("#dish");
let table = document.querySelector("#table");
let table1 = document.querySelector("#tab1");
let table2 = document.querySelector("#tab2");
let table3 = document.querySelector("#tab3");

myForm.addEventListener("submit", onSubmit);
window.addEventListener("DOMContentLoaded", loadedContent);

function onSubmit(e) {
  e.preventDefault();
  obj = {
    price: price.value,
    dish: dish.value,
    table: table.value,
  };

  axios
    .post(
      "https://crudcrud.com/api/66d1f1eea87841c59b29ea79675ad5ae/updateInfo",
      obj
    )
    .then((res) => {
      console.log(res);
      showNewUser(res.data);
    })
    .catch((err) => console.log(err));
}

function loadedContent(e) {
  axios
    .get("https://crudcrud.com/api/66d1f1eea87841c59b29ea79675ad5ae/updateInfo")
    .then((res) => {
      res.data.forEach((ele) => {
        showNewUser(ele);
      });
    })
    .catch((err) => console.log(err));
}

function showNewUser(user) {
  price.value = "";
  dish.value = "";
  table.value = "";
  const childHTML = `<li id=${user._id}>${user.price} - ${user.table} - ${user.dish}
  <button onclick=deleteUser('${user._id}','${user.table}')>Delete Order</button>
  </li>`;
  if (user.table == "table1") {
    table1.innerHTML = table1.innerHTML + childHTML;
  } else if (user.table == "table2") {
    table2.innerHTML = table2.innerHTML + childHTML;
  } else {
    table3.innerHTML = table3.innerHTML + childHTML;
  }
}

function deleteUser(userid, table) {
  axios
    .delete(
      "https://crudcrud.com/api/66d1f1eea87841c59b29ea79675ad5ae/updateInfo/"+userid
    )
    .then((res) => {
      removeUserFromScreen(userid, table);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeUserFromScreen(userid, table) {
  const childNode = document.getElementById(userid);
  if (table == "table1") {
    table1.removeChild(childNode);
  } else if (table == "table2") {
    table2.removeChild(childNode);
  } else {
    table3.removeChild(childNode);
  }
}
