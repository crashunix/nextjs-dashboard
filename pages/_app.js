import { useState } from "react";

import "../styles/globals.css";
import "../styles/tailwind.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

function App({ Component, pageProps }) {
  const menu = [
    {
      id: 1,
      label: "Dashboard",
      path: "/",
      icon: "ant-design:home-outlined",
    },
    {
      id: 2,
      label: "Pacientes",
      path: "/pacientes",
      icon: "ion:archive-outline",
    },
    {
      id: 3,
      label: "Testes",
      path: "/testes",
      icon: "ion:archive-outline",
    },
    {
      id: 4,
      label: "Configurações",
      path: "/configuracoes",
      icon: "ion:archive-outline",
    },
  ];
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(1);
  const [profilePop, setProfilePop] = useState(false);
  return (
    <div id="global">
      <div id="background"></div>
      <div className="main flex p-10" id="main">
        <div className="sidebar flex flex-col">
          <div className="h-20 mr-8 flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <Image src="/assets/images/logo.svg" width={180} height={35} />
              </a>
            </Link>
          </div>
          <nav className="main-nav flex flex-col relative">
            {menu.map((item, key) => (
              <Link key={key} href={item.path}>
                <a
                  onClick={() => setActiveMenu(item.id)}
                  className={`main-nav__item flex items-center px-4 font-semibold ${
                    item.path == router.pathname
                      ? "text-gray-900"
                      : "text-white"
                  }`}
                >
                  <span
                    className="iconify mr-2"
                    data-icon={item.icon}
                    data-inline="false"
                  ></span>{" "}
                  {item.label}
                </a>
              </Link>
            ))}
            <motion.div
              className="absolute main-nav__active"
              initial={{
                y: 45 * (activeMenu - 1),
              }}
              animate={{
                y: 45 * (activeMenu - 1),
              }}
            >
              <Image
                src="/assets/images/menuItem.svg"
                width={248}
                height={104}
              />
            </motion.div>
          </nav>
        </div>
        <div className="content flex flex-col flex-1">
          <header className="header bg-white flex justify-between px-6 rounded-t-3xl">
            <div className="header__left flex items-center">
              <input
                className="header__search-input bg-gray-200 p-1 rounded-sm px-3"
                type="text"
                placeholder="Busca..."
              />
            </div>
            <div className="header__right flex items-center h-20 space-x-4">
              <button className="header__button">
                <span
                  className="iconify"
                  data-icon="ic:baseline-settings"
                  data-inline="false"
                ></span>
              </button>
              <button className="header__button relative">
                <span
                  className="iconify"
                  data-icon="fa-solid:bell"
                  data-inline="false"
                ></span>
                <div className="w-2 h-2 bg-red-700 rounded-full absolute right-0 top-0"></div>
              </button>
              <div className="relative">
                <div
                  onClick={() => setProfilePop(true)}
                  className="cursor-pointer header__profile bg-gray-200 rounded-full flex items-center p-2"
                >
                  <span className="profile__name mr-2 text-sm ml-2">
                    Olá, <span className="font-semibold">Felipe</span>
                  </span>
                  <Image
                    src="https://www.talkesport.com/wp-content/uploads/ldlc-happy-hltvorg.jpg"
                    className="object-cover rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <motion.div
                  initial={{
                    opacity: profilePop ? 1 : 0,
                  }}
                  animate={{
                    opacity: profilePop ? 1 : 0,
                  }}
                  className="absolute bg-white w-full h-auto right-0 profile-pop rounded-lg shadow-lg mt-2"
                >
                  <nav className="flex flex-col divide-y divide-gray-200">
                    <a href="#" className="text-sm font-bold py-3 px-4">
                      Minha conta
                    </a>
                    <a href="#" className="text-sm font-bold py-3 px-4">
                      Configurações
                    </a>
                    <a
                      onClick={() => setProfilePop(false)}
                      href="#"
                      className="text-sm font-bold py-3 px-4"
                    >
                      <div className="flex items-center">
                        <span
                          className="iconify mr-1 text-iconRed"
                          data-icon="heroicons-outline:logout"
                          data-inline="false"
                        ></span>{"Sair"}
                      </div>
                    </a>
                  </nav>
                </motion.div>
              </div>
              <button className="header__button">
                <span
                  className="iconify"
                  data-icon="fe:app-menu"
                  data-inline="false"
                ></span>
              </button>
            </div>
          </header>
          <div className="bg-bgContent p-8 overflow-y-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    </div>
  );
}
export default App;
