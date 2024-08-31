const nameinput = document.getElementById("nameinput");
const error_container = document.getElementById("error");
const addbutton = document.getElementById("addbutton");
const addTolist = document.getElementById("addTolist");
let errormsg;

addbutton.addEventListener("click", () => {
  const name = nameinput.value.trim();

  if (name !== "") {
    const listitem = document.createElement("li");
    listitem.classList.add("list-item");
    listitem.innerHTML = name;
    nameinput.value = "";

    addTolist.appendChild(listitem);
    //create a delete button
    const deletebutton = document.createElement("button");
    deletebutton.classList.add("delete");
    deletebutton.innerText = "Delete";
    //add deletebutton 
    listitem.appendChild(deletebutton);

    deletebutton.addEventListener("click", () => {
      addTolist.removeChild(listitem);
      listitem.removeChild(deletebutton);
    });
  } else {
    if (!errormsg) {
        errormsg = document.createElement('p');
        errormsg.classList.add('error-msg');
        errormsg.innerHTML = "Please enter the value";
        error_container.appendChild(errormsg);
    }
  }
});
nameinput.addEventListener('input',()=> {
        if (errormsg) {
            error_container.removeChild(errormsg);
            errormsg = null;
        }
    }
);
