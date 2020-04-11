import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Layout from "../layout/Layout"
import Heading from "../components/Heading/Heading"
import Fluidbox from "../components/Fluidbox/Fluidbox"
import Box from "../components/Box/Box"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: 0 auto;
  padding: 35px;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.grey300};
  }
`

const OfferPage = ({ data }) => (
  <Layout>
    <SEO title="Polityka prywatności i cookies" />
    <Fluidbox title="Polityka prywatności i cookies">
      <BackgroundImage
        Tag="div"
        fluid={data.file.childImageSharp.fluid}
        alt="Photo by Helloquence on Unsplash"
        className="FluidboxWrapper"
      />
    </Fluidbox>
    <StyledWrapper>
      <h5 style={{ textAlign: "center" }}>Polityka Cookies</h5>
      <p>
        Poniższa Polityka Cookies określa zasady zapisywania i uzyskiwania
        dostępu do danych na Urządzeniach Użytkowników korzystających z Serwisu
        do celów świadczenia usług drogą elektroniczną przez Administratora
        Serwisu.
      </p>

      <h5 style={{ textAlign: "center" }}>§ 1 Definicje</h5>
      <ul>
        <li>
          <p>
            <strong>Serwis</strong> - serwis internetowy działający pod adresem
            <span>
              {" "}
              <span>www.2lb.pl</span>
            </span>
          </p>
        </li>
        <li>
          <p>
            <strong>Serwis zewnętrzny</strong> - serwis internetowe partnerów,
            usługodawców lub usługobiorców Administratora
          </p>
        </li>
        <li>
          <p>
            <strong>Administrator</strong> - firma
            <span>
              {" "}
              <span>2LB</span>, prowadząca działalność pod adresem:{" "}
              <span>Ostrów 312A, 37-700 Przemyśl</span>, o nadanym numerze
              identyfikacji podatkowej (NIP): <span>7952558405</span>
            </span>
            , świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu
            oraz przechowująca i uzyskująca dostęp do informacji w urządzeniach
            Użytkownika
          </p>
        </li>
        <li>
          <p>
            <strong>Użytkownik</strong> - osba fizyczna, dla której
            Administrator świadczy usługi drogą elektroniczna za pośrednictwem
            Serwisu.
          </p>
        </li>
        <li>
          <p>
            <strong>Urządzenie</strong> - elektroniczne urządzenie wraz z
            oprogramowaniem, za pośrednictwem, którego Użytkownik uzyskuje
            dostęp do Serwisu
          </p>
        </li>
        <li>
          <p>
            <strong>Cookies (ciasteczka)</strong> - dane tekstowe gromadzone w
            formie plików zamieszczanych na Urządzeniu Użytkownika
          </p>
        </li>
      </ul>
      <h5 style={{ textAlign: "center" }}>§ 2 Rodzaje Cookies</h5>
      <ul>
        <li>
          <p>
            <strong>Cookies wewnętrzne</strong> - pliki zamieszczane i
            odczytywane z Urządzenia Użytkownika przes system teleinformatyczny
            Serwisu
          </p>
        </li>
        <li>
          <p>
            <strong>Cookies zewnętrzne</strong> - pliki zamieszczane i
            odczytywane z Urządzenia Użytkownika przez systemy teleinformatyczne
            Serwisów zewnętrznych
          </p>
        </li>
        <li>
          <p>
            <strong>Cookies sesyjne</strong> - pliki zamieszczane i odczytywane
            z Urządzenia Użytkownika przez Serwis
            <span style={{ display: "inline" }}>lub Serwisy zewnętrzne</span>
            podczas jednej sesji danego Urządzenia. Po zakończeniu sesji pliki
            są usuwane z Urządzenia Użytkownika.
          </p>
        </li>
        <li>
          <p>
            <strong>Cookies trwałe</strong> - pliki zamieszczane i odczytywane z
            Urządzenia Użytkownika przez Serwis
            <span id="sz2" style={{ display: "inline" }}>
              lub Serwisy zewnętrzne
            </span>
            do momentu ich ręcznego usunięcia. Pliki nie są usuwane
            automatycznie po zakończeniu sesji Urządzenia chyba że konfiguracja
            Urządzenia Użytkownika jest ustawiona na tryb usuwanie plików Cookie
            po zakończeniu sesji Urządzenia.
          </p>
        </li>
      </ul>

      <h5 style={{ textAlign: "center" }}>§ 3 Bezpieczeństwo</h5>
      <ul>
        <li>
          <p>
            <strong>Mechanizmy składowania i odczytu</strong> - Mechanizmy
            składowania i odczytu Cookies nie pozwalają na pobierania
            jakichkolwiek danych osobowych ani żadnych informacji poufnych z
            Urządzenia Użytkownika. Przeniesienie na Urządzenie Użytkownika
            wirusów, koni trojańskich oraz innych robaków jest praktynie
            niemożliwe.
          </p>
        </li>
        <li>
          <p>
            <strong>Cookie wewnętrzne</strong> - zastosowane przez
            Administratora Cookie wewnętrzne są bezpieczne dla Urządzeń
            Użytkowników
          </p>
        </li>
        <li>
          <p>
            <strong>Cookie zewnętrzne</strong> - za bezpieczeństwo plików Cookie
            pochodzących od partnerów Serwisu Administrator nie ponosi
            odpowiedzialności. Lista partnerów zamieszczona jest w dalszej
            części Polityki Cookie.
          </p>
        </li>
      </ul>

      <h5 style={{ textAlign: "center" }}>
        § 4 Cele do których wykorzystywane są pliki Cookie
      </h5>
      <ul id="cele">
        <li>
          <p>
            <strong>
              <span>Serwowanie usług multimedialnych</span>
            </strong>
            - Administrator
            <span id="sz5" style={{ display: "inline" }}>
              oraz Serwisy zewnętrzne
            </span>
            wykorzystuje pliki Cookie do serwowania Użytkownikom usług
            multimedialnych.
          </p>
        </li>
      </ul>
      <h5 style={{ textAlign: "center" }}>§ 5 Serwisy zewnętrzne</h5>
      <p>
        <span>
          Administrator współpracuje z następującymi serwisami zewnętrznymi,
          które mogą zamieszczać pliki Cookie na Urządzeniach Użytkownika:
        </span>
      </p>
      <ul>
        <li>
          <p>
            <strong>
              <span>Youtube</span>
            </strong>
          </p>
        </li>
      </ul>
      <h5 style={{ textAlign: "center" }}>
        § 6 Możliwości określania warunków przechowywania i uzyskiwania dostępu
        na Urządzeniach Użytkownika przez Serwis
        <span id="sz6" style={{ display: "inline" }}>
          i Serwisy zewnętrzne
        </span>
      </h5>
      <ul>
        <li>
          <p>
            Użytkownik może w dowolnym momencie, samodzielnie zmienić ustawienia
            dotyczące zapisywania, usuwania oraz dostępu do danych zapisanych
            plików Cookies
          </p>
        </li>
        <li>
          <p>
            Informacje o sposobie wyłączenia plików Cookie w najpopularniejszych
            przeglądarkach komputerowych i urządzeń mobilnych dostępna są na
            stronie:{" "}
            <a href="http://jakwylaczyccookie.pl">jak wyłączyć cookie</a>.
          </p>
        </li>
        <li>
          <p>
            Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do tej
            pory pliki Cookie korzystając z narzędzi Urządzenia Użytkownika za
            pośrednictwem którego Użytkowanik korzysta z usług Serwisu.
          </p>
        </li>
      </ul>
      <h5 style={{ textAlign: "center" }}>§ 7 Wymagania Serwisu</h5>
      <ul>
        <li>
          <p>
            Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu
            Użytkownika może spowodować nieprawidłowe działanie niektórych
            funkcji Serwisu.
          </p>
        </li>
        <li>
          <p>
            Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo
            działające funkcje Serwisu w przypadku gdy Użytkownik ograniczy w
            jakikolwiek sposób możliwość zapisywania i odczytu plików Cookie.
          </p>
        </li>
      </ul>
      <h5 style={{ textAlign: "center" }}>§ 8 Zmiany w Polityce Cookie</h5>
      <ul>
        <li>
          <p>
            Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej
            Polityki Cookie bez konieczności informowania o tym użytkowników.
          </p>
        </li>
        <li>
          <p>
            Wprowadzone zmiany w Polityce Cookie zawsze będą publikowane na tej
            stronie.
          </p>
        </li>
        <li>
          <p>
            Wprowadzone zmiany wchodzą w życie w dniu publikacji Polityki
            Cookie.
          </p>
        </li>
      </ul>
    </StyledWrapper>
  </Layout>
)
export const query = graphql`
  {
    file(relativePath: { eq: "hero/privacy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default OfferPage
