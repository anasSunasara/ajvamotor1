const express = require("express");
const router = express.Router();
const multer = require("multer");

const slider_imgconfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()}.${file.originalname}`);
  },
});
const upload = multer({ storage: slider_imgconfig });

const product2 = require("../Controller/Product2");

router.get("/parth", product2.getproductdata);
router.get("/gerproduct/:id", product2.getproductdatawithid);
router.post("/addproduct", upload.single("image"), product2.appproductdata);
router.delete("/delete_productdd/:id", product2.deleteproduct);
router.get("/getforedit/:id", product2.getforedit);
router.put("/saveproductedit/:id", upload.single("image"), product2.saveEditproduct);

module.exports = router;
