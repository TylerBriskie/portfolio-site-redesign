import React from 'react';

function SkillMeter({ color, percent}) {
  const onLoad = () => {
    console.log(`loaded ${color} skill meter at ${percent}%`)
  };

  return (
    <div className="skill-meter">
      <p style={{color: `${color}`}}>{percent}</p>
    </div>
  );

};

export default SkillMeter;
