import "../css/about.css";

const About = () => {
  return (
    <div id="aboutContainer" className="section-container">
      <h1 className="about-name">YAN XUN CHANG</h1>
      <p className="about-position">FULL STACK DEVELOPER</p>
      <div className="profile-img-container">
        <img
          src="https://res.cloudinary.com/dobdsx6ge/image/upload/v1645720764/Portfolio/face_co_rmc4ey.png"
          alt="profile-images"
          className="profile-img"
        />
      </div>
      <div className="section-paragraph-container">
        <p>
          Hi, my name is Yan and I am from Malaysia. I completed my Bachelor of
          Science (Honors) at Technological University Dublin. After finished my
          degree, I&#39;ve join Strive School for full stack web developer
          course.
        </p>
        <p>
          Personally, I always love to learn new knowledge. When I&#39;m on my
          degree, my interest in in android development, but I find out web
          development is quite interesting that&#39;s why I apply for full stack
          web developer course. Right now I&#39;m proud to say I'm a Full-Stack
          Developer looking for an opportunity where I can start my adventure in
          web development.
        </p>
        <div>
          <p>
            Here are a few technologies I&#39;ve been working with recently:
          </p>
          <ul className="about-tech-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Mongo</li>
            <li>Express JS</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
