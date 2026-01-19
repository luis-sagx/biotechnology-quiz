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
    },
    {
        question: "1. En un bioproceso, las operaciones ___ incluyen la preparación del medio y la inoculación, mientras que las operaciones ___ abarcan la recuperación y purificación del producto.",
        options: [
            "secundarias / terciarias",
            "de control / de toma de muestra",
            "corriente arriba / corriente abajo",
            "de monitoreo / de análisis"
        ],
        correct: 2,
        explanation: "Las operaciones 'corriente arriba' (upstream) involucran todo lo relacionado con la preparación y el cultivo celular, mientras que las operaciones 'corriente abajo' (downstream) se centran en la separación, purificación y recuperación del producto de interés.",
        imageQuestion: "",
        imageAnswer: "./images/upstream_downstream_flow.png"
    },
    {
        question: "2. Los diagramas de flujo de proceso son herramientas esenciales que permiten ___ el flujo de materiales y energía, así como ___ la secuencia de operaciones.",
        options: [
            "controlar / evaluar",
            "visualizar / analizar",
            "calcular / definir",
            "monitorear / optimizar"
        ],
        correct: 1,
        explanation: "El propósito fundamental de estos diagramas es proporcionar una representación gráfica que permita visualizar la ruta de los materiales y analizar de manera lógica la secuencia de las etapas del proceso.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "3. En el diseño de bioprocesos, el ___ es fundamental para evaluar la rentabilidad, mientras que los ___ son clave para asegurar la sostenibilidad ambiental.",
        options: [
            "tren lógico de operaciones / diagramas de flujo",
            "balance de energía / factores externos",
            "análisis económico / aspectos ambientales",
            "estudio de variables / costos de producción"
        ],
        correct: 2,
        explanation: "El análisis económico determina si el proyecto generará ganancias, mientras que la consideración de aspectos ambientales garantiza que el proceso sea respetuoso con el entorno y cumpla con las normativas de sostenibilidad.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "4. El sistema HACCP se emplea para garantizar la ___ en bioprocesos mediante la identificación de ___ en las diferentes etapas del proceso.",
        options: [
            "eficiencia / cuello de botella",
            "calidad / puntos críticos de control",
            "productividad / análisis de flujo",
            "sostenibilidad / mejoras en el control"
        ],
        correct: 1,
        explanation: "HACCP es un sistema preventivo que asegura la calidad e inocuidad mediante el control de puntos críticos específicos donde podrían ocurrir fallas o contaminaciones.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "5. Relacione los siguientes componentes de un bioproceso con su descripción correcta: a. Reactores, b. Medidores de flujo, c. Tanques de almacenamiento, d. Filtros. (1. Equipo para contener materiales, 2. Medir paso del fluido, 3. Eliminar partículas, 4. Donde se llevan a cabo las reacciones).",
        options: [
            "a4, b2, c1, d3",
            "a1, b3, c4, d2",
            "a2, b4, c1, d3",
            "a3, b1, c2, d4"
        ],
        correct: 0,
        explanation: "Los reactores son el núcleo del proceso (reacciones), los medidores de flujo controlan el caudal, los tanques almacenan insumos y los filtros se encargan de la separación física de partículas.",
        imageQuestion: "./images/componentes_bioproceso.png",
        imageAnswer: ""
    },
    {
        question: "6. Relacione los tipos de operaciones en bioprocesos con su descripción correspondiente: ",
        options: [
            "a2, b1, c3, d4",
            "a4, b2, c1, d3",
            "a3, b2, c4, d1",
            "a1, b3, c4, d2"
        ],
        correct: 0,
        explanation: "Corriente arriba (a2) es la preparación del medio; corriente abajo (b1) es la purificación; el procesamiento final (c3) es el embalaje; y la preparación de muestras (d4) es el control de calidad previo.",
        imageQuestion: "./images/q6a.png",
        imageAnswer: ""
    },
    {
        question: "7. Relacione los tipos de diagramas de procesos con sus aplicaciones: ",
        options: [
            "a2, b3, c4, d1",
            "a3, b4, c1, d2",
            "a4, b1, c2, d3",
            "a1, b2, c4, d3"
        ],
        correct: 2,
        explanation: "El diagrama de flujo (a4) muestra la secuencia de operaciones; el P&ID (b1) detalla tuberías/equipos; el de bloques (c2) es un resumen visual y el de flujo de materiales (d3) muestra entradas y salidas.",
        imageQuestion: "./images/q7a.png",
        imageAnswer: ""
    },
    {
        question: "8. Relacione los tipos de control en bioprocesos con su función:",
        options: [
            "a1, b2, c3, d4",
            "a2, b3, c1, d4",
            "a3, b2, c4, d1",
            "a1, b4, c2, d3"
        ],
        correct: 1,
        explanation: "El flujo regula la cantidad de fluido; la temperatura ajusta el calor transferido; el pH mantiene el balance ácido-base y la presión estabiliza la fuerza del sistema.",
        imageQuestion: "./images/q8a.png",
        imageAnswer: ""
    },
    {
        question: "9. En un bioproceso, los diagramas de tuberías e instrumentación (P&ID) se utilizan para:",
        options: [
            "Representar las etapas principales del proceso en bloques.",
            "Describir la disposición detallada de equipos y conexiones.",
            "Mostrar solo el flujo de materiales de entrada y salida.",
            "Resumir el proceso en un formato simple y conciso."
        ],
        correct: 1,
        explanation: "El P&ID es un esquema técnico detallado que muestra la interconexión física de equipos de proceso y la instrumentación utilizada para controlar dicho proceso.",
        imageQuestion: "",
        imageAnswer: "./images/ejemplo_pid.png"
    },
    {
        question: "10. Los fundamentos para el diseño de bioprocesos consideran principalmente:",
        options: [
            "La naturaleza del sustrato y el producto deseado.",
            "La velocidad de agitación en el biorreactor.",
            "La cantidad de aire disponible en las áreas.",
            "La temperatura ambiental."
        ],
        correct: 0,
        explanation: "El diseño comienza siempre por entender qué materia prima se va a transformar (sustrato) y qué se desea obtener (producto), ya que esto define todas las operaciones posteriores.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "11. ¿Qué tipo de operación se realiza corriente abajo en un bioproceso?",
        options: [
            "Esterilización del medio",
            "Inoculación del microorganismo",
            "Purificación del producto final",
            "Preparación de la materia prima"
        ],
        correct: 2,
        explanation: "La purificación es una etapa clásica de 'downstream' (corriente abajo) que ocurre después de la fermentación.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "12. ¿Cuál de los siguientes es un factor económico clave en el diseño de bioprocesos?",
        options: [
            "El tipo de reactivo utilizado en cada operación",
            "La eficiencia energética de los equipos",
            "La duración de la calibración de cada equipo",
            "La frecuencia de limpieza de las áreas de trabajo"
        ],
        correct: 1,
        explanation: "La eficiencia energética reduce los costos operativos a largo plazo, impactando directamente en la viabilidad económica del bioproceso.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "13. ¿Cuál de los siguientes NO es un componente clave en un sistema de control de bioprocesos?",
        options: [
            "Sensor de pH",
            "Controlador de temperatura",
            "Medidor de presión",
            "Analizador de ADN"
        ],
        correct: 3,
        explanation: "Aunque es una herramienta analítica, el analizador de ADN no forma parte de los lazos de control de proceso en tiempo real como el pH, presión o temperatura.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "14. En el diseño de bioprocesos, ¿cuál de los siguientes NO corresponde a una operación corriente arriba?",
        options: [
            "Preparación del medio",
            "Purificación de proteínas",
            "Inoculación del cultivo",
            "Esterilización del biorreactor"
        ],
        correct: 1,
        explanation: "La purificación de proteínas es una etapa de recuperación y acabado, por lo tanto, es una operación de corriente abajo.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "15. ¿Cuál de los siguientes diagramas es el más adecuado para mostrar la distribución de tuberías e instrumentación en un bioproceso?",
        options: [
            "Diagrama de bloques",
            "Diagrama de flujo de proceso",
            "Diagrama de flujo de materiales",
            "Diagrama P&ID"
        ],
        correct: 3,
        explanation: "El Diagrama de Tuberías e Instrumentación (P&ID) es el estándar industrial para este nivel de detalle técnico.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "16. Indique cuál de los siguientes instrumentos NO se emplea comúnmente para monitorear variables en un bioproceso:",
        options: [
            "Termómetro de resistencia",
            "Viscosímetro",
            "Caudalímetro",
            "Picnómetro"
        ],
        correct: 3,
        explanation: "El picnómetro se usa en laboratorios para determinar densidades, pero no es un instrumento de monitoreo en línea común dentro de un sistema de control de bioprocesos.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "17. Ordene los pasos en el diseño de un tren lógico de operaciones unitarias para un bioproceso: 1. Definir las operaciones de purificación, 2. Establecer la operación de fermentación, 3. Determinar la composición del medio de cultivo, 4. Establecer las operaciones de embalaje.",
        options: [
            "2, 3, 1, 4",
            "3, 2, 1, 4",
            "1, 3, 4, 2",
            "4, 3, 2, 1"
        ],
        correct: 1,
        explanation: "El orden lógico es: preparar el medio (3), realizar la fermentación (2), purificar el producto (1) y finalmente embalarlo (4).",
        imageQuestion: "",
        imageAnswer: "./images/tren_logico_operaciones.png"
    },
    {
        question: "18. Organice las etapas de balance de materia en un bioproceso: 1. Determinación de entradas, 2. Identificación de productos, 3. Cálculo de pérdidas y generación de desechos, 4. Ajuste de resultados en función de la eficiencia.",
        options: [
            "1, 2, 4, 3",
            "1, 4, 3, 2",
            "1, 2, 3, 4",
            "3, 4, 1, 2"
        ],
        correct: 2,
        explanation: "La secuencia estándar de balance es definir qué entra (1), qué sale como producto (2), qué se pierde o se vuelve residuo (3) y finalmente ajustar los cálculos según la eficiencia real (4).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "19. Ordene los pasos para la calibración de un sensor en un bioproceso: 1. Verificación de estabilidad del sensor, 2. Ajuste de señal de salida, 3. Comparación con valores estándar, 4. Registro de datos y ajuste final.",
        options: [
            "3, 1, 2, 4",
            "1, 2, 3, 4",
            "4, 1, 3, 2",
            "2, 4, 3, 1"
        ],
        correct: 0,
        explanation: "Se comienza comparando con un estándar (3), se verifica que la lectura sea estable (1), se ajusta la señal de salida (2) y se termina con el registro de datos (4).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "20. Organice las etapas en la aplicación de un plan HACCP para bioprocesos: 1. Identificación de puntos críticos de control, 2. Establecimiento de límites críticos, 3. Implementación de medidas de monitoreo, 4. Documentación de registros de control.",
        options: [
            "1, 2, 3, 4",
            "4, 3, 2, 1",
            "3, 4, 1, 2",
            "2, 1, 4, 3"
        ],
        correct: 0,
        explanation: "Primero se identifican los puntos donde se puede controlar el riesgo (1), luego se definen los parámetros máximos/mínimos para esos puntos (2) y finalmente se establece cómo se vigilarán (3).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "21. En un proceso que opera en continuo con las corrientes de entrada y de salida conteniendo glucosa, si el caudal másico de la glucosa que entra es diferente al caudal de salida, esto puede ser por qué:",
        options: [
            "El proceso está bien operado y el sistema no tiene fugas",
            "En el proceso no se produce ninguna reacción química",
            "En el proceso existe una acumulación de glucosa dentro del sistema",
            "En el proceso, las mediciones de caudal no son erróneas"
        ],
        correct: 2,
        explanation: "De acuerdo con el balance de masa (Entradas - Salidas = Acumulación), si los caudales de entrada y salida difieren en un sistema donde no hay reacción química, la diferencia se explica por la acumulación del componente dentro del sistema.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "22. El mezclado es una operación física que hace al fluido ___ eliminando gradientes de ___ y otras propiedades.",
        options: [
            "Menos uniforme - velocidad y temperatura",
            "Menos uniforme - concentración y temperatura",
            "Más uniforme - velocidad y temperatura",
            "Más uniforme - concentración y temperatura"
        ],
        correct: 3,
        explanation: "El objetivo del mezclado es lograr la homogeneidad del sistema, convirtiéndolo en un medio más uniforme mediante la eliminación de gradientes de concentración, temperatura y otras propiedades físico-químicas.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "23. Relacionar los siguientes instrumentos de medida con sus respectivas propiedades a medir: 1. Termocupla, 2. Viscosímetro, 3. Rotámetro, 4. Potenciómetro. (a. pH, b. Caudal, c. Temperatura, d. Viscosidad).",
        options: [
            "1-a, 2-b, 3-c, 4-d",
            "1-b, 2-c, 3-d, 4-a",
            "1-d, 2-a, 3-b, 4-c",
            "1-c, 2-d, 3-b, 4-a"
        ],
        correct: 3,
        explanation: "La termocupla mide temperatura (1-c), el viscosímetro mide viscosidad (2-d), el rotámetro mide el caudal de fluidos (3-b) y el potenciómetro se utiliza para medir el pH (4-a).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "24. Ordenar los pasos en el desarrollo de un bioproceso a partir de una proteína recombinante: a. Selección óptima del cultivo, b. Purificación y acabado del producto, c. Escalamiento del sistema de cultivo, d. Recuperación y concentración del producto, e. Generación de líneas celulares recombinantes.",
        options: [
            "a, b, c, d, e",
            "e, b, a, c, d",
            "a, c, d, b, e",
            "e, a, c, d, b"
        ],
        correct: 3,
        explanation: "El flujo lógico comienza con la ingeniería genética (e), seguida de la selección de las mejores cepas (a), el aumento de escala o escalamiento (c), la recuperación inicial del producto (d) y finalmente la purificación y acabado (b).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "25. ¿Cuál de los siguientes elementos pueden estar representados en un diagrama de tuberías e instrumentación?",
        options: [
            "a y b (Flechas y Válvulas)",
            "b y d (Válvulas y Bombas)",
            "c y d (Bloques y Bombas)",
            "a y d (Flechas y Bombas)"
        ],
        correct: 1,
        explanation: "Un diagrama P&ID (Tuberías e Instrumentación) representa físicamente los componentes del proceso como válvulas, bombas, tuberías e instrumentos de control, a diferencia del diagrama de bloques que es más conceptual.",
        imageQuestion: "./images/q25a.png",
        imageAnswer: ""
    },
    {
        question: "26. En la fase de desarrollo de un bioproceso corriente arriba (upstream), no está comprendida la etapa de:",
        options: [
            "Preparación del inóculo",
            "Esterilización de medio de cultivo",
            "Operación del biorreactor",
            "Elección de los microorganismos"
        ],
        correct: 2,
        explanation: "sin explicacion",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "27. Los bioprocesos son la herramienta clave para el modelo de bioeconomía circular, ya que con sus principios se relacionan con ___, ___, ___, entre otros conceptos.",
        options: [
            "Generación de grandes cantidades de residuo - sostenibilidad - eficiencia",
            "Generación de residuos - sostenibilidad - ineficiencia",
            "Valorización de residuos - sostenibilidad - ineficiencia",
            "Valorización de residuos - sostenibilidad - eficiencia de recursos"
        ],
        correct: 3,
        explanation: "La bioeconomía circular busca transformar residuos en productos de valor (valorización), operando bajo criterios de sostenibilidad y máxima eficiencia en el uso de recursos biológicos.",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "28. Relacionar los siguientes tipos de sensores con sus respectivas propiedades a monitorear: 1. Sensor óptico de densidad celular, 2. Electrodo de pH, 3. Biosensor enzimático, 4. Inmunosensores. (a. Acidez, b. Concentracion de glucosa, c. Toxinas, d. Concentracion de Biomasa).",
        options: [
            "1-a, 2-b, 3-c, 4-d",
            "1-b, 2-c, 3-d, 4-a",
            "1-d, 2-a, 3-b, 4-c",
            "1-c, 2-d, 3-b, 4-a"
        ],
        correct: 2,
        explanation: "El sensor óptico mide biomasa (1-d), el electrodo de pH mide acidez (2-a), el biosensor enzimático suele medir sustratos como glucosa (3-b) y los inmunosensores detectan moléculas específicas como toxinas (4-c).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "29. Ordenar las etapas de desarrollo de un proceso industrial: a. Diseño preliminar, b. Selección del producto, c. Construcción de prototipo, d. Diseño final, e. Generación de la idea.",
        options: [
            "a, b, c, d, e",
            "e, b, a, c, d",
            "a, c, d, b, e",
            "e, a, c, d, b"
        ],
        correct: 1,
        explanation: "La secuencia estándar es: nacimiento de la idea (e), selección del producto específico (b), elaboración de un diseño preliminar (a), creación de un prototipo (c) y el diseño final para producción (d).",
        imageQuestion: "",
        imageAnswer: ""
    },
    {
        question: "30. Un bioproceso en el que se realiza compostaje de residuos orgánicos para obtener abono, tiene un impacto directo en la reducción de residuos sólidos y se alinea con las ODS:",
        options: [
            "a y b ",
            "b y c ",
            "c y d ",
            "a y d "
        ],
        correct: 1,
        explanation: "El compostaje reduce desperdicios (ODS 12: Producción y Consumo Responsable) y disminuye las emisiones de gases de efecto invernadero en vertederos (ODS 13: Acción por el Clima).",
        imageQuestion: "./images/q30a.png",
        imageAnswer: ""
    }
];