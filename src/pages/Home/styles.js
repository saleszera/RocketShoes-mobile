import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex-direction: row;
`;

export const Product = styled.View`
  background: #fff;
  margin: 15px;
  padding: 10px;
  width: 220px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #141414;
  margin-bottom: 14px;
`;

export const AddProductButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
  background: #7159c1;
`;

export const AddProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
