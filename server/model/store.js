const Sequelize = require ('sequelize');
const sequelize = require('./index');

const Store = sequelize.define('scripts', {
  id: {
    type: Sequelize.INTEGER(20),
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  script_id: {
    type: Sequelize.INTEGER(20)
  },
  discount_value: {
    type: Sequelize.INTEGER(11)
  },
  discount_code: {
    type:Sequelize.STRING(255)
  },
  upsell_mode: {
    type:Sequelize.STRING(255)
  },
  product_first: {
    type:Sequelize.STRING(255)
  },
  product_second: {
    type:Sequelize.STRING(255)
  },
  product_third: {
    type:Sequelize.STRING(255)
  },
  product_forth: {
    type:Sequelize.STRING(255)
  },
  theme_color: {
    type:Sequelize.STRING(255)
  },
  theme_font_color: {
    type:Sequelize.STRING(255)
  },
  theme_efont_color: {
    type:Sequelize.STRING(255)
  },
  theme_button_color: {
    type:Sequelize.STRING(255)
  },
  theme_header_color: {
    type:Sequelize.STRING(255)
  },
  minute: {
    type: Sequelize.INTEGER(11)
  },
  second: {
    type: Sequelize.INTEGER(11)
  },
  timer: {
    type:Sequelize.STRING(11)
  },
  status: {
    type:Sequelize.STRING(255)
  },
  update_date: {
    type:Sequelize.DATE(11)
  },
  create_date: {
    type:Sequelize.DATE(11)
  },
  variant_type: {
    type:Sequelize.STRING(255)
  },
  theme_title: {
    type:Sequelize.STRING(255)
  },
  confirm: {
    type:Sequelize.STRING(255)
  },
  first_auto: {
    type: Sequelize.INTEGER(11)
  },
  first_btn_text: {
    type: Sequelize.STRING(255),
    defaultValue:'No thanks :('
  },
  second_btn_text: {
    type: Sequelize.STRING(255),
    defaultValue:'Add To Cart'
  }

});

module.exports = Store;
