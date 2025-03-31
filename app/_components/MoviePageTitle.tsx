interface MoviePageTitlePropsType {
  title: string;
  topic: "Movies" | "TV Shows";
}
const MoviePageTitle = ({ title,topic }: MoviePageTitlePropsType) => {
    const titlePage=title.replaceAll("_"," ")
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize my-8">
        {titlePage} {topic}
      </h1>
    </div>
  );
};

export default MoviePageTitle