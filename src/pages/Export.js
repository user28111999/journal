import styled from "styled-components"

const Container = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    text-align: center;
    margin-top: 50%;

    & p {
        margin: 12px 0;
        padding: 12px;
        background: #fff;
        color: #000;
        border-radius: 4px;
        text-transform: uppercase;
    }
`

const Copyright = styled.div`
    width: 100%;
    background-color: #fff;
    color: #000;
    margin-top: 32px;
`

const Export = () => {
    return (
        <Container>
            <p>Export All (JSON)</p>
            <p>Delete All</p>
            <Copyright>
                <p>© 2023</p>
            </Copyright>
        </Container>
    )
}

export default Export