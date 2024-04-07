import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { id: 1, title: "تطوير الذات" },
    { id: 2, title: "التصميم و الأعلام" },
    { id: 3, title: "التكنولوجيا" },
    { id: 4, title: "تعلم اللغات" },
    { id: 5, title: "التسويق وفن البيع" },
  ];

  return (
    <>
      <ul className="d-flex gap-4 text-nowrap flex-nowrap overflow-x-auto py-3 px-3  " >
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={`path/${item.title}`}
              title={item.title}
              className="text-color"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
