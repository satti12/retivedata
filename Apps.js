import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from './firebaseConfig';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('testing').get();
        const documents = querySnapshot.docs.map(doc => doc.data());
        setData(documents);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Retrieve data from Firebase database
        </Text>
      </View>
      <View style={styles.content}>
        {data.map(item => (
          <View key={item.name}>
            <Text style={styles.nameText}>Name: {item.name}</Text>
            <Text style={styles.ageText}>Age: {item.age}</Text>
            <Text style={styles.ageText}>Country: {item.country}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>muqadsazaheen1233</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    marginTop: 20,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
 
    marginVertical: 10,
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    flex: 4,
  },
  nameText: {
    fontSize: 18,
    marginVertical: 5,
    marginLeft: 20,

  },
  ageText: {
    fontSize: 18,
    marginLeft: 20,
  },
  footer: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  footerText: {
    textAlign: 'center',
  },
});

export default App;
