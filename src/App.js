import React, { useState } from 'react';

const vendors = ['CB2', 'Crate and Barrel', 'Amazon', 'Arteriors', 'West Elm', 'Wayfair', 'Pottery Barn', 'Anthropologie'];
const shippers = ['UPS', 'FedEx', 'USPS', 'OnTrac'];

function App() {
  const [vendorList, setVendorList] = useState(vendors);
  const [shipperList] = useState(shippers);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Warehouse Tracker</h1>
      <div>
        <label>Vendor:</label>
        <select>{vendorList.map(v => <option key={v}>{v}</option>)}</select>
      </div>
      <div>
        <label>Shipper:</label>
        <select>{shipperList.map(s => <option key={s}>{s}</option>)}</select>
      </div>
      <div>
        <label>Job Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Install Date:</label>
        <input type="date" />
      </div>
      <div>
        <label>Trucker/Installer:</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default App;