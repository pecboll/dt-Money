
import logosvg from '../../assets/logo.svg'

import {Container, Content} from './styles'

interface headerProps {
    onOpenNewTransactionModal:  ( ) => void;
}
export function Header({ onOpenNewTransactionModal}: headerProps) {
    
return (
    <Container>
        <Content>
        <img src={logosvg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal} >
            Nova transação
        </button>
        </Content>
    </Container>
)
}