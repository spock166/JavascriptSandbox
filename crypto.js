const inputText = document.getElementById("inputText");
inputText.addEventListener("keyup", encodeValue);

function encodeValue(event) {
      const inputValue = event.target.value;
      var encodedValue = inputValue;

      document.getElementById("outputText").innerText = encodedValue;
}