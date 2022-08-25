
require('../connection');

const User = require('../models/User');

//cambia la password de todos los usuarios fazt
const someFunction = async () => {
    const user = await User.update({username: 'fazt'}, {
    password: 'otracontrasena'
    })    
    console.log(user);
};

//busca un usuario con findOne y luego cambia el name
const aFunction = async () => {
  const user = await User.findOne({username: 'fazt'});
  user.name = 'joe'; //el await me devuelve el resultado de la busqueda, luego lo modifico y luego lo guardo
  await user.save();
  console.log(user);
};

//busca y modifica
const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'fazt'}, {
        name: 'Ryan Ray'
    }, {new: true}); //devuelve el dato actualizado
    console.log(user);
};

// someFunction();
// aFunction();
otherFunction();