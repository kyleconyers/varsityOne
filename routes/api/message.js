const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// Matches with "/api/message"
router.route("/")
  .get(messageController.findByForumAndTag)
  .post(messageController.create);

// Matches with "/api/messages/:id"
router
  .route("/:id")
  .get(messageController.findById)
  .put(messageController.update)
  .delete(messageController.remove);

  router
  .route("/byuser/:user_id/:tag")
  .get(messageController.findByUserId)

module.exports = router;
