let inputArray = document.querySelectorAll('.input');

GetElementById = (id) => {
    return document.getElementById(id)
}

FilterNaN = (int) => {
    int = parseFloat(int)

    if(isNaN(int)){
        return 0;
    }

    return int;
}

CalcIp = () => {
    let Productivity = FilterNaN(GetElementById("Productivity").value);
    let Factories = FilterNaN(GetElementById("Factories").value);
    let Crafting = FilterNaN(GetElementById("Crafting").value);
    
    let Recipe = FilterNaN(GetElementById("Recipe").value);
    
    let ResultSec = GetElementById("ResultSec");
    let ResultMin = GetElementById("ResultMin");
    
    let calcSec = FilterNaN((Productivity * Factories * Crafting) / Recipe );
    
    ResultSec.value = calcSec;
    ResultMin.value = calcSec * 60;
    
}


inputArray.forEach(function (e) {
    e.addEventListener('input', CalcIp)
})
