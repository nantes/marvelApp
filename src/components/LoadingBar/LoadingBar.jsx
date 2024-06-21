import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const LoadingBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: transparent;
  overflow: hidden;
`;

const LoadingBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  animation: ${loadingAnimation} 2s linear infinite;
`;

const LoadingBarComponent = ({ loading }) => {
  return loading ? (
    <LoadingBarContainer role='progressbar'>
      <LoadingBar />
    </LoadingBarContainer>
  ) : null;
};

LoadingBarComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingBarComponent;
