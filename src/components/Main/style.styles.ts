import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100%; 
`
export const CampoPrincipal = styled.body`
    background: linear-gradient(24deg, #0e1e66 15%, #7905f3 100%);
    width: 100%;
    height: 100%;
`

export const SectionApresentacao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15rem;
`
export const Img = styled.img`
    width: 100%;
    position: absolute;
    box-shadow: rgb(0 0 0) 0px 7px 14px 2px;
`



export const CampoTitulo = styled.div`
    z-index: 2;
    margin-top: 1rem;
    margin-bottom: 2rem;
    position: relative;
    top: 9.68rem;
`

export const Titulo = styled.h1``

export const CampoImg = styled.div`
    position: relative;
    top: 9.68rem;

`
export const ImagemPerfil = styled.img`
    width: 15rem;
    height: auto;
    border-radius: 8px;
    box-shadow: rgb(0 0 0) 0px 7px 14px 2px;
`

export const CampoTexto = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;
    position: relative;
    top: 9.68rem;
`

export const Paragrafo = styled.p``

export const SectionRedes = styled.section``

export const CampoNetwork = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
export const LinkParaLinkedin = styled.a`

`
export const LinkParaGithub = styled.a``

export const ImagemL = styled.img`
    width: 35rem;
    height: auto;
    border-radius: 9px;
    transition: 0.2s ease;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 14px 2px;
        width: 35.03rem;
    }
    

`
export const ImagemG = styled.img`
    width: 42rem;
    height: auto;
    border-radius: 9px;
    transition: 0.2s ease;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 14px 2px;
        width: 42.03rem;
    }
    

`