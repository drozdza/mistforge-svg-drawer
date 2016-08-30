Cel aplikacji:
 - Do wykorzystania w JavaScripcie.
 - Przedstawienie rysunków i animacji w 2D.
 - Projektowanie wektorowe i rastrowe.
 - W HTMLu i JavaScripcie oparcie o Canvas.
 - Wprowadzenie jednego zegara do wszystkich animacji działających naraz na stronie.
 - Stworzenie języka (opartego na JSONie) opisu rysunków i animacji które z jednej strony są edytowalne, a z drugiej strony są do użycia w grach (ewentualny transfer danych do innych języków).
 - Konwersja wektorów do PNG



Aplikacja ma:
- Widoki
    - Każdy widok jest Canvasem.


Mamy:
- Modele
- Animacje


Model składa się z:
 - grup
 - punktów
 - linii - kształtów (krzywych SVG)
 - obrazów


Animacja składa się z:
 - animacji punktami
 - edycji modeli


x) Koncepcja POZYCJI modelu. Niektóre modele (w szczególności te służące za szkielety.) mogą mieć wiele "pozcji". Są to też elementy animacji?

Grupa:
 - jest przyczepiona do punktu, lub do


Model:
 - Może wymagać innych modeli (Jawnie). Jest też sprawdzane wymaganie innych modeli niejawnie.
 - Może importować inne modele (przekształcać je).




Obiekt: Okno Przeglądarki.
 - Oblicza wysokość i szerokość okna przeglądarki.
 - Reaguje na resize okna przeglądarki.

Obiekt: Belka menu z oknami.
 - Tu są wszystkie miniatury okien.
 - Możemy zmieniać ustawienia belki (pionowo, poziomo, jeden z 4 rogów).
 -

Obiekt: Miniatura okna na belce.
 - Po kliknięciu okno otwiera się, lub wypływa na wierzch.


-------------------------------------------------------------
- checmy modulować grubości każdej kulki w pathu, sposobu jej zaokrąglenia
- komendy halt i run, które pozwalają zrobić dowolną liczbę operacji w tej samej milisekundzie

Grupa:
- niezależna od punktów
- Jest przyczepiona do innej, środkiem innej grupy.
- 3 stopnie propagacji cech grupy:
  + działa tylko na tą grupę
  + działa na tą grupę i wszystkie grupy poniższe
  + działa na tą grupę, wszystkie poniższe, i propaguje się na poniższe
- podstawowe ustawienia grupy to: sumuj do obrotu grupy obrót grupy macieżystej (propagacji stopień: 3)
- inne możliwe propagacje np:
  + zmana wielkości,
  + kolory
  + przezroczystości
  + radiusa
  + styli
- są też możliwe propagacje na Linie i Obrazy oznaczone konkretnymi Classami
- oznacza to że Linie i Obrazy powinny być podpięte pod grupy z których mogą czerpać przemiany

- Geometry helper.

- specjalny typ klas zwanych 'pozami' albo stanami.Jeden model może mieć kilka póz. Są to rozszerzenia modelu, ale zapisywane w tym samym pliku. Powinny zawierać niewielkie przekształcenia.

- animacje zmieniają klasy różnych grup. Przejścia mogą być łagodne.


--------------------------------------------------------------------------------
- WindowManager (master)
- FullWindow
- MenuBar
- Window

Views [Its a File!]
- view geometry:
  + Function: (number of dimentions)
  + Table: (geometry array)
- geometry position

Object
- In geometry
- Model Bags [Its a File!]
- Animations
    + Animation Bags [Its a File!]

Model has:
 - Groups
 - Points
 - Shapes
 - Images
And:
 - Styles
 - Poses

 - It can require other models
 - It can extend other model[s?]


Layer Cases:
 - Models has Layers?
 - Musimy mieć dostęp do wszystkich layerów z dowolnego poziomu
 - View Position może dawać layer?
 - Layer wielowymiarowy? np: [0,0,1,4,0] (każdy kolejny numer ważniejszy)
 - zasady layerowania po typach obiektów
 - zamiast numerów layerów użycie zależności np.: X wyświetla się po Y
 - layery nazwane?

Pomysł na Layery:
 - kilka poziomów layerów: [0,2,1,2] [ position on view , object in position , group , in_group ]



--------------------------------------------------------------------------------

4 Typy plików wejściowych:
- Projekt
    - Zawiera listy Widoków, Modeli, i Animacji, [Nie, nie zawiera]
    - Pilnuje które widoki są włączone, jakie są ustawienia okien itd itp.
    - Jest praktycznie nie potrzebny dla Drawera
    - Podpina widoki pod okna
- Widok
    - Tożsamy z wyświetlanym Canvasem (lub innym medium)
    - Zawiera tablicę Pozycji lub funkcję przydzielania Pozycji
    - Zawiera listę Obiektów przydzielonych do Pozycji
    - Dla każdego Obiektu trzyma listę używanych przez niego Modeli
    - Dla każdego Obiektu trzyma listy Animacji dla każdej Sekwencji Animacji
- Model
    - Trzyma szczątkowe informacje z których składa się Obiekt
        - Grupy
            - Punkty
        - Linie
        - Obrazy
- Animacja
    - Trzyma szczątkowe informacje z których składa się Sekwencja Animacji
        - Animacje i zmiany wszystkiego



Projekt
    - Widok
        - Funckja Pozycji lub Tablica Pozycji
        - Pozycja
            - Obiekt
                - Modele
                    - Grupy
                        - Punkty lokalne Modelu
                        - Punkty globalne Obiektu
            - Sekwencje Animacji
                - Animacje



Pozycja ma jedno defaultowe miejsce na Obiekt
    -> Modele mogą dodawać dodatkowe miejsca na obiekty. Np. Skrzynia dodaje miejsce na obiekt "na skrzyni" na który możemy dodać wiele rzeczy
