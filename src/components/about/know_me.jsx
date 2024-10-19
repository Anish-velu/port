import avatar from "../Assets/avatar.jpeg"
import './about.css'

export default function Know_Me() {
    return (
      <div>
        <div className="knowMeContainer">
          <div>
            <p>Get to Know more</p>
            <h4>About Me</h4>
          </div>

          <div className="aboutMe">
            <img src={avatar} alt="" />

            <div class="profile-details">
              <div class="experience-education">
                <div class="experience">
                  <div class="icon">🧑‍💻</div>
                  <div class="text">
                    <h3>Experience</h3>
                    <p>asdf</p>
                  </div>
                </div>
                <div class="education">
                  <div class="icon">🎓</div>
                  <div class="text">
                    <h3>Education</h3>
                    <p>asdfv</p>
                  </div>
                </div>
              </div>

              <div class="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  quis reprehenderit et laborum, rem, dolore eum quod voluptate
                  exercitationem nobis, nihil esse debitis maxime facere minus
                  sint delectus velit in eos quo officiis explicabo deleniti
                  dignissimos. Eligendi illum libero dolorum cum laboriosam
                  corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------- */}

        {/* <div class="container">
          <div style={{ justifyContent: "center" }} class="photo-gallery">
            <div class="column">
              <div class="photo">
                <img style={{ justifyContent: "center" }} src={avatar} alt="" />
              </div>

              <div class="photo">
                <img style={{ justifyContent: "center" }} src={avatar} alt="" />
              </div>

              <div class="photo">
                <img style={{ justifyContent: "center" }} src={avatar} alt="" />
              </div>
            </div>

            <div class="column">
              <div class="photo">
                <img style={{ justifyContent: "center" }} src={avatar} alt="" />
              </div>
              <div class="photo">
                <img style={{ justifyContent: "center" }} src={avatar} alt="" />
              </div>
            </div>

            <div class="column">
              <div class="photo">
                <img style={{ justifyContent: "center" }} src={avatar} alt="" />
              </div>
              <div class="photo">
                <img style={{ justifyContent: "center" }} src={avatar} alt="" />
              </div>
              <a
                href="https://drive.google.com/drive/folders/11DTvYX037LVXvHGHqQmYnK3D2NsgIx76?usp=sharing"
                target="_blank"
                class="viewmorebtn"
              >
                View More !!
              </a>
            </div>
          </div>
        </div> */}

        {/* -----------------------      */}
      </div>
    );
}