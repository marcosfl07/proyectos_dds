const express = require('express');
const router = express.Router()
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get('/api/empresas/', async function (req, res)  {

  let where = {};
  if (req.query.RazonSocial != undefined && req.query.RazonSocial !== "") {
    where.RazonSocial = {
      [Op.like]: "%" + req.query.RazonSocial + "%",
    };
  }
  let items = await db.empresas.findAndCountAll({
    attributes: [
      "IdEmpresa",
      "RazonSocial",
      "Empleados",
    ],
    order: [["IdEmpresa", "ASC"]],
    where,
  });

  res.json(items.rows);
})

module.exports = router;