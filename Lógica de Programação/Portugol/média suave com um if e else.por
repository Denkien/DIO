//programinha de ver média do aluno e ver se ele passou
programa
{
	
	funcao inicio()
	{
		real media, nota1, nota2, nota3, nota4
		cadeia aluno

		escreva("Digite seu nome: ")
		leia (aluno)
		escreva("olá, " + aluno + "\nDigite suas notas\n")
		leia(nota1,nota2,nota3,nota4)
		media = (nota1+nota2+nota3+nota4)/4
		escreva(aluno+", sua média é: " + media)
		//a parada é maior q 6?
		se(media>=6){
			escreva("\nParabéns, vc foi aprovado.")
		}
		//se não for...
		senao{
			escreva("\nse lascou, foi reprovado")
				
			}
			
		
		
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 464; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */