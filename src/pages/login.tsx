import { useContext, useEffect, useState } from "react";
import Envelope from "../components/envelope";
import { PIN_CODE } from "../constants/configs";
import { GlobalContext } from "../contexts/global";
import type { GlobalContextType } from "../types/global-context";

const PinLogin = () => {
  const [codes, setCodes] = useState<string[]>(["", "", "", "", "", ""]);
  const { login } = useContext<GlobalContextType>(GlobalContext);

  const onPinChange = (key: string, index: number) => {
    if (key >= "0" && key <= "9") {
      setCodes((prev) => {
        const newCodes = [...prev];
        newCodes[index] = key;
        return newCodes;
      });

      const nextPin = (index + 1) % 6;
      (document.getElementById(`pin-${nextPin}`) as HTMLInputElement).select();
    }

    if (key === "") {
      const nextPin = (index - 1) % 6;
      console.log(nextPin);

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
      <div
        className="flex flex-col items-center justify-center gap-10"
        tabIndex={-1}
      >
        <div>
          <h1 className="glow-title text-white text-xs">❤️ For Lyn</h1>
          <code
            className="text-red-200 text-lg block mb-10 text-center"
            style={{ fontFamily: "Sacramento, sans-serif" }}
          >
            And Dong ❤️
          </code>
        </div>

        <div className="flex justify-between gap-2">
          {codes.map((_, index) => (
            <input
              tabIndex={index + 1}
              id={`pin-${index}`}
              key={index}
              min={0}
              max={9}
              type="password"
              value={codes[index]}
              className="block w-9.5 h-9.5 text-center rounded-full sm:text-sm
            border-red-500  focus:border-blue-500 focus:ring-red-500 
               bg-pink-400"
              placeholder="⚬"
              onInput={(e) => onPinChange(e.currentTarget.value, index)}
            />
          ))}
        </div>
      </div>
    </Envelope>
  );
};

export default PinLogin;
