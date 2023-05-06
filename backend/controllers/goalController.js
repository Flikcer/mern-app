const asyncHandler = require("express-async-handler");

//get user goal w authentication
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//set goal
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "set goal" });
});

//update goal
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update goal" });
});

//delete goal
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete goal" });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
