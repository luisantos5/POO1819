somaimp(9,12) //11
somaimp(1,6) //8 


function somaimp(num1, num2) {
    let soma = 0
    if (num1 > num2) {
        for (let i = num2 + 1; i <= num1; i++) {
            console.log(i)
            if (i % 2 != 0) {
            soma += i
            }
            console.log(soma)
        }
    }
    else {
        for (let i = num1 + 1; i <= num2; i++) {
        console.log(i)
        if (i % 2 != 0) {
            soma += i
        }
        
    }
    alert(soma)
    }
    
}


