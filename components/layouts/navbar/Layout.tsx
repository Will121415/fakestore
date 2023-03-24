import React, { FC } from "react";
import { Box } from "../../ui/Box";
import NavBar from "../../ui/NavBar";


interface LayoutProps {
    children: React.ReactNode;
}

const Layout:FC<LayoutProps> = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    <NavBar />
    {children}
    
  </Box>
);

export default Layout;
