


	var altura = 0
	var largura = 0
	var vidas = 1;

	function ajustaTamanhoPalcoJogo(){
		altura = window.innerHeight 
		largura = window.innerWidth
		console.log(largura, altura)

	}

	ajustaTamanhoPalcoJogo()

	function posicaoRandomica(){
		
// Remover mosquito anterior

	if(document.getElementById('mosquito')){
		  	document.getElementById('mosquito').remove()
		
			  document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
				vidas++

				if(vidas > 3){
					window.location.href = "fim_de_jogo.html"
				}


	}
		var posicaoX = Math.floor(Math.random() * largura) - 90
		var posicaoY = Math.floor(Math.random() * altura)  - 90

		posicaoX = posicaoX < 0 ? 0 : posicaoX 
		posicaoY = posicaoX < 0 ? 0 : posicaoY

		// Criar elementos html
		var mosquito = document.createElement('img')
		mosquito.src = 'imagens/mosca.png'
		mosquito.className = tamanhoAleatorio() + ' ' +ladoAleatorio()
		mosquito.style.left = posicaoX + 'px'
		mosquito.style.top = posicaoY + 'px'
		mosquito.style.position = 'absolute'
		mosquito.id = 'mosquito'
		mosquito.onclick = function(){
			this.remove()
		}

		document.body.appendChild(mosquito)
	}

	function tamanhoAleatorio(){
		var classe = Math.floor(Math.random() * 3)

		switch(classe){
			case 0:
				return 'mosquito1'
			
			case 1:
				return 'mosquito2'

			case 2:
				return 'mosquito3'
		}

	}

	console.log(tamanhoAleatorio())

	function ladoAleatorio(){
		var classe = Math.floor(Math.random() * 2)

		switch(classe){
			case 0:
				return 'ladoA'
			
			case 1:
				return 'ladoB'
		}
	}






