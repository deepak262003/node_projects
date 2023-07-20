class Pizza{
    constructor(flavour) {
        this.size = "medium";
        this.flavour = flavour;
       
    }

    setSize(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    bake() {
        console.log(`cooked ${this.size} sized ${this.flavour} pizza...`);
    }
   
}

class customPizza extends Pizza{
    constructor(flavour) {
        super(flavour);
        this.toppings = "onion";
        this.sprinkles = [];
    }

    setSprinkles(sprinkle) {
        this.sprinkles.push(sprinkles);
    }

    getSprinkles() {
        return this.sprinkles;
    }

    addToppings() {
        console.log(`${this.toppings} toppings added...`)
    }
}

const pizza = new customPizza("chicken");
pizza.addToppings();
pizza.bake();

