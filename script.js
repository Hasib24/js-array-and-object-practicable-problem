// Problem 1 solved
let data1 = {
  Sofia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "abc primary school" },
          { location: "primary school location" },
        ],
      },
      {
        secondary: [
          { school_name: "abc Secondary school" },
          { location: "Secondary school location" },
        ],
      },
    ],
  },
};

// let sofia = data1.Sofia;
// let { id, study } = sofia;

// console.log(study[1].secondary[0].school_name);

// Problem 2 solved
let data = [
  {
    pHeroCourses: {
      "course-x": "web development",
    },
  },
  {
    pHeroCourses: {
      "course-y": "phitron",
    },
  },
  {
    pHeroCourses: {
      "course-z": "acc",
    },
  },
  {
    pHeroCourses: {
      "course-xyz": "level-2",
    },
    locationField: {
      "en-US": {
        lat: 19.28563,
        lon: 72.8691,
      },
    },
  },
];
// data.map((x)=>{
//     console.log(x.pHeroCourses["course-xyz"]);
// });

let { pHeroCourses, locationField } = data[data.length - 1];
let { lat, lon } = locationField["en-US"];
// // worked
// console.log(pHeroCourses["course-xyz"]);
// console.log(lon);

// Problem 3 solved
let activities = {
  activity1: [
    {
      name: "listen on spotify",
      song_list: {
        song_1: "abc",
        song_2: "bcd",
      },
      id: 1,
    },
    {
      name: "listen music through bot",
      song_list: {
        song_1: "wxy",
        song_2: "xyz",
      },
      id: 2,
    },
  ],
};

let { activity1 } = activities;

let songlist = activity1.map((arr) => {
  const { name, song_list, id } = arr;
  return song_list;
});
// console.log(songlist[0].song_1);
// console.log(songlist[1].song_2);
