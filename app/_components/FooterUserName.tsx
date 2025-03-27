import { auth } from "@/auth";

const FooterUserName = async () => {
  const session = await auth();
  if (!session) return null;
  const userName = session.user?.name as string;
  return (
    <div className="bg-white rounded-md text-sky-400 p-3 inline-block font-bold">
      <span>Hi {userName}!</span>
    </div>
  );
};

export default FooterUserName;
