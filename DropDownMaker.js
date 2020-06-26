DropDownMaker.prototype.createDropDown = function(name, options, form) {
    var dropDownContainer = document.createElement("div")
    var dropDown = document.createElement("select");
    var label = document.createElement("label");
    
    label.innerHTML = name + ": ";
    dropDown.setAttribute("id", name);
    
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