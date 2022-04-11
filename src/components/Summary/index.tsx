import React, { useContext } from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary()
{
    const {transactions} = useTransactions();

    const summary = transactions.reduce((acumulator, transaction) => {
        if (transaction.type == 'deposit') {
            acumulator.deposits += transaction.amount
            acumulator.total += transaction.amount
        } else if (transaction.type == 'withdraw') {
            acumulator.withdraws += transaction.amount
            acumulator.total -= transaction.amount
        }
        return acumulator;
    }, {deposits : 0, withdraws: 0, total: 0})

    return  (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    { 
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(summary.deposits) 
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="entradas" />
                </header>
                <strong>
                    { 
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(summary.withdraws)
                    }
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="entradas" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}