import React, { useRef, useState } from "react";
import Input from "./Input";

function InputCode({ length, loading, onComplete }) {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);

  const processInput = (e, slot) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newCode = [...code];
    newCode[slot] = value;
    setCode(newCode);

    if (slot < length - 1) {
      inputs.current[slot + 1]?.focus();
    }

    if (newCode.every((v) => v !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const handleKeyUp = (e, slot) => {
    if (e.key === "Backspace" && !code[slot] && slot > 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {code.map((num, idx) => (
        <Input
          key={idx}
          ref={(el) => (inputs.current[idx] = el)}
          value={num}
          maxLength={1}
          type="text"
          inputMode="numeric"
          readOnly={loading}
          className="w-10 h-12 text-center text-lg border rounded-lg"
          autoFocus={idx === 0}
          onChange={(e) => processInput(e, idx)}
          onKeyUp={(e) => handleKeyUp(e, idx)}
        />
      ))}
    </div>
  );
}

export default InputCode;
