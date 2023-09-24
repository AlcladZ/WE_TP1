function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

function Rectangle(x, y, largeur, hauteur, epaisseur, couleur) {
    this.x = x;
    this.y = y;
    this.largeur = largeur;
    this.hauteur = hauteur;
    Forme.call(this, couleur, epaisseur);
};
Rectangle.prototype = new Forme();

function Ligne(xA, yA, xB, yB, epaisseur, couleur) {
    this.xA = xA;
    this.yA = yA;
    this.xB = xB;
    this.yB = yB;
    Forme.call(this, couleur, epaisseur);
};
Ligne.prototype = new Forme();
//4 classes ?