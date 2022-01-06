
exports.add=(req,res)=>{
    var knex = require('knex')({
        client: 'pg',
        connection: {
            host: '44.192.106.205',
            port: '5432',
            user: 'cqjfwevhnzxylb',
            password: 'ce621d9ec5436ed08682da6e9312d30351fb9d9aa064e68456b7b4644cc25de7',
            database: 'dbv35e6rfu874d',
            
        }
    });
    

        try{
            knex('person')
            .insert({
              name: req.body.ame,
              age: req.body.age,
              sex: req.body.sex,
              src: req.body.srcimg
            }).then(() => console.log("data inserted"))
            .catch((err) => { console.log(err); throw err })
            .finally(() => {
                knex.destroy();
            });
        
            
    }catch(err){
        console.log(err)
    }
  

    res.send(
{
name: req.body.ame,
wiek: req.body.age,
sex: req.body.sex
}

    )
}
var is=false;
const cycki =[{


}]
exports.print = (req,res) =>{

    var knex = require('knex')({
        client: 'pg',
        connection: {

            host: '44.192.106.205',
            port: '5432',
            user: 'cqjfwevhnzxylb',
            password: 'ce621d9ec5436ed08682da6e9312d30351fb9d9aa064e68456b7b4644cc25de7',
            database: 'dbv35e6rfu874d',
           
            
        }
    });

        try{
            knex.from('person').select("*")
            .then((rows) => {
               
                
                for (row of rows) {
                    
                   
                    
                       
               
                cycki.push( {
                    name:row.name,
                    age:row.wiek,
                    sex:row.sex,
                    src:row.src
                   })
                 
                }
                if(is==false){
                res.render('printPerson',{per:cycki});
                is=true;
                }
            }).catch((err) => { console.log( err); throw err })
            .finally(() => {
                knex.destroy();
            });
         
    }catch(err){
        console.log(err)
    }
    
 
   

      

}
