var express = require('express');
var router = express.Router();
const {
  find,
  find2,
  find3,
  insert,
  remove
} = require('../db/db');
/* GET home page. */
router.get('/entries', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('element')
  res.json(data);
});

router.get('/restaurants', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('restaurants')
  res.json(data);
});
router.get('/ygsx', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('ygsx')
  res.json(data);
});
router.get('/goodslist', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('goodslist')
  res.json(data);
});
router.get('/paixu', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find2('goodslist')
  res.json(data);
});
router.get('/jiangxu', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find3('goodslist')
  res.json(data);
});
router.get('/goodslist1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('goodslist1')
  res.json(data);
});
router.get('/eatbar', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('eatbar')
  res.json(data);
});
router.get('/add', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await insert('addtest', [{
    gid: req.query.gid
  }])
  res.json(data);
});
router.get('/gid', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('addtest')
  res.json(data);
});
router.get('/del', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await remove('addtest', {
    gid: req.query.gid
  })
  res.json(data);
});

module.exports = router;