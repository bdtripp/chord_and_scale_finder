Form.prototype.createFields = function(form) {
//    var qualityOptions;
//    
//    for(var i = 0; i < MUSICAL_ELMNT_QUALITIES; i++) {
//        qualityOptions[i].text = MUSICAL_ELMNT_QUALITIES[i];
//        
//    }
    
    this.dropDownMaker.createDropDown("Root", PITCHES, form);
    this.dropDownMaker.createDropDown("Quality", MUSICAL_ELMNT_QUALITIES, form);
    this.dropDownMaker.createDropDown("Type", MUSICAL_ELMNT_TYPES, form);
    this.dropDownMaker.createDropDown("Inversion", INVERSIONS, form);
    
    var submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Submit";
    submitBtn.addEventListener("click", this.submit);
    form.appendChild(submitBtn);
}

Form.prototype.submit = function() {
    var rootDD = document.getElementById("Root");
    var qualityDD = document.getElementById("Quality");
    var typeDD = document.getElementById("Type");
    var inversionDD = document.getElementById("Inversion");
    
    var rootSelected = rootDD.selectedIndex;
    var qualitySelected = qualityDD.options[qualityDD.selectedIndex].value;
    var typeSelected = typeDD.options[typeDD.selectedIndex].value;
    var inversionSelected = inversionDD.options[inversionDD.selectedIndex].value;
    
    var musicalElementType = qualitySelected.toUpperCase() + "_" + typeSelected.toUpperCase();
    
    var selection = new Selection(MusicalElement.MusicalElementType[musicalElementType], rootSelected, inversionSelected.toLowerCase());
    
    view.createResults(selection);
    view.showResults();
}

function Form() {
    this.dropDownMaker = new DropDownMaker();
}