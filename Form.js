Form.prototype.replaceDD = function(dropDownName, oldDropDown, options, currentSelection) {
    var oldDDParent = oldDropDown.parentElement;
    oldDDParent.innerHTML = "";
    
    var newDD = this.dropDownMaker.createDropDown(dropDownName, options, oldDDParent);
    
    for(var i =0; i < newDD.options.length; i++) {
        if(newDD.options[i].text === currentSelection) {
            newDD.options[i].selected = true;
        }
    }
    return newDD;
}

Form.prototype.checkType = function() {
    this.typeSelected = this.typeDD.options[this.typeDD.selectedIndex].value;
        
    if(this.typeSelected === "Scale") {
        this.qualityDD = this.replaceDD(
            "Quality", 
            this.qualityDD, 
            SCALE_QUALITIES, 
            this.qualitySelected
        );
        
        this.inversionDD.parentElement.style.display = "none";
    } 
    
    if(this.typeSelected === "Chord") {
        this.qualityDD = this.replaceDD(
            "Quality", 
            this.qualityDD, 
            CHORD_QUALITIES, 
            this.qualitySelected
        );
        
        this.inversionDD.parentElement.style.display = "block";
    } 
    
    this.qualityDD.addEventListener("change", this.setSelectedProp.bind(this, this.qualityDD, "qualitySelected"));
}

Form.prototype.setSelectedProp = function(dropDown, propToSet) {
    var selectedIndex = dropDown.options.selectedIndex;
    this[propToSet] = dropDown.options[selectedIndex].value;
}

Form.prototype.createFields = function(form) {
    this.rootDD = this.dropDownMaker.createDropDown("Root", PITCHES, form);
    this.qualityDD = this.dropDownMaker.createDropDown("Quality", CHORD_QUALITIES, form);
    this.typeDD = this.dropDownMaker.createDropDown("Type", MUSICAL_ELMNT_TYPES, form);
    this.inversionDD = this.dropDownMaker.createDropDown("Inversion", INVERSIONS, form);
    
    this.qualityDD.addEventListener("change", this.setSelectedProp.bind(this, this.qualityDD, "qualitySelected"));
    this.typeDD.addEventListener("change", this.checkType.bind(this));
    
    var submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Submit";
    submitBtn.addEventListener("click", this.submit.bind(this));
    form.appendChild(submitBtn);
}

Form.prototype.submit = function() {
    this.rootSelected = this.rootDD.selectedIndex;
    this.qualitySelected = this.qualityDD.options[this.qualityDD.selectedIndex].value;
    this.typeSelected = this.typeDD.options[this.typeDD.selectedIndex].value;
    this.inversionSelected = this.inversionDD.options[this.inversionDD.selectedIndex].value;
    
    var musicalElementType = this.qualitySelected.toUpperCase() + "_" + this.typeSelected.toUpperCase();
    
    var selection = new Selection(MusicalElement.MusicalElementType[musicalElementType], this.rootSelected, this.inversionSelected.toLowerCase());
    
    view.createResults(selection);
    view.showResults();
}

function Form() {
    this.dropDownMaker = new DropDownMaker();
}