function checkLunch() {
    let inputBox = document.getElementById("inputBox");
    let messageElement = document.getElementById("message");
    
    let items = inputBox.value.split(',')
        .map(item => item.trim())  // Remove spaces around each item
        .filter(item => item !== "");  // Ignore empty items

    let itemCount = items.length;

    let message = "";
    if (itemCount === 0) {
        message = "Please enter data first";
    } else if (itemCount <= 3) {
        message = "Enjoy!";
    } else {
        message = "Too much!";
    }

    messageElement.textContent = message;
    updateMessageStyle(message);
}

function updateMessageStyle(message) {
    let messageElement = document.getElementById("message");
    let inputElement = document.getElementById("inputBox");

    if (message === "Enjoy!" || message === "Too much!") {
        messageElement.style.color = "green"; 
        inputElement.style.borderColor = "green"; 
    } else if (message === "Please enter data first") {
        messageElement.style.color = "red";  
        inputElement.style.borderColor = "red";  
    } else {
        messageElement.style.color = "black";  
        inputElement.style.borderColor = "black";  
    }
}