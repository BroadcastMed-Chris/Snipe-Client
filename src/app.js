import {Routes, Route} from 'react-router-dom';
import TestPage from './pages/TestPage';
import './styles/global.scss'

function App (props) {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<TestPage />} />
            </ Routes>    
        </div>
    )
}

export default App
