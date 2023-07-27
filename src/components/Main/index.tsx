import {
    SectionApresentacao,
    CampoImg, 
    CampoNetwork, 
    CampoPrincipal, 
    SectionRedes, 
    CampoTexto, 
    CampoTitulo, 
    Container, 
    ImagemL,
    ImagemG,
    ImagemPerfil, 
    Img, 
    LinkParaLinkedin, 
    Paragrafo, 
    Titulo, 
    LinkParaGithub} from "./style.styles"

import imageLinkedin from '../../assets/img/img-linkedin.png'
import imagemPerfil from '../../assets/img/img-perfil.png'
import imageCity from '../../assets/img/apresentacao.png'
import imageGithub from '../../assets/img/github.png'

export const Main = () => {
    return (
        <>
        <Container>
            <CampoPrincipal>
                <SectionApresentacao>
                    <Img src={imageCity}></Img>
                    <CampoImg>
                    <ImagemPerfil src={imagemPerfil}></ImagemPerfil>
                    </CampoImg>
                    <CampoTitulo>
                        <Titulo>Olá Meu Nome é Weslley Washington.</Titulo>
                    </CampoTitulo>
                    <CampoTexto>
                        <Paragrafo>Eu sou Desenvolvedor Front-end Jr. Trabalho com HTML, CSS, JavaScript e React</Paragrafo>
                    </CampoTexto>
                </SectionApresentacao>

                <SectionRedes>
                    <CampoNetwork>
                        <LinkParaLinkedin href="https://www.linkedin.com/in/weslley-washington/" 
                            target='_blank'>
                            <ImagemL src={imageLinkedin}></ImagemL>
                        </LinkParaLinkedin>

                        <LinkParaGithub href="https://github.com/WeslleyWashington" target="_blank" >
                            <ImagemG src={imageGithub}></ImagemG>
                        </LinkParaGithub>
                        
                    </CampoNetwork>
                </SectionRedes>
                

                
            </CampoPrincipal> 
        </Container>
        </>
    )
}