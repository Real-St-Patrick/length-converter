let input = document.querySelector("#input");
let result = document.querySelector("#result");
let inputType = document.querySelector("#inputType");
let resultType = document.querySelector("#resultType");
let inputTypeValue, resultTypeValue;

resultType.addEventListener("change", myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;


    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        //from meter to kilometer//
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        //from meter to centimeter//
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        //meter to meter//
        result.value = input.value
    }


    if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        //from kilometer to meter//
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        //kilometer to centimeter//
        result.value = Number(input.value) * 10000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
        //kilometer to kilometer//
        result.value = input.value
    }


    if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        //from centimeter to kilometer//
        result.value = Number(input.value) * 0.00001;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
        //centimeter to meter//
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
        //centimeter to centimeter//
        result.value = input.value
    }
}
