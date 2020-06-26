DropDownMaker.createDropDown = function(label, options, form) {
    var dropDownContainer = document.createElement("div")
    var dropDown = document.createElement("select");
    var label = document.createElement("label");
    
    label.innerHTML = label;
    
    for(var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = options[i];
        option.value = options[i];     
        dropDown.appendChild(option);
    }
    
    dropDownContainer.appendChild(label);
    dropDownContainer.appendChild(dropDown);
    
    form.appendChild(dropDownContainer);
}

function DropDownMaker() {

}