import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-500 font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-200 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-yellow-100 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:py-4 md:px-6 text-sm",
    small: base + " px-4 py-2 text-sm md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-200 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 hover:text-stone-800 focus:ring-offset-yellow-100 disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2 md:py-3.5 md:px-6 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
