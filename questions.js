const questions = [
    {
        question: "1. La biosíntesis de alcaloides derivados de la tirosina incluye una serie de reacciones que finalmente producen:",
        options: ["Morfina", "Curcumina", "Ácido salicílico", "Carotenoides"],
        correct: 0,
        explanation: "La tirosina es un aminoácido aromático que es un precursor en la biosíntesis de alcaloides isoquinolínicos (morfina). La curcumina es un polifenol derivado de la vía del ácido shikímico. El ácido salicílico proviene de la vía del ácido shikímico y de los fenilpropanoides. Los carotenoides son isoprenoides derivados de la vía del mevalonato o MEP.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "2. Cuál de las siguientes opciones pertenece a un monoterpeno",
        options: ["C15H24", "C10H16", "C40H64", "C30H48"],
        correct: 1,
        explanation: "Un monoterpeno tiene 10 carbonos. Los monoterpenos están formados por dos unidades de isopreno, y cada unidad de isopreno tiene la fórmula C5H8. Entonces 2 x C5H8 = C10H16. El A es un sesquiterpeno (3 unidades de isopreno), el C es un tetraterpeno (8 unidades de isopreno) y el D es un triterpeno (6 unidades de isopreno).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "3. ¿Qué elemento es clave en la formación de diterpenos?",
        options: ["Isopreno", "Geranilgeranil pirofosfato (GGPP)", "Geranilfarnesil pirofosfato (FPP)", "Acetil-CoA"],
        correct: 1,
        explanation: "El Geranilgeranil pirofosfato (GGPP) es el precursor directo que da origen a los diterpenos (C20).",
        imageQuestion: "",
        imageAnswer: "./images/ruta_diterpenos.png"
    },
    {
        question: "4. Un mecanismo de defensa frente a herbívoros es biosintetizar compuestos anti alimentarios, ¿cuál de los siguientes compuestos cumple esta función?",
        options: ["Alcaloides", "Sesquiterpenos", "Fenilpropanoides", "Carotenoides"],
        correct: 0,
        explanation: "Los alcaloides son metabolitos secundarios nitrogenados que ayudan en la defensa de las plantas frente a herbívoros, ya que actúan como compuestos antialimentarios y tóxicos. Tienen un sabor picante o amargo repulsivos para animales y personas. Los sesquiterpenos pueden tener funciones defensivas, pero no son principalmente antialimentarios. Los fenilpropanoides cumplen funciones antioxidantes o de defensa frente a patógenos. Y los carotenoides están relacionados con la protección frente a la luz UV.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "5. Los ____ son compuestos de defensa producidos por las plantas que pueden actuar como repelentes naturales contra insectos y microorganismos, provienen de la vía del ____ para formar moléculas con cadenas de carbono múltiplo de 5.",
        options: ["Caritenoides - ácido shikímico", "Triterpenos - Falsos aminoácidos", "Monoterpenos - ácido mevalónico", "Glucosinolatos - ácido shikímico"],
        correct: 2,
        explanation: "Los monoterpenos al tener bajo peso molecular son volátiles, lo que les permite actuar como repelentes naturales contra insectos y microorganismos. Viene de la ruta del ácido mevalónico donde se unen 3 acetil CoA para formar isopentenil pirofosfato (IPP) y Dimetilalil pirofosfato (DMAPP), mismos que son las unidades de isopreno precursoras de la formación de monoterpenos (2 unidades de isopreno).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "6. Los ____ son un grupo de metabolitos secundarios que contienen nitrógeno y actúan frecuentemente como toxinas naturales en plantas para protegerse de los herbívoros, estos generalmente provienen de la descarboxilación de ____.",
        options: ["Alcaloides - aminoácidos", "Alcaloides - Falsos aminoácidos", "Glucosinolatos - aminoácidos", "Glicósidos - Fenoles"],
        correct: 0,
        explanation: "Los alcaloides son compuestos nitrogenados que actúan como toxinas naturales, y el primer paso para la formación de estos es la descarboxilación de aminoácidos. En el caso de los glucosinolatos también son nitrogenados pero estos no se forman por la descarboxilación de aminoácidos, sino por la unión de una glicona y una aglicona.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "7. Los flavonoides son un tipo de ____ importantes en la protección contra la radiación ____ en las plantas.",
        options: ["Aminoácidos - gama", "Fenoles - Infrarroja", "Alcaloide - Ultravioleta", "Fenoles - Ultravioleta"],
        correct: 3,
        explanation: "Los flavonoides son un tipo de fenoles ópticamente activos, es decir que desvían la luz, protegen al organismo vegetal de la incidencia de luz, y como absorben longitudes de onda en el UV cercano y lejano, brindan protección contra la luz UV y evitan daños en los tejidos.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "8. Los ____ son compuestos derivados de unidades de isopreno y forman uno de los grupos más grandes de metabolitos secundarios en las plantas como los C20 o los C40.",
        options: ["Fenoles - Flavonides - Taninos", "Fenoles fenilpropanoides - Cumarinas", "Terpenos - Diterpenos - tetraterpenos", "terpenos - Monoterpenos - Diterpenos"],
        correct: 2,
        explanation: "Los terpenos son lo que se forman por unidades de isopreno, los C20 son los diterpenos (4 unidades de isopreno) y los C40 son los tetraterpenos (8 unidades de isopreno).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "9. Relacionar los siguientes precursores con los compuestos a los que dan origen: ",
        options: ["1-a, 2-b, 3-c, 4-d", "1-b, 2-c, 3-d, 4-a", "1-d, 2-a, 3-b, 4-c", "1-c, 2-d, 3-a, 4-b"],
        correct: 2,
        explanation: "El fitoeno da origen a tetraterpenos; el geranil pirofosfato a monoterpenos; el geranil farnesil pirofosfato a sesquiterpenos; y el escualeno a triterpenos.",
        imageQuestion: "./images/precursores_terpenos_tabla.png",
        imageAnswer: "./images/explication9.png"
    },
    {
        question: "10. Relacionar las características principales con el tipo de compuesto al que corresponde:",
        options: ["1-a, 2-b, 3-c, 4-d", "1-b, 2-c, 3-d, 4-a", "1-d, 2-a, 3-b, 4-c", "1-c, 2-d, 3-a, 4-b"],
        correct: 1,
        explanation: "Péptidos no ribosomales -> interactúan con microbianos. Terpenoides -> altamente volátiles: a excepción de los C30 y C40 casi todos son volátiles y de bajo peso molecular. Alcaloides -> Interactúan con centros nerviosos: son moléculas que son bastante parecidas a las moléculas producidas por el cerebro por lo que pueden integrarse en el sistema nervioso imitando una molécula original. Fenoles -> Absorben luz UV: como es el caso de los flavonoides, depende de la conjugación de electrones pi pero por lo general absorben luz UV.",
        imageQuestion: "./images/question10.png",
        imageAnswer: ""
    },
    {
        question: "11. Relacionar a los principios activos con los caminos biosintéticos de los cuales se originan: 1. Péptidos no ribosomales, 2. Terpenoides, 3. Alcaloides, 4. Fenoles. (a. Acido shikímico, b. Ácido mevalónico, c. Aminoácidos modificados, d. Rutas Mixta aminiacidos y otras)",
        options: ["1-a, 2-b, 3-c, 4-d", "1-b, 2-c, 3-d, 4-a", "1-c, 2-b, 3-d, 4-a", "1-c, 2-d, 3-a, 4-b"],
        correct: 2,
        explanation: "La ruta del ácido mevalónico forma IPP y DMAPP, precursores de terpenoides. Los alcaloides se forman de rutas mixtas de aminoácidos para formar pseudoalcaloides principalmente porque son alcaloides no derivados de aminoácidos sino de unidades de acetil CoA. Los fenoles se forman a partir de la ruta del ácido shikímico, empezando por el ácido 3-deshidro-shikímico. Y los péptidos no ribosomales siempre están formados por aminoácidos modificados.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "12. Relacionar cada precursor con el tipo de metabolito que ayuda a sintetizar: 1. Geranil pirofosfato (GPP), 2. Triptófano, 3. Fenilalanina, 4. Acetil-CoA. (a. Alcaloides, b. Terpenoides, c. Fenilpropanoides, d. Poliquétidos)",
        options: ["1-a, 2-b, 3-c, 4-d", "1-b, 2-a, 3-c, 4-d", "1-c, 2-b, 3-d, 4-a", "1-c, 2-d, 3-a, 4-b"],
        correct: 1,
        explanation: "Los poliquétidos se crean mediante enzimas llamadas policétido sintasas (PKS), que ensamblan bloques básicos (acetil-CoA, propionil-CoA). El GPP es precursor de terpenoides, el triptófano de ciertos alcaloides y la fenilalanina de fenilpropanoides.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "13. Ordenar las etapas del proceso de obtención de compuestos orgánicos de interés de una fuente natural: a. Purificación, b. Extracción, c. Aislamiento, d. Determinación estructural, e. Preparación de la muestra.",
        options: ["a, b, c, d, e", "e, d, c, b, a", "a, c, d, b, e", "e, b, a, c, d"],
        correct: 3,
        explanation: "El orden correcto de las etapas es: e. Preparación de la muestra, b. Extracción, a. Purificación, c. Aislamiento y d. Determinación estructural.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "14. Ordenar los eventos históricos importantes en el establecimiento como ciencia a la Química de Productos Naturales: a. Análisis de extractos, b. Recetas medievales, c. Venenos para caza o pesca, d. Uso de hierbas medicinales.",
        options: ["a, b, c, d", "d, c, b, a", "c, b, d, a", "b, a, d, c"],
        correct: 2,
        explanation: "La secuencia histórica es: c. Venenos para la caza o pesca, b. Recetas medievales, d. Uso de hierbas medicinales como medicamento y a. Análisis de extractos a nivel de laboratorio.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "15. Organiza de manera ordenada las actividades necesarias para confirmar la estructura química de un compuesto: a. Identificación y aislamiento, b. Comparación con Bases de datos, c. Extracción, d. Estudios cromatográficos.",
        options: ["a, b, c, d", "d, b, c, a", "c, d, a, b", "a, d, b, c"],
        correct: 2,
        explanation: "Las actividades ordenadas son: c. Extracción en el laboratorio, d. Estudios cromatográficos, a. Identificación y aislamiento de la molécula y b. Comparación con Bases de datos.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "16. Ordena los pasos de la biosíntesis de terpenos a partir de sus precursores: a. Formación de GPP, b. Conversión a monoterpenos, c. Formación de unidades de IPP, d. Modificaciones finales.",
        options: ["b, c, d, a", "c, a, b, d", "d, a, c, b", "a, b, c, d"],
        correct: 1,
        explanation: "Pasos: 3 unidades de Acetil CoA -> Formación de IPP y DMAPP -> Formación de GPP (precursor de monoterpenos) -> Conversión a monoterpenos -> oxidaciones y metilaciones finales.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "17. ¿Qué grupo de principios activos es el más relevante en la tolerancia al estrés abiótico?",
        options: ["b, c", "a, b", "a, c", "a, d"],
        correct: 0,
        explanation: "Los hemiterpenos (b) brindan protección contra la antitemperatura y los flavonoides (c) brindan protección contra la luz UV. Los alcaloides (a) se asocian más con el estrés biótico (herbívoros).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "18. ¿Qué molécula es precursora de los monoterpenos? a. Farnesil pirofosfato (FPP) b. Geranil pirofosfato (GPP) c. Isopentenil pirofosfato (IPP) d. Neril pirofosfato (NPP)",
        options: ["b, c", "a, b", "a, c", "b, d"],
        correct: 0,
        explanation: "Tanto el Geranil pirofosfato (GPP) como el Neril pirofosfato (NPP) son precursores de los monoterpenos.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "19. ¿Cuál de los siguientes no es un producto del metabolismo secundario?",
        options: ["a,b", "b,c", "c,d", "a,d"],
        correct: 1,
        explanation: "La prolina es un aminoácido producto del metabolismo primario. El ácido cítrico es un metabolito primario, intermediario del ciclo de krebs. Los metabolitos primarios están directamente involucrados en el crecimiento, desarrollo y reproducción.",
        imageQuestion: "./images/question19.png",
        imageAnswer: ""
    },
    {
        question: "20. ¿Qué característica estructural es común en los fenilpropanoides?",
        options: ["a, b", "c, e", "b, c", "a, d"],
        correct: 1,
        explanation: "Los fenilpropanoides tienen una estructura de cadena de tres carbonos unida a un anillo aromático (C6-C3). Tienen una alta volatilidad, forman aceites esenciales y se obtienen por arrastre de vapor.",
        imageQuestion: "./images/question20.png",
        imageAnswer: ""
    },
    {
        question: "21. Los metabolitos secundarios son abundantemente producidos por:",
        options: ["El ser humano", "Insectos", "Mamíferos", "Microorganismos"],
        correct: 3,
        explanation: "Los microorganismos, como bacterias y hongos, son productores prolíficos de metabolitos secundarios, siendo la penicilina el ejemplo clásico de un compuesto de este tipo producido por ellos.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "22. La vía metabólica que permite la síntesis de aminoácidos aromáticos en plantas se llama la vía del ____ y da origen a una variedad de principios activos llamados ____",
        options: ["Shikimato - Fenoles", "Terpenos - Cumarinas", "Terpenos - Diterpenos", "Alcaloides - Pirrolidínicos"],
        correct: 0,
        explanation: "La ruta del ácido shikímico permite la obtención de fenilalanina y tirosina, que son aminoácidos aromáticos precursores de los fenilpropanoides (fenoles).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "23. Relaciona cada clase de metabolito con su rol ecológico principal: 1. Terpenoides, 2. Fenilpropanoides, 3. Alcaloides, 4. Flavonoides. (a. Defensa contra herbívoros, b. Protección contra radiación UV, c. Atracción de polinizadores, d. Interacción con microorganismos)",
        options: ["1-a, 2-b, 3-c, 4-d", "1-b, 2-c, 3-d, 4-a", "1-c, 2-d, 3-a, 4-b", "1-d, 2-a, 3-b, 4-c"],
        correct: 2,
        explanation: "Los terpenoides suelen ser volátiles y atraen polinizadores; los fenilpropanoides actúan como fitoalexinas en interacciones con microorganismos; los alcaloides tienen funciones antialimentarias contra herbívoros; y los flavonoides brindan protección contra la radiación UV.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "24. Realiza un análisis crítico y global de los pesos moleculares de los terpenos y ordena de forma ascendente las siguientes moléculas: a. Sesquiterpenos, b. Carotenoide, c. Sesterpenos, d. Monoterpenos",
        options: ["b, c, d, a", "c, b, d, a", "d, a, c, b", "a, b, c, d"],
        correct: 2,
        explanation: "El orden ascendente por peso molecular es: monoterpenos (C10), sesquiterpenos (C15), sesterpenos (C25) y carotenoides (C40).",
        imageQuestion: "./images/question24.png",
        imageAnswer: ""
    },
    {
        question: "25. ¿Cuál de los siguientes compuestos pertenece a la clase de los terpenoides?",
        options: ["a, b, c", "b, d, e", "a, d, f", "b, e, f"],
        correct: 1,
        explanation: "Sin explicacion",
        imageQuestion: "./images/question25.png",
        imageAnswer: ""
    },
    {
        question: "26. ¿Qué terpenos son esenciales en la comunicación química entre plantas e insectos?",
        options: ["Monoterpenos", "Sesquiterpenos", "Triperpenos", "Tetraterpenos"],
        correct: 0,
        explanation: "los monoterpenos son los más volátiles (los sesquiterpenos también pero los monoterpenos más), constituyen la principal señal química en la interacción planta-insecto (aromas florales, atracción de polinizadores, señales rápidas)",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "27. Ordenar los siguientes compuestos por su grado de volatilidad: a. Nicotina, b. Limoneno c. licopeno d. Penicilina",
        options: ["a, b, c, d", "b, a, c, d", "c, d, b, a", "b, c, a, d"],
        correct: 1,
        explanation: "Limoneno (monoterpeno volátil) > Nicotina (alcaloide) > Licopeno (carotenoide C40, casi no volátil) > Penicilina (tiene muchas interacciones intermoleculares entre el N, O y S, incluso se descompone antes de evaporarse)",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "28. Analizar las moléculas e indicar los bloques de construcción que la forman:",
        options: ["1-a-b, 2-b-c, 3-a-d, 4-c-d ", "1-a, 2-b-c, 3-b-d, 4-b-c ", "1-a-d, 2-a-c, 3-b-d, 4-a-d", "1-b-c, 2-b-c, 3-a-d, 4-c-d"],
        correct: 1,
        explanation: "1. Terpenos -> Bloque de construcción: Isoprenos 2. Derivado del ácido cinámico (C6C3) -> Bloque de construcción: Fenilpropanoide + 1 Acetil CoA 3. Molécula C6C3 -> Bloque de construcción: Fenilpropanoide + S-metilmetionina (Donador de metilos (–OCH₃)) 4. C6C3C6 -> Bloque de construcción: Fenilpropanoide + Acetil CoA",
        imageQuestion: "./images/question28.png",
        imageAnswer: ""
    },
    {
        question: "29. ¿Qué factor influye directamente en la actividad biológica de los fenoles?",
        options: ["a, b", "b, c", "c, d", "b, d"],
        correct: 3,
        explanation: "Los OH libres pueden generar interacciones químicas mediante la formación de puentes de hidrógeno, además la posición de los OH determinan la capacidad antioxidante, reactividad y afinidad biológica de los fenoles. Tienen un alto contenido de electrones pi (dobles enlaces conjugados), lo que les permite dar protección contra la luz UV y condiciones ambientales bióticas.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "30. Los alcaloides son compuestos orgánicos de origen natural que contienen al menos un átomo de ___________, responsable de la __________________y se caracterizan por presentar una marcada actividad ___________ sobre el sistema nervioso, razón por la cual muchos de ellos se emplean en la industria__________.",
        options: ["Nitrógeno, alcalinidad, farmacológica, farmacéutica", "Oxígeno, polaridad, biológica, cosmética", "Nitrógeno, solubilidad, neurotóxica, psicotrópica", "Nitrógeno, alcalinidad, sicodélica, medicina"],
        correct: 1,
        explanation: "Los alcaloides tienen por lo menos un átomo de nitrógeno, el cuál es el responsable de la alcalinidad (depende de los electrones libres del N), tienen efectos farmacológicos en animales por lo que sin eficientes para disuadir a herbívoros, por lo que se utiliza en la industria farmacéutica.",
        imageQuestion: "",
        imageAnswer: ""
    }
];