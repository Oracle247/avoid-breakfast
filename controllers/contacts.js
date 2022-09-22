const fetch = require('node-fetch');
const axios = require('axios').default;


const contacts= (req, res) => { 
  const url = "https://api.getresponse.com/v3/contacts";
  const api_token = "a5s4gbvvdz3phr48wmo7qcqm1byt8se2";
  const campaignId = "QdbEB";

  const reqData = {
    name: req.body.name,
    campaign: {
      campaignId: campaignId
    },
    email: req.body.email
  }

  // console.log(reqData)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': `api-key ${api_token}`  
    }
  };

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
  
}

module.exports = contacts;