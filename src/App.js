import './App.css';
import Tabs from './components/tabs/Tabs';
import TabsButtonStyle from './components/tabs/TabsButtonStyle';

function App() {
     return (
          <div className="App">
               <Tabs>
                    <div label="Tab 1">Something</div>
                    <div label="Tab 2">Something else</div>
                    <div label="Tab 3">Another thing</div>
               </Tabs>
               <TabsButtonStyle>
                    <TabsButtonStyle.Tab title="Tab 1">Something</TabsButtonStyle.Tab>
                    <TabsButtonStyle.Tab title="Tab 2">Something else</TabsButtonStyle.Tab>
                    <TabsButtonStyle.Tab title="Tab 3">Another thing</TabsButtonStyle.Tab>
               </TabsButtonStyle>
          </div>
     );
}

export default App;
