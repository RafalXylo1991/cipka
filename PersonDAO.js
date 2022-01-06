const db = require('./db')
class PersonDAO{
async createPerson(name,age,sex){
const [id] = await db('person')
.insert({
    name,
    age,
    sex
})

}



}