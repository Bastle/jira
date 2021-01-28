import { useMount, useArray } from "utils";

interface P {
  name: string;
  age: number;
}

export const TsReactTest = () => {
  const persons: P[] = [
    { name: "jack", age: 22 },
    { name: "rose", age: 21 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  useMount(() => {});

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 23 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map(({ name, age }, index) => (
        <>
          <p>{index}</p>
          <p>{name}</p>
          <p>{age}</p>
        </>
      ))}
    </div>
  );
};
