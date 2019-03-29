// array para guardar os objetovos movie
const movies = []

//definir ano maxomo para os obj movie
const txtYear = document.querySelector("#txtYear")
txtYear.max = new Date().getFullYear

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function(event) {
    //1. Obter valores formulario

    const txtTitle = document.querySelector("#txtTitle").value
    const sltGenre = document.querySelector("#sltGenre").value
    const txtYear = document.querySelector("#txtYear").value
    const txtCover = document.querySelector("#txtCover").value
    const txtTrailer = document.querySelector("#txtTrailer").value
    

    //2. Verificar se o titulo do filme existe no array

    const result = isMovie(txtTitle)

    if (result === true) {
        alert("Filme existente!")
    }
    else {
        //3. Se existir, criar um upbjk como o filme 
    
        const newMovie = {
            title: txtTitle,
            genre: sltGenre,
            year: txtYear,
            cover: txtCover,
            trailer: txtTrailer
        }
        //4. inserir obj no array
        
        movies.push(newMovie)  
    }
    //5. Exibir o filme na tabela

    renderTable()
    
    
    event.preventDefault()  //PRevine que o formulario seja submetido  IMPORTANTE COLOCAR!!
    
    
})


//Funçao para vierificar se o filme ja exite

function isMovie(txtTitle) {
    for (const movie of movies) {  // for of usa-se para ARRAYS
        if (movie.title === txtTitle) {
            return true
        }
    }
    return false   //OS RETURN QUEBRAM A CONTINUIDADE DA FUNÇÃO
}

//Função para exibir os filmes na tabela
function renderTable(){
    const myTable = document.querySelector("table")

    //Adicionar cabeçalho a tablea
    myTable.innerHTML = `
    <tr>
        <th>TITULO</th>
        <th>GENERO</th>
        <th>OPÇOES</th>
    </tr>
    `
    // Percorrer todo o array e injetar cada objeto movie como uma nova linha da tabela
    for (const movie of movies) {
        myTable.innerHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>
                    <button onclick="showCover('${movie.cover}')">VER CAPA</button>
                    <button onclick="showTrailer('${movie.trailer}')">VER TRAILER</button>
                    <button onclick="removeMovie('${movie.title}')">REMOVER</button>
                    
                </td>
            </tr>
        
        
        
        `
        
    }
}

//Funºao pata mostrar a janlea da capa do filme
function showCover(cover) {
    //injetar img da capa
    const imgCover = document.querySelector("#imgCover")
    imgCover.src = cover

    //exibir a janalea
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.showModal()

}

// Função para fechar a janela modal da capa do filme
const btnCloseCover = document.querySelector("#btnCloseCover")
btnCloseCoverDialog.addEventListener("click", function () {
    document.querySelector("#dlgCover").close()
})

// Função para mostrar o trailer do filme numa janela modal
function showTrailerWindow(trailer) {
    const dlgTrailer = document.querySelector("#dlgTrailer")
    const ifrTrailer = document.querySelector("#ifrTrailer")
    ifrTrailer.src = trailer + "?autoplay=1"
    dlgTrailer.showModal()
}

//função para remover um filme
function removeMovie(title){
    for (let i=0; i<movies.length; i++) {
        if (movie[i].title === title) {
            //remover filme
            movies.splice(i,1)

        }
    }
//atulizar a tabela
renderTable()
}
