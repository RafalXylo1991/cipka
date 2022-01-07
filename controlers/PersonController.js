
exports.add=(req,res)=>{
    var knex = require('knex')({
        client: 'pg',
        connection: {
            host: 'localhost',
            port: '5432',
            user: 'xyloh',
            password: 'xylo1991',
            database: 'cycki'
        }
    });
    

        try{
            knex('person')
            .insert({
              
              name: req.body.ame,
              age:  req.body.age,
              sex:  req.body.sex
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
            host: 'localhost',
            port: '5432',
            user: 'xyloh',
            password: 'xylo1991',
            database: 'cycki'
       
        }
    });

        try{
            knex.from('person').select("*")
            .then((rows) => {
               
                
               
                if(is==false){
                    for (row of rows) {
                    
                   
                    
                       
               
                        cycki.push( {
                            name:row.name,
                            age:row.age,
                            sex:row.sex,
                            src:row.src
                           })
                         
                        }
                is=true;
                }
                res.render('printPerson',{per:cycki})
                
            }).catch((err) => { console.log( err); throw err })
            .finally(() => {
                knex.destroy();
            });
         
    }catch(err){
        console.log(err)
    }
    
 
   

      

}
