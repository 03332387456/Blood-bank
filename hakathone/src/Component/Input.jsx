import TextField from "@mui/material/TextField";

function Input(props) {
  const { label, onChange, type, value } = props;
  return (
    <>
      <div>
        <TextField
          className="w-100 py-4 text-dark"
          id="standard-basic"
          placeholder={label}
          variant="standard"
          value={value}
          onChange={onChange}
          type={type ?? "text"}
        />
      </div>
    </>
  );
}

export default Input;
