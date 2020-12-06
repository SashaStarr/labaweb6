import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const StyledHeader = styled.div`
padding: 16px 20px 4px;
display: flex;
justify-content: space-around;
width: 100%;
table-layout: fixed;
border-spacing: 30px;
> div {
    display: flex;
}
p {
    font-size: 22px;
    margin-top: 0;
}
span {
    display: flex;
}
`;


export const IconsWrapper = styled.div`  
  display: flex;
  color: orange;
> span {
    margin: 0 12px;
}`;

export const IconBase = styled(Icon)`
font-size: 30px;
color: orange;
`;

export const VerticalLine = styled.hr`
    width: 80%;
    border-bottom: none;
    border-top: 1px solid #EFEFF4;
`;