import { bands } from "../models/main.js"

const myCatalog = document.querySelector("#myCatalog")

//Tratamento filtrso



function renderCatalog(filterGenre , filterName) {
    let result = ""
    let i = 0
    for (const band of bands) {

        if (filterGenre!=="" && filterGenre!==band.genre) continue

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



