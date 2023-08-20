const input = document.querySelector(".head-input");
const addBtn = document.querySelector(".head-add");
const todoSection = document.querySelector(".todo-section");

addBtn.addEventListener("click", () => {
    if(input.value.length>0){

        const divList = document.createElement("div");
        divList.classList.toggle("list");
        divList.style.animation ='animate1 1s linear'
        todoSection.appendChild(divList);
      
        const pList = document.createElement("p");
        pList.classList.toggle("info");
        pList.innerText = input.value;
        divList.appendChild(pList);
      
        const btnBox = document.createElement("div");
        btnBox.classList.toggle("btn-box");
        divList.appendChild(btnBox);
      
        const saveBtn = document.createElement("button");
        saveBtn.classList.toggle("save-btn");
        saveBtn.classList.toggle("save-hover-active");
        saveBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        btnBox.appendChild(saveBtn);
      
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.toggle("delete-btn");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        btnBox.appendChild(deleteBtn);
        input.value=""
        deleteBtn.addEventListener('click',()=>{
          todoSection.removeChild(divList)
        })
        saveBtn.addEventListener('click',()=>{
          pList.classList.toggle('line')
          saveBtn.classList.remove("save-hover-active");
          saveBtn.setAttribute('disabled','')
          saveBtn.style.cursor='context-menu'
          divList.style.background ='rgb(0,0,0,.1)'
        })
    }
});
