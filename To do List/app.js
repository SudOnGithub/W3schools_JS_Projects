const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
    // keyup registers which key is pressed
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;
    // item = this.value 
    
    listItem.addEventListener("click", function(){
        this.classList.toggle("done") 
        // Upar wala, this = listItem, classList pr hum toggle lagaynge
        // toggle is like check box, check-uncheck
    })
    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove()
    })
    toDoBox.appendChild(listItem)
}