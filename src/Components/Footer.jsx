import React from "react";
import Select from "react-select";
import { themeOptions } from "../Utils/ThemeOptions";
import { useTheme } from "../Context/ThemeContext";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  const { theme, setTheme } = useTheme();
  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };

  // console.log(themeOptions);

  return (
    <div className="footer">
      <div className="footer-left">
        <GitHub fontSize="large" style={{ cursor: "pointer" }} />
        <LinkedIn fontSize="large" style={{ cursor: "pointer" }} />
      </div>
      <div className="footer-right">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{ label: theme.label, value: theme }}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: theme.textColor,
            }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: theme.background,
            }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                backgroundColor: !isFocused
                  ? theme.background
                  : theme.textColor,
                color: !isFocused ? theme.textColor : theme.background,
                cursor: "pointer",
              };
            },
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
