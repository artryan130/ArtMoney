import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Table(){
    
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(res => console.log(res.data))
    }, [])
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>   
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>10/03/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1000</td>
                        <td>Casa</td>
                        <td>10/03/2022</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    );
}