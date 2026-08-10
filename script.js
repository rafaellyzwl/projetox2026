const botoes =document.queryselectorAll ("button");

botoes.forEach(funcion (botao)){
    let curtiu = false;
    botao.addEventListener ("click"botaoClicado);
    funcion botaoClicado (){
        consele.log ("fuiclicado")
        let texto= botao.queryselector ("span");
        if(curtiu===false)
            texto.textcontent++;
        curtiu = true;
    }else {
        texto.textcontent--;
        curtiu= false;
    
    }
