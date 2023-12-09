import './globals.css'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
