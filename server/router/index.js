const koaBody = require('koa-body');
const Router = require('koa-router');
const router = new Router();
const Store = require('../model/store');
const Sequelize = require('sequelize');

router.get('/store', async (ctx, next) => {
  const store = await Store.findAll({ // searchAll
    where: {
      is_delete: 0
    }
  });
  ctx.body = store;
});

router.post('/store', koaBody(), async (ctx) => {
  const store = await Store.build(ctx.request.body).save();
  ctx.body = store;
});

router.put('/store/:id',koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findByPk(ctx.params.id);
  await store.update({...body});
  ctx.body = store;
});

router.post('/apps/storeSearch', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

router.post('/store/search/scriptID', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    attributes:['script_id'],
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

router.post('/store/search/discount', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    attributes:['discount_value','discount_code'],
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

router.post('/store/search/mode', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    attributes:['upsell_mode'],
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

router.post('/store/search/firstauto', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    attributes:['first_auto'],
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

router.post('/store/search/products', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    attributes:['product_first','product_second','product_third','product_forth'],
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

router.post('/store/search/theme', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    attributes:['theme_color','theme_font_color','theme_efont_color','theme_button_color','theme_header_color','minute','second','timer','variant_type','theme_title','first_btn_text','second_btn_text'],
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

router.post('/store/search/status', koaBody(), async (ctx) => {
  const body = ctx.request.body;
  const store = await Store.findAll({
    attributes:['status','confirm'],
    where: {
      id: {[Sequelize.Op.eq]: `${body.search}`}
    }
  });
  ctx.body = store;
});

module.exports = router;
