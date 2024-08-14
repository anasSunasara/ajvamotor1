const db = require("../db/Conaction");

const getproductdata = (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

const getproductdatawithid = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM product WHERE cate_id=${id}`;
  console.log(id);
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

const appproductdata = (req, res) => {
  const imagePath = req.file.filename;
  console.log(imagePath);
  const { id, cate_id, description } = req.body;
  console.log(req.body);
  const sql =
    "INSERT INTO product (id, cate_id,description,image) VALUES (?,?,?,?)";
  const data = [id, cate_id, description, imagePath];
  console.log(data);
  db.query(sql, data, (err) => {
    if (err) {
      console.error("Error Adding Data", err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

const deleteproduct = (req, res) => {
  console.log("in function");
  const id = req.params.id;
  console.log(req.params.id);

  const sql = "DELETE FROM product WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data:", err);
      res.status(500).send("Internal server error");
    } else {
      console.log("Data deleted successfully");
      res.status(200).json({ message: "Data deleted successfully" }); // Updated the message
    }
  });
};

const getforedit = (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM product WHERE id = ${id}`;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

const saveEditproduct = (req, response) => {
  console.log("entred");
  const id = req.params.id;
  console.log(req.params.id, 81);
  const { cate_id, description } = req.body;
  const newImage = req.file ? req.file.filename : null;
  console.log("edit",req.body)

  let sql = "";
  let data = [];

  if (newImage) {
    sql = "UPDATE product SET cate_id=?, description=?, image=? WHERE id=?";
    data = [cate_id, description, newImage, id];
  } else {
    sql = "UPDATE product SET cate_id=?, description=? WHERE id=?";
    data = [cate_id, description, id];
  }

  db.query(sql, data, (err, res) => {
    if (err) {
      console.error("Error updating record:", err);
      return response.status(500).json({ error: "Error updating record" });
    }
    response.sendStatus(200);
  });
};

module.exports = {
  getproductdata,
  appproductdata,
  deleteproduct,
  getproductdatawithid,
  getforedit,
  saveEditproduct,
};
