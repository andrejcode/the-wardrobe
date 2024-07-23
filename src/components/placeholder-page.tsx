interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="mb-2 text-left text-xl font-bold">{title}</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero
          justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit
          amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed
          faucibus turpis in eu mi bibendum. Consectetur libero id faucius nisl.
          Quisque id diam vel quam elementum. Eros donec ac odio tempor orci
          dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras fermentum odio.
        </p>
      </div>
    </section>
  );
}
