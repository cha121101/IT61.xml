<?php
header('Access-Control-Allow-Origin: *');
// $xml = simplexml_load_file("anime.xml");


$datas = [
    "shonen" => [
        "title" => [
            "english" => "Attack on titan",
            "japanese" => "Shingeki no Kyojin"
        ],
        "season" => 4,
        "description" => "the story of Attack on Titan centers on a civilization inside three circular walls. According to the knowledge propagated locally, it is the last surviving vestige of human civilization. Its inhabitants, known as Eldians, have been led to believe that over one hundred years ago, humanity was driven to the brink of extinction after the emergence of humanoid giants called Titans, who attack and eat humans on sight. The last remnants of humanity retreated behind three concentric walls and enjoyed roughly a century of peace.",
        "author" => "Hajime Isayama",
        "genre" => [
            "Action", "Dark Fantacy", "Post-apocalyptic"
        ],
        "date_publish" => [
            "season_1" => "April 2013",
            "season_2" => "April 2017",
            "season_3" => [
                "part_1" => "July 2018",
                "part_2" => "April 2019"
            ],
            "season_4" => [
                "part_1" => "December 2020",
                "part_2" => "January 2022"
            ]
        ],
        "episode" => [
            "season_1" => 25,
            "season_2" => 12,
            "season_3" => [
                "part_1" => 12,
                "part_2" => 10
            ],
            "season_4" => [
                "part_1" => 16,
                "part_2" => 12
            ]
        ],
        "imgpath" => "img/aotposter.jpeg"
    ],
    "shojo" => [
        "title" => [
            "english" => "From Me to You",
            "japanese" => "Kimi ni Todoke"
        ],
        "season" => 2,
        "description" => "Known for her semblance to the Sadako character of The Ring series, Sawako Kuronuma is given the nickname Sadako and misunderstood to be frightening and malicious like her fictional counterpart, despite having a timid and sweet nature. Longing to make friends and live a normal life, Sawako is naturally drawn to the cheerful and friendly Shouta Kazehaya, the most popular boy in her class. From their first meeting, Sawako has admired Kazehaya's ability to be the center of attention and aspires to be like him.",
        "author" => "Karuho Shiina",
        "genre" => [
            "Coming of age", "Romantic comedy", "Slice of life"
        ],
        "date_publish" => [
            "season_1" => "June 2009",
            "season_2" => "Febuary 2011",
        ],
        "episode" => [
            "season_1" => 25,
            "season_2" => 13,

        ],
        "imgpath" => "img/from_me_to_youposter.jpg"
    ],
    "seinen" => [
        "title" => [
            "english" => "Bungo Stray Dogs",
            "japanese" => "Bungō Sutorei Doggusu"
        ],
        "season" => 4,
        "description" => "The show mainly focuses on the weretiger Atsushi Nakajima, who joins others gifted with supernatural powers to accomplish different tasks including running a business, solving mysteries, and carrying out missions assigned by the agency.",
        "author" => "Kafka Asagiri",
        "genre" => [
            "Action", "Mystery", "Supernatural"
        ],
        "date_publish" => [
            "season_1" => "March 2016",
            "season_2" => "October 2016",
            "season_3" => "April 2019",
            "season_4" => "January 2023",
        ],
        "episode" => [
            "season_1" => 12,
            "season_2" => 12,
            "season_3" => 12,
            "season_4" => 12,

        ],
        "imgpath" => "img/Bungo Stray Dogsposter.jpg"
    ],
    "josei" => [
        "title" => [
            "english" => "Honey and Clover ",
            "japanese" => "Hachimitsu to Clover"
        ],
        "season" => 1,
        "description" => " Yuuta Takemoto, a sophomore at an arts college, shares a cheap apartment with two seniors—the eccentric Shinobu Morita, who keeps failing to graduate due to his absenteeism, and the sensible Takumi Mayama, who acts as a proper senior to Takemoto, often looking out for him.",
        "author" => "Chisa umino",
        "genre" => [
            "Comedy", "Drama", "Romance"
        ],
        "date_publish" => [
            "season_1" => "April 2005",

        ],
        "episode" => [
            "season_1" => 24,

        ],
        "imgpath" => "img/Honey and Cloverposter.jpg"
    ],
    "kodomomuke" => [
        "title" => [
            "english" => "Doraemon",
            "japanese" => "Doraemon"
        ],
        "season" => 1,
        "description" => " The story revolves around an earless robotic cat named Doraemon, who travels back in time from the 22nd century to aid a boy named Nobita Nobi. ",
        "author" => "Fujiko F. Fujio",
        "genre" => [
            "Comedy", "Drama", "Romance"
        ],
        "date_publish" => [
            "season_1" => "April 1979",

        ],
        "episode" => [
            "season_1" => 1787,

        ],
        "imgpath" => "img/doraemonposter.jpg"
    ],


];


// print_r($xml) ;
$toJSON = json_encode($datas);
echo $toJSON;
