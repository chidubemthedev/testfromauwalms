const Circle = ({ color }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="10" height="10" rx="5" fill={color} />
    </svg>
  );
};

export default Circle;