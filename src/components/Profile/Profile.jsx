import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Stats,
  StatsItem,
  Quantity,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <section className="section">
      <div className="container">
        <ProfileCard>
          <Description>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{username}</Name>
            <p className={tag}>@{tag}</p>
            <p className={location}>{location}</p>
          </Description>

          <Stats>
            <StatsItem>
              <span className="label">Followers</span>
              <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
              <span className="label">Views</span>
              <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
              <span className="label">Likes</span>
              <Quantity>{stats.likes}</Quantity>
            </StatsItem>
          </Stats>
        </ProfileCard>
      </div>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
