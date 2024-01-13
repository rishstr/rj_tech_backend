const express = require("express");
const {
    createImageCarousel,
    getImageCarousel
} = require("../controllers/imageCarouselController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/images").get(getImageCarousel);

router.post(
    "/admin/images/new",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    createImageCarousel
  );

module.exports = router;
