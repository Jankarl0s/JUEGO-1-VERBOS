document.addEventListener("DOMContentLoaded", function() {
    // Definir preguntas y respuestas
    var preguntas_respuestas = {
        "¿Bob cómo se dice ser/estar?": "be",
        "¿Y cómo se dice tener?": "have",
        "¿A ver dime cómo se dice hacer?": "do",
        "¿Sabes cómo se dice decir?": "say",
        "¿Cómo dirias conseguir?": "get",
        "¿A ver perro la otra manera de decir el verbo hacer que no sea do?": "make",
        "¿Te la mamo si me dices en ingles ir?": "go",
        "¿A que no sabes como se dice en ingles saber?": "know",
        "¿No creo que sepas como decir en ingles tomar?": "take",
        "¿Perrillo si me dices el verbo  ver?": "see",
        "¿Cómo se dice venir y no es eso que estas pensando, ese es otro verbo?": "come",
        "Lo que les hace falta a muchos pensar como lo dirias?": "think",
        "¿A ver dime cómo se dice mirar y no es watch?": "look",
        "¿Espero que si sepas cómo se dice querer?": "want",
        "¿Cómo dirias dar?": "give",
        "¿Perrillo si me dices el verbo  usar?": "use",
        "¿Cómo se dice encontrar?": "find",
        "¿Bob cómo se dice decir a alguien?": "tell",
        "¿Lo que no dejas de hacer preguntar?": "ask",
        "¿Lo que no te gusta hacer, trabajar?": "work",
        "Como dirias parecer?": "seem",
        "¿Bob cómo se dice sentir?": "feel",
        "Lo que nunca debes dejar de hacer, intentar?": "try",
        "¿Y cómo se dice dejar?": "leave",
        "¿A ver dime cómo se dice llamar?": "call",
        "¿Sabes cómo se dice deber?": "should",
        "¿Cómo dirias necesitar?": "need",
        "¿Te la mamo si me dices en ingles llegar a ser?": "become",
        "¿A ver perro cómo se dice significar?": "mean",
        "¿Bob cómo se dice salir?": "leave",
        "¿A ver perro cómo se dice poner?": "put",
        "Muchos van a la escuela pero nunca lo logran APRENDER?": "learn",
        "¿Bob cómo se dice cambiar?": "change",
        "¿A ver perro cómo se dice vivir?": "live",
        "¿Bob cómo se dice jugar?": "play",
        "Lo que le falta Poninas crecer?": "grow",
        "¿Te la mamo si me dices en ingles creer?": "believe",
        "¿A que no sabes como se dice en ingles traer?": "bring",
        "¿No creo que sepas como decir en ingles empezar?": "begin",
        "¿Perrillo si me dices el verbo  mantener?": "keep",
        "¿Puedes decirme cómo se dice  sostener?": "hold",
        "¿Bob cómo se dice escribir?": "write",
        "No creo que sepas cómo se dice estar de pie?": "stand",
        "Dime, ¿cómo se dice escuchar?": "hear",
        "¿Puedes decirme cómo se dice  dejar?": "let",
        "¿Bob cómo se dice significar?": "mean",
        "¿Puedes decirme cómo se dice  establecer?": "set",
        "No creo que sepas cómo se dice encontrarse con?": "meet",
        "Dime, ¿cómo se dice pagar?": "pay",
        "¿Bob cómo se dice sentarse?": "sit",
        "Dime, ¿cómo se dice hablar?": "speak",
        "¿Puedes decirme cómo se dice  leer?": "read",
        "¿Bob cómo se dice permitir?": "allow",
        "¿Bob cómo se dice añadir?": "add",
        "Lo que le encanta a las viejas, gastar?": "spend",
        "¿Qué tal si me dices comprar?": "buy",
        "¿Bob cómo se dice cortar?": "cut",
        "Y ahora, ¿cómo se dice construir?": "build",
        "¿Bob cómo se dice suceder?": "happen",
        "¿Bob cómo se dice ofrecer?": "offer",
        "Y ahora, ¿cómo se dice recordar?": "remember",
        "¿Bob cómo se dice considerar?": "consider",
        "¿Bob cómo se dice aparecer?": "appear",
        "Y ahora, ¿cómo se dice servir?": "serve",
        "¿Bob cómo se dice morir?": "die",
        "¿Puedes decirme cómo se dice  enviar?": "send",
        "¿A ver perro cómo se dice esperar?": "expect",
        "¿Perro del mal si me dices en inglès explicar?": "explain",
        "¿A ver perro la otra manera de decir  esperar que no es wait?": "hope",
        "¿Bob cómo se dice incluir?": "include",
        "¿Perro del mal si me dices en inglès crear?": "create",
        "¿Puedes decirme cómo se dice  estar de acuerdo?": "agree",
        "¿Qué tal si me dices seguir?": "follow",
        "Y ahora, ¿cómo se dice entender?": "understand",
        "¿Bob cómo se dice manejar?": "manage",
        "¿Bob cómo se dice mover?": "move",
        "¿Qué tal si me dices continuar?": "continue",
        "Y ahora, ¿cómo se dice mantener?": "hold",
        "¿Bob cómo se dice mirar?": "watch",
        "Dime, ¿cómo se dice unirse?": "join",
        "¿Perro del mal si me dices en inglès relacionar?": "relate",
        "¿Bob cómo se dice comparar?": "compare",
        "Y ahora, ¿cómo se dice anunciar?": "announce",
        "¿Bob cómo se dice caminar?": "walk",
        "¿Qué tal si me dices esperar?": "wait",
        "¿Bob cómo se dice alcanzar?": "reach",
        "Dime, ¿cómo se dice atrapar?": "catch",
        "¿Bob cómo se dice quedarse?": "stay",
        "¿Qué tal si me dices estar de pie?": "stand",
        "Y ahora, ¿cómo se dice probar?": "prove",
        "¿Bob cómo se dice caer?": "fall",
        "¿Puedes decirme cómo se dice  mostrar?": "show",
        "¿Bob cómo se dice cortar?": "cut",
        "¿Qué tal si me dices volver?": "return",
        "Dime, ¿cómo se dice romper?": "break",
        "¿Bob cómo se dice desarrollar?": "develop",
        "Dime, ¿cómo se dice grabar?": "record",
        "No creo que sepas cómo se dice recoger?": "pick",
        "¿A ver si eres tan verga cómo se dice llevar puesto?": "wear"
    };

    var preguntas_preguntadas = []; // Lista para llevar un registro de las preguntas ya preguntadas
    var puntos = 0;
    var preguntasContador = 0;
    var preguntaActual = null;

    var preguntaTexto = document.getElementById("question-text");
    var respuestaInput = document.getElementById("respuesta");
    var verificarBtn = document.getElementById("verificar-btn");
    var puntosSpan = document.getElementById("puntos");
    var preguntasSpan = document.getElementById("preguntas");

    // Función para cargar la siguiente pregunta
    function siguientePregunta() {
        var intentos = 3;
        if (Object.keys(preguntas_respuestas).length > preguntas_preguntadas.length) {
            // Seleccionar una pregunta que no haya sido preguntada antes
            do {
                preguntaActual = Object.keys(preguntas_respuestas)[Math.floor(Math.random() * Object.keys(preguntas_respuestas).length)];
            } while (preguntas_preguntadas.includes(preguntaActual));
            preguntas_preguntadas.push(preguntaActual);
            preguntaTexto.textContent = preguntaActual;
            respuestaInput.value = "";
            intentos--;
            puntosSpan.textContent = puntos;
            preguntasContador++;
            preguntasSpan.textContent = preguntasContador;
        } else {
            mostrarMensajeFinal();
        }
    }

    // Función para verificar la respuesta
    function verificarRespuesta() {
        var respuestaUsuario = respuestaInput.value.trim().toLowerCase();
        var respuestaCorrecta = preguntas_respuestas[preguntaActual].toLowerCase();
        if (respuestaUsuario === respuestaCorrecta) {
            puntos += 100;
            alert("¡Respuesta correcta! Has ganado " + puntos + " puntos.");
        } else {
            alert("La respuesta era '" + respuestaCorrecta + "'. Necesitas estudiar");
        // Reproducir el audio de respuesta incorrecta
        const wrongSound = new Audio("C:/Users/janca/OneDrive/Documentos/ICEP/PROYECTOS/PROGRAMA_BASE/audio/wrong.mp3");
        wrongSound.play();
        }
        siguientePregunta();
    }

    // Función para mostrar el mensaje de finalización
    function mostrarMensajeFinal() {
        alert("¡Has respondido todas las preguntas!\nTotal de puntos: " + puntos);
    }

    // Agregar evento click al botón de verificar
    verificarBtn.addEventListener("click", verificarRespuesta);

    // Agregar evento keypress al input para verificar con la tecla Enter
    respuestaInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            verificarRespuesta();
        }
    });

    // Iniciar el juego cargando la primera pregunta
    siguientePregunta();
});
