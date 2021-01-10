const News = require('../models/newsModel');

const newsCtrl = {
    getNews : async(req,res) => {
        try {
            const allNews = await News.find()
            res.json(allNews)
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    },
    createNews : async(req,res) => {
        try {
            const {journalist, title, description,content, country,category,image} = req.body
            if(!image) return res.status(400).json({msg : 'image are not uploaded'})

            const newNews = new News({
                journalist, title, description,content, country,category,image
            })

            await newNews.save()

            res.json('Create a news')
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    },
    updateNews : async(req,res) => {
        try {
            const {journalist, title, description,content, country,category,image} = req.body
            if(!image) return res.status(400).json({msg : 'image are not uploaded'})

            const updateNews = new News({
                journalist, title, description, content, country,category,image, _id : req.params.id
            })

            await News.findByIdAndUpdate(req.params.id, updateNews)

            res.json('Updated a news')
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    },
    deleteNews : async(req,res) => {
        try {

            await News.findByIdAndDelete(req.params.id)
            res.json('Deleted a news')
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    }
}

module.exports = newsCtrl