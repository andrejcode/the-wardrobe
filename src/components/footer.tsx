import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr className="border-lightGray" />
      <ul className="mx-auto my-6 w-1/2 md:mx-4 md:w-full">
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
      <hr className="border-lightGray" />
      <p className="my-4 text-center text-sm md:text-lg">
        <a href="https://andrejmilanovic.com">
          Copyright &copy; {year} Andrej Milanović
        </a>
      </p>
    </footer>
  );
}
