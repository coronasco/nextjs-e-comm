import { useState } from "react";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newTab) => {
    e.preventDefault();
    setActiveTab(newTab);
  };

  return (
    <div>
      <ul className="flex justify-center mb-10 border-b pb-5">
        {children.map(x => {
          const label = x.props.label;
          return (
            <li
              key={label}
              className={label == activeTab ? "active-btn cat-btn" : "cat-btn"}
            >
              {" "}
              <a href="#" onClick={e => handleClick(e, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {children.map(x => {
        const label = x.props.label;
        if (x.props.label == activeTab) {
          return (
            <div
              key={label}
              className="whitespace-nowrap overflow-x-scroll scrollbar-hide"
            >
              {x.props.children}
            </div>
          );
        }
      })}
    </div>
  );
}

export { Tabs };
