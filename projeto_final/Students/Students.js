const { Users } = require('../Users/Users');
const { Quizzes } = require('../Quizzes/Quizzes');
const { Institutions } = require('../Institutions/Institutions');

class Students extends Users {
    
    constructor(name, dateBirth, email, location, monthlyIncome, job, form) {
        if (!(form instanceof Quizzes)) {
            return new Error('Informe um formulário válido!')
        }
        super(name, dateBirth, email, location, monthlyIncome, job);
        this.form = form;
        this.profile = '';
        this.school = '';
        this.curse = '';        
    }  

    type(user) {
        if (!(user instanceof Users)) {
            return Error;
        } else if (user.terms === true) {
            if (this.form.profile === 'frontend') {
            return this.profile = 'frontend';
            } else if (this.form.profile === 'backend') {            
            return this.profile = 'backend';
            }
        } else {
        return Error;
        }
    }
     
    registration() {
        let schoolIndex = Institutions.createdInstitutions.findIndex((element) => element.typeInstitution === this.profile);
        this.school = Institutions.createdInstitutions[schoolIndex].nameInstitution;
        this.curse = Institutions.createdInstitutions[schoolIndex].curse;
        }
}
        
module.exports = { Students };

/*
const quiz_1 = new Quizzes();
const aluno_1 = new Students('Maria', '2000-09-20', 'maria@gmail.com', 'Centro', 1000, false, quiz_1);

console.log(aluno_1.checkAge()); //22
console.log(aluno_1.acceptTerms()); //como quebrar quando o termo não é aceito?

quiz_1.answersQuiz(true);
console.log(quiz_1.profile); //frontend
console.log(aluno_1.type()); //frontend
console.log(aluno_1.profile); //frontend

const instituicao_1 = new Institutions('FFFFF', 'www.FFFFF.com.br', 'frontend', 'HTML e CSS');
const instituicao_2 = new Institutions('BBBBB', 'www.BBBB.com.br', 'backend', 'JavaScript');

aluno_1.registration();
console.log(aluno_1.school); //FFFFF
console.log(aluno_1.curse); //HTML e CSS
*/