module.exports = function(req,res,next){//SIM-2 75C
    if(!req.session.user){
        req.session.user = {
            username: '',
            password: ''
        }
    }
    next(); //SIM-2 75E
}