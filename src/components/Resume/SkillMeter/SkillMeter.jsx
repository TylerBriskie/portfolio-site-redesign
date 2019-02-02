import React from 'react';

function SkillMeter({ color, percent}) {
  //todo: make this animate?

  return (
    <div className={`skill-meter-${color}`}>{percent}</div>
  );

};

export default SkillMeter;
