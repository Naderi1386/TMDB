interface MoviePageTitlePropsType{
    title:string
}
const MoviePageTitle = ({ title }: MoviePageTitlePropsType) => {
    const titlePage=title.replaceAll("_"," ")
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize my-8">{titlePage} Movies</h1>
    </div>
  );
};

export default MoviePageTitle