function loadSymbols() {
  for (let start = 44032; start < 55215; start++) {
    var div = document.createElement("div");
    document.getElementById("clist").appendChild(div);
    div.className = "char";
    div.id = "char" + [i];
    div.innerHTML =
      '<h1>&#' + start + '</h1>';
  }
}

loadSymbols();
