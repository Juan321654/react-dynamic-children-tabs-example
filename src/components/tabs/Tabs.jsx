import React, { useState } from 'react';

// USAGE:
{/* <Tabs>
     <div label="Tab 1">Something</div>
     <div label="Tab 2">Something else</div>
     <div label="Tab 3">Another thing</div>
</Tabs> */}

const Tabs = ({ children }) => {
     const [activeTab, setActiveTab] = useState(0);

     const handleTabClick = (index) => {
          setActiveTab(index);
     };

     console.log(React.Children.map(children, (child, index) => { return child.props }))

     return (
          <div>
               {/* Tab Headers */}
               <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                    {React.Children.map(children, (child, index) => (
                         <div
                              key={index}
                              onClick={() => handleTabClick(index)}
                              style={{
                                   padding: '10px 20px',
                                   cursor: 'pointer',
                                   borderBottom: activeTab === index ? '2px solid hotpink' : 'none',
                                   fontWeight: activeTab === index ? 'bold' : 'normal',
                                   color: activeTab === index ? 'hotpink' : 'white',
                              }}
                         >
                              {child.props.label}
                         </div>
                    ))}
               </div>

               {/* Tab Content */}
               <div style={{ padding: '20px' }}>
                    {React.Children.map(children, (child, index) => (
                         <div
                              key={index}
                              style={{ display: activeTab === index ? 'block' : 'none' }}
                         >
                              {child}
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Tabs;