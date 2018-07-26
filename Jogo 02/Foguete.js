function Foguete(cor){
  this.x = 350;
  this.y = 450;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 50;
  this.height = 50;
  this.energia = 100;
  this.vida=3;
  this.quantidadeTiro = 1;
  this.nave = new Image();
  this.nave.src = "foguetes.png";

  //Seleção de color
  if(cor==0){
    this.color = "green";
    this.corOriginal=this.color;
  } else if(cor==1){
    this.color = "wheat";
    this.corOriginal=this.color;
  } else {
    this.color = "Teal";
    this.corOriginal=this.color;
  }
}

Foguete.prototype.getVida = function () {
  return this.vida;
};

Foguete.prototype.getEnergia = function () {
  return this.energia;
};

Foguete.prototype.getVy = function () {
  return this.vy;
};

Foguete.prototype.resetar = function () {
  this.x = Math.floor(Math.random() * 700);
  this.y = 450;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 50;
  this.height = 50;
  this.energia = 100;
};

Foguete.prototype.desenhar = function (ctx) {
  //ctx.fillStyle = this.color;
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  if(this.color == "green"){
    ctx.drawImage(this.nave,0,0,150,150,this.x,this.y,this.width,this.height);
  } else if(this.color == "wheat"){
    ctx.drawImage(this.nave,150,0,150,150,this.x,this.y,this.width,this.height);
  } else if(this.color == "Teal"){
    ctx.drawImage(this.nave,300,0,150,150,this.x,this.y,this.width,this.height);
  }
};


Foguete.prototype.atualizar = function (dt) {
  //this.vy = this.vy * dt;
  this.y = this.y + this.vy * dt;

  this.vx = this.vx + this.ax*dt;
  if(this.x<0){
    this.x=0;
    this.vx=0;
  } else if(this.x>649){
    this.x=649;
        this.vx=0;
  } else {
    this.x = this.x + this.vx * dt;
  }

  if(this.y<30){
    this.y=30;
    this.vy=0;
  }
  if(this.y>450){
    this.y=450;
  }
};

Foguete.prototype.colisao = function (inimigo){
  if(this.y>=inimigo.y && this.y<=(inimigo.y+inimigo.height)){
    if(this.x>=inimigo.x && this.x<=(inimigo.x+inimigo.width)){
      return true;
    }
    return false;
  }
  if(this.y+ this.height>=inimigo.y && this.y + this.height <=(inimigo.y+inimigo.height)){
    if(this.x + this.width>=inimigo.x && this.x + this.width <=(inimigo.x+inimigo.width)){
      return true;
    }
    return false;
  }
  return false;
}
