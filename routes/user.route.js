const express = require('express');
const { addUser, updateUser, bulkCreateUsers } = require('../controllers/user.controller');
const route = express.Router();

route.post("/add-user",addUser);
route.put("/update-user/:id", updateUser);
route.get("/bulk-add",bulkCreateUsers);

module.exports = route;