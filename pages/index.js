export const getStaticProps = ({locale}) => {
    return {
        props: {
            locale
        }
    }
}

function HomePage ({locale}) {    
    return <h1>This is {locale} HomePage</h1>
}

export default HomePage