const db = require("../db/Conaction")


const getsliderdata = (req,res) =>{
    const sql = "SELECT * FROM slider_image";
      db.query(sql, (err, data) => {
        if (err) {
          console.error("Error executing SQL query:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
      });
}


 const addslideimage = (req,res) =>{
    const imagePath = req.file.filename;
    console.log(imagePath);
    const { id } = req.body;
    // const { category_title } = req.body;
    const sql =    "INSERT INTO slider_image (id,image) VALUES (?, ?)";
    const data = [id, imagePath];
    console.log(data);
    db.query(sql, data, (err) => {
      if (err) {
        console.error("Error Adding Data", err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
 }

 const deleteslider = (req,res) =>{
    const id = req.params.id;
    const sql = `DELETE FROM slider_image WHERE id = ?`;
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log("Error Deleting Data: " + err);
        res.status(500).send("Internal Server Error");
      } else {
        res.sendStatus(200);
      }
    });
 }



module.exports = {
getsliderdata,
addslideimage,
deleteslider,
}