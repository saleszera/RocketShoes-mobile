import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #141419;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const LogoButton = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  background: #7159c1;
  color: #fff;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
