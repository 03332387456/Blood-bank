import Button from "@mui/material/Button";
function Buttons(props) {
  const { onClick, label } = props;
  return (
    <div>
      <Button onClick={onClick} variant="contained">
        {label}
      </Button>
    </div>
  );
}

export default Buttons;