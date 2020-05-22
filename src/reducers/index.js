const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macerena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "25 Minutes Too Late", duration: "5:25" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
