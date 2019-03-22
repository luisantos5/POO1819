//Array de filmes
const movies = []


const frmMovie = document.querySelector("form")

//alterar o atributo max da cx de texto "ano"
document.querySelector("#txtMovieYear").max = new Date().getFullYear() // vai buscar o ano atual do pc

frmMovie.addEventListener("submit", function(event) {
    
    //Obteer os valores inseridos nas caixas de texto

    const txtMovieTitle = document.querySelector("#txtMovieTitle").value
    const txtMovieYear = document.querySelector("#txtMovieYear").value
    const txtMovieGenre = document.querySelector("#txtMovieGenre").value
    const txtMovieCover = document.querySelector("#txtMovieCover").value
    const txtMovieTrailer = document.querySelector("#txtMovieTrailer").value
     

    //1. Verificar se o titulo ja exist no array
    if(isTitleAvailable(txtMovieTitle) {
        
    } 


    //2. Se não existir,
        // 2.1 Criar obj MOvie

        const movie = {
            title: txtMovieTitle,
            year: txtMovieYear,
            genre: txtMovieGenre,
            cover: txtMovieCover,
            trailer: txtMovieTrailer
        }
        // 2.2 iserir o obj MOvie para o array movies 
        movies.push(movie)
        renderTable()

        //Verificar se os dados sao inseridos no array, ver consola
        console.table(movies)

    // Se existir
        //Informar que ja existe

    event.preventDefault()

})

//FUNÇÕES AUXILIARES
function isTitleAvailable(txtMovieTitle){
    for (const movie of movies) {
        if(movie.title.toLowerCase() === txtMovieTitle.toLowerCase()){
            return false

        }
    }
    return true

}

//prencher tabela
function renderTable(){
    //1. Obter uma ref da tabela
    const table = document.querySelector("table")

    
    //preencho o cabeçalho 
    table,innerHTML = `<tr>
        <th>Título</th>
        <th>Género</th>  
        <th>Opções</th>
    </tr>`
    // 2. Alimentar a tabela
    for (const movie of movies) {
        table.innerHTML += `<tr>
            <td>${mov.title}</td>
            <td>${mov.genre}</td>
            <td>
                <button onClick='showCover()'>Ver Capa</button>
                <button>Ver Trailer</button>
                <button>Remover</button>
            </td>
        </tr>
        `
    }
}

function showCover(txtMovieCover)
{
    const dialog = document.querySelector("#dlgCover")
    const p = dialog.querySelector("p") 
    p.innerHTML = "blablabla"
    dialog.showModal();
}