import React, { useState } from "react";
import { Box, useMediaQuery, Drawer } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box display="flex" height="100vh" bgcolor="#F9FAFB">
      {/* --- Sidebar (Desktop) --- */}
      {!isMobile && <Sidebar />}

      {/* --- Sidebar Drawer (Mobile) --- */}
      {isMobile && (
        <Drawer open={open} onClose={toggleDrawer}>
          <Sidebar closeDrawer={toggleDrawer} />
        </Drawer>
      )}

      {/* --- Content --- */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        <Topbar onMenuClick={toggleDrawer} isMobile={isMobile} />

        <Box p={2} overflow="auto" flexGrow={1}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
