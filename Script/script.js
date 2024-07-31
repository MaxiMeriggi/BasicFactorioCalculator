var currentGlobalId = 0;

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


SetEventListener = () => {
    document.querySelectorAll('.input').forEach(function (e) {
        e.addEventListener('input', function(e) {
            let currentId = e.target.id.split('_')[1]
            CalcIps(currentId)
        })
    })

    document.querySelectorAll('#Duplicate').forEach(function(e){
        e.addEventListener('click', DuplicateCalc)
    }) 
    
}


CalcIps = (e) => {
    
    let Productivity = FilterNaN(GetElementById("Productivity_" + e).value);
    //Since Prod min value should always be 1, i check for the value before advancing
    if(Productivity <= 1){
        Productivity = 1
    }

    let Factories = FilterNaN(GetElementById("Factories_" + e).value);
    let Crafting = FilterNaN(GetElementById("Crafting_" + e).value);
    
    let Recipe = FilterNaN(GetElementById("Recipe_" + e).value);
    
    let ResultSec = GetElementById("ResultSec_" + e);
    let ResultMin = GetElementById("ResultMin_" + e);
    
    let calcSec = FilterNaN((Productivity * Factories * Crafting) / Recipe );
    
    ResultSec.value = calcSec;
    ResultMin.value = calcSec * 60;
    
}

DuplicateCalc = () => {
    let element = document.getElementById('Calculate_0');
    let clone = element.cloneNode(true);
    currentGlobalId++;

    clone.querySelectorAll("input").forEach(function(e){
        let oldId = e.id.split('_');
        e.id = oldId[0] + "_" + (currentGlobalId)
        e.value = null
    })

    document.body.append(clone);
    SetEventListener()
    
}

SetEventListener()
