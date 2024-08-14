const express = require("express")
const router = express.Router()
const multer = require('multer')


const slider_imgconfig = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, `image-${Date.now()}.${file.originalname}`);
    },
  });

const upload = multer({ storage: slider_imgconfig });

const slider = require('../Controller/Slider')

router.get('/getslider' ,slider.getsliderdata)
router.post('/addsliderimage',upload.single('image'),slider.addslideimage)
router.delete('/delete_slider_mage/:id',slider.deleteslider)


module.exports = router