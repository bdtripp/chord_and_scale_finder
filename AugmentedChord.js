AugmentedChord.prototype = new Chord();

AugmentedChord.prototype.build = function(content) {
    Chord.prototype.build.call(this, content);
    this.notes[2] = this.notes[2] + 1;
       
    this.createNoteNames();
    this.displayElement(content);
}

function AugmentedChord(properties) {
    this.properties = properties;
}