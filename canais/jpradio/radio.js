/*!
 *  Howler.js Radio Demo
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

// Cache references to DOM elements.
var elms = ['station0', 'title0', 'live0', 'playing0', 'station1', 'title1', 'live1', 'playing1', 'station2', 'title2', 'live2', 'playing2', 'station3', 'title3', 'live3', 'playing3', 'station4', 'title4', 'live4', 'playing4', 'station5', 'title5', 'live5', 'playing5', 'station6', 'title6', 'live6', 'playing6', 'station7', 'title7', 'live7', 'playing7', 'station8', 'title8', 'live8', 'playing8', 'station9', 'title9', 'live9', 'playing9', 'station10', 'title10', 'live10', 'playing10', 'station11', 'title11', 'live11', 'playing11', 'station12', 'title12', 'live12', 'playing12', 'station13', 'title13', 'live13', 'playing13', 'station14', 'title14', 'live14', 'playing14', 'station15', 'title15', 'live15', 'playing15', 'station16', 'title16', 'live16', 'playing16', 'station17', 'title17', 'live17', 'playing17', 'station18', 'title18', 'live18', 'playing18', 'station19', 'title19', 'live19', 'playing19', 'station20', 'title20', 'live20', 'playing20','station21', 'title21', 'live21', 'playing21','station22', 'title22', 'live22', 'playing22','station23', 'title23', 'live23', 'playing23','station24', 'title24', 'live24', 'playing24','station25', 'title25', 'live25', 'playing25','station26', 'title26', 'live26', 'playing26','station27', 'title27', 'live27', 'playing27'];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

/**
 * Radio class containing the state of our stations.
 * Includes all methods for playing, stopping, etc.
 * @param {Array} stations Array of objects with station details ({title, src, howl, ...}).
 */
var Radio = function(stations) {
  var self = this;

  self.stations = stations;
  self.index = 0;
  
  // Setup the display for each station.
  for (var i=0; i<self.stations.length; i++) {
    window['title' + i].innerHTML = '<b>' + self.stations[i].freq + '</b> ' + self.stations[i].title;
    window['station' + i].addEventListener('click', function(index) {
      var isNotPlaying = (self.stations[index].howl && !self.stations[index].howl.playing());
      
      // Stop other sounds or the current one.
      radio.stop();

      // If the station isn't already playing or it doesn't exist, play it.
      if (isNotPlaying || !self.stations[index].howl) {
        radio.play(index);
      }
    }.bind(self, i));
  }
};
Radio.prototype = {
  /**
   * Play a station with a specific index.
   * @param  {Number} index Index in the array of stations.
   */
  play: function(index) {
    var self = this;
    var sound;

    index = typeof index === 'number' ? index : self.index;
    var data = self.stations[index];

    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: data.src,
        html5: true, // A live stream can only be played through HTML5 Audio.
        format: ['mp3', 'aac','aacp','m3u8']
      });
    }

    // Begin playing the sound.
    sound.play();

    // Toggle the display.
    self.toggleStationDisplay(index, true);

    // Keep track of the index we are currently playing.
    self.index = index;
  },

  /**
   * Stop a station's live stream.
   */
  stop: function() {
    var self = this;

    // Get the Howl we want to manipulate.
    var sound = self.stations[self.index].howl;

    // Toggle the display.
    self.toggleStationDisplay(self.index, false);

    // Stop the sound.
    if (sound) {
      sound.unload();
    }
  },

  /**
   * Toggle the display of a station to off/on.
   * @param  {Number} index Index of the station to toggle.
   * @param  {Boolean} state true is on and false is off.
   */
  toggleStationDisplay: function(index, state) {
    var self = this;

    // Highlight/un-highlight the row.
    window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';

    // Show/hide the "live" marker.
    window['live' + index].style.opacity = state ? 1 : 0;

    // Show/hide the "playing" animation.
    window['playing' + index].style.display = state ? 'block' : 'none';
  }
};

// Setup our new radio and pass in the stations.
var radio = new Radio([
  {
    freq: 'JP.M',
    title: "Top Hits",
    src: 'https://stream-59.zeno.fm/p3yys99taphvv?zs=YmiO2TgATMaHAKx7t057pw', // estação 0
    howl: null
  },
  {
    freq: 'JP.M',
    title: "Passado",
    src: 'https://stream-41.zeno.fm/2cgy8mzvsy8uv?zs=yo4PyEhfTWK29YRfVvNeWA.mp3', // estação 1
    howl: null
  },
  {
    freq: 'JP.M',
    title: "Pop Rock",
    src: 'https://stream-57.zeno.fm/9ts1tgxryhhvv?zs=cwpQYLFdTxmVOaOVAJ_rYQ&aw_0_req_lsid=1663871100546_0.44668418486659633&an-uid=8773777118362868920&triton-uid=cookie%3Ab9e998c5-ed73-45ba-983a-4fef71654a75.mp3', // estação 2
    howl: null
  },
  {
    freq: '95.1',
    title: "Rauland FM Belém",
    src: 'https://stm1.srvif.com:6672/streamhttps://hts02.kshost.com.br:8856/live', // estação 3
    howl: null
  },
  {
    freq: '1130',
    title: "Marajoara AM Belém",
    src: 'https://www.bravecenterhost.com:8020/stream', // estação 4
    howl: null
  },
  {
    freq: '690',
    title: "Clube AM Belém",
    src: 'https://carajas2.jmvstream.com/live', // estação 5
    howl: null
  },
  {
    freq: '95.9',
    title: "Liberdade FM Belém",
    src: 'https://s28.maxcast.com.br:8060/live', // estação 6
    howl: null
  },
  {
    freq: '',
    title: "Am Brasil Belém",
    src: 'https://s28.maxcast.com.br:8060/live', // estação 7
    howl: null
  },
  {
    freq: '88.5',
    title: "Amazônia FM Belém",
    src: 'https://s18.maxcast.com.br:8707/live', // estação 8
    howl: null
  },
  {
    freq: '94.3',
    title: "Metropolitana FM Belém",
    src: 'https://stm6.xcast.com.br:10616/stream', // estação 9
    howl: null
  },
  {
    freq: '87.5',
    title: "Sorriso FM Belém",
    src: 'https://stm1.streaminghd.net.br:7236//;stream.mp3', // estação 10
    howl: null
  },
  {
    freq: '90.5',
    title: "Roma FM Belém",
    src: 'https://www.bravecenterhost.com:8014/stream', // estação 11
    howl: null
  },
  {
    freq: 'web',
    title: "Amazônia Sonora Belém",
    src: 'https://stm9.xcast.com.br:12396/stream', // estação 12
    howl: null
  },
  {
    freq: '89.5',
    title: "Amazônia Viva FM Belém",
    src: 'https://s03.maxcast.com.br:8112/live', // estação 13
    howl: null
  },
  {
    freq: '91.9',
    title: "Boas Novas FM Belém",
    src: 'https://boasnovasaac.jmvstream.com/stream/;stream.mp3', // estação 14
    howl: null
  },
  {
    freq: 'Web',
    title: "Estação Metrópole Belém",
    src: 'https://azura11.w3bserver.com/radio/8150/radio.mp3', // estação 15
    howl: null
  },
  {
    freq: '87.5',
    title: " Belém FM",
    src: 'https://stm13.painelcast.com:7406/stream/;stream/1', // estação 16
    howl: null
  },
  {
    freq: '99.9',
    title: "99 FM Belém",
    src: 'https://hts02.kshost.com.br:8862/;stream/1', // estação 17
    howl: null
  },
  {
    freq: '',
    title: "RETRÔ LC MUSIC Belém",
    src: 'https://hts02.kshost.com.br:9362/live', // estação 18
    howl: null
  },
  {
    freq: '100.9',
    title: "Mix FM Belém",
    src: 'https://22823.live.streamtheworld.com/MIXFM_BELEMPARAAAC.aac', // estação 19
    howl: null
  },

  {
    freq: '92.9',
    title: "Diário FM Belém",
    src: 'https://hts02.kshost.com.br:8856/;stream/1', // estação 20
    howl: null
  },

  {
    freq: '',
    title: "Belém Mix",
    src: 'https://stm2.pousadavirtual.com.br:7158/;stream.mp3', // estação 21
    howl: null
  },
  {
    freq: '',
    title: "Itaparica FM Belém",
    src: 'https://stm9.mestrestream.xyz:7366//;stream.mp3', // estação 22
    howl: null
  },
  {
    freq: '98',
    title: "Energy Brasil FM Belém",
    src: 'https://azura11.w3bserver.com/listen/energy_brasil_fm/nrjbrasil_128kbps.mp3', // estação 23
    howl: null
  },
  {
    freq: '',
    title: "Super Amazônia Brasil",
    src: 'https://s11.maxcast.com.br:8050/live', // estação 24
    howl: null
  },

  {
    freq: '',
    title: "Manuzé Digital Belém",
    src: 'https://stream-174.zeno.fm/0zf97cv9uuhvv', // estação 25
    howl: null
  },
  {
    freq: '',
    title: "Belem FM Belém",
    src: 'https://sonicpanel.oficialserver.com/8110/stream', // estação 26
    howl: null
  },
  {
    freq: '',
    title: "Ras Reggae",
    src: 'https://stream-174.zeno.fm/bbh6u7w8gwzuv', // estação 27
    howl: null
  },

]);
