import Band from "./band.js"
import User from "./user.js"

// Array para guardar os objetos Band
export const bands = []

const band1 = new Band("Muse", "Pop-Rock", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Muse_Promo_2017.tif/lossy-page1-300px-Muse_Promo_2017.tif.jpg", "A great Band!", "XXX")
const band2 = new Band("One Republic", "Pop", "http://www.altominho.tv/site/wp-content/uploads/2018/01/amor-740x447.jpg", "A great Band!", "XXX")
const band3 = new Band("Amor Eletro", "Pop-Rock", "https://thumbs.web.sapo.io/?epic=OGNjSwzlc+hYE3RWnbPmR6NsO6awgbLGzFcP5JwzN+AuRflKA0Eiej9+yy+MdRyqIvFsGH/lg4PVTssZjw8tdgrzAjVV4GxVBNDPM2wpzXkcpVY=&W=800&H=0&png=1&delay_optim=1", "A great Band!", "XXX")
const band4 = new Band("Black Yead Peas", "Pop-Rock", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMak1sr1NO5_nY3lQDUNe6-lkT3GeL__TLg38IEkVmT9S9HFtL", "A great group!", "XXX")

bands.push(band1, band2, band3, band4)

// Array para guardar os objetos User
export const users = []

const user1 = new User("ricardo", "12345")
const user2 = new User("maria", "54321")
const user3 = new User("pedro", "15243")

users.push(user1, user2, user3)
