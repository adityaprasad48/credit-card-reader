import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ForgotPass from "./ForgotPass";
import Uplaod from "./Uplaod";

const Admin = () => (
  <div>
    <Tabs>
      <TabList>
        <Tab>Upload</Tab>
        <Tab>Change Pass</Tab>
      </TabList>

      <TabPanel>
        <Uplaod/>
      </TabPanel>
      <TabPanel>
        <ForgotPass/>
      </TabPanel>
    </Tabs>
  </div>
);

export default Admin;
