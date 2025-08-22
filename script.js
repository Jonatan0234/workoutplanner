// Datos de ejercicios con URLs de GIFs de ejemplo
const exercisesData = {
    "pecho": [
        { 
            name: "Press de Banca", 
            <img src="Pictures/1. Inclined DB bench press 3 sets x5-8 form failure.gif" alt="Un gif animado">,
            description: "Acostado en un banco, baja la barra al pecho y luego empuja hacia arriba. Mantén la espalda apoyada y los pies firmes en el suelo."
        },
        { 
            name: "Press Inclinado con Mancuernas", 
            gif: "https://www.fitnessrxformen.com/wp-content/uploads/2016/09/Dumbbell-Incline-Press.gif",
            description: "Acostado en banco inclinado (30-45°), empuja las mancuernas hacia arriba hasta extender completamente los brazos."
        },
        { 
            name: "Aperturas en Banco Plano", 
            gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/07/dumbbell-fly.gif",
            description: "Acostado en banco plano, abre los brazos con mancuernas manteniendo una ligera flexión de codos, luego vuelve a la posición inicial."
        }
    ],
    "triceps": [
        { 
            name: "Fondos en Paralelas", 
            gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/triceps-dips.gif",
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
};

// Variables globales
let currentExercise = null;
let currentMuscleGroup = null;
let progressChart = null;
let currentRoutine = null;
let currentDay = null;

// Elementos DOM
const routineHeaders = document.querySelectorAll('.routine-header');
const dayItems = document.querySelectorAll('.day-item');
const muscleItems = document.querySelectorAll('.muscle-item');
const exerciseTitle = document.getElementById('exercise-title');
const exercisesContainer = document.getElementById('exercises-container');
const setsContainer = document.getElementById('sets-container');
const saveBtn = document.getElementById('save-btn');
const showProgressBtn = document.getElementById('show-progress');
const progressSection = document.getElementById('progress-section');
const exerciseFilter = document.getElementById('exercise-filter');
const muscleFilter = document.getElementById('muscle-filter');
const dateFilter = document.getElementById('date-filter');
const progressData = document.getElementById('progress-data');
const backBtn = document.getElementById('back-btn');
const selectedExerciseEl = document.getElementById('selected-exercise');
const welcomeMessage = document.getElementById('welcome-message');
const exerciseDisplay = document.getElementById('exercise-display');

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners para menús
    routineHeaders.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const routine = item.getAttribute('data-routine');
            currentRoutine = routine;
            
            // Alternar la clase active en el submenu de la rutina
            const submenu = item.nextElementSibling;
            submenu.classList.toggle('active');
            item.classList.toggle('active');
            
            // Cerrar otros submenús de rutinas
            document.querySelectorAll('.routine-header').forEach(r => {
                if (r !== item) {
                    r.classList.remove('active');
                    r.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // Event listeners para los días
    dayItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const day = item.getAttribute('data-day');
            currentDay = day;
            
            // Encontrar el submenu de músculos (siguiente elemento hermano)
            const muscleSubmenu = item.nextElementSibling;
            
            // Alternar la visibilidad del submenu de músculos
            muscleSubmenu.classList.toggle('active');
            item.classList.toggle('active');
            
            // Cerrar otros submenús de músculos en el mismo día
            const parentDay = item.parentElement;
            parentDay.parentElement.querySelectorAll('.muscle-submenu').forEach(menu => {
                if (menu !== muscleSubmenu) {
                    menu.classList.remove('active');
                }
            });
            
            // También quitamos la clase active de otros días en la misma rutina
            parentDay.parentElement.querySelectorAll('.day-item').forEach(dayItem => {
                if (dayItem !== item) {
                    dayItem.classList.remove('active');
                }
            });
        });
    });

    muscleItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const muscle = item.getAttribute('data-muscle');
            
            // Resaltar selección actual
            muscleItems.forEach(m => m.classList.remove('current-selection'));
            item.classList.add('current-selection');
            
            loadMuscleExercises(muscle);
        });
    });

    // Botones
    saveBtn.addEventListener('click', saveTraining);
    showProgressBtn.addEventListener('click', showProgress);
    backBtn.addEventListener('click', () => {
        progressSection.classList.remove('active');
    });
    
    // Filtros
    exerciseFilter.addEventListener('change', loadProgressData);
    muscleFilter.addEventListener('change', loadProgressData);
    dateFilter.addEventListener('change', loadProgressData);
    
    // Inicializar tabla de sets
    generateSetsTable();
    
    // Cargar datos guardados
    initializeStorage();
});

// Cargar ejercicios de un grupo muscular
function loadMuscleExercises(muscle) {
    currentMuscleGroup = muscle;
    const exercises = exercisesData[muscle];
    
    // Ocultar mensaje de bienvenida y mostrar ejercicios
    welcomeMessage.style.display = 'none';
    exerciseDisplay.style.display = 'block';
    
    // Actualizar título
    exerciseTitle.textContent = `${currentRoutine} - Day ${currentDay} - ${muscle.charAt(0).toUpperCase() + muscle.slice(1)}`;
    
    // Limpiar contenedor de ejercicios
    exercisesContainer.innerHTML = '';
    
    if (exercises && exercises.length > 0) {
        // Mostrar todos los ejercicios
        exercises.forEach(exercise => {
            const exerciseCard = document.createElement('div');
            exerciseCard.className = 'exercise-card';
            exerciseCard.innerHTML = `
                <img src="${exercise.gif}" alt="${exercise.name}">
                <h3>${exercise.name}</h3>
                <p>${exercise.description}</p>
            `;
            
            // Evento para seleccionar ejercicio
            exerciseCard.addEventListener('click', () => {
                // Quitar selección de otras tarjetas
                document.querySelectorAll('.exercise-card').forEach(card => {
                    card.classList.remove('selected');
                });
                
                // Seleccionar esta tarjeta
                exerciseCard.classList.add('selected');
                currentExercise = exercise;
                
                // Actualizar ejercicio seleccionado
                selectedExerciseEl.innerHTML = `<p>Ejercicio seleccionado: <strong>${exercise.name}</strong></p>`;
            });
            
            exercisesContainer.appendChild(exerciseCard);
        });
        
        // Seleccionar el primer ejercicio por defecto
        if (exercises.length > 0) {
            exercisesContainer.querySelector('.exercise-card').click();
        }
    } else {
        exercisesContainer.innerHTML = '<p class="empty-message">No hay ejercicios disponibles para este grupo muscular</p>';
    }
}

// Generar tabla de sets
function generateSetsTable() {
    setsContainer.innerHTML = '';
    
    for (let i = 1; i <= 4; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>Set ${i}</td>
            <td><input type="number" min="0" step="0.5" class="weight-input" id="weight-set${i}" placeholder="0"></td>
            <td><input type="number" min="0" class="reps-input" id="reps-set${i}" placeholder="0"></td>
        `;
        setsContainer.appendChild(row);
    }
}

// Guardar entrenamiento
function saveTraining() {
    if (!currentExercise) {
        alert('Por favor selecciona un ejercicio primero.');
        return;
    }
    
    const trainingData = {
        date: new Date().toISOString().split('T')[0],
        exercise: currentExercise.name,
        muscleGroup: currentMuscleGroup,
        routine: currentRoutine,
        day: currentDay,
        sets: []
    };
    
    // Recopilar datos de los sets
    for (let i = 1; i <= 4; i++) {
        const weight = document.getElementById(`weight-set${i}`).value;
        const reps = document.getElementById(`reps-set${i}`).value;
        
        if (weight || reps) {
            trainingData.sets.push({
                set: i,
                weight: weight ? parseFloat(weight) : 0,
                reps: reps ? parseInt(reps) : 0
            });
        }
    }
    
    if (trainingData.sets.length === 0) {
        alert('Por favor ingresa datos para al menos un set.');
        return;
    }
    
    // Guardar en localStorage
    const savedTrainings = JSON.parse(localStorage.getItem('workoutTrainings')) || [];
    savedTrainings.push(trainingData);
    localStorage.setItem('workoutTrainings', JSON.stringify(savedTrainings));
    
    // Limpiar formulario
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`weight-set${i}`).value = '';
        document.getElementById(`reps-set${i}`).value = '';
    }
    
    alert('¡Entrenamiento guardado correctamente!');
}

// Mostrar sección de progreso
function showProgress() {
    progressSection.classList.add('active');
    loadProgressData();
    updateExerciseFilter();
}

// Actualizar filtro de ejercicios
function updateExerciseFilter() {
    const savedTrainings = JSON.parse(localStorage.getItem('workoutTrainings')) || [];
    const exercises = [...new Set(savedTrainings.map(t => t.exercise))];
    
    exerciseFilter.innerHTML = '<option value="all">Todos los ejercicios</option>';
    
    exercises.forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise;
        option.textContent = exercise;
        exerciseFilter.appendChild(option);
    });
}

// Cargar datos de progreso
function loadProgressData() {
    const selectedExercise = exerciseFilter.value;
    const selectedMuscle = muscleFilter.value;
    const selectedDate = dateFilter.value;
    
    const savedTrainings = JSON.parse(localStorage.getItem('workoutTrainings')) || [];
    
    // Filtrar datos
    let filteredTrainings = savedTrainings;
    
    if (selectedExercise !== 'all') {
        filteredTrainings = filteredTrainings.filter(t => t.exercise === selectedExercise);
    }
    
    if (selectedMuscle !== 'all') {
        filteredTrainings = filteredTrainings.filter(t => t.muscleGroup === selectedMuscle);
    }
    
    if (selectedDate) {
        filteredTrainings = filteredTrainings.filter(t => t.date === selectedDate);
    }
    
    // Actualizar tabla
    updateProgressTable(filteredTrainings);
    
    // Actualizar gráfica
    updateProgressChart(filteredTrainings);
}

// Actualizar tabla de progreso
function updateProgressTable(trainings) {
    progressData.innerHTML = '';
    
    if (trainings.length === 0) {
        progressData.innerHTML = '<tr><td colspan="6" class="empty-message">No hay datos de entrenamiento registrados</td></tr>';
        return;
    }
    
    trainings.forEach(training => {
        const row = document.createElement('tr');
        
        // Crear celdas para cada set
        let setsHtml = '';
        for (let i = 1; i <= 4; i++) {
            const setData = training.sets.find(s => s.set === i);
            setsHtml += `<td>${setData ? `${setData.weight || '0'} kg x ${setData.reps || '0'} reps` : '-'}</td>`;
        }
        
        row.innerHTML = `
            <td>${training.date}</td>
            <td>${training.exercise}</td>
            ${setsHtml}
        `;
        progressData.appendChild(row);
    });
}

// Actualizar gráfica de progreso
function updateProgressChart(trainings) {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    
    // Destruir gráfica anterior si existe
    if (progressChart) {
        progressChart.destroy();
    }
    
    if (trainings.length === 0) {
        // Mostrar mensaje si no hay datos
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('No hay datos para mostrar', ctx.canvas.width / 2, ctx.canvas.height / 2);
        return;
    }
    
    // Preparar datos para la gráfica
    const dates = [...new Set(trainings.map(t => t.date))].sort();
    const exercise = trainings[0].exercise;
    
    // Calcular el peso máximo por fecha
    const maxWeightData = {};
    trainings.forEach(training => {
        const maxWeight = Math.max(...training.sets.map(s => s.weight || 0));
        if (!maxWeightData[training.date] || maxWeight > maxWeightData[training.date]) {
            maxWeightData[training.date] = maxWeight;
        }
    });
    
    const weightValues = dates.map(date => maxWeightData[date]);
    
    // Crear gráfica
    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: `Peso Máximo (${exercise})`,
                data: weightValues,
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#e74c3c',
                pointRadius: 5,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    },
                    title: {
                        display: true,
                        text: 'Peso (kg)',
                        color: 'white'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    },
                    title: {
                        display: true,
                        text: 'Fecha',
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Progreso de Peso Máximo',
                    color: 'white',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
}

// Inicializar localStorage si es necesario
function initializeStorage() {
    if (!localStorage.getItem('workoutTrainings')) {
        localStorage.setItem('workoutTrainings', JSON.stringify([]));
    }
}
