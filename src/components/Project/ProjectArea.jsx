import React, { useState } from "react";
// import { Link } from "react-router-dom";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperArrows } from "../../lib/hooks/useSwiperArrows";
import config from "../componentsConfig.json"; // JSON is saved here.

// Configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProjectArea = () => {
  const { projectArea } = config;
  const { sliderRef, toNext, toPrev } = useSwiperArrows();

  // Instead of using popupImage, store the entire project item data.
  const [popupData, setPopupData] = useState(null);

  const openPopup = (item) => {
    setPopupData(item);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <section className={projectArea.sectionClass}>
      <div className={projectArea.containerClass}>
        <div className={projectArea.rowClass}>
          {/* Left Column */}
          <div className={projectArea.leftColumn.colClass}>
            <div className={projectArea.leftColumn.contentClass}>
              <div className="section-title white-title mb-30">
                <span className="sub-title">
                  {projectArea.leftColumn.sectionTitle.subTitle}
                </span>
                <h2 className="title">
                  {projectArea.leftColumn.sectionTitle.title}
                </h2>
              </div>
              <p>{projectArea.leftColumn.description}</p>
              <div className="content-bottom">
                {/* <Link
                  to={projectArea.leftColumn.button.link}
                  className={projectArea.leftColumn.button.className}
                >
                  {projectArea.leftColumn.button.text} <span></span>
                </Link> */}
                <div className="project-nav">
                  <button
                    className={projectArea.leftColumn.navButtons.prevClass}
                    onClick={toPrev}
                  ></button>
                  <button
                    className={projectArea.leftColumn.navButtons.nextClass}
                    onClick={toNext}
                  ></button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={projectArea.rightColumn.colClass}>
            <div className="project-item-wrap">
              <div className={projectArea.rightColumn.swiperContainerClass}>
                <Swiper
                  {...projectArea.rightColumn.swiperSettings}
                  onBeforeInit={(swiper) => {
                    sliderRef.current = swiper;
                  }}
                >
                  {projectArea.rightColumn.projectItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="swiper-slide">
                        <div
                          className="project-item"
                          onClick={() => openPopup(item)}
                        >
                          <img
                            src={item.imageSrc}
                            alt={`Project ${index + 1}`}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className={projectArea.shapeWrapClass}>
        {projectArea.shapes.map((shape, index) => (
          <img
            key={index}
            src={shape.src}
            alt={shape.alt}
            className={shape.className}
          />
        ))}
      </div>

      {/* Full-Screen Popup Modal */}
      {popupData && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
              <button className="close-btn" onClick={closePopup}>
                X
              </button>
            </div>
            <div className="popup-body">
              <div className="popup-content">
                {/* Popup Image */}
                <img src={popupData.popupImageSrc} alt="Popup" />

                {/* Dynamic bullet points and hypothesis */}
                {popupData.popupContent && (
                  <div className="popup-text">
                    <ul>
                      <h3>Hypothesis</h3>
                      <p>{popupData.popupContent.hypothesis}</p>
                      {popupData.popupContent.bulletPoints.map(
                        (point, index) => (
                          <li key={index}>{point}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="popup-footer">
              <button className="close-btn" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectArea;
