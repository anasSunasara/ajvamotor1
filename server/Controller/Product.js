const db = require('../db/Conaction');


const getproductdata = (req,res) =>{
    const sql = "SELECT * FROM autoslider";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });

}


const addproduct = (req,res) =>{
    const imagePath = req.file.filename;
    console.log(imagePath);
    const { id } = req.body;
    // const { category_title } = req.body;
    const sql =    "INSERT INTO autoslider (id,image) VALUES (?, ?)";
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

const deleteproduct = (req,res) =>{
    const id = req.params.id;
    const sql = `DELETE FROM autoslider WHERE id = ?`;
  
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
    getproductdata,
    addproduct,
    deleteproduct,

}