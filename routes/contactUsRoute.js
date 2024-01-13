const express = require("express");
const {
  registerQuerry,
  getAllQuerries,
  getQuerryDetails,
} = require("../controllers/contactUsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.post("/querry/new", isAuthenticatedUser, registerQuerry);

router
  .route("/admin/querries")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllQuerries);

router
  .route("/admin/querry/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getQuerryDetails);


module.exports = router;
