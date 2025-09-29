const Soundboard = () => {
  
  return (
    <div className="soundboard-container">
      <iframe
        src="https://js-soundboard.vercel.app/"
        width="100%"
        height="730"
        title="Soundboard"
        allowFullScreen
        loading="lazy"
        className="rounded-lg"
      />
    </div>
  );
};

export default Soundboard;
