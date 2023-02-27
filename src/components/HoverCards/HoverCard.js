import React from 'react'
import userImage from '../../assets/images/imageUser.jpeg';


const HoverCard = () => {
  return (
    <section class="hoverCard__Section">
        <div class="hoverCard__Wrapper">
          <div class="hoverCard">
            <div class="hoverCard__Image">
              <img src={userImage} aria-hidden alt="user image" />
              <div class="hoverCard__Info">
                <h3>Alina Smith</h3>
                <p>Senior UX/UI Designer</p>
              </div>

              <div class="hoverCard__Content">
                <div class="posts">
                  <h3>342</h3>
                  <p>Posts</p>
                </div>

                <div class="followers">
                  <h3>120k</h3>
                  <p>Followers</p>
                </div>

                <div class="following">
                  <h3>285</h3>
                  <p>Following</p>
                </div>
              </div>

              <div class="hoverCard__ButtonWrapper">
                <button class="follow__btn">Follow</button>
                <button class="message_btn">Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HoverCard
