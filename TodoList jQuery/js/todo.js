function addToListItem(listItem, textData) {
    listItem.text(textData);

    $("<div></div>")
        .append($("<button>Редактировать</button>")
                    .attr({type: "button", name: "editButton"})
                    .click(function () {
                        editListItem(listItem);
                    }))
        .append($("<button>Удалить</button>")
                    .attr({type: "button", name: "deleteButton"})
                    .click(function () {
                        listItem.remove();
                    }))
        .appendTo(listItem);
}

function editListItem(listItem) {
    var textData = listItem.text();
    listItem.empty();

    var editInput = $("<input>")
        .attr({type: "text", name: "editRecord", value: textData});
    
    listItem.append(editInput);

    $("<button>Сохранить</button>")
        .attr({type: "button", name: "saveButton"})
        .click(function () {
            addToListItem(listItem, editInput.val());
        })
        .appendTo(listItem);
        
}

$(document).ready(function() {
    $("button[name='addButton']").click(function() {
        var list = $(".output-container > ol");
        var listItem = $("<li></li>");
        var input = $("input[name='newRecord']");

        if (input.val() === "") {
            alert("Заполните поле");

            return;
        }

        addToListItem(listItem, input.val());

        list.append(listItem);

        input.val("");
    });
});
