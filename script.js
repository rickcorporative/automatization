class Figure {
    constructor(name, square, colour){
        this.name = name
        this.square = square
        this.colors = ['white', 'red', "green", 'black', 'purple']
        this.colour = this.colors[Math.round(Math.random()*4)]
        
    }

    draw(string){
        console.log("Figure is " + this.name + "; " + string + "; Square is " + this.square + "; Color is " + this.colour);
    }

    getSquare(){
        return this.square
    }

    getColour(){
        return this.colour
    }
}

class Square extends Figure{
    constructor(name, square, colour, sideLen){
        super(name, square, colour)
        this.sideLen = sideLen
    }

    getSideLen(){
        return "Length of side " + this.sideLen
    }
}


class Circle extends Figure{
    constructor(name, square, colour, radius){
        super(name, square, colour)
        this.radius = radius
    }

    getRadius(){
        return "Radius is " +this.radius
    }
}

class Triangle extends Figure{
    constructor(name, square, colour, hypo){
        super(name, square, colour)
        this.hypo = hypo
    }

    getHypo(){
        return "The hypo is " +this.hypo
    }
}

class Trap extends Figure{
    constructor(name, square, colour, height){
        super(name, square, colour)
        this.height = height
    }

    getHeight(){
        return "The height is " + this.height
    }
}

let qty = Math.round(Math.random()*20);

for(let i = 0; i < qty; i++){
    switch(Math.round(Math.random()*4)){
        case 1:{
            const mySq = new Square('Square', Math.round(Math.random()*500) , 'White' ,Math.round(Math.random()*20));
            mySq.draw(mySq.getSideLen())
            break;
        }
        case 2:{
            const myCr = new Circle('Circle', Math.round(Math.random()*500) , 'White' ,Math.round(Math.random()*20));
            myCr.draw(myCr.getRadius())
            break;
        }
        case 3:{
            const myTr = new Triangle('Triangle', Math.round(Math.random()*500) , 'White' ,Math.round(Math.random()*20));
            myTr.draw(myTr.getHypo())
            break;
        }
        case 4:{
            const myTrap = new Trap('Trapizia', Math.round(Math.random()*500) , 'White' ,Math.round(Math.random()*20));
            myTrap.draw(myTrap.getHeight())
            break;
        }
    }    
}
