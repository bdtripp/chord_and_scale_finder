View.prototype.createResults = function(selection) {
    this.results.add(MusicalElement.create(selection));
}

View.prototype.showInitial = function() {
    var form = document.getElementById("form");
    
    this.form.createFields(form);
}

View.prototype.showResults = function() {
    var content = document.getElementById("content");

    this.results.build(content);
}

function View() {
    this.form = new Form();
    this.results = new Results();
}