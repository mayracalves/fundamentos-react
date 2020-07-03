import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default props => (
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={13}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repeticao">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Mayra</li>
                    <li>José</li>
                    <li>Ana</li>
                    <li>Carlos</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="esse é o titulo" subtitulo=" esse é o subtitulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
)