function Drawing() {
    this.formes = new Array();
};
Drawing.prototype.getForms = function() {
    return this.formes;
}

function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

function Rectangle(x, y, hauteur, largeur, epaisseur, couleur) {
    this.x = x;
    this.y = y;
    this.largeur = largeur;
    this.hauteur = hauteur;
    Forme.call(this, couleur, epaisseur);
};
Rectangle.prototype = new Forme();
Rectangle.prototype.getInitX = function() {
    return this.x;
};
Rectangle.prototype.getInitY = function() {
    return this.y;
};
Rectangle.prototype.getFinalX = function() {
    return this.x + this.largeur;
};
Rectangle.prototype.getFinalY = function() {
    return this.y + this.hauteur;
};

function Ligne(xA, yA, xB, yB, epaisseur, couleur) {
    this.xA = xA;
    this.yA = yA;
    this.xB = xB;
    this.yB = yB;
    Forme.call(this, couleur, epaisseur);
};
Ligne.prototype = new Forme();
Ligne.prototype.getInitX = function() {
    return this.xA;
}
Ligne.prototype.getInitY = function() {
    return this.yA;
}
Ligne.prototype.getFinalX = function() {
    return this.xB;
}
Ligne.prototype.getFinalY = function() {
    return this.yB;
}