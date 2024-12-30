function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function loadSymbols() {
  for (let start = 44032; start < 55215; start++) {
    var entity = "&#" + start;
    var hex = decodeHtml(entity).codePointAt(0).toString(16);
    var result = "U+" + "0000".substring(0, 4 - hex.length) + hex.toUpperCase();
    var div = document.createElement("div");
    document.getElementById("clist").appendChild(div);
    div.className = "char";
    div.id = "char" + [start];
    div.setAttribute("onclick","location.href='youtube.com/@" + entity + "'");
    div.innerHTML =
      '<h1 onclick="location.href=' + "youtube.com/@" + entity + '>' + entity + '</h1><p>' + result + '</p>';
  }
}

loadSymbols();
