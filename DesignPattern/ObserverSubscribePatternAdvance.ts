interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    getTemperature(): number;
    getHumidity(): number;
    getWindSpeed(): number;
}

interface Observer {
    updatedData(subjectObject:Subject)
}



class SubjectCreateion implements Subject {
    #temperature = 0;
    #humidity = 0;
    #windSpeed = 0;
    #observers =  new Set<Observer>()
     constructor(){
     }
     
    addObserver(observerObject:Observer){
        this.#observers.add(observerObject)
    }
    
    removeObserver(observerObject:Observer){
        this.#observers.delete(observerObject)
    }
    
    #notify(){
        this.#observers.forEach((observer)=>observer.updatedData(this))
    }
    
    setMeasurement(temp,humidity,windSpeed){
        this.#temperature = temp
        this.#humidity = humidity
        this.#windSpeed = windSpeed
        this.#notify()
    }
    
    getTemperature() { return this.#temperature; }
    getHumidity() { return this.#humidity; }
    getWindSpeed() { return this.#windSpeed; }
    
    
}


class MobileDisplay implements Observer {
    #temperature
    #subjectObject

     constructor(subjectObject){
         this.#subjectObject= subjectObject
         this.#subjectObject.addObserver(this)
     }
     
     updatedData(){
         this.#temperature = this.#subjectObject.getTemperature()
         this.display()
     }
     
     display(){
         console.info(this.#temperature)
     }
}

class TVDisplay implements Observer {
    #humidity
    #subjectObject
     constructor(subjectObject:Subject){
         this.#subjectObject= subjectObject
         this.#subjectObject.addObserver(this)
     }
     
     updatedData(){
         this.#humidity = this.#subjectObject.getHumidity()
         this.display()
     }
     
     display(){
         console.info(this.#humidity)
     }
}



class TabDisplay implements Observer {
    #windSpeed
    #subjectObject

     constructor(subjectObject){
         this.#subjectObject= subjectObject
         this.#subjectObject.addObserver(this)
     }
     
     updatedData(){
         this.#windSpeed = this.#subjectObject.getWindSpeed()
         this.display()
     }
     
     display(){
         console.info(this.#windSpeed)
     }
}

const subjectObject = new SubjectCreateion()

const mobileDisplay = new MobileDisplay(subjectObject)

const tVDisplay = new TVDisplay(subjectObject)
 
const  tabDisplay= new TabDisplay(subjectObject)

subjectObject.setMeasurement(10, 20,30)

