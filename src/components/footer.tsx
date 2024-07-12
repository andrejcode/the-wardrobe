export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr className="border-lightGray" />
      <p className="my-4 text-center text-sm md:text-lg">
        <a href="https://andrejmilanovic.com">
          Copyright &copy; {year} Andrej Milanović
        </a>
      </p>
    </footer>
  );
}
