import { React } from "react";
import styled from 'styled-components'

const Text = styled.text`
margin: 10%;
`
const Text2 = styled.text`
`
const Container = styled.div`
    width: 100%;
    background: #949494;
    padding: 10px 0;
    color: #fff;
`
export const SobreEmpresa = () => {
    return (
        <Container>
            <Text>Sobre: Tentamos sempre nos entregar ao maximo e oferecer um bom serviço a você!</Text>
            <Text2>Venha nos conhecer! </Text2> 
        </Container>
    );
};