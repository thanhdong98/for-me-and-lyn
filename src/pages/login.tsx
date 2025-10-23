import { useContext, useEffect, useState, type KeyboardEvent } from "react";
import Envelope from "../components/envelope";
import { PIN_CODE } from "../constants/configs";
import { GlobalContext } from "../contexts/global";
import type { GlobalContextType } from "../types/global-context";

const PinLogin = () => {
  const [codes, setCodes] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const { login } = useContext<GlobalContextType>(GlobalContext);

  const onPinChange = (
    { key }: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (key >= "0" && key <= "9") {
      setCodes((prev) => {
        const newCodes = [...prev];
        newCodes[index] = parseInt(key);
        return newCodes;
      });

      const nextPin = (index + 1) % 6;
      (document.getElementById(`pin-${nextPin}`) as HTMLInputElement).select();
    }
  };

  useEffect(() => {
    if (codes.join("") === PIN_CODE) {
      login();
    }
  }, [codes, login]);

  return (
    <Envelope>
      <div className="flex flex-col items-center justify-center gap-10">
        <div>
          <h1 className="glow-title text-white text-xs">❤️ For Lyn</h1>
          <code
            className="text-red-200 text-lg block mb-10 text-center"
            style={{ fontFamily: "Sacramento, sans-serif" }}
          >
            And Dong ❤️
          </code>
        </div>

        <div className="flex justify-between gap-4">
          {codes.map((code, index) => (
            <input
              id={`pin-${index}`}
              key={index}
              min={0}
              max={9}
              type="password"
              value={code}
              className="block w-9.5 h-9.5 text-center rounded-full sm:text-sm
            border-red-500  focus:border-blue-500 focus:ring-red-500 
               bg-pink-300"
              placeholder="⚬"
              onKeyDown={(e) => onPinChange(e, index)}
            />
          ))}
        </div>
      </div>
    </Envelope>
  );
};

export default PinLogin;
