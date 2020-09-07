import React from "react";
import { useFieldArray } from "react-hook-form";

let renderCount = 0;

export default function Fields({ control, register,fieldName }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name:fieldName
  });

  renderCount++;

  return (
    <>
      <ul className="no">
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`${fieldName}[${index}].name`}
                ref={register()}
                defaultValue=""
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => {
          append({ name: "" });
        }}
      >
        Add
      </button>

      {/* <span className="counter">Render Count: {renderCount}</span> */}
    </>
  );
}
