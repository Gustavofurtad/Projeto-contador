function clicar(){
    var ini = window.document.querySelector('input#iinicio')
    var fi = window.document.querySelector('input#ifim')
    var pas = window.document.querySelector('input#ipasso')

    var inicio = Number(ini.value)
    var fim = Number(fi.value)
    var passo = Number(pas.value)
    var tela1 = window.document.querySelector('div#tela')

    var c = inicio

    if((inicio==0)||(passo==0)||(fim==0)){
        window.alert('[ERRO] Os dados estão de forma inválida. Reveja e corrija!')
        location.reload()
    }else{
        tela1.innerHTML = 'Contando:'
        if(inicio < fim){
            //CONTAGEM CRESCENTE 
            for(var c = inicio; c <= fim; c += passo){
            tela1.innerHTML += ` ${c} \u{1F499}`
        }
        }else{
            //CONTAGEM DECRESCENTE
        while(fim<=c){
            tela1.innerHTML += ` ${c}  \u{1F449}`
            c-=passo
        }
        

    }
    tela1.innerHTML += '\u{1F3C1}'  
    }
    
   
    

       
    
    
}
