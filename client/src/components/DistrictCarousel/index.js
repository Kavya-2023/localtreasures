import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const districtData = [
  { value: 'anantapur', label: 'Anantapur' },
  { value: 'chittoor', label: 'Chittoor' },
  { value: 'eastGodavari', label: 'East Godavari' },
  { value: 'guntur', label: 'Guntur' },
  { value: 'krishna', label: 'Krishna' },
  { value: 'kurnool', label: 'Kurnool' },
  { value: 'nellore', label: 'SPSR Nellore' },
  { value: 'prakasam', label: 'Prakasam' },
  { value: 'srikakulam', label: 'Srikakulam' },
  { value: 'visakhapatnam', label: 'Visakhapatnam' },
  { value: 'vizianagaram', label: 'Vizianagaram' },
  { value: 'westGodavari', label: 'West Godavari' },
  { value: 'kadapa', label: 'YSR Kadapa' }
];

function DistrictCarousel() {
  const [scrolling, setScrolling] = useState(true);
  const listRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    let animationFrame;
    const handleScroll = () => {
      const list = listRef.current;
      if (scrolling && !hoverRef.current) {
        list.scrollLeft += 3;
        if (list.scrollLeft >= list.scrollWidth - list.clientWidth) {
          list.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(handleScroll);
    };
    handleScroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [scrolling]);

  const handleMouseEnter = () => {
    hoverRef.current = true;
    setScrolling(false);
  };

  const handleMouseLeave = () => {
    hoverRef.current = false;
    setScrolling(true);
  };

  return (
    <>
    <h2 className="text-text text-3xl font-semibold text-center mt-2">Available Districts </h2>
    <div
      className="max-w-full border border-gray-200 rounded-md shadow-md overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={listRef}
    >
      <div className="flex p-4">
        {districtData.map((district, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            <div className="w-44 h-44 border border-gray-300 p-4 rounded-md shadow-md flex justify-center flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">{district.label}</h2>
              <Link to={`/district/${district.value}`}>
                <button className="px-4 py-2 bg-accent text-white rounded-md hover:bg-[#DF4C73CC]">
                View
              </button>
             </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default DistrictCarousel;
