import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import Login from './Login'
import Dashboard from './Dashboard'
import Guest from './Guest'
import EditPage from './EditPage'
import NEWPOST from './NEWPOST'
import ViewPost from './ViewPost'
import MyPost from './MyPost'
import AllUser from './AllUser'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RegistrationPage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/Guest' element={<Guest/>}></Route>
                <Route path='/edit/:uid' element={<EditPage/>}></Route>
                <Route path='/newpost' element={<NEWPOST/>}></Route>
                <Route path="/viewpost" element={<ViewPost/>}></Route>
                <Route path="/mypost" element={<MyPost/>}></Route>
                <Route path="/allusers" element={<AllUser/>}></Route>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}
