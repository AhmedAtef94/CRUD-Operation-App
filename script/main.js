var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productsList;
var mainBtn = document.getElementById("mainBtn");
var updateBtn = document.getElementById("updateBtn");

if (localStorage.getItem("productsList") != null) {
  productsList = localStorage.getItem("productsList");
  displayProduct(JSON.parse(productsList));
} else {
  productsList = [];
}
function addProduct() {
  // if (mainBtn.innerText == "Update") {
  //   alert("update");
  // } else {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
  };

  productsList.push(product);
  localStorage.setItem("producstList", JSON.stringify(productsList));
  displayProduct(productsList);

  clearForm();
  // console.log(productsList);
}
// }

// function updateData(updateIndex) {
//   productsList.splice();
// }

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

function displayProduct(list) {
  var cartona = "";
  // var dataDisplay = document.getElementById("dataDisplay");
  for (var i = 0; i < list.length; i++) {
    // console.log(list[i].name);
    // dataDisplay.style.display="inline";
    cartona += `<tr>
        <td>${i + 1}</td>
        <td> ${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].description}</td>
        <td> 
            <button onclick="updateProduct(${i})" class="btn btn-warning">Update</button>
        </td>

        <td> 
            <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>
        </td>
        
    </tr>`;
  }
  document.getElementById("myData").innerHTML = cartona;
}

function deleteProduct(deleteIndex) {
  productsList.splice(deleteIndex, 1);
  localStorage.setItem("producstList", JSON.stringify(productsList));
  displayProduct(productsList);
  // console.log(productsList);
}

function updateProduct(updateIndex) {
  productName.value = productsList[updateIndex].name;
  productPrice.value = productsList[updateIndex].price;
  productCategory.value = productsList[updateIndex].category;
  productDescription.value = productsList[updateIndex].description;

  // indez = updateIndex;

  updateBtn.classList.replace("d-none", "d-inline-block");
  mainBtn.classList.add("d-none");

  // mainBtn.innerText = "Update";
}

function updateData(updateIndex) {
  productsList.splice(productsList[updateIndex], 1, {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
  });
  displayProduct(productsList);
  clearForm();
  updateBtn.classList.replace("d-inline-block", "d-none");
  mainBtn.classList.replace("d-none", "d-inline-block");

  console.log(productsList);
}

function searchByName() {
  var userInput = "t";
  var searchedItem = [];
  for (var i = 0; i < productsList.length; i++) {
    if (productsList[i].name.toLowerCase().includes(userInput.toLowerCase())) {
      console.log(productsList[i].name);
      searchedItem.push(productsList[i]);
    }
  }

  displayProduct(searchedItem);
}
searchByName();

// var bl7 = "n";
// var x = "nokia".toLocaleLowerCase().includes("N".toLocaleLowerCase());
// console.log(x);
