### This is a small library that implements scoreboard with few features

Project uses Typescript and Jest testing framework.
For starting project run `makefile` with `make` command.


### Assumptions
The only assumption I made was that each `Match` has its own unique `ID` generated when match is created. In `Scoreboard` class matches are stored insed `Map<String, Match>` where `String` is generated `ID`.