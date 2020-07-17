import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';

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

class Home extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api
      .get('products')
      .catch((error) => console.tron(error));

    this.setState({ products: response.data });
  };

  handleAddProduct = () => {};

  renderItem = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <Title>{item.title}</Title>

        <Price>R$ {parseFloat(item.price).toFixed(2)}</Price>

        <AddProductButton onPress={() => this.handleAddProduct(item.id)}>
          <AddProductContainer>
            <Icon name="add-shopping-cart" size={16} color="#FFF" />
            <ProductAmountText>0</ProductAmountText>
          </AddProductContainer>
          <ButtonText>ADICIONAR</ButtonText>
        </AddProductButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={(item) => String(item.id)}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

export default Home;
