import { mons } from "../models/main.js"

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
 * @param {string} txtName Nome do monumento
 * @param {string} sltGenre Genero de musica que a banda 
 */



function renderCatalog(txtName ="", sltGenre ="") {
    let result = ""
    let i = 0
    for (const mon of mons) {

        if ((sltGenre !=="" && mon.genre !==sltGenre) 
            ||
            (txtName !=="" && !mon.name.startsWith(txtName)) 
            ) {
                continue
            
        }
        

        
        //Criação de linha
        if (i % 3 == 0) {
            result += `<div class="row">`
        }
        console.log(mon.name)
        //Geração do card
        result += `
        <div class="col-sm-4">
        <div class="card">
                <img src="${mon.photo}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${mon.name}</h5>
                <p class="card-text">${mon.genre}</p>
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



