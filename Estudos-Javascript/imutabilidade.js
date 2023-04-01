//em linguagens funcionais, os dados nunca mudam, os dados são imutaveis
//se vc precisa mudar um item, vc vai criar um novo
//um objeto nunca vai ser atualizado, vai ser criado um novo

const user = {
    name: "Takeo",
    lastName: "Yuahasi"
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName)

//exemplo 2

const students = [
    {
        name: "Grace",
        grade: 6
    },
    {
        name: "Jennifer",
        grade: 4
    },
    {
        name: "Paul",
        grade: 9
    }
]

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7)
}

console.log("Alunos aprovados: ");
console.log(getApprovedStudents(students));

console.log("\nLista de alunos: ");
console.log(students); 
