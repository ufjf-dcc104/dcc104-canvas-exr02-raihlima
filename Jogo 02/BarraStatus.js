function BarraStatus (){
  this.x = 0;
  this.y = 0;
  this.width = 700;
  this.height = 30;
  this.color = "gray";
}

BarraStatus.prototype.desenhar = function (ctx, vida,pontoAtual, energia) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";


  //Texto no Menu
  ctx.fillStyle = 'white';
  ctx.font = '14pt Arial';
  ctx.fillText("Vidas: ", 20, 21);
  ctx.fillText(vida, 100, 21);
  ctx.fillText("Pontos: ", 250, 21);
  ctx.fillText(pontoAtual, 380, 21);
  ctx.fillText("Energia: ", 500, 21);
  ctx.fillText(Math.trunc(energia), 610, 21);
};
