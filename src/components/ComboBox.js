import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
    console.log("Your input selected is: " + event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>City</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={city} label='City' onChange={handleChange}>
          <MenuItem value={"Konak"}>Konak</MenuItem>
          <MenuItem value={"Bornova"}>Bornova</MenuItem>
          <MenuItem value={"Karşıyaka"}>Karşıyaka</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
