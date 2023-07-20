class User {
    constructor(first, last, credit) { //default method that is always called implicitly
        this.first = first;
        this.last = last;
        this.credit = credit;
    }
    getFullName(){
        return `${this.first +this.last}`;
    }
    setFullName(name) {
        const nameN = name.split(' ');
        console.log(nameN);
    }
}

const rock = new User('rock', 'Jack', 60);
const karthik = new User();
console.log(karthik);
rock.setFullName("karthik Aryan")
console.log(rock.getFullName());