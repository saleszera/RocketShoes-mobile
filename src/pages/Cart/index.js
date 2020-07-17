import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  Products,
  ProductImage,
  ProductInfo,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDeleteButton,
  AmountController,
  ProductAmount,
  IncrementButton,
  DecrementButton,
  Subtotal,
  TotalContainer,
  TotalText,
  Total,
  Button,
  ButtonText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {products.length ? (
        <Products>
          <ScrollView>
            {products.map((product) => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage
                    source={{
                      uri: product.image,
                    }}
                  />

                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>
                      R$ {parseFloat(product.price).toFixed(2)}
                    </ProductPrice>
                  </ProductDetails>

                  <ProductDeleteButton
                    onPress={() => removeFromCart(product.id)}
                  >
                    <Icon name="delete" size={20} color="#7159c1" />
                  </ProductDeleteButton>
                </ProductInfo>

                <AmountController>
                  <DecrementButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </DecrementButton>

                  <ProductAmount value={String(product.amount)} />

                  <IncrementButton onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </IncrementButton>

                  <Subtotal>
                    R$ {parseFloat(product.subtotal).toFixed(2)}
                  </Subtotal>
                </AmountController>
              </Product>
            ))}
          </ScrollView>

          <TotalContainer>
            <TotalText>Total</TotalText>
            <Total>R$ {parseFloat(total).toFixed(2)}</Total>
          </TotalContainer>

          <Button>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </Button>
        </Products>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={80} color="#9999" />
          <EmptyText>Seu carrinho está vazio!</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.map((product) => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
