import logo from './logo.svg';
import './App.css';
import ClassComponent from './component/2-6.LifeCycle/ClassComponent';
import Event from './component/2-7.Event/Event';
import ConditionalRendering from './component/2-8.ConditionalRendering/ConditionalRendering';
import List from './component/2-9.List/List';
import ControlledComponent from './component/2-10.Form/ControlledComponent';
import UnControlledComponent from './component/2-10.Form/UnControlledComponent';

function App() {
  return (


      <div className='App'>
        {/* <ClassComponent/> */}
        {/* <Event/> */}
        {/* <ConditionalRendering /> */}
        {/* <List /> */}
        <ControlledComponent/>
        <br/>
        <UnControlledComponent/>
      </div>

      );
}

      export default App;
