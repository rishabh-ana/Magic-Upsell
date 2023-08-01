import React, { useState } from 'react';
import {
  ResourcePicker, TitleBar
} from '@shopify/app-bridge-react';
import { Card, Button } from '@shopify/polaris';
import '../css/AppStyle.css';
import axios from 'axios';
import ProductList from './ProductList.js'
const config = require('../../server/config/httpConfig.js');
import '../css/AppStyle.css';
export const Refresh = React.createContext();

function ProductPicker({valueID}) {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  var db_data = {};
  return (
    <Card sectioned>
      <Refresh.Provider value={{refresh, setRefresh}}>
        <ProductList valueID={valueID}/>
      </Refresh.Provider>
      <div className="product-btn">
        <Button
        primary
        onClick = {() => {
          setOpen(true);
        }}>Open Product Picker</Button>
      </div>
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={async (resources) => {
          resources.selection.length === 1 ? db_data = {product_first:resources.selection[0].handle, product_second:null, product_third:null, product_forth:null} : null;
          resources.selection.length === 2 ? db_data = {product_first:resources.selection[0].handle, product_second:resources.selection[1].handle, product_third:null, product_forth:null} : null;
          resources.selection.length === 3 ? db_data = {product_first:resources.selection[0].handle, product_second:resources.selection[1].handle, product_third:resources.selection[2].handle, product_forth:null} : null;
          resources.selection.length >= 4 ? db_data = {product_first:resources.selection[0].handle, product_second:resources.selection[1].handle, product_third:resources.selection[2].handle, product_forth:resources.selection[3].handle} : null;
          setOpen(false);
          await axios.put(config.HTTP_API + '/store/' + valueID, db_data);
          setRefresh(true);
        }}
        onCancel={()=>setOpen(false)}
        />

    </Card>
  );
}

export default ProductPicker;
