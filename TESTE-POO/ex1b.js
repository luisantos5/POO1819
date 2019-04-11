gastovg(50,'GASÓLEO') //4.55
gastovg(320, 'GASOLINA') //31.2

//km - distancia    tc - tipo de combustivel
function gastovg(km, tc) {
    //consumo (6.5L/100) = 0.065/1

    const consumo = 0.065
    //O nº litros (numl) vai ser calculado km * consumo
    let numl = km * consumo
    //o custo : nº litros * custo/L
    if (tc == 'GASÓLEO') {
        let custo = numl * 1.4
        //para obter apenas resultados com 2 c.d.
        custo2 = custo.toFixed(2)
        alert(custo2 + " €")
    }
    else{
        let custo = numl * 1.5
        //para obter apenas resultados com 2 c.d.
        custo2 = custo.toFixed(2)
        alert(custo2 + " €")
    }
     


}