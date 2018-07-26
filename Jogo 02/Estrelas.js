function Estrela (){
  this.x = Math.random()*700;
  this.y = Math.random()*500;
  this.h = this.w = Math.trunc(Math.random()*3 +1);
  this.vy = Math.random()*40;
}

Estrela.prototype.desenhar = function (ctx) {
  ctx.fillStyle="white";
  ctx.fillRect(this.x, this.y, this.h, this.h);

};

Estrela.prototype.mover = function (dt) {
  this.y = this.y + this.vy * dt;
};

Estrela.prototype.resetar = function (){
  if(this.y>500){
    this.y=0;
  }
}
