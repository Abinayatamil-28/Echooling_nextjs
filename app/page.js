import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (

    <>
       <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      </Head>
      <div className="Navbar">
        <h1 className="logo"><img src="https://reactheme.com/products/html/echooling/assets/images/logo2.png" alt="Echooling Logo" /></h1>
        <ul>
          <li>
            <a href="#" className="dropdown-symbol">Home</a>
            <div className="sub-menu-1">
              <ul>
                <li><a href="#">Home one</a></li>
                <li><a href="#">Home two</a></li>
                <li><a href="#">Home three</a></li>
                <li><a href="#">Home four</a></li>
                <li><a href="#">Home five</a></li>
                <li><a href="#">Home six</a></li>
                <li><a href="#">Home seven</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="dropdown-symbol">Page</a>
            <div className="sub-menu-1">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Instructor</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="dropdown-symbol">Courses</a>
            <div className="sub-menu-1">
              <ul>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Right Sidebar</a></li>
                <li><a href="#">Courses List</a></li>
                <li><a href="#">Courses Single</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#" className="dropdown-symbol">Blog</a>
            <div className="sub-menu-1">
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Blog Single</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="phone-part">
          <a href="tel:+(402)76244183"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"  ><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>  +(402) 762 441 83 </a>
        </div>
        <div className="react-logins">
          <a href="#">
            Book a visit
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <br></br>
       {/* banner section*/}
      <div className="banner">
        <h1 className="banner-title" style={{ textAlign: 'center', fontSize: '70px', fontFamily: 'Times New Roman, Times, serif' }}>Learn Courses Online</h1>
        <div className="banner-content">
          <h1 className="banner-title" style={{ textAlign: 'center', color: 'blue', fontSize: '50px', fontFamily: 'Times New Roman, Times, serif' }}>New Today</h1>
          <form className="search-form">
            <input type="text" className="form-input" placeholder="Search Course" />
            <button type="submit" className="form-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </form>
          <p style={{ textAlign: 'center' }}>Have Questions? <a href="#">Get Free samples</a></p>
        </div>
        <div className="banner-image-container">
          <img src="https://reactheme.com/products/html/echooling/assets/images/banner2/normal-image/01.png" className="banner-image" />
        </div>
        <div className="banner-image-container-left">
          <img src="https://reactheme.com/products/html/echooling/assets/images/banner2/shape/02.png" className="banner-image-left" />
        </div>
        <div className="about__content">
          <ul>
            <li>
              <div className="icon">
                <img src="https://reactheme.com/products/html/echooling/assets/images/banner2/bg.png" alt="image" />
              </div>
              <div className="text">
                <h4>9.4k+</h4>
                <p>Total active students taking <br /> gifted courses.</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <img src="https://reactheme.com/products/html/echooling/assets/images/banner2/bg11.png" alt="image" />
              </div>
              <div className="text">
                <h4>70+</h4>
                <p>Available field programs <br /> gifted courses.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <br />
       {/* card section */}
      <div className="container">
        <h1>Best Courses, Students love the most</h1>
        <div className="react-logins1">
          <a href="#">
            Book a visit
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
        <div className="card-section">
          <div className="card">
            <img src="https://reactheme.com/products/html/echooling/assets/images/topics/1.svg" />
            <div className="card-content">
              <h3 style={{ color: 'blueviolet' }}>Art & Design</h3>
              <p>15 courses</p>
            </div>
          </div>
          <div className="card">
            <img src="https://reactheme.com/products/html/echooling/assets/images/topics/2.png" />
            <div className="card-content">
              <h3 style={{ color: 'blueviolet' }}>Programming</h3>
              <p>38 courses</p>
            </div>
          </div>
          <div className="card">
            <img src="https://reactheme.com/products/html/echooling/assets/images/topics/3.svg" />
            <div className="card-content">
              <h3 style={{ color: 'blueviolet' }}>Accounting</h3>
              <p>24 courses</p>
            </div>
          </div>
          <div className="card">
            <img src="https://reactheme.com/products/html/echooling/assets/images/topics/4.svg" />
            <div className="card-content">
              <h3 style={{ color: 'blueviolet' }}>Content Writing</h3>
              <p>17 courses</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
       {/* youtube section */}
      <div className="container about__area-width">
      <div className="row">
        <div className="col-lg-6">
          <div className="about__image">
            <Image className="main-image" src="/images/youtube icon.png" height={500} width={600} alt="About" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__content">
            <h2 className="about__title">
              Among the premier, <br /> <em>Most expansive Online Course</em>
            </h2>
            <p className="about__paragraph">
              Embark on a journey of knowledge from anywhere <br /> in the world with our interactive and engaging online
              <br /> course.
            </p>
            <ul>
              <li><i className="icon_check">Access more than 100K online courses</i></li>
              <li><i className="icon_check">Upskill your organization.</i></li>
            </ul>
            <div className="about__btn">
            <Link href="#" legacyBehavior>
  <a>
    Read More
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </a>
</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <br></br>
      {/* Banner and Card Section */}
      <div className="banner1">
        <div className="text1">
          <h1>Fast Selling Courses</h1>
          <p>Explore our fast-selling courses and accelerate your learning journey today!</p>
        </div>
        <div className="categories">
          <button className="category-button">Web Design</button>
          <button className="category-button">Marketing</button>
          <button className="category-button">Development</button>
          <button className="category-button">Art & Craft</button>
          <button className="category-button">Audio and Music</button>
          <button className="category-button">Portraits</button>
        </div>
         {/* course card section */}
        <div className="card-section1">
          {[
            {
              imgSrc: "/images/webdesign1.jpg",
              category: "Web Design",
              rating: "4.5 review",
              students: "44 Students",
              description: "The Best Selling Web Designing Course",
              instructorImg: "/images/instructor4.jpg",
              instructorName: "Julius",
              lessons: "15 lessons",
              price: "$34",
            },
            {
              imgSrc: "/images/marketing2.avif",
              category: "Marketing",
              rating: "3.5 review",
              students: "60 Students",
              description: "The Hottest Marketing Course",
              instructorImg: "/images/instructor5.jpg",
              instructorName: "Catherine",
              lessons: "10 lessons",
              price: "$20",
            },
            {
              imgSrc: "/images/development1.avif",
              category: "Development",
              rating: "3.8 review",
              students: "44 Students",
              description: "The Fast Selling Development Courses",
              instructorImg: "/images/instructor6.jpg",
              instructorName: "Stella Marium",
              lessons: "8 lessons",
              price: "$39",
            },
            {
              imgSrc: "/images/portrait.jpg",
              category: "Portraits",
              rating: "3.7 review",
              students: "34 Students",
              description: "Fast-Selling Portraits Online Courses",
              instructorImg: "/images/instructor9.jpg",
              instructorName: "Stephan",
              lessons: "17 lessons",
              price: "$46",
            },
            {
              imgSrc: "/images/audio1.jpg",
              category: "Audio & Music",
              rating: "4.5 review",
              students: "70 Students",
              description: "The World best Music Courses",
              instructorImg: "/images/instructor11.jpg",
              instructorName: "Annabella",
              lessons: "15 lessons",
              price: "$25",
            },
            {
              imgSrc: "/images/art and craft2.jpg",
              category: "Art & Craft",
              rating: "4.8 review",
              students: "54 Students",
              description: "Enhance your Artistic Skills With Our Best Courses",
              instructorImg: "/images/instructor8.jpg",
              instructorName: "Richard",
              lessons: "12 lessons",
              price: "$50",
            }
          ].map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.imgSrc} alt={`Course Image ${index + 1}`} />
              <a href="#" className="category">{course.category}</a>
              <div className="course-content">
                <ul className="course-meta">
                  <li>
                    <svg className="feather-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {course.rating}
                  </li>
                  <li>
                    <svg className="feather-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {course.students}
                  </li>
                </ul>
                <ul className="course-details">
                  <p>{course.description}</p>
                </ul>
                <div className="instructor">
                  <img src={course.instructorImg} alt={`Instructor Image ${index + 1}`} />
                  <div className="instructor-names">{course.instructorName}</div>
                </div>
                <hr />
                <div className="footer">
                  <div className="lesson">
                    <div className="lesson-icon"><img src="/images/lessonicon.png" alt="Lesson Icon" /></div>
                    <div className="lesson-text">{course.lessons}</div>
                  </div>
                  <div className="price">{course.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <br></br>
     {/* faq section */}
    <div className="faq__section">
      <div className="faq__shape"> 
        <Image className="faq__shape-2" src="/images/shape_01.png" alt="shape png" width={50} height={50} />
      </div>
      <div className="faq__container">
        <div className="faq__row">
          <div className="faq__column faq__left">
            <div className="faq__item">
              <div className="faq__question">
                <h6>Questions & Answers</h6>
                <h2>Got a Question? <br />Find the Answer Here.<br />
                <p>Completely plagiarize fully researched <br />collaboration and idea-sharing for covalent.</p></h2>
                <div className="read-more">
                  <a href="#" className="read-more-button">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="faq__column faq__right">
            <div className="accordion">
              <div className="accordion-item">
                <input type="checkbox" id="accordion1" className="accordion-checkbox" />
                <label htmlFor="accordion1" className="accordion-button">How can I delete my account?<span className="arrow"></span></label>
                <div className="accordion-body">
                  <p>To delete your account, please log in to your profile, navigate to the settings section, and find the option to delete your account permanently.</p>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="accordion2" className="accordion-checkbox" />
                <label htmlFor="accordion2" className="accordion-button">What services do you offer?<span className="arrow"></span></label>
                <div className="accordion-body">
                  <p>We offer a range of Courses including web design, mobile app development, and digital marketing solutions.</p>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="accordion3" className="accordion-checkbox" />
                <label htmlFor="accordion3" className="accordion-button">How do I contact customer support?<span className="arrow"></span></label>
                <div className="accordion-body">
                  <p>You can contact our customer support team via email at support@example.com or by phone at +1-123-456-7890 during our business hours.</p>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="accordion4" className="accordion-checkbox" />
                <label htmlFor="accordion4" className="accordion-button">Can I upgrade my subscription plan?<span className="arrow"></span></label>
                <div className="accordion-body">
                  <p>Yes, you can upgrade your subscription plan at any time by logging into your account and selecting the upgrade option under subscription settings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div className="instructor__area">
      {/* Instructor Header */}
      <div className="instructor__header">
        <div className="header__text">
          <h6>Course Instructors</h6>
          <h2>Meet our Class Instructors</h2>
        </div>
        <div className="header__images">
          <div className="instructor__item">
            <Image
              src="https://reactheme.com/products/html/echooling/assets/images/instructor/03.jpg"
              alt="Ellie Mary"
              width={150}
              height={150}
            />
            <div className="instructor__info">
              <h4>Ellie Mary</h4>
              <h5>
                Teaching <br /> Assistant
              </h5>
            </div>
          </div>
          <div className="instructor__item">
            <Image
              src="https://reactheme.com/products/html/echooling/assets/images/instructor/04.jpg"
              alt="Jonquil Von"
              width={150}
              height={150}
            />
            <div className="instructor__info">
              <h4>Jonquil Von</h4>
              <h5>
                Education <br /> Assistant
              </h5>
            </div>
          </div>
          <div className="instructor__item">
            <Image
              src="https://reactheme.com/products/html/echooling/assets/images/instructor/05.jpg"
              alt="Piff Jenkins"
              width={150}
              height={150}
            />
            <div className="instructor__info">
              <h4>Piff Jenkins</h4>
              <h5>Teacher</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Instructor List */}
      <div className="instructor__list">
        <div className="instructor__item">
          <Image
            src="https://reactheme.com/products/html/echooling/assets/images/instructor/06.jpg"
            alt="Brian Cumin"
            width={150}
            height={150}
          />
          <div className="instructor__info">
            <h4>Brian Cumin</h4>
            <h5>Lead Teacher</h5>
          </div>
        </div>
        <div className="instructor__item">
          <Image
            src="https://reactheme.com/products/html/echooling/assets/images/instructor/07.jpg"
            alt="Hanson Deck"
            width={150}
            height={150}
          />
          <div className="instructor__info">
            <h4>Hanson Deck</h4>
            <h5>Teacher</h5>
          </div>
        </div>
        <div className="instructor__item">
          <Image
            src="https://reactheme.com/products/html/echooling/assets/images/instructor/08.jpg"
            alt="Alan Fresco"
            width={150}
            height={150}
          />
          <div className="instructor__info">
            <h4>Alan Fresco</h4>
            <h5>Teacher</h5>
          </div>
        </div>
      </div>
    </div>
  <br></br>
  {/* carousel section */}
  <div className="banner3">
      <div className="banner-content3">
        <h3>Great Words about Echooling</h3>
        <h1>Look! What our Students Are Saying</h1>
        <div className="carousel">
          <input type="radio" id="slide1" name="slides" defaultChecked />
          <input type="radio" id="slide2" name="slides" />
          
          <div className="carousel-inner">
            <div className="carousel-slide">
              <div className="slide-content">
                <Image
                  src="/images/student1.avif"
                  alt="Image 1"
                  width={150}
                  height={150}
                />
                <div>
                  <span className="quote-mark">&ldquo;</span>
                  <p>eChooling courses offer a diverse and well-structured learning experience, with up-to-date content presented by expert instructors. The interactive elements, flexible pace, and engaging material make it an excellent choice for personal and professional growth. Highly recommended!</p>
                  <div className="author-info">
                    <p>John Doe</p>
                    <p>Student</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-slide">
              <div className="slide-content">
                <Image
                  src="/images/student3.jpg"
                  alt="Image 2"
                  width={150}
                  height={150}
                />
                <div>
                  <span className="quote-mark">&ldquo;</span>
                  <p>eChooling courses are top-notch, offering diverse subjects with expert instruction. The interactive and flexible format makes learning engaging and convenient. Perfect for anyone looking to expand their skills and knowledge. Highly recommended!</p>
                  <div className="author-info">
                    <p>Jane Smith</p>
                    <p>Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <label className="nav left" htmlFor="slide1">
            &#10094;
          </label>
          <label className="nav right" htmlFor="slide2">
            &#10095;
          </label>
        </div>
      </div>
    </div>
    <br></br>
    {/* Events cards*/}
    <div className="container-2">
      <div className="new-card">
        <div className="date-icon">24 Jun</div>
        <Image
          src="/images/campaign 2.jpg"
          alt="Campaign"
          width={150}
          height={150}
        />
        <div className="new-card-content">
          <div className="new-card-title">Campaigns</div>
          <a href="#">Fostering future Schools & social Innovation</a>
          <div className="new-card-user">
            <svg
              className="feather-user"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Darcie</span>
          </div>
        </div>
      </div>

      <div className="new-card">
        <div className="date-icon">15 May</div>
        <Image
          src="/images/education 2.avif"
          alt="Education"
          width={150}
          height={150}
        />
        <div className="new-card-content">
          <div className="new-card-title">Education</div>
          <a href="#">The Surprising Reason College Tuition</a>
          <div className="new-card-user">
            <svg
              className="feather-user"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Emille</span>
          </div>
        </div>
      </div>

      <div className="new-card">
        <div className="date-icon">10 Apr</div>
        <Image
          src="/images/students2.avif"
          alt="Students"
          width={150}
          height={150}
        />
        <div className="new-card-content">
          <div className="new-card-title">Students</div>
          <a href="#">Those other College Expenses about</a>
          <div className="new-card-user">
            <svg
              className="feather-user"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Damon</span>
          </div>
        </div>
      </div>

      <div className="new-card">
        <div className="date-icon">1 Mar</div>
        <Image
          src="/images/strategy5.avif"
          alt="Strategy"
          width={150}
          height={150}
        />
        <div className="new-card-content">
          <div className="new-card-title">Strategy</div>
          <a href="#">Those other College Expenses about</a>
          <div className="new-card-user">
            <svg
              className="feather-user"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Stephan</span>
          </div>
        </div>
      </div>
    </div>
    <div className="custom-footer-top rectangle">
        <div className="container">
          <div className="custom-footer-top-cta">
            <div className="row">
              <div className="col-lg-7">
                <h4>Free Online Course</h4>
                <h3>Ready to dive in? <br /> Start your free Course today.</h3>
              </div>
              <div className="col-lg-5">
                <a href="#">Go To FAQ
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-footer">
        <div className="custom-container">
          <div className="custom-row">
            <div className="custom-col-lg-4 custom-md-mb-20">
              <div className="custom-footer-widget custom-footer-widget-1">
                <div className="custom-footer-logo white">
                  <a href="#" className="logo-text">
                    <Image src="https://reactheme.com/products/html/echooling/assets/images/logo2.png" alt="logo" width={100} height={70} />
                  </a>
                </div>
                <h4 className="custom-footer-subtitle" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
                  There are course and event custom <br />
                  post types so you can easily create and<br /> manage course, events.
                </h4>
                <ul className="custom-footer-address">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:+(402)76244183"> +(402) 762 441 83 </a>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:info@yourdomain.com"> info@echooling.com </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="custom-col-lg-4 custom-md-mb-20">
              <div className="custom-footer-widget custom-footer-widget-2">
                <h2 className="custom-footer-title">About Us</h2>
                <div className="custom-footer-menu">
                  <ul>
                    <li><Link href="#" legacyBehavior><a>About</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>Courses</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>Events</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>Career</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>Become a Teacher</a></Link></li>
                    <li><Link href="#"legacyBehavior><a>Contact</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="custom-col-lg-4 custom-md-mb-20">
              <div className="custom-footer-widget custom-footer-widget-3">
                <h2 className="custom-footer-title">Useful Links</h2>
                <div className="custom-footer-menu">
                  <ul>
                    <li><Link href="#" legacyBehavior><a>Browse Library</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>Library</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>Partners</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>News & Blog</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>FAQ</a></Link></li>
                    <li><Link href="#" legacyBehavior><a>Tutorials</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="custom-col-lg-4">
              <div className="custom-footer-widget custom-footer-widget-4">
                <h2 className="custom-footer-title">Newsletter</h2>
                <div className="custom-footer-form">
                  <p>Get the latest Echooling news <br />delivered to your inbox</p>
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button className="custom-footer-form-btn">
                      <i className="arrow_right">submit</i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="custom-row custom-copyright-row">
            <div className="custom-col-lg-6 custom-react-copy-left">© 2024 Echooling. All Rights Reserved</div>
            <div className="custom-col-lg-6 custom-react-copy-right">
            <ul className="custom-social-links">
            
  <li className="follow">Follow us</li>
  <li>
    <Link href="#" legacyBehavior>
      <a>
        <span aria-hidden="true" className="social_facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.35v21.3C0 23.4.6 24 1.35 24h11.49v-9.29H9.69v-3.62h3.15V8.41c0-3.13 1.87-4.84 4.6-4.84 1.3 0 2.42.1 2.75.14v3.19h-1.89c-1.48 0-1.77.71-1.77 1.75v2.29h3.54l-.46 3.62h-3.08V24h6.04c.75 0 1.35-.6 1.35-1.35V1.35C24 .6 23.4 0 22.675 0z" />
          </svg>
        </span>
      </a>
    </Link>
  </li>
  <li>
    <Link href="#" legacyBehavior>
      <a>
        <span aria-hidden="true" className="social_twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M23.954 4.57c-.885.392-1.83.655-2.825.775 1.014-.607 1.794-1.568 2.165-2.724-.95.564-2.004.975-3.127 1.195-.896-.952-2.175-1.54-3.594-1.54-2.719 0-4.926 2.207-4.926 4.925 0 .387.045.765.127 1.126C7.691 8.094 4.066 6.13 1.64 3.161c-.427.735-.671 1.585-.671 2.485 0 1.715.872 3.226 2.189 4.114-.807-.026-1.566-.247-2.227-.616v.062c0 2.396 1.704 4.394 3.964 4.843-.416.112-.852.171-1.295.171-.315 0-.623-.031-.923-.086.623 1.953 2.434 3.376 4.578 3.414-1.675 1.313-3.785 2.095-6.076 2.095-.394 0-.785-.023-1.17-.067 2.186 1.398 4.779 2.213 7.548 2.213 9.055 0 14.002-7.496 14.002-13.985 0-.213 0-.426-.015-.637.961-.693 1.793-1.56 2.448-2.549z" />
          </svg>
        </span>
      </a>
    </Link>
  </li>
  <li>
    <Link href="#" legacyBehavior>
      <a>
        <span aria-hidden="true" className="social_linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M19.07 3H4.93C3.86 3 3 3.86 3 4.93v14.14C3 20.14 3.86 21 4.93 21h14.14C20.14 21 21 20.14 21 19.07V4.93C21 3.86 20.14 3 19.07 3zM9 18H7V9h2v9zm-1-10.36c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm11 10.36h-2v-4.67c0-1.11-.02-2.54-1.54-2.54-1.54 0-1.78 1.21-1.78 2.44v4.77h-2V9h2v1.23h.03c.28-.54.96-1.11 1.98-1.11 2.12 0 2.5 1.4 2.5 3.21v5.67z" />
          </svg>
        </span>
      </a>
    </Link>
  </li>
</ul>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}