    // zmienne

    const result = document.querySelector(".result");
    const oneBtn = document.querySelector(".one");
    const twoBtn = document.querySelector(".two");
    const threeBtn = document.querySelector(".three");
    const fourBtn = document.querySelector(".four");
    const fiveBtn = document.querySelector(".five");
    const sixBtn = document.querySelector(".six");
    const sevenBtn = document.querySelector(".seven");
    const eightBtn = document.querySelector(".eight");
    const nineBtn = document.querySelector(".nine");
    const zeroBtn = document.querySelector(".zero");
    const divideBtn = document.querySelector(".divide");
    const multiplyBtn = document.querySelector(".multiply");
    const minusBtn = document.querySelector(".minus");
    const plusBtn = document.querySelector(".plus");
    const equalBtn = document.querySelector(".equal");
    const c = document.querySelector(".c");
    const resultArray = [];
    let operator


    // number btn


    oneBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "1";
    })
    twoBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "2";
    })
    threeBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "3";
    })
    fourBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "4";
    })
    fiveBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "5";
    })
    sixBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "6";
    })
    sevenBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "7";
    })
    eightBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "8";
    })
    nineBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "9";
    })
    zeroBtn.addEventListener('click', function () {
        result.textContent = result.textContent + "0";
    })


    c.addEventListener('click', function () {
        result.textContent = "";


    })
    plusBtn.addEventListener('click', function () {
        resultArray.unshift(Number(result.textContent));
        operator = "plus";
        result.textContent = "";
    })

    minusBtn.addEventListener('click', function () {
        resultArray.unshift(Number(result.textContent));
        operator = "minus";
        result.textContent = "";
    })

    multiplyBtn.addEventListener('click', function () {
        resultArray.unshift(Number(result.textContent));
        operator = "multiply";
        result.textContent = "";
    })

    divideBtn.addEventListener('click', function () {
        resultArray.unshift(Number(result.textContent));
        operator = "divide";
        result.textContent = "";
    })
    equalBtn.addEventListener('click', function () {
        if (operator === "plus") {
            resultArray.push(Number(result.textContent));
            result.textContent = resultArray[0] + resultArray[1];
            resultArray.splice(0);
        }
        if (operator === "minus") {
            resultArray.push(Number(result.textContent));
            result.textContent = resultArray[0] - resultArray[1];
            resultArray.splice(0);
        }
        if (operator === "multiply") {
            resultArray.push(Number(result.textContent));
            result.textContent = resultArray[0] * resultArray[1];
            resultArray.splice(0);
        }
        if (operator === "divide") {
            resultArray.push(Number(result.textContent));
            result.textContent = resultArray[0] / resultArray[1];
            resultArray.splice(0);
        }

    })