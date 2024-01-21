
function primeNum() {
    const numA = document.getElementById("numA");
    const numB = document.getElementById("numB");
    const numAValue = parseInt(numA.value);
    const numBValue = parseInt(numB.value);
    const ansText = document.getElementById("ansText");
    const listNum = document.getElementById("listNum");
    const totalNum = document.getElementById("totalNum");
    const total = document.getElementById("total");
    if (numAValue > numBValue) {
        ansText.innerHTML = "Error Syntax!!!";
    } else {
        let sum = 0;
        for (let i = numAValue; i < numBValue; i++) {
            let flag = 0;
            if (i > 1) {
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        flag = 1;
                        break;
                    }
                }
                if (i > 1 && flag == 0) {
                    console.log(i);
                    ansText.innerHTML = "Các số nguyên tố từ a đến b là ";
                    listNum.innerHTML += i + " ";
                    sum += i;
                }
            }
        }
        console.log(sum);
        total.innerHTML = "Tổng các số nguyên tố: ";
        totalNum.innerHTML += sum;
    }
}




