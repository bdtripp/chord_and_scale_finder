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

Chord.prototype.build = function(content) {
    this.notes = [];
    var nameLength = this.properties.type.name.length;
    this.displayString = PITCHES[this.properties.root] +
        " " + this.properties.type.name.substring(0, nameLength - 5).toLowerCase() + " " +
        this.properties.type.name.substring(nameLength - 5, nameLength).toLowerCase() +
        " (inversion: " + this.properties.inversion + "): ";
    
    this.notes.push(this.properties.root);
    this.notes.push(this.properties.root + 4);
    this.notes.push(this.properties.root + 7);
    
    if(this.properties.quality !== "root") {
        this.invert(this.notes);
    }
}

function Chord(properties) {
    this.properties = properties;
}