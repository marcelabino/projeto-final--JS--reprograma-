const { Users } = require('../Users/Users');

class Quizzes {
    profile;

    constructor(){
        this.profile = '';
    }

    answersQuiz(answer, user) {    
        if (!(user instanceof Users)) {
            return Error;
        } else if (user.terms === true) {
            if (answer === true) {
            return this.profile = 'frontend';
            } else if (answer === false) {
               return this.profile = 'backend';
            } 
        } else {
            return Error;  
        }
    }
} 


module.exports = { Quizzes };

