import { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InputField from "../formElements/InputField";
import IconHoverBG from "../icon/IconHoverBG";
import Typo from "../typography/typo";

interface Props {
  onMenuClick: () => void;
  isMobile: boolean;
}

export default function Topbar({ onMenuClick, isMobile }: Props) {
  const [search, setSearch] = useState("");

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "#fff", color: "#111" }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton onClick={onMenuClick} edge="start">
            <MenuIcon />
          </IconButton>
        )}
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "1.5rem",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
            width: "100%",
          }}
        >
          <Grid size={6}>
            <InputField
              type="text"
              value={search}
              name="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              icon={true}
            />
          </Grid>
          <Grid size={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap={2}
            >
              <IconHoverBG active icon={<NotificationsNoneIcon />} />
              <IconHoverBG
                icon={
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        background:
                          "linear-gradient(to bottom right, #4f46e5, #9333ea)",
                        color: "#fff",
                        borderRadius: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "40px",
                        minHeight: "40px",
                        marginRight: ".5rem",
                      }}
                    >
                      DPS
                    </div>
                    <div>
                      <Typo var="buttonText">Dr. Priya Sharma</Typo>
                      <Typo var="labelSmall">Placement Officer</Typo>
                    </div>
                  </div>
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
