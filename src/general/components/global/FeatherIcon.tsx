import feather from "feather-icons";

interface Props {
  iconName: string;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

function FeatherIcon(props: Props): JSX.Element {
  const { iconName, className, color, strokeWidth, ...other } = props;

  if (!feather.icons[iconName]) return <span></span>;

  const svg = feather.icons[iconName].toSvg({
    class: className || "icon",
    "stroke-width": strokeWidth || 2,
    color: color || "#ffffff",
  });

  return (
    <span
      className="iconWrapper"
      {...other}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default FeatherIcon;
