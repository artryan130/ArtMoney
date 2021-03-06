import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import Modal from 'react-modal';
import { useState } from 'react'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
  
  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />
     <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      >
      <h2>Cadastrar Transação</h2>
      </Modal>
     <GlobalStyle/>
    </>
  );
}

