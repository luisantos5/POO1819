class Car {
    constructor(brand, plate, color, anuald, typecomb) {
        this.brand = brand
        this.plate = plate
        this.color = color
        this.anuald = anuald
        this.typecomb = typecomb
    }

    setColor(newColor) {
        this.color = newColor
    }

    refuel(liters) {
        this.anuald += liters
    }

    /**
     * 
     * @param {number} kms  nº km percorridos
     * 
     */
    drive(kms) {
        const liters = kms * 5/100
        this.anuald -= liters 
    }


    /* get width() {
        return this._width
    }

    set width() {
        this._width = value 
    } */

    /* get brand() {
        return this._brand
    }

    set brand() {
        this._brand = brand
    }

    get plate() {
        return this._plate
    }

    set plate() {
        this._plate = plate
    }

    get color(){
        return this._color
    }
    
    set color() {
        this._color = color
    }

    get anuald() {
        return this._anuald
    }
    set anuald() {
        this._anuald = anuald
    }

    get typecomb() {
        return this._typecomb
    }
    set typecomb() {
        this._typecomb = typecomb
    } */

}

//Criar novos carros
/* 
const newRectangle = new Rectangle(10, 5) */
const car1 = new Car("Ford", "91-GH-15", "verde", 40, "Gasóleo")
const car2 = new Car("Opel", "23-AB*23", "branco", 50, "Gasolina")
const car3 = new Car("Nissan", "12-CX-45", "preto", 22, "Gasóleo")

console.log(car1)

