import { character, human, elf, dwarf, races } from "./modules/objects.js";

//Variables iniciales
const options = document.getElementById("options")
const start = document.getElementById("start")
const story = document.getElementById("story")
let next = document.getElementById("next")
next.addEventListener("click", comienzoDeJuego)

// Funciones de elecciones
function comienzoDeJuego(){
    const msg1 = document.createElement("p");
    msg1.innerHTML = '<p id="msg1">Ingresa tu nombre</p><input id="enterName">'
    start.appendChild(msg1)

    // Renombro el boton para activar la funcion
    next.innerText = 'Elegir nombre'

    // Habilito el boton para darle un nuevo funcionamiento
    next.removeEventListener("click", comienzoDeJuego)
    next.addEventListener("click", nombramiento)
    }

function nombramiento(){
    const input = document.getElementById("enterName")
    let name = input.value
    const init = document.createElement("div")
    init.innerHTML = `<p>¡Bienvenido ${name}! En todas las ciudades y pueblos se comenta que en la intimidad del Vaesh Nall —el imponente Palacio Real— el rey Vyncent piensa en abdicar al trono para casarse con su consejera, Sabel Paine.</p><p>Se comenta que tanto sus hijos como algunos Señores de las Altas Ciudades pretenden la Corona y estarían dispuestos a actuar ahora mismo.</p>
    <p>Tú... <strong>¿estás listo para ver qué papel tienes en este conflicto?</strong></p>`
    init.setAttribute("id", "init")
    story.appendChild(init)
    
    // Cambio el mensaje para que quede acorde a la eleccion ofrecida
    const msg1 = document.getElementById("msg1")
    msg1.innerHTML = '<p>Elige tu raza indicando el número correspondiente.</p>'
    
    // Creo el texto que ofrece opciones
    const options1 = document.createElement("p")
    options1.innerHTML = `<p id="options1"><abbr title="Los Humanos son la raza más numerosa del mundo, tienen habilidades balanceadas y ocupan la mayoría de los cargos públicos.">1. ${races[0].type}</abbr>    <abbr title="Los Elfos son criaturas tribales muy inteligentes y habilidosas, viven integradas a los Humanos en las grandes ciudades. Tienen habilidades orientadas a la inteligencia y a la vitalidad.">2. ${races[1].type}</abbr>    <abbr title="Los Enanos, a pesar de su baja estatura, son feroces guerreros e increíbles constructores. Sus habilidades de combate son extraordinarias.">3. ${races[2].type}</abbr></p>`
    msg1.appendChild(options1)
    
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
        
        // Cambia el background
        const background = document.getElementById("background")
        background.classList.remove("normalBackground")
        background.setAttribute('class', 'humanBackground')

        // Texto personalizado segun la raza elegida
        const human1 = document.createElement("div")
        human1.innerHTML = '<p><em>*Te despiertas y ves las casas rústicas de madera a tu alrededor. Un señor fornido, con bigote, se acerca hacia tí haciéndote señas amistosas con el brazo*</em></p><p><strong>Desconocido:</strong> ¡Qué tal, joven! Veo que estás un poco perdido... Soy <strong>Tomdeb</strong>, el alcalde de este pequeño pueblo de humanos llamado <strong>Forlonde</strong>. Como verás no tenemos demasiadas instalaciones, pero puedo guiarte para que des tus primeros pasos aquí.</p>'
        story.appendChild(human1)
        human1.setAttribute('id', 'human1')

        setTimeout(() => {
            const human2 = document.createElement("div")
            human2.innerHTML = '<p><em>*Comienzas a caminar tranquilamente siguiendo a Tomdeb*</em></p><p><strong>Tomdeb:</strong> ¿Qué deseas hacer primero? Imagino que tu primer objetivo es llegar hasta <strong>Gosa</strong>, en el centro del continente, en donde se están juntando las personas más importantes del Imperio pero primero hay un largo camino que recorrer.</p><p>Si tu deseo es <strong class="choices">ser un valeroso guerrero y dejar tu nombre escrito en la historia, podemos visitar a Anders</strong>, un militar retirado de este pueblo, para que te ayude con tu entrenamiento; <strong class="choices">si por el contrario deseas influir en las decisiones políticas que guían nuestra vida, deberías ir con Laserie</strong>, mi consejera, que sirvió fielmente al rey Fingaldor, padre del Rey Vyncent, hasta su muerte.</p>'
            story.appendChild(human2)
            human2.setAttribute('id', 'human2')

            // Cambio de mensaje de eleccion
            const msg1 = document.getElementById("msg1")
            msg1.innerHTML = '<p>Elige qué camino deseas tomar indicando el número correspondiente.</p>'

            // Cambio de opciones
            const options1 = document.createElement("p")
            options1.innerText = '1. Anders   2. Laserie'
            msg1.appendChild(options1)
            options1.setAttribute('id', 'options1')
        }, 3000);

        // Muestreo de habilidades del personaje
        const cha = document.createElement("div")
        cha.innerHTML = `<button id="toggle">Atributos</button><ul id="skills" style="display: none"><li>Ataque:<small> ${character.atk}</small></li><li>Defensa:<small> ${character.def}</small></li><li>Agilidad:<small> ${character.agi}</small></li><li>Inteligencia:<small> ${character.int}</small></li><li>Carisma:<small> ${character.char}</small></li><li>Vida:<small> ${character.life}</small></li></ul>`
        cha.setAttribute("id", "skillsList")
        options.appendChild(cha)
        
        // Mostrar u ocultar Atributos
        const toggle = document.getElementById("toggle")
        const skills = document.getElementById("skills")
        toggle.addEventListener("click", abrirAtributos);
        function abrirAtributos(){
            if (skills.style.display === "none") {
                skills.style.display = "block"
            } else{
                skills.style.display = "none"
            }    
        }   

        // Almacena la raza en el storage para utilizarla despues
        sessionStorage.setItem('Raza', 'Humano')

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu camino'
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

        // Cambia el background
        const background = document.getElementById("background")
        background.classList.remove("normalBackground")
        background.setAttribute('class', 'elfBackground')

        // Texto personalizado segun la raza elegida
        const elf1 = document.createElement("div")
        elf1.innerHTML = '<p><em>*Te levantas por el ruido de los pájaros a tu alrededor, y mientras te desperezas sobre el césped un elfo de gran altura, blanco, vestido con una toga impoluta, te mira con seriedad. Mientras te pones de pie, el elfo se acomoda el largo cabello blanco y comienza a hablarte*</em></p><p><strong>Desconocido:</strong> Buenos días, joven. Yo soy <strong>Indingor</strong>, y soy uno de los líderes de este pequeño pueblo llamado <strong>Dorwine</strong>. Como podrás adivinar el pueblo está un poco alborotado por los sucesos que comienzan a desarrollarse alrededor del <strong>Vaesh Nall</strong>.</p>'
        story.appendChild(elf1)
        elf1.setAttribute('id', 'elf1')

        setTimeout(() => {
            const elf2 = document.createElement("div")
            elf2.innerHTML = '<p><em>*Indingor te hace un gesto con la mano para que lo acompañes en su caminata*</em></p><p><strong>Indingor:</strong> Nuestro pueblo es pequeño y por eso aún estamos debatiendo si nos uniremos a algún Alto Señor o a algún hijo del Rey Vyncent. Por mí parte, preferiría que apoyaramos al <strong>Alto Señor Neremyn</strong> de <strong>Ael Serine</strong>, ya que es el único que siempre apoyó a los elfos en todas nuestras campañas, pero eso no depende de mí.</p>'
            story.appendChild(elf2)
            elf2.setAttribute('id', 'elf2')
        }, 3000);
        
        setTimeout(() => {
            const elf2 = document.createElement("div")
            elf2.innerHTML = '<p><em>*Indingor hace un gesto con el rostro indicando inconformidad, pero rápidamente se convierte en un gesto amable al saludar a los transeúntes*</em></p><p><strong>Indingor:</strong> Ahora mismo, lo que puedo hacer por tí es acompañarte a <strong class="choices">la Biblioteca local si es que quieres informarte sobre algún asunto</strong>, o <strong class="choices">al Cuartel, si es que quieres entrenarte para ser un gran guerrero.</strong></p>'
            story.appendChild(elf2)
            elf2.setAttribute('id', 'elf2')

            // Cambio de mensaje de eleccion
            const msg1 = document.getElementById("msg1")
            msg1.innerHTML = '<p>Elige qué camino deseas tomar indicando el número correspondiente.</p>'

            // Cambio de opciones
            const options1 = document.createElement("p")
            options1.innerText = '1. Biblioteca local   2. Cuartel militar'
            msg1.appendChild(options1)
            options1.setAttribute('id', 'options1')
        }, 6000);

        // Muestreo de habilidades del personaje
        const cha = document.createElement("div")
        cha.innerHTML = `<button id="toggle">Atributos</button><ul id="skills" style="display: none"><li>Ataque:<small> ${character.atk}</small></li><li>Defensa:<small> ${character.def}</small></li><li>Agilidad:<small> ${character.agi}</small></li><li>Inteligencia:<small> ${character.int}</small></li><li>Carisma:<small> ${character.char}</small></li><li>Vida:<small> ${character.life}</small></li></ul>`
        cha.setAttribute("id", "skillsList")
        options.appendChild(cha)
        
        // Mostrar u ocultar Atributos
        const toggle = document.getElementById("toggle")
        const skills = document.getElementById("skills")
        toggle.addEventListener("click", abrirAtributos);
        function abrirAtributos(){
            if (skills.style.display === "none") {
                skills.style.display = "block"
            } else{
                skills.style.display = "none"
            }    
        }   

        // Almacena la raza en el storage para utilizarla despues
        sessionStorage.setItem('Raza', 'Elfo')

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu camino'
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

        // Cambia el background
        const background = document.getElementById("background")
        background.classList.remove("normalBackground")
        background.setAttribute('class', 'dwarfBackground')
        
        // Texto personalizado segun la raza elegida
        const dwarf1 = document.createElement("div")
        dwarf1.innerHTML = '<p><em>*Te levantas de golpe cuando un grito desde muy cerca te sorprende. Parado frente a tí hay un enano imponente, vestido con una armadura rojiza con detalles en plateado. Parece mayor, y te mira con un gesto adusto mientras te pones de pie rápidamente*</em></p><p><strong>Desconocido:</strong> ¡Vamos, vamos! ¡Deja de holgazanear y levantate! ¡No hay tiempo! El <strong>Jefe Wunther</strong> está llamando a todos los enanos de la aldea para comenzar nuestro viaje hacia <strong>Gosa</strong>, donde nos uniremos con el <strong>Alto Señor Havard</strong> de <strong>Montaumier</strong>, que reclamará su derecho al Trono del Vaesh Nall.</p>'
        story.appendChild(dwarf1)
        dwarf1.setAttribute('id', 'dwarf1')

        setTimeout(() => {
            const dwarf2 = document.createElement("div")
            dwarf2.innerHTML = '<p><em>*El enano desconocido te da una fuerte palmada en la espalda y te insta a caminar a su lado*</em></p><p>¡Vamos, vamos! ¡No puedo explicártelo todo! Ahora iremos con <strong>Diogo</strong>, nuestro reclutador principal, para que te enseñe lo básico... ¡Vamos, vamos!</p>'
            story.appendChild(dwarf2)
            dwarf2.setAttribute('id', 'dwarf2')
        }, 3000);

        setTimeout(() => {
            const dwarf3 = document.createElement("div")
            dwarf3.innerHTML = '<p><em>*Llegan a un campo abierto donde un gran número de enanos se lanzan espadazos y hachazos entre ellos. Un enano resalta sobre ellos por su larga barba rubia y reluciente hacha, por lo que asumes que es <strong>Diogo</strong>, y apenas divisa al enano que te acompaña comienza a caminar con una sonrisa hacia ti.*</em></p><p><strong>Diogo</strong>¡Isal! ¡Qué alegría verte! Veo que me traes otro recluta... <em>*Diogo te mira y asiente con la cabeza*</em> ¡¿Cómo andas chico?! ¿De dónde te sacó Isal? Bueno, no importa, lo primero es lo primero, necesitas empezar a entrenar lo antes posible.</p><p>¿Qué tipo de guerrero quieres ser? ¿Elegiras <strong class="choices">batir a tus enemigos a base de fuerza bruta</strong>, o tal vez <strong class="choices">les ganarás con tu inteligencia</strong>, o preferirás <strong class="choices">defenderte y aprovechar cualquier ventaja</strong>?</p>'
            story.appendChild(dwarf3)
            dwarf3.setAttribute('id', 'dwarf3')

            // Cambio de mensaje de eleccion
            const msg1 = document.getElementById("msg1")
            msg1.innerHTML = '<p>Elige qué estilo de guerrero quieres ser indicando el número correspondiente.</p>'

            // Cambio de opciones
            const options1 = document.createElement("p")
            options1.innerText = '1. Fuerza Bruta   2. Perspicaz   3. Defensivo'
            msg1.appendChild(options1)
            options1.setAttribute('id', 'options1')
        }, 6000);
        
        // Muestreo de habilidades del personaje
        const cha = document.createElement("div")
        cha.innerHTML = `<button id="toggle">Atributos</button><ul id="skills" style="display: none"><li>Ataque:<small> ${character.atk}</small></li><li>Defensa:<small> ${character.def}</small></li><li>Agilidad:<small> ${character.agi}</small></li><li>Inteligencia:<small> ${character.int}</small></li><li>Carisma:<small> ${character.char}</small></li><li>Vida:<small> ${character.life}</small></li></ul>`
        cha.setAttribute("id", "skillsList")
        options.appendChild(cha)
        
        // Mostrar u ocultar Atributos
        const toggle = document.getElementById("toggle")
        const skills = document.getElementById("skills")
        toggle.addEventListener("click", abrirAtributos);
        function abrirAtributos(){
            if (skills.style.display === "none") {
                skills.style.display = "block"
            } else{
                skills.style.display = "none"
            }    
        }

        // Almacena la raza en el storage para utilizarla despues
        sessionStorage.setItem('Raza', 'Enano')

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu estilo de combate'
        next.removeEventListener("click", elegirRaza)
        next.addEventListener("click", elegirEstiloEnano)
    }else if(name != "1" && name != "2" && name != "3"){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingresa un número válido',
        })
    }
}

function elegirEstiloEnano(){
    const input = document.getElementById("enterName")
    let style = input.value

    // Segun el estilo elegido cambian los atributos
    if(style == "1"){
        character.entrenamiento(3,1,1,0)

        // Resultados del entrenamiento
        const results = document.createElement("p")
        results.innerText = 'Ataque +3 | Defensa +1 | Agilidad +1'
        results.setAttribute("class", "results")
        story.appendChild(results)
        
        // Texto de victoria en entrenamiento
        const dwarf4 = document.createElement("div")
        dwarf4.innerHTML = '<p>Increíble! Como verás, no es demasiado, pero este entrenamiento básico te ayudará a sobrellevar tus futuras aventuras. Si quieres probarte en batalla, te aconsejo que salgas de la ciudad hacia las <b>Llanuras de Barnger</b>, allí encontrarás varias bestias a las que podrás hacerles frente. Si crees que no lo necesitas puedes dirigirte hacia la <b>Tienda de Goldgard</b> y aprovisionarte de lo necesario para comenzar tu viaje. Que tengas buena suerte!</p><p><em>*Laudino se da la vuelta y camina hacia una pareja de jóvenes indicándoles como empuñar una espada*</em></p>' 
        story.appendChild(dwarf4)

        // Muestreo de habilidades del personaje
        const cha = document.getElementById("skillsList")
        cha.innerHTML = `<button id="toggle">Atributos</button><ul id="skills" style="display: none"><li>Ataque:<small> ${character.atk}</small></li><li>Defensa:<small> ${character.def}</small></li><li>Agilidad:<small> ${character.agi}</small></li><li>Inteligencia:<small> ${character.int}</small></li><li>Carisma:<small> ${character.char}</small></li><li>Vida:<small> ${character.life}</small></li></ul>`

        // Cambio de mensaje de eleccion
        const msg1 = document.getElementById("msg1")
        msg1.innerHTML = '<p>Elige a dónde quieres ir indicando el número correspondiente.</p>'

        // Cambio de opciones
        const options1 = document.getElement("options1")
        options1.innerText = '1. Llanuras de Barnger   2. Tienda de Goldgard'

        // Comienzo de la siguiente funcion
        next.innerText = 'Elige tu camino'
        next.removeEventListener("click", elegirEstiloEnano)
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