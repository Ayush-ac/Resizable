// const User = require("../Models/User");

//  const Create = async(req,res) =>{
//     try {

//         const {name} = req.body;

//         if(!name){
//             res.status(400);
//             throw new Error("please enter all fields");
//         }

//         const user = await User.Create ({
//             name
//         })

//         if(user){
//             res.status(201).json({
//                 _id: user._id,
//                 name: user.name
//             })  
//         }else{
//             res.status(400);
//             throw new Error("fail to create user");
//         }

      
//     } catch (error) {
//         res.status(500).json({errorMessage:error.message});
//     }
// }

// module.exports = {Create}
