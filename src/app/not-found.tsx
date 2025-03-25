import Link from "next/link";
export default function Custom404() {
  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const notFoundImage = {
    width: "50%",
  };
  return (
    <>
      <section style={container} className="container">
        <img style={notFoundImage} src="/layout/404.svg" alt="404 image" />
        <Link href="/">
          <button className="button button-primary">Back To Home</button>
        </Link>
      </section>
    </>
  );
}
