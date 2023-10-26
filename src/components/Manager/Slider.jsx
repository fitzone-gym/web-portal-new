import "../../styles/Manager/slider.css";
export const Slider = (props) => {
  const selectedValue = props.selectedValue;
  const handleSelect = (e) => {
    const button = e.target;
    const sliderContainer = document.querySelector(".slider-container");
    // Select all elements with the "selected" class inside the container
    const selectedElements = sliderContainer.querySelectorAll(".selected");
    // Remove the "selected" class from each selected element
    selectedElements.forEach((element) => {
      element.classList.remove("selected");
    });
    // Add "selected" class to the selected element
    button.classList.add("selected");
    // intiate the change of the value in the parent element
    props.changeValue(button.innerText);
  };
  const data = props?.types || [];
  return (
    <div className={props.className}>
      <div className="slider-container">
        {data.map((i, index) => {
          if (index === selectedValue) {
            return (
              <div onClick={handleSelect} className="selected" key={index}>
                {i}
              </div>
            );
          } else {
            return <div onClick={handleSelect}>{i}</div>;
          }
        })}
      </div>
    </div>
  );
};
