import React from 'react';
// import '../App.css';
import AppHeader from '../common/AppHeader';
// import 'antd/dist/antd.css';
import { Layout, } from 'antd';
import Hero from '../Hero/Hero';
import AboutUs from '../AboutUs/AboutUs';
import Features from '../Features/Features';
import Works from '../Works/Works';
import FAQs from '../FAQs/FAQs';
import Pricing from '../Pricing/Pricing';
import ContactUs from '../ContactUs/ContactUs';
import AppFooter from '../common/AppFooter';
const { Header, Footer, Content } = Layout;

const Homepage = () => {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <Hero />
                <AboutUs />
                <Features />
                <Works />
                <FAQs />
                <Pricing />
                <ContactUs />
            </Content>
            <Footer>
                <AppFooter/>
            </Footer>
        </Layout>
    );
};

export default Homepage;