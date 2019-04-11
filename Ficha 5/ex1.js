class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
        this._color = "white"
    }

    get width() {
        return this._width
    }

    set width() {
        this._width = value 
    }


    get height() {
        return this._height
    }
    
    set height() {
        this._height = value
    }

    get color() {
        return this._color
    }

    
    getArea() {
        return this._width * this._height
    }

    getPerimeter() {
        return this._height * 2 + this._width * 2
    }


 }

 //Criar obj rect
 const newRectangle = new Rectangle(10, 5)
 const newRectangle2 = new Rectangle()

 //Imprimri prop e metodos para o obj
 console.log(newRectangle.width)
 console.log(newRectangle.height)
 console.log(newRectangle.color)
 console.log(newRectangle.getArea())
 console.log(newRectangle.getPerimeter())

 //Imprimir prop e obj do 2º rect
 console.log(newRectangle2.width)
 console.log(newRectangle2.height)
 console.log(newRectangle2.color)
 console.log(newRectangle2.getArea())
 console.log(newRectangle2.getPerimeter())