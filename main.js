const get = element => document.getElementById(element);

const newText = get("newText");
const newBtn = get("newBtn");
const pendingList = get("pendingList");
const completedList = get("completedList");

newBtn.addEventListener("click", () => {
    if (newText.value != "") {
        const newTodo = document.createElement("li");
        newTodo.classList.add("text-center", "p-3", "bg-gray-500", "text-black", "mt-4", "rounded", "shadow-lg", "cursor-pointer", "hover:bg-red-500", "hover:text-white",)
        newTodo.innerText = newText.value;
        pendingList.appendChild(newTodo);
        newText.value = "";
    } else {
        alert("Please provide a task to add");
    }
});

newText.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
        newBtn.click();
    }
});

const move = (element, destination, convertTo) => {
    if (element.localName == "li") {
        if (convertTo == "completed") {
            element.classList.add(
                "text-black-500",
                "line-through",
                "hover:bg-green-500",
                "hover:text-white"
            );
            element.classList.remove("hover:bg-red-500");
        } else {
            element.classList.remove(
                "text-red-500",
                "line-through",
                "hover:bg-green-500",
                "hover:text-black"
            );
            element.classList.add("hover:bg-red-500");
        }
        destination.appendChild(element);
    }
}

pendingList.addEventListener("click", event => {
    move(event.target, completedList, 'completed');
});

completedList.addEventListener("click", event => {
    move(event.target, pendingList, 'pendings');
});