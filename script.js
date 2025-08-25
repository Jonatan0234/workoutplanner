// Variables globales
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
const showProgressBtn = document.getElementById('show-progress');
const progressSection = document.getElementById('progress-section');
const exerciseFilter = document.getElementById('exercise-filter');
const muscleFilter = document.getElementById('muscle-filter');
const dateFilter = document.getElementById('date-filter');
const progressData = document.getElementById('progress-data');
const backBtn = document.getElementById('back-btn');
const welcomeMessage = document.getElementById('welcome-message');
const exerciseDisplay = document.getElementById('exercise-display');
const progressModal = document.getElementById('progress-modal');
const closeModalBtn = document.getElementById('close-modal');
const clearHistoryBtn = document.getElementById('clear-history');


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
    
    // Event listeners para el modal
    closeModalBtn.addEventListener('click', () => {
        progressModal.style.display = 'none';
    });

    document.querySelector('.close').addEventListener('click', () => {
        progressModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === progressModal) {
            progressModal.style.display = 'none';
        }
    });


        // Event listener para borrar historial
        clearHistoryBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres borrar todo el historial? Esta acción no se puede deshacer.')) {
                localStorage.setItem('workoutTrainings', JSON.stringify([]));
                loadProgressData();
                alert('Historial borrado correctamente.');
            }
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
    showProgressBtn.addEventListener('click', showProgress);
    backBtn.addEventListener('click', () => {
        progressSection.classList.remove('active');
    });

    // Filtros
    exerciseFilter.addEventListener('change', loadProgressData);
    muscleFilter.addEventListener('change', loadProgressData);
    dateFilter.addEventListener('change', loadProgressData);

    // Cargar datos guardados
    initializeStorage();
});

// Cargar ejercicios de un grupo muscular
function loadMuscleExercises(muscle) {
    currentMuscleGroup = muscle;
    // Obtener ejercicios para el día actual
    const exercises = exercisesData[`day${currentDay}`][muscle];


    // Ocultar mensaje de bienvenida y mostrar ejercicios
    welcomeMessage.style.display = 'none';
    exerciseDisplay.style.display = 'block';

    // Actualizar título
    exerciseTitle.textContent = `${currentRoutine} - Day ${currentDay} - ${muscle.charAt(0).toUpperCase() + muscle.slice(1)}`;

    // Limpiar contenedor de ejercicios
    exercisesContainer.innerHTML = '';

    if (exercises && exercises.length > 0) {
        // Mostrar todos los ejercicios
        exercises.forEach((exercise, index) => {
            const exerciseItem = document.createElement('div');
            exerciseItem.className = 'exercise-item';
            exerciseItem.innerHTML = `
                <div class="exercise-content">
                    <div class="exercise-info">
                        <img src="${exercise.gif}" alt="${exercise.name}" class="exercise-gif">
                        <h3 class="exercise-name">${exercise.name}</h3>
                        <p class="exercise-description">${exercise.description}</p>
                    </div>
                    <div class="exercise-tracking">
                        <h3 class="tracking-title">Registra tu entrenamiento</h3>
                        <table class="tracking-table">
                            <thead>
                                <tr>
                                    <th>Set</th>
                                    <th>Peso (kg)</th>
                                    <th>Repeticiones</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${generateSetsTable(index)}
                            </tbody>
                        </table>
                        <button class="save-btn" data-exercise="${exercise.name}" data-index="${index}">
                            <i class="fas fa-save"></i> Guardar
                        </button>
                    </div>
                </div>
            `;

            exercisesContainer.appendChild(exerciseItem);
        });

        // Agregar event listeners a los botones de guardar
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const exerciseName = e.target.getAttribute('data-exercise');
                const exerciseIndex = e.target.getAttribute('data-index');
                saveTraining(exerciseName, exerciseIndex);
            });
        });
    } else {
        exercisesContainer.innerHTML = '<p class="empty-message">No hay ejercicios disponibles para este grupo muscular</p>';
    }
}

// Generar tabla de sets para un ejercicio específico
function generateSetsTable(exerciseIndex) {
    let setsHTML = '';
    for (let i = 1; i <= 4; i++) {
        setsHTML += `
            <tr>
                <td>Set ${i}</td>
                <td><input type="number" min="0" step="0.5" class="weight-input" id="weight-${exerciseIndex}-set${i}" placeholder="0"></td>
                <td><input type="number" min="0" class="reps-input" id="reps-${exerciseIndex}-set${i}" placeholder="0"></td>
            </tr>
        `;
    }
    return setsHTML;
}

// Guardar entrenamiento para un ejercicio específico
function saveTraining(exerciseName, exerciseIndex) {
    const trainingData = {
        date: new Date().toISOString().split('T')[0],
        exercise: exerciseName,
        muscleGroup: currentMuscleGroup,
        routine: currentRoutine,
        day: currentDay,
        sets: []
    };

    // Recopilar datos de los sets
    for (let i = 1; i <= 4; i++) {
        const weight = document.getElementById(`weight-${exerciseIndex}-set${i}`).value;
        const reps = document.getElementById(`reps-${exerciseIndex}-set${i}`).value;

        if (weight || reps) {
            trainingData.sets.push({
                set: i,
                weight: weight ? parseFloat(weight) : 0,
                reps: reps ? parseInt(reps) : 0
            });
        }
    }

    if (trainingData.sets.length === 0) {
        return; // No mostrar alerta, simplemente no guardar
    }

    // Guardar en localStorage
    const savedTrainings = JSON.parse(localStorage.getItem('workoutTrainings')) || [];
    savedTrainings.push(trainingData);
    localStorage.setItem('workoutTrainings', JSON.stringify(savedTrainings));

    // Limpiar formulario
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`weight-${exerciseIndex}-set${i}`).value = '';
        document.getElementById(`reps-${exerciseIndex}-set${i}`).value = '';
    }

    // No mostrar mensaje de confirmación
}

// Mostrar sección de progreso
function showProgress() {
    progressModal.style.display = 'block';
    loadProgressData();
    updateExerciseFilter();
}


// Reemplazar la función showProgress
function showProgress() {
    const modal = document.getElementById('progress-modal');
    modal.style.display = 'block';
    loadProgressData();
    updateExerciseFilter();
}

// Agregar event listeners para cerrar el modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('progress-modal').style.display = 'none';
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('progress-modal').style.display = 'none';
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    const modal = document.getElementById('progress-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Función para borrar historial
document.getElementById('clear-history').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres borrar todo el historial? Esta acción no se puede deshacer.')) {
        localStorage.setItem('workoutTrainings', JSON.stringify([]));
        loadProgressData(); // Recargar los datos (que estarán vacíos)
    }
});

// Eliminar la sección de progreso del display-section ya que ahora está en el modal
// En index.html, quité la sección progress-section que estaba en display-section




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
