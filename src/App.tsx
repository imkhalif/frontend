import React from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const App = () => {
  return (
    <div style={{ width: "600px" }}>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          height: "20px",
          "& .MuiSlider-thumb": {
            display: "none",
          },
        }}
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Search universities, students, or metrics..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        fullWidth
      />
    </div>
  );
};

export default App;
