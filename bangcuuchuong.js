let m= "";
for (let i = 1; i < 10; i++) {
    m = m + "<tr>"
    for (let j = 2; j < 10; j++) {
      m = m + "<td>" + j + "*" + i + "</td>";
    }
    m = m + "</tr>"
}
document.getElementById('result').innerHTML = m;