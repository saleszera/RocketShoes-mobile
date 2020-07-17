import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import {
  Wrapper,
  Container,
  LogoButton,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

function Header({ cartSize }) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Container>
        <LogoButton onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoButton>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
