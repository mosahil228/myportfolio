import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import 'aos/dist/aos.css';
import Homecc ,{Homecc2} from "./Homecc";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="labBox"  sx={{ width: "50%", typography: "body1" }}>
      <TabContext value={value} className="tabContext">
        <Box
          className="box Muitabs"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tabList"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#551482",
              },
            }}
          >
            <Tab className="tab" label="BANNERS" value="1" />
            <Tab className="tab" label="LOGOS" value="2" />
            <Tab className="tab" label="UI/UX" value="3" />
            <Tab className="tab" label="WEB TEMPLATES" value="4" />
          </TabList>
        </Box>
        <TabPanel className="tabPanel" value="1">
          <div className="galleryS" >
            <div className="galleryTab">
            <Homecc />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="tabPanel" value="2">
        <div className="galleryS2"  >
            <div className="galleryTab2 " >
            <Homecc2/>
            </div>
          </div>
         
        </TabPanel>

        <TabPanel className="tabPanel" value="3">
          <section className="section ">
            <div className="sContainer ">
              <div className="contentBox">
                <h1 className="heading font">Data is updated soon...</h1>
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel className="tabPanel" value="4">
          <section className="section ">
            <div className="sContainer ">
              <div className="contentBox ">
                <h1 className="heading font">Data is updated soon...</h1>
              </div>
            </div>
          </section>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
