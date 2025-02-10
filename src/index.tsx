import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from '@react-client-side-seed/App';
import '@react-client-side-seed/styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
