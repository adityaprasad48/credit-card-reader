import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Data from "./data";
import Orders from "./Orders";
import Payment from "./Payment";
import ShopList from "./ShopList";

const Shopping = () => {
  const [data, setData] = useState(Data);
  const [order , set] = useState([])
  const [value, setValue] = useState(false)

  const handleClick = (id) => {
    // console.log(data);
    setValue(!value)
    const updatedData = data.find((item) => item.id === id);
    updatedData.cart = !updatedData.cart;
    setData([updatedData, ...data]);
    set([...order, updatedData]) 
    console.log(order);
   
  };

  
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Shop</Tab>
          <Tab>Orders</Tab>
          <Tab>Payment</Tab>
        </TabList>

        <TabPanel>
          <ShopList data={data} handleClick={handleClick} />
        </TabPanel>
        <TabPanel>
          <Orders data={order} setData={setData}/>
        </TabPanel>
        <TabPanel>
          <Payment value={value}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shopping;
