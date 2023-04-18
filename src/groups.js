import React, { useState, useEffect } from 'react';
import { Card, Divider, Button } from 'antd';
import axios from 'axios';

const GroupsPage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('/api/groups').then((response) => {
      setGroups(response.data);
    });
  }, []);

  const handleCreateGroup = () => {
    // Handle create group logic
  };

  return (
    <div>
      <Button onClick={handleCreateGroup}>Create Group</Button>
      <Divider />
      {groups.map((group) => (
        <Card key={group.id}>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default GroupsPage;
