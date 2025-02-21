import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getLeaderboard } from '../api';

export default function LeaderboardScreen() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    const leaderboard = await getLeaderboard();
    setLeaderboard(leaderboard);
  };

  return (
    <View>
      <Text>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        renderItem={({ item }) => (
          <View>
            <Text>{item.username} - {item.points} points</Text>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}