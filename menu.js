const library = {
      "Home": "index",
      "Cryptography": "cryptography",
};

Object.keys(library).forEach(function (key) {
      const pageLink = document.createElement("a");
      pageLink.setAttribute("href", library[key] + ".html");
      pageLink.setAttribute("class", "pageLink");
      pageLink.setAttribute("id", library[key]);
      pageLink.appendChild(document.createTextNode(key))
      const menuDiv = document.getElementById("menuDiv");
      menuDiv.appendChild(pageLink);
});
