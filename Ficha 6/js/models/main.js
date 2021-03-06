import Band from "./band.js"
import User from "./user.js"

// Array para guardar os objetos Band
export let bands = []
if (localStorage.getItem("bands")) {
    bands = JSON.parse(localStorage.getItem("bands"))  //IMPORTANTE 
    /* 
        FAZ COM QUE O MEU ARRAY BANDS NAO SEJA SEMPRE LIMPO QUANO FEHCAR O bROWSER
    */
}
else {
    const band1 = new Band("Muse", "Pop-rock", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Muse_Promo_2017.tif/lossy-page1-300px-Muse_Promo_2017.tif.jpg", "A great Band!", "XXX")
    const band2 = new Band("One Republic", "Pop", "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/0/1/c/201c58f519fb50c6fdd0e553804f2af8.jpg", "A great Band!", "XXX")
    const band3 = new Band("Amor Eletro", "Metal", "https://thumbs.web.sapo.io/?epic=OGNjSwzlc+hYE3RWnbPmR6NsO6awgbLGzFcP5JwzN+AuRflKA0Eiej9+yy+MdRyqIvFsGH/lg4PVTssZjw8tdgrzAjVV4GxVBNDPM2wpzXkcpVY=&W=800&H=0&png=1&delay_optim=1", "A great Band!", "XXX")
    const band4 = new Band("Black Yead Peas", "Pop-rock", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMak1sr1NO5_nY3lQDUNe6-lkT3GeL__TLg38IEkVmT9S9HFtL", "A great group!", "XXX")
    const band5 = new Band("Black Yead Peas 2", "Pop-rock", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMak1sr1NO5_nY3lQDUNe6-lkT3GeL__TLg38IEkVmT9S9HFtL", "A great group!", "XXX")

    bands.push(band1, band2, band3, band4, band5)
    localStorage.setItem("bands", JSON.stringify(bands))
}




export function addBand(txtName, sltGenre, txtDescription, txtPhoto, txtVideo) {
    let existBand = false

    for (const band of bands) {
        if (band.name === txtName) {
            existBand = true
            break
        }
    }

    if (existBand === false) {
        bands.push(new Band(txtName, sltGenre, txtPhoto, txtDescription, txtVideo))
        localStorage.setItem("bands", JSON.stringify(bands))
        alert(`Banda ${txtName} foi adicionada com sucesso!`)
        location.href = "../index.html"

    }
    else {
        alert(`Banda ${txtName} já existe!`)
    }
}

// Array para guardar os objetos User
export const users = []

const user1 = new User("ricardo", "12345")
const user2 = new User("maria", "54321")
const user3 = new User("pedro", "15243")

users.push(user1, user2, user3)


/**
 * Função que recebe o nome de uma banda e elimina a banda respetiva
 * COPIADO E NÃO CONLUIDO
 * alterar is butoes no catalogo com ids e class
 * 
 * @param {string} txtName Nome da banda
 */
export function removeBand(txtName) {
    let removeBand = confirm(`Deseja mesmo remover a banda ${txtName}?`)
    if (removeBand) {
        for (let i = 0; i < bands.length; i++) {
            if (bands[i].name === txtName) {
                bands.splice(i, 1)
            }
        }
        localStorage.setItem("bands", JSON.stringify(bands))
        location.reload()
    }
}