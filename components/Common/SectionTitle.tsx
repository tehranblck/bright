const SectionTitle = ({
  title,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-center text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>

      </div>
    </>
  );
};

export default SectionTitle;
