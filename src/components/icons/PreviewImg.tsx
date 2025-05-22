type Props = React.SVGProps<SVGSVGElement>;

const PreviewImg: React.FC<Props> = (props) => (
  <svg
    width="143"
    height="155"
    viewBox="0 0 143 155"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="71.5" cy="82.6283" r="71.5" fill="#F7F9FC" />
    <rect
      x="50.4505"
      y="19.3052"
      width="70"
      height="98"
      rx="7"
      transform="rotate(2.5 50.4505 19.3052)"
      fill="#E9EBF2"
      stroke="#CDCFD6"
      strokeWidth="2"
    />
    <rect
      x="8.83604"
      y="13.4433"
      width="74"
      height="102"
      rx="9"
      transform="rotate(-7.5 8.83604 13.4433)"
      fill="#FAFAFB"
      stroke="#CDCFD6"
      strokeWidth="2"
    />
    <rect
      x="14.6611"
      y="18.2827"
      width="63.822"
      height="90.3289"
      rx="5"
      transform="rotate(-7.5 14.6611 18.2827)"
      fill="#E9EBF2"
    />
  </svg>
);

export default PreviewImg;
