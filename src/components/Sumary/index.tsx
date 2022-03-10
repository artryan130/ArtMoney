import { Container } from "./styles";

import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

export function Sumary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>- R$100,00</strong>
            </div>
            <div className="backgroundHigh">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$900,00</strong>
            </div>
        </Container>
    );
}