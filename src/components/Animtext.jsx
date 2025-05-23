import { useEffect } from "react";

const Animtext = () => {
  useEffect(() => {
    const text = document.querySelector(".text p");
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 7.8}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);
  return (
    <div className="circle">
      <div className="logo"></div>
      <div className="text">
        <p className="text-[#b7e3fa]">
          Martify Agency - Digital Marketing Agency
        </p>
      </div>
    </div>
  );
};

export default Animtext;
