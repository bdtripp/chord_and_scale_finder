Results.prototype.build = function(content) {
    for(var i = 0; i < this.musicalElements.length; i++) {
        this.musicalElements[i].build(content);
    }
}

Results.prototype.add = function(musicalElement) {
    this.musicalElements.push(musicalElement)
}

function Results() {
    this.musicalElements = [];
}