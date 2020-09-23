import React from 'react'
import { Titulo, DivTitle, Subtitulo, Dados, Inicio } from './style'
import { FiActivity } from "react-icons/fi";
import { AiFillAlert } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import { GiDeathSkull, GiWorld } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";

const Brasil: React.FC = () => {
    return (
        <>
        <DivTitle>
        <Titulo>COVID19</Titulo>
        <div><FiActivity /></div>
        <Subtitulo>INFORMAÇÕES</Subtitulo>
        </DivTitle>
        <Dados>
            <div className="primeira">
            <strong>Dados do Brasil:</strong>
            <div className="infos">
                <div className="icons"><AiFillAlert /></div>
                <strong>Novos casos:</strong>
                <p>33057</p>
            </div>
            <div className="infos">
                <div className="icons"><BsCheckAll /></div>
                <strong>Casos Confirmados:</strong>
                <p className="confirmados">4528240</p>
            </div>
            </div>
            <div className="primeira segunda--celular">
            <div className="infos">
                <div className="icons"><GiDeathSkull /></div>
                <strong>Novas Mortes:</strong>
                <p>739</p>
            </div>
            <div className="infos">
                <div className="icons"><FaSkullCrossbones /></div>
                <strong>Mortes Confirmadas:</strong>
                <p className="confirmados">136532</p>
            </div>
            </div>
            <Inicio>

                Veja os dados <a href="/">
                    Mundiais <div><GiWorld/ ></div>

                    </a>
            </Inicio>
        </Dados>
        </>
    )
}

export default Brasil