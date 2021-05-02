import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card";
import Main from "../components/Main";

function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Card>
                        <Main />
                    </ Card>
                </ Row>
            </ Container>
        </>
    )
}

export default Home;