const { Institutions } = require('../Institutions/Institutions');
const { Students } = require('../Students/Students');
const { Quizzes } = require('../Quizzes/Quizzes');
const { Users } = require('../Users/Users'); 

class Message {
    
    constructor(){
    }

    sendEmail(student) {
        if(student instanceof Students) {
            let linkIndex = Institutions.createdInstitutions.findIndex((element) => element.nameInstitution === student.school);
            return console.log(`${student.name}, você está matriculado(a) na escola ${student.school} para fazer o curso ${student.curse}. Para assistir as aulas acesse o link: ${Institutions.createdInstitutions[linkIndex].link}`);
        }         
    }
}

const usuario_1 = new Users ('Maria', '2000-09-20', 'maria@gmail.com', 'Centro', 1000, false);
const quiz_1 = new Quizzes();
const aluno_1 = new Students('Maria', '2000-09-20', 'maria@gmail.com', 'Centro', 1000, false, quiz_1);

console.log(usuario_1.checkAge()); //22
usuario_1.acceptTerms(); //como quebrar quando o termo não é aceito? Pq o valor 2000 > 1500

quiz_1.answersQuiz(false, usuario_1);
console.log(quiz_1.profile); //frontend
console.log(aluno_1.type(usuario_1)); //frontend
console.log(aluno_1.profile); //frontend

const instituicao_1 = new Institutions('FFFFF', 'www.FFFFF.com.br', 'frontend', 'HTML e CSS');
const instituicao_2 = new Institutions('BBBBB', 'www.BBBB.com.br', 'backend', 'JavaScript');

aluno_1.registration();
//console.log(aluno_1.school); //FFFFF
//console.log(aluno_1.curse); //HTML e CSS

const mensagem_1 = new Message();
mensagem_1.sendEmail(aluno_1); //Maria, você está matriculado(a) na escola FFFFF para fazer o curso HTML e CSS. Para assistir as aulas acesse o link: www.FFFFF.com.br