"use client"
import Header from './Header'
import { Modal, Button } from 'antd';
import React, { useState } from 'react';

function Hero () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <div className='bg-teal-800' style={{ 
            height: '100vh', 
            backgroundImage: 'url(hero-img.jpg)', 
            backgroundSize:'250%', 
            backgroundRepeat:'no-repeat', 
            backgroundPositionY: '50%', 
            backgroundPositionX:'50%', 
            backgroundAttachment: 'fixed'
            }} 
        >
            <Header />
            <div className='sm:mt-60 mt-48 p-12 w-full align-middle bg-opacity-40 bg-stone-950' onClick={showModal}>
                <h1 className='text-center text-3xl text-white font-bold '>
                    “A life that lives without doing anything is the same as a slow death.”
                </h1>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Paragraph</p>
            </Modal>
        </div>
    )
}

export default Hero;