import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './global/style'

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>
)

export default App