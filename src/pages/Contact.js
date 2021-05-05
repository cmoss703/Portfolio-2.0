import Container from "../components/Container";
import Row from "../components/Row";
import About from "../components/About";
import Form from "../components/Form";

function Contact() {
    return (
        <>
            <Container>
                <Row>
                    <About>
                        <Form />
                    </ About>
                </ Row>
            </ Container>
        </>
    )
}

export default Contact;