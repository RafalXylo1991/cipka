
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
              id:6,
              name: req.body.ame,
              wiek: req.body.age,
              sex: req.body.sex
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
               
                
                for (row of rows) {
                    
                   
                    
                       
               
                cycki.push( {
                    name:row.name,
                    age:row.wiek,
                    sex:row.sex,
                    src:row.imgsrc
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
