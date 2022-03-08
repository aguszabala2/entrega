console.log('Bienvenido a tu travesía por las tierras de Eran!');

const name = prompt('Elige tu nombre:')
class Race {
    constructor(id, type, atk, def, des, int, car, life, city){
        this.id = id
        this.type = type
        this.atk = atk
        this.def = def
        this.des = des
        this.int = int
        this.car = car
        this.life = life
        this.city = city
    }
    entrenamiento(atk, def, des, int){
        this.atk = this.atk + atk
        this.def = this.def + def
        this.des = this.des + des
        this.int = this.int + int
        console.log(`Después de un arduo entrenamiento estos son tus nuevos niveles: ATK: ${this.atk}, DEF: ${this.def}, DES: ${this.des}, INT: ${this.int}`)
    }
    ataque(characterAtk, characterDes, enemyDef){
        return (enemyLife) => enemyLife - ((characterAtk * (characterDes * 1.25)) - (enemyDef * 2))
    }
}

let character = new Race (0, 'Desconocido', 0, 0, 0, 0, 0, 0, 'Desconocido')
const human = new Race(1, 'Humano', 3, 3, 2, 2, 2, 50, 'Gardan');
const elf = new Race(2, 'Elfo', 2, 2, 3, 4, 1, 80, 'Eardel Da');
const dwarf = new Race(3, 'Enano', 5, 3, 1, 1, 2, 50, 'Babkhaz');

const races = [human, elf, dwarf];

console.log(`Qué tal ${name}! El camino que debes recorrer es largo hasta llegar a la Ciudad Imperial de Vaesh Nall. Aquí estamos en la ciudad de Conven, que se caracteriza por ser una ciudad a dónde se acercan muchos viajeros. Cuéntame... de dónde proviene tu linaje?`);
for(const race of races){
    console.log(race.id, race.type)
}

let optRace = prompt('Elige tu raza indicando el número correspondiente')

if(optRace == '1'){
    character.atk = human.atk;
    character.def = human.def;
    character.des = human.des;
    character.int = human.int;
    character.car = human.car 
    character.life = human.life;
    character.type = human.type;
    character.city = human.city;
    console.log('Perfecto! Por tus pintas supuse que eras un humano, pero no quería arriesgar. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte.');
}else if(optRace =='2'){
    character.atk = elf.atk;
    character.def = elf.def;
    character.des = elf.des;
    character.int = elf.int;
    character.car = elf.car;
    character.life = elf.life;
    character.type = elf.type;
    character.city = elf.city;
    console.log('Increíble. No he visto demasiados elfos en mi vida, porque ya no son tan habituales por estas tierras, pero me alegra que estés aquí. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte');
}else if(optRace =='3'){
    character.atk = dwarf.atk;
    character.def = dwarf.def;
    character.des = dwarf.des;
    character.int = dwarf.int;
    character.car = dwarf.car;
    character.life = dwarf.life;
    character.type = dwarf.type;
    character.city = dwarf.city;
    console.log('Por las barbas de Losir! Qué extraño ver a un enano por aquí, no suelen salir de las montañas, pero de todas formas, bienvenido. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte');
}

console.log('*caminas un buen rato mirando el paisaje hasta que llegas a una llanura inmensa en dónde se están entrenando varios hombres y mujeres de todo tipo*');
console.log('*Se acerca un hombre de mediana edad, robusto, armado con una espada* Qué tal? Qué hacen por aquí? No es común en estos días ver viajeros que quieran entrenar, todos se están yendo a las costas por las vacaciones. Disculpen! No me presente: soy Laudino, el Gobernador de Conven. Si has venido a entrenar, primero necesitaré que me digas cuál quisieras que fuera tu estilo.');

const styles = [' 1. Fuerza bruta', ' 2. Perspicaz', ' 3. Cuidadoso']
for(let i=0; i<=2; i++){
    console.log(styles[i]);
}
let optStyle = prompt('Elige tu estilo de personaje indicando el número correspondiente:')

if(optStyle =='1'){
    character.entrenamiento(3,1,1,0)
}else if(optStyle =='2'){
    character.entrenamiento(1,1,1,2)
}else if(optStyle =='3'){
    character.entrenamiento(0,2,2,1)
}

console.log('Y? Que te pareció el entrenamiento? No es mucho pero al menos te ayudará a salir sin estar tan desprotegido.');
console.log('Ahora, para practicar vamos a entrenar con este Baradih de las llanuras.');
console.log('*Laudino trae una especie de puercoespín que te mira desafiante, con ganas de atacarte*');
console.log('Ahora pelearás contra este Baradih... Suerte!');

class Enemy {
    constructor(id, name, atk, def, des, int, life, level){
        this.id = id
        this.name = name
        this.atk = (level * 1.3) * atk;
        this.def = (level * 1.3) * def;
        this.des = (level * 1.5) * des;
        this.int = (level * 1.3) * int;
        this.life = (level * 5) * life;
        this.level = level;
    }
}

let baradih = new Enemy (1, 'Baradih', 1, 2, 2, 1, 20, 1)

const enemies = [baradih]

let ataqueBaradih = character.ataque(character.atk, character.des, baradih.def)

console.log(`Atacaste al Baradih y ahora tiene LIFE: ${(ataqueBaradih(baradih.life))}`)