class Rectangle {
    constructor(width, length){
        this.length = length
        this.width = width
    }
    area (){
        return `area ${this.length * this.width}`
    }
    perimeter (){
        return `perimeter ${(2*this.length) + (2*this.width) }`
    }
}
const rectangle = new Rectangle(5, 3)
console.log(rectangle.area())
console.log(rectangle.perimeter())

//================================================================================================================================
class Circle {
    static area (radius){
        return `area ${4 * 3.14 * radius * radius}`
    }
    static perimeter(radius){
        return `perimeter ${2 * 3.14 * radius}`
    }
}
console.log(Circle.area(6))
console.log(Circle.perimeter(7))