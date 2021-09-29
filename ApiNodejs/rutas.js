const router = require("express").Router();
const conexion = require("./config/conexion");

//Agregamos todas las rutas
router.get("/", (req, res) => {
  let sql = "select * from movie";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//Get una pelicula
router.get("/:id", (req, res) => {
  const {id} = req.params
  let sql = "select * from movie where mov_id = ?";
  conexion.query(sql,[id],(err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//Agregar pelicula
router.post("/", (req, res) => {
  const {mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} = req.body
  let sql = `insert into movie (mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) 
  values('${mov_title}',
  '${mov_year}',
  '${mov_time}',
  '${mov_lang}',
  '${mov_dt_rel}',
  '${mov_rel_country}')`;

  conexion.query(sql,(err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({status: 'Película agregada'});
    }
  });
});

//Eliminar pelicula
router.delete("/:id", (req, res) => {
  const {id} = req.params
  let sql = `delete from movie where mov_id = '${id}'`;
  conexion.query(sql,(err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({status: 'Película eliminada'});
    }
  });
});

//Modificar pelicula
router.put("/:id", (req, res) => {
  const {id} = req.params
  const {mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} = req.body

  let sql = `update movie set 
              mov_title = '${mov_title}',
              mov_year = '${mov_year}',
              mov_time = '${mov_time}',
              mov_lang = '${mov_lang}',
              mov_dt_rel = '${mov_dt_rel}',
              mov_rel_country = '${mov_rel_country}'
              where mov_id = '${id}'`;

  conexion.query(sql,(err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({status: 'Película modificada'});
    }
  });
});

module.exports = router;
