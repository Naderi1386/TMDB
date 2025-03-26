import LoginButton from "../_components/LoginButton";

const page = () => {
  return (
    <div className="text-center py-12 ">
      <h1 className="text-2xl text-blue-950 font-bold mb-8 ">
        Log in into your Github account
      </h1>
      <LoginButton />
    </div>
  );
};

export default page;
