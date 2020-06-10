View.prototype.createResults = function(result) {
    for(var i = 0; i < result.length; i++) {
        this.results.add(MusicalElement.create(result[i]));
    }
}

View.prototype.show = function() {
    var content = document.getElementById("content");
    
    this.results.build(content);
}

function View() {
    this.results = new Results();
}