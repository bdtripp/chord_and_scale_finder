MinorChord.prototype = new Chord();

MinorChord.prototype.build = function(content) {
    Chord.prototype.build.call(this, content);
    this.notes[1] = this.notes[1] - 1;
       
    this.reduceOctave();
    this.createNoteNames();
    this.displayElement(content);
}

function MinorChord(properties) {
    this.properties = properties;
}