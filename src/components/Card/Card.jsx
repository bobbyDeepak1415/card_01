const Card = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  padding = "normal",
}) => {
  const baseStyles = "rounded-lg shadow-md transition-all duration-300";

  const variants = {
    default: "bg-white border border-gray-200",
    primary: "bg-blue-50 border border-blue-200 ",
    success: "bg-green-50 border border-blue-200",
    dark: "bg-gray-800 text-white border-gray-700",
  };

  return <div></div>;
};
export default Card;

// <Card hover={false}  className="my-custom-class" variant="primary" padding="small"></Card>
