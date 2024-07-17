import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr className="border-lightGray" />
      <ul className="mx-auto my-6 w-1/2 md:mx-4 md:w-full">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/terms-conditions">
          <li>Terms & Conditions</li>
        </Link>
        <Link href="/shipping-return-policy">
          <li>Shipping & Return Policy</li>
        </Link>
        <Link href="/privacy-policy">
          <li>Privacy Policy</li>
        </Link>
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
