import { useContext, useEffect, useState } from "react";
import { PIN_CODE } from "../constants/configs";
import { GlobalContext } from "../providers/global-provider";
import type { GlobalContextType } from "../types/global-context";
import Envelope from "../components/envelope";

const PinLogin = () => {
  const [codes, setCodes] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const { login } = useContext<GlobalContextType>(GlobalContext);

  const onPinChange = (num: number, index: number) => {
    setCodes((prev) => {
      const newCodes = [...prev];
      newCodes[index] = num;
      return newCodes;
    });
  };

  useEffect(() => {
    if (codes.join("") === PIN_CODE) {
      login();
    }
  }, [codes]);

  return (
    <Envelope>
      <h1 className="glow text-white mb-10 text-xs">Mời Lyn:</h1>
      <div className="flex justify-between">
        {codes.map((code, index) => (
          <input
            key={index}
            type="password"
            value={code}
            className="block w-9.5 h-9.5 text-center 
            border-gray-200 rounded-md sm:text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
             focus:border-blue-500 focus:ring-blue-500 
             disabled:opacity-50 disabled:pointer-events-none
               dark:border-neutral-700 
              dark:text-neutral-400 dark:placeholder-neutral-500
               dark:focus:ring-neutral-600
               bg-white"
            placeholder="⚬"
            onChange={(e) => onPinChange(parseInt(e.target.value), index)}
          />
        ))}
      </div>
    </Envelope>
  );
};

export default PinLogin;
