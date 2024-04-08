
const { ObjectId } = require('mongodb')
var Users=require('../config/schema')

module.exports={

    addProduct:(product,callback)=>{
    

        Users.create(product).then((data)=>{
           console.log(data)
           console.log(data._id)
          callback(data[0].id)
     })
    },
    
         getAllproduct:()=>{
        return new Promise( async(resolve,reject)=>{

            let products=Users.find({}).lean()
                 
            resolve(products)
        })

    }
}