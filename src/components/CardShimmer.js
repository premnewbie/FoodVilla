function CardShimmer() {
  return (
    <div className="block bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Text Placeholder */}
      <div className="p-4">
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
      </div>
    </div>
  );
}

export default CardShimmer;