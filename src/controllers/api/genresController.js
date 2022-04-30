const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                let response = {
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: 'api/genres'
                    },
                    data: {
                        genres
                    }
                }
                res.status(200).json(response)
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: 1,
                        url: 'api/genres/detail/:id'
                    },
                    data: {
                        genre
                    }
                })
            });
    }

}

module.exports = genresController;