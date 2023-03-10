import React from 'react'
import ReactDOMClient from 'react-dom/client'
import MyApp from './MyApp'
import "./index.css"


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Daily from "./pages/Daily";

//const container = document.getElementById('root');

// Create a root

//const root = ReactDOMClient.createRoot(container);

// Initial render:

//root.render(<MyApp />);

// export default function App() {
//     return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>

//           </Route>
//         </Routes>
//       </BrowserRouter>
//       </div>
//     );
//   }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyApp />);
  
  