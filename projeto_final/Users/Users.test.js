const { Users } = require('./Users');

describe('Test Users class', () => {
    const usuario_1 = new Users ('Maria', '2000-09-20', 'maria@gmail.com', 'Centro', 1000, false);

    it('Should return age equal 23', () => {
        expect(usuario_1.checkAge()).toEqual(23);
    }); 

    it('Should return true for terms', () => {
        usuario_1.checkAge();
        usuario_1.acceptTerms();
        expect(usuario_1.terms).toEqual(true);
    });
});