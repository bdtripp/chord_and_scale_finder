Scale.prototype = new MusicalElement();

Scale.prototype.build = function(content) {
    this.notes = [];
    var nameLength = this.properties.type.name.length;
    this.labelString = PITCHES[this.properties.root] + " " + 
        this.properties.type.name.substring(0, nameLength - 5).toLowerCase() + " " +
        this.properties.type.name.substring(nameLength - 5, nameLength).toLowerCase() + 
        ": ";
    
    this.notes.push(this.properties.root);
    this.notes.push(this.properties.root + 2);
    this.notes.push(this.properties.root + 4);
    this.notes.push(this.properties.root + 5);
    this.notes.push(this.properties.root + 7);
    this.notes.push(this.properties.root + 9);
    this.notes.push(this.properties.root + 11);
}

function Scale(properties) {
    this.properties = properties;
}