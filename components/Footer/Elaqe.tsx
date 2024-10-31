interface ElaqeProps {
  className: string;
  elaqe?: string;
}

const Elaqe: React.FC<ElaqeProps> = ({ className, elaqe }) => {
  const emailAddress = "info@Handex.az";
  const emailLink = `mailto:${emailAddress}`;
  return (
    <div className={className}>
      <div className="mb-8">
        <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
          {elaqe}
        </h2>
        <ul>
          <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
            <span className="mr-2 font-bold">Telefon:</span>
            <a
              href="tel:+994704390607"
              className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              +994 70 439 06 07
            </a>
          </li>

          <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
            <span className="mr-2 font-bold">Email:</span>{" "}
            <a
              href={emailLink}
              className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              {emailAddress}
            </a>
          </li>
          <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
            <span className="mr-2 font-bold">Ünvan:</span> Bakı, Süleyman
            Rəhimov
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Elaqe;
