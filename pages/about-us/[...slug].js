export const getStaticPaths = () => {
    return {
        paths: [
            { params: { slug: ['values'] }, locale: 'en' },
            { params: { slug: ['uk'] }, locale: 'en' },
            { params: { slug: ['values'] }, locale: 'en-IE' },
            { params: { slug: ['ireland'] }, locale: 'en-IE' },
        ],
        fallback: 'blocking'
    }    
}

export const getStaticProps = ({locale, params}) => {
    return {
        props: {
            locale: locale || 'no-locale',
            slug: params.slug || 'no-slug',
            date: new Date().toUTCString()
        },
        revalidate: 30
    }
}

function AboutUsDetail ({locale, slug, date}) {    
    return <>
        <h1>About us - {locale}</h1>
        <h2>{slug}</h2>
        <p>{date}</p>
    </>
}

export default AboutUsDetail