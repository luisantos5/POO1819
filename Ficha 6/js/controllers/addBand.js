import {addBand} from "../models/main.js"

const form = document.querySelector("#frmAddBand")

form.addEventListener("submit", function(event){
    const txtName = document.querySelector("#txtName").value
    const sltGenre = document.querySelector("#sltGenre").value
    const txtDescription = document.querySelector("#txtDescription").value
    const txtPhoto = document.querySelector("#txtPhoto").value
    const txtVideo = document.querySelector("#txtVideo").value

    addBand(txtName, sltGenre, txtDescription, txtPhoto, txtVideo)

    event.preventDefault()
})