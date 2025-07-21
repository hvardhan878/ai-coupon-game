import { Routes, Route } from 'react-router-dom'
import BrandList from './components/BrandList'
import ChatGame from './components/ChatGame'

function App() {
  return (
    <div className="min-h-screen gradient-sharp">
      <Routes>
        <Route path="/" element={<BrandList />} />
        <Route path="/chat/:brandId" element={<ChatGame />} />
      </Routes>
    </div>
  )
}

export default App 