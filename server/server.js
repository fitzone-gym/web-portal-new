import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())


const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // If you need to handle cookies or authentication
};
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'gym_mgt_system'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Database connection successful!');
});

app.get('/trainers', (req, res) => {
  const sql = "SELECT * FROM trainers";
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ Message: "Error inside server" });
    }
    return res.json(result);
  });
});

app.post('/trainers', (req, res)=> {
  const sql = "INSERT INTO trainers (`first_name`,`last_name`,`phone_no`,`email`,`username`,`password`) VALUES (?)";
  console.log(req.body);
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.phoneno,
    req.body.email,
    req.body.username,
    req.body.password,
  ]
  db.query(sql, [values], (err, result) => {
    if(err) return res.json(err);
    return res.json(result);
  })
})

app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM trainers WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if(err) return res.json({Message: "Error inside server"});
    return res.json(result);
  })
})


app.get('/announcement', (req, res) => {
  const sql = "SELECT * FROM announcement";
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ Message: "Error inside server" });
    }
    return res.json(result);
  });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
