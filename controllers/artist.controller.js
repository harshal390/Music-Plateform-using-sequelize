const Artist = require('../models/index').sequelize.models.artist

const addArtist = async (req, res) => {
    try {
        const artist = await Artist.create({ ...req.body })
        res.status(200).json({ message: `artist added successfully..!`, artist });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByPk(+req.params.id);
        if (artist === null) {
            res.status(200).json({ message: "Artist doesn't exists..!" })
        }
        else {
            artist.set({ ...artist, ...req.body });
            await artist.save();
            res.status(200).json({ message: `${artist.name} updated Successfully...!`, artist });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}



module.exports = { addArtist, updateArtist };