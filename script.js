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
    // function btn

    c.addEventListener('click', function () {
        result.textContent = "";


    })
    plusBtn.addEventListener('click', function () {
        let firstResult = result.textContent;
        result.textContent = "";
        equalBtn.addEventListener('click', function () {
            let newResult = result.textContent;
            let resultPlus = 0
            resultPlus = parseInt(firstResult) + parseInt(newResult);
            result.textContent = resultPlus;
            console.log(firstResult, newResult, resultPlus)


        })
    })

    minusBtn.addEventListener('click', function () {
        firstResult = result.textContent;
        result.textContent = "";
        equalBtn.addEventListener('click', function () {
            newResult = result.textContent;
            resultPlus = parseInt(firstResult) - parseInt(newResult);
            result.textContent = resultPlus;
            // firstResult = 0;

        })
    })

    multiplyBtn.addEventListener('click', function () {
        firstResult = result.textContent;
        result.textContent = "";
        equalBtn.addEventListener('click', function () {
            newResult = result.textContent;
            resultPlus = parseInt(firstResult) * parseInt(newResult);
            result.textContent = resultPlus;
            // firstResult = 0;

        })
    })

    divideBtn.addEventListener('click', function () {
        firstResult = result.textContent;
        result.textContent = "";
        equalBtn.addEventListener('click', function () {
            newResult = result.textContent;
            resultPlus = parseInt(firstResult) / parseInt(newResult);
            result.textContent = resultPlus;
            // firstResult = 0;

        })
    })