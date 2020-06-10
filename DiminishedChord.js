DiminishedChord.prototype = new Chord();

DiminishedChord.prototype.build = function(content) {
    Chord.prototype.build.call(this, content);
    this.notes[1] = this.notes[1] - 1;
    this.notes[2] = this.notes[2] - 1;
       
    this.createNoteNames();
    this.displayElement(content);
}

function DiminishedChord(properties) {
    this.properties = properties;
}