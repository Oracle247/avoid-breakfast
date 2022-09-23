const fetch = require('node-fetch');
const axios = require('axios').default;


const validateField= (req, res, next) => { 
  if(!req.body.name){
    return res.status(400).send({
      status: "fail",
      message: "name is required"
    })
  }
  if(!req.body.email){
    return res.status(400).send({
      status: "fail",
      message: "email is required"
    })
  }
  if(!req.body.toggleButton){
    return res.status(400).send({
      status: "fail",
      message: "toggleButton is required"
    })
  }

  next();
}

module.exports = validateField;