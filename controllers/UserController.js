const {
    createUser,
    findUser
} = require('../services/UserService');

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_super_cool';

module.exports = {
    addUser: (req, res) => {
        const { name, email, password } = req.body;
        createUser({ name, email, password })
            .then((user) => {
                return res.status(201).send(user);
            })
            .catch((err) => {
                console.log('error mega importante super necesario saber que paso en el instante', err);
                return res.status(500).send('Hubo un error');
            });
    },

    authUser: (req, res) => {
        /*
        {
            "email": "Pepito",
            "password": "gatitos59"
        }
        */
        const { email, password } = req.body;
        findUser({email, password})
        .then((user) => {
            if(user){
                const token = jwt.sign({email}, SECRET_KEY, { expiresIn: '3m'});
                return res.send(token);
            }else{
                return res.status(401).send('Error de autenticación');
            }
        })
        .catch((err) => {
            console.log('error mega importante super necesario saber que paso en el instante', err);
            return res.status(500).send('Hubo un error');
        })
    }
}