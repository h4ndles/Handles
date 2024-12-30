function loadSymbols() {
  for (let start = 44032; start < 44132; start++) {
    var div = document.createElement("div");
    document.getElementById("clist").appendChild(div);
    div.className = "char";
    div.id = "char" + [start];
    div.innerHTML =
      '<h1>&#' + [start] + '</h1>';
  }
}

loadSymbols();
