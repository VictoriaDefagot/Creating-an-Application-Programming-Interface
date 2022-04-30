const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const actorsController = {
    list: (req, res) => {
        db.Actor.findAll()
            .then(actors => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: actors.length,
                        url: 'api/actors'
                    },
                    data: {
                        actors
                    }
                })
            })
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(actor => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: 1,
                        url: 'api/actors/detail/:id'
                    },
                    data: {
                        actor
                    }
                })
            });
    },
    create: function (req,res) {
        Actors
        .create(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating
            }
        )
        .then((actor)=> {
            return res.status(200).json({
                status: 200,
                data: actor
            })  
        })         
        .catch(error => res.status(500).json(error))
    },
    destroy: function (req,res) {
        let actorId = req.params.id;
        Actors
        .destroy({where: {id: actorId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then((response) => {
            return res.status(200).json({
                status: 200,
                msg: "Actor deleted succesfully"
            })
        })
        .catch(error => res.status(500).json(error)) 
    }
}

module.exports = actorsController;