import type { articleInput } from "./input";
import { STATUS } from "../../../Archive/types";

const StatusSetter = ({ input }: { input: articleInput }) => {
  return (
    <select
      className="w-full py-2 ring-1 ring-text hover:cursor-pointer"
      name={input.fieldName}
      id={input.fieldName}
      onSelect={(e) => e.preventDefault()}
    >
      {STATUS.map((status, index) => {
        return (
          <option
            key={index}
            value={status}
            className="bg-offset-white selection:cursor-pointer"
          >
            {status}
          </option>
        );
      })}
    </select>
  );
};

export default StatusSetter;
