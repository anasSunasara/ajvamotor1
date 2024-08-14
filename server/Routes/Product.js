 const express = require('express')
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

 const product = require('../Controller/Product')

 router.get('/getproduct', product.getproductdata)
 router.post('/add_product',upload.single('image'), product.addproduct)
 router.delete('/delete_product/:id', product.deleteproduct)



 


 module.exports = router