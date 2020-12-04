const express = require("express");
const router = express.Router();
const Institution = require('../Models/Institution.model')

router.get("/v1/institutions", async (req, res) => {
    try {
        const institutions = await Institution.find()
        res.send(institutions).status(200)
    } catch (error) {
        res.send(error).status(500)
    }
});

router.post("/v1/institution", async (req, res) => {
    const institution = new Institution(req.body)
    try {
        await institution.save()
        res.status(201).send(institution)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.delete("/", (req, res) => {

});

module.exports = router;

