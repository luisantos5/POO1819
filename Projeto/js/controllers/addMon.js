import {addMon} from "../models/main.js"

const form = document.querySelector("#frmAddMon")

form.addEventListener("submit", function(event){
    const txtName = document.querySelector("#txtName").value
    const sltGenre = document.querySelector("#sltGenre").value
    const txtDescription = document.querySelector("#txtDescription").value
    const txtPhoto = document.querySelector("#txtPhoto").value
    

    //addBand(txtName, sltGenre, txtDescription, txtPhoto, txtVideo)
    addMon(txtName,sltGenre,txtDescription, txtPhoto)

    event.preventDefault()
})