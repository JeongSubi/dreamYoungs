const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/test1", userController.test1);
router.get("/test2", userController.test2);

router.get("/delay", userController.delay);

router.get("/user", userController.getUser);
router.post("/user", userController.createUser);

router.get("/user/:userIndex/hasCat", userController.hasCat);
router.post("/user/:userIndex/hasCat", userController.updateHasCat);

router.delete("/user/:userIndex", userController.deleteUser);

module.exports = router;
