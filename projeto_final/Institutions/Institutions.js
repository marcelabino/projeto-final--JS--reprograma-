class Institutions {
    nameInstitution;
    link;
    typeInstitution;

    static createdInstitutions = [];

    constructor(nameInstitution, link, typeInstitution, curse) {
        this.nameInstitution = nameInstitution;
        this.link = link;
        this.typeInstitution = typeInstitution;
        this.curse = curse;
        this.constructor.createdInstitutions.push({
            nameInstitution: this.nameInstitution,
            link: this.link,
            typeInstitution: this.typeInstitution,
            curse: this.curse    
        });
    }
}

module.exports = { Institutions };


