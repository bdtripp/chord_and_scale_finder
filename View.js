View.prototype.createResults = function(elmtProps) {
    for(var i = 0; i < elmtProps.length; i++) {
        this.results.add(MusicalElement.create(elmtProps[i]));
    }
}

View.prototype.show = function() {
    var content = document.getElementById("content");
    var form = document.getElementById("form");
    
    this.form.createFields(form);
    this.results.build(content);
}

function View() {
    this.form = new Form();
    this.results = new Results();
}