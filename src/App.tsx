import React, {createElement, useState} from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import logo from './logo.svg';
import GoodsPage from "./pages/GoodsPage";
import SideBar from "./components/SideBar";
import ErrorContext from "./context";
import ErrorElement from "./components/ErrorElement";

function App() {
    const [error, setError] = useState<string>('')
    return (
        <div className="grid grid-cols-7 gap-2">
            <SideBar/>
            <div className="col-span-6">
                <ErrorContext.Provider value={{error, setError}}>
                    <ErrorElement/>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<GoodsPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </ErrorContext.Provider>
            </div>
        </div>
    )
    /*
  const [count, setCount] = useState(0)
  return React.createElement('div', {}, [
      React.createElement('p', {
          onClick: () => setCount(count + 1)
      }, `${count}`)
  ])
    */
}

export default App;
