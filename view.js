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
  