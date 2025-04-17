interface DetailsOverveiwPropsType{
    overview:string[]
}
const DetailsOverveiw = ({overview}: DetailsOverveiwPropsType) => {

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Overview</h3>
      <p className="text-[15px] font-light">{overview}</p>
    </div>
  );
};

export default DetailsOverveiw