import Input from "components/Input/Input";
import Button from "components/Button/Button";


const FormComp = () => {

  const handleSubmit = event => {
    event.preventDefault();
  }

  // form styles
  const style = {
      backgroundColor: '#007da781',
      borderRadius: '5px',
      padding: '20px',
      paddingLeft: '75px',
      paddingRight: '75px',
      boxShadow: '2px 8px 12px -4px rgba(0,0,0,0.22)',
  }
 // submit button styles
  const buttonStyle = {
    width: '100px',
    marginTop: '15px'
}

  return (

    <form onSubmit = {handleSubmit} style={style}>
        <Input
         label={' Username'}
         type = {'text'}  
         />
         <Input
         label = {' Password'}
         type = {'password'}
         />
        <Input
         label = {' Remember Me'}
         type = {'checkbox'}
         />
         
      <Button 
        style={buttonStyle}
        active= {true}
        onClick={() => console.log("Submitted")}
        text="Submit"
      />
    </form>
  );
};

export default FormComp;
