import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

import Modal from 'react-modal';

import { useState } from 'react'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button onClick={props.onOpenNewTransactionModal} type="button" >Nova transação</button>
            </Content>
        </Container>
    )
}