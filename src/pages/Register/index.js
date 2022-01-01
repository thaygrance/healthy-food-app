import { Header } from '../../components/Header/index';
import { Form } from '../../components/Form/index';
import { Footer } from '../../components/Footer';
import { RegisterDiv } from '../../components/RegisterDiv';
export function Register() {
    return (
        <>
            <Header toLink={"/"}>
            HOME
            </Header>
            <RegisterDiv/>
            <Form/>
            <Footer/>
        </>
    )
};