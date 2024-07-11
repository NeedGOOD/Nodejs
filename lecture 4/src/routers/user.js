const express = require("express")
const User = require("./../models/user")
const router = new express.Router()

router.post("/", async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        if (!user) {
            res.status(404)
            throw new Error("User not found")
        }
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        if (!user) {
            res.status(404)
            throw new Error("User not found")
        }
        const fields = ["firstName", "lastName", "password", "age"]
        fields.forEach((field) => {
            if (req.body[field]) {
                user[field] = req.body[field];
            }
        })
        await user.save();
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findOneAndDelete({_id: req.params.id})
        if (!user) {
            res.status(404)
            throw new Error("User not found")
        }
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.delete("/", async (req, res) => {
    try {
        const result = await User.deleteMany()
        res.json(result)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router