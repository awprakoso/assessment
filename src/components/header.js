import React, {useState, useLayoutEffect} from 'react';
import {useSelector} from 'react-redux'
import {Navbar, Nav, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {logo, delivery, bag, profile} from '../assets'

const SubHeader = () => {
    const [language, setLanguage] = useState('English')
    const languageList = [
        {name: 'English'},
        {name: 'Indonesian'},
    ]
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5F5F5', margin: '-10px 10px -10px 10px'}}>
            <Dropdown >
                <Dropdown.Toggle style={{backgroundColor: 'transparent', color: '#000000', borderWidth: 0}}>
                    {language}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {languageList.map((item, index) => (
                        <Dropdown.Item
                        key={index}
                        onClick={() => setLanguage(item.name)}
                        >{item.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <div style={{display: 'flex', marginLeft: 90, alignItems: 'center'}}>
                <img alt='delivery' src={delivery} style={{marginRight: 20, width: 25, height: 25}}/>
                <p style={{marginTop: 15}}>FREE SHIPPING OVER $100 PURCHASE</p>
            </div>
            <div style={{display: 'flex', }}>
                <p style={{cursor: 'pointer', margin: '0 5px 0 5px'}}>Shipping</p>
                <p style={{cursor: 'pointer', margin: '0 5px 0 5px'}}>FAQ</p>
                <p style={{cursor: 'pointer', margin: '0 5px 0 5px'}}>Contact</p>
            </div>
        </div>
    )
}

const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState(0)
    const [size, setSize] = useState()

    const notif = useSelector((state) => state.shoppingBag.shoppingList)
    console.log(notif)
    useLayoutEffect(() => {
        function updateSize(){
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    const menuList = [
        {title: 'New Release'},
        {title: 'Men'},
        {title: 'Women'},
        {title: 'Kids'},
        {title: 'Customize'},
    ]
    
    return(
        <div >
            {size > 991 ? <SubHeader /> : null}
            <Navbar bg="light" expand="lg" style={{height: 60}}>
                {size < 991 ? (
                    <Link to='/'>
                        <Navbar.Brand >
                            <img alt='logo' src={logo} />
                        </Navbar.Brand>
                    </Link>
                ) : null}
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                    {size > 991 ? (
                        <Link to='/'>
                            <Navbar.Brand>
                                <img alt='logo' src={logo} />
                            </Navbar.Brand>
                        </Link>
                    ) : null}
                    <Nav>
                        {menuList.map((list, index) => (
                            <div style={selectedMenu === index ? styles.active : styles.inactive}>
                                <Nav.Link
                                style={styles.linkText}
                                key={index} 
                                onClick={() => setSelectedMenu(index)}>
                                    {list.title}
                                </Nav.Link>
                            </div>
                        ))}
                    </Nav>
                    <Nav >
                        <Nav.Link href='/bag' style={styles.addMargin}>
                            <img alt='bag' src={bag}/>
                            <p style={styles.notification}>{notif.length}</p>
                        </Nav.Link>
                        <Nav.Link style={styles.addMargin}>
                            <img alt='profile' src={profile}/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;

const styles = {
    active: {
        borderBottom: '3px solid black',
        margin: '0 20px 0 20px'
    },
    inactive: {
        margin: '0 20px 0 20px'
    },
    linkText: {
        color: '#131212',
        fontWeight: 'bold'
    },
    addMargin: {
        margin: '0 10px 0 10px'
    },
    notification: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 15,
        right: 90,
        backgroundColor: 'red',
        borderRadius: 20,
        fontSize: 10,
        textAlign: 'center',
        color: 'white'
    }
}