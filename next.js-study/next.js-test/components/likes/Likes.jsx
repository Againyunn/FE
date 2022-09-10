import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// redux connect
import { useSelector, useDispatch } from "react-redux";
import { plusFuntion } from "@/store/reduxSlicer/like";

function Likes(props) {
  const [thisNumber, setThisNumber] = useState(0);

  const likeNumberData = useSelector((state) => {
    return state.like.likeNumber;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setThisNumber(likeNumberData);
  }, [likeNumberData]);

  const addNumber = () => {
    dispatch(plusFuntion());
  };

  return (
    <Likeswrap>
      <span>{thisNumber}</span>
      <div>
        <Image
          className="finger-img"
          src="/assets/images/icons/like.png"
          alt="like"
          onClick={addNumber}
          height="50px"
          width="50px"
        />
      </div>
    </Likeswrap>
  );
}
export default Likes;

/** styled-component*/
const Likeswrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  text-align: center;

  span {
    font-size: 20px;
    font-weight: bold;
    color: #0078ff;
  }

  .finger-img {
    &:hover {
      filter: brightness(80%);
    }
  }
`;
