import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <header>
                <Navber/>

            </header>
            <main className='pt-20'>
                <Outlet/>

            </main>
            <footer>

            </footer>
            
        </div>
    );
};

export default Root;