import { FormEvent, useState, useContext } from 'react'

import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { transactionsContext } from '../../TransactionContext'

interface NewTransActionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransActionModal({ isOpen, onRequestClose }: NewTransActionModalProps) {
    const { createTransaction } = useContext(transactionsContext);

    const [title, setTitle] = useState(' ');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(' ');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title ,
            amount,
            category,
            type,
        })
        setTitle(' ');
        setAmount(0);
        setCategory(' ');
        setType('deposit');
        onRequestClose();
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
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
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
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)} />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}