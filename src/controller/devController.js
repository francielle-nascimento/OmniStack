const { connect } = require('../models/Repository');
const devModel = require('../models/devSchema');
const axios = require('axios');

connect()


const addDev = async (request, response ) =>{
    const {github_username, techs, latitude, longitude } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates:[longitude, latitude]
    }


    const dev = await devModel.create({
        github_username:github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    })

    return response.json(dev).status(201)
}


module.exports = {
    addDev
}