import React from 'react'
import { Titulo, DivTitle, Subtitulo, Form, Dados, Brasil } from './style'
import { FiActivity } from "react-icons/fi";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { AiFillAlert } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import { GiDeathSkull, GiBrazilFlag } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";

const Dashboard: React.FC = () => {
    return (
        <>
        <DivTitle>
        <Titulo>COVID19</Titulo>
        <div><FiActivity /></div>
        <Subtitulo>INFORMAÇÕES</Subtitulo>
        </DivTitle>
        <Form>
        <input placeholder="Digite nome do Pais" />
        <button type="submit">
            <div><RiSurgicalMaskFill /></div>
        </button>
        </Form>
        <Dados>
            <div className="primeira">
            <strong>Dados Globais:</strong>
            <div className="infos">
                <div className="icons"><AiFillAlert /></div>
                <strong>Novos casos:</strong>
                <p>278043</p>
            </div>
            <div className="infos">
                <div className="icons"><BsCheckAll /></div>
                <strong>Casos Confirmados:</strong>
                <p className="confirmados">30772545</p>
            </div>
            </div>
            <div className="primeira segunda--celular">
            <div className="infos">
                <div className="icons"><GiDeathSkull /></div>
                <strong>Novas Mortes:</strong>
                <p>278043</p>
            </div>
            <div className="infos">
                <div className="icons"><FaSkullCrossbones /></div>
                <strong>Mortes Confirmadas:</strong>
                <p className="confirmados">30772545</p>
            </div>
            </div>
            <Brasil>
                Veja os dados do <a href="/brasil">
                    Brasil <div><GiBrazilFlag/></div>
                    </a>
            </Brasil>
        </Dados>
        </>
    )
}

export default Dashboard