/*
function generateReport() {
    let output = document.querySelector("#output");
    console.log(output);
    let boxes = document.querySelectorAll("thead tr th input");
    console.log(boxes)
    let info = document.querySelectorAll("tbody tr");
    console.log(info.textContent)


    let result = [];

    for (let i = 0; i < info.length; i++) {
        let report = {};
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].checked) {
                report[boxes[j].name] = info[i].children[j].textContent
            }
        }
        result.push(result);
    }
    //output.textContent = JSON.stringify(result)
}

*/


function generateReport() {
    let info = document.querySelectorAll("input");
    let table = document.querySelectorAll("tbody tr");

    let tableArray = new Array(table)[0];

    let output = [];

    for (let i = 0; i < table.length; i++) {
        let emploerInfo = {};

        for (let k = 0; k < info.length; k++) {

            if (info[k].checked === true) {

                let label = info[k].name
                let res = tableArray[i].textContent.split("\n").map(x => x.trim(" ")).filter(x => x !== "")[k];
                emploerInfo[label] = res
            }
        }
        output.push(emploerInfo)
    }
    console.log(output);

    let outputResult = JSON.stringify(output);
    let divOutput = document.getElementById("output");

    divOutput.textContent = outputResult;

}