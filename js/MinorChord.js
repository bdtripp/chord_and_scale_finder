MinorChord.prototype = new Chord();

MinorChord.prototype.build = function(content) {
    Chord.prototype.build.call(this, content);
    this.third = this.third - 1;
    Chord.prototype.stackNotes.call(this);
       
    this.reduceOctave();
    this.createNoteNames();
    this.displayElement(content);
    
    //test
    var mc = new MajorChord();
    mc.properties = "test";
}

function MinorChord(properties) {
    this.properties = properties;
}