import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/LeftAside';
import RightAside from '../Component/RightAside';
import Loading from '../Pages/Loading';

const Homelayout = () => {
    const {state}=useNavigation()
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
              <aside className='md:col-span-3 sticky h-fit top-0'>
                <LeftAside></LeftAside>
              </aside>
                <section className='main md:col-span-6'>
                 {state== 'loading' ? <Loading></Loading> :   <Outlet></Outlet> }
                </section>
                <aside className='md:col-span-3 sticky h-fit top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Homelayout;