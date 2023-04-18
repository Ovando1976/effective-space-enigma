import React from 'react';
import { Avatar, Card, Divider } from 'antd';

const { Meta } = Card;

const ProfilePage = ({ user }) => {
  return (
    <Card>
      <Meta
        avatar={<Avatar src={user.avatar} />}
        title={user.name}
        description={user.bio}
      />
      <Divider />
      <h2>Recent Activity</h2>
      {user.recentActivity.map((activity) => (
        <p key={activity.id}>{activity.message}</p>
      ))}
    </Card>
  );
};

export default ProfilePage;
