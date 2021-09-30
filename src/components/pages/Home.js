import React from "react";
import Slider from "../inc/Slider";
import {Link} from 'react-router-dom' 
import Vmc from "./inc/Vmc";
import Service from "./inc/Service";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <Slider />
            <section className="section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">แมวไทย สายพันธุ์ วิเชียรมาศ</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                คำว่าวิเชียรมาศ หมายถึง เพชรแห่งดวงจันทร์ (Moon Diamond) สายพันธุ์วิเชียรมาศเป็นสายพันธุ์แรกที่มีชื่อเสียงโด่งดังในหมู่ชาวต่างชาติ จนตั้งชื่อให้กับ แมวสายพันธุ์นี้ว่า Siamese Cat หรืออีกชื่อหนึ่ง Seal Point หรือที่เรียกกันว่า แมวแต้มสีครั่ง นั่นเอง ลักษณะของแมววิเชียรมาศ คือ จะมีขนสั้นสีน้ำตาลอ่อนหรือสีขาว ที่ใบหน้าจะมีแต้มสีน้ำตาลรวมถึงใบหูทั้งสองข้าง หาง เท้า และอวัยวะเพศด้วย ซึ่งเป็นลักษณะเด่นของแมวสายพันธุ์นี้ หัวไม่แหลมหรือกลมมากไป จมูกสั้น หูตั้ง หน้าผากแบนและใหญ่ หางยาวปลายหางแหลมและชี้ตรง ขาวยาวได้สัดส่วนกับลำตัว นัยน์ตามีสีน้ำตาลเข้ม หรือสีฟ้า
                            </p>
                            <Link to="/about" className="btn btn-warning shadow mb-3">Read More</Link>
                        </div>

                    </div>
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
export default Home;