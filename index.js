const exampleEl = document.createElement("p");
exampleEl.setAttribute("id", "nya");
const exampleNode = document.createTextNode("Hello World!");
exampleEl.appendChild(exampleNode);

const exampleDiv = document.getElementById("mainDiv");
exampleDiv.append(exampleEl);