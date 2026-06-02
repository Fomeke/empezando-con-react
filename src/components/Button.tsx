import type { ReactNode } from "react";

type props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: props) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secundary" : "primary"}`}
    >
      {isLoading ? "Cargando.." : children}
    </button>
  );
}

export default Button;
