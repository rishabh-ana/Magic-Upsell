import { useQuery } from 'react-apollo';
import React, { useState,useEffect,useRef } from 'react';
import {
  Layout,
  Card,
  DataTable,
} from '@shopify/polaris';
import {SEARCH_ORDERS_UPSELL,SEARCH_ORDERS_TOTAL} from '../../server/config/appBasicQuery.js';

function fetchDate(d) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 8);
  var dateArray = {};
  switch(d) {
    case 'today':
      dateArray[0] = 'created_at:'+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      dateArray[1] = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return dateArray;
    case 'yesterday':
      dateArray[0] = 'created_at:'+yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();
      dateArray[1] = yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();
      return dateArray;
    case 'lastWeek':
      dateArray[0] = 'created_at:>='+lastWeek.getFullYear()+'-'+(lastWeek.getMonth()+1)+'-'+lastWeek.getDate()+' created_at:<='+yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();
      dateArray[1] = lastWeek.getFullYear()+'-'+(lastWeek.getMonth()+1)+'-'+lastWeek.getDate()+' to '+yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();
      return dateArray;
    default:
      dateArray[0] = d;
      var td = [];
      for(var i = 13; i < d.length;) {
        if(d[i]==='c') {
          td[i-13] = ' to ';
          i = i+13;
        }
        else{td[i-13] = d[i];i++;}
      }
      dateArray[1] = td;
console.log(dateArray);
      return dateArray;
  }
}

function SearchOrdersUpsell (dc,d) {
  const { loading:upsellLoading, error:upsellError, data:upsellData } = useQuery(SEARCH_ORDERS_UPSELL,{
    variables:{query:d+' '+dc}
  });
  if (upsellLoading) return 'Loading...';
  if (upsellError) return `Error! ${upsellError.message}`;
  if (upsellData && upsellData.orders.edges.length!=0 && dc!=' ') {
let final = 0;
for(let i =0;i<upsellData.orders.edges.length;i++){final+=parseFloat(upsellData.orders.edges[i].node.totalPriceSet.presentmentMoney.amount);}
return final.toFixed(1);
}
  else return '0';
}

function SearchOrdersTotal(d) {
  const { loading:totalLoading, error:totalError, data:totalData } = useQuery(SEARCH_ORDERS_TOTAL,{
    variables:{query:d}
  });
  if (totalLoading) return 'Loading...';
  if (totalError) return `Error! ${totalError.message}`;
  if (totalData && totalData.orders.edges.length!=0) {
let final = 0;
for(let i =0;i<totalData.orders.edges.length;i++){final+=parseFloat(totalData.orders.edges[i].node.totalPriceSet.presentmentMoney.amount);}
return final.toFixed(1);
}
  else return '0';
}

function Percentage(x,y) {
  const percentage = x/y*100+'%';
  if(percentage != 'NaN%') return percentage;
  else return '0';
}

function DisplayOrders({valueCODE}) {
  const date = fetchDate(valueCODE.date)[0];
  const upsellPirce = SearchOrdersUpsell(valueCODE.coupon,date);
  const totalPrice = SearchOrdersTotal(date);
  const rows = [[fetchDate(valueCODE.date)[1], upsellPirce, totalPrice, Percentage(upsellPirce,totalPrice)]];

  return (
    <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'text',
          ]}
          headings={[
            'Date',
            'Upsell(with discount) Sale',
            'Total Sale',
            'Percentage',
          ]}
          rows={rows}
        />
  );
}


export default DisplayOrders;
