// creating class
// class Abc {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }
// }

// uses of this keyword

// class Car {
// //   name = "abc";
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }


// constructor

// class Abc {

//     constructor(parameters) {
//         this.property = parameters;
//         this.name = parameters
//     }
//     constructor() {
//         this.property = parameters;
//         this.name = parameters
//     }


// }

// creating object

// class Student{
//     constructor(){
//         this.name= "kaushal";
//         this.roll = 24;
//     }

// }

// let std1 = new Student()
// let std2 = new Student()
// let std3 = new Student()


// class object with methods
// class Student{
//     constructor(){
//         this.name= "kaushal";
//         this.roll = 24;
//     }

//     getDetails(){
//         console.log(this.name);
//         console.log(this.roll);
        
//     }

//     setDetails(name,roll){
//         this.name = name;
//         this.roll=roll
//     }

// }


// var obj1 = new Student();
// console.log(obj1.getDetails());
// console.log(obj1.setDetails("Beauty",25));
// console.log(obj1.getDetails());


//  Inheritance


// class Parent{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getParentDetails(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }



// class Child extends Parent {

//     constructor(name,age,roll){
//         super(name,age)
//         this.roll =roll
        
//     }


//     print(){
//         console.log("This is Child");
//         super.getParentDetails()
//     }
// }

// let c1 = new Child("asdf",99,23);
// c1.getParentDetails()
// c1.print()




// class Calculate{

//     multiply(a,b){
//         return a*b;
//     }

// }



// class Sum extends Calculate {
//     sum(a,b){
//         return a+b;
//     }

//     multiply(a,b){
//       let ans =  super.multiply(a,b)
//        console.log("This is child method");
//        return ans
//     }
// }


// let obj1 = new Sum();



// console.log( "sum of two number : ", obj1.sum(8,9));
// console.log( "mul of two number : ", obj1.multiply(8,9));



// ProtoType


// let obj ={
//     a:"23",
//     b:24
// };


// obj.__proto___ = function name(){
//     console.log("this is name");
// }


// get and set

// class Car {
//     constructor(name) {
//       this._name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(newName) {
//       this._name = newName;
//     }

//     printData(){
//         console.log(this._name);
//     }

//     setName(newName){
//         this._name = newName;
//     }

//   }
  
//   const car1 = new Car('BMW');
//   console.log(car1.name); // Output: BMW
//   car1.name = 'Audi';
//   console.log(car1.name); // Output: Audi



// car1.printData();
// car1.printData();
// car1.setName("Maruti")



// static 

class Car {
 
  static printSome(){
    console.log("this is oops classes");
  }

   printSome2(){
    console.log("this is oops ");
  }

}

let car1 = new Car()

car1.printSome2();

Car.printSome()