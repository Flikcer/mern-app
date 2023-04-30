const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

//short CRUD
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

//CRUD
// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
