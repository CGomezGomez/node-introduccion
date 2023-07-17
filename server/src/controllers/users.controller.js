const controller = {};
const path = require('path');
const numbersFile = path.resolve(__dirname , '../../data/numbers.json')
const usersFile = path.resolve(__dirname , '../../data/users.json')
const fs = require('fs/promises');


controller.getUsers = async(req , res) => {
    fs.readFile(usersFile , (err,data) => {
        res.send(JSON.parse(data))
    });

    try{
        const data = await  fs.readFile(usersFile)
        const jsonData = await JSON.parse(data)

        res.send(jsonData)
    }catch(err){
        res.send('Error al leer archivo');
    }
};

controller.getUsersById = async(req,res) => {
    console.log(req.params.userId);
    try{
        const data = await  fs.readFile(usersFile)
        const jsonData = await JSON.parse(data)
        const user = jsonData.find(user => user.userId===req.params.userId)
        res.send(user)
    }catch(err){
        res.send('Error al leer archivo');
    }

}

controller.createUser = async(req,res)=>{
    try{
        const  newUser = {
        "userId": "356236ef-a50c-4bc7-9fa6-66450119634f-123",
        "title": "Miss",
        "name": "Laura Méndez",
        "age": 24,
        "username": "Laura24",
        "email": "LauraMendez24@yahoo.com",
        "profileImage": "https://randomuser.me/api/portraits/women/6.jpg",
        "active": true
        };

        const data = await  fs.readFile(usersFile);
        const jsonData = await JSON.parse(data);

        const newData = [...jsonData, newUser]

        fs.writeFile(usersFile, JSON.stringify(newData));
    } catch(err){
        res.send('Error al guardar usuario');
    }
};


controller.writeNumber = (req , res) => {

    console.log(req.body);

    fs.writeFile(numbersFile, JSON.stringify(req.body));

};


module.exports = controller

