const { connect } = require('../models/Repository');
const devModel = require('../models/devSchema');
const axios = require('axios');

connect()


const addDev = async (request, response ) =>{
    const {github_username, techs, latitude, longitude } = request.body;

    let dev = await devModel.findOne({github_username});

    if (!dev){

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        const { name, avatar_url, bio } = apiResponse.data;

        const techsArray = techs.split(',').map(tech => tech.trim());

        const location = {
            type: 'Point',
            coordinates:[longitude, latitude]
        }


        dev = await devModel.create({
            github_username:github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })
    }

    return response.json(dev).status(201)
}

const getAll = (request, response) => {
    devModel.find((error, devs) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(200).json(devs)
    })
  }
module.exports = {
    addDev,
    getAll
}