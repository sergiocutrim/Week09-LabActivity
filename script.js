/*----------Q1*--------------*/

function Player(name){
    this.name = name;
    this.point = 0;
    this.level = 1;
}

Player.prototype.gainXp = function(xp) {
    this.point += xp;
    while (this.point >= 10) {
        this.point -= 10;
        this.level += 1;
    }
};

Player.prototype.describe = function() {
    return `${this.name} is level ${this.level} with ${this.point} experience points`;
};


let player1 = new Player('Sergio');
player1.gainXp(5);
console.log(player1.describe());
player1.gainXp(5);
console.log(player1.describe());
player1.gainXp(5);
let player2 = new Player('Cutrim');
player2.gainXp(9);
console.log(player2.describe());
player2.gainXp(1);
console.log(player2.describe());




/*--------------------------------Q2------------------------------*/
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

viewData() {
    console.log(`User ${this.name} with email ${this.email} is viewing website data.`);
    }
}


const user1 = new User('Sergio', '200579843@student.georgiac.on.ca');
user1.viewData();

/*------------------------------------Q3-----------------------------*/


class Admin extends User {
    editData() {
        console.log(`Admin ${this.name} is editing website data.`);
    }
}
const admin1 = new Admin('Sergio', 'bob@college.edu');
admin1.viewData();
admin1.editData();
