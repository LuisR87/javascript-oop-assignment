// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#
 class Car{
    constructor(Make, Model, Year, Color){
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
        this.Color = Color;
    }

    getMake(){
        return this.Make;
    }

    getModel(){
        return this.Model;
    }

    getYear(){
        return this.Year;
    }

    getColor(){
        return this.Color;
    }
 }