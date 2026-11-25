# O2-Peliprojekti

## Peli-idea ja tavoite

<!-- TÄYDENNETÄÄN -->

## Ominaisuudet ja toiminnallisuus

<!-- TÄYDENNETÄÄN -->

## Tiimin jäsenet

Altina, Aurora, Kia, Roope ja Venla

## Käytetyt teknologiat

- Python
- Flask
- JSON file storage

## Ohjeet

<!--
TÄYDENNETÄÄN pelin ohjeet ja pelin ajaminen?
-->

## Työnjako

<!-- TÄYDENNETÄÄN -->

## Backend documentation

### Backend

Backend on implementoitu Pythonia ja Flaskia käyttäen. Se hoitaa kommunikaation frontendin ja palvelimen välillä, sekä ylläpitää pelin pistetaulukkoa.

### API päätepisteet

| Päätepiste    | Metodi | Kuvaus                           |
| ------------- | ------ | -------------------------------- |
| `/api/test`   | GET    | Testaa API yhteyden              |
| `/api/scores` | GET    | Hakee kaikki tallennetut pisteet |
| `/api/scores` | POST   | Tallentaa pisteet                |

### Tietojen tallennus

Pelaajien pisteet ovat tallennettu `backend/jsondata/scores.json` JSON datana.

Pisteet on automaattisesti järjestetty laskevassa järjestyksessä korkeimmasta alkaen.

### Frontend kommunikaatio

Frontend kommunikoi Flaskin kanssa käyttäen JavaScript Fetch rajapintaa.

- `loadScores()` Hakee ja näyttää tallennetut pisteet.
- `saveScore(name, score)` Lähettää uuden pistemäärän backendille.
- Backend validoi syötetyn tiedon ennen sen tallentamista.
