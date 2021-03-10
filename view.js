// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.epaisseur;
    ctx.rect(this.pointXinit, this.pointYinit, this.largeur, this.hauteur);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.epaisseur;
    ctx.moveTo(this.pointXinit, this.pointYinit);
    ctx.lineTo(this.pointXfinal, this.pointYfinal);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };

  var listeforme = '';
  Drawing.prototype.updateShapeList = function(forme){
    var shapeList = document.getElementById('shapeList');
    var boutonsupprimer = '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove-sign"></span></button>';
    if (forme instanceof Rectangle){
        listeforme += boutonsupprimer + parseInt(forme.pointXinit) + ';' + parseInt(forme.pointYinit) + ';' + parseInt(forme.largeur) + ';' + parseInt(forme.hauteur) + '<br>';
    }
    if (forme instanceof Line){
        listeforme += boutonsupprimer + parseInt(forme.pointXinit) + ';' + parseInt(forme.pointYinit) + ';' + parseInt(forme.pointXfinal) + ';' + parseInt(forme.pointYfinal) + '<br>';
    }
    shapeList.innerHTML = listeforme;
};

  