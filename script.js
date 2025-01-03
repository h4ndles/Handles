function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function loadSymbols() {
  for (let start = 44032; start < 55203; start++) {
    var entity = "&#" + start;
    var hex = decodeHtml(entity).codePointAt(0).toString(16);
    var result = "U+" + "0000".substring(0, 4 - hex.length) + hex.toUpperCase();
    var div = document.createElement("div");
    document.getElementById("clist").appendChild(div);
    div.className = "char";
    div.id = "char" + [start];
    div.setAttribute("onclick","location.href='https://www.youtube.com/@" + decodeHtml(entity) + "'");
    div.innerHTML =
      '<h1>' + entity + '</h1><p>' + result + '</p>';
  }
}

loadSymbols();
