const express= require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/insert", controller.insert);
router.post("/sellRibbon", controller.sellRibbon);

router.put("/update/:id", controller.update);
router.delete("/deleteOne/:id", controller.deleteOne);
router.delete("/deleteAll/", controller.deleteAll);
router.get("/getAll", controller.getAll);

module.exports = router;
