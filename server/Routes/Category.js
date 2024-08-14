const express = require('express');
const router = express.Router()
const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, `image-${Date.now()}.${file.originalname}`);
    },
  });

const upload = multer({ storage: storage });




const category = require('../Controller/Category')
router.get("/category",category.getcategory)
router.post("/addcategory", upload.single("category_image"), category.addcategory);
router.delete("/category_delete/:id",category.deletecategory)
router.get('/getdatawithid/:id',category.getdataforedit)
router.put("/saveEdit/:id", upload.single("category_image"), category.saveEdit);
router.put("/status/:id",category.getstatus)


module.exports = router