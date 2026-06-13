const redis = require ("./redis.config");
class RedisModel {
    static insert (){
        try {
return redis.hset("ribbon",data)
        }catch(error){
            console.log("Error",error);
            
        }
    };
     static async update (){
        try {

        }catch(error){
            console.log("Error",error);
            
        }
    }; static async deleteOne (){
        try {

        }catch(error){
            console.log("Error",error);
            
        }
    };
     static async deleteAll (){
        try {

        }catch(error){
            console.log("Error",error);
            
        }
    };
     static async  getAll(){
        try {

        }catch(error){
            console.log("Error",error);
            
        }
    }


};
module.exports = RedisModel;
