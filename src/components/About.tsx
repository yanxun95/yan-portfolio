import "../css/about.css";

const About = () => {
  return (
    <div id="aboutContainer" className="about-container">
      <h1 className="about-name">YAN XUN CHANG</h1>
      <p className="about-position">FULL STAKE DEVELOPER</p>
      <div className="profile-img-container">
        <img
          src="https://res.cloudinary.com/dobdsx6ge/image/upload/v1645720764/Portfolio/face_co_rmc4ey.png"
          alt="profile-images"
          className="profile-img"
        />
      </div>
      <div className="about-paragraph-container">
        <p>
          Hi, my name is Yan and I am from Malaysia. I completed my Bachelor of
          Science (Honours) Computing in Technological University Dublin. After
          finished my degree, I&#39;ve join Strive School for full stack web
          developer course.
        </p>
        <p>
          Personally, I always love to learn new knowledge. When I&#39;m on my
          degree, my interest in in android development, but I find out web
          development is quite interesting that&#39;s why I apply for full stack
          web developer course. Curretly I&#39;m a MERN stack developer who is
          looking for opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
