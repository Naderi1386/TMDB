
interface ParamsType{
    tvId:string
}
interface PagePropsType{
    params:Promise<ParamsType>
}

const page =async (props:PagePropsType) => {
    const tvId=await (await props.params).tvId
  return (
    <div>
        <h1 className="text-black">{tvId}</h1>
    </div>
  )
}

export default page