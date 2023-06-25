//Agregue el tipo a las propiedades, parámetros y métodos
// ssn: number
// firstName y lastName: string

/* Inicio */
class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn: number, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
/* Fin */

let claseInstanciacion = () => {

	//Instancie la clase persona en la variable person 

	/* Inicio */
	let person = new Person(987654321,"Nick","Arevalo");
    console.log(person.getFullName());
	/* Fin */

	return person
}

console.log(claseInstanciacion())

export {claseInstanciacion}