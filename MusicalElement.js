MusicalElement.create = function(properties) {
    return new properties.type(properties);
}

MusicalElement.prototype.reduceOctave = function() {
    for (var i = 0; i < this.notes.length; i++) {
        if(this.notes[i] >= NUM_PITCHES) {
            this.notes[i] = this.notes[i] - NUM_PITCHES;
        }
    }
    return this.notes;
}

MusicalElement.prototype.displayElement = function(content) {
    this.noteString = "";
    
    for(var i = 0; i < this.noteNames.length; i++) {
        if (i === this.noteNames.length - 1) {
            this.noteString += this.noteNames[i];
        } else {
            this.noteString += this.noteNames[i] + ", ";
        }
    }
    
    var displayItem = document.createElement("p");
    displayItem.innerHTML = this.labelString;
    noteSpan = document.createElement("span");
    noteSpan.innerHTML = this.noteString;
    noteSpan.setAttribute("class", "noteDisplay")
    displayItem.appendChild(noteSpan);
    content.appendChild(displayItem);
}

MusicalElement.prototype.createNoteNames = function() {
    this.noteNames = [];
    
    for(var i = 0; i < this.notes.length; i++) {
        this.noteNames.push(PITCHES[this.notes[i]]);
    }
}

function MusicalElement(properties) {
    this.properties = properties;
}