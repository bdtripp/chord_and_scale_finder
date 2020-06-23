View.prototype.createResults = function(elmtProps) {
    for(var i = 0; i < elmtProps.length; i++) {
        this.results.add(MusicalElement.create(elmtProps[i]));
    }
}

View.prototype.show = function() {
    var content = document.getElementById("content");
    
    this.results.build(content);
}

function View() {
    this.results = new Results();
}