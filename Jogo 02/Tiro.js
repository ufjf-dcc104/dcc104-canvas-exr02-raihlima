function Tiro (sentido, atirador, qtd){
  this.imagem = new Image();
  this.imagem.src = "tiro.png";
  this.sentido = sentido;
  if(qtd==0){
    this.x = atirador.x+(atirador.width/2)-2.5;
    this.height = 10;
    this.width = 5;
    this.ativo=true;
  } else if (qtd==1){
    this.x = atirador.x;
    this.height = 10;
    this.width = 5;
    this.ativo=true;
  } else if (qtd==2){
    this.x = atirador.x+atirador.width-5;
    this.height = 10;
    this.width = 5;
    this.ativo=true;
  }

  if(sentido==0){
    this.color = "blue";
    this.y = atirador.y -3 - this.height;
    this.vy = -400;
    this.corOriginal=this.color;
  } else if(sentido==1){
    this.color = "red";
    this.y = atirador.y + atirador.height +3;
    this.vy = 200;
  }

}

Tiro.prototype.desenhar = function (ctx) {
  //ctx.fillStyle = this.color;
//  ctx.fillRect(this.x,this.y,this.width,this.height);
  if(this.color=="blue"){
    ctx.drawImage(this.imagem,0,0,30,50,this.x,this.y,this.width,this.height);
  } else {
    ctx.drawImage(this.imagem,30,0,30,65,this.x,this.y,this.width,this.height);
  }
};

Tiro.prototype.atualizar = function (dt) {
  this.y = this.y+this.vy *dt;

};

Tiro.prototype.verificaSaidaTela = function(){
  if(this.y<0 || this.y>500){
    return true;
  }
  if(this.x<0 || this.x>700){
    return true;
  }
  return false;
}

Tiro.prototype.verificaColisao = function (alvo) {
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

Tiro.prototype.isAtivo = function () {
  return this.ativo;
};
