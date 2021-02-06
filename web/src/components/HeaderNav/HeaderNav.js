import React from 'react';
import {
    Image, 
    Menu, 
    Icon,
    Header,
    Responsive,
    Sidebar,
    Segment
} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../images/logo.png';

// Routing
import {
    Link,
} from "react-router-dom";

const menuItems = (
    <>
        {/* Link to home */}
        <Menu.Item as={ Link } name='home' to='' className="header-link">
            <Icon className='header-icon' name='home' size='large'/>
            <Header as="h2" textAlign="center" className="website-title">
                Home
            </Header>
        </Menu.Item>
        {/* Link to portfolio */}
        <Menu.Item as={ Link } name='portfolio' to='portfolio' className="header-link">
            <Icon className='header-icon' name='grid layout' size='large'/>
            <Header as="h2" textAlign="center" className="website-title">
                Portfolio
            </Header>
        </Menu.Item>    
    </>
)

export class HeaderNav extends React.Component {

  constructor(props) {
      super(props)

      this.state = {
          sidebar: false,
      }
  }

  toggleSideBar = () => {
    
    const { sidebar } = this.state
    console.log("Toggled sidebar: " + sidebar)

    this.setState({
        sidebar: !sidebar
    })

  }

  render() {

    const { sidebar } = this.state

    return (
      <>
        <Responsive {...Responsive.onlyMobile}>
            
            <Sidebar
                visible={sidebar}
                as={Menu}
                animation='overlay'
                icon='labeled'
                vertical
                width='thin'
            >
                {menuItems}
            </Sidebar>

            <Menu borderless size="mini" className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    <Image src={logo} size='tiny'/>
                </Menu.Item>
                <Menu.Item className="title-menu">
                    <Header as="h2" textAlign="left" className="website-title">
                        Harry's Repairs
                    </Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={ Link } onClick={this.toggleSideBar} name='home' className="header-link">
                        <Icon className='header-icon' name='bars' size='large'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Menu size="mini"  borderless className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    <Image src={logo} size='tiny'/>
                </Menu.Item>
                <Menu.Item className="title-menu">
                    <Header as="h2" textAlign="left" className="website-title">
                        Harry's Repairs
                    </Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                    {menuItems}
                </Menu.Menu>
            </Menu>
        </Responsive>
      </>
    );
  }
}

export default HeaderNav;