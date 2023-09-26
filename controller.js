
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		console.log("CLICK");
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle();
		} else {
			this.currentShape = new Ligne();
		}
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		console.log("DRAG");
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle(dnd.xInit, yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
		} else {
			this.currentShape = new Ligne(dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
		}
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		console.log("DROP");
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle(dnd.xInit, yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
		} else {
			this.currentShape = new Ligne(dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
		}
	}.bind(this);
};


