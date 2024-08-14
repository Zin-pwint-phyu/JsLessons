const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListTag")[0];
let productId = 1;
const handleChange = (event) => {
  const inputValue = event.target.value;
  inputTag.value = "";
  const listItems = document.createElement("span");
  const productTag = document.createElement("div");
  const iconTag = document.createElement("i");
  //   <i class="fa-solid fa-trash"></i>
  iconTag.classList.add("fa-solid", "fa-trash");
  productTag.classList.add("productName");
  productTag.addEventListener("click", () => {
    const lineThrough = listItems.classList.contains("spanText");
    if (lineThrough) {
      listItems.classList.remove("spanText");
    } else {
      listItems.classList.add("spanText");
    }
  });
  listItems.classList.add("spanTag");
  listItems.append(productId + ". " + inputValue);
  productTag.append(listItems, iconTag);
  shoppingListTag.append(productTag);
  productId += 1;
};
inputTag.addEventListener("change", handleChange);
