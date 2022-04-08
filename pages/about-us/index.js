export const getStaticProps = ({locale}) => {
    return {
        props: {
            locale
        },
        revalidate: 100
    }
}

function AboutUs ({locale}) {    
    return <h1>About us - {locale}</h1>
}

export default AboutUs