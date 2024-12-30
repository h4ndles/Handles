function loadSymbols() {
  for (let start = 44032; start < 44132; start++) {
    var Title = $('<textarea />').html("&#" + start).text();
    var hex = Title.codePointAt(0).toString(16);
    var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
    document.getElementById("clist").appendChild(div);
    div.className = "char";
    div.id = "char" + [start];
    div.innerHTML =
      '<h1>&#' + [start] + '</h1><p>' + result + '</p>';
  }
}

loadSymbols();
