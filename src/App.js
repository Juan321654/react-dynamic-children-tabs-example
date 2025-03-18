import './App.css';
import Tabs from './components/tabs/Tabs';

function App() {
     return (
          <div className="App">
               <Tabs>
                    <div label="Tab 1">Something</div>
                    <div label="Tab 2">Something else</div>
                    <div label="Tab 3">Another thing</div>
               </Tabs>
          </div>
     );
}

export default App;
