//get user goal w authentication
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//set goal
const setGoal = (req, res) => {
  res.status(200).json({ message: "set goal" });
};

//update goal
const updateGoal = (req, res) => {
  res.status(200).json({ message: "Update goal" });
};

//delete goal
const deleteGoal = (req, res) => {
  res.status(200).json({ message: "Delete goal" });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
