const RoundedImage = ({ classes, imgsrc, alt = '' }) => {
  return (
    <div className={`rounded-full overflow-hidden ${classes}`}>
      <img src={`/${imgsrc}`} alt={alt} />
    </div>
  );
};

export default RoundedImage;
