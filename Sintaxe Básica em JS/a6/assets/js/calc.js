function calc(){
    const operacao = Number(prompt("Escolha uma operação:\n 1- Soma(+)\n 2- Subtração(-)\n 3- Multiplicação(*)\n 4- Divisão Real(/)\n 5- Divisão Inteira(%)\n 6- Potenciação(**)"));
    console.log(operacao);

    if(!operacao || operacao>6){
        alert("Operação não existente.")
        calc()
    }else{
        
        //pegando os numeros do usuario
        let n1=Number (prompt("insira o primeiro valor"));
        let n2=Number (prompt("insira o segundo valor"));
        let resultado;
        
        if (!n1||!n2){
            alert("Alguma coisa deu errado, tenta de novo aí.");
            calc();
        }else{
            
            //funções das operações
            function soma(){
                resultado = n1+n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                deNovo();
            }
            
            function sub(){
                resultado = n1-n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                deNovo();
            }

            function multi(){
                resultado = n1*n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                deNovo();
            }

            function divre(){
                resultado = n1/n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                deNovo();
            }

            function divin(){
                resultado = n1%n2;
                alert(`o resto da divisão de ${n1} por ${n2} é: ${resultado}`);
                deNovo();
                
            }

            function poten(){
                resultado = n1**n2;
                alert(`${n1} elevado à ${n2} = ${resultado}`);
                deNovo();
            }

            function deNovo(){
                let opcao = prompt("Quer fazer outra conta?\n1- Sim.\n2- Não.");
                if(opcao==1 || opcao=="Sim"){
                    calc();
                }else if(opcao==2 || opcao == "Não"){
                    alert("ok, até uma próxima");
                }else{
                    alert("opção inválida.",opcao);            
                    deNovo();
                }
            }


            //vendo oq o usuario escolheu
            /* if(operacao ==1){
                soma();
            }else if (operacao==2){
                sub();
            }else if(operacao ==3){
                multi();
            }else if(operacao ==4){
                divre();
            }else if(operacao ==5){
                divin();
            }else if(operacao ==6){
                poten();
            } */

            switch(operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    sub();
                    break;
                case 3:
                    multi();
                    break;
                case 4:
                    divre();
                    break;
                case 5:
                    divin();
                    break;
                case 6:
                    poten();
                    break;

            }
        }
        }
    }

calc();
