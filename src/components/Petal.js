import React, { useState } from "react";
import { ChromePicker } from "react-color"; // You can also use CompactPicker
import { HexColorPicker } from "react-colorful";
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

// import './style.css'
export default function Petal() {
  // State to store user inputs for the curve control points
  const [controlPoint1, setControlPoint1] = useState({ x: 44, y: 49 });
  const [controlPoint2, setControlPoint2] = useState({ x: 15, y: 70 });
  const [endPoint, setEndPoint] = useState({ x: 20, y: 100 });

  // State for new dynamic properties
  const [fillColor, setFillColor] = useState("#00ffff"); // default color is cyan
  const [strokeColor, setStrokeColor] = useState("#ff0000"); // default color is red
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [transform, setTransform] = useState("translate(50,0)");

  // Update functions for input
  const handleInput = (e, point, setPoint) => {
    const { name, value } = e.target;
    setPoint((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  const handleStyleInput = (e, setStyle) => {
    const { value } = e.target;
    setStyle(value);
  };

  return (
    <div>
      <h1>SVG Shape Generator</h1>

      {/* Control Points Inputs */}
      <div>
        <label>
          Control Point 1 X:
          <input
            type="number"
            name="x"
            value={controlPoint1.x}
            onChange={(e) => handleInput(e, controlPoint1, setControlPoint1)}
          />
        </label>
        <label>
          Control Point 1 Y:
          <input
            type="number"
            name="y"
            value={controlPoint1.y}
            onChange={(e) => handleInput(e, controlPoint1, setControlPoint1)}
          />
        </label>
      </div>

      <div>
        <label>
          Control Point 2 X:
          <input
            type="number"
            name="x"
            value={controlPoint2.x}
            onChange={(e) => handleInput(e, controlPoint2, setControlPoint2)}
          />
        </label>
        <label>
          Control Point 2 Y:
          <input
            type="number"
            name="y"
            value={controlPoint2.y}
            onChange={(e) => handleInput(e, controlPoint2, setControlPoint2)}
          />
        </label>
      </div>

      <div>
        <label>
          End Point X:
          <input
            type="number"
            name="x"
            value={endPoint.x}
            onChange={(e) => handleInput(e, endPoint, setEndPoint)}
          />
        </label>
        <label>
          End Point Y:
          <input
            type="number"
            name="y"
            value={endPoint.y}
            onChange={(e) => handleInput(e, endPoint, setEndPoint)}
          />
        </label>
        <div>
          <label>
            Stroke Width:
            <input
              type="number"
              value={strokeWidth}
              onChange={(e) => handleStyleInput(e, setStrokeWidth)}
            />
          </label>
          <label>
            Transform:
            <input
              type="text"
              value={transform}
              onChange={(e) => handleStyleInput(e, setTransform)}
            />
          </label>
        </div>
      </div>

      {/* Dynamic Style Inputs */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div>
          <label>Fill Color:</label>
          {/* <ChromePicker
            color={fillColor}
            onChange={(color) => setFillColor(color.hex)} // Use the hex value from ChromePicker
          /> */}
                    <Compact
      style={{ marginLeft: 20 }}
      color={fillColor}
      onChange={(color) => {
        setFillColor(color.hex);
      }}
    />
        </div>
        <div>
          <label>Stroke Color:</label>
          <Compact
      style={{ marginLeft: 20 }}
      color={strokeColor}
      onChange={(color) => {
        setStrokeColor(color.hex);
      }}
    />
          {/* <HexColorPicker
            className="your"
            color={strokeColor}
            onChange={setStrokeColor} // Use the hex value from ChromePicker
          /> */}
        </div>
      </div>

      {/* Other dynamic inputs for strokeWidth and transform */}


      <div style={{ marginTop: "20px" }}>
        {/* Render dynamic SVG */}
        <svg width="100" height="100" style={{ overflow: "visible", margin: "5px" }}>
          <path
            d={`
              M0,0 
              C${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${endPoint.x},${endPoint.y}
              L0,85 
              L-${endPoint.x},${endPoint.y} 
              C-${controlPoint2.x},${controlPoint2.y} -${controlPoint1.x},${controlPoint1.y} 0,0
            `}
            fill={fillColor}  // Use hex value from ChromePicker
            stroke={strokeColor}  // Use hex value from ChromePicker
            strokeWidth={strokeWidth}
            transform={transform}
          />
        </svg>
      </div>
    </div>
  );
}
