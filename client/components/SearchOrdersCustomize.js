import React, { useState, useCallback, useContext } from 'react';
import {
  Select,
  Button,
  Card,
  TextField
} from '@shopify/polaris';
import '../css/AppStyle.css';
import {Refresh} from '../../pages/analytics-layout.js';

function SearchOrdersCustomize(params) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [errorMsg, setErrorMsg] = useState('');
  const handleStartChange = (value) => setStartDate(value);
  const handleEndChange = (value) => setEndDate(value);
  return (
    <Card sectioned>
      <p>Customize searching</p>
      <br/>
      <div className="flex-container">
        <TextField
          id="start_date"
          label="Start date"
          type="date"
          value={startDate}
          onChange={handleStartChange}
          error={errorMsg}
        />
        <TextField
          id="end_date"
          label="End date"
          type="date"
          value={endDate}
          onChange={handleEndChange}
        />
      </div>
      <div className="flex-container">
        <div></div>
        <div className="submit-btn">
          <br/>
          <Button
          primary
          onClick = {() => {
            setErrorMsg('');
            startDate ?
            endDate ? params.setDate('created_at:>='+startDate+' created_at:<='+endDate) : params.setDate('created_at:>='+startDate+' created_at:<='+startDate)
            :
            setErrorMsg("Start date cannot be empty");

          }}>Search</Button>
        </div>
      </div>
    </Card>
  );
}

export default SearchOrdersCustomize;
