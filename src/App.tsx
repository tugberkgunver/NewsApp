import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';
import BannerImage from './components/BannerImage';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {<BannerImage bannerImages={news_banner_data} />}
            </ScrollView>
          )}
          data={news_data}
          renderItem={renderNews}
        />
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
