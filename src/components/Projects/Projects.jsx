import avatar from '../Assets/avatar.jpeg'
import './Projects.css'

export default function Projects() {
    return (
      <>
        <div className="cardContainer">
          <div className="card">
            <img src={avatar} alt="" />
            <h4>ProjectName</h4>
            <button>gitgub</button>
            <button>live demo</button>
          </div>

          <div className="card">
            <img src={avatar} alt="" />
            <h4>ProjectName</h4>
            <button>gitgub</button>
            <button>live demo</button>
          </div>

          <div className="card">
            <img src={avatar} alt="" />
            <h4>ProjectName</h4>
            <button>gitgub</button>
            <button>live demo</button>
          </div>
        </div>

        <div className="cardContainer">
          <div className="card">
            <img src={avatar} alt="" />
            <h4>ProjectName</h4>
            <button>github</button>
            <button>live demo</button>
          </div>

          <div className="card">
            <img src={avatar} alt="" />
            <h4>ProjectName</h4>
            <button>gitgub</button>
            <button>live demo</button>
          </div>

          <div className="card">
            <img src={avatar} alt="" />
            <h4>ProjectName</h4>
            <button>gitgub</button>
            <button>live demo</button>
          </div>
        </div>
      </>
    );
}