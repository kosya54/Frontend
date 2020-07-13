function ready() {
    function addNewListItem(textData) {
        var listItem = document.createElement("li");
        listItem.textContent = textData;

        var editButton = document.createElement("input");
        editButton.setAttribute("type", "button");
        editButton.setAttribute("name", "editListItem");
        editButton.setAttribute("value", "Редактировать");
        editButton.addEventListener("click", function (event) {
            editListItem(listItem);
        });

        var deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("name", "deleteListItem");
        deleteButton.setAttribute("value", "Удалить");
        deleteButton.addEventListener("click", function (event) {
            clearListItem(listItem);
        });

        var buttonWrapper = document.createElement("div");
        buttonWrapper.appendChild(editButton);
        buttonWrapper.appendChild(deleteButton);

        listItem.appendChild(buttonWrapper);

        document.querySelector('.list-container > ol').appendChild(listItem);
    }

    function editListItem(listItem) {
        var textData = listItem.textContent;

        listItem.innerHTML = "";

        var editInput = document.createElement("input");
        editInput.setAttribute("type", "text");
        editInput.setAttribute("name", "editListItem");
        editInput.setAttribute("value", textData);
        editInput.className = "big-input";

        var saveButton = document.createElement("input");
        saveButton.setAttribute("type", "button");
        saveButton.setAttribute("name", "saveRecord");
        saveButton.setAttribute("value", "Сохранить");
        saveButton.addEventListener("click", function (event) {
            addNewListItem(editInput.value);
            clearListItem(listItem);
        });
        
        listItem.appendChild(editInput);
        listItem.appendChild(saveButton);
    }

    function clearListItem(listItem) {
        listItem.parentNode.removeChild(listItem);
    }

    document.querySelector('input[name="addRecord"]').addEventListener("click", function (event) {
        var listInput = document.querySelector('input[name="newRecord"]');
        
        if (listInput.value === "") {
            alert("Введите данные");

            return;
        }

        addNewListItem(listInput.value);
    });
}

document.addEventListener("DOMContentLoaded", ready);