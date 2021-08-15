import Article from './Article';

export default function ArticleList({ posts }) {
    const articleArr = posts.map((post) => {
        return (
            <Article 
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
            />
        );
    });
       return <main>
            {/* an array of Article components (one component for each post passed down as a prop to ArticleList */}
            {articleArr}
        </main>
}