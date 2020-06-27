View.prototype.createResults = function(selection) {
    this.results.add(MusicalElement.create(selection));
}

View.prototype.showInitial = function() {
    var formElement = document.getElementById("form");
    
    this.form.createFields.bind(this.form, formElement)();
}

View.prototype.showResults = function() {
    var content = document.getElementById("content");

    this.results.build(content);
}

function View() {
    this.form = new Form();
    this.results = new Results();
}