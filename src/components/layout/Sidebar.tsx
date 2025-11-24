import { Box, Button, Typography, List, ListItemButton } from "@mui/material";
import Typo from "../typography/typo";

interface Props {
  closeDrawer?: () => void;
}

export default function Sidebar({ closeDrawer }: Props) {
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
      {closeDrawer && (
        <Button onClick={closeDrawer} variant="text" sx={{ mt: 2 }}>
          Close
        </Button>
      )}
    </Box>
  );
}
