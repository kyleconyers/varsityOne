const router = require("express").Router();
const userController = require("../../controllers/userController");
const user = require("../../db/models/user")

//router.get("/byname", function(req, res) {
  //  console.log("in byuser and query is: ", req.query);
    // let name = req.query.name;
    // user.Model.findOne({name: name}, function(err, data) {
    //     console.log("The user is: ", data)
    // })
//})
// Matches with "/api/user"
router.route("/byname")
  .get(userController.findByName)
  //.post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  router
  .route("/byuser/:user_id")
  .get(userController.findByUserId)

module.exports = router;
