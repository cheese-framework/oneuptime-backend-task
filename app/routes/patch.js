const express = require("express");
const router = express.Router();
const { patchData } = require("../controller/patch");
const { resizeThumb } = require("../controller/thumbnail");
const auth = require("../middlewares/auth");

router.route("/patch").patch(auth, patchData);
router.route("/resize").post(auth, resizeThumb);

module.exports = router;
