import logo from './logo.svg';
import './App.css';
import cc from './mycss.modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { Button } from 'react-bootstrap';

const cs ={
color:"Blue"
}

function App() {
  return (
    <div>
      <h1 style={{color:"Red"}}>Hello</h1>
      <h1 style={cs}>Hello</h1>
      <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      <Button variant="primary">Primary</Button>
      <h3> Lets go for a <FaBeer />? </h3>
      
    </div>
  );
}

export default App;
