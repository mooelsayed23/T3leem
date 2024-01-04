import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container py-5 us-container">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4">منصة تَقدم الرقمية</h2>
          <p className="lead mb-4">
            نحن نفخر بأن نكون فريقاً ملتزماً بتقديم تجربة تعلم رائعة من خلال
            استخدام أحدث التقنيات والأساليب التعليمية.
          </p>
          <p className="mb-4">
            يتمركز مقرنا الرئيسي في مكان استراتيجي، حيث نعمل مع طلابنا من جميع
            أنحاء العالم لتلبية احتياجاتهم التعليمية بشكل فريد.
          </p>
          <p className="mb-4">
            إذا كنت تبحث عن فريق يسعى جاهداً لتحسين تجربة التعلم الخاصة بك،
            فإننا هنا لدعمك في تحقيق أهدافك التعليمية.
          </p>
          <p className="mb-4">
            نحن ندمج بين الإبداع والتكنولوجيا لتقديم تجارب تعلم لا تُنسى.
            تفانينا في تحقيق الجودة والابتكار يجعلنا شركاء مثاليين في رحلتك
            التعليمية.
          </p>
          <p className="mb-4">
            مع التركيز على تقديم حلول تعليمية مبتكرة، نسعى لتعزيز تفاعل الطلاب
            مع المواد التعليمية وتحفيز رغبتهم في استكشاف المزيد.
          </p>
          <p>
            مهمتنا هي تحقيق التميز في تقديم تعليم شامل وملهم لكل متعلم يبحث عن
            المعرفة والتطور الشخصي.
          </p>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">رؤيتنا</h5>
              <p className="card-text">
                رؤيتنا هي أن نكون روادًا في مجال تصميم وتطوير واجهات المواقع
                التعليمية، وأن نقدم تجارب مستخدم استثنائية تلبي احتياجات ورغبات
                الطلاب والمتعلمين.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">قيمنا</h5>
              <p className="card-text">
                قيمنا تقوم على الالتزام، الابتكار، التعاون، الجودة، وتحقيق
                النجاح المشترك مع مجتمعنا التعليمي.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">شراكتنا</h5>
              <p className="card-text">
                شراكتنا تعتمد على التفاهم والثقة، ونعمل معًا لتحقيق النجاح
                المشترك في تحسين تجربة التعلم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
