function calculate() {
  let text = document.getElementById("textInput").value;
  //Om zeker te zijn dat de input vertaald wordt naar een string.
  text = text + "";
  let x = text.replaceAll(/\s/g, "").length;
  let y = text.length;
  document.getElementById(
    "result"
  ).innerHTML = `Aantal karakters: ${y}<br>Aantal karakters zonder spatie: ${x}`;
}
