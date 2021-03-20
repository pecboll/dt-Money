import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { useState } from 'react'

interface NewTransActionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransActionModal({ isOpen, onRequestClose }: NewTransActionModalProps) {
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction() {


    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className=" react-modal-content"
        >
            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close" >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>cadastrar translaçao</h2>

                <input
                    placeholder="Titulo"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>


                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Entrada</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder="Categoria" />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}