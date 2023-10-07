

function cleanedSummary (summary) {
    let cleanSummary = [];
    for(let word of summary.split(' ')) {
        
        let iStart = word.indexOf('<');
        let iEnd = word.indexOf('>');
        if (iStart !== -1) {
            // we split the letters into an array, because 'splice' doesn't work on string.
            let arrayOfLetters = word.split('');
            word = arrayOfLetters;
            // remember that splice returns the removed items and that it mutates the array. We will utilize this by only calling it and then using the mutated array.
            word.splice(iStart, iEnd +1);
            word = word.join('');
        }
        cleanSummary.push(word);
    }
    return cleanSummary.join(' ');
}

let sumsum = `<p>A celebrity scandal can be the undoing of even the shiniest Hollywood star. But behind every famous death or downfall is a mess of destructive friends, unfortunate circumstances and bad choices that enable the crash. <b>Under the Influence</b> explores the bad influences that send celebrities down the wrong path. In each one-hour episode we investigate two infamous star scandals with a fresh perspective; looking at the negative influences and the contributing factors that lead to the wildest celebrity downfalls of all time.</p>`;
console.log(cleanedSummary(sumsum));;


[
    {
      "person": {
        "id": 578,
        "url": "https://www.tvmaze.com/people/578/grant-gustin",
        "name": "Grant Gustin",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1990-01-14",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/86/216652.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/86/216652.jpg"
        },
        "updated": 1695213866,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/578"
          }
        }
      },
      "character": {
        "id": 2293,
        "url": "https://www.tvmaze.com/characters/2293/the-flash-bartholomew-henry-barry-allen",
        "name": "Bartholomew Henry \"Barry\" Allen",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239388.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239388.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/2293"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2565,
        "url": "https://www.tvmaze.com/people/2565/candice-patton",
        "name": "Candice Patton",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1988-06-24",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/5942.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/5942.jpg"
        },
        "updated": 1684256111,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2565"
          }
        }
      },
      "character": {
        "id": 2294,
        "url": "https://www.tvmaze.com/characters/2294/the-flash-iris-ann-west-allen",
        "name": "Iris Ann West-Allen",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239392.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239392.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/2294"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 634,
        "url": "https://www.tvmaze.com/people/634/danielle-panabaker",
        "name": "Danielle Panabaker",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1987-09-19",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6033.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6033.jpg"
        },
        "updated": 1685049398,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/634"
          }
        }
      },
      "character": {
        "id": 277370,
        "url": "https://www.tvmaze.com/characters/277370/the-flash-caitlin-snow",
        "name": "Caitlin Snow",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239382.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239382.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/277370"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2568,
        "url": "https://www.tvmaze.com/people/2568/jesse-l-martin",
        "name": "Jesse L. Martin",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1969-01-18",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6036.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6036.jpg"
        },
        "updated": 1696317314,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2568"
          }
        }
      },
      "character": {
        "id": 2299,
        "url": "https://www.tvmaze.com/characters/2299/the-flash-joe-west",
        "name": "Joe West",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239391.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239391.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/2299"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 633,
        "url": "https://www.tvmaze.com/people/633/carlos-valdes",
        "name": "Carlos Valdés",
        "country": {
          "name": "Colombia",
          "code": "CO",
          "timezone": "America/Bogota"
        },
        "birthday": "1989-04-20",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/441/1103894.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/441/1103894.jpg"
        },
        "updated": 1679778535,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/633"
          }
        }
      },
      "character": {
        "id": 350048,
        "url": "https://www.tvmaze.com/characters/350048/the-flash-cisco-ramon",
        "name": "Cisco Ramon",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239389.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239389.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/350048"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 21593,
        "url": "https://www.tvmaze.com/people/21593/danielle-nicolet",
        "name": "Danielle Nicolet",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1973-11-24",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/11/29589.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/11/29589.jpg"
        },
        "updated": 1684256111,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/21593"
          }
        }
      },
      "character": {
        "id": 109414,
        "url": "https://www.tvmaze.com/characters/109414/the-flash-da-cecile-horton",
        "name": "DA Cecile Horton",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/37/93250.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/37/93250.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/109414"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 33775,
        "url": "https://www.tvmaze.com/people/33775/kayla-compton",
        "name": "Kayla Compton",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1990-02-03",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/446/1115547.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/446/1115547.jpg"
        },
        "updated": 1684256111,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/33775"
          }
        }
      },
      "character": {
        "id": 666156,
        "url": "https://www.tvmaze.com/characters/666156/the-flash-allegra-garcia",
        "name": "Allegra Garcia",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/226/565320.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/226/565320.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/666156"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2567,
        "url": "https://www.tvmaze.com/people/2567/tom-cavanagh",
        "name": "Tom Cavanagh",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1963-10-26",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6035.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6035.jpg"
        },
        "updated": 1696532658,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2567"
          }
        }
      },
      "character": {
        "id": 175145,
        "url": "https://www.tvmaze.com/characters/175145/the-flash-dr-harrison-wells",
        "name": "Dr. Harrison Wells",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239393.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239393.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/175145"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2567,
        "url": "https://www.tvmaze.com/people/2567/tom-cavanagh",
        "name": "Tom Cavanagh",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1963-10-26",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6035.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6035.jpg"
        },
        "updated": 1696532658,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2567"
          }
        }
      },
      "character": {
        "id": 199969,
        "url": "https://www.tvmaze.com/characters/199969/the-flash-dr-harrison-harry-wells-earth-2",
        "name": "Dr. Harrison \"Harry\" Wells / Earth-2",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239397.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239397.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/199969"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 192434,
        "url": "https://www.tvmaze.com/people/192434/brandon-mcknight",
        "name": "Brandon McKnight",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1990-09-22",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/214/536736.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/214/536736.jpg"
        },
        "updated": 1684256111,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/192434"
          }
        }
      },
      "character": {
        "id": 663927,
        "url": "https://www.tvmaze.com/characters/663927/the-flash-chester-p-runk",
        "name": "Chester P. Runk",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/226/565335.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/226/565335.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/663927"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 86920,
        "url": "https://www.tvmaze.com/people/86920/keiynan-lonsdale",
        "name": "Keiynan Lonsdale",
        "country": {
          "name": "Australia",
          "code": "AU",
          "timezone": "Australia/Sydney"
        },
        "birthday": "1991-12-19",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/160/401974.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/160/401974.jpg"
        },
        "updated": 1691787061,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/86920"
          }
        }
      },
      "character": {
        "id": 350047,
        "url": "https://www.tvmaze.com/characters/350047/the-flash-wallace-wally-west",
        "name": "Wallace \"Wally\" West",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239395.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239395.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/350047"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 36414,
        "url": "https://www.tvmaze.com/people/36414/hartley-sawyer",
        "name": "Hartley Sawyer",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1985-01-25",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/62/156166.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/62/156166.jpg"
        },
        "updated": 1547908381,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/36414"
          }
        }
      },
      "character": {
        "id": 469534,
        "url": "https://www.tvmaze.com/characters/469534/the-flash-ralph-dibny",
        "name": "Ralph Dibny",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/143/358728.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/143/358728.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/469534"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 33041,
        "url": "https://www.tvmaze.com/people/33041/jessica-parker-kennedy",
        "name": "Jessica Parker Kennedy",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1984-10-03",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/45/114820.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/45/114820.jpg"
        },
        "updated": 1684599839,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/33041"
          }
        }
      },
      "character": {
        "id": 500217,
        "url": "https://www.tvmaze.com/characters/500217/the-flash-nora-west-allen",
        "name": "Nora West-Allen",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/143/358733.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/143/358733.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/500217"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2566,
        "url": "https://www.tvmaze.com/people/2566/rick-cosnett",
        "name": "Rick Cosnett",
        "country": {
          "name": "Zimbabwe",
          "code": "ZW",
          "timezone": "Africa/Harare"
        },
        "birthday": "1983-04-06",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6032.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6032.jpg"
        },
        "updated": 1683767627,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2566"
          }
        }
      },
      "character": {
        "id": 175143,
        "url": "https://www.tvmaze.com/characters/175143/the-flash-eddie-thawne",
        "name": "Eddie Thawne",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239394.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239394.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/175143"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 634,
        "url": "https://www.tvmaze.com/people/634/danielle-panabaker",
        "name": "Danielle Panabaker",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1987-09-19",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6033.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6033.jpg"
        },
        "updated": 1685049398,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/634"
          }
        }
      },
      "character": {
        "id": 890079,
        "url": "https://www.tvmaze.com/characters/890079/the-flash-frost",
        "name": "Frost",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/341/852506.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/341/852506.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/890079"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2567,
        "url": "https://www.tvmaze.com/people/2567/tom-cavanagh",
        "name": "Tom Cavanagh",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1963-10-26",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6035.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6035.jpg"
        },
        "updated": 1696532658,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2567"
          }
        }
      },
      "character": {
        "id": 565481,
        "url": "https://www.tvmaze.com/characters/565481/the-flash-harrison-sherloque-wells",
        "name": "Harrison Sherloque Wells",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/171/429387.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/171/429387.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/565481"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2476,
        "url": "https://www.tvmaze.com/people/2476/jon-cor",
        "name": "Jon Cor",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1984-11-17",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/446/1115605.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/446/1115605.jpg"
        },
        "updated": 1684256111,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2476"
          }
        }
      },
      "character": {
        "id": 859928,
        "url": "https://www.tvmaze.com/characters/859928/the-flash-mark-blaine",
        "name": "Mark Blaine",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/308/770299.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/308/770299.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/859928"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2567,
        "url": "https://www.tvmaze.com/people/2567/tom-cavanagh",
        "name": "Tom Cavanagh",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1963-10-26",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6035.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6035.jpg"
        },
        "updated": 1696532658,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2567"
          }
        }
      },
      "character": {
        "id": 350046,
        "url": "https://www.tvmaze.com/characters/350046/the-flash-harrison-hr-wells-earth-19",
        "name": "Harrison \"H.R.\" Wells / Earth-19",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/239409.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/239409.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/350046"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 2567,
        "url": "https://www.tvmaze.com/people/2567/tom-cavanagh",
        "name": "Tom Cavanagh",
        "country": {
          "name": "Canada",
          "code": "CA",
          "timezone": "America/Halifax"
        },
        "birthday": "1963-10-26",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6035.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6035.jpg"
        },
        "updated": 1696532658,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/2567"
          }
        }
      },
      "character": {
        "id": 668431,
        "url": "https://www.tvmaze.com/characters/668431/the-flash-dr-harrison-nash-wells",
        "name": "Dr. Harrison Nash Wells",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/256/641805.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/256/641805.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/668431"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 38323,
        "url": "https://www.tvmaze.com/people/38323/chris-klein",
        "name": "Chris Klein",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1979-03-14",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/46/115567.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/46/115567.jpg"
        },
        "updated": 1690073186,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/38323"
          }
        }
      },
      "character": {
        "id": 543891,
        "url": "https://www.tvmaze.com/characters/543891/the-flash-cicada",
        "name": "Cicada",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/172/431594.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/172/431594.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/543891"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 26056,
        "url": "https://www.tvmaze.com/people/26056/neil-sandilands",
        "name": "Neil Sandilands",
        "country": {
          "name": "South Africa",
          "code": "ZA",
          "timezone": "Africa/Johannesburg"
        },
        "birthday": "1975-05-01",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/325/813978.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/325/813978.jpg"
        },
        "updated": 1682617125,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/26056"
          }
        }
      },
      "character": {
        "id": 468879,
        "url": "https://www.tvmaze.com/characters/468879/the-flash-the-thinker",
        "name": "The Thinker",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/169/424487.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/169/424487.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/468879"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 634,
        "url": "https://www.tvmaze.com/people/634/danielle-panabaker",
        "name": "Danielle Panabaker",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1987-09-19",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/2/6033.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/2/6033.jpg"
        },
        "updated": 1685049398,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/634"
          }
        }
      },
      "character": {
        "id": 1079799,
        "url": "https://www.tvmaze.com/characters/1079799/the-flash-khione",
        "name": "Khione",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/447/1117781.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/447/1117781.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/1079799"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 234889,
        "url": "https://www.tvmaze.com/people/234889/efrat-dor",
        "name": "Efrat Dor",
        "country": {
          "name": "Israel",
          "code": "IL",
          "timezone": "Asia/Jerusalem"
        },
        "birthday": "1983-01-06",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/242/605389.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/242/605389.jpg"
        },
        "updated": 1652294063,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/234889"
          }
        }
      },
      "character": {
        "id": 698154,
        "url": "https://www.tvmaze.com/characters/698154/the-flash-eva-mcculloch",
        "name": "Eva McCulloch",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/242/605387.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/242/605387.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/698154"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 10433,
        "url": "https://www.tvmaze.com/people/10433/lamonica-garrett",
        "name": "LaMonica Garrett",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1975-05-23",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/175/438444.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/175/438444.jpg"
        },
        "updated": 1693729773,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/10433"
          }
        }
      },
      "character": {
        "id": 574924,
        "url": "https://www.tvmaze.com/characters/574924/the-flash-the-monitor",
        "name": "The Monitor",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/175/439918.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/175/439918.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/574924"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 10433,
        "url": "https://www.tvmaze.com/people/10433/lamonica-garrett",
        "name": "LaMonica Garrett",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1975-05-23",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/175/438444.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/175/438444.jpg"
        },
        "updated": 1693729773,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/people/10433"
          }
        }
      },
      "character": {
        "id": 676993,
        "url": "https://www.tvmaze.com/characters/676993/the-flash-mobius-the-anti-monitor",
        "name": "Mobius / The Anti-Monitor",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/230/576812.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/230/576812.jpg"
        },
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/characters/676993"
          }
        }
      },
      "self": false,
      "voice": false
    }
  ]