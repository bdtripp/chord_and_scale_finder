MajorScale.prototype = new Scale();

MajorScale.prototype.build = function(content) {
    Scale.prototype.build.call(this, content);
    
    this.reduceOctave(this.notes);
    this.createNoteNames();
    this.displayElement(content);
}

function MajorScale(properties) {
    this.properties = properties;
}