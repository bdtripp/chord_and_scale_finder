DropDownMaker.prototype.createDropDown = function(name, options, parent) {
    var dropDownContainer = document.createElement("div")
    var dropDown = document.createElement("select");
    var label = document.createElement("label");
    
    label.innerHTML = name + ": ";
    dropDown.setAttribute("id", name.toLocaleLowerCase());
    
    for(var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = options[i];
        option.value = options[i];     
        dropDown.appendChild(option);
    }
    
    dropDownContainer.appendChild(label);
    dropDownContainer.appendChild(dropDown);
    
    parent.appendChild(dropDownContainer);
    
    return dropDown;
}

function DropDownMaker() {

}