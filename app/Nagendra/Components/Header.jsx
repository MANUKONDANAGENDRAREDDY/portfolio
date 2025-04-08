"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "1520px", height: "820px" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? "white" : "transparent",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: isScrolled ? 4 : 0,
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", px: 5 }}
        >
          <Box>
            <Link href="/" passHref>
              <img
                src="/images/Frame 1000006453.png"
                alt="SELECTIONS"
                style={{ height: "56px" }}
              />
            </Link>
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, gap: 2, color: "black" }}
          >
            <Button color="inherit" component={Link} href="#">
              Destinations
            </Button>
            <Button color="inherit" component={Link} href="#">
              Hotels
            </Button>
            <Button color="inherit" component={Link} href="#">
              Dining
            </Button>
            <Button color="inherit" component={Link} href="#">
              Offers
            </Button>
            <Button color="inherit" onClick={handleMenuOpen}>
              Membership
            </Button>
            <Button color="inherit" onClick={handleMenuOpen}>
              More
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "black",
            }}
          >
            <Button color="inherit" component={Link} href="#">
              Login / Join
            </Button>
            <Button variant="contained" color="black">
              Book a Stay
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
      </Menu>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "800px",
          backgroundImage: "url('/images/revised video 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
    </Box>
  );
}

export default Header;

// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-[1520px] h-[920px]">
//       <nav
//         className={`fixed top-0 left-0 w-[1520px] h-[80px] flex items-center justify-between px-20 transition-all duration-300 ${
//           isScrolled ? "bg-white " : "bg-none"
//         }`}
//       >
//         <img
//           src="/images/Frame 1000006453.png"
//           alt="SELECTIONS"
//           className="h-14"
//         />

//         <ol className="flex items-center gap-10 text-gray-600 uppercase text-sm leading-6 font-DM Sans font-medium">
//           <li>
//             <Link href="#">Destinations</Link>
//           </li>
//           <li>
//             <Link href="#">hotels</Link>
//           </li>
//           <li>
//             <Link href="#">dining</Link>
//           </li>
//           <li>
//             <Link href="#">offers</Link>
//           </li>
//           <li className="flex items-center gap-1 cursor-pointer">
//             <span>Membership</span>
//             <img src="/images/Vector (3).png" alt="Arrow" className="w-3 h-2" />
//           </li>

//           <li className="flex items-center gap-1 cursor-pointer">
//             <span>More</span>
//             <img src="/images/Vector (3).png" alt="Arrow" className="w-3 h-2" />
//           </li>
//         </ol>

//         <div className="flex items-center gap-6 w-[366px] h-[66px]">
//           <Link
//             href="#"
//             className="font-normal font-DM Sans leading-5 uppercase text-gray-600 hover:underline"
//           >
//             Login / Join
//           </Link>
//           <button className="w-[225px] h-[66px] px-10 py-5 bg-gray-600 uppercase leading-6 tracking-widest text-white text-sm font-medium">
//             Book a Stay
//           </button>
//         </div>
//       </nav>

//       <Box
//         className="absolute top-0 left-0 w-[1520px] h-[800px] bg-cover bg-center -z-10"
//         style={{ backgroundImage: "url('/images/revised video 1.png')" }}
//       ></div>
//     </div>
//   );
// }

// export default Header;

// import Link from "next/link";
// import React from "react";

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//      <Box className="w-[1520px] h-[920px]">
//       <nav
//       className={`fixed top-0 left-0 w-[1520px] h-[100px] flex items-center justify-between px-20 shadow-md transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-none"
//       }`}
//       >
//          <img
//           src="/images/Frame 1000006453.png"
//           alt="SELECTIONS"
//           className="h-14"
//         />

//         <ol className="flex items-center gap-10 text-gray-600 uppercase text-sm leading-6 font-DM Sans font-medium">
//           <li>
//             <Link href="#">Destinations</Link>
//           </li>
//           <li>
//             <Link href="#">hotels</Link>
//           </li>
//           <li>
//             <Link href="#">dining</Link>
//           </li>
//           <li>
//             <Link href="#">offers</Link>
//           </li>
//           <li className="flex items-center gap-1 cursor-pointer">
//             <span>Membership</span>
//             <img src="/images/Vector (3).png" alt="Arrow" className="w-3 h-2" />
//           </li>

//           <li className="flex items-center gap-1 cursor-pointer">
//             <span>More</span>
//             <img src="/images/Vector (3).png" alt="Arrow" className="w-3 h-2" />
//           </li>
//         </ol>

//         <Box className="flex items-center gap-6 w-[366px] h-[66px]">
//           <Link
//             href="#"
//             className="font-normal font-DM Sans leading-5 uppercase  text-gray-600 hover:underline"
//           >
//             Login / Join
//           </Link>
//           <button className="w-[225px] h-[66px] px-10 py-5 bg-gray-600 uppercase leading-6 tracking-widest gap-[10px] text-white text-sm font-medium ">
//             Book a Stay
//           </button>
//         </Box>
//         <Box className=" absolute  w-full h-auto top-[102.5px] -ml-[81px] flex  flex-wrap ">
//           <img
//             src="/images/revised video 1.png"
//             alt="image"
//             className="w-[1580px] h-[800.81px] "
//           />
//         </Box>
//       </nav>
//     </Box>
//   );
// }

// export default Header;
