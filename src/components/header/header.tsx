import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";

function Header() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const location = useLocation();
  const navBar = [
    { navName: "Home", navLink: "/" },
    { navName: "Projects", navLink: "/projecs" },
  ] as const;
  const routeIndex = navBar.findIndex(
    (item) => item.navLink === location.pathname,
  );

  useEffect(() => {
    setActiveItem(routeIndex === -1 ? null : routeIndex);
  }, [routeIndex]);

  return (
    <>
      <div className="mb-6 flex h-11 w-full justify-end md:px-[14%] xl:px-[27%]">
        <nav className="flex items-center rounded-3xl border border-gray-950/30 bg-zinc-100/30 shadow-2xs">
          <ul className="flex">
            {navBar.map((item, index) => (
              <li
                key={index}
                className="relative rounded-3xl p-2 px-4"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() =>
                  setActiveItem(routeIndex === -1 ? null : routeIndex)
                }
              >
                {activeItem === index && (
                  <motion.span
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-3xl bg-gray-400"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}
                <NavLink
                  to={item.navLink}
                  className={({ isActive }) =>
                    cn("relative z-10", isActive && "font-semibold")
                  }
                >
                  {item.navName}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
