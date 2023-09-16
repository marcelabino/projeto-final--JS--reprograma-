class Users {
    name;
    dateBirth;
    email;
    location;
    monthlyIncome;
    job;
    answerAcceptTerms;

    income = 1500;

    constructor(name, dateBirth, email, location, monthlyIncome, job){
        this.name = name;
        this.dateBirth = dateBirth;
        this.email = email;
        this.location = location;
        this.monthlyIncome = monthlyIncome;
        this.job = job;        
        this.age = 0;
        this.terms = false;
    }    

    checkAge(){
        let date = new Date();
        let dateBirth = new Date(this.dateBirth);
        let diff = (date - dateBirth) / (1000 * 60 * 60 * 24 * 365);
        this.age = Math.floor(diff);        
        return this.age;
    }

    acceptTerms() {
        if (this.age >= 18 && this.monthlyIncome <= this.income && this.job === false) {   
            this.terms = true;         
            return console.log('Os termos para realizar o cadastro foram aceitos!');
        } else {            
           return console.log('Os termos para realizar o cadastros foram negados! A operação será finalizada.');
        }
    }
}

module.exports = { Users };

/*
const aluno_1 = new Users('Maria', '2000-09-20', 'maria@gmail.com', 'Centro', 1000, false, '');
aluno_1.checkAge();
aluno_1.acceptTerms();
*/
