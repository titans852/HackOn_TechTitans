import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { addWorkout, getWorkouts } from '../api';

export default function WorkoutScreen({ navigation }) {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = async () => {
    await addWorkout({ type, duration });
    loadWorkouts();
  };

  const loadWorkouts = async () => {
    const workouts = await getWorkouts();
    setWorkouts(workouts);
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <View>
      <Text>Add Workout</Text>
      <TextInput
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        placeholder="Duration"
        value={duration}
        onChangeText={setDuration}
      />
      <Button
        title="Add"
        onPress={handleAddWorkout}
      />
      <Text>Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.type} - {item.duration} mins</Text>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}