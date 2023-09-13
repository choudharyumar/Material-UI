import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/lab";
import { useState } from "react";
const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  console.log({
    selectedDate,
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
    selectedDateTime,
  });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue: any) => {
          setSelectedDate(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
      <TimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue: any) => {
          setSelectedTime(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
      <DateTimePicker
        label="Date Time Picker"
        value={selectedDateTime}
        onChange={(newValue: any) => {
          setSelectedDateTime(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </Stack>
  );
};

export default MuiPicker;
