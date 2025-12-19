MinorScale.prototype = new Scale();

MinorScale.prototype.build = function(content) {
    Scale.prototype.build.call(this, content);
    
    this.notes[2] = this.notes[2] - 1;
    this.notes[5] = this.notes[5] - 1;
    this.notes[6] = this.notes[6] - 1;
    
    this.reduceOctave();
    this.createNoteNames();
    this.displayElement(content);
}

function MinorScale(properties) {
    this.properties = properties;
}