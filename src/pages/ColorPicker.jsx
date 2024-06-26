import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const ColorPicker = () => {
  const {currentMode} = useStateContext();
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };
  const CustomColorPicker = ({ id, mode }) => (
    <ColorPickerComponent
      id={id}
      mode={mode}
      modeSwitcher={false}
      inline
      showButtons={false}
      change={change}
    />
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg dark:text-gray-400">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center flex-wrap gap-20">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <CustomColorPicker
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <CustomColorPicker
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
