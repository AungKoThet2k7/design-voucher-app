import { HiChevronLeft, HiChevronRight, HiMiniHome } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumb = ({ currentpageTitle, links }) => {

  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/dashboard"}
              className="inline-flex  hover:text-sky-500 items-center text-sm font-medium text-gray-400"
            >
              <HiMiniHome className="me-2" />
              Home
            </Link>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path}
                  className="inline-flex hover:text-sky-500 items-center text-sm font-medium text-gray-400"
                >
                  <HiChevronRight className="" />
                  {link.title}
                </Link>
              </li>
            ))}

          <li>
            <div className="flex items-center">
              <HiChevronRight className="" />
              <span className="ms-1 select-none text-sm font-medium text-gray-700 ">
                {currentpageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <nav className="flex">
        <button
        onClick={() => navigate(-1)} className="bg-white hover:bg-sky-200 first:rounded-lg last:rounded-lg first:rounded-r-none last:rounded-l-none border border-gray-500 border-r-0 last:border size-8 flex justify-center items-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50">
          <HiChevronLeft />
        </button>
        <button
         onClick={() => navigate(1)} className="bg-white hover:bg-sky-200 first:rounded-lg last:rounded-lg first:rounded-r-none last:rounded-l-none border border-gray-500 border-r-0 last:border size-8 flex justify-center items-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50">
          <HiChevronRight />
        </button>
      </nav>
    </div>
  );
};

export default Breadcrumb;
