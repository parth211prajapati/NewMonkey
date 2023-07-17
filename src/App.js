
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react'
import {BrowserRouter,Link,Route,Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
 const pageSize =5;

 const apikey=process.env.REACT_APP_NEWS_API;

 const[progress,setProgress] = useState(0)
  


    return (
      <div>
         <BrowserRouter>
        <Navbar/>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
       
      />
        
        <Routes>
        <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general"  pageSize={pageSize} country="in" Category="general"/>} />
        <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business"  pageSize={pageSize} country="in" Category="business"/>} />
        <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment"  pageSize={pageSize} country="in" Category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general"  pageSize={pageSize} country="in" Category="general"/>} />
        <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" Category="health"/>} />
        <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science"  pageSize={pageSize} country="in" Category="science"/>} />
        <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" Category="sports"/>} />
        <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" Category="technology"/>} />  
       
      </Routes>
        </BrowserRouter>
      </div>
    )
  
}

export default App;