import { BackTop } from 'antd';
import React from 'react';

const AppFooter = () => {
    return (
        <div className='footer'>
            <p>Tech ©2022 Created by Mehedi Hasan Ridoy</p>
            <BackTop>
                <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
            </BackTop>
        </div>
    );
};

export default AppFooter;