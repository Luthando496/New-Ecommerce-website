import bycrypt from 'bcryptjs'


const users =[
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:bycrypt.hashSync('123456',13),
        isAdmin:true
    },
    {
        name:'Lavisa Smith',
        email:'lavisa@gmail.com',
        password:bycrypt.hashSync('123456',13),

    },
    {
        name:'Luthando Smith',
        email:'luthando@gmail.com',
        password:bycrypt.hashSync('123456',13)

    },
    {
        name:'john Doe',
        email:'john@gmail.com',
        password:bycrypt.hashSync('123456',13)

    },
]

export default users;