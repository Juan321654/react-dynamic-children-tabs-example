import React, { useState } from 'react';

// Usage example:
// <TabsButtonStyle>
//   <TabsButtonStyle.Tab title="Tab 1">Something</TabsButtonStyle.Tab>
//   <TabsButtonStyle.Tab title="Tab 2">Something else</TabsButtonStyle.Tab>
//   <TabsButtonStyle.Tab title="Tab 3">Another thing</TabsButtonStyle.Tab>
// </TabsButtonStyle>

const TabsButtonStyle = ({ children, onClickGetIndex = () => { }, removeChildren = false }) => {
     const [activeTab, setActiveTab] = useState(0);

     const handleTabClick = (index) => {
          setActiveTab(index);
          onClickGetIndex(index);
     };

     return (
          <div>
               {/* Tab Headers */}
               <div style={{
                    display: 'flex',
                    background: "lightgray",
                    padding: '5px',
                    borderRadius: '5px'
               }}>
                    {React.Children.map(children, (child, index) => (
                         <div
                              key={index}
                              onClick={() => handleTabClick(index)}
                              style={{
                                   padding: '10px 20px',
                                   cursor: 'pointer',
                                   background: activeTab === index ? 'white' : 'none',
                                   // borderBottom: activeTab === index ? '2px solid hotpink' : 'none',
                                   color: activeTab === index ? 'hotpink' : 'darkgray',
                                   borderRadius: '5px',
                                   width: '100%',
                              }}
                         >
                              {child.props.title}
                         </div>
                    ))}
               </div>

               {/* Tab Content */}
               {!removeChildren && (
                    <div style={{ padding: '20px' }}>
                         {React.Children.map(children, (child, index) => (
                              <div
                                   key={index}
                                   style={{ display: activeTab === index ? 'block' : 'none' }}
                              >
                                   {child.props.children}
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
};

// Define the Tab component as a static property
TabsButtonStyle.Tab = ({ title, children }) => {
     // This is just a placeholder component that passes props
     // The actual rendering is handled by the parent
     return null;
};

// Add display name for better debugging
TabsButtonStyle.Tab.displayName = 'TabsButtonStyle.Tab';

export default TabsButtonStyle;