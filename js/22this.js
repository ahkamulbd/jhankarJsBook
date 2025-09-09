// console.log (this);

/** =================== this in the method of Object ===================== */

const palyer = {
    name: 'Sakib',
    score: 100,
    showScore () {
        console.log (this.score);
    }
}
// console.log (palyer.showScore ());
// palyer.showScore ();

/** ======================= this in the Class =========================== */

class Player {
    constructor (name, level) {
        this.name = name;
        this.level = level;
    }
    showDetails () {
        console.log (this.name);
        console.log (this.level);
    }
}
const gamer = new Player ('Zak', 5);
gamer.showDetails ();