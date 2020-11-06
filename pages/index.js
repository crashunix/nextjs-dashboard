import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [geralInfo, setGeralInfo] = useState([
    {
      id: 1,
      percent: 30,
      value: 26,
      label: "Pacientes ativos",
      icon: {
        name: "bi:person",
        color: "blue",
        check: false,
        cancel: false,
      },
    },
    {
      id: 2,
      percent: -10,
      value: 306,
      label: "Testes realizados",
      icon: {
        name: "bx:bx-test-tube",
        color: "blue",
        check: false,
        cancel: false,
      },
    },
    {
      id: 3,
      percent: 30,
      value: 139,
      label: "Testes concluídos",
      icon: {
        name: "bx:bx-test-tube",
        color: "green",
        check: true,
        cancel: false,
      },
    },
    {
      id: 4,
      percent: -3,
      value: 11,
      label: "Testes cancelados",
      icon: {
        name: "bx:bx-test-tube",
        color: "red",
        check: false,
        cancel: true,
      },
    },
  ]);
  const [historyCards, setHistoryCards] = useState([
    {
      id: 1,
      icon: {
        name: "uil:brain",
        color: "blue",
      },
      paciente: "Renata Augusto Ferreira",
      teste: "TDAH CAB ADHD",
      data: "20/10/2023",
    },
    {
      id: 2,
      icon: {
        name: "uil:cell",
        color: "red",
      },
      paciente: "Renata Augusto Ferreira",
      teste: "Autismo",
      data: "20/09/2023",
    },
    {
      id: 3,
      icon: {
        name: "uil:brain",
        color: "blue",
      },
      paciente: "Renata Augusto Ferreira",
      teste: "TDAH CAB ADHD",
      data: "20/09/2023",
    },
    {
      id: 4,
      icon: {
        name: "uil:cell",
        color: "red",
      },
      paciente: "Renata Augusto Ferreira",
      teste: "Autismo",
      data: "20/09/2023",
    },
  ]);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="assets/favicon.ico" />
      </Head>
      <main>
        <span className="font-bold text-lg">Informações Gerais</span>
        <div className="grid grid-cols-4 gap-2 mt-6 mb-8  ">
          {geralInfo.map((item, key) => (
            <div key={key} className="relative h-32">
              <div className="bg-white absolute w-4/5 h-full mt-1 mr-3 right-0 rounded-sm"></div>
              <div className="bg-white shadow-sm rounded-sm flex flex-col p-4 absolute w-full h-full">
                <div className="flex justify-between items-center">
                  <div className="relative w-6 h-6">
                    {item.icon.check || item.icon.cancel ? (
                      <span
                        className={`iconify absolute top-0  
                        ${item.icon.check ? "w-4 h-4" : "w-3 h-3"}
                        ${
                          item.icon.color == "blue"
                            ? "text-iconBlue"
                            : item.icon.color == "green"
                            ? "text-iconGreen"
                            : "text-iconRed"
                        } text-iconBlue`}
                        data-icon={item.icon.check ? "bi:check" : "bi:x"}
                        data-inline="false"
                      ></span>
                    ) : (
                      ""
                    )}

                    <span
                      className={`iconify absolute top-0 w-6 h-6 
                      ${item.icon.check ? "mt-1 ml-1" : ""}
                      ${
                        item.icon.color == "blue"
                          ? "text-iconBlue"
                          : item.icon.color == "green"
                          ? "text-iconGreen"
                          : "text-iconRed"
                      } text-iconBlue`}
                      data-icon={item.icon.name}
                      data-inline="false"
                    ></span>
                  </div>
                  <a
                    href="#"
                    className={`py-1 px-3 rounded-full ${
                      item.percent > 0 ? "bg-badgeGreen" : "bg-badgeRed"
                    } font-bold text-white text-xs`}
                  >
                    {item.percent > 0 ? "+" : ""}
                    {item.percent}%
                  </a>
                </div>
                <span className="font-bold text-xl mt-3">{item.value}</span>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <span className="font-bold mr-4 text-lg">
            Histórico de Atendimentos
          </span>
          <Link href="/">
            <a className="text-xs text-white rounded-full py-2 px-4 bg-gradient-to-r from-buttonBlueL to-buttonBlueD">
              VER TODOS
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-6 mb-8">
          <div className="p-4 bg-white col-span-3 grid grid-cols-4 gap-2">
            {historyCards.map((item, key) => (
              <div key={key} className="shadow-sm rounded-md">
                <div className="w-full h-24 bg-historyCard flex items-center justify-center">
                  <span
                    className={`iconify w-12 h-12 ${
                      item.icon.color == "blue"
                        ? "text-iconBlue"
                        : "text-iconRed"
                    }`}
                    data-icon={item.icon.name}
                    data-inline="false"
                  ></span>
                </div>
                <div className="p-2">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.paciente}
                  </p>
                  <span className="text-xs text-gray-600">TESTE REALIZADO</span>
                  <p className="text-sm text-gray-900">{item.teste}</p>
                  <span className="text-xs text-gray-600">REALIZADO EM:</span>
                  <p className="text-sm text-gray-900">{item.data}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white">
            <div className="w-full h-32 flex items-center justify-center">
              <span
                className={`iconify w-20 h-20 text-iconRed`}
                data-icon="uil:cell"
                data-inline="false"
              ></span>
            </div>
            <div className="p-2">
              <p className="text-md font-semibold text-gray-900">Autismo</p>
              <span className="text-xs text-gray-600 my-4">
                LICENÇAS DISPONÍVEIS
              </span>
              <div className="flex items-center">
                <span className="text-2xl font-semibold mr-4 text-gray-900">
                  13
                </span>
                <Link href="/">
                  <a className="text-xs text-white rounded-full py-2 px-4 bg-gradient-to-r from-buttonBlueL to-buttonBlueD">
                    COMPRAR MAIS
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
