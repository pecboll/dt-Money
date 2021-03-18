import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header";
import { NewTransActionModal } from './components/newTransActionModal';

import { GlobalStyles } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal( ) {
      setIsNewTransactionOpen(true);
  }
  function handleCloseNewTransactionModal( ) {
      setIsNewTransactionOpen(false);
  }
  return (
    <>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>

    <NewTransActionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />

      <GlobalStyles />
    </>
  );
}

