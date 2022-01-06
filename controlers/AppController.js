

exports.split=(req,res,next)=>{

const tab = req.body.ame.split(' ');
req.body.first=tab.shift()
next();
}
