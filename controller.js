
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(DnD) {
		ctx.clearRect( 0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		currLineWidth = document.getElementById('spinnerWidth').value;
		currColour = document.getElementById('colour').value;
		if(document.querySelector('#butRect').checked){
			var rec = new Rectangle(DnD.posXinit - DnD.posXfinal , DnD.posYinit - DnD.posYfinal , DnD.posXinit, DnD.posYinit, currColour, currLineWidth);
		}
		else{
			var line = new Line(DnD.posXinit, DnD.posYinit, 0, 0, currColour, currLineWidth);
		}
	}.bind(this);

	this.onInteractionUpdate = function(DnD) {
		ctx.clearRect( 0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		currLineWidth = document.getElementById('spinnerWidth').value;
		currColour = document.getElementById('colour').value;
		if(document.querySelector('#butRect').checked){
			var rec = new Rectangle(DnD.posXfinal - DnD.posXinit , DnD.posYfinal - DnD.posYinit , DnD.posXinit, DnD.posYinit, currColour, currLineWidth);
			rec.paint(ctx);
		}
		else{
			var line = new Line(DnD.posXinit, DnD.posYinit, DnD.posXfinal, DnD.posYfinal, currColour, currLineWidth);
			line.paint(ctx);
		}
	}.bind(this);

	this.onInteractionEnd = function(DnD) {
		ctx.clearRect( 0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		currLineWidth = document.getElementById('spinnerWidth').value;
		currColour = document.getElementById('colour').value;
		if(document.querySelector('#butRect').checked){
			var rec = new Rectangle(DnD.posXfinal - DnD.posXinit , DnD.posYfinal - DnD.posYinit , DnD.posXinit, DnD.posYinit, currColour, currLineWidth);
			drawing.addForme(rec);
			rec.paint(ctx);
		}
		else{
			var line = new Line(DnD.posXinit, DnD.posYinit , DnD.posXfinal, DnD.posYfinal, currColour, currLineWidth);
			drawing.addForme(line);
			line.paint(ctx);
		}
	}.bind(this);

};


