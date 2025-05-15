import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from '@mui/material';

const SelectUI = (props: {
  options: string[];
  name: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
}) => {
  const { name, value, onChange, options } = props;

  const option = options.map((name) => {
    const value = name !== 'None' ? name : '';

    return (
      <MenuItem key={name} value={value}>
        {name}
      </MenuItem>
    );
  });

  return (
    <FormControl className='select'>
      <InputLabel id={name}>{name}</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        label={name}
        onChange={onChange}
      >
        {option}
      </Select>
    </FormControl>
  );
};

export default SelectUI;
