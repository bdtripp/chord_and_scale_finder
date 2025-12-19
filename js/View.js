View.prototype.createResults = function(selection) {
    this.results.add(MusicalElement.create(selection));
}

View.prototype.showInitial = function() {
    var formElement = document.getElementById("form");
    this.setBodyHeight();
    
    this.form.createFields.bind(this.form, formElement)();
    window.addEventListener("resize", this.setBodyHeight)
}

View.prototype.showResults = function() {
    var content = document.getElementById("content");

    this.results.build(content);
}

View.prototype.setBodyHeight = function() {
    document.getElementsByTagName("body")[0].style.height = window.innerHeight + "px";
}

//View.prototype.recenter = function() {
//    document.getElementsByTagName("body").style.height = window.innerHeight;
//}

function View() {
    this.form = new Form();
    this.results = new Results();
}