import { IconPlus } from "@tabler/icons-react";
import { type AppType } from "next/dist/shared/lib/utils";
import { useContext, useState } from "react";
import { io } from "socket.io-client";
import { AppContext } from "~/context";

import "~/styles/globals.css";

export const socket = io("http://localhost:4000");

const MyApp: AppType = ({ Component, pageProps }) => {
  const ctx = useContext(AppContext);

  const [showMasterLogin, setShowMasterLogin] = useState<boolean>(false);
  const [masterKey, setMasterKey] = useState<string>("");

  const handleMasterLogin = () => {
    if (masterKey === "y55") {
      alert("ok");
      ctx.data.permission = "admin";
    } else {
      alert("CÓDIGO ERRADO.");
    }

    setShowMasterLogin(false);
  };

  const handleDayPass = () => {
    socket.emit("nextDay");
  };
  return (
    <AppContext.Provider value={ctx}>
      <div className="flex h-screen flex-col overflow-hidden" id="app_main">
        {showMasterLogin && (
          <div className="fixed inset-0 z-[999] flex bg-black/50 backdrop-blur-[2px]">
            <div className="relative flex h-full w-full grow items-center justify-center">
              <div
                className="absolute right-[25px] top-[15px] rounded-md bg-white p-2 font-[sign45] opacity-50 shadow-xl"
                onClick={() => setShowMasterLogin(true)}
              >
                master
              </div>
              <div className="flex flex-col items-center justify-center rounded-md bg-indigo-500 p-6">
                <div className="mb-6 text-xl font-semibold text-white">
                  Digite o código de mestre
                </div>
                <input
                  type="password"
                  className="rounded-md px-3 py-1"
                  onChange={(e) => setMasterKey(e.currentTarget.value)}
                  value={masterKey}
                />
                <button
                  className="mt-12 rounded-md bg-indigo-900 px-5 py-1 font-[sign45] text-4xl font-bold text-white"
                  onClick={handleMasterLogin}
                >
                  {" "}
                  confirmar{" "}
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="sticky top-0 flex w-full flex-row items-center bg-indigo-600 px-4 py-1">
          <div className="font-[sign45] text-3xl text-white">DIA: 1</div>
          {ctx.data.permission === "admin" && (
            <div
              className="mx-6 rounded-md bg-emerald-500 p-1 text-white"
              onClick={() => handleDayPass()}
            >
              <IconPlus />
            </div>
          )}
          <div
            className="ml-auto rounded-md  bg-black/50 p-2 font-[sign45] text-white shadow-xl"
            onClick={() => setShowMasterLogin(true)}
          >
            master
          </div>
        </div>
        <Component {...pageProps} />;
      </div>
    </AppContext.Provider>
  );
};

export default MyApp;
