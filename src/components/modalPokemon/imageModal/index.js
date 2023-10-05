import Image from "next/image";

export function ImageModal({iconType, imagePoke}) {
  return (
    <>
      <div className="icon">
        <Image 
        src={iconType}
        alt=""
        />
      </div>
      <div className="image">
        <Image 
        src={imagePoke}
        alt=""
        />
      </div>
    </>
  )
}