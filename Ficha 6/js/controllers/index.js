import { bands } from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")
const btnFilter = document.querySelector("#btnFilter")
btnFilter.addEventListener("click", function(){
    const txtName = document.querySelector("#txtName").value 
    const sltGenre = document.querySelector("#sltGenre").value
    renderCatalog(txtName, sltGenre)
})

renderCatalog()

/**
 * 
 * @param {string} txtName Nome da banda
 * @param {string} sltGenre Genero de musica que a banda 
 */



function renderCatalog(txtName ="", sltGenre ="") {
    let result = ""
    let i = 0
    for (const band of bands) {

        if ((sltGenre!=="" && band.genre !==sltGenre) 
            ||
            (txtName!=="" && !band.name.startsWith(txtName)) 
            ) {
                continue
            
        }

        /* if (filterGenre!=="" && filterGenre!==band.genre) continue */

        if (i % 3 == 0) {
            result += `<div class="row">`
        }
        result = `
        <div class="col-sm-4">
        <div class="card">
                <img src="${band.photo}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${band.name}</h5>
                <p class="card-text">${band.genre}</p>
                <a href="#" class="btn btn-success">Ver mais</a>
                <a href="#" class="btn btn-danger">Remover</a>
                </div>
            </div>
        </div>
    `
        i++
        if (i % 3 == 0) {
            result += `</div>`
        }

    }
    myCatalog.innerHTML = result
}



