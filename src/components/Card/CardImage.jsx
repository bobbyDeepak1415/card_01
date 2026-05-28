
const CardImage = ({ src, alt = "Card Image"}) => {
  return (
    <div className="w-full h-48 overflow-hidden rounded-t-lg">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover"    />
      ) : (
        <div className="w-full h-full bg-linear-to-r from-gray-200 to-gray-400 flex items-center justify-center">
          <span className="text-gray-500 text-sm">No Image is available</span>
        </div>
      )}
    </div>
  );
};

export default CardImage;
