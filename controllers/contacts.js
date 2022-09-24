const fetch = require('node-fetch');
const axios = require('axios').default;


const contacts= (req, res) => { 
  const url = "https://api.getresponse.com/v3/contacts";
  const api_token = "a5s4gbvvdz3phr48wmo7qcqm1byt8se2";
  const dayOfCycle = 0;
  
  const toggleButton = req.body.toggleButton;
  console.log(toggleButton);

  if (toggleButton){
    console.log("ran")
    var campaignId = "QEBRC"
  } else {
    console.log("ran")
    var campaignId = "QdbEB";
  }
  
  const reqData = {
    name: req.body.name,
    campaign: {
      campaignId: campaignId
    },
    dayOfCycle: dayOfCycle,
    email: req.body.email
  }

  // console.log(reqData)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': `api-key ${api_token}`  
    }
  };

  try{
    axios.post(url, reqData, config)
    .then(resp => {
      res.status(resp.status).send({
        status: "ok",
        message: "contact added successfully"
      })
    })
    .catch(err => {
      console.log(err)
      res.send({
        status: "fail",
        message: err.message
      })
    })
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = contacts;