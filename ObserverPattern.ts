interface Observer {
    updateInfo();
}
interface SubjectInterface {
    addObserver(observer:Observer);
    removeObserver(observer:Observer);
    notify();
}

interface Observer {
    updateInfo();
}


class SubjectClass implements SubjectInterface {
    private observers: Observer[] = [];
    addObserver(observerObject){
        
        this.observers.push(observerObject)
    }
    
    removeObserver(observerObject){
        this.observers = this.observers.filter(observer=>observer !=observerObject)
    }
    
    notify(){
        this.observers.forEach(observer=>observer.updateInfo())
    }
}



class MobileDisplyUpdate implements Observer{
    updateInfo(){
        console.log("Mobile Info Updated")
    }
}

class TVDisplyUpdate implements Observer{
    updateInfo(){
        console.log("TV info Updated")
    }
}




const subjectClassObject= new SubjectClass()
const mobileDisplay = new MobileDisplyUpdate()
const tvDisplay = new TVDisplyUpdate()
subjectClassObject.addObserver(mobileDisplay)
subjectClassObject.addObserver(tvDisplay)
subjectClassObject.notify()
subjectClassObject.removeObserver(mobileDisplay)
subjectClassObject.notify()
