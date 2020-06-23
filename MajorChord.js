MajorChord.prototype = new Chord();

MajorChord.prototype.build = function(content) {
    Chord.prototype.build.call(this, content);
    
    this.reduceOctave();
    this.createNoteNames();
    this.displayElement(content);
}

function MajorChord(properties) {
    this.properties = properties;
}