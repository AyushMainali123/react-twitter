import styled from "styled-components";
import TwitterLogoSVG from "@components/SVGs/TwitterLogoSVG";
import { breakpoints } from "@styles/breakpoints";
import { colors } from "@styles/colors";
import Button from "@components/Button";

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${breakpoints.large}px) {
    grid-template-columns: repeat(2, 1fr);
    color: ${colors.white};
    background: ${colors.black};
  }
  min-height: 100vh;
`;

const GridLeft = styled.div`
  background: ${colors.primary};
  display: grid;
  place-items: center;
`;

const GridRight = styled.div`
  display: grid;
  place-items: center;
`;

const SVGLogoRight = styled(TwitterLogoSVG)`
  width: 40px;
  fill: ${colors.white};
`;

const GridRightWrapper = styled.div`
  width: 95%;
  margin: auto;
  padding: 15px;
`;
const SVGLogoLeft = styled(TwitterLogoSVG)`
  fill: ${colors.white};
  max-height: 380px;
  width: 95%;
`;

const GridLeftWrapper = styled.div`
`;

const H1 = styled.h1`
  font-size: 80px;
  letter-spacing: 0px;
  margin: 48px 0;
`;

const H2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 32px;
  font-size: 35px;
`;

const StyledButton = styled(Button)`
  padding: 15px 100px;
`;

export default function Home() {
  return (
    <ContainerGrid>
      <GridLeft>
        <GridLeftWrapper>
          <SVGLogoLeft />
        </GridLeftWrapper>
      </GridLeft>
      <GridRight>
        <GridRightWrapper>
          <SVGLogoRight />
          <H1>Happening Now</H1>
          <H2>Join Twitter today.</H2>
          <StyledButton>Log In With Twitter</StyledButton>
        </GridRightWrapper>
      </GridRight>
    </ContainerGrid>
  );
}
