import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '@react-client-side-seed/components/Header.component';
import Spinner from '@react-client-side-seed/components/Spinner.component';

const Home = lazy(() => import('@react-client-side-seed/pages/Home.page'));
const NotFound = lazy(() => import('@react-client-side-seed/pages/NotFound.page'));

const App = () => (
    <BrowserRouter>
        <Header />
        <main>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </main>
    </BrowserRouter>
);

export default App;
