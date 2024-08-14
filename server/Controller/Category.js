const db = require("../db/Conaction")




const getcategory = (req,res) =>{
    const sql = "SELECT * FROM category";
    db.query(sql, (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.json(data);
    });
}

const addcategory = (req, res) => {

    const imagePath = req.file.filename;
    const { id } = req.body;
    const { category_title } = req.body;
    const sql = "INSERT INTO category (id, category_title, category_image) VALUES (?, ?, ?)";
    const data = [id, category_title, imagePath];
  
    db.query(sql, data, (err) => {
      if (err) {
        console.error("Error Adding Data", err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  };
  
  const deletecategory = (req,res) =>{
    const id = req.params.id;
  const sql = `DELETE FROM category WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Error Deleting Data: " + err);
      res.status(500).send("Internal Server Error");
    } else {
      res.sendStatus(200);
    }
  });

  }

  const getdataforedit = (req,res) =>{
    const sql = 'SELECT * FROM category WHERE id = ?';
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error('Error fetching data by id', err);
      return res.status(500).json({ Message: 'Error inside the server' });
    }
    console.log('Fetched Data:', data); // Add this line for debugging
    return res.json(data);
  });
  }

  const saveEdit = (req,res) =>{
    const id = req.params.id;
      const { category_title } = req.body;
      const newImage = req.file ? req.file.filename : null; 
    
      let sql = '';
      let data = [];
    
      if (newImage) {
        sql = 'UPDATE category SET category_title=?, category_image=? WHERE id=?';
        data = [category_title, newImage, id];
      } else {
        sql = 'UPDATE category SET category_title=? WHERE id=?';
        data = [category_title, id];
      }
    
      db.query(sql, data, (err, result) => {
        if (err) {
          console.error("Error updating record:", err);
          return res.status(500).json({ error: "Error updating record" });
        }
        res.sendStatus(200);
      });
  }

  const getstatus = (req,res) =>{
    const {status} = req.body;
    const {id} = req.params;

    const sql = "UPDATE category SET status = ? WHERE id = ?";
    const data = [status,id];
    db.query(sql , data, (err)=>{
      if(err) {
        console.error("Error updating status",err);
        return res.sendStatus(500);

      }
      res.status(200).send("Status update successfully");
    });

  };


   

  module.exports = {
    getcategory,
    addcategory,
    deletecategory,
    getdataforedit,
    saveEdit,
    getstatus,

  }