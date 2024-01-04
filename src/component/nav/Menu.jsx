import React from "react";

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
      <ul className="d-flex list-unstyled mx-auto justify-content-center dropdown z-3 ">
        {menuItems.map((item) => (
          <li key={item.id} className="w-100">
            <a
              href={`/#${item.title}`}
              title={item.title}
              className="text-color p-3 "
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
