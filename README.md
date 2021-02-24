# Moodle-Chrome-Extension
Chrome-extension til Moodle, som forbinder timerne i CalMoodle med lektioner inde på kursussiden. Når der klikkes på lektionen i CalMoodle, scroller din browser ned til den pågældene time.

## Installering
### Download og udpak extension fra github
klik på den grønne knap "Code" på Github. Herefter trykker du "Download ZIP".
<img href="./images/download.jpg width="100px">

(Windows) Udpak ZIP-filen ved at højreklikke på filen og tryk "Udpak alle...", vælg herefter desitantionen den udpakkede fil skal gemmes på og tryk "Pak ud".

### Importer den som chrome-extension
Åben chrome og skriv "chrome://extensions/" i adressebaren. 
Sørg herefter for at "Udviklertilstand" er slået til øverst til højre.
<img href="./images/udviklingstilstand.jpg">
Klik på "Indløs upakket" øverst til venstre og find destinationen for extensionen som du udpakkede og tryk vælg mappe.
<img href="./images/indløs_upakket.jpg">

## Brug
Extensionen scanner efter ordet "Kursusgang" i lektionerne i CalMoodle. Der vil derfor forekomme tilfælde, hvor den ikke kan finde den pågældene lektionen, da den kan hedde fx. "Workshop". Dette kan være bliver forbedret i en fremtidig version.

Fag har generelt én boks/felt inde på deres side øverst, med information om faget og eksamen. Nogle fag kan ske at have 0 eller flere end én boks, derved vil extensionen ikke scroll ned til den rigtige lektion. For at justere dette følg guiden:


#### 1)
Tryk på puslespilsbrikken øverst til højre i chrome, lige til venstre for dit google profilbillede. Find "Moodle Extension" og klik på de tre prikker til højre og klik på "Valgmuligheder".

#### 2)
Tryk på knappen "Tilføj fag" i det nye vindue. En boks hvor der kan skrives id på fag og en dropdown-boks med offset dukker op. Gå nu til siden for faget, hvor extension ikke scroller ned til den rigtige lektion. Noter hvor mange bokse/felter faget har øverst på siden, som ikke er lektioner.  Øverst i browseren i adressebaren kopierer du tallene efter "id=".

#### 3)
Naviger tilbage til indstillingerne for extensionen. Indsæt de kopirede tal i feltet "Fag ID" og vælg i offset det noteret antal felter/bokse, der var øverst på siden for faget, som ikke var lektioner. Tryk på "Gem". Nu burde extensionen scroll ned til den rigtige lektion.
