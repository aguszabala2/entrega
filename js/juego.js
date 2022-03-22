console.log('Bienvenido a tu travesía por las tierras de Eran!');

// Clases
class Race {
    constructor(id, type, atk, def, agi, int, char, life, city){
        this.id = id
        this.type = type
        this.atk = atk
        this.def = def
        this.agi = agi
        this.int = int
        this.car = char
        this.life = life
        this.city = city
    }
    entrenamiento(atk, def, agi, int){
        this.atk = this.atk + atk
        this.def = this.def + def
        this.agi = this.agi + agi
        this.int = this.int + int
        console.log(`Después de un arduo entrenamiento estos son tus nuevos niveles: ATK: ${this.atk}, DEF: ${this.def}, AGI: ${this.agi}, INT: ${this.int}`)
    }
    ataque(characterAtk, characterAgi, enemyDef){
        return (enemyLife) => enemyLife - ((characterAtk * (characterAgi * 1.25)) - (enemyDef * 2))
    }
}

class Enemy {
    constructor(id, name, atk, def, agi, int, life, level){
        this.id = id
        this.name = name
        this.atk = (level * 1.3) * atk;
        this.def = (level * 1.3) * def;
        this.agi = (level * 1.5) * agi;
        this.int = (level * 1.3) * int;
        this.life = (level * 3) * life;
        this.level = level;
    }
    ataque(enemyAtk, enemyLevel, characterDef){
        return (characterLife) => characterLife - ((enemyAtk * (enemyLevel * 1.25)) - (characterDef * 2.2))
    }
}

let character = new Race (0, 'Desconocido', 0, 0, 0, 0, 0, 0, 'Desconocido')
const human = new Race(1, 'Humano', 3, 3, 2, 2, 2, 50, 'Gardan');
const elf = new Race(2, 'Elfo', 2, 2, 3, 4, 1, 80, 'Eardel Da');
const dwarf = new Race(3, 'Enano', 5, 3, 1, 1, 2, 50, 'Babkhaz');
const races = [human, elf, dwarf];

// Comienzo de juego
const start = document.getElementById("start")
const story = document.getElementById("story")
let next = document.getElementById("next")
next.addEventListener("click", comienzoDeJuego)

// Funciones de elecciones
function comienzoDeJuego(){
    const mensaje1 = document.createElement("p");
    mensaje1.innerHTML = '<p id="mensaje1">Bienvenido! Ingresa tu nombre.</p><input id="enterName" type="text" value="nombre">';
    start.appendChild(mensaje1)

    next.innerText = 'Elegir nombre'

    next.removeEventListener("click", comienzoDeJuego)
    next.addEventListener("click", nombramiento)
    }

function nombramiento(){
    const input = document.getElementById("enterName")
    let name = input.value
    const story1 = document.createElement("p")
    story1.innerHTML = `<p>Qué tal ${name}! El camino que debes recorrer es largo hasta llegar a la Ciudad Imperial de Vaesh Nall. Aquí estamos en la ciudad de Conven, que se caracteriza por ser una ciudad a dónde se acercan muchos viajeros. Cuéntame... de dónde proviene tu linaje?</p>`
    
    story.appendChild(story1)
    const mensaje1 = document.getElementById("mensaje1")
    mensaje1.innerHTML = '<p>Elige tu raza indicando el número correspondiente.</p>'

    const opciones1 = document.createElement("p")
    opciones1.innerHTML = `<p id="opciones1">1. ${races[0].type}    2. ${races[1].type}    3. ${races[2].type}</p>`
    mensaje1.appendChild(opciones1)
    next.innerText = 'Elige tu raza'

    next.removeEventListener("click", nombramiento)
    next.addEventListener("click", elegirRaza)
    }

function elegirRaza(){
    const input = document.getElementById("enterName")
    let name = input.value
    if(name == "1"){
        character.atk = human.atk;
        character.def = human.def;
        character.agi = human.agi;
        character.int = human.int;
        character.char = human.char 
        character.life = human.life;
        character.type = human.type;
        character.city = human.city;
        
        const story2 = document.createElement("p")
        story2.innerHTML = '<p id="story2">Perfecto! Por tus pintas supuse que eras un humano, pero no quería arriesgar. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte.</p>'
        story.appendChild(story2)
        next.innerText = 'Elige tu estilo de personaje'

        next.removeEventListener("click", elegirRaza)
    }else if(name == "2"){
        character.atk = elf.atk;
        character.def = elf.def;
        character.agi = elf.agi;
        character.int = elf.int;
        character.char = elf.char;
        character.life = elf.life;
        character.type = elf.type;
        character.city = elf.city;

        const story2 = document.createElement("p")
        story2.innerHTML = '<p id="story2">Increíble. No he visto demasiados elfos en mi vida, porque ya no son tan habituales por estas tierras, pero me alegra que estés aquí. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte.</p>'
        story.appendChild(story2)
        next.innerText = 'Elige tu estilo de personaje'
        
        next.removeEventListener("click", elegirRaza)
    }else if(name == "3"){
        character.atk = dwarf.atk;
        character.def = dwarf.def;
        character.agi = dwarf.agi;
        character.int = dwarf.int;
        character.char = dwarf.char;
        character.life = dwarf.life;
        character.type = dwarf.type;
        character.city = dwarf.city;

        const story2 = document.createElement("p")
        story2.innerHTML = '<p id="story2">Por las barbas de Losir! Qué extraño ver a un enano por aquí, no suelen salir de las montañas, pero de todas formas, bienvenido. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte.</p>'
        story.appendChild(story2)
        next.innerText = 'Elige tu estilo de personaje'
        
        next.removeEventListener("click", elegirRaza)
    }else if(name != "1" && name != "2" && name != "3"){
        alert('Elige un número valido.')
    }
}
// console.log('*caminas un buen rato mirando el paisaje hasta que llegas a una llanura inmensa en dónde se están entrenando varios hombres y mujeres de todo tipo*');
// console.log('*Se acerca un hombre de mediana edad, robusto, armado con una espada* Qué tal? Qué hacen por aquí? No es común en estos días ver viajeros que quieran entrenar, todos se están yendo a las costas por las vacaciones. Disculpen! No me presente: soy Laudino, el Gobernador de Conven. Si has venido a entrenar, primero necesitaré que me digas cuál quisieras que fuera tu estilo.');

// const styles = [' 1. Fuerza bruta', ' 2. Perspicaz', ' 3. Cuidadoso']
// for(let i=0; i<=2; i++){
//     console.log(styles[i]);
// }
// // let optStyle = prompt('Elige tu estilo de personaje indicando el número correspondiente:')

// if(optStyle =='1'){
//     character.entrenamiento(3,1,1,0)
// }else if(optStyle =='2'){
//     character.entrenamiento(1,1,1,2)
// }else if(optStyle =='3'){
//     character.entrenamiento(0,2,2,1)
// }

// console.log('Y? Que te pareció el entrenamiento? No es mucho pero al menos te ayudará a salir sin estar tan desprotegido.');
// console.log('Ahora, para practicar vamos a entrenar con este Baradih de las llanuras.');
// console.log('*Laudino trae una especie de puercoespín que te mira desafiante, con ganas de atacarte*');
// console.log('Ahora pelearás contra este Skerel... Suerte!');

// let skerel = new Enemy (1, 'Skerel', 1, 2, 2, 1, 20, 1)
// const enemies = [skerel]
// let ataqueSkerel = character.ataque(character.atk, character.agi, skerel.def)

// let choice = prompt('Ingresa 1 para "Atacar" o 2 para "Huir"')