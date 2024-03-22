function Checkbox() {
    const textArea = document.getElementById("text_area");
    if (textArea.checked) {
      Create_textfield();
    } else {
      generateMatrix();
    }
  }

function Create_textfield(){
    var text=""
    text += "<p>Use Tab to separate elements</p>"
    text += "<textarea id='textfield' min-height='200px' placeholder=''></textarea><br>"
    text += "<button onclick='generateListfromText()' id='generation'>Generate Code</button><br>"
    text += "<input type='text' id='output'>"
    document.getElementById("matrix").innerHTML = ""
    document.getElementById("matrix").innerHTML = text
    document.getElementById("output").style.width = "170px"
}

function generateMatrix() {
    var rows = parseInt(document.getElementById("rows").value)
    var cols = parseInt(document.getElementById("columns").value)
    var text = ""
    for (let i = 1; i <= rows; i++){
        for (let j = 1; j <= cols; j++){
            text += "<input type='text' data-id=" + i.toString() + j.toString() + " value = ' ' >"
        }
        text += "<br>"
    }
    text += "<button onclick='generateListfromTable()' id='generation'>Generate Code</button><br>"
    text += "<input type='text' id='output'>"
    if ((0 < rows && rows < 15) && (1 < cols && cols < 15)){
        document.getElementById("matrix").innerHTML = ""
        document.getElementById("matrix").innerHTML = text
        document.getElementById("output").style.width = (70 * cols - 20).toString() + "px"
    }
  }

function generateListfromText() {
    pass
}

function generateListfromTable() {
    var state = []
    var rows = parseInt(document.getElementById("rows").value)
    var cols = parseInt(document.getElementById("columns").value)
    var bracket_type = ""
    for (let i = 1; i <= rows; i++){
        let temp = []
        for (let j = 1; j <= cols; j++){
            input = document.querySelector("[data-id='" + i.toString() + j.toString() + "']").value
            temp.push(input)
        }
        state.push(temp)
    }
    var bracket = document.getElementById("bracket_type").value
    if (bracket == "option2") bracket_type = "p"
    else if (bracket == "option3") bracket_type = "b"
    else if (bracket == "option4") bracket_type = "B"
    else if (bracket == "option5") bracket_type = "v"
    else if (bracket == "option6") bracket_type = "V"
    latex_code = generateLatex(state, bracket_type)
    document.getElementById("output").value = latex_code
}

function generateLatex(matrix, parentheses) {
    let latexMatrix = "\\begin{" + parentheses + "matrix}\n";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j < matrix[i].length - 1) {
                latexMatrix += matrix[i][j] + " & ";
            } else {
                latexMatrix += matrix[i][j];
            }
        }
        if (i < matrix.length - 1) {
            latexMatrix += "\\\\ \n";
        } else {
            latexMatrix += "\n";
        }
    }
    latexMatrix += "\\end{" + parentheses + "matrix}\n";
    return latexMatrix;
}

