const User = require('../models/index').sequelize.models.user

const addUser = async (req, res) => {
    try {
        const user = await User.create({ ...req.body })
        console.log('user was saved to the database!');
        res.status(200).json({ message: `${req.body.username} added successfully..!`, user });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(+req.params.id);
        if (user === null) {
            res.status(200).json({ message: "User doesn't exists..!" })
        }
        else {
            user.set({ ...user, ...req.body });
            await user.save();
            res.status(200).json({ message: `${user.firstName} updated Successfully...!`, user });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const bulkCreateUsers = async (req, res) => {
    const bulkData = [
        {
            "username": "Harshal255",
            "email": "harshalskahar389@gmail.com",
            "mobileNo": "9537407970",
            "password": "Harsh$05"
        },
        {
            "username": "Harshal2245",
            "email": "harshalskahar389@gmail.com",
            "mobileNo": "9537407970",
            "password": "Harsh$05"
        },
    ];
    try {
        const users = await User.bulkCreate(bulkData);
        res.status(200).json({ message: `users added successfully..!`, users });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}


module.exports = { addUser, updateUser,bulkCreateUsers };