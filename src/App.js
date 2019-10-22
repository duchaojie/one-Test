// import React from 'react';
// // import logo from './logo.svg';
// import style from './App.less';
// import { Button } from 'antd';
// import 'antd/dist/antd.css';

// function App() {
//   return (
//     <div className={style.App}>
//       第一个页面
//       <Button type='primary'>antd</Button>

//       {/* <header className={style.AppHeader}>
//         <img src={logo} className={style.AppLogo} alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className={style.AppLink}
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Route } from 'react-router-dom'

import Login from './container/login'
import Register from './container/register'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/Register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    )
  }
}

export default App
