import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout>Home Pages is working</Layout>} />
        <Route path="/profile" element={<span>profile</span>} />
        <Route path="/*" element={<Navigate to ="/"/>} />
    </Routes>

  )
}

export default AppRoutes