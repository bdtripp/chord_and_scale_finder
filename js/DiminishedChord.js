DiminishedChord.prototype = new Chord();

DiminishedChord.prototype.build = function(content) {
    Chord.prototype.build.call(this, content);
    this.third = this.third - 1;
    this.fifth = this.fifth - 1;
    Chord.prototype.stackNotes.call(this);
       
    this.reduceOctave();
    this.createNoteNames();
    this.displayElement(content);
}

function DiminishedChord(properties) {
    this.properties = properties;
}