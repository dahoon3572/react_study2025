import React, { useRef, useState } from 'react';

const ImgChangeExam = () => {
  const [imgSrc, setImgSrc] = useState("/src/assets/dog.png");
  const name = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.current.value === "고양이") {
      setImgSrc("/src/assets/cat.jpg");
    } else if (name.current.value === "강아지"||name.current.value === "개") {
      setImgSrc("/src/assets/dog.png");
    } else if (name.current.value === "정승우"||name.current.value === "섹시") {
      setImgSrc("/src/assets/정성우.jpg");
    } else {
      alert("사진이 없습니다!");
    }
  };

  return (
    <div>
      <h1>희망하는 사진이 있으신가?</h1>
      <form>
        <p><input type="text" ref={name}/></p>
        <p><input type="submit" value='변경!' onClick={handleSubmit} /></p>
      </form>
      <img src={imgSrc} alt="동물 이미지" width={300} />
    </div>
  );
};

export default ImgChangeExam;
