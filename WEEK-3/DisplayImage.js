import logo from"./assets/logo.png"

function DisplayImage() {
  return (
    <div className="DisplayImage">
      <h1>Task: Add an image below</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default DisplayImage;
