function isValidHexColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
}

const submitBtn = document.querySelector("input.submit");
submitBtn.addEventListener("click",onSubmit);

function onSubmit(event){
    const colorElem = document.querySelector("input.color");
    const colorValue = colorElem.value;
    if (isValidHexColor(colorValue)){
        document.body.style.backgroundColor = colorValue;
    }
    else{
        alert(`"${colorValue}" is not a valid color`);
    }
}