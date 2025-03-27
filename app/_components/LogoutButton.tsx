"use client";

import { logout } from "../_lib/actions";

const LogoutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className="bg-white text-blue-950 font-bold py-2 px-3 rounded-md cursor-pointer  "
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
