import Head from 'next/head';
import styles from './styles/styles.module.scss';

export default function Posts(){

    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de maio 2022</time>
                        <strong>Lorem ipsum dolor sit amet, consectetur adip</strong>
                        <p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O ponto de usar Lorem Ipsum é que ele tem uma distribuição mais ou menos normal de letras, ao contrário de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como seu texto de modelo padrão, e uma pesquisa por 'lorem ipsum' descobrirá muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes de propósito (humor injetado e afins).</p>
                    </a>
                     <a href="">
                        <time>12 de maio 2022</time>
                        <strong>Lorem ipsum dolor sit amet, consectetur adip</strong>
                        <p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O ponto de usar Lorem Ipsum é que ele tem uma distribuição mais ou menos normal de letras, ao contrário de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como seu texto de modelo padrão, e uma pesquisa por 'lorem ipsum' descobrirá muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes de propósito (humor injetado e afins).</p>
                    </a>
                     <a href="">
                        <time>12 de maio 2022</time>
                        <strong>Lorem ipsum dolor sit amet, consectetur adip</strong>
                        <p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O ponto de usar Lorem Ipsum é que ele tem uma distribuição mais ou menos normal de letras, ao contrário de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como seu texto de modelo padrão, e uma pesquisa por 'lorem ipsum' descobrirá muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes de propósito (humor injetado e afins).</p>
                    </a>
                </div>
            </main>
        </>
    )

}