// A Singleton is a design pattern that ensures a class or a functional module has only one instance throughout the entire lifecycle of the application, 
// and provides a global point of access to that instance.
// class controls it's instantiation by itslef and consumer can't instantiate it (this can be achieve by making constructor private)
// a global public access of the instance will be given by using factory method 


// Below is the class level implementation of Singleton pattern
// export class Singleton{
//     private static _instance: Singleton;
//     private constructor(){}

//     static get instance(): Singleton{
//         if(!Singleton._instance){
//             Singleton._instance = new Singleton();
//          }
//         return Singleton._instance;
//     }
// }

// In frontend codebase, ESM module are preferd for enforcing Singleton pattern
// Important:
//ES modules execute once

// Exports are cached

// Imports are live references

// data is Module scope, ie. private shared state

// JS engine builds module graph

// Each module is evaluated once

// Results are cached

// All future imports reuse the cache

// So we can simply export new Singleton() and avoid using static getter to access instance


export const Singleton = {
    value: 1
}
