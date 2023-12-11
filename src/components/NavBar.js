import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus, faFolder } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = styled.nav`
    background-color: #000;
    height: 7.5%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;

    div svg {
        font-size: 24px;
        margin-top: 1rem;
    }
`

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <NavigationBar>
            <div onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faFolder} color="white" />
            </div>
            <div onClick={() => navigate('/add')}>
                <FontAwesomeIcon icon={faPlus} color="white" />
            </div>
            <div onClick={() => navigate('/export')}>
                <FontAwesomeIcon icon={faGear} color="white" />
            </div>
        </NavigationBar>
    )
}

export default NavBar