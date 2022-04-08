export const getStaticPaths = () => {
    return {
        paths: [
            { params: { slug: ['adventures'] }, locale: 'en' },
            { params: { slug: ['triangles'] }, locale: 'en' },
            { params: { slug: ['adventures'] }, locale: 'en-IE' },
            { params: { slug: ['circles'] }, locale: 'en-IE' },
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

function BlogPage ({locale, slug, date}) {    
    return <>
        <h1>Blog page - {locale}</h1>
        <h2>{slug}</h2>
        <p>{date}</p>
    </>
}

export default BlogPage