import React from "react";
import Slider1 from '../images/cat1.jpg';
import Slider2 from '../images/cat2.jpg';

const Slider = () => {
  return(
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

        </div>
        <div className="carousel-inner">

            <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="cat" />
            <div className="carousel-caption d-none d-md-block">
                <h5>แมววิเชียรมาศ “เพชรแห่งดวงจันทร์”</h5>
                <p>ลักษณะสีขน : ขนสั้นแน่นสีขาว หรือสีน้ำตาลอ่อน มีแต้มสีครั่ง หรือสีน้ำตาลไหม้ที่บริเวณใบหน้า .</p>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Slider2} className="d-block w-100" alt="cat2" />
            <div className="carousel-caption d-none d-md-block">
                <h5>แมวศุภลักษณ์ “แมวทองแดง”</h5>
                <p>ลักษณะสีขน : ขนสั้น สีน้ำตาลเข้มคล้ายสีสนิม (สีทองแดง) บริเวณส่วนหู ใบหน้า ปลายขา หาง จะมีสีน้ำตาลเข้มกว่าบริเวณลำตัวทั่วๆ ไป</p>
            </div>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
};

export default Slider;
