import styled from 'styled-components';

export const DivTitle = styled.div `
    color: #06eadd;
    display: flex;
    margin-left: 40vh;
    margin-top: 10vh;

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

export const Form = styled.form `
    margin-top: 20px;
    margin-left: 70vh;
    margin-right: 70vh;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        font-size: 30px;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 110px;
        height: 70px;
        background: #ffa600;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        cursor: pointer;

            div {
                font-size: 50px;
                margin-top: 10px;

                &:hover {
                    translate: 10px;
                }
            }

        &:hover {
            background: #ffd27e;
        }
    }

    @media(max-width: 574px) {
        margin-left: 27px;
        margin-top: 20px;


        input {
            width: 250px;
            font-size: 20px;
        }
    }
`

export const Dados = styled.div `
        margin-top: 50px;
        margin-left: 210px;
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
            margin-top: 20px;
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

export const Brasil = styled.p `
            margin-left: 750px;
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
                margin-top: -20px;
            }
        }
    }
`