// Many times an application needs to verify the account by sending a verification code by text message.
// Let's create functionality that enables the user to paste the verification code to the input fields.
// Features:
// 1. The user is allowed to type the values manually. After each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once all inputs all populated.
// Things to think about:
// What happens if the user pastes only 3 digits and there are 6 inputs to fill out.
// Here is an example.
// Things to help you: Google “paste event” to understand how to listen to a paste event.
// Google “clipboardData” to find out how to get the value of a paste event.

const parent = document.querySelector("div.parent");
const submit = parent.nextElementSibling;

let focusedInput = parent.firstElementChild;
focusedInput.addEventListener("input", onInputInput);
focusedInput.focus();

document.addEventListener("paste", pasteSmth);

function onInputInput(value) {
  if (value.data) {
    if (value.data == " ") {
      value.data = "";
      return;
    }
    const curElem = value.srcElement;
    focusedInput = curElem.nextElementSibling;
    if (focusedInput) {
      focusedInput.disabled = false;
      focusedInput.addEventListener("input", onInputInput);
      focusedInput.focus();
    }
  }
  verifyAllChars();
}

function verifyAllChars() {
  let verCode = "";
  for (let i = 0; i < parent.children.length; i++) {
    const elem = parent.children[i];
    if (!elem.value || elem.value == " ") {
      submit.disabled = true;
      return;
    }
    verCode += elem.value;
  }
  submit.disabled = false;
  document.location.reload();
  alert(`Submited "${verCode.toLocaleUpperCase()}"`);
}

function pasteSmth(event) {
  let pastedText = (event.clipboardData || window.clipboardData).getData(
    "text"
  );
  if (pastedText) {
    pastedText = pastedText.trim();
    console.log("Pasted text: ", pastedText);
    let curElem = event.srcElement;
    for(let i=0; i<pastedText.length; i++){
        curElem.value = pastedText[i];
        curElem = curElem.nextElementSibling;
        if (!curElem) break;
    }
  }
  verifyAllChars();
}
