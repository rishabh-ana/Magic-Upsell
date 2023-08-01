const appUninstall = async (shopid,date) => {
  const db = require('../database.js');
  db.query('UPDATE scripts SET update_date=(?) WHERE id=(?)',[date,shopid], function(result,fields){
      console.log('we got uninstall');
  });

};

module.exports = appUninstall;
