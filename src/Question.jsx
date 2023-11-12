import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data'
const Question = ({title, info}) => {
  const [showInfo, SetShowInfo] = useState(false);
  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=> SetShowInfo(!showInfo)}>
        { showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
      </button>
    </header>
    <p>{showInfo && info}</p>
  </article>;
};

export default Question;
