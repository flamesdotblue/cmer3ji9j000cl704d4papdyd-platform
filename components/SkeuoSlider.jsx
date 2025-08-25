import { useRef, useState } from 'react';

export default function SkeuoSlider({ value, onChange, min = 0, max = 100 }) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const percent = ((value - min) / (max - min)) * 100;

  const updateFromClientX = (clientX) => {
    const rect = trackRef.current.getBoundingClientRect();
    const clamped = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const next = Math.round((clamped / rect.width) * (max - min) + min);
    onChange(next);
  };

  const onPointerDown = (e) => {
    setDragging(true);
    updateFromClientX(e.clientX);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    setDragging(false);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  };

  return (
    <div className="w-full">
      <div ref={trackRef} className="relative h-12 skeuo-inset flex items-center px-3 rounded-xl select-none" onPointerDown={onPointerDown}>
        <div className="absolute left-3 right-3 h-2 rounded-full bg-gradient-to-r from-[#d5dcea] to-[#c8d0e2]" />
        <div
          className="absolute left-3 h-2 rounded-full bg-gradient-to-r from-[#b2f5ea] to-[#34d399]"
          style={{ width: `calc(${percent}% - 12px)` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-skeuo bg-gradient-to-br from-white to-[#e9eef7] skeuo-pressable"
          style={{ left: `calc(${percent}% + 3px)` }}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>
    </div>
  );
}
