    let arrayOrdenacoes = []

    livrosStorage()
    categoriasStorage()
    bibliotecasStorage()
    tagsStorage()
    completarFiltroAutores()
    completarFiltroCategorias()
    completarFiltroEstadoLivro()
    completarFiltroEditoras()
    completarFiltroBibliotecas()
    completarFiltroTags()
    carregarCatalogo()
    
    let livroIdRequisicao = 0

    let novoLivro01 = new Livro(1, "Quem Meteu a Mão na Caixa", "https://img.wook.pt/images/quem-meteu-a-mao-na-caixa-helena-garrido/MXwxOTc0MTgzNHwxNTU3NTEyM3wxNTI1MjE1NjAwMDAw/502x", "", "Helena Garrido", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0) 
    let novoLivro02 = new Livro(2, "Deixar Ir", "https://img.wook.pt/images/deixar-ir-david-r-hawkins/MXwyMTgxMzU4OXwxNzY2NDg2NHwxNTIzODMzMjAwMDAw/502x", "", "David R. Hawkins", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro03 = new Livro(3, "O Tatuador de Auschwitz", "https://img.wook.pt/images/o-tatuador-de-auschwitz-heather-morris/MXwyMTM3MDQwNnwxNzI1MjkwM3wxNTE2NzUyMDAwMDAw/502x", "", "Heather Morris", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro04 = new Livro(4, "Cebola Crua com Sal e Broa", "https://img.wook.pt/images/cebola-crua-com-sal-e-broa-miguel-sousa-tavares/MXwyMTkwOTA1N3wxNzc2ODk3NHwxNTI2MzM4ODAwMDAw/502x", "", "Miguel Sousa Tavares", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro05 = new Livro(5, "Propósito", "https://img.wook.pt/images/proposito-sri-prem-baba/MXwyMTUyMTI5NnwxNzM2ODUyN3wxNTI2MjUyNDAwMDAw/502x", "", "Sri Prem Baba", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0 , 0)
    let novoLivro06 = new Livro(6, "O Homem Que Sou", "https://img.wook.pt/images/tony-carreira---o-homem-que-sou-tony-carreira/MXwyMTE4ODM3NXwxNzA1NDY1NXwxNTI2MzM4ODAwMDAw/502x", "", "Tony Carreira", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro07 = new Livro(7, "Hippie", "https://img.wook.pt/images/hippie-paulo-coelho/MXwyMTYwMjc3MnwxNzQ1MzQ4NHwxNTI2MjUyNDAwMDAw/502x", "", "Paulo Coelho", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro08 = new Livro(8, "A Guerra dos Tronos", "https://img.wook.pt/images/a-guerra-dos-tronos-george-r-r-martin/MXwxOTY1MTF8MjQ3OTIzfDEzODM1MjMyMDAwMDA=/502x", "", "George R. R. Martin", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro09 = new Livro(9, "A Guerra dos Tronos", "https://img.wook.pt/images/o-mundo-de-a-guerra-dos-tronos-george-r-r-martin/MXwxNjM3NDc0OHwxMTk1ODU1MXwxNDI4NDQ3NjAwMDAw/502x", "", "George R. R. Martin", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro10 = new Livro(10, "Sonho Febril", "https://img.wook.pt/images/sonho-febril-george-r-r-martin/MXwyMTM5NDQ2MHwxNzI2OTk5NnwxNTE3MzU2ODAwMDAw/502x", "", "George R. R. Martin", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro11 = new Livro(11, "Não Respire", "https://img.wook.pt/images/nao-respire-pedro-rolo-duarte/MXwyMTg3Njc5MXwxNzczMjk2NXwxNTI1MzAyMDAwMDAw/502x", "", "Pedro Rolo Duarte ", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro12 = new Livro(12, "A Rapariga de Auschwitz", "https://img.wook.pt/images/a-rapariga-de-auschwitz-eva-schloss/MXwyMTYwODkwMnwxNzQ2MDE4MnwxNTIyMTkxNjAwMDAw/502x", "", "Eva Schloss", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro13 = new Livro(13, "Do Sonho à Vitória", "https://img.wook.pt/images/do-sonho-a-vitoria-antonio-tadeia/MXwyMTkxMjU5OHwxNzc3MjgxMnwxNTI2NDI1MjAwMDAw/502x", "", "António Tadeia", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )
    let novoLivro14 = new Livro(14, "Almanaque da Seleção", "https://img.wook.pt/images/almanaque-da-selecao-rui-miguel-tovar/MXwyMTk0Mjk3OXwxNzgwNTA0MXwxNTI3MTE2NDAwMDAw/502x", "", "Rui Miguel Tovar ", "ASA", "", 356, "Fraco", "Manuel Silva", "", "Desporto", "", "", false, 0, 0, 0 )

    if (localStorage.getItem("livros") == null){
        livros.push(novoLivro01)
        livros.push(novoLivro02) 
        livros.push(novoLivro03)
        livros.push(novoLivro04)
        livros.push(novoLivro05)
        livros.push(novoLivro06)
        livros.push(novoLivro07)
        livros.push(novoLivro08)
        livros.push(novoLivro09)
        livros.push(novoLivro10)
        livros.push(novoLivro11)
        livros.push(novoLivro12)
        livros.push(novoLivro13)
        livros.push(novoLivro14)
        localStorage.setItem("livros", JSON.stringify(livros))
    }
    
    let ordem = document.getElementById("ordem")
    
    //Filtros/Ordenacoes
    let btnFiltrar = document.getElementById("btnFiltrar")
    let btnOrdenar = document.getElementById("btnOrdenar")

    btnFiltrar.addEventListener("click", function(){
        carregarCatalogo()
    })

    btnOrdenar.addEventListener("click", function(){
        
        if(ordem.value == "alfabeticaAZ") {
            filtrarOrdemAlfabeticaAZ()
        }

        if(ordem.value == "alfabeticaZA") {
            filtrarOrdemAlfabeticaZA()
        }
        
        if(ordem.value == "maisRecentes") {
            filtrarMaisRecentes()
        }
        
        if(ordem.value == "maisPontuados") {
            filtrarMaisPontuados()
        }
        carregarCatalogo()
    })
    
    
    function carregarCatalogo() {

        let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
        
        let catalogo = document.getElementById("catalogo")
        let btnGrelha = document.getElementById("btnGrelha")
        let btnLista = document.getElementById("btnLista")
        let strHtml = ""
   
            
            for (let i = 0, cont = 0; i < arrayOrdenacoes.length ; i++) {
                
                if ((autores.value == arrayOrdenacoes[i].autor || autores.value == "") && 
                    (filtroCategorias.value == arrayOrdenacoes[i].categoria || filtroCategorias.value == "") &&
                    (estadoLivro.value == arrayOrdenacoes[i].estado || estadoLivro.value == "") && 
                    (filtroBibliotecas.value == arrayOrdenacoes[i].biblioteca || filtroBibliotecas.value == "") && 
                    (filtroTags.value == arrayOrdenacoes[i].tags || filtroTags.value == "") && 
                    (editora.value == arrayOrdenacoes[i].editora || editora.value == "")) {
                
                        if(cont % 6 == 0) {
                            strHtml += `<div class="row">`    
                        }
    
                        if (utilizadorLogado._tipo == "operador"){
                            strHtml += `
                            <div class="col-2"><a id="${arrayOrdenacoes[i].id}" class='verLivro' href = "../HTML/livro.html"><img src="${arrayOrdenacoes[i].capa}"  alt="" height="240" width="160" ></a> <br>
                            <center><a id="${arrayOrdenacoes[i].id}" class='verLivro' ><p><b>${arrayOrdenacoes[i].titulo}</b></a> <br>
                                 de ${arrayOrdenacoes[i].autor}</p>  </center>
                                 <center><a id="${arrayOrdenacoes[i].id}" href="#"  class="btn btn-danger remove"><i class="fas fa-trash-alt"></i> </a>
                            <a id="${arrayOrdenacoes[i].id}" href="#" data-toggle='modal'  data-target='#editarLivroModal' class="btn btn-dark editar "><i class="fas fa-edit"></i> </a></center> <br>  
                            </div>`
                        }
                        else {
                            strHtml += `
                            <div class="col-2"><a id="${arrayOrdenacoes[i].id}" class='verLivro' href = "livro.html" ><img src="${arrayOrdenacoes[i].capa}"  alt="" height="240" width="160"></a> <br>
                            <center><a id="${arrayOrdenacoes[i].id}" class='verLivro' ><p><b>${arrayOrdenacoes[i].titulo}</b></a> <br>
                                 de ${arrayOrdenacoes[i].autor}</p>  </center>
                            </div>`
                        }
                
                        if(cont % 6 == 5) {
                            strHtml += `</div>`    
                        } 
                        cont++
                }   
            }
            
            catalogo.innerHTML = strHtml
       
        let verLivro = document.getElementsByClassName("verLivro")
        // For each link, add a listener to listen the click event
        for (let i = 0; i < verLivro.length; i++) {
            verLivro[i].addEventListener("click", function() {
                // Ao clicar num livro especifico, ve-lo numa pagina
                let livroId = verLivro[i].getAttribute("id")
                localStorage.setItem("livroID", livroId)
            })        
         }
    
        let btnRemover = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemover.length; i++) {
            btnRemover[i].addEventListener("click", function() {
                // Ao clicar num livro especifico, remover do array
                let livroId = btnRemover[i].getAttribute("id")
                eliminarLivro(livroId)
                carregarCatalogo(livroId)
                localStorage.setItem("livros", JSON.stringify(livros))
            })        
            
        }
        
        let editar = document.getElementsByClassName("editar")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < editar.length; i++) {
            editar[i].addEventListener("click", function(event) {
                // Ao clicar num livro especifico, editar no form
                let livroId = editar[i].getAttribute("id")
                
                editarLivroPorId(livroId)
                carregarCatalogo(livroId)
                event.preventDefault()
                         
            })        
        }  
            
    }
      
    function completarFiltroAutores() {

        let tempAutores = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < livros.length; i++) {
            if (tempAutores.indexOf(livros[i].autor) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempAutores.push(livros[i].autor)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todos</option>"
        for (let i = 0; i < tempAutores.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempAutores[i]}'>${tempAutores[i]}</option>` 
                            
        }
    
        let autores = document.getElementById("autores")
        autores.innerHTML = strHtml
    }

    function completarFiltroEstadoLivro() {

        let tempEstadoLivro = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < livros.length; i++) {
            if (tempEstadoLivro.indexOf(livros[i].estado) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempEstadoLivro.push(livros[i].estado)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todos</option>"
        for (let i = 0; i < tempEstadoLivro.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempEstadoLivro[i]}'>${tempEstadoLivro[i]}</option>` 
                            
        }
    
        let estadoLivro = document.getElementById("estadoLivro")
        estadoLivro.innerHTML = strHtml
    }
    
    function completarFiltroEditoras() {

        let tempEditoras = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < livros.length; i++) {
            if (tempEditoras.indexOf(livros[i].editora) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempEditoras.push(livros[i].editora)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todos</option>"
        for (let i = 0; i < tempEditoras.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempEditoras[i]}'>${tempEditoras[i]}</option>` 
                            
        }
    
        let editora = document.getElementById("editora")
        editora.innerHTML = strHtml
    }

    function completarFiltroCategorias() {

        let tempCategorias = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < categorias.length; i++) {
            if (tempCategorias.indexOf(categorias[i].categoria) == -1) {
                // 2. Guardar todos os autores não duplicados

                tempCategorias.push(categorias[i].categoria)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todas</option>"
        for (let i = 0; i < tempCategorias.length; i++) {
    
            
                    strHtml += `<option value='${tempCategorias[i]}'>${tempCategorias[i]}</option>` 
                            
        }
    
        let filtroCategorias = document.getElementById("filtroCategorias")
        filtroCategorias.innerHTML = strHtml
    }

    function completarFiltroTags() {
        console.log(tags)
        let tempTags = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < tags.length; i++) {
            if (tempTags.indexOf(tags[i].tag) == -1) {
                // 2. Guardar todos os autores não duplicados

                tempTags.push(tags[i].tag)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todas</option>"
        for (let i = 0; i < tempTags.length; i++) {
    
            
                    strHtml += `<option value='${tempTags[i]}'>${tempTags[i]}</option>` 
                            
        }
    
        let filtroTags = document.getElementById("filtroTags")
        filtroTags.innerHTML = strHtml
    }

    function completarFiltroBibliotecas() {
        console.log(bibliotecas)
        let tempBibliotecas = []
        // 1. Iterar sobre o array categorias
        for (let i = 0; i < bibliotecas.length; i++) {
            if (tempBibliotecas.indexOf(bibliotecas[i].freguesia) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempBibliotecas.push(bibliotecas[i].freguesia)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todas</option>"
        for (let i = 0; i < tempBibliotecas.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempBibliotecas[i]}'>${tempBibliotecas[i]}</option>` 
                            
        }
        let filtroBibliotecas = document.getElementById("filtroBibliotecas")
        filtroBibliotecas.innerHTML = strHtml
    }

    function filtrarOrdemAlfabeticaAZ() {
        for (let l = 0; l < arrayOrdenacoes.length; l++){
            arrayOrdenacoes[l] = livros[l]
        }
        
        let livroTemp = new Livro()
        for (let i = 0; i < arrayOrdenacoes.length-1; i++) {
            for (let j = i+1; j < arrayOrdenacoes.length; j++) {
                if ( arrayOrdenacoes[i].titulo > arrayOrdenacoes[j].titulo ){
                    livroTemp = arrayOrdenacoes[j]
                    arrayOrdenacoes[j] = arrayOrdenacoes[i]
                    arrayOrdenacoes[i] = livroTemp
                }
            }
        }

        
    }

    function filtrarOrdemAlfabeticaZA() {
        for (let l = 0; l < arrayOrdenacoes.length; l++){
            arrayOrdenacoes[l] = livros[l]
        }
        
        let livroTemp = new Livro()
        for (let i = 0; i < arrayOrdenacoes.length-1; i++) {
            for (let j = i+1; j < arrayOrdenacoes.length; j++) {
                if ( arrayOrdenacoes[i].titulo < arrayOrdenacoes[j].titulo ){
                    livroTemp = arrayOrdenacoes[j]
                    arrayOrdenacoes[j] = arrayOrdenacoes[i]
                    arrayOrdenacoes[i] = livroTemp
                }
            }
        }

        
    }

    function filtrarMaisRecentes() {
        for (let l = 0; l < arrayOrdenacoes.length; l++){
            arrayOrdenacoes[l] = livros[l]
        }
        arrayOrdenacoes.reverse()
    }

    function filtrarMaisPontuados() {
       
        for (let l = 0; l < arrayOrdenacoes.length; l++){
            arrayOrdenacoes[l] = livros[l]
        }
        for (let i = 0; i < arrayOrdenacoes.length-1; i++) {
            for (let j = i+1; j < arrayOrdenacoes.length; j++) {
                if (arrayOrdenacoes[j].mediaPontuacoes > arrayOrdenacoes[i].mediaPontuacoes) {
                    for (let k = 0; k < livros.length; k++) {
                        if (livros[k].id == arrayOrdenacoes[j].id){
                            arrayOrdenacoes[j] = arrayOrdenacoes[i]
                            arrayOrdenacoes[i] = livros[k]  
                        } 
                    }
                }
            }  
        }
        console.log(arrayOrdenacoes)
    }

    function eliminarLivro(id){
        if (confirm("Tem a certeza que quer eliminar o livro?")){
            for (let i = 0; i < livros.length; i++) {
                if(livros[i].id == id) {
                    livros.splice(i, 1)
                }                
            }
            for (let i = 0; i < arrayOrdenacoes.length; i++) {
                if(arrayOrdenacoes[i].id == id) {
                    arrayOrdenacoes.splice(i, 1)
                }                 
            }
        }
    }

    function editarLivroPorId(id) {
        console.log(id)
        
        //livroId = id

        let frmEditarLivros = document.getElementById("frmEditarLivros")

        let titulo = document.getElementById("inputTitulo")
        let capa = document.getElementById("inputCapa")
        let descriçao = document.getElementById("inputDescriçao")
        let autor = document.getElementById("inputAutor")
        let editora = document.getElementById("inputEditora")
        let dataLançamento = document.getElementById("inputDataLançamento")
        let numeroPaginas = document.getElementById("inputNpaginas")
        let estado = document.getElementById("inputEstado")
        let dataDoaçao = document.getElementById("inputDataDoaçao")
        let doador = document.getElementById("inputDoador")

        
        //Preencher o formulario de edicao do livro
        for (let j = 0; j < livros.length; j++) {
            if(livros[j].id == id) {
                titulo.value = livros[j].titulo
                capa.value = livros[j].capa
                descriçao.value = livros[j].descriçao 
                autor.value =  livros[j].autor
                editora.value = livros[j].editora
                dataLançamento.value = livros[j].dataLançamento
                numeroPaginas.value = livros[j].numeroPaginas
                estado.value = livros[j].estado
                dataDoaçao.value = livros[j].dataDoaçao
                doador.value = livros[j].doador
            }
            

        }

        frmEditarLivros.addEventListener("submit", function(event) {
            
            for (let i = 0; i < livros.length; i++) {
                
                if(livros[i].id == id) {
                    
                    livros[i].titulo = titulo.value
                    livros[i].capa = capa.value
                    livros[i].descriçao = descriçao.value
                    livros[i].autor = autor.value
                    livros[i].editora = editora.value
                    livros[i].dataLançamento = dataLançamento.value
                    livros[i].numeroPaginas = numeroPaginas.value
                    livros[i].estado = estado.value
                    livros[i].dataDoaçao = dataDoaçao.value
                    livros[i].doador = doador.value
                
                    // Fechar a modal
                    $('#editarLivroModal').modal('hide')
                    
                    event.preventDefault()
                    
                }                                    
            }
            localStorage.setItem("livros", JSON.stringify(livros))
            location.reload()
        })
        
    }

    function bibliotecasStorage(){
    
        if(localStorage.bibliotecas) {
            let tempArray = JSON.parse(localStorage.getItem("bibliotecas"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaBiblioteca =  new Biblioteca (tempArray[i]._id, tempArray[i]._freguesia,  tempArray[i]._morada, tempArray[i]._latitude, tempArray[i]._longitude)
                bibliotecas.push(novaBiblioteca)       
            }
        } 
    } 
    
    function categoriasStorage(){
    
        if(localStorage.categorias) {
            let tempArray = JSON.parse(localStorage.getItem("categorias"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaCategoria =  new Categoria (tempArray[i]._id, tempArray[i]._categoria)
                categorias.push(novaCategoria)       
            }
        } 
    } 
    
    function tagsStorage(){
    
        if(localStorage.tags) {
            let tempArray = JSON.parse(localStorage.getItem("tags"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaTag =  new Tag (tempArray[i]._id, tempArray[i]._tag)
                tags.push(novaTag)       
            }
        } 
    } 
    
    function livrosStorage(){
        if(localStorage.livros) {
            let tempArray2 = JSON.parse(localStorage.getItem("livros"))
            
            for (let i = 0; i < tempArray2.length; i++) {
                
                let novoLivro =  new Livro(tempArray2[i]._id, tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao, tempArray2[i]._categoria, tempArray2[i]._tags, tempArray2[i]._biblioteca, tempArray2[i]._requisitado, tempArray2[i]._somaPontuacoes, tempArray2[i]._numeroPontuacoes, tempArray2[i]._mediaPontuacoes)
                livros.push(novoLivro)
                arrayOrdenacoes.push(novoLivro)
                
            }
        }
            
    }
    