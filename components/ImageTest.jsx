import Image from "next/image";

const ImageTest = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Image Test</h2>

      {/* Test with Next.js Image component */}
      <div className="mb-4">
        <h3>Next.js Image Component:</h3>
        <Image
          src="/home_background.jpg"
          alt="Home Background"
          width={300}
          height={200}
          className="border"
        />
      </div>

      {/* Test with regular img tag */}
      <div className="mb-4">
        <h3>Regular img tag:</h3>
        <img
          src="/home_background.jpg"
          alt="Home Background"
          width={300}
          height={200}
          className="border"
        />
      </div>

      {/* Test with CSS background */}
      <div className="mb-4">
        <h3>CSS Background:</h3>
        <div
          className="w-72 h-48 border"
          style={{
            backgroundImage: "url(/home_background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageTest;
