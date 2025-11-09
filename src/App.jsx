import { useState } from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoleList from './pages/roles/RoleList'
import CreateRole from './pages/roles/CreateRole'
import EditRole from './pages/roles/EditRole'
import UserList from './pages/users/UserList'



function App() {
  
  return (
    <>
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
             
             <Route path='/roleList' element={<RoleList/>} />
             <Route path='/createRole' element={<CreateRole/>} />
             <Route path='/editRole' element={<EditRole/>} />

             
             <Route path='/userlist' element={<UserList/>} />

             
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
