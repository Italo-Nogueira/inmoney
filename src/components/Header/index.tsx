import logoImg from '../../assets/logo.png';
import { Container, Content } from './style';

interface HeaderProps {
    OnOpenNewTransactionModal: () => void;

}

export function Header({OnOpenNewTransactionModal}: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="in money" height="50" width="160"/>
                <button type="button" onClick={OnOpenNewTransactionModal}>
                    Nova transação
                </button>

            </ Content>
        </Container>
    )
}