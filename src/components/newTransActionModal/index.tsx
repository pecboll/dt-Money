import Modal from 'react-modal'

interface NewTransActionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransActionModal( {isOpen, onRequestClose}: NewTransActionModalProps) {
    return(
        <Modal 
        isOpen={ isOpen} 
        onRequestClose={onRequestClose}>
            <h2>caadastrar translaçao</h2>
        </Modal>
    )
} 