import React from 'react'
import {
    Image, 
    Menu, 
    Icon,
    Header,
    Responsive,
    Sidebar
} from 'semantic-ui-react'
import logo from '../../images/logo.png'

// Routing
import {
    Link,
} from "react-router-dom"

const menuItems = [
    {
        name: 'home',
        link: '/',
        text: 'Home',
        iconName: 'home'
    }, 
    {
        name: 'portfolio',
        link: '/portfolio',
        text: 'Portfolio',
        iconName: 'grid layout'
    }
]

class NavBar extends React.Component {

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
                {menuItems.map( item => (
                        
                    <Menu.Item as={ Link } name={item.name} to={item.link} className="header-link">
                        <Icon className='header-icon' name={item.iconName} size='large'/>
                        <Header as="h2" textAlign="center" className="website-title">
                            {item.text}
                        </Header>
                    </Menu.Item>   

                ))}
            </Sidebar>

            <Menu borderless size="huge" className='top-menu' fixed='top'>
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
            <Menu size="huge"  borderless className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    <Image src={logo} size='tiny'/>
                </Menu.Item>
                <Menu.Item className="title-menu">
                    <Header as="h2" textAlign="left" className="website-title">
                        Harry's Repairs
                    </Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                    {menuItems.map( item => (
                        
                        <Menu.Item as={ Link } name={item.name} to={item.link} className="header-link">
                            <Icon className='header-icon' name={item.iconName} size='large'/>
                            <Header as="h2" textAlign="center" className="website-title">
                                {item.text}
                            </Header>
                        </Menu.Item>   

                    ))}
                </Menu.Menu>
            </Menu>
        </Responsive>
      </>
    );
  }
}

export default NavBar;