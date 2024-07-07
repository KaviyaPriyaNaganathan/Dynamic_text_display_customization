function addText() {
    var div = document.getElementById("displayContainer");
    var textInput = document.getElementById("textInput");
    var colorPicker = document.getElementById("colorPicker");

    if (textInput.value.trim() !== "") {
        var h1 = document.createElement("h1");
        h1.textContent = textInput.value;
        h1.style.color = colorPicker.value;
        div.append(h1);
        textInput.value = "";
    } else {
        alert("Please enter some text.");
    }
}

function clearText() {
    var div = document.getElementById("displayContainer");
    div.innerHTML = "";
}
