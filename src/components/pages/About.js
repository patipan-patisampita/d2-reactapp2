import React from "react";
import Footer from "./Footer";
import Service from "./inc/Service";
import Vmc from "./inc/Vmc";

function About() {
    return(
        <div>
         <section className="bg-info">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <h3>About</h3>
                    </div>

                    <div className="col-md-8">
                        <h3>Home / About</h3>
                    </div>

                </div>
            </div>
        </section>

        <section className="section">
                <div className="container">
                    <h3 className="main-heading">Our Company</h3>
                    <div className="underline"></div>
                    <p>
                     เริ่มก่อตั้งเมื่อ ปี 2480 ใช้ชื่อ “โรงเรียนช่างไม้” ในเนื้อที่ของกรมการศาสนา วัดบุรินทร์(วัดร้าง) ประมาณ 6 ไร่เศษ โดยมี นายจิรภัทร สถาการ เป็น ครูใหญ่ ในสมัยนั้น ปีพุทธศักราช 2510 โดยการใช้พื้นที่ของโรงเรียนการช่างสตรี ซึ่งถูกยุบรวมกับ โรงเรียนช่างไม้ ในเนื้อที่ 15 ไร่ 1 งาน 72 ตารางวา อันเป็นที่ ตั้งของวิทยาลัยเทคนิคในปัจจุบัน
                    </p>
                </div>
        </section>

         {/* Our vision, Mission and value */}
         <Vmc />

        {/* Service */}
        <Service />

        {/* Footer */}
        <Footer />

        </div>
    )
}

export default About;