import "./RadioButtons.css";
import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";

const RadioButtons = () => {


// reference: https://www.youtube.com/watch?v=GDh9uToZkYg&ab_channel=dcode

  return (
    <Panel>
      <div className="radioSection">
      <Input
        label={'Apple '}
        id = {'radio1'}
        value = {'Apple'}
        type = {'radio'}
        name = {'pageRadio'}
      />
      <Input
        label={'Pear '}
        id = {'radio2'}
        value = {'Pear'}
        type = {'radio'}
        name = {'pageRadio'}
      />
        <Input
        label={'Orange '}
        id = {'radio3'}
        value = {'Orange'}
        type = {'radio'}
        name = {'pageRadio'}
      />
      </div>
    </Panel>
  );
};

export default RadioButtons;
