import { Box, Grid, Paper } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CardPrimary from "../../components/card/CardPrimary";
import IconWithBG from "../../components/icon/IconWithBG";
import Typo from "../../components/typography/typo";
import InputSelect from "../../components/formElements/InputSelect";
import { useState } from "react";
import GenericTable from "../../components/table/GenericTable";
import type { Column } from "../../types/table/Generics";
import StatusChip from "../../components/chip/StatusChip";

export interface Transaction {
  date: string;
  university: string;
  type: string;
  amount: string;
  status: string;
  action: string;
}

const transactionColumns: Column<Transaction>[] = [
  { key: "date", label: "DATE" },
  { key: "university", label: "UNIVERSITY" },
  { key: "type", label: "TYPE" },
  { key: "amount", label: "AMOUNT" },
  {
    key: "status",
    label: "STATUS",
    render: (value) => <StatusChip label={value} />,
  },
  {
    key: "action",
    label: "ACTIONS",
    render: () => (
      <Box
        sx={{
          color: "#4C33FF",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        <Typo var="labelSmall">Download Invoice</Typo>
      </Box>
    ),
  },
];

const transactionRows: Transaction[] = [
  {
    date: "01/11/2024",
    university: "IIT Delhi",
    type: "Renewal",
    amount: "₹25,000",
    status: "Completed",
    action: "",
  },
  {
    date: "28/10/2024",
    university: "VIT Vellore",
    type: "Monthly",
    amount: "₹35,000",
    status: "Pending",
    action: "",
  },
];

export default function DashboardPage() {
  const [age, setAge] = useState<string>("");

  return (
    <Box sx={{}}>
      <Typo var="h1">Platform Overview</Typo>
      <Typo var="subtitle">Real-time metrics across all universities</Typo>
      <br />
      {/* Main Grid */}
      <Grid container spacing={2}>
        <Grid size={{ md: 6, sm: 6 }}>
          <CardPrimary
            bgColor="linear-gradient(to bottom right, #6366f1, #9333ea)"
            textColor="#fff"
          >
            <Typo var="h2" style={{ color: "#fff" }}>
              Total Universities
            </Typo>
          </CardPrimary>
        </Grid>
        <Grid size={{ md: 6, sm: 6 }}>
          <CardPrimary>
            <Box sx={{ display: "flex" }}>
              <IconWithBG
                iconColor="rgba(147,51,234,1)"
                bgColor="rgba(243,232,255,1)"
                icon={<ApartmentIcon />}
              />
              <Box sx={{ marginLeft: "10px" }}>
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
              </Box>
            </Box>
          </CardPrimary>
        </Grid>
        <Grid size={6}>
          <CardPrimary>
            <Typo var="h3">Platform Growth (12 Months)</Typo>
          </CardPrimary>
        </Grid>
        <Grid size={6}>
          <CardPrimary>
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
          </CardPrimary>
        </Grid>
        <Grid size={12}>
          <GenericTable<Transaction>
            title="Recent Transactions"
            columns={transactionColumns}
            rows={transactionRows}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
