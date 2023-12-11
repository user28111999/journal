import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div>
            <h1>Home Page</h1>
            
        </div>
    );
};

export default Home