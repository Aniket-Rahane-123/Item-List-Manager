import React, { useState } from 'react';

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
      <header style={{ backgroundColor: '#212529', padding: '10px', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>
          <span style={{ backgroundColor: '#00C851', padding: '5px 10px', borderRadius: '4px', marginRight: '10px' }}>
            HR
          </span>
          Item List Manager
        </h1>
      </header>

      <div style={{ maxWidth: '400px', margin: '30px auto', textAlign: 'center', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '20px', color: '#333', marginBottom: '20px' }}>Item List</h2>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            outline: 'none',
          }}
        />
        <button
          onClick={handleAddItem}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#00C851',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          Add Item
        </button>
        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                backgroundColor: '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '10px',
                textAlign: 'left',
                fontSize: '16px',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemListManager;
