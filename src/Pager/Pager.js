import Panel from "components/Panel/Panel";
import SquareButton from "components/SquareButton/SquareButton";
import "./Pager.css";



const Pager = () => {
  return (
    <Panel>
      <div style={{
      backgroundColor: '#0034591c',
      paddingLeft: '30px',
      paddingRight: '30px',
      borderRadius: '8px',
      boxShadow: '2px 8px 12px -4px rgba(0,0,0,0.22)'

    }}>
      <SquareButton
        text="&#8678;"
      />
      <SquareButton
        text="1"
      />
      <SquareButton
        text="2"
      />
      <SquareButton
        text="3"
      />
      <p style={{
      display: 'inline',
    }}>...</p>
          <SquareButton
        text="12"
      />
      <SquareButton
        text="&#8680;"
      />
      </div>
    </Panel>
  );
};

export default Pager;
