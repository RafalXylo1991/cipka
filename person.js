const personDAO = require('./PersonDAO');
class PersonSevice{
    createPerson(personData){
        const {name,age,sex}=personData;
            personDAO.createPerson(name,age,sex); 

            


    }


}
module.exports= new PersonSevice();