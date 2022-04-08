export const getStaticProps = ({locale}) => {
    return {
        props: {
            locale
        }
    }
}

function BlogIndex ({locale}) {    
    return <h1>Blog - {locale}</h1>
}

export default BlogIndex