import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={news_data} renderItem={renderNews} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});

export default App;
