import { Image, StyleSheet, Platform, useColorScheme, ActivityIndicator, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCallback, useEffect, useState } from 'react';
import { Category, Product } from '@/constants/Interfaces';

export default function HomeScreen() {
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([])
  const [chosenCategory, setChosenCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(30);
  const [skip, setSkip] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false)


  useEffect(() => {
    getCategories();
  }, [])

  useEffect(() => {
    getProducts();
  }, [chosenCategory, limit, skip, refreshing])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const getCategories = useCallback(async () => {
    let categories: any = await fetch('https://dummyjson.com/products/categories');
    categories = await categories.json();;
    setCategories(categories)
  }, [])

  const getProducts = async () => {
    setLoading(true)
    let url = chosenCategory
      ? `https://dummyjson.com/products/category/${chosenCategory}`
      : "https://dummyjson.com/products";

    let products: any = await fetch(`${url}/?limit=${limit}`)
    products = await products.json();
    setProducts(products?.products)
    setTotal(products?.total)
    setLoading(false)
    setRefreshing(false)
  }

  console.log("product=>", products, limit, total, products.length);
  const theme = useColorScheme() || "light"

  return (
    <ThemedView style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator 
          size={"large"}
          color={"black"}
          style={{
            alignSelf: "center",
            position: "absolute",
            width: "100%",
            marginVertical: 20
          }}
        />
      ) : null}


      <FlatList 
        data={products}
        keyExtractor={(data) => `${data.id}`}
        numColumns={2}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
