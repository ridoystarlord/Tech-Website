import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const Works = () => {
    const [visible,setVisible]=useState(false)
    const handleCancel=()=>{
        setVisible(false) 
    }
    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                    <Button size="large" onClick={()=>setVisible(true)}><i className="fas fa-play"></i></Button>
                </div>
                <Modal
                    title="Woocommerce Tutorial"
                    visible={visible}
                    onCancel={handleCancel}
                    footer={null}
                    destroyOnClose = {true}
                >
                    <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
                </Modal>
            </div>
        </div>
    );
};

export default Works;