// Renders a responsive full page

interface FullPageProps {
  children: React.ReactNode;
}

export const FullPage = (props: FullPageProps) => (
  <div
    style={{
      height: "100vh",
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
  >
    {props.children}
  </div>
);
