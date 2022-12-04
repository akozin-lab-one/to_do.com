let input = document.getElementById("text");
let btn = document.querySelector(".input-btn");
let list = document.querySelector(".text-list");

input.addEventListener("keyup", () => {
    if (input.value.trim() !== "") {
        btn.classList.add("btn-active");
    } else {
        btn.classList.remove("btn-active");
    }
})

btn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let itemCo = document.createElement("div");
        itemCo.innerHTML =
            `
            <p class="title">${input.value}</p>
            <div class="btn">
                <button class="edit-btn">Edit</button>
                <button class="del-btn">Delete</button>
            </div>
        `;

        let tasks = document.querySelector(".text-list")
        tasks.appendChild(itemCo);

        input.value = "";
    }
})

list.addEventListener("click", (e) => {

    let text = document.querySelector(".title");
    if (e.target.classList.contains('edit-btn')) {
        e.target.parentElement.parentElement.innerHTML = `
        <input class="edit-text" type="text" value="${text.textContent}">
        <div class="btn">
            <button class="save-btn">Save</button>
        </div>`;
    }

    let editVal = document.querySelector(".edit-text");
    if (e.target.classList.contains('save-btn')) {
        e.target.parentElement.parentElement.innerHTML =
            `
            <p class="title">${editVal.value}</p>
            <div class="btn">
                <button class="edit-btn">Edit</button>
                <button class="del-btn">Delete</button>
            </div>`;
    }

    text.addEventListener("click", () => {
        text.style = "text-decoration:line-through;"
    })

    if (e.target.classList.contains('del-btn')) {
        e.target.parentElement.parentElement.remove();
    }

})