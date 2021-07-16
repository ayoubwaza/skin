import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import {
  FaAngleDoubleUp,
  FaCartPlus,
  FaCheckSquare,
  FaPenAlt,
  FaWindowClose,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TextField } from "@material-ui/core";
import { Alert, AlertTitle, Rating } from "@material-ui/lab";
import { Link, animateScroll } from "react-scroll";
import { InView } from "react-intersection-observer";
export default function Home() {
  const [btn, setBtn] = useState(true);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [addresse, setAddresse] = useState("");
  const [phone, setPhone] = useState("");
  const [stars, setStars] = useState(5);
  const [starsF, setStarsF] = useState(3);
  const [errorF, setError] = useState(false);
  const [errorP, setErrroPhone] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [errorPNumb, setCheckPhoneNumb] = useState(false);
  const [xdata, setXdata] = useState([]);
  const [anime, setAnime] = useState();
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setAnime(false);
    } else {
      return setAnime(true);
    }
  }, []);
  const resetAll = () => {
    setName("");
    setAddresse("");
    setPhone("");
    setCity("");
    setThanks(true);
  };
  const returnData = (para) => {
    setName(para.name);
    setPhone(para.phone);
    setAddresse(para.addresse);
    setCity(para.city);
    setThanks(false);
  };
  if (errorF || errorP) {
    setTimeout(() => {
      setError(false);
      setErrroPhone(false);
      setCheckPhoneNumb(false);
    }, 1500);
  }
  //submit form
  const submitedForm = (e) => {
    e.preventDefault();
    //const SPREADSHEET_ID = "1leW75fm6hH7aQAxVgpbLoykDKfV43Cxrmwfi8Kp_uxA";
    //const SHEET_ID = "0";
    //const CLIENT_EMAIL = "derma-771@derma-317208.iam.gserviceaccount.com";
    //const PRIVATE_KEY ="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTXIp1UDcVdiH0\n83ThjubPlAci4m+egh60CjLF/WpXzJDsImTz5XMJwQ05QkH5rudcvjC0eJIKAFcw\nS+y21jQwGfPRN7fDXkxyUPylsfJsJRd6X/BEY4ZYpgNXsUarzxW1RmiRkkkTtpoR\nkJBGmVu8ALGhRZcEV1dsEucjRknjTKslB4bPPNJqDWGFKddooJsTHe7Kv6QC0mFO\nkXb7sycMxckPXI0wbAP70FfzHOhTuE2D3EeSV28TYc/A2YeXO+sNk26/uoJbm1KR\n4RJhOAM7I2clxk3GHtpCYrEzwVGY/xbtN4dKRdTC8l7qgZ6zLXBtkHWiHnPGxmJs\nfG/hp60nAgMBAAECggEAANivPxrm9dZ8HMUHF6FrMV1Mg1LdF0yVndJAmB3968iS\nAT2bNJ0sicY1PnJKg7jwWiOWG2tEQtTdYQTx+qGly+YH8Mv6V92phX2bf/ZnnoBG\nClzTMbfR2qY1dv8cmT4BebzObHkNIfxKR5Uxji7F76ZmVonSCDn6+qZ4b5FSIIVv\njJQKXmS+7XjgS3iaZ7W8GE9MFFtlgufS320FdK5UG0idwIDR9QvM4p2pWe7wzNaH\neDBhhOd6w/IjSNbGg4ul3z3ZeFDcTWMVQsuS0KlVufz9s8zf828kNxR+Tvya6Y9y\nLHp5+1hEoHNG3tqh/YB9Hzl0btXB7ZIGeyyjhZAF6QKBgQDE5Cw1lZ7FIbFwz2Nj\nxM71qXta7eUmGSflA9NVfesbM81mVe2DL3vN7Rs4B2gbaez97bJzbC/617mrHCib\nqSFfGwWiWb7PDMJeh4eyU3OdNnmt66JZea6OlnxokRG7kIhP22fLCIwz4Qp9GDFb\nMINTq9bFbLDp1l9aOrxapJaNXwKBgQC/mdF4cHtnC52uVQ5ka/g2oXk+7Of2mBUv\n1Z/cWWm/7BdCq0/Q5HxXCB3MzPtNa5gNmor9tpSqExgkX7j8Kjvv08+1XHfGiErG\nNT1q6BjhG/z6fZb6OFMugioGmyd6PEGQAMBn+T/DS+hdrfjF5zq9LvoT3wo8OMMi\ncwro/wetOQKBgE5uwrm515yZ9nCE/QfSb8tm72/iksUhgkX1xysoVQ7qDOm2Uz5O\nHRiEWrJwKOW6xaDGHq9iKp7Xbuwd9INF1bhoME9jRuJ+J7O2c7TzD3xSJhjFZFAW\nbBX7FqYlHBZG1jZRpcA4sHk+LYp1p7u20Kn1K0JMMRGFx0hPW5cUN7ErAoGAFoCp\nQlzrkVmi5kOlEhRALaJfTA2k3KhV7K1JPibeLaU7wh++mwkKtWoFnfUBGsGlNQvO\ngSe9ZBAkCLmZTzxil7MntOQsSQvexFKiaPjjWyTfXEf9wFt3IYI2D1qPk2KaTKBZ\n+JwkafpzSvVQv2V915Q52LWcTSBZgqVCRcUWELkCgYEAifoe1b/N1s9KD2UQBprx\n1JEyePC8Vssucux/8OmS5LqDqvg3JogYZr/XefxTnik60WzcdRIEMfZJU/pycO9p\nzfSFanblX3ERhVX/mIJeNJzc1uKYZAEDJ7J+3qHd1BWcQ1eKzeu1rFM9IpsKD75F\nOhkYppqgzLtjEx6JK7TrgjQ=\n-----END PRIVATE KEY-----\n"
    //const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    const appendSpreadsheet = async (row) => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);
      } catch (e) {
        console.error("Error: ", e);
      }
    };
    if (
      phone.length <= 0 ||
      name.length <= 0 ||
      addresse.length <= 0 ||
      city.length <= 0
    ) {
      return setError(true);
    } else if (isNaN(phone)) {
      return setErrroPhone(true);
    } else if (
      phone.charAt(0) !== "0" ||
      phone.length < 10 ||
      phone.length > 10
    ) {
      setCheckPhoneNumb(true);
    } else {
      /*
       appendSpreadsheet(newRow)
      .then(() => resetAll())
      .catch((err) => console.log(err));
        function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof url != "undefined") {
            window.location = url;
          }
        };
        gtag("event", "conversion", {
          send_to: "AW-586076706/haYWCIr55-4BEKKku5cC",
          event_callback: callback,
        });
        return false;
      }
      gtag_report_conversion();
      */
      resetAll();
      var dataSet = {
        name: name,
        city: city,
        addresse: addresse,
        phone: phone,
      };
      alert(dataSet);
      setXdata([dataSet]);
    }
  };
  return (
    <div>
      <Head>
        <title>Skin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://skin-new-pullzone.b-cdn.net/prod.webp" />
      </Head>
      <style jsx global>
        {`
          body {
            width: 100%;
            height: 100%;
            margin: 0%;
            padding: 0%;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            direction: rtl;
            font-family: "Amiri", serif;
            overflow-y: ${thanks ? "hidden" : null};
          }
        `}
      </style>
      {thanks ? (
        <section id="thanks" className={styles.__thanks}>
          <div className={styles.__thanks__Child}>
            <div>
              <p>الطــلب ديآلكم تسجل بنجآح</p>
              <p>
                الأمآنة ديآلكم غآدي توصلك في أقرب وقت <br />
                وحتآل بآب الدآر
              </p>
              <p>شُـــكراً</p>
            </div>
            <div className={styles.__handle_img__car}>
              <img
                src="https://skinPics.b-cdn.net/thanks.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div>
              <span onClick={() => setThanks(false)}>
                <FaWindowClose />
              </span>
            </div>
            <div className={styles.__list}>
              <h2>المرجوآ التأكد من المعلومآت التي أدخلنموهآ مسبقاً</h2>
              {xdata.map((data, i) => {
                return (
                  <div key={i}>
                    <ul>
                      <li>الإسم الكآمل : {data.name}</li>
                      <li>المدينة : {data.city}</li>
                      <li>العنوان : {data.addresse}</li>
                      <li>الهاتف : {data.phone}</li>
                    </ul>
                    <button
                      onClick={() => {
                        returnData(data);
                      }}
                      className={styles.__btn__page__Thanks}
                    >
                      <span>
                        <FaPenAlt />
                      </span>
                      تعديل{" "}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
      <section id="gif">
        <div className={styles.__Parent}>
          <div className={styles.__Child__pa}>
            <div
              className={styles.__Child_content}
            >
              <h2>
                البشرة النّـــآصعة
                <br />
                سر جمآل المرأة
              </h2>
              {btn ? (
                <div className={styles.__fixed__Btn}>
                  <Link
                    to="target"
                    smooth={true}
                    duration={2500}
                    offset={50}
                    hashSpy={true}
                  >
                    <button className={styles.__btn__page}>أطــلبي الآن</button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.__svg}>
          <div className={styles.__svg__Child}>
            <div className={styles.hold__svg}>
              <img
                src="https://skin-new-pullzone.b-cdn.net/hello3.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="problems">
        <div className={styles.__parent_Prob}>
          <div className={styles._porB__Child}>
            <div>
              <h1>سبب الشيخوخة هو نقص الريتينول</h1>
              <p>
                بعد 35 عامًا ، تتلاشى بشرتك حتمًا. يتباطأ إنتاج الريتينول ، وهو
                محفز طبيعي لشباب البشرة.
              </p>
            </div>
            <div className={styles.__four__Prob}>
              <div className={styles.__Id_Prod}>
                <img
                  src="https://skin-new-pullzone.b-cdn.net/prod.webp"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <div>
                <div className={styles.__each_Prob}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/headProb.jpg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <h5> أكياس تحت العين</h5>
                </div>
                <div className={styles.__each_Prob}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/mouthProb.jpg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <h5>خطوط التعبير</h5>
                </div>
                <div className={styles.__each_Prob}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/noiseProb.jpg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <h5>الطيات الأنفية</h5>
                </div>
                <div className={styles.__each_Prob}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/faceProb.jpg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <h5>محيط الوجه "العائم"</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: `url(https://skin-new-pullzone.b-cdn.net/leaves.webp)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        id="productTalk"
      >
        <div className={styles.__product}>
          <div className={styles.__product__Child}>
            <div className={styles.__content_Product}>
              <p>
                من خلال اختراق خلايا الجلد
                <br />
                ينشط الباكوتشيول المسارات الكيميائية المسؤولة عن إنتاج الكولاجين
                <br />
                ويقلل من مخاطر التغيرات المبكرة المرتبطة بالعمر.
              </p>
              <button className={styles.__btn__page}>أطــلبي الآن</button>
            </div>
            <div>
              <img
                src="https://skin-new-pullzone.b-cdn.net/product.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="secret">
        <div className={styles.__smile}>
          <div className={styles.__smile__Child}>
            <div className={styles.__handle__ttz}>
              <img
                src="https://skin-new-pullzone.b-cdn.net/sharapoV.gif"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className={styles.__content__smile}>
              <div>
                <h2>رجعي الإبتســآمة ليك و لكآع اللّي دآيرين بك</h2>
              </div>
              <div>
                <button className={styles.__btn__page}>
                  أطــلبي الآن{" "}
                  <span>
                    <FaCartPlus />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ghana">
        <div className={styles.__ghana}>
          <div className={styles.__ghana__Child}>
            <div className={styles.__content__ghana}>
              <div>
                <h2>
                  هدآ هو الوقت بآش تخلصي من التجآعيد <br />
                  هدآ هو الوقت فين تبآني زوينة <br />
                  وحنآ جبنا لك الحل...
                </h2>
              </div>
              <div>
                <button className={styles.__btn__page}>
                  أطــلبي الآن{" "}
                  <span>
                    <FaCartPlus />
                  </span>
                </button>
              </div>
            </div>
            <div className={styles.__handl_Ghana}>
              <img
                src="https://skin-new-pullzone.b-cdn.net/ghana.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="secret">
        <div className={styles.__secret}>
          <div className={styles.__secret__Child}>
            <div className={styles.__handle__ttz}>
              <img
                src="https://skin-new-pullzone.b-cdn.net/c.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className={styles.__content__secret}>
              <div>
                <h2>
                  تألــقي من جديد .
                  <br />
                  الإبتسآمة ديالك ، هي الهدف ديآلنا
                </h2>
              </div>
              <div>
                <button className={styles.__btn__page}>
                  أطــلبي الآن{" "}
                  <span>
                    <FaCartPlus />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="definition">
        <div
          style={{
            background: `url(https://skin-new-pullzone.b-cdn.net/benifet.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          className={styles.__dif__Dproduct}
        >
          <h1>شنآهو السر ديآل TEST ؟</h1>
          <div className={styles.__child__Dif}>
            <div>
              <p>
                ينشط باكوتشيول إنتاج الكولاجين من النوع الأول والثالث والرابع
                (الريتينول "مسؤول" فقط عن النوع الأول من الكولاجين)
                <br />
                ويثبط عمل الإنزيمات التي تعطل التمثيل الغذائي للبروتين وخلايا
                الجلد.
                <br />
                إنه لا يعمل فقط على سطح البشرة ، ولكنه يخترق أيضًا أعمق طبقات
                الأدمة ، مما يؤدي إلى تشغيل آلية تجديد الخلايا من الداخل.
              </p>
              <p>
                العنصر النشط في Rechiol هو bakuchiol ، وهو بديل نباتي للريتينول.
                <br />
                يتم استخلاص المركز النباتي هذا في الهند من نبات نادر يسمى Cullen
                corylifolium.
              </p>
              <div className={styles.__dif__three}>
                <div className={styles.__dif__three_each}>
                  <h3>يمنع تكون التجاعيد الجديدة</h3>
                  <ul>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      يحفز إنتاج الكولاجين
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      يزيل الاحمرار
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      حارب البقع العمرية
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      يزيد من مرونة الجلد
                    </li>
                  </ul>
                </div>
                <div className={styles.__dif__three_each}>
                  <h3>ينعم خطوط التعبير</h3>
                  <ul>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      الطيات الأنفية
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      الأخاديد الأنفية الدمعية
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      "قدم كرو" تحت العينين
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      التجاعيد الدقيقة حول الشفاه
                    </li>
                  </ul>
                </div>
                <div className={styles.__dif__three_each}>
                  <h3> يشد الوجه البيضاوي ويشده</h3>
                  <ul>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      تدلي عظام الوجنتين
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      محيط الوجه العائم
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      يتورم
                    </li>
                    <li>
                      <span>
                        <FaCheckSquare />
                      </span>{" "}
                      عدم وضوح خط الذقن
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://skin-new-pullzone.b-cdn.net/secret.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="explo">
        <div className={styles.__explosion}>
          <h1>منآش تآيتكوّن TEST ؟</h1>
          <div className={styles.__explosion__Child}>
            <div className={styles.__first_exp__Three}>
              <div className={styles.__each__Exp}>
                <div className={styles.__handle__Img_each__exp}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/vitamin.webp"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <h3>فيتآمين C</h3>
                <p>
                  وهو أحد مضادات الأكسدة الطبيعية القوية التي تنظف البشرة
                  وتحميها من التدمير بفعل الجذور الحرة.
                  <br />
                  له خصائص مضادة للالتهابات ، ويعزز التئام الجروح ، ويزيل التصبغ
                  غير المرغوب فيه المرتبط بالعمر.
                </p>
              </div>
              <div className={styles.__each__Exp}>
                <div className={styles.__handle__Img_each__exp}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/louz.webp"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <h3>زيت اللوز</h3>
                <p>
                  يرطب بشرة الوجه والرقبة <br /> ويحارب الشيخوخة الضوئية
                  <br /> ويعيد وظائف الحاجز الواقي للبشرة <br /> ويشبعها
                  بالفيتامينات والأحماض الدهنية.
                </p>
              </div>
              <div className={styles.__each__Exp}>
                <div className={styles.__handle__Img_each__exp}>
                  <img
                    src="https://skinPics.b-cdn.net/colagene.webp"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <h3>كولآجــين</h3>
                <p>
                  إنه نسيج ضام مصنوع من بروتينات الجلد. في مرحلة الشباب ، يتم
                  إنتاج الكولاجين من تلقاء نفسه
                  <br />
                  ولكن بمرور الوقت ينخفض ​​مستواه.
                  <br />
                  يفقد الجلد مرونته وتشوه الوجه. لذلك ، فإن تجديد الكولاجين من
                  الخارج بعد 35 عامًا أمر حيوي لبشرتك.
                </p>
              </div>
            </div>
            <div className={styles.__handle_Img__exp}>
              <img
                src="https://skin-new-pullzone.b-cdn.net/colagene.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className={styles.__first_exp__Three}>
              <div className={styles.__each__Exp}>
                <div className={styles.__handle__Img_each__exp}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/chimie.webp"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <h3>باكوتشيول</h3>
                <p>
                  هو نظير ريتينول نباتي تم الحصول عليه من النبات الهندي Cullen
                  corylifolium.
                  <br />
                  يحفز إنتاج الكولاجين ويعيد لون البشرة ومرونتها ويحارب التجاعيد
                  ويمنع إنتاج الميلانين. يزيل هذا المكون أيضًا الاحمرار وحب
                  الشباب بسبب خصائصه المطهرة.
                </p>
              </div>
              <div className={styles.__each__Exp}>
                <div className={styles.__handle__Img_each__exp}>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/erk.webp"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <h3>عرق سوس</h3>
                <p>يحفز تكوين ألياف الكولاجين وينعم التجاعيد ويحارب الوذمة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nature">
        <div
          style={{
            background: `url(https://skin-new-pullzone.b-cdn.net/benifet.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className={styles.__nature}
        >
          <h1>طــبيعــي %100</h1>
          <div className={styles.__nature__Child}>
            <div>
              <img
                src="https://skin-new-pullzone.b-cdn.net/nature.png"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://skin-new-pullzone.b-cdn.net/nature.webp"
                width="100%"
                height="80%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="care">
        <div className={styles.__care}>
          <h1>TEST</h1>
          <div className={styles.__care__Child}>
            <div>
              <h2>اعتني ببشرتك على مدار الساعة طوال أيام الأسبوع</h2>
              <p>
                مركز الرفع Rechiol له تأثير تراكمي. كلما ارتديته ، كلما كنت أصغر
                سنًا.
              </p>
              <div>
                <button className={styles.__btn__page}>أطــلبي الآن</button>
              </div>
            </div>
            <div>
              <img
                src="https://skin-new-pullzone.b-cdn.net/prod.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="care">
        <div className={styles.__confirm}>
          <h1>كيفآش تطــلب TEST ؟ </h1>
          <div className={styles.__confirm__Child}>
            <div className={styles.__confirm__Child__Each}>
              <div className={styles.__handle__confim_img}>
                <img
                  src="https://skin-new-pullzone.b-cdn.net/clipboard.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <span>1</span>
              <h4>املأ نموذج الطلب في هذه الصفحة</h4>
            </div>
            <div className={styles.__confirm__Child__Each}>
              <div className={styles.__handle__confim_img}>
                <img
                  src="https://skin-new-pullzone.b-cdn.net/beer-bottle.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <span>2</span>
              <h4>انتظر حتى يتصل بك أحد وكلائنا</h4>
            </div>
            <div className={styles.__confirm__Child__Each}>
              <div className={styles.__handle__confim_img}>
                <img
                  src="https://skin-new-pullzone.b-cdn.net/support.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <span>3</span>
              <h4>إلتقطي العبوة وكوني أصغر سنَا من أمس!</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="way">
        <div className={styles.__way_how}>
          <h1>كيفآش نستآعمل TEST ؟ </h1>
          <div className={styles.__way__Child}>
            <div className={styles.__each__Way}>
              <div>
                <span>1</span>
                <p>نظفي وجهك من أي مكياج وجففيه بالمنشفة.</p>
              </div>
              <div>
                <span>2</span>
                <p>يُرج جيداً قبل الاستخدام.</p>
              </div>
              <div>
                <span>3</span>
                <p>ضعي الكريم على الوجه والرقبة والمنطقة الأعلى من الصدر.</p>
              </div>
              <div>
                <span>4</span>
                <p>السماح للامتصاص</p>
              </div>
            </div>
            <div>
              <img
                src="https://skinPics.b-cdn.net/WomenSmile.webp"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.__reviews}>
        <h1>سآلي المجرب لاتسآلي الطبيب ؟</h1>
        <div className={styles.__reviews__Child}>
          <div className={styles.__each__Slider}>
            <div className={styles.__handle__image__Sliders}>
              <img
                src="https://skin-new-pullzone.b-cdn.net/w1.jpg"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <p>hello world</p>
            <h3>world hello</h3>
            <Rating
              dir="ltr"
              name="simple-controlled"
              value={stars}
              onChange={(event, newValue) => {
                setStars(newValue);
              }}
            />
          </div>
          <div
            className={styles.__each__Slider}
            initial={anime ? { opacity: 0, x: -200 } : null}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <div
              className={styles.__handle__image__Sliders}
              initial={anime ? { opacity: 0, x: -200 } : null}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 140 }}
            >
              <img
                src="https://skin-new-pullzone.b-cdn.net/w2.jpg"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <p>hello world</p>
            <h3>world hello</h3>
            <Rating
              dir="ltr"
              name="simple-controlled"
              value={starsF}
              onChange={(event, newValue) => {
                setStarsF(newValue);
              }}
            />
          </div>
          <div
            className={styles.__each__Slider}
            initial={anime ? { opacity: 0, x: -200 } : null}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <div className={styles.__handle__image__Sliders}>
              <img
                src="https://skin-new-pullzone.b-cdn.net/w3.jpg"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <p>hello world</p>
            <h3>world hello</h3>
            <Rating
              dir="ltr"
              name="simple-controlled"
              value={stars}
              onChange={(event, newValue) => {
                setStars(newValue);
              }}
            />
          </div>
        </div>
      </section>
      <InView>
        {({ ref, inView }) => (
          <section ref={ref} id="form">
            {inView ? setBtn(false) : setBtn(true)}
            <div className={styles.__form}>
              <div className={styles.__form__Child}>
                <div className={styles.__form__absolute}>
                  <div className={styles.__absolute__price}>
                    <h3>199 Dh</h3>
                  </div>
                  <div>
                    <form>
                      {errorP ? (
                        <Alert className={styles.__Alert} severity="error">
                          <AlertTitle>خــطأ</AlertTitle>
                          رقم الهآتف لا يتكون من الأرقآم
                        </Alert>
                      ) : null}
                      {errorPNumb ? (
                        <Alert severity="error">
                          <AlertTitle>خــطأ</AlertTitle>
                          رقم الهآتف الدي تم إدخآله غير مكتمل{" "}
                        </Alert>
                      ) : null}
                      {errorF ? (
                        <Alert severity="error">
                          <AlertTitle>خــطأ</AlertTitle>
                          المرجو ملء جميع الخآنآت{" "}
                        </Alert>
                      ) : null}
                      <div>
                        <TextField
                          required
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          variant="outlined"
                          label="الإسم الكآمل"
                        />
                      </div>
                      <div>
                        <TextField
                          required
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          variant="outlined"
                          label="المدينة"
                        />
                      </div>
                      <div>
                        <TextField
                          required
                          type="text"
                          value={addresse}
                          onChange={(e) => setAddresse(e.target.value)}
                          variant="outlined"
                          label="العنوآن"
                        />
                      </div>
                      <div>
                        <TextField
                          required
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          variant="outlined"
                          label="الهآتف"
                        />
                      </div>
                      <div id="target" className={styles.__handle_btn_submit}>
                        <button
                          onClick={submitedForm}
                          className={styles.__btn__page}
                        >
                          أطــلبي الآن{" "}
                          <span>
                            <FaCartPlus />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <img
                    src="https://skin-new-pullzone.b-cdn.net/secret.webp"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>
      <section id="footer">
        <footer className={styles.__footer}>
          <div className={styles.__Child__footer}>
            <div>
              <span
                onClick={() =>
                  animateScroll.scrollToTop({
                    duration: "3000",
                    smooth: "true",
                  })
                }
              >
                <FaAngleDoubleUp />
              </span>
            </div>
            <div>جميع الحقوق محفوظة © 2021</div>
          </div>
        </footer>
      </section>
    </div>
  );
}
