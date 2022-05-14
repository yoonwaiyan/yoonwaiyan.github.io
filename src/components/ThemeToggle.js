import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <Toggle
            name="darkMode"
            label="Dark Mode"
            checked={theme === "dark"}
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          />
        </>
      )}
    </ThemeToggler>
  )
}

const Toggle = ({ name, label, checked, onChange }) => (
  <label htmlFor={name} className="flex items-center cursor-pointer">
    <div className="relative">
      <input
        id={name}
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
      <div className="toggle__dot absolute w-6 h-6 bg-gray-700 dark:bg-white rounded-full shadow inset-y-0 left-0"></div>
    </div>
    <div className="ml-2 text-xs text-gray-700 dark:text-gray-50 font-medium">
      {label}
    </div>
  </label>
)
