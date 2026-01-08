// A Singleton is a design pattern that ensures a class or a functional module has only one instance throughout the entire lifecycle of the application, 
// and provides a global point of access to that instance.
// class controls it's instantiation by itslef and consumer can't instantiate it (this can be achieve by making constructor private)
// a global public access of the instance will be given by using factory method 

export class Singleton{
    private static _instance: Singleton;
    private constructor(){}

    static get instance(): Singleton{
        if(!Singleton._instance){
            Singleton._instance = new Singleton();
         }
        return Singleton._instance;
    }
}