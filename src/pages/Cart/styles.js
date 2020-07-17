import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Products = styled.View`
  background: #fff;
  border-radius: 4px;
  width: 335px;
  margin: 15px;
  padding: 10px;
`;

export const Product = styled.View``;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding: 10px;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  color: #999999;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #141414;
`;

export const ProductDeleteButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const AmountController = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${darken(0.03, '#FFFFFF')};
  padding: 8px;
  border-radius: 4px;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  text-align: center;
  font-size: 14px;
  color: #999999;
  background: #fff;
  height: 26px;
  min-width: 51px;
  padding: 5px;
  margin: 0px 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const IncrementButton = styled.TouchableOpacity``;
export const DecrementButton = styled.TouchableOpacity``;

export const Subtotal = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  color: #141414;
`;

export const TotalContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999999;
`;

export const Total = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #141414;
`;

export const Button = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 12px;
`;

export const EmptyContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  width: 335px;
  margin: 15px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
export const EmptyText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999999;
`;
