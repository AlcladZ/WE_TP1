function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

function Rectangle(couleur, epaisseur, pointHautGauche, largeur, hauteur) {
    this.pointHautGauche = pointHautGauche;
    this.largeur = largeur;
    this.hauteur = hauteur;
    Forme.call(this, couleur, epaisseur);
};

function Ligne(couleur, epaisseur, pointA, pointB) {
    this.pointA = pointA;
    this.pointB = pointB;
    Forme.call(this, couleur, epaisseur);
};

function Point(x, y) {
    this.x = x;
    this.y = y;
};
