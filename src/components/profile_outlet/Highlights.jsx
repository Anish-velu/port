import avatar from"../Assets/avatar.jpeg"
    
import "./profile.css"

export default function Highlights() {
    return (
      <div className="highlights-container">
        <div className="highlights">
          <img src={avatar} alt="" />
                <p>descripton</p>
               
        </div>
      </div>
    );
}