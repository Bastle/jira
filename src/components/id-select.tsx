import { FC } from "react";
import { Select } from "antd";

type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value: string | number | undefined | null;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}
/**
 * value 可以传入多种类型的值
 * onChange 只会回调 number | undefined 类型
 * 当 isNaN(Number(value)) === true 时代表选择默认类型
 * 当选择默认类型时 onChange 会回调 undefined
 * @param props
 * @returns
 */
export const IdSelect: FC<IdSelectProps> = ({
  value,
  onChange,
  defaultOptionName,
  options,
  ...restProps
}) => {
  return (
    <Select
      {...restProps}
      value={toNumber(value)}
      onChange={(value) => {
        onChange(toNumber(value) || undefined);
      }}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map(({ name, id }) => (
        <Select.Option key={id} value={id}>
          {" "}
          {name}
        </Select.Option>
      ))}
    </Select>
  );
};

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
