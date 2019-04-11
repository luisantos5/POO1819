const frmGame = document.querySelector("form")

frmGame.addEventListener("submit", function(event) {
    //verificar data
    let dateB = document.getElementById("dtB").value
    let currentDate = new Date().getDate
    if (currentDate - dateB < 18) {
        //detetar erro
        alert("Deve ter mais de 18 anos!!!")
    }


    //verifcar 3 opçaoes


    //verificar password
    let pass1 = document.getElementById("txtPass")
    let pass2 = document.getElementById("txtCPass")
    if (pass1 != pass2) {
        alert("As passwords não coincidem")
    }
    
    
    // alerts
    event.preventDefault()
} )




frmGame.addEventListener("submit", function(event) {
    const txtGameYear = document.querySelector("#txtGameYear").value
    const currentYear = new Date().getFullYear()

    if(txtGameYear > 1950 && txtGameYear <= currentYear) {
        alert("Validação OK")
        addGameTable()
        frmGame.reset()
    } else {
        alert("erro")
    }

    event.preventDefault()

})