import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Notes = styled.div`
    display: grid;
    margin: 24px;
    padding: 8px;
    background: #fff;
    color: #000;
    border-radius: 4px;
    cursor: pointer;

    h2, p, span {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 18px;
        padding: 4px;
    }

    p {
        font-size: 14px;
        padding: 4px;
        margin: 4px 0;
    }

    span {
        font-size: 12px;
        font-style: italic;
        text-align: right;
        opacity: .666;
    }

    .important-item {
        font-size: 24px;
        text-align: right;
        padding: 0;
        margin: 0;
        display: inline-flex;

        span {
            color: red;
            font-size: 14px;
        }
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    margin: 24px 0;

    select {
        font-size: 14px;
        border-radius: 4px;
    }

    div svg {
        font-size: 18px;
        cursor: pointer;
    }
`

const Home = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Journal Entry #1',
            description: 'Description...',
            date: '11/12/2023 11:52',
            important: false
        },
        {
            id: 2,
            title: 'Journal Entry #2',
            description: 'Description...',
            date: '11/12/2023 11:52',
            important: true
        },
        {
            id: 3,
            title: 'Journal Entry #3',
            description: 'Description...',
            date: '11/12/2023 11:52',
            important: false
        }
    ]);

    const navigate = useNavigate();

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <>
            <Header>
                <select>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Important">Important</option>
                </select>
                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} color="white" />
                </div>
            </Header>
            <div>
                {items.map((item) => (
                    <Notes key={item.id} onClick={() => navigate(`/${item.id}`)}>
                        <h2>{item.title && item.important ? (
                            <div className="important-item">
                                <h2>{item.title}</h2>
                                <span className='important'>!</span>
                            </div>
                        ) : (item.title)}</h2>
                        <p>{item.description}</p>
                        <span>{item.date}</span>
                    </Notes>
                ))}
            </div>
        </>
    );
};

export default Home