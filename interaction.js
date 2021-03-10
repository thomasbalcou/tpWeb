
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.posXinit = 0;
  this.posYinit = 0;
  this.posXfinal = 0;
  this.posYfinal = 0;
  this.MousePressed = false;
	// Developper les 3 fonctions gérant les événements
  this.maFctGerantLaPression = function(evt) {
    if (evt.which == 1) {//1=Left button on the mouse
        var pos = getMousePosition(canvas, evt);
        this.posXinit = pos.x;
        this.posYinit = pos.y;
        this.MousePressed = true;

        console.log("Position initial de X:" + this.posXinit);
        console.log("Position initial de Y:" + this.posYinit);

        pencil.onInteractionStart(this);
    }
  }.bind(this);

  this.maFctGerantLeDeplacement = function(evt){

    if (this.MousePressed) {
        var pos = getMousePosition(canvas, evt);
        this.posXfinal = pos.x;
        this.posYfinal = pos.y;

        console.log("Position final de X:" + this.posXfinal);
        console.log("Position final de Y:" + this.posYfinal);

        pencil.onInteractionUpdate(this);
    }

  }.bind(this);

  this.maFctGerantLeRelachement = function(evt){

    if (this.MousePressed) {
        var pos = getMousePosition(canvas, evt);
        this.posXfinal = pos.x;
        this.posYfinal = pos.y;
        this.MousePressed = false;

        console.log("Position final de X:" + this.posXfinal);
        console.log("Position final de Y:" + this.posYfinal);

        pencil.onInteractionEnd(this);
    }

  }.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
  canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



