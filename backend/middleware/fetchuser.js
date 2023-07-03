const jwt = require('jsonwebtoken');
const JWT_TOKEN = "THIS IS INOTEBOOK APP"

const fetchuser = (req, res, next)=>{

    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error: "Authenticate with valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Authenticate with valid token"})
    }
}




module.exports = fetchuser