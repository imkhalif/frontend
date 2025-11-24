import { Box, Grid, Paper } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CardPrimary from "../../components/card/CardPrimary";
import IconWithBG from "../../components/icon/IconWithBG";
import Typo from "../../components/typography/typo";
import InputSelect from "../../components/formElements/InputSelect";
import { useState } from "react";

export default function DashboardPage() {
  const [age, setAge] = useState<string>("");
  return (
    <Box sx={{}}>
      <Typo var="h1">Platform Overview</Typo>
      <Typo var="subtitle">Real-time metrics across all universities</Typo>

      {/* Main Grid */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={2}>
          <CardPrimary
            bgColor="linear-gradient(to bottom right, #6366f1, #9333ea)"
            textColor="#fff"
          >
            <Typo var="h2" style={{ color: "#fff" }}>
              Total Universities
            </Typo>
          </CardPrimary>
        </Grid>
        <Grid size={2}>
          <CardPrimary>
            <IconWithBG
              iconColor="rgba(147,51,234,1)"
              bgColor="rgba(243,232,255,1)"
              icon={<ApartmentIcon />}
            />
          </CardPrimary>
        </Grid>
        <Grid size={2}>
          <CardPrimary>
            <Typo var="h2">Total Universities</Typo>
            <Typo var="label">Total Universities</Typo>
            <Typo
              var="buttonText"
              as="button"
              onClick={() => alert("Clicked!")}
            >
              Click
            </Typo>
            <Typo
              var="buttonText"
              as="button"
              onClick={() => alert("Clicked!")}
            >
              Save
            </Typo>
          </CardPrimary>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Paper
            elevation={1}
            sx={{
              p: 3,
              height: 320,
              borderRadius: 3,
              border: "1px solid #E5E7EB",
            }}
          >
            <Typo var="h3">Platform Growth (12 Months)</Typo>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              minHeight: 320,
              borderRadius: 3,
              border: "1px solid #E5E7EB",
            }}
          >
            <Typo var="h3">University Distribution</Typo>
            <InputSelect
              value={age}
              onChange={(val) => setAge(val)}
              placeholder="Select Age"
              options={[
                { label: "Ten", value: "10" },
                { label: "Twenty", value: "20" },
                { label: "Thirty", value: "30" },
              ]}
            />
            <Box display="flex" flexDirection="column" gap={1}>
              <Typo var="body">S Tier - 8</Typo>
              <Typo var="body">A+ Tier - 15</Typo>
              <Typo var="body">A Tier - 18</Typo>
              <Typo var="body">B Tier - 10</Typo>
            </Box>
          </Paper>
        </Grid>
        <Grid size={6}></Grid>
      </Grid>
    </Box>
  );
}
