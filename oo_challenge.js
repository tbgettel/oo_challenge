    // Tyler Gettel 
    // Object Oriented Programming Challenge

//  PART ONE
    class Vehicle{
        constructor(make, model, year){
            this.make = make;
            this.model = model;
            this.year = year
        }
        honk(){
            return "BEEP";
        }
        toString(){
            return (`The vehicle is a ${this.make} ${this.model} from ${this.year}.`)
        }
    }

//  PART TWO
    class Car extends Vehicle{
        constructor(make,model,year){
            super(make,model,year);
            this.numWheels = 4;
        }

    }

//  PART THREE
    class Motorcycle extends Vehicle{
        constructor(make,model,year){
            super(make,model,year);
        this.numWheels = 2;
        }
        revEngine(){
            return "VROOM!";
        }
    }

//  PART FOUR
    class Garage{
        constructor(capacity){
            this.vehicles = [];
            this.capacity = capacity;

        }
        add(vehicle){
            if(!(vehicle instanceof Vehicle)){
                return "Only vehicles are allowed in here!";
            }
            if(this.vehicles.length >= this.capacity){
                return "Sorry, we're full.";
            }
            this.vehicles.push(vehicle);
            return "Added";
        }
    }
