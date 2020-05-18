// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height){
        this.length = length
        this.height = height
        this.width = width
    }
    volume() {
        return this.length * this.height * this.width
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const cuboid = new CuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("class volume: " + cuboid.volume()); // 100
console.log("class surfaceArea: " + cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length) {
        super(length)
    }
    volume() {
        return Math.pow(this.length, 3)
    }
    surfaceArea() {
        return 6 * Math.pow(this.length, 2)
    }
}

const cube = new CubeMaker(4)

console.log("volume of cube: " + cube.volume())
console.log("surface area of a cube: " + cube.surfaceArea())