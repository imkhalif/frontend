import { Box } from "@mui/material";
import Sidebar from "./Sidebar.tsx";
import Topbar from "./Topbar.tsx";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" height="100vh" bgcolor="#F9FAFB">
      <Sidebar />
      <Box flexGrow={1} display="flex" flexDirection="column">
        <Topbar />
        <Box p={3} overflow="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
