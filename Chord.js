Chord.prototype = new MusicalElement();

Chord.prototype.invert = function(notes) {
    if(this.properties.inversion === "first") {
        notes.push(notes.shift());
    }
    
    if(this.properties.inversion === "second") {
        notes.push(notes.shift());
        notes.push(notes.shift());
    }
}

Chord.prototype.stackNotes = function() {
    this.notes = [];
    
    this.notes.push(this.root);
    this.notes.push(this.third);
    this.notes.push(this.fifth);
    
    if(this.properties.inversion !== "root") {
        this.invert(this.notes);
    }
}

Chord.prototype.build = function(content) {  
    var nameLength = this.properties.type.name.length;
    this.displayString = PITCHES[this.properties.root] +
        " " + this.properties.type.name.substring(0, nameLength - 5).toLowerCase() + " " +
        this.properties.type.name.substring(nameLength - 5, nameLength).toLowerCase() +
        " (inversion: " + this.properties.inversion + "): ";
    
    this.root = this.properties.root;
    this.third = this.properties.root + 4;
    this.fifth = this.properties.root + 7;
}

function Chord(properties) {
    this.properties = properties;
}