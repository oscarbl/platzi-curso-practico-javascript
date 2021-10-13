const notes = [
    {
    course: "Educación Física",
    note: 10,
    credit: 2,
    },
    {
    course: "Programación",
    note: 8,
    credit: 5,
    },
    {
    course: "Finanzas Personales",
    note: 7,
    credit: 5,
    },
];

// [(n1*c1)+(n2*c2)+(n3*c3)] / (c1 + c2 + c3)
// N = note
// C = credit

// Multiplicar cada número de lista por su peso
const notesWidthCredit = notes.map(function(noteObject){
    return noteObject.note * noteObject.credit;
});

// Sumar todos los elementos del arreglo multiplicados por su peso

const sumOfNotesWithCredit = notesWidthCredit.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);

// Sumar todos los pesos (creditos)
const credits = notes.map(function (noteObject){
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum=0, newVal){
        return sum + newVal;
    }
);

// Hacer la división entre ambas sumas
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
