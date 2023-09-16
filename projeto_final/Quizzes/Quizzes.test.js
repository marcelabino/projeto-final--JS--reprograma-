const { Quizzes } = require('./Quizzes');
const { Users } = require('../Users/Users');

describe('Test Quizzes class', () => {
    const usuario_1 = new Users ('Maria', '2000-09-20', 'maria@gmail.com', 'Centro', 1000, false);
    const quiz_1 = new Quizzes();

    it('Should return Error if user different of Users class', () => {
        const usuario_2 = new Quizzes();
        expect(quiz_1.answersQuiz(true, usuario_2)).toEqual(Error);
    });

    it('Should return frontend to profile', () => {
        usuario_1.checkAge();
        usuario_1.acceptTerms();
        quiz_1.answersQuiz(true, usuario_1);
        expect(quiz_1.profile).toEqual('frontend');
    });
})