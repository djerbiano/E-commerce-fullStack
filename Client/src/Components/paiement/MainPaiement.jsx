import React, { useState } from "react";

import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 50px;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  flex: 1 1 45%;
  margin-right: 5%;
  margin-bottom: 1rem;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Asterisk = styled.span`
  color: red;
  margin-left: 0.25rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 50px;

  &:hover {
    background-color: #0056b3;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const PaymentIcon = styled.img`
  margin: 8px 8px 8px 0;
  width: 100px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
  //border:2px black solid;
  border: ${(props) => (props.selected ? "2px solid black" : "none")};
  border-radius: 5px;
`;

function MainPaiement() {
  // États pour les informations de contact
  const [email, setEmail] = useState("");

  // États pour les informations d'adresse
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // États pour les consentements
  const [conditionsConsent, setConditionsConsent] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation basique
    if (!email || !firstName || !lastName || !address1 || !zipcode || !city) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Collecte des données
    const formData = {
      email,
      firstName,
      lastName,
      address1,
      address2,
      zipcode,
      city,
      phoneNumber,
      conditionsConsent,
      selectedPayment,
    };

    console.log("Données de paiement :", formData);
    // Ici, vous pouvez envoyer les données au serveur ou procéder au paiement
  };

  return (
    <MainContainer>
      {/* Section Contact */}
      <Section>
        <SectionHeader>
          <SectionTitle>Contact</SectionTitle>
        </SectionHeader>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="email">
                E-mail<Asterisk>*</Asterisk>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                aria-label="E-mail"
                aria-required="true"
                required
                autoComplete="email"
                maxLength="50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Veuillez saisir votre email"
              />
            </FormGroup>
          </FormRow>

          {/* Section Adresse */}
          <Section>
            <SectionHeader>
              <SectionTitle>Adresse</SectionTitle>
            </SectionHeader>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">
                  Prénom<Asterisk>*</Asterisk>
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  aria-label="Prénom"
                  aria-required="true"
                  required
                  autoComplete="given-name"
                  maxLength="15"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Veuille saisir votre prénom"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="lastName">
                  Nom<Asterisk>*</Asterisk>
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  aria-label="Nom"
                  aria-required="true"
                  required
                  autoComplete="family-name"
                  maxLength="20"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Veuille saisir votre nom"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup style={{ flex: "1 1 100%", marginRight: "0" }}>
                <Label htmlFor="address1">
                  Adresse<Asterisk>*</Asterisk>
                </Label>
                <Input
                  type="text"
                  id="address1"
                  name="address1"
                  aria-label="Adresse"
                  aria-invalid={!address1}
                  aria-required="true"
                  required
                  autoComplete="street-address"
                  maxLength="70"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Veuillez saisir votre adresse de livraison"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="address2">Complément adr.</Label>
                <Input
                  type="text"
                  id="address2"
                  name="address2"
                  aria-label="Complément adr."
                  autoComplete="address-line2"
                  maxLength="70"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder="Ex. Société, App., Unité"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="zipcode">
                  Code postal<Asterisk>*</Asterisk>
                </Label>
                <Input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  aria-label="Code postal"
                  aria-required="true"
                  required
                  autoComplete="postal-code"
                  maxLength="10"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  placeholder="ex : 12345"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="city">
                  Ville<Asterisk>*</Asterisk>
                </Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  aria-label="Ville"
                  aria-required="true"
                  required
                  autoComplete="address-level2"
                  maxLength="25"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Veuillez saisir votre ville"
                />
              </FormGroup>
            </FormRow>

            {/* Téléphone (Facultatif) */}
            <FormRow>
              <FormGroup style={{ flex: "1 1 100%", marginRight: "0" }}>
                <Label htmlFor="phoneNumber">Téléphone (Facultatif)</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  aria-label="Téléphone (Facultatif)"
                  aria-required="false"
                  autoComplete="tel"
                  maxLength="25"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="0712345678"
                />
              </FormGroup>
            </FormRow>

            {/* Pays (Fixe à France) */}
            <FormRow>
              <strong>Pays:</strong>&nbsp; <span>France</span>
            </FormRow>

            {/* Consentements */}
            <CheckboxContainer>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  checked={conditionsConsent}
                  onChange={(e) => setConditionsConsent(e.target.checked)}
                />
                <p>J'accepte les conditions de vente </p>
              </CheckboxLabel>
            </CheckboxContainer>
          </Section>

          {/* Sections Livraison et Paiement */}

          <Section>
            <SectionHeader>
              <SectionTitle>Paiement</SectionTitle>
            </SectionHeader>
            <PaymentMethods>
              {/* Icônes des méthodes de paiement */}

              <PaymentIcon
                alt="visa"
                src="https://www.reussir-mon-ecommerce.fr/wp-content/uploads/2016/03/vitrophanie-CB-1.jpg"
                selected={selectedPayment === "visa"}
                onClick={() => setSelectedPayment("visa")} 
              />
              <PaymentIcon
                alt="PAYPAL"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                selected={selectedPayment === "paypal"}
                onClick={() => setSelectedPayment("paypal")}
              />
            </PaymentMethods>

            {/* Bouton Soumettre */}
            <SubmitButton type="submit">Payer</SubmitButton>
          </Section>
        </Form>
      </Section>
    </MainContainer>
  );
}

export default MainPaiement;
