import styled from 'styled-components';

export const DivTitle = styled.div `
    color: #06eadd;
    display: flex;
    margin-left: 40vh;
    margin-top: 20vh;

    @media(max-width: 574px) {
        margin-left: 10px;
        margin-top: 50px;
    }

    div {
        padding: 10px;
        font-size: 60px;

        @media(max-width: 574px) {
        font-size: 15px;
    }
    }
`

export const Titulo = styled.h1 `
    font-weight: bold;
    font-size: 90px;
    color: #06eadd;

    @media(max-width: 574px) {
        font-size: 35px;
    }
`
export const Subtitulo = styled.h1 `
    font-size: 60px;
    color: #cfe9f8;

    @media(max-width: 574px) {
        margin-top: 8px;
        font-size: 23px;
    }
`

export const Dados = styled.div `
        margin-top: 50px;
        margin-left: 260px;
        color: #e6e6e6;

            .primeira {
                display: flex;
            }

            .infos {
                margin-top: 40px;
                display: flex;


                .icons {
                    font-size: 80px;
                }

                & + div {
                    margin-left: 80px;
                }
                strong {
                    margin-top: 2px;
                    margin-left: 10px;
                }
                p {
                    font-size: 45px;
                    margin-top: 25px;
                    margin-left: -75px;
                    color: #8cd98c;
                }
            }

            @media(max-width: 574px) {
            margin-left: 27px;
            margin-top: 40px;
            margin-right: 30px;

            .infos {
                margin-top: 50px;
                margin-left: -80px;
                display: flex;

                .icons {
                    font-size: 40px;
                }

                & + div {
                    margin-left: 20px;
                }
                strong {
                    margin-top: 2px;
                    margin-left: 10px;
                }

                p {
                    font-size: 20px;
                    margin-top: 40px;
                    margin-left: -75px;
                    color: #8cd98c;
                }
            }

            .segunda--celular {
               margin-left: 80px;
           }
        }
`

export const Inicio = styled.p `
            margin-left: 660px;
            font-size: 30px;
            margin-top: 80px;
            display:flex;
        a{
         display:flex;
        margin-left: 7px;
        text-decoration: none;
        color: #8cd98c;
        font-weight: bold;

            div {
                margin-top: -15px;
                margin-left: 10px;
                font-size: 65px;
            }
        }

        a:hover {
            color: #267326;
        }
        @media(max-width: 574px) {

        font-size: 20px;
        margin-left: 0;
        margin-top: 115px;

        a {
            margin-top: 35px;
            margin-left: -125px;

            div {
                margin-top: -12px;
            }
        }
    }
`