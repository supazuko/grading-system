
document.addEventListener('DOMContentLoaded', () => {
    let scoreElement = document.getElementById("score-input");
    let button = document.getElementById("score-submit");
    let addButton = document.getElementById("add");
    let removeButton = document.getElementById("remove");
    let newInput = document.querySelector(".newInput");
    let gradeResultElement = document.getElementById("grade-result");
    // let currentScore = 0;
    // var totalGrade = 0;
    // var avgGrade = 0;
    var finalGrades = ["Error! input a score between 1-100", "A", "B", "C", "D", "E", "F",];
    var finalGrade;

    addButton.addEventListener('click', function () {

        var addInput = document.createElement('input');
        // var break = document.createElement('br');
        newInput.appendChild(document.createElement('br'));
    })
    
    removeButton.addEventListener('click', function(){
        
        newInput.appendChild(addInput);
        newInput.removeChild(newInput.lastElementChild);
    })
    
    button.addEventListener('click', function (allGrades) {
        
        var score = scoreElement.value;
        // console.log("Button clicked", "value", score);
        var grade = getGrade(score);
        gradeResultElement.innerHTML = "<h1>" + grade + "</h1>";

    })

    var getGrade = function (avgGrade) {

        if (avgGrade < 0 || avgGrade > 100) {
            finalGrade = finalGrades[0];
        }
        else if (avgGrade >= 80) {
            finalGrade = finalGrades[1];
        } else if (avgGrade >= 70 && avgGrade < 80) {
            finalGrade = finalGrades[2];
        } else if (avgGrade >= 60 && avgGrade < 70) {
            finalGrade = finalGrades[3];
        } else if (avgGrade >= 50 && avgGrade < 60) {
            finalGrade = finalGrades[4];
        } else if (avgGrade >= 40 && avgGrade < 50) {
            finalGrade = finalGrades[5];
        } else {
            finalGrade = finalGrades[6];
        }
        return finalGrade;
    }
})