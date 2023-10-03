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

function Rectangle(xA, yA, xB, yB, epaisseur, couleur) {
    this.xA = xA;
    this.yA = yA;
    this.xB = xB;
    this.yB = yB;
    Forme.call(this, couleur, epaisseur);
};
Rectangle.prototype = new Forme();
Rectangle.prototype.getInitX = function() {
    return this.xA;
};
Rectangle.prototype.getInitY = function() {
    return this.yA;
};
Rectangle.prototype.getFinalX = function() {
    return this.xB;
};
Rectangle.prototype.getFinalY = function() {
    return this.yB;
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