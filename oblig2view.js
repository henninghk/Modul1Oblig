
//view

function show() {
    let disabled = selectedId == null ? 'disabled' : '';
    let selectedShow = selectedId == null ? 'none selected' : selectedId;
    let svgInnerHtml = '';
    let errorMessage = error == true ? 'unknown!' : '';
  
    for (let i = 0; i < numbers.length; i++) {
      svgInnerHtml += createBar(numbers[i], i + 1);
      let barNo = i + 1;
      let stroke = '0';
    if(barNo == selectedId){
      stroke =  "black";}
      svgInnerHtml += createBar(numbers[i], i + 1, stroke);
    }
  
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="00 00 80 60">${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${selectedShow}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <br /><button onclick="addBar()">Add new bar her</button><br />
        <button ${disabled} onclick="changeBar()">Change bar her</button><br />
        <button ${disabled} onclick="deleteBar(inputValue)">Remove bar her</button>
        <div>${errorMessage}</div>
        `;
  
  }function createBar(number, barNo, stroke) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 6;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    let selectable = selectedId == barNo == true ? 'class="selected"' : '';
    return `<rect ${selectable} onclick="selectBar(this.id)" id="${barNo}" 
    stroke=${stroke} width="${width}" height="${height}"
    x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    let minHue = 240, maxHue = 0;
    let curPercent = (val - min) / (max - min);
    let colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;}