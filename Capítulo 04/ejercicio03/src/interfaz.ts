interface Person {
    ssn: string;
    firstName: string;
    lastName: string; 
    age: number;
    married: boolean;   
}

let interfazPropiedades = () => {

	//Defina la variable person de acuerdo con la interfaz Person
    
	/* Inicio */
    let person = {
        ssn: "0987654321",
        firstName: "Nick",
        lastName: "Arevalo", 
        age: 22,
        married: true
    }
	/* Fin */

	return person
}

console.log(interfazPropiedades())

export {interfazPropiedades}
//las interfaces definen los contratos en mi codigo
    //proveen de nombres explicitos para revisar tipos