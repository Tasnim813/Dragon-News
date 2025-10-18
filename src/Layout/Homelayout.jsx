import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/LeftAside';
import RightAside from '../Component/RightAside';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav  className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto  md:grid md:grid-cols-12 gap-5'>
              <aside className='md:col-span-3'>
                <LeftAside></LeftAside>
              </aside>
                <section className='main md:col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='md:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Homelayout;