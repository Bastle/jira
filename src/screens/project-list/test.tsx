import React, { useEffect, useState } from "react";
import { useMount } from "utils";

const test = () => {
  let num = 0;
  const effect = () => {
    num += 1;
    const message = `现在的num值： ${num}`;
    return function unmount() {
      console.log(message);
    };
  };
  return effect;
};

const add = test();

const unmount = add();
const unmount1 = add();
const unmount2 = add();
add();
unmount();
unmount1();
unmount2();

// react hook 与 闭包
export const Test = () => {
  const [num, setNum] = useState(0);
  const add = () => setNum(num + 1);

  useMount(() => {
    setInterval(() => {
      // console.log("num in setInterval", num);
    }, 1000);
  });
  useEffect(() => {
    return () => {
      console.log(num);
    };
  }, []);
  return (
    <div>
      <button onClick={add}>add</button>
      <p>number: {num}</p>
    </div>
  );
};
