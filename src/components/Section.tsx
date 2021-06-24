import styled from 'styled-components';

import { baseBorderStyle } from '@styles/mixins';

export const SectionInner = styled.div`
  padding: ${(props) => props.theme.sizes.decupleSpacer} 0;
  transform: ${(props: { reverse?: boolean }) =>
    props.reverse ? `skew(0, -3deg)` : `skew(0, 3deg)`};
`;

const Section = styled.section`
  position: relative;
  background: ${(props: { background?: string; reverse?: boolean }) => props.background};
  transform: ${(props) => (props.reverse ? `skew(0, 3deg)` : `skew(0, -3deg)`)};
  overflow: hidden;
  border-top: ${baseBorderStyle};
  border-bottom: ${baseBorderStyle};
`;

export default Section;
