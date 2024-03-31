// A function that validates if a string is a valid hex color representation
function isValidHexColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
}

// Register event listener for the "Submit" button
const submitBtn = document.querySelector("input.submit");
submitBtn.addEventListener("click",onSubmit);

// Register event listener for the color picker
const pickerBtn = document.querySelector("input.picker");
pickerBtn.addEventListener("input",onPickerChange);

// A function that executes when a user press changes a color in the picker element
function onPickerChange(event){
    const colorPicker = document.querySelector("input.picker");
    const colorValue = colorPicker.value;
    document.body.style.backgroundColor = colorValue;
}

// A function that executes when a user press the "Submit" button
function onSubmit(event){

    // Get a string entered by a user
    const colorElem = document.querySelector("input.color");
    const colorValue = colorElem.value;

    if (isValidHexColor(colorValue)){
        document.body.style.backgroundColor = colorValue;
    }
    else{
        alert(`"${colorValue}" is not a valid color`);
    }
}