function loadSymbols() {
  for (let start = 44032; start < 44132; start++) {
    var entity = "&#" + start;
    var hex = entity.codePointAt(0).toString(16);
    var result = "U+" + "0000".substring(0, 4 - hex.length) + hex;
    var div = document.createElement("div");
    document.getElementById("clist").appendChild(div);
    div.className = "char";
    div.id = "char" + [start];
    div.innerHTML =
      '<h1>' + entity + '</h1><p>' + result + '</p>';
  }
}

loadSymbols();
