import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import {Container} from "./styles";

export function Summary() {
    return (
            <Container>
                <div>
                    <header>
                        <p>Entrada</p>
                        <img src={incomeImg} alt="Entrada"/>
                    </header>
                    <strong>R$1800,00</strong>
                </div>
                <div>
                    <header>
                        <p>Saidas</p>
                        <img src={outcomeImg} alt="Saida"/>
                    </header>
                    <strong>-R$500,00</strong>
                </div>
                <div className="highlight-background">
                    <header>
                        <p>Entrada</p>
                        <img src={totalImg} alt="total"/>
                    </header>
                    <strong>R$1800,00</strong>
                </div>
            </Container>
        
    )
}