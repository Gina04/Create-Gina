import Search from "../Buscador/Search";
import imagenes from "../imagenes/imagenes";
import { useSnipcart } from "use-snipcart";

import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function HeaderMain() {
  const { cart = {} } = useSnipcart();
  console.log("CArt", cart);
  return (
    <div className="flex justify-center items-center  space-x-40">
      <div className="flex lg:ml-6">
        <Search />
      </div>

      <div className="ml-4 flex lg:ml-0">
        <Link to="/">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src={imagenes.logo} alt="logo" />
        </Link>
      </div>

      <div className="ml-auto flex items-center">
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
          <Link
            to="/IniciarSesion"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Sign in
          </Link>
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <Link
            to="/RegistroUsuario"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Create account
          </Link>
        </div>

        <div className="hidden lg:ml-8 lg:flex">
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-gray-800"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
              alt=""
              className="block h-auto w-5 flex-shrink-0"
            />
            <span className="ml-3 block text-sm font-medium">ARG</span>
            <span className="sr-only">, change currency</span>
          </a>
        </div>

        {/* Cart */}
        <div className="ml-4 flow-root lg:ml-6">
          <a href="#" className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 snipcart-checkout"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              ${cart.subtotal?.toFixed(2)}
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
