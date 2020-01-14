const { connect } = require('../models/Repository');
const devModel = require('../models/devSchema');
const parseStringAsArray = require ('../utils/parseStringAsArray')

connect();

const search = async (request,response) =>{
    const {latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);

    const devs = await devModel.find({
        techs: {
            $in:techsArray,
        },
        location:{
            $near: {
                $geometry:{
                    type:'Point',
                    coordinates: [longitude, latitude],
                    $maxDistance: 10000,
                },
            },  
        },
    })

    return response.json({devs})
}

module.exports = {
    search
}