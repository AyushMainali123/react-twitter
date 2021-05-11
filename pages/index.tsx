import styled from "styled-components";
import TwitterLogoSVG from "@components/SVGs/TwitterLogoSVG";
import { breakpoints } from "@styles/breakpoints";
import { colors } from "@styles/colors";

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${breakpoints.large}px) {
    grid-template-columns: repeat(2, 1fr);
    color: ${colors.white};
    background: ${colors.black};
  }
`;

const GridLeft = styled.div``;

const GridRight = styled.div`
  display: grid;
  place-items: center;
`;

const SVGLogoLeft = styled(TwitterLogoSVG)`
  background: ${colors.primary};
  fill: ${colors.white};
`;

const SVGLogoRight = styled(TwitterLogoSVG)`
  width: 40px;
  fill: ${colors.white};
`;

const GridRightWrapper = styled.div`
  width: 95%;
  margin: auto;
  padding: 15px;

`

const H1 = styled.h1`
  font-size: 80px;
  letter-spacing: 0px;
  margin: 48px 0;
`

const H2 =  styled.h2`
  margin-top: 20px;
  margin-bottom: 32px;
  font-size: 35px;
`

export default function Home() {
  return (
    <ContainerGrid>
      <GridLeft>
        <SVGLogoLeft />
      </GridLeft>
      <GridRight>
        <GridRightWrapper>
          <SVGLogoRight />
          <H1>
            Happening Now
          </H1>
          <H2>
            Join Twitter today.
          </H2>
        </GridRightWrapper>
      </GridRight>
    </ContainerGrid>
  );
}
