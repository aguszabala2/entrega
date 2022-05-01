// Clases

class Race {
    constructor(id, type, atk, def, agi, int, char, life, city){
        this.id = id
        this.type = type
        this.atk = atk
        this.def = def
        this.agi = agi
        this.int = int
        this.char = char
        this.life = life
        this.city = city
    }
    entrenamiento(atk, def, agi, int){
        this.atk = this.atk + atk
        this.def = this.def + def
        this.agi = this.agi + agi
        this.int = this.int + int
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

// Razas definidas

let character = new Race (0, 'Desconocido', 0, 0, 0, 0, 0, 0, 'Desconocido')
const human = new Race(1, 'Humano', 3, 3, 2, 2, 2, 50, 'Gardan');
const elf = new Race(2, 'Elfo', 2, 2, 3, 4, 1, 80, 'Eardel Da');
const dwarf = new Race(3, 'Enano', 5, 3, 1, 1, 2, 50, 'Babkhaz');
const races = [human, elf, dwarf];

export {character, human, elf, dwarf, races};