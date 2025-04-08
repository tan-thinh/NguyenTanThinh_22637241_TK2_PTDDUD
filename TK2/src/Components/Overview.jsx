import React, { useEffect, useState } from 'react';
import { fetchTurnover, fetchProfit, fetchNewCustomer } from '../Services/DashboardApi.jsx';
import '../App.css';
import { CurrencyDollarIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const Overview = () => {
  const [turnover, setTurnover] = useState(null);
  const [profit, setProfit] = useState(null);
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const [t, p, c] = await Promise.all([
        fetchTurnover(),
        fetchProfit(),
        fetchNewCustomer(),
      ]);
      setTurnover(t);
      setProfit(p);
      setCustomers(c);
    };
    loadData();
  }, []);

  const renderBox = (title, data, Icon) => (
    <div className="overview-box">
      <span className='box'>
        <div className="overview-title">{title}</div>
        <Icon className="icon" />
      </span>
      <div className="overview-value">{title === 'New Customer' ? data?.value : `$${data?.value.toLocaleString()}`}</div>
      <div className="overview-change">↑ {data?.change}% period of change</div>
    </div>
  );

  return (
    <div className="overview-grid">
      {turnover && renderBox('Turnover', turnover, ShoppingCartIcon)}
      {profit && renderBox('Profit', profit, CurrencyDollarIcon)} {/* Bạn có thể dùng icon khác nếu cần */}
      {customers && renderBox('New Customer', customers, UserIcon)}
    </div>
  );
};

export default Overview;