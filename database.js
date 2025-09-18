// Base de datos de ejercicios - Ahora con días separados
const exercisesData = {
    "day1": {
     "chest": [
            { 
                name: "Primer", 
                gif: "Pictures/Chest/Day1/Primer.gif",
                description: "Keep your elbow at 90° by your side and rotate your forearm outward against the band to strengthen the rotator cuff."
            },
            { 
                name: "1. Incline DB bench press 3 sets x5-8 form failure.", 
                gif: "Pictures/Chest/Day1/1.gif",
                description: "Press dumbbells upward on an incline bench to target upper chest and shoulders."
            },
            { 
                name: "2. crossovers 3 sets x10-12", 
                gif: "Pictures/Chest/Day1/2.gif",
                description: "Pull the cables together in front of your chest to build and define the pectorals."
            },
            { 
                name: "2.1. crossovers 3 sets x10-12 +partials", 
                gif: "Pictures/Chest/Day1/2-1.gif",
                description: "Pull the cables together in front of your chest to build and define the pectorals."
            },
            { 
                name: "3. DB floor flys 2-3sets x8-10", 
                gif: "Pictures/Chest/Day1/3.gif",
                description: "Lying on the floor, open and close your arms with dumbbells to work the chest safely."
            },
            { 
                name: "3.1. DB floor flys 2-3sets x8-10 + eccentric only", 
                gif: "Pictures/Chest/Day1/3-1.gif",
                description: "Lying on the floor, open and close your arms with dumbbells to work the chest safely."
            },
            { 
                name: "4. Deficit 1.5 Rep pushup ladder 1set xfailure", 
                gif: "Pictures/Chest/Day1/4.gif",
                description: "Do push-ups on raised platforms with a half rep added each time to increase chest and triceps strength."
            },
            { 
                name: "5. Bodyweight dips 1set xfailure", 
                gif: "Pictures/Chest/Day1/5.gif",
                description: "Lower and press your body between parallel bars to target chest, shoulders, and triceps."
            },
            { 
                name: "5.1 Bodyweight dips 1set xfailure +Partials", 
                gif: "Pictures/Chest/Day1/5-1.gif",
                description: "Lower and press your body between parallel bars to target chest, shoulders, and triceps."
            }
        ],
                
        "triceps": [
            { 
                name: "1. Triceps Pushdowns 2-3sets x6-8 FF", 
                gif: "Pictures/Triceps/Day1/1.gif",
                description: "Stand at the cable machine with a slight lean. Keep elbows fixed to your sides. Push the weight down until arms are straight, flexing the triceps. Control the return."
            },
            { 
                name: "2. lying DB extensions 2-3sets x8-10 + eccentric only", 
                gif: "Pictures/Triceps/Day1/2.gif",
                description: "Lie on a bench. Hold two dumbbells overhead with upper arms vertical. Lower the weight by bending only your elbows toward your head. Extend arms to flex the triceps."
            },            
            { 
                name: "2.1. Eccentric only", 
                gif: "Pictures/Triceps/Day1/2-1.gif",
                description: "Use two hands to lift the weight. Slowly lower the dumbbell -3 or 5 seconds with one arm, bending the elbow towards the head. Use two hands to lift for the next rep"
            },
            { 
                name: "3. DB or Cable triceps kickbacks 2-3sets x10-12 +Partials.", 
                gif: "Pictures/Triceps/Day1/3.gif",
                description: "Hinge forward at the hips, keeping your back flat and elbows pinned high to your sides. Starting with your forearm vertical, kick the dumbbell back until your arm is straight, flexing the triceps. Control the return."
            },
            { 
                name: "3-1. Cable triceps kickbacks 2-3sets x10-12.", 
                gif: "Pictures/Triceps/Day1/3-1.gif",
                description: "Hinge forward at the hips, keeping your back flat and elbows pinned high to your sides. Starting with your forearm vertical, kick the dumbbell back until your arm is straight, flexing the triceps. Control the return."
            },   
            { 
                name: "3-2. Partials.", 
                gif: "Pictures/Triceps/Day1/3-2.gif",
                description: ""
            },
            { 
                name: "4. Cobra pushups 1set xF", 
                gif: "Pictures/Triceps/Day1/4.gif",
                description: "Start face down, hands under shoulders, elbows tucked. Push up until arms are fully extended, keeping the body straight. Lower slowly to complete the rep."
            }            
        ],
        "back": [
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
        "legs": [
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
        "shoulders": [
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
        "chest": [
            { 
                name: "Primer. -Band pull aparts 1-2sets 10-15 sub max.", 
                gif: "Pictures/Chest/Day2/Primer.gif",
                description: "Hold a resistance band at shoulder width with straight arms out in front. Pull the band apart (horizontally) until your arms form a 'T', squeezing your upper back/shoulder blades. Control the band as you slowly return."
            },
            { 
                name: "1. DB bench press 3set x5-8 form failure.", 
                gif: "Pictures/Chest/Day2/1.gif",
                description: "Lie on a bench holding dumbbells at your chest, palms facing forward. Press the weights up until your arms are fully extended over your shoulders. Lower slowly back to the starting position"
            },
            { 
                name: "2. High to low crossover 3sets x10-12", 
                gif: "Pictures/Chest/Day2/2.gif",
                description: "Stand between cables set high. Pull handles down and across your body toward the opposite hip, squeezing your lower chest. Control the return."
            },
            { 
                name: "2.1. Partials", 
                gif: "Pictures/Chest/Day2/2-1.gif",
                description: "Stand between cables set high. Pull handles down and across your body toward the opposite hip, squeezing your lower chest. Control the return."
            },
            { 
                name: "3. incline cable press 2-3set x8-10 form failure", 
                gif: "Pictures/Chest/Day2/3.gif",
                description: "Set cables low, use an incline bench. Lie back and press the handles up and slightly inward over your upper chest. Control the return."
            },
            { 
                name: "4. 1.5 Rep dip ladder 1set xfailure - fondos 1.5 x1set", 
                gif: "Pictures/Chest/Day2/4.gif",
                description: "Perform Dips using an ascending rep scheme (e.g., 1, 2, 3...). Rest briefly between sets. Stop when near failure, then restart the ladder from rep 1."
            },
            { 
                name: "5. Prision yard pushup 1set xfailure", 
                gif: "Pictures/Chest/Day2/5.gif",
                description: "A Push-Up using a very wide hand position (much wider than shoulders) to maximize chest engagement. Keep the body straight."
            }            
        ],
        "triceps": [
            { 
                name: "1. PJR pullovers 2-3sets x6-8FF.", 
                gif: "Pictures/Triceps/Day2/1.gif",
                description: "Lie on a bench. Lower the dumbbell behind your head by bending the elbows for a deep triceps stretch. Extend the arms and pull the weight up, focusing on the triceps."
            },
            { 
                name: "2. Cable triceps pushaways 2-3sets x10-12 +Partials.", 
                gif: "Pictures/Triceps/Day2/2.gif",
                description: "Face away from the cable machine. Push the handle forward from behind your head until arms are straight. Control the weight back."
            },
            { 
                name: "2.1. Partials", 
                gif: "Pictures/Triceps/Day2/2-1.gif",
                description: "Face away from the cable machine. Push the handle forward from behind your head until arms are straight. Control the weight back."
            },
            { 
                name: "3. X pushdowns 2-3sets x10-12 +Partials.", 
                gif: "Pictures/Triceps/Day2/3.gif",
                description: "Use two high cables, grabbing the opposite handles. Push both cables down in an 'X' motion until arms are straight. Control back up."
            },
            { 
                name: "3.1. Partials.", 
                gif: "Pictures/Triceps/Day2/3-1.gif",
                description: "Use two high cables, grabbing the opposite handles. Push both cables down in an 'X' motion until arms are straight. Control back up."
            },
            { 
                name: "4. Bench dips 1set xF", 
                gif: "Pictures/Triceps/Day2/4.gif",
                description: "Place hands on a bench. Lower your body by bending your elbows to 90º. Push back up using your triceps."
            }
        ],
        "back": [
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
        "legs": [
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
        "shoulders": [
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
