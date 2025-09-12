// Base de datos de ejercicios - Ahora con días separados
const exercisesData = {
    "day1": {
        "chest": [
            { 
                name: "Primer", 
                gif: "Pictures/Chest/Day1/Primer. -Banded external rotation 1-2sets x 12-15 sub Max.gif",
                description: "Keep your elbow at 90° by your side and rotate your forearm outward against the band to strengthen the rotator cuff."
            },
            { 
                name: "1. Incline DB bench press 3 sets x5-8 form failure.", 
                gif: "Pictures/Chest/Day1/1. Inclined DB bench press 3 sets x5-8 form failure.gif",
                description: "Press dumbbells upward on an incline bench to target upper chest and shoulders."
            },
            { 
                name: "2. crossovers 3 sets x10-12", 
                gif: "Pictures/Chest/Day1/2. crossovers 3 sets x10-12.gif",
                description: "Pull the cables together in front of your chest to build and define the pectorals."
            },
            { 
                name: "2.1. crossovers 3 sets x10-12 (+partials)", 
                gif: "Pictures/Chest/Day1/2.1. crossovers 3 sets x10-12 (+partials).gif",
                description: "Pull the cables together in front of your chest to build and define the pectorals."
            },
            { 
                name: "3. DB floor flys 2-3sets x8-10", 
                gif: "Pictures/Chest/Day1/3. DB floor flys 2-3sets x8-10.gif",
                description: "Lying on the floor, open and close your arms with dumbbells to work the chest safely."
            },
            { 
                name: "3.1. DB floor flys 2-3sets x8-10 (+ eccentric only)", 
                gif: "Pictures/Chest/Day1/3.1. DB floor flys 2-3sets x8-10 (+ eccentric only).gif",
                description: "Lying on the floor, open and close your arms with dumbbells to work the chest safely."
            },
            { 
                name: "4. Deficit 1.5 Rep pushup ladder 1set xfailure", 
                gif: "Pictures/Chest/Day1/4. Deficit 1.5 Rep pushup ladder 1set xfailure.gif",
                description: "Do push-ups on raised platforms with a half rep added each time to increase chest and triceps strength."
            },
            { 
                name: "5. Bodyweight dips 1set xfailure", 
                gif: "Pictures/Chest/Day1/5. Bodyweight dips 1set xfailure.gif",
                description: "Lower and press your body between parallel bars to target chest, shoulders, and triceps."
            },
            { 
                name: "5.1 Bodyweight dips 1set xfailure (+Partials)", 
                gif: "Pictures/Chest/Day1/5.1 Bodyweight dips 1set xfailure (+Partials).gif",
                description: "Lower and press your body between parallel bars to target chest, shoulders, and triceps."
            }
            
        ],
        "triceps": [
            { 
                name: "Fondos en Paralelas", 
                gif: "Pictures/Chest/Day2/Primer. -Band pull aparts 1-2sets 10-15 sub max.gif",
                description: "Sujetado en barras paralelas, baja el cuerpo doblando los codos hasta formar 90°, luego empuja hacia arriba."
            },
            { 
                name: "Extensiones de Tríceps con Polea", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Triceps-Pushdown.gif",
                description: "De pie frente a polea alta, empuja la barra hacia abajo extendiendo los codos manteniendo los brazos pegados al cuerpo."
            },
            { 
                name: "Press Francés", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/06/lying-tricep-extension.gif",
                description: "Acostado en banco, baja la barra hacia la frente manteniendo los codos apuntando al techo, luego extiende los brazos."
            }
        ],
        "espalda": [
            { 
                name: "Dominadas", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/pull-up.gif",
                description: "Colgado de una barra con agarre prono, tira del cuerpo hacia arriba hasta que la barbilla supere la barra."
            },
            { 
                name: "Remo con Barra", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Barbell-Row.gif",
                description: "Inclinado hacia adelante con espalda recta, tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo."
            },
            { 
                name: "Jalón al Pecho", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/lat-pulldown.gif",
                description: "Sentado en máquina con agarre ancho, tira de la barra hacia el pecho manteniendo el torso erguido."
            }
        ],
        "biceps": [
            { 
                name: "Curl de Bíceps con Barra", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Barbell-Curl.gif",
                description: "De pie con pies al ancho de hombros, levanta la barra flexionando los codos manteniéndolos pegados al cuerpo."
            },
            { 
                name: "Curl Martillo", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/hammer-curl.gif",
                description: "De pie con mancuernas, levanta alternadamente con palmas mirándose, manteniendo los codos fijos."
            },
            { 
                name: "Curl Concentrado", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/concentration-curl.gif",
                description: "Sentado, apoya el codo en el muslo interno y levanta la mancuerna concentrando el esfuerzo en el bíceps."
            }
        ],
        "piernas": [
            { 
                name: "Sentadillas", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Barbell-Squat.gif",
                description: "Con barra sobre hombros, baja el cuerpo doblando rodillas y cadera manteniendo la espalda recta, hasta que los muslos estén paralelos al suelo."
            },
            { 
                name: "Prensa de Piernas", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/leg-press.gif",
                description: "Sentado en máquina, apoya los pies en la plataforma y empuja manteniendo la espalda apoyada y las rodillas alineadas con los pies."
            },
            { 
                name: "Extensiones de Cuádriceps", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/leg-extension.gif",
                description: "Sentado en máquina, apoya los tobillos en los rodillos y extiende las piernas contra la resistencia, luego baja controladamente."
            }
        ],
        "hombros": [
            { 
                name: "Press Militar", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Shoulder-Press.gif",
                description: "De pie o sentado, levanta la barra por encima de la cabeza manteniendo el core activo y los pies firmes."
            },
            { 
                name: "Elevaciones Laterales", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/lateral-raise.gif",
                description: "De pie con ligera flexión de rodillas, levanta mancuernas a los lados hasta altura de hombros con codos ligeramente flexionados."
            },
            { 
                name: "Face Pull", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/face-pull.gif",
                description: "Con polea a altura de cara, tira de la cuerda hacia la frente separando las manos al final del movimiento."
            }
        ]
    },
    "day2": {
        "pecho": [
            { 
                name: "Press Declinado con Barra", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Decline-Bench-Press.gif",
                description: "Acostado en banco declinado, realiza press de banca para enfocar la parte inferior del pecho."
            },
            { 
                name: "Press con Mancuernas en Banco Plano", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/dumbbell-bench-press.gif",
                description: "Acostado en banco plano, presiona las mancuernas hacia arriba con control."
            },
            { 
                name: "Cruces en Polea Alta", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-crossover.gif",
                description: "De pie, cruza los brazos frente a ti utilizando las poleas altas para trabajar el pecho."
            }
        ],
        "triceps": [
            { 
                name: "Extensiones de Tríceps con Mancuerna", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/overhead-tricep-extension.gif",
                description: "Sentado o de pie, extiende los brazos con una mancuerna sobre la cabeza."
            },
            { 
                name: "Fondos en Banco", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/bench-dips.gif",
                description: "Con las manos en un banco, baja el cuerpo doblando los codos para trabajar tríceps."
            },
            { 
                name: "Patada de Tríceps", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/tricep-kickback.gif",
                description: "Inclinado, extiende el brazo hacia atrás con una mancuerna para aislar el tríceps."
            }
        ],
        "espalda": [
            { 
                name: "Remo con Mancuerna a una Mano", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Dumbbell-Row.gif",
                description: "Apoyado en un banco, tira de la mancuerna hacia el torso manteniendo la espalda recta."
            },
            { 
                name: "Jalón al Pecho con Agarre Cerrado", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/close-grip-pulldown.gif",
                description: "Sentado en máquina con agarre cerrado, tira de la barra hacia el pecho."
            },
            { 
                name: "Pulldown en Polea Alta", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/straight-arm-pulldown.gif",
                description: "De pie frente a polea alta, extiende los brazos hacia abajo manteniéndolos rectos."
            }
        ],
        "biceps": [
            { 
                name: "Curl con Barra Recta", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/straight-bar-curl.gif",
                description: "De pie, levanta la barra recta flexionando los codos para trabajar bíceps."
            },
            { 
                name: "Curl en Banco Scott", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/preacher-curl.gif",
                description: "Sentado en banco Scott, realiza curl de bíceps con mayor aislamiento."
            },
            { 
                name: "Curl con Cable", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/cable-curl.gif",
                description: "De pie frente a polea baja, realiza curl de bíceps con cable para tensión constante."
            }
        ],
        "piernas": [
            { 
                name: "Sentadillas Frontales", 
                gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Front-Squat.gif",
                description: "Con barra apoyada en hombros frontales, realiza sentadillas para enfocar cuádriceps."
            },
            { 
                name: "Prensa Inclinada", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/incline-leg-press.gif",
                description: "Sentado en prensa inclinada, empuja la plataforma con las piernas."
            },
            { 
                name: "Curl de Femoral", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/lying-leg-curl.gif",
                description: "Tumbado boca abajo, flexiona las piernas para trabajar isquiotibiales."
            }
        ],
        "hombros": [
            { 
                name: "Press Arnold", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/arnold-press.gif",
                description: "De pie o sentado, presiona mancuernas con rotación para trabajar hombros completos."
            },
            { 
                name: "Elevaciones Frontales", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/front-raise.gif",
                description: "De pie, levanta mancuernas al frente hasta altura de hombros."
            },
            { 
                name: "Encogimientos de Hombros", 
                gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/dumbbell-shrug.gif",
                description: "De pie, encoge los hombros con mancuernas para trabajar trapecios."
            }
        ]
    }
};
