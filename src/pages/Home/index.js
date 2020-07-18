import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';

import {
  Container,
  Product,
  ProductImage,
  Title,
  Price,
  AddProductButton,
  AddProductContainer,
  ProductAmountText,
  ButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api
        .get('products')
        .catch((error) => console.tron(error));

      setProducts(response.data);
    }

    getProducts();
  }, []);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  const renderItem = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <Title>{item.title}</Title>

        <Price>R$ {parseFloat(item.price).toFixed(2)}</Price>

        <AddProductButton onPress={() => handleAddProduct(item.id)}>
          <AddProductContainer>
            <Icon name="add-shopping-cart" size={16} color="#FFF" />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </AddProductContainer>
          <ButtonText>ADICIONAR</ButtonText>
        </AddProductButton>
      </Product>
    );
  };

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
      />
    </Container>
  );
}
