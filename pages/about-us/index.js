export const getStaticProps = ({locale}) => {
    return {
        props: {
            locale
        }
    }
}

function AboutUs ({locale}) {    
    return <h1>About us - {locale}</h1>
}

export default AboutUs