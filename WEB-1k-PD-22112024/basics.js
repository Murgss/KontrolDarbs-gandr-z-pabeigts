




function testnum(personAge) {
    let result;
    if (personAge >= 18) {
        result = 'Ir Pilngadīgs'
    } else {
        result = 'Nepilngadīgs'
    }
    return result;
}

console.log(testnum(17))


const people = [ "Jānis", "Anna", "Zaiga"];
people.sort();
console.log(people)