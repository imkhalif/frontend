import { Box, Typography, List, ListItemButton } from "@mui/material";
import Typo from "../typography/typo";

export default function Sidebar() {
  return (
    <Box
      width={240}
      bgcolor="#0F172A"
      color="white"
      display="flex"
      flexDirection="column"
      p={2}
    >
      <Typography variant="h6" mb={4}>
        SpectraSeek
      </Typography>
      <List>
        <ListItemButton>
          <Typo var="buttonText">Overview</Typo>
        </ListItemButton>
        <ListItemButton>
          <Typo var="buttonText">Universities </Typo>
        </ListItemButton>
        <ListItemButton>
          <Typo var="buttonText">B2C Customers</Typo>
        </ListItemButton>
        <ListItemButton>
          <Typo var="buttonText">Revenue</Typo>
        </ListItemButton>
        <ListItemButton>
          <Typo var="buttonText">Support</Typo>
        </ListItemButton>
        <ListItemButton>
          <Typo var="buttonText">Students</Typo>
        </ListItemButton>
        <ListItemButton>
          <Typo var="buttonText">Analytics</Typo>
        </ListItemButton>
        <ListItemButton>
          <Typo var="buttonText">Settings</Typo>
        </ListItemButton>
      </List>
    </Box>
  );
}
