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
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          left: 0,
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
          width: "99vw",
          height: "100vh",
          backgroundImage: "url('/images/revised video 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
          zIndex: -1,
        }}
      />
    </Box>
  );
}

export default Header;
