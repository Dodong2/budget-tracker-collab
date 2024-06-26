import { lazy, Suspense } from 'react'
import './App.css'
function App() {

const Board = lazy(() => import('./components/Board'))

  return (
    <>
    <Suspense fallback={<div className=''>Loading</div>}>
    <Board/>
    </Suspense>
    </>
  )
}

export default App
