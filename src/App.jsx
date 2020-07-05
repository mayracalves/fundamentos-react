import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default props => (
    <div className="App">
        <h1>Fundamentos React </h1>
        <div className="Cards">

            <Card titulo="#11 - Mega " color="#14B8B1">
                <Mega qtdNumero={8} />
            </Card>

            <Card titulo="#10 - Contador " color="#59323C">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#09 - Input " color="#1352A2">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação indireta " color="#FCE014">
                <Super sobrenome="Freitas"></Super>
            </Card>

            <Card titulo="#07 - Comunicação direta " color="#ED1C24">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={13}></CondicionalComIf>
            </Card>

            <Card titulo="#05 - Condicional v1" color="#E94C6F">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#04 - Repeticao" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#03 - Componente com filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Mayra</li>
                        <li>José</li>
                        <li>Ana</li>
                        <li>Carlos</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componente Com Parametro" color="#982395">
                <ComParametro titulo="esse é o titulo" subtitulo=" esse é o subtitulo" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#29ABA4">
                <Primeiro />
            </Card>
        </div>
    </div>
)