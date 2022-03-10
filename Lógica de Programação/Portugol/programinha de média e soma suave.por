programa
{
	
	funcao inicio()
	{
		real media, jan, fev, mar, abr, total
		cadeia lojista

		escreva("Digite seu nome\n")
		leia (lojista)
		escreva("olá, " + lojista + "\nDigite o valor de suas vendas referentes aos seguintes meses\n")
		escreva("Janeiro: R$")
		leia(jan)
		escreva("Fevereiro: R$")
		leia(fev)
		escreva("Março: R$")
		leia(mar)
		escreva("Abril: R$")
		leia(abr)
		media = (jan+fev+mar+abr)/4
		total = (jan+fev+mar+abr)
		escreva(lojista+", seu total de vendas foi R$"+ total +" e sua média de vendas mensal é de: R$" + media)

		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 534; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */