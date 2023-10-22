const express = require('express');
const router = express.Router();

class UserLogin {
    constructor(id, mail) {
        this.id = id;
        this.mail = mail;
    }
}

router.post('/user/login', (req, res) => {
    //const {id, mail} = req.body;

    const newUserLogin = new UserLogin(1, "test@mail.ru");
    res.status(201);
    res.json(newUserLogin);
    //res.json({ id: 1, mail: "test@mail.ru" });
});

module.exports = router;