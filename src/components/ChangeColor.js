import React, { useState } from 'react'

const ChangeColor = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(0)
  const [lightness, setLightness] = useState(0)
  const [alpha, setAlpha] = useState(Math.floor(Math.random() * 100))
  return (
    <main>
      <section className="color-picker-display">
        <section
          className="background-box"
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
          }}
        >
          <h2
            className="hsl-info"
            style={{
              color: `hsl(${hue}, ${saturation}, ${lightness}, ${alpha})`
            }}
          >
            {`hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})`}
          </h2>
        </section>
      </section>
      <section className="slider"></section>
      <input
        type="range"
        max="360"
        defaultValue={hue}
        onChange={e => {
          setHue(e.target.value)
        }}
      />
      <section className="slider-type">Hue</section>
      <input
        type="range"
        defaultValue={saturation}
        onChange={e => {
          setSaturation(e.target.value)
        }}
      />
      <section className="slider-type">Saturation</section>
      <input
        type="range"
        defaultValue={lightness}
        onChange={e => {
          setLightness(e.target.value)
        }}
      />
      <section className="slider-type">Lightness</section>
      <input
        type="range"
        defaultValue={alpha}
        onChange={e => {
          setAlpha(e.target.value)
        }}
      />
      <section className="slider-type">Alpha</section>
      <button
        onClick={() => {
          setHue(Math.floor(Math.random() * 360))
          setSaturation(Math.floor(Math.random() * 100))
          setLightness(Math.floor(Math.random() * 100))
          setAlpha(Math.floor(Math.random() * 100))
        }}
      >
        Random Color
      </button>
    </main>
  )
}

export default ChangeColor
