function addToListItem(listItem, textData) {
    listItem.text(textData);

    $("<div></div>")
        .append($("<input>")
            .attr({type: "button", name: "editButton", value: "Редактировать"})
            .click(function () {
                editListItem(listItem);
            }))
        .append($("<input>")
            .attr({type: "button", name: "deleteButton", value: "Удалить"})
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

    $("<input>")
        .attr({type: "button", name: "saveButton", value: "Сохранить"})
        .click(function () {
            addToListItem(listItem, editInput.val());
        })
        .appendTo(listItem);
}

$(document).ready(function () {
    var list = $("<ol></ol>").appendTo($(".output-container"));

    $("input[name='addButton']").click(function () {
        var input = $("input[name='newRecord']");

        if (input.val() === "") {
            alert("Заполните поле");

            return;
        }

        var listItem = $("<li></li>");
        addToListItem(listItem, input.val());

        list.append(listItem);

        input.val("");
    });
});
