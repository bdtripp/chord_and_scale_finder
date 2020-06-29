AugmentedChord.prototype = new Chord();

AugmentedChord.prototype.build = function(content) {
    Chord.prototype.build.call(this, content);
    this.fifth = this.fifth + 1;
    Chord.prototype.stackNotes.call(this);
       
    this.reduceOctave();
    this.createNoteNames();
    this.displayElement(content);
}

function AugmentedChord(properties) {
    this.properties = properties;
}