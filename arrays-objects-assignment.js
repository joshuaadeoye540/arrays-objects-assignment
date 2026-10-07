//TASK 1 ----CREATE AN ARRAY OF STUDENT OBJECTS
const students = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 20,
        grades: [85, 90, 78]
    },
    {
        id: 2,
        name: "John Doe",
        age: 21,
        grades: [70, 65, 80]
    },
    {
        id: 3,
        name: "Adeoye Joshua",
        age: 19,
        grades: [92, 90, 95]
    },
    {
        id: 4,
        name: "David Williams",
        age: 22,
        grades: [55, 60, 58]
    },
    {
        id: 5,
        name: "Esther Okafor",
        age: 23,
        grades: [65, 60, 68]
    }
];

console.log(students);



// TASK 2----CALCULATE THE AVERAGE OF THE GRADES
function calculateAverage(grades){
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;

    return Number(average.toFixed(2));
}


//ADD THA AVERAGE PROPERTY TO EACH STUDENT USING MAP()
const studentsWithAverage =
students.map(student => {
    return {
        ...student,
        average:calculateAverage(student.grades)
    };
});

console.log(studentsWithAverage);


//TASK 3----FILTER PASSING STUDENTS( get students who passed )
function getPassingStudents(students) {
    return students.filter(student => student.average >= 60);
}

const passing =
getPassingStudents(studentsWithAverage);

console.log(passing);


//TASK 4----FUNCTIONS AND CALLBACKS
function processStudents(students, callback) {
    return students.map(student => callback(student));
}

function addLetterGrade(student) {
    let letterGrade;

    if(student.average >= 90) {
        letterGrade = "A";
    } else if (student.average >= 80) {
        letterGrade = "B";
    } else if (student.average >= 70) {
        letterGrade = "C";
    } else if (student.average >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    return {
        ...student,
        letterGrade:letterGrade
    };
}

//ADD PASS OR FAIL BASE ON THE STUDENT'S AVERAGE
function addStatus(student) {
    return {
        ...student,
        status:student.average >= 60 ? "Pass" : "Fail"
    };
}


//Test the addLetterGrade callback
const studentsWithGrades = processStudents(
    studentsWithAverage, addLetterGrade
);

console.log(studentsWithGrades);


//Test the add satus callback
const studentsWithStatus = processStudents(
    studentsWithAverage, addStatus
);

console.log(studentsWithStatus);