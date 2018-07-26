function Item (x,y){
  this.x=x;
  this.y=y;
  this.vy=70;
  this.width = 30;
  this.height = 30;
  this.rand = Math.trunc(Math.random()*100);
  this.imagem = new Image();
  this.imagem.src = "itens.png";


  //0 Invencibilidade // 1 ponto //2 dano extra //3 explosao // 4 vida extra
  if(this.rand<25){
    this.color = "blue";
    this.id =0;
  } else if (this.rand>=25 && this.rand<75){
    this.color = "violet";
    this.id =1;
  }
  else if(this.rand>=75 && this.rand<85){
    this.color = "orange";
    this.id =2;
  } else if(this.rand>=85 && this.rand<90) {
    this.color = "white";
    this.id =3;
  } else {
    this.color = "cyan";
    this.id=4;
  }
}

Item.prototype.desenhar = function (ctx) {
  //0 Invencibilidade // 1 ponto //2 dano extra //3 explosao // 4 vida extra
  //ctx.fillStyle = this.color;
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  if(this.id==0){
  ctx.drawImage(this.imagem,48,24,24,24,this.x,this.y,this.width,this.height);
  } else if  (this.id==1){
  ctx.drawImage(this.imagem,0,24,24,24,this.x,this.y,this.width,this.height);
  } else if (this.id==2){
  ctx.drawImage(this.imagem,24,0,24,24,this.x,this.y,this.width,this.height);
  } else if (this.id==3){
  ctx.drawImage(this.imagem,24,24,24,24,this.x,this.y,this.width,this.height);
  } else if (this.id==4){
  ctx.drawImage(this.imagem,0,0,24,24,this.x,this.y,this.width,this.height);
  }
};

Item.prototype.mover = function (dt) {
  this.y = this.y+ this.vy*dt;
};

Item.prototype.verificaColisao = function (alvo) {
  if((this.y >= alvo.y && this.y<=alvo.y+alvo.height) || (this.y+this.height >= alvo.y && this.y+this.height <=alvo.y+alvo.height) ){
    if((this.x > alvo.x && this.x<=alvo.x+alvo.width) || (this.x+this.width > alvo.x && this.x+this.width<=alvo.x+alvo.width)){
      //if(this.ativo==true){
      this.color = "darkblue";
      return true;
      //}
      //  return false;
    }
    return false;
  }
  return false;
};

Item.prototype.verificaSaidaTela = function () {
  if(this.y>500){
    return true;
  } else {
    return false;
  }
};
