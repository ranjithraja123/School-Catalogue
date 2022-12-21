class SchoolCatalog {
    constructor(Schoolnames) {
        this._Schoolnames = Schoolnames;

    }

    get Schoolnames() {
        return this._Schoolnames;
    }
}

class School {
    constructor(name,level,numberofStudents) {
        this._name = name;
        this._level = level;
        this._numberofStudents = numberofStudents;
    }

    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberofStudents() {
        return this._numberofStudents;
    }

    quickFacts() {
        console.log( this.name + " educates " + this.numberofStudents + " students at the "  + this.level + " school level.")
    }

    static pickSubstituteTeacher(...substituteTeachers) {
        let index =  Math.floor(Math.random() * (substituteTeachers.length - 1));
        console.log(substituteTeachers[index]);
    }



    set numberofStudents(numberofStudents) {

        if (typeof numberofStudents == "number" ) {
            
        }

        else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }

    }

    
  
}

class PrimarySchool extends School{
    constructor(name,level,numberofStudents,pickupPolicy) {
        super(name,level,numberofStudents);
        this._pickupPolicy = pickupPolicy;
    }

        get pickupPolicy(){
            return this._pickupPolicy;

        }
}

class middleSchool extends SchoolCatalog {
    constructor(Schoolnames ,averageTestScores) {
        super(Schoolnames);
        this._averageTestScores=averageTestScores;
    }
        get averageTestScores() {
            return this._averageTestScores
        }
    

}


class HighSchool extends School {
    constructor(name,level,numberofStudents,sportsTeams ) {
        super(name,level,numberofStudents);
        this._sportsTeams  = sportsTeams;
    }

        get sportsTeams(){
            return this._sportsTeams;

        }


}

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury",'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' );
lorraineHansbury.quickFacts()
School.pickSubstituteTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli')
const alsmith = new HighSchool("Al E. Smith","Higher",415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alsmith.sportsTeams);



