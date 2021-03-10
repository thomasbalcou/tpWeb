// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.formes = new Array();
    this.addForme = function(forme){
        this.formes.push(forme);
    }
    this.getForms = function() {
        return this.formes;
    }
};

function Forme(couleur, epaisseur){
    this.couleur=couleur;
    this.epaisseur=epaisseur;
};

function Rectangle(largeur,hauteur,pointXinit,pointYinit,couleur,epaisseur){
    Forme.call(this, couleur, epaisseur);
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.pointXinit = pointXinit;
    this.pointYinit = pointYinit;
};

function Line(pointXinit,pointYinit,pointXfinal,pointYfinal,couleur,epaisseur ){
    Forme.call(this, couleur, epaisseur);
    this.pointXinit = pointXinit;
    this.pointYinit = pointYinit;
    this.pointXfinal = pointXfinal;
    this.pointYfinal = pointYfinal;
};
Rectangle.prototype = new Forme();
Line.prototype = new Forme();