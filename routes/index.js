var express = require("express");
var router = express.Router();
var indexController = require("../controllers/index");

/* GET home page. */
router.post("/api/create", indexController.createContact);
router.get("/api/find", indexController.findContact);
router.get("/api/findall", indexController.findAllContacts);
router.post("/api/update", indexController.updateContact);
router.post("/api/updatenotes", indexController.updateNotes);
router.post("/api/updatedate", indexController.updateDate);
router.delete("/api/delete", indexController.deleteContact);

module.exports = router;
