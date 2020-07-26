import React from 'react';
import {
    Image, 
    Menu, 
    Icon,
    Header,
    Responsive
} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../images/logo.png';

// Routing
import {
    Link,
} from "react-router-dom";

export class HeaderNav extends React.Component {
  render() {
    return (
      <>
        <Responsive {...Responsive.onlyMobile}>
            <Menu borderless className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    <Image src={logo} size='tiny'/>
                </Menu.Item>
                <Menu.Item className="title-menu">
                    <Header as="h2" textAlign="left" className="website-title">
                        Harry's Repairs
                    </Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={ Link } name='home' to='' className="header-link">
                        <Icon className='header-icon' name='bars' size='large'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Menu borderless className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    <Image src={logo} size='tiny'/>
                </Menu.Item>
                <Menu.Item className="title-menu">
                    <Header as="h2" textAlign="left" className="website-title">
                        Harry's Repairs
                    </Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                    {/* Link to home */}
                    <Menu.Item as={ Link } name='home' to='' className="header-link">
                        <Icon className='header-icon' name='home' size='large'/>
                        <Header as="h2" textAlign="left" className="website-title">
                            Home
                        </Header>
                    </Menu.Item>
                    {/* Link to quote */}
                    <Menu.Item as={ Link } name='quote' to='quote' className="header-link">
                        <Icon className='header-icon' name='money bill alternate outline' size='large'/>
                        <Header as="h2" textAlign="left" className="website-title">
                            Quote
                        </Header>
                    </Menu.Item>
                    {/* Link to portfolio */}
                    <Menu.Item as={ Link } name='portfolio' to='portfolio' className="header-link">
                        <Icon className='header-icon' name='grid layout' size='large'/>
                        <Header as="h2" textAlign="left" className="website-title">
                            Portfolio
                        </Header>
                    </Menu.Item>    
                </Menu.Menu>
            </Menu>
        </Responsive>
      </>
    );
  }
}

export default HeaderNav;