

class Person
{
    constructor(birthYear)
    {
        this.birthYear = birthYear;
        this.age = this.calculateAge(new Date(`01/01/${birthYear}`));
    }

    calculateAge(birthday)
    {
        let ageDiffMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDiffMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    isMillenial()
    {
        return this.birthYear > 1982;
    }

    isRetiree()
    {
        return this.age >= 65;
    }
} 


// let result = new Person(1983);

// console.log(result);
// console.log(result.isRetiree());
// console.log(result.isMillenial());

module.exports = Person;