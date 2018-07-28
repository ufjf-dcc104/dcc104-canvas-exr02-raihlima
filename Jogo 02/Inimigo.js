function Inimigo(ponto){
  this.x = Math.floor(Math.random() * 700);
  this.y = 10;
  this.vx = (Math.random() * 2-1)* 100;
  this.vy = 90;
  this.width = 50;
  this.height = 50;
  this.color = "red";
  this.energia = 2+ponto;
  this.cadencia = 2;
  this.nave = new Image();
  this.nave.src = "Imagem/inimigo.png";

}

Inimigo.prototype.desenhar = function (ctx) {
  //ctx.fillStyle = this.color;
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  //ctx.strokeStyle = "white";
    ctx.drawImage(this.nave,0,0,150,150,this.x-4,this.y-10,this.width+8,this.height+20);

  //tiro
  if(this.cadencia<2){
    this.cadencia+=0.02;
  }
};

Inimigo.prototype.mover = function (dt) {
  this.x = this.x+this.vx *dt;
  this.y = this.y+this.vy *dt;
  if(this.x+this.height>700){
    this.x= 700 - this.height - 1;
    this.vx = this.vx *(-1);
  } if(this.x<0){
    this.x=1;
    this.vx = this.vx *(-1);
  }
};

Inimigo.prototype.verificaSaida = function () {
  if(this.y>500){
    return true;
  } else {
    return false;
  }
};

Inimigo.prototype.verificaMorte = function () {
  if(this.energia<=0){
    return true;
  } else {
    return false;
  }
};
