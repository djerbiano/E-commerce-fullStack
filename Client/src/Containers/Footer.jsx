import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #1a2753, #f5515f);
  color: #fff;
  padding: 100px;
  width: 100vw;
  margin-top: 100px;
  border-top-right-radius: 100px;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  & > :nth-child(1),
  & > :nth-child(2) {
    width: 30%;
  }

  & > :nth-child(3) {
    width: 50%;
  }
`;

const FooterSection = styled.div`
  padding: 0 20px;
`;

const SectionTitle = styled.h3`
  color: #fff;
  font-size: 18px;
`;

const SectionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SectionListItem = styled.li`
  margin-bottom: 8px;
`;

const SectionLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
`;

const AboutSection = styled.div`
  padding: 0 20px;
`;
const AboutTitle = styled.h3`
  color: #fff;
  font-size: 18px;
`;

const AboutText = styled.p`
  color: #fff;
  font-size: 14px;
`;
const FooterBottom = styled.div`
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>Nos Produits</SectionTitle>
          <SectionList>
            <SectionListItem>
              <SectionLink href="#">Catégorie 1</SectionLink>
            </SectionListItem>
            <SectionListItem>
              <SectionLink href="#">Catégorie 2</SectionLink>
            </SectionListItem>
            <SectionListItem>
              <SectionLink href="#">Catégorie 3</SectionLink>
            </SectionListItem>
          </SectionList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Service Client</SectionTitle>
          <SectionList>
            <SectionListItem>
              <SectionLink href="#">Contactez-nous</SectionLink>
            </SectionListItem>
            <SectionListItem>
              <SectionLink href="#">Livraison et Retours</SectionLink>
            </SectionListItem>
            <SectionListItem>
              <SectionLink href="#">FAQ</SectionLink>
            </SectionListItem>
          </SectionList>
        </FooterSection>

        <AboutSection>
          <AboutTitle>À Propos de ShopingDigital</AboutTitle>
          <AboutText>
            ShopingDigital est votre destination en ligne ultime pour une
            expérience de magasinage exceptionnelle. Découvrez notre vaste
            collection de vêtements tendance, de télévisions de pointe, de
            smartphones de dernière génération, d'objets connectés innovants et
            de produits informatiques de haute qualité. Notre mission est de
            vous offrir des produits de qualité, un service client exceptionnel
            et une expérience de magasinage sans tracas.
          </AboutText>
        </AboutSection>
      </FooterContent>

      <FooterBottom>
        <CopyrightText>
          Copyright © 2023 ShopingDigital. Tous droits réservés.
        </CopyrightText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
