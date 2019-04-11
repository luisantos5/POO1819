const images = []


const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {

    // 1. Obter url do txtbx
    const newImage = document.querySelector("#image").value

    images.push(newImage)
    renderTable()

})
/* myForm.addEventListener("click", renderTable() {

    // 1. Obter url do txtbx
    const newImage = document.querySelector("#image").value

    const table = document.querySelector("table")

    table.innerHTML += `
            <tr>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            </tr>
     
     
           `

           
           const imgCover = document.querySelector("#image")
           imgCover.src = cover
} ) */

// Função para renderizar uma tabela
function renderTable() {
    const table = document.querySelector("table")

    
    // Percorrer todo o array e injetar cada objeto movie como uma nova linha da tabela
    for (const image of images) {
        table.innerHTML += `
            
            <tr>
                <img src="${images.image}" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </tr>

           
        `
    }
}

/* //funçao para alimentar tabela
function renderTable() {
    const table = document.querySelector("table")

    table.innerHTML += `
            <tr>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            </tr>
        `
    
    /* // Injetar o cabeçalho na tabela
    table.innerHTML = `
        <tr>
            <th>TITULO</th><th>GÉNERO</th>
        </tr>
    ` */
    // Percorrer todo o array e injetar cada objeto movie como uma nova linha da tabela
    /* for (const movie of movies) {
        table.innerHTML += `
            <tr>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            </tr>
        `
    } */
/* } */

