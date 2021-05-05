import Container from "../components/Container";
import Row from "../components/Row";
import About from "../components/About";
import Main from "../components/Main";

function Home() {
    return (
        <>
            <Container>
                <Row>
                    <About>
                        <Main />
                    </ About>
                </ Row>
            </ Container>
        </>
    )
}

export default Home;