Form.createFields = function(form) {
    this.dropDownMaker.createDropDown("Root: ", PITCHES, form);
    this.dropDownMaker.createDropDown("Quality: ", MUSICAL_ELMNT_QUALITIES, form);
    this.dropDownMaker.createDropDown("Chord/Scale: ", MUSICAL_ELMNT_TYPES, form);
} 

function Form() {
    this.dropDownMaker = new DropDownMaker();
    
}