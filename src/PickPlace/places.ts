const places = [
  'Aksdal',
  'Alsvåg',
  'Alta',
  'Alternes',
  'Alvdal',
  'Amtmannsnes',
  'Andebu',
  'Andenes',
  'Andselv',
  'Andslimoen',
  'Anglavika',
  'Arendal',
  'Arna',
  'Askgrenda',
  'Askim',
  'Askje',
  'Askjem',
  'Askvoll',
  'Askøy',
  'Aukra',
  'Aulifeltet',
  'Aurdal',
  'Aure',
  'Aurlandsvangen',
  'Aursmoen',
  'Austmarka',
  'Austmarka(Kongsvinger)',
  'Austnes',
  'Austreim',
  'Avaldsnes',
  'Bagn',
  'Balestrand',
  'Ballangen',
  'Ballstad',
  'Bangsund',
  'Barkåker',
  'Batnfjordsøra',
  'Beisfjord',
  'Beitostølen',
  'Bekkelaget',
  'Bekkjarvik',
  'Berg',
  'Bergen',
  'Berger',
  'Bergsmo',
  'Berkåk',
  'Berlevåg',
  'Binde',
  'Biri',
  'Birkeland',
  'Bismo',
  'Bjerka',
  'Bjerkeskaug',
  'Bjerkvik',
  'Bjertnestunet',
  'Bjervamoen',
  'Bjølstad',
  'Bjørkelangen',
  'Bjørnevatn',
  'Blaker',
  'Blakstad',
  'Bleik',
  'Blomvåg',
  'Blæstadgrenda',
  'Bodø',
  'Bogen',
  'Bokn',
  'Borgen',
  'Borkenes',
  'Botngård',
  'Botten',
  'Brandal',
  'Brandbu/Jaren',
  'Brandsøy',
  'Braskereidfoss',
  'Bratsberg',
  'Brattvåg',
  'Breivikbotn',
  'Brekstad',
  'Bremanger',
  'Bremsnes',
  'Bru',
  'Bruflat',
  'Brumunddal',
  'Brunstad',
  'Brusand',
  'Bryggja',
  'Bryne',
  'Brårud',
  'Brønnsletten',
  'Brønnøysund',
  'Bud',
  'Burfjord',
  'Buvika/Ilhaugen',
  'Bybrua',
  'Byflaten',
  'Byglandsfjord',
  'Bykle',
  'Byrkjelo',
  'Byrknes',
  'Båtsfjord',
  'Bø',
  'Børsa',
  'Bøverbru',
  'Dale',
  'Dalemarka',
  'Dalen',
  'Darbu',
  'Davanger',
  'Degernes',
  'Dimmelsvik',
  'Disenå',
  'Dokka',
  'Dombås',
  'Drag',
  'Dragsund',
  'Drammen',
  'Drøbak',
  'Egersund',
  'Eggkleiva',
  'Eidbukta',
  'Eide',
  'Eidfjord',
  'Eidsbotn',
  'Eidsvik',
  'Eidsvoll',
  'Eidsvåg',
  'Eikefjord',
  'Eikeland',
  'Eikelandsosen',
  'Eina',
  'Eivindvik',
  'Ekeberg',
  'Ekne',
  'Elnesvågen',
  'Eltonåsen',
  'Elverum',
  'Ersfjordbotn',
  'Espeland',
  'Etne',
  'Evenskjær',
  'Evje',
  'Fagerliåsen/Poverudbyen',
  'Fagernes',
  'Fagerstrand',
  'Fanahammeren',
  'Fardalen',
  'Farestad',
  'Farstad',
  'Farsund',
  'Fauske',
  'Feda',
  'Fedje',
  'Ferkingstad',
  'Fetsund-Østersund',
  'Fevik',
  'Fiksdal',
  'Fillan',
  'Finnestad',
  'Finnsnes',
  'Fiskåbygd',
  'Fitjar',
  'Fjell',
  'Fjellfoten',
  'Fjellsrud',
  'Fjellstad',
  'Fjellstrand',
  'Flateby',
  'Flekke',
  'Flekkefjord',
  'Flesland',
  'Flisa',
  'Florø',
  'Foldrøy',
  'Folkestad',
  'Follafoss',
  'Folldal',
  'Follebu',
  'Forbregd/Lein',
  'Forland',
  'Forsand',
  'Forset',
  'Forsøl',
  'Fosnavåg',
  'Fossbergom',
  'Fossnes',
  'Fotlandsvåg',
  'Fredrikstad/Sarpsborg',
  'Frekhaug',
  'Frogner',
  'Frommereid',
  'Frosta',
  'Fuglevik',
  'Furuflaten',
  'Fyresdal',
  'Fåberg',
  'Fåvang',
  'Førde',
  'Førdesfjorden',
  'Gamvik',
  'Gangstadhaugen',
  'Gata',
  'Gaupne',
  'Geilo',
  'Geitnes',
  'Gibostad',
  'Gilja',
  'Giske',
  'Gjerstad',
  'Gjøvik',
  'Gladstad',
  'Glesnes',
  'Glomfjord',
  'Glomstein',
  'Glosli',
  'Glærem',
  'Gol',
  'Gomnes',
  'Gran/Ringstad',
  'Granrudmoen-Øyer',
  'Granvin',
  'Gravdal',
  'Gretteåsen',
  'Grimstad',
  'Grinde',
  'Grodås',
  'Grong',
  'Grov',
  'Grua',
  'Gryllefjord',
  'Grøa',
  'Grønlund',
  'Gullhaug',
  'Gvarv',
  'Hafslo',
  'Haga',
  'Haganes',
  'Halden',
  'Hallingby',
  'Halmstad',
  'Hamar',
  'Hammarsland',
  'Hammarvika',
  'Hammerfest',
  'Hamnås',
  'Hansnes',
  'Hanøy',
  'Hardbakke',
  'Hareid',
  'Harestua',
  'Harpefoss',
  'Harstad',
  'Hasle',
  'Hasvik',
  'Hattfjelldal',
  'Hauge',
  'Haugesund',
  'Haugland',
  'Haugo',
  'Haugsbygda',
  'Hauknes',
  'Hausvik',
  'Havøysund',
  'Heggelia',
  'Heggenes',
  'Hegra',
  'Heimdal',
  'Heiås',
  'Helgelandsmoen',
  'Helgeroa/Nevlunghamn',
  'Hellerud',
  'Hellesylt',
  'Hellvik',
  'Hem',
  'Hemnes',
  'Hemnesberget',
  'Hemsedal',
  'Henningsvær',
  'Heradsbygd',
  'Hermansverk/Leikanger',
  'Herre',
  'Herøysund',
  'Hesseng',
  'Hesthagen',
  'Hestnes',
  'Hestvika',
  'Hjelmelandsvågen',
  'Hjelset',
  'Hjukse',
  'Hjørungavåg',
  'Hoelsand',
  'Hof',
  'Hoffland',
  'Hogsetfeltet',
  'Hol',
  'Holevik',
  'Hollingen',
  'Holm',
  'Holme',
  'Holmestrand',
  'Holmsbu',
  'Hommelvik',
  'Hommersåk',
  'Honningsvåg',
  'Hordnes',
  'Horten',
  'Hov',
  'Hovden',
  'Hovdenakken',
  'Hovin',
  'Hundeidvik',
  'Hundorp',
  'Husnes',
  'Husøy',
  'Hvasser',
  'Hvittingfoss',
  'Hyggen',
  'Hylla',
  'Håkvik',
  'Hålandsmarka',
  'Hæen',
  'Hægeland',
  'Høie',
  'Høle',
  'Hølen',
  'Høllen',
  'Hønefoss',
  'Høvåg',
  'Høyanger',
  'Høyjord',
  'Høylandet',
  'Høysand',
  'Ibestad',
  'Ikornnes',
  'Ilseng',
  'Ingeberg',
  'Innbygda',
  'Inndyr',
  'Innvik',
  'Ise',
  'Isebakke',
  'Isfjorden',
  'Jansberg',
  'Jelsnes',
  'Jessheim',
  'Jevnaker',
  'Jondal',
  'Jortveit',
  'Judaberg',
  'Jørpeland',
  'Jørstadmoen',
  'Kabelvåg',
  'Kaland',
  'Kalvåg',
  'Kampå',
  'Kapp',
  'Karasjok',
  'Karlestrand',
  'Karlshus',
  'Kaupanger',
  'Kautokeino',
  'Kiberg',
  'Kil',
  'Kilsund',
  'Kinsarvik',
  'Kirkebygda',
  'Kirkebygden',
  'Kirkegrenda',
  'Kirkenes',
  'Kirkenær',
  'Kirkevoll/Brekkeåsen',
  'Kjellmyra',
  'Kjosen',
  'Kjøllefjord',
  'Kjøpmannsskjær',
  'Kjøpsvik',
  'Kjørnes',
  'Kleive',
  'Kleppe/Verdalen',
  'Klevjer',
  'Klokkarstua',
  'Klokkarvik',
  'Klæbu',
  'Kløfta',
  'Knappskog',
  'Knarrevik/Straume',
  'Knarvik',
  'Kodal',
  'Kolbu',
  'Kolnes',
  'Kolvereid',
  'Konglungen',
  'Kongsberg',
  'Kongsvinger',
  'Konnerud',
  'Kopervik',
  'Koppang',
  'Korgen',
  'Korsvegen',
  'Korsvik',
  'Kragerø',
  'Kristiansand',
  'Kristiansund',
  'Krokeidet',
  'Kroksund',
  'Krossberg',
  'Krossen',
  'Krossneset',
  'Kråkstad',
  'Krøderen',
  'Kvalsund',
  'Kvaløysletta',
  'Kvam',
  'Kvelde',
  'Kvernaland',
  'Kviteseid',
  'Kvål',
  'Kylstad',
  'Kyrkjebø',
  'Kyrksæterøra',
  'Kåfjordbotn',
  'Kårvåg',
  'Lakselv',
  'Lalm',
  'Lampeland',
  'Langangen',
  'Langevåg',
  'Langhaugane',
  'Langset',
  'Langørjan',
  'Larkollen',
  'Larsnes',
  'Larvik',
  'Lauve/Viksjord',
  'Lauvsnes',
  'Leikanger',
  'Leikong',
  'Leinesfjord',
  'Leinstrand',
  'Leira',
  'Leirsund',
  'Leirvik',
  'Leitebakk',
  'Leknes',
  'Leksvik',
  'Leland',
  'Lena',
  'Lensbygda',
  'Ler',
  'Lervik',
  'Levanger',
  'Li',
  'Lia',
  'Liabø',
  'Liknes',
  'Liland',
  'Lillehammer',
  'Lillesand',
  'Lindeberg',
  'Lindås',
  'Linnestad',
  'Lismarka',
  'Lofthus',
  'Lommedalen',
  'Lonevåg',
  'Longum',
  'Lovund',
  'Lundamo',
  'Lunde',
  'Lundermoen',
  'Lunner',
  'Lyefjell',
  'Lyngdal',
  'Lyngseidet',
  'Lysthaugen',
  'Lysøysund',
  'Lærdalsøyri',
  'Løding',
  'Lødingen',
  'Løiten brænderi',
  'Løken',
  'Løkenfeltet',
  'Løkken',
  'Løpsmarka',
  'Lørenfallet',
  'Løstad',
  'Løten',
  'Magnor',
  'Malm',
  'Malme',
  'Malmheim',
  'Malvik',
  'Mandal',
  'Manger',
  'Maura',
  'Mebonden',
  'Mehamn',
  'Melandsvågen',
  'Melbu',
  'Meldal',
  'Melhus',
  'Melsomvik',
  'Mesnali',
  'Midsund',
  'Midtbygda',
  'Miland',
  'Minnesund',
  'Misje',
  'Missingmyr',
  'Mo',
  'Moane',
  'Moelv',
  'Moen',
  'Mogrenda',
  'Moi',
  'MoiRana',
  'Molde',
  'Moldekleiv',
  'Moltustranda',
  'Momoen',
  'Monssveen',
  'Mork',
  'Mosjøen',
  'Moss',
  'Mosterhamn',
  'Mosvik',
  'Movatn',
  'Movik',
  'Muruvik',
  'Myklebost',
  'Myra',
  'Myre',
  'Mysen',
  'Måløy',
  'Mære',
  'Mønshaugen-Bjørgum',
  'Møvik',
  'Nakkerud',
  'Namdalseid',
  'Namsos',
  'Namsskogan sentrum',
  'Narvik',
  'Naustdal',
  'Nedstrand',
  'Nesbyen',
  'Nesbygda',
  'Nesgrenda',
  'Nesjestranda',
  'Neskollen',
  'Neslandsvatn',
  'Nesna',
  'Nesoddtangen',
  'Nodeland-Brennåsen',
  'Nordagutu',
  'Nordal',
  'Nordbøåsane',
  'Norderhaug',
  'Norderhov',
  'Nordfjordeid',
  'Nordhus',
  'Nordkisa',
  'Nordkjosbotn',
  'Nordlia',
  'Nordstrand',
  'Nordvågen',
  'Noresund',
  'Norheimsund',
  'Notodden',
  'Nybergsund',
  'Nykirke',
  'Nypan',
  'Nærbø',
  'Nærland',
  'Nærsnes',
  'Odda',
  'Oddevall/Sjåstad',
  'Ogna',
  'Olden',
  'Olderdalen',
  'Oltedal',
  'Oma',
  'Opakermoen',
  'Oppdal',
  'Oppeid',
  'Opphaug',
  'Orkanger/Fannrem',
  'Ormåsen',
  'Os',
  'Oslo',
  'Osøyro',
  'Otnes',
  'Otta',
  'Ottersbo',
  'Ottersøy',
  'Padlene',
  'Ploganes',
  'Pollestad',
  'Porsgrunn/Skien',
  'Prestegårdshagen',
  'Prestfoss',
  'Prestmoen',
  'Preststranda',
  'Rafsbotn',
  'Rakkestad',
  'Ramsøy',
  'Ranemsletta',
  'Raudeberg',
  'Raufoss',
  'Rausand',
  'Re',
  'Reine',
  'Reinsvoll',
  'Reipå',
  'Rena',
  'Renbygda',
  'Rensvik',
  'Revetal/Bergsåsen',
  'Rindal',
  'Ringebu',
  'Ringvol',
  'Ringvoll',
  'Risør',
  'Rjukan',
  'Roa',
  'Roald',
  'Rognan',
  'Romedal sentrum',
  'Rophus',
  'Rosendal',
  'Rossnes',
  'Rostadneset',
  'Rotnes',
  'Roverud',
  'Rubbestadneset',
  'Rykene',
  'Rypefjord',
  'Råholt',
  'Råkvågen',
  'Rød',
  'Rødberg',
  'Røldal',
  'Røn',
  'RøraStasjon',
  'Røros',
  'Rørvik',
  'Røstlandet',
  'Røyken',
  'Røyrvik',
  'Sagvåg',
  'Sand',
  'Sandane',
  'Sandbumoen',
  'Sande',
  'Sandefjord',
  'Sandeid',
  'Sander',
  'Sandnessjøen',
  'Sandve',
  'Sandvika',
  'Sandvoll',
  'Sandøya',
  'Sauda',
  'Segalstad bru',
  'Seimsdalen',
  'Seimsfoss',
  'Sekkingstad',
  'Selbekken',
  'Selje',
  'Seljord',
  'Selvik',
  'Sem',
  'Senjehopen',
  'Sessvollmoen',
  'Setermoen',
  'Sigerfjord',
  'Siggerud',
  'Siljan',
  'Silsand',
  'Silvalen',
  'Sira',
  'Sirevåg',
  'Sistranda',
  'Sjøholt',
  'Sjøvegan',
  'Skage',
  'Skarde',
  'Skarnes',
  'Skarpengland',
  'Skatval',
  'Skei',
  'Skei-Surnadalsøra',
  'Skeie',
  'Ski',
  'Skibotn',
  'Skiptvet',
  'Skivika',
  'Skjeberg',
  'Skjeggestadåsen',
  'Skjelnan',
  'Skjervøy',
  'Skjold',
  'Skjærhalden',
  'Skjønhaug',
  'Skodje',
  'Skoge/Møvik',
  'Skogmo',
  'Skogn',
  'Skogrand',
  'Skogsvågen',
  'Skomrak',
  'Skoppum',
  'Skotbu',
  'Skotselv',
  'Skotterud',
  'Skre',
  'Skreia',
  'Skudeneshavn',
  'Skulestadmoen',
  'Skytterhusfjellet',
  'Skålevik',
  'Skånevik',
  'Slemsrud',
  'Sletta',
  'Slettebrotane',
  'Slevik',
  'Slidre',
  'Slitu',
  'Slåttevik',
  'Smestad',
  'Småland',
  'Sneltvedt',
  'Snurråsen',
  'Snåsa',
  'Sogndalsfjøra',
  'Sokna',
  'Soknedal',
  'Solerød',
  'Solfjellsjyen',
  'Solsletta',
  'Sommarøy',
  'Sortland',
  'Sparbu',
  'Spetalen',
  'Spillum',
  'Spongdal',
  'Sponvika',
  'Spydeberg',
  'Stamsund',
  'Stange',
  'Stanghelle',
  'Stavanger/Sandnes',
  'Stavern',
  'Stavsjø',
  'Steinkjer',
  'Steinshamn',
  'Steinsåsen',
  'Steinvåg',
  'Stenebyen',
  'Stikkaåsen',
  'Stjørdalshalsen',
  'Stokke',
  'Stokmarknes',
  'Storbakken',
  'Stordal',
  'Storebø',
  'Storforshei',
  'Storsand',
  'Storslett',
  'Storsteinnes',
  'Storås',
  'Strand',
  'Stranda',
  'Straume',
  'Straumen',
  'Straumgjerde',
  'Stryn',
  'Strømsnes',
  'Støren',
  'Sulitjelma',
  'Sundbyfoss',
  'Sunde/Valen',
  'Sundgot',
  'Sundvollen',
  'Sunndalsøra',
  'Svalia',
  'Svarstad',
  'Sveggen',
  'Sveio',
  'Svelgen',
  'Svelvik',
  'Svene',
  'Svenevik',
  'Svennevik',
  'Sviland',
  'Svinndal',
  'Svolvær',
  'Svorkmo',
  'Svortland',
  'Svøo',
  'Sykkylven',
  'Sylling',
  'Sylte',
  'Sysle',
  'Sånum',
  'Såstadbråten',
  'Sæbøvik',
  'Sætre',
  'Søfteland',
  'Søgne',
  'Sønsterud',
  'Sørbygdafeltet',
  'Søre Øyane',
  'Sørkjosen',
  'Sørland',
  'Sørreisa',
  'Sørumsand',
  'Sørvågen',
  'Søvik',
  'Talvik',
  'TanaBru',
  'Tanem',
  'Tangen',
  'Tau',
  'Teigebyen',
  'Tennevoll',
  'Terråk',
  'Tingnes',
  'Tingvollvågen',
  'Tinn austbygd',
  'Tjøme',
  'Tjørvåg',
  'Toft',
  'Tofte',
  'Tolga',
  'Tomb',
  'Tomra',
  'Tomter',
  'Tomteråsen',
  'Tonstad',
  'Torget',
  'Torhaug',
  'Tornes',
  'Torpo',
  'Torsteinsvik',
  'Torvik',
  'Torvika',
  'Torvikbukt',
  'Tranby',
  'Trengereid',
  'Tretten',
  'Trofors',
  'Trolla',
  'Tromsdalen',
  'Tromsø',
  'Trondheim',
  'Trones',
  'Trøa',
  'Trømborg',
  'Tvedestrand',
  'Tveit',
  'Tveitsund',
  'Tverrelvdalen',
  'Tveteneåsen',
  'Tynset',
  'Tyristrand',
  'Tyssedal',
  'Tælavåg',
  'Tønsberg',
  'Ubergsmoen',
  'Uggdalseidet',
  'Ulefoss',
  'Ulsteinsvik',
  'Ulvik',
  'Undheim',
  'Uskedal',
  'Utgård',
  'Uthaug',
  'Vadfoss/Helle',
  'Vadsø',
  'Vaksdal',
  'Valestrandfossen',
  'Valle',
  'Vang',
  'Vangsvik',
  'Vangsåsen',
  'Vanse',
  'Vanvikan',
  'Vardø',
  'Varhaug',
  'Vassenden',
  'Vassøy',
  'Vatne',
  'Vear',
  'Veggli',
  'Velde',
  'Vennesla',
  'Verdalsøra',
  'Verningen',
  'Vestby',
  'Vestbygda',
  'Vestfossen',
  'Vestnes',
  'Vestre Jakobselv',
  'Vigeland',
  'Viggja',
  'Vigrestad',
  'Vik',
  'Vikavågen',
  'Vikebukt',
  'Vikebø',
  'Vikedal',
  'Vikersund',
  'Vikeså',
  'Vikevåg',
  'Viksøyri',
  'Vingnes',
  'Vingrom',
  'Vinstra',
  'Volda',
  'Voll',
  'Volleberg',
  'Vollen',
  'Vormsund',
  'Vossevangen',
  'Vuku',
  'Våge',
  'Vågsvåg',
  'Vågåmo',
  'Våk',
  'Våler',
  'Ydstebøhamn',
  'Yli',
  'YtreEnebakk',
  'Å i Åfjord',
  'Ådalsbruk',
  'Ågotnes',
  'Åkrehamn',
  'Åkrene',
  'Ål',
  'Ålesund',
  'Ålgård/Figgjo',
  'Ålvik',
  'Åmli',
  'Åmot',
  'Åmot/Geithus',
  'Åndalsnes',
  'Åneby',
  'Årdalstangen',
  'Årnes',
  'Årnset',
  'Åros',
  'Årset',
  'Årås',
  'Årøysund',
  'Ås',
  'Åsen',
  'Åsgrenda',
  'Åsgårdstrand',
  'Øksfjord',
  'Ølen',
  'Ølensvåg',
  'Ørje',
  'Ørnes',
  'Ørsta',
  'Østenstad',
  'Østhusvik',
  'Øverbø',
  'ØvreÅrdal',
  'Øye',
  'Øyenkilen',
  'Øyslebø',
]

export default places