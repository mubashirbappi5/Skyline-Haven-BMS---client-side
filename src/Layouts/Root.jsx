import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

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
               <Footer/>
            </footer>
            
        </div>
    );
};

export default Root;