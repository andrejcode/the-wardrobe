import Link from 'next/link';
import Logo from './header/logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr className="border-lightGray" />

      <div className="mx-auto my-6 flex w-1/2 flex-col items-start md:mx-4 md:w-full md:flex-row">
        <Logo />
        <ul className="md:ml-6 md:py-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="/shipping-return-policy">Shipping & Return Policy</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <hr className="border-lightGray" />
      <p className="my-4 text-center text-sm md:text-lg">
        <a href="https://andrejmilanovic.com">
          Copyright &copy; {year} Andrej Milanović
        </a>
      </p>
    </footer>
  );
}
