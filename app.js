//referencing button using querySelector
var btnTranslate = document.querySelector("#btn-translate");

//referencing textarea using querySelector
var txtInput = document.querySelector("#txt-input");

//getting the text value from html

var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "Vishal l v";
// console.log(outputTxt);

// console.log(btnTranslate);
btnTranslate.addEventListener("click", () => {
    outputDiv.innerText = "adkskasmdkls " + txtInput.value;
})

// console.log(txtInput);