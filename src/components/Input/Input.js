const Input = (props) => {

  const style = {
    paddingTop: '10px',
    paddingBottom: '10px'
  }

  const fieldStyle = {
    borderRadius: '5px',
    border: '1px solid gray',
    padding: '4px'
  }

  return (
  // input fields with labels
  // input props: type, value, name, id
  // label props: for
  <div style={style}>
    <input style={fieldStyle} type={props.type} value = {props.value} name = {props.name} id = {props.id}/>
    <label htmlFor = {props.id}>{props.label}</label>
  </div>
  );
};

export default Input;
