import React from "react";
import { useEffect } from "react";
import "./styles/CommentListBlock.style.css";
import { ReactComponent as ChartArrowIcon } from "../../assets/icons/ChartArrowRise.svg";
import mobious from "../../assets/mobious.png";
import { ReactComponent as Clapperboard } from "../../assets/icons/Clapperboard.svg";
import { ReactComponent as Interest } from "../../assets/icons/Interest.svg";
import { ReactComponent as AddFolder } from "../../assets/icons/AddFolder.svg";
import { ReactComponent as LightningBolt } from "../../assets/icons/LightningBolt.svg";
import { ReactComponent as Male } from "../../assets/icons/Male.svg";
import { ReactComponent as Play } from "../../assets/icons/Play.svg";
import { ReactComponent as ChartArrowRiseRed } from "../../assets/icons/ChartArrowRiseRed.svg";

import avatar from "../../assets/avatar.png";
const CommentListBlock = ({ type }) => {
  const [blockClass, setBlockClass] = React.useState("block");
  useEffect(() => {
    if (type === "score") {
      setBlockClass("block block--score");
    } else if (type === "favorite") {
      setBlockClass("block block--favorite");
    } else if (type === "category") {
      setBlockClass("block block--category");
    } else if (type === "recent") {
      setBlockClass("block block--recent");
    }
  }, [type]);
  const interests = [
    { name: "Chính Kịch", background: "#742D4B" },
    { name: "Lãng Mạn", background: "#387FDA" },
    { name: "Hài", background: "#7356B1" },
    { name: "Kỳ Ảo", background: "#91AB47" },
    { name: "Tình Cảm", background: "#A98762" },
  ];
  const comments = [
    {
      avatar: avatar,
      username: "Lý Nhã Kỳ",
      gender: "male",
      comment: "xem lại nhớ vụ ecopark ở văn giang ngày xưa quá",
      reference: "Tôi nằm mộng giữa ban ngày",
    },
    {
      avatar: avatar,
      username: "Lý Kỳ Kỳ",
      gender: "male",
      comment: "xem lại nhớ vụ ecopark ở văn giang ngày xưa quá",
      reference: "Thời Vàng Son",
    },
    {
      avatar: avatar,
      username: "Lý Kỳ Nhung",
      gender: "male",
      comment: "xem lại nhớ vụ ecopark ở văn giang ngày xưa quá",
      reference: "Thời Vàng Son",
    },
    {
      avatar: avatar,
      username: "Lý Nhã Nhã",
      gender: "male",
      comment: "xem lại nhớ vụ ecopark ở văn giang ngày xưa quá",
      reference: "Thời Vàng Son",
    },
  ];

  const renderContent = () => {
    switch (type) {
      case "score":
        return (
          <>
            <div className="block__header">
              <span className="block__title">
                <span>
                  <Clapperboard className="block__title-icon" />
                </span>
                <span>SÔI NỔI NHẤT</span>
              </span>
            </div>
            <ul className="block__list">
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n} className="block__item">
                  <span className="block__number">{`${n}`}. </span>
                  {n % 2 !== 0 ? (
                    <span className="block__sub-icon">
                      <ChartArrowIcon />
                    </span>
                  ) : (
                    <span className="block__sub-icon">
                      <ChartArrowRiseRed />
                    </span>
                  )}
                  <img src={mobious} alt="poster" className="block__thumb" />

                  <span className="block__movie">Ngày không ngủ</span>
                </li>
              ))}
            </ul>
            <button className="block__button">Xem Thêm</button>
          </>
        );
      case "favorite":
        return (
          <>
            <div className="block__header">
              <span className="block__title">
                <span className="block__title-icon">
                  <Interest />
                </span>{" "}
                YÊU THÍCH NHẤT
              </span>
            </div>
            <ul className="block__list">
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n} className="block__item">
                  <span className="block__number">{`${n}`}. </span>
                  {n % 2 === 0 ? (
                    <span className="block__sub-icon">
                      <ChartArrowIcon />
                    </span>
                  ) : (
                    <span className="block__sub-icon">
                      <ChartArrowRiseRed />
                    </span>
                  )}
                  <img src={mobious} alt="poster" className="block__thumb" />

                  <span className="block__movie">Ngày không ngủ</span>
                </li>
              ))}
            </ul>
            <button className="block__button">Xem Thêm</button>
          </>
        );
      case "category":
        return (
          <>
            <div className="block__header">
              <span className="block__title">
                <span className="block__title">
                  <span className="block__title-icon">
                    <AddFolder />
                  </span>{" "}
                  THỂ LOẠI HOT
                </span>
              </span>
            </div>
            <ul className="block__tags">
              {interests.map((item, index) => (
                <li
                  key={index}
                  className="block__item"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <span className="block__number">{`${index + 1}`}. </span>
                  {index % 2 === 0 ? (
                    <span className="block__sub-icon">
                      <ChartArrowIcon />
                    </span>
                  ) : (
                    <span className="block__sub-icon">
                      <ChartArrowRiseRed />
                    </span>
                  )}

                  <span
                    className="block__category"
                    style={{
                      backgroundColor: `${item.background}`,
                      padding: "10px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
            <button className="block__button">Xem Thêm</button>
          </>
        );
      case "recent":
        return (
          <>
            <div className="block__header" style={{ flex: 1 }}>
              <span className="block__title">
                <span className="block__title-icon">
                  <LightningBolt />
                </span>{" "}
                BÌNH LUẬN MỚI
              </span>
            </div>
            <div className="block__comments">
              {comments.map((item, index) => (
                <div key={index} className="block__comment">
                  <img
                    src={item.avatar}
                    alt="avatar"
                    className="block__avatar"
                  />
                  <div className="block__comment-body">
                    <div className="block__comment-content">
                      <div className="block__username">{item.username}</div>
                      <div className="block__text">
                        <span className="block__sub-icon">
                          <Male />
                        </span>
                        {item.comment}
                      </div>
                    </div>
                    <span className="block__meta">
                      <span>
                        <Play />
                      </span>{" "}
                      {item.reference}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={blockClass}>
      {renderContent()}
    </div>
  );
};

export default CommentListBlock;
