export const Home = ({ about, isLoading }) => {
  return isLoading ? (
    <p className="pt-5">Page is Loading...</p>
  ) : (
    <section className="mb-5 main">
      <img
        src={require("../avatar/avatar-home.png")}
        alt="Hi Avatar"
        className="pt-5 img-fluid avatar"
      />
      <section className="d-flex justify-content-center">
        <p
          className="pt-5 px-sm-5 mx-sm-5 home-description px-5"
          style={{ whiteSpace: "pre-line" }}
        >
          {about.home}
        </p>
      </section>
    </section>
  );
};
