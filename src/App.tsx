import SigningForm from './_auth/forms/SigningForm'
import './globals.css'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/sign-in" element={<SigningForm />} />
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
