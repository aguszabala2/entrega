import { character, human, elf, dwarf, races } from "./modules/objects.js";

//Variables iniciales
const options = document.getElementById("options")
const start = document.getElementById("start")
const story = document.getElementById("story")
let next = document.getElementById("next")
next.addEventListener("click", comienzoDeJuego)

// Funciones de elecciones
function comienzoDeJuego(){
    const mensaje1 = document.createElement("p");
    mensaje1.innerHTML = '<p id="mensaje1">Bienvenido! Ingresa tu nombre</p><input id="enterName">'
    start.appendChild(mensaje1)

    // Renombro el boton para activar la segunda funcion
    next.innerText = 'Elegir nombre'

    // Habilito el boton para darle un nuevo funcionamiento
    next.removeEventListener("click", comienzoDeJuego)
    next.addEventListener("click", nombramiento)
    }

function nombramiento(){
    const input = document.getElementById("enterName")
    let name = input.value
    const story1 = document.createElement("p")
    story1.innerHTML = `<p>Qué tal ${name}! El camino que debes recorrer es largo hasta llegar a la Ciudad Imperial de Vaesh Nall. Aquí estamos en la ciudad de <b>Conven</b>, que se caracteriza por ser una ciudad a dónde se acercan muchos viajeros. Cuéntame... de dónde proviene tu linaje?</p>`
    story1.setAttribute("id", "story1")
    story.appendChild(story1)
    
    // Cambio el mensaje para que quede acorde a la segunda eleccion ofrecida
    const mensaje1 = document.getElementById("mensaje1")
    mensaje1.innerHTML = '<p>Elige tu raza indicando el número correspondiente.</p>'
    
    // Creo el texto que ofrece opciones
    const opciones1 = document.createElement("p")
    opciones1.innerHTML = `<p id="opciones1"><abbr title="Los Humanos son la raza más numerosa del mundo, tienen habilidades balanceadas y ocupan la mayoría de los cargos públicos.">1. ${races[0].type}</abbr>    2. ${races[1].type}    3. ${races[2].type}</p>`
    mensaje1.appendChild(opciones1)
    
    // Almacena el nombre en el storage para utilizarlo despues
    sessionStorage.setItem('Nombre', name)

    // Final de la funcion que da inicio a la funcion siguiente
    next.innerText = 'Elige tu raza'
    next.removeEventListener("click", nombramiento)
    next.addEventListener("click", elegirRaza)
    }

function elegirRaza(){
    const input = document.getElementById("enterName")
    let name = input.value
    
    // Segun la raza el personaje adquiere diferentes habilidades
    if(name == "1"){
        character.atk = human.atk;
        character.def = human.def;
        character.agi = human.agi;
        character.int = human.int;
        character.char = human.char 
        character.life = human.life;
        character.type = human.type;
        character.city = human.city;
        
        // Texto personalizado segun la raza elegida
        const story2 = document.createElement("p")
        story2.innerText = 'Perfecto! Por tus pintas supuse que eras un humano, pero no quería arriesgar. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte.'
        story.appendChild(story2)
        story2.setAttribute('id', 'story2')

        // Texto para continuar la historia
        const story3 = document.createElement("p")
        story3.innerHTML = '<em>*Se acerca un hombre de mediana edad, robusto, armado con una espada*</em> Qué tal? Qué hacen por aquí? No es común en estos días ver viajeros que quieran entrenar, todos se están yendo a las costas por las vacaciones. Disculpen! No me presente: soy <b>Laudino, el Gobernador de Conven</b>. Si has venido a entrenar, primero necesitaré que me digas cuál quisieras que fuera tu estilo.'
        story.appendChild(story3)

        // Cambio de mensaje de eleccion
        const mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = '<p>Elige qué tipo de estilo de pelea quieres entrenar indicando el número correspondiente.</p>'

        // Cambio de opciones
        const opciones1 = document.createElement("p")
        opciones1.innerHTML = '<p id="opciones1">1. Fuerza Bruta   2. Perspicaz   3. Cuidadoso</p>'
        mensaje1.appendChild(opciones1)

        // Muestreo de habilidades del personaje
        const personaje = document.createElement("div")
        personaje.innerHTML = `<p><b>Atributos:</b></p><p>Ataque: <small><em>${character.atk}</em></small></p><p>Defensa: <small><em>${character.def}</em></small></p><p>Agilidad: <small><em>${character.agi}</em></small></p><p>Inteligencia: <small><em>${character.int}</em></small></p><p>Carisma: <small><em>${character.char}</em></small></p><p>Vida: <small><em>${character.life}</em></small></p>`
        personaje.setAttribute("id", "personaje")
        options.appendChild(personaje)

        // Almacena la raza en el storage para utilizarla despues
        sessionStorage.setItem('Raza', 'Humano')

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu estilo de personaje'
        next.removeEventListener("click", elegirRaza)
        next.addEventListener("click", elegirEstilo)
    }else if(name == "2"){
        character.atk = elf.atk;
        character.def = elf.def;
        character.agi = elf.agi;
        character.int = elf.int;
        character.char = elf.char;
        character.life = elf.life;
        character.type = elf.type;
        character.city = elf.city;

        // Texto personalizado segun la raza elegida
        const story2 = document.createElement("p")
        story2.innerText = 'Increíble. No he visto demasiados elfos en mi vida, porque ya no son tan habituales por estas tierras, pero me alegra que estés aquí. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte.'
        story.appendChild(story2)
        story2.setAttribute('id', 'story2')

        // Texto para continuar la historia
        const story3 = document.createElement("p")
        story3.innerHTML = '<em>*Se acerca un hombre de mediana edad, robusto, armado con una espada*</em> Qué tal? Qué hacen por aquí? No es común en estos días ver viajeros que quieran entrenar, todos se están yendo a las costas por las vacaciones. Disculpen! No me presente: soy <b>Laudino, el Gobernador de Conven</b>. Si has venido a entrenar, primero necesitaré que me digas cuál quisieras que fuera tu estilo.'
        story.appendChild(story3)

        // Cambio de mensaje de eleccion
        const mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = '<p>Elige qué tipo de estilo de pelea quieres entrenar indicando el número correspondiente.</p>'

        // Cambio de opciones
        const opciones1 = document.createElement("p")
        opciones1.innerHTML = '<p id="opciones1">1. Fuerza Bruta   2. Perspicaz   3. Cuidadoso</p>'
        mensaje1.appendChild(opciones1)

        // Muestreo de habilidades del personaje
        const options = document.getElementById("options")
        const personaje = document.createElement("div")
        personaje.innerHTML = `<p><b>Atributos:</b></p><p>Ataque: <small><em>${character.atk}</em></small></p><p>Defensa: <small><em>${character.def}</em></small></p><p>Agilidad: <small><em>${character.agi}</em></small></p><p>Inteligencia: <small><em>${character.int}</em></small></p><p>Carisma: <small><em>${character.char}</em></small></p><p>Vida: <small><em>${character.life}</em></small></p>`
        personaje.setAttribute("id", "personaje")
        options.appendChild(personaje)

        // Almacena la raza en el storage para utilizarla despues
        sessionStorage.setItem('Raza', 'Elfo')

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu estilo de personaje'
        next.removeEventListener("click", elegirRaza)
        next.addEventListener("click", elegirEstilo)
    }else if(name == "3"){
        character.atk = dwarf.atk;
        character.def = dwarf.def;
        character.agi = dwarf.agi;
        character.int = dwarf.int;
        character.char = dwarf.char;
        character.life = dwarf.life;
        character.type = dwarf.type;
        character.city = dwarf.city;

        // Texto personalizado segun la raza elegida
        const story2 = document.createElement("p")
        story2.innerText = 'Por las barbas de Losir! Qué extraño ver a un enano por aquí, no suelen salir de las montañas, pero de todas formas, bienvenido. Deberíamos ir hacia el Campo de Entrenamiento para que elijas en qué quieres perfeccionarte.'
        story.appendChild(story2)
        story2.setAttribute('id', 'story2')
        
        // Texto para continuar la historia
        const story3 = document.createElement("p")
        story3.innerHTML = '<em>*Se acerca un hombre de mediana edad, robusto, armado con una espada*</em> Qué tal? Qué hacen por aquí? No es común en estos días ver viajeros que quieran entrenar, todos se están yendo a las costas por las vacaciones. Disculpen! No me presente: soy <b>Laudino, el Gobernador de Conven</b>. Si has venido a entrenar, primero necesitaré que me digas cuál quisieras que fuera tu estilo.'
        story.appendChild(story3)
        
        // Cambio de mensaje de eleccion
        const mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = '<p>Elige qué tipo de estilo de pelea quieres entrenar indicando el número correspondiente.</p>'

        // Cambio de opciones
        const opciones1 = document.createElement("p")
        opciones1.innerHTML = '<p id="opciones1">1. Fuerza Bruta   2. Perspicaz   3. Cuidadoso</p>'
        mensaje1.appendChild(opciones1)
        
        // Muestreo de habilidades del personaje
        const options = document.getElementById("options")
        const personaje = document.createElement("div")
        personaje.innerHTML = `<p><b>Atributos:</b></p><p>Ataque: <small><em>${character.atk}</em></small></p><p>Defensa: <small><em>${character.def}</em></small></p><p>Agilidad: <small><em>${character.agi}</em></small></p><p>Inteligencia: <small><em>${character.int}</em></small></p><p>Carisma: <small><em>${character.char}</em></small></p><p>Vida: <small><em>${character.life}</em></small></p>`
        personaje.setAttribute("id", "personaje")
        options.appendChild(personaje)

        // Almacena la raza en el storage para utilizarla despues
        sessionStorage.setItem('Raza', 'Enano')

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu estilo de personaje'
        next.removeEventListener("click", elegirRaza)
        next.addEventListener("click", elegirEstilo)
    }else if(name != "1" && name != "2" && name != "3"){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingresa un número válido',
        })
    }
}

function elegirEstilo(){
    const input = document.getElementById("enterName")
    let style = input.value

    // Segun el estilo elegido cambian los atributos
    if(style == "1"){
        character.entrenamiento(3,1,1,0)

        // Resultados del entrenamiento
        const resultados = document.createElement("p")
        resultados.innerText = 'Ataque +3 | Defensa +1 | Agilidad +1'
        resultados.setAttribute("class", "resultados")
        story.appendChild(resultados)
        
        // Texto de victoria en entrenamiento
        const story4 = document.createElement("div")
        story4.innerHTML = '<p>Increíble! Como verás, no es demasiado, pero este entrenamiento básico te ayudará a sobrellevar tus futuras aventuras. Si quieres probarte en batalla, te aconsejo que salgas de la ciudad hacia las <b>Llanuras de Barnger</b>, allí encontrarás varias bestias a las que podrás hacerles frente. Si crees que no lo necesitas puedes dirigirte hacia la <b>Tienda de Goldgard</b> y aprovisionarte de lo necesario para comenzar tu viaje. Que tengas buena suerte!</p><p><em>*Laudino se da la vuelta y camina hacia una pareja de jóvenes indicándoles como empuñar una espada*</em></p>' 
        story.appendChild(story4)

        // Muestreo de habilidades del personaje
        const personaje = document.getElementById("personaje")
        personaje.innerHTML = `<p><b>Atributos:</b></p><p>Ataque: <small><em>${character.atk}</em></small></p><p>Defensa: <small><em>${character.def}</em></small></p><p>Agilidad: <small><em>${character.agi}</em></small></p><p>Inteligencia: <small><em>${character.int}</em></small></p><p>Carisma: <small><em>${character.char}</em></small></p><p>Vida: <small><em>${character.life}</em></small></p>`

        // Cambio de mensaje de eleccion
        const mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = '<p>Elige a dónde quieres ir indicando el número correspondiente.</p>'

        // Cambio de opciones
        const opciones1 = document.createElement("p")
        opciones1.innerHTML = '<p id="opciones1">1. Llanuras de Barnger   2. Tienda de Goldgard</p>'
        mensaje1.appendChild(opciones1)

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu camino'
        next.removeEventListener("click", elegirEstilo)
        next.addEventListener("click", primerDestino)
    }else if(style == "2"){
        character.entrenamiento(1,1,1,2)

        // Resultados del entrenamiento
        const resultados = document.createElement("p")
        resultados.innerText = 'Ataque +1 | Defensa +1 | Agilidad +1 | Inteligencia +2'
        resultados.setAttribute("class", "resultados")
        story.appendChild(resultados)
        
        // Texto de victoria en entrenamiento
        const story4 = document.createElement("div")
        story4.innerHTML = '<p>Increíble! Como verás, no es demasiado, pero este entrenamiento básico te ayudará a sobrellevar tus futuras aventuras. Si quieres probarte en batalla, te aconsejo que salgas de la ciudad hacia las <b>Llanuras de Barnger</b>, allí encontrarás varias bestias a las que podrás hacerles frente. Si crees que no lo necesitas puedes dirigirte hacia la <b>Tienda de Goldgard</b> y aprovisionarte de lo necesario para comenzar tu viaje. Que tengas buena suerte!</p><p><em>*Laudino se da la vuelta y camina hacia una pareja de jóvenes indicándoles como empuñar una espada*</em></p>' 
        story.appendChild(story4)

        // Muestreo de habilidades del personaje
        const personaje = document.getElementById("personaje")
        personaje.innerHTML = `<p><b>Atributos:</b></p><p>Ataque: <small><em>${character.atk}</em></small></p><p>Defensa: <small><em>${character.def}</em></small></p><p>Agilidad: <small><em>${character.agi}</em></small></p><p>Inteligencia: <small><em>${character.int}</em></small></p><p>Carisma: <small><em>${character.char}</em></small></p><p>Vida: <small><em>${character.life}</em></small></p>`

        // Cambio de mensaje de eleccion
        const mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = '<p>Elige a dónde quieres ir indicando el número correspondiente.</p>'

        // Cambio de opciones
        const opciones1 = document.createElement("p")
        opciones1.innerHTML = '<p id="opciones1">1. Llanuras de Barnger   2. Tienda de Goldgard</p>'
        mensaje1.appendChild(opciones1)

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu camino'
        next.removeEventListener("click", elegirEstilo)
        next.addEventListener("click", primerDestino)
    }else if(style == "3"){
        character.entrenamiento(0,2,2,1)

        // Resultados del entrenamiento
        const resultados = document.createElement("p")
        resultados.innerText = 'Defensa +2 | Agilidad +2 | Inteligencia +1'
        resultados.setAttribute("class", "resultados")
        story.appendChild(resultados)
        
        // Texto de victoria en entrenamiento
        const story4 = document.createElement("div")
        story4.innerHTML = '<p>Increíble! Como verás, no es demasiado, pero este entrenamiento básico te ayudará a sobrellevar tus futuras aventuras. Si quieres probarte en batalla, te aconsejo que salgas de la ciudad hacia las <b>Llanuras de Barnger</b>, allí encontrarás varias bestias a las que podrás hacerles frente. Si crees que no lo necesitas puedes dirigirte hacia la <b>Tienda de Goldgard</b> y aprovisionarte de lo necesario para comenzar tu viaje. Que tengas buena suerte!</p><p><em>*Laudino se da la vuelta y camina hacia una pareja de jóvenes indicándoles como empuñar una espada*</em></p>' 
        story.appendChild(story4)

        // Muestreo de habilidades del personaje
        const personaje = document.getElementById("personaje")
        personaje.innerHTML = `<p><b>Atributos:</b></p><p>Ataque: <small><em>${character.atk}</em></small></p><p>Defensa: <small><em>${character.def}</em></small></p><p>Agilidad: <small><em>${character.agi}</em></small></p><p>Inteligencia: <small><em>${character.int}</em></small></p><p>Carisma: <small><em>${character.char}</em></small></p><p>Vida: <small><em>${character.life}</em></small></p>`

        // Cambio de mensaje de eleccion
        const mensaje1 = document.getElementById("mensaje1")
        mensaje1.innerHTML = '<p>Elige a dónde quieres ir indicando el número correspondiente.</p>'

        // Cambio de opciones
        const opciones1 = document.createElement("p")
        opciones1.innerHTML = '<p id="opciones1">1. Llanuras de Barnger   2. Tienda de Goldgard</p>'
        mensaje1.appendChild(opciones1)

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu camino'
        next.removeEventListener("click", elegirEstilo)
        next.addEventListener("click", primerDestino)
    }else if(style != "1" && style != "2" && style != "3"){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingresa un número válido',
        })
    }
}

function primerDestino(){
    const input = document.getElementById("enterName")
    let destino = input.value

    if(destino == "1"){
        
    }else if(destino == "2"){
        story.innerText = '' 
        const story5 = document.createElement("div")
        story5.innerHTML = '<p>Muy buenos días. Espero se encuentre muy bien. Aquí tenemos las mejores opciones para los viajeros que decidan emprender su viaje. Por favor, pasen y vean nuestros productos. Siempre recomiendo a los viajeros primerizos que se lleven una buena poción de vida.</p>' 
        story.appendChild(story5)

        // Trae los datos de los elementos de la Tienda ubicados en el .json
        fetch("../data/shop.json")
            .then( (res) => res.json())
            .then( (data) => {
                data.forEach( (prod) => {
                
                // Añade los productos al DOM
                const products = document.createElement("p")
                products.innerHTML = `<b>${prod.Id}. ${prod.Producto}</b> ${prod.Precio}
                                    <p id="description">${prod.Descripcion}</p>`
                products.setAttribute("id", "products")
                story.appendChild(products)
                });
            })
    }else if(destino != "1" && destino != "2"){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingresa un número válido',
        })
    }
}