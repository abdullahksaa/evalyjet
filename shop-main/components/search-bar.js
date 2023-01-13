import ReactDOM from "react-dom";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Inria_Sans } from "@next/font/google";
import Image from "next/image";
import CallMadeIcon from '@mui/icons-material/CallMade';

const inriaSans = Inria_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});


function SearchBar(props) {
    const { onClose } = props;

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        onClose();
      }
    })
  })

    return ReactDOM.createPortal(
        <>
            <div onClick={onClose} className="overlay" />
            <div className="modal px-2 md:top-[25%] md:w-[40%]">
                <BasicTabs />
            </div>
        </>,
        document.getElementById("overlays")
    );
}

export default SearchBar;





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{color:'red'}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<p className={`${inriaSans.className} search-tab capitalize`}>Products</p>} {...a11yProps(0)} />
          <Tab label={<p className={`${inriaSans.className} search-tab capitalize`}>Shops</p>} {...a11yProps(1)} />
          <Tab label={<p className={`${inriaSans.className} search-tab capitalize`}>Brands</p>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={inriaSans.className}>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <Image className="w-[50px] h-[50px]" src={'/search/cooker.webp'} alt={'Cooker'} width={80} height={80} />
                    <div className="text-sm flex-1 md:text-base">
                        <p className="text-xs md:text-sm lines-2">H&S Pressure Cooker 6.5L</p>
                        <del className="font-light">$ 3100</del>
                        <p className="text-base md:text-lg font-bold">$ 1767</p>
                    </div>
                    <CallMadeIcon sx={{height:15}} />
                </div>
                <div className="flex gap-4">
                    <Image className="w-[50px] h-[50px]" src={'/categories/necklace.png'} alt={'Cooker'} width={80} height={80} />
                    <div className="text-sm flex-1 md:text-base">
                        <p className="text-xs md:text-sm lines-2">Necklace for Ladies - Premium Quality</p>
                        <del className="font-light">$ 4500</del>
                        <p className="text-base font-bold md:text-lg">$ 3200</p>
                    </div>
                    <CallMadeIcon sx={{height:15}} />
                </div>
                <div className="flex gap-4">
                    <Image className="w-[50px] h-[50px]" src={'/categories/nivea.jpeg'} alt={'Cooker'} width={80} height={80} />
                    <div className="text-sm flex-1 md:text-base">
                        <p className="text-xs md:text-sm lines-2">Nivea Cream for Men</p>
                        <del className="font-light">$ 70</del>
                        <p className="text-base font-bold md:text-lg">$ 50</p>
                    </div>
                    <CallMadeIcon sx={{height:15}} />
                </div>
                <div className="flex justify-between gap-4">
                    <Image className="w-[50px] h-[50px]" src={'/categories/palmolive.jpeg'} alt={'Cooker'} width={80} height={80} />
                    <div className="text-sm flex-1 md:text-base">
                        <p className="text-xs md:text-sm lines-2">Palmolive</p>
                        <del className="font-light">$ 50</del>
                        <p className="text-base font-bold md:text-lg">$ 30</p>
                    </div>
                    <CallMadeIcon sx={{height:15}} />
                </div>
                <div className="flex justify-between gap-4">
                    <Image className="w-[50px] h-[50px]" src={'/categories/palmolive.jpeg'} alt={'Cooker'} width={80} height={80} />
                    <div className="text-sm flex-1 md:text-base">
                        <p className="text-xs md:text-sm lines-2">Palmolive</p>
                        <del className="font-light">$ 50</del>
                        <p className="text-base font-bold md:text-lg">$ 30</p>
                    </div>
                    <CallMadeIcon sx={{height:15}} />
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className={`${inriaSans.className} text-center`}>No Shop Found</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className={`${inriaSans.className} text-center`}>No Brands found</p>
      </TabPanel>
    </Box>
  );
}
