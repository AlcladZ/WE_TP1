
// La création d'un Dnd requiert un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.canvas = canvas;
  this.interactor = interactor;

  this.xInit = 0;
  this.yInit = 0;
  this.xFinal = 0;
  this.yFinal = 0;

  this.presse = false;
	// Developper les 3 fonctions gérant les événements
  this.pression = function(evt) {
    this.xInit = getMousePosition(this.canvas, evt).x;
    this.yInit = getMousePosition(this.canvas, evt).y;
    this.xFinal = getMousePosition(this.canvas, evt).x;
    this.yFinal = getMousePosition(this.canvas, evt).y;
    this.presse = true;
    this.interactor.onInteractionStart(this);
  }.bind(this)
  
  this.deplacement = function(evt) {
    if (this.presse) {
      this.xFinal = getMousePosition(this.canvas, evt).x;
      this.yFinal = getMousePosition(this.canvas, evt).y;
      this.interactor.onInteractionUpdate(this);
    }
  }.bind(this)
  
  this.relachement = function(evt) {
    if (this.presse) {
      this.interactor.onInteractionEnd(this);
    }
    this.presse = false;
  }.bind(this)

	// Associer les fonctions précédentes aux évènements du canvas.
  this.canvas.addEventListener('mousedown', this.pression, false);
  this.canvas.addEventListener("mousemove", this.deplacement, false);
  this.canvas.addEventListener("mouseup", this.relachement, false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



