import React, { useState, useCallback, useContext } from 'react';
import {
  Select,
  Button,
  Card,
} from '@shopify/polaris';
import '../css/AppStyle.css';
import {Refresh} from '../../pages/analytics-layout.js';

function SearchOrdersSpecific(params) {
  const [selected, setSelected] = useState('today');
  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  return (
    <Card sectioned>
      <p>Search specific date</p><br/>
      <div className="flex-container">
        <div>
          <Select
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
        </div>
        <div className="submit-btn">
          <Button
          primary
          onClick = {() => {
            params.setDate(selected);
          }}>Search</Button>
        </div>
      </div>
    </Card>
  );
}

export default SearchOrdersSpecific;
