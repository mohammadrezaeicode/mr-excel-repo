function tc(_, P) {
  for (var t = 0; t < P.length; t++) {
    const S = P[t];
    if (typeof S != "string" && !Array.isArray(S)) {
      for (const b in S)
        if (b !== "default" && !(b in _)) {
          const l = Object.getOwnPropertyDescriptor(S, b);
          l && Object.defineProperty(_, b, l.get ? l : {
            enumerable: !0,
            get: () => S[b]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
function Qo(_) {
  return _.replace(/ /g, "");
}
function lc(_) {
  var P = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_);
  return P ? [
    parseInt(P[1], 16),
    parseInt(P[2], 16),
    parseInt(P[3], 16)
  ] : [0, 0, 0];
}
function Vo(_) {
  const P = lc(_);
  return P == null ? void 0 : (0.299 * P[0] + 0.587 * P[1] + 0.114 * P[2]) / 255 > 0.5 ? "rgb(0,0,0)" : "rgb(255,255,255)";
}
function Go(_) {
  var P = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_);
  return P ? "rgb(" + (255 - parseInt(P[1], 16)) + "," + (255 - parseInt(P[2], 16)) + "," + (255 - parseInt(P[3], 16)) + ")" : "rgb(0,0,0)";
}
function No(_) {
  _ = Number(_);
  var P = _.toString(16);
  return P.length == 1 ? "0" + P : P;
}
function Fo(_) {
  _ = Qo(_);
  let P = _.indexOf("rgba") >= 0 ? _.substring(5, _.length - 1).split(",") : _.substring(4, _.length - 1).split(","), t = P.reduce((S, b) => S && !Number.isNaN(Number(b)), !0);
  return P.length == 4 && P[3] == "0" || !t ? null : (No(P[0]) + No(P[1]) + No(P[2])).toUpperCase();
}
function Eo(_, P) {
  if (typeof _ > "u" || _ === null)
    return null;
  if (!P) {
    let t = Qo(_);
    t.indexOf("var(") == 0 && t.lastIndexOf(")") == t.length - 1 && (t = t.substring(4, t.length - 1), _ = getComputedStyle(document.documentElement).getPropertyValue(
      t
    ));
  }
  if (_.indexOf("rgb") >= 0) {
    const t = Fo(_);
    _ = t || "";
  }
  return _.replace("#", "");
}
const Ko = [
  {
    color1: "222831",
    color2: "393e46",
    color3: "00adb5",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/222831393e4600adb5eeeeee"
  },
  {
    color1: "e3fdfd",
    color2: "cbf1f5",
    color3: "a6e3e9",
    color4: "71c9ce",
    url: "https://colorhunt.co/palette/e3fdfdcbf1f5a6e3e971c9ce"
  },
  {
    color1: "ffc7c7",
    color2: "ffe2e2",
    color3: "f6f6f6",
    color4: "8785a2",
    url: "https://colorhunt.co/palette/ffc7c7ffe2e2f6f6f68785a2"
  },
  {
    color1: "f9ed69",
    color2: "f08a5d",
    color3: "b83b5e",
    color4: "6a2c70",
    url: "https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70"
  },
  {
    color1: "f9f7f7",
    color2: "dbe2ef",
    color3: "3f72af",
    color4: "112d4e",
    url: "https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e"
  },
  {
    color1: "08d9d6",
    color2: "252a34",
    color3: "ff2e63",
    color4: "eaeaea",
    url: "https://colorhunt.co/palette/08d9d6252a34ff2e63eaeaea"
  },
  {
    color1: "f38181",
    color2: "fce38a",
    color3: "eaffd0",
    color4: "95e1d3",
    url: "https://colorhunt.co/palette/f38181fce38aeaffd095e1d3"
  },
  {
    color1: "f4eeff",
    color2: "dcd6f7",
    color3: "a6b1e1",
    color4: "424874",
    url: "https://colorhunt.co/palette/f4eeffdcd6f7a6b1e1424874"
  },
  {
    color1: "fff5e4",
    color2: "ffe3e1",
    color3: "ffd1d1",
    color4: "ff9494",
    url: "https://colorhunt.co/palette/fff5e4ffe3e1ffd1d1ff9494"
  },
  {
    color1: "a8d8ea",
    color2: "aa96da",
    color3: "fcbad3",
    color4: "ffffd2",
    url: "https://colorhunt.co/palette/a8d8eaaa96dafcbad3ffffd2"
  },
  {
    color1: "ad8b73",
    color2: "ceab93",
    color3: "e3caa5",
    color4: "fffbe9",
    url: "https://colorhunt.co/palette/ad8b73ceab93e3caa5fffbe9"
  },
  {
    color1: "ffb6b9",
    color2: "fae3d9",
    color3: "bbded6",
    color4: "61c0bf",
    url: "https://colorhunt.co/palette/ffb6b9fae3d9bbded661c0bf"
  },
  {
    color1: "1b262c",
    color2: "0f4c75",
    color3: "3282b8",
    color4: "bbe1fa",
    url: "https://colorhunt.co/palette/1b262c0f4c753282b8bbe1fa"
  },
  {
    color1: "b7c4cf",
    color2: "eee3cb",
    color3: "d7c0ae",
    color4: "967e76",
    url: "https://colorhunt.co/palette/b7c4cfeee3cbd7c0ae967e76"
  },
  {
    color1: "364f6b",
    color2: "3fc1c9",
    color3: "f5f5f5",
    color4: "fc5185",
    url: "https://colorhunt.co/palette/364f6b3fc1c9f5f5f5fc5185"
  },
  {
    color1: "b1b2ff",
    color2: "aac4ff",
    color3: "d2daff",
    color4: "eef1ff",
    url: "https://colorhunt.co/palette/b1b2ffaac4ffd2daffeef1ff"
  },
  {
    color1: "defcf9",
    color2: "cadefc",
    color3: "c3bef0",
    color4: "cca8e9",
    url: "https://colorhunt.co/palette/defcf9cadefcc3bef0cca8e9"
  },
  {
    color1: "7d5a50",
    color2: "b4846c",
    color3: "e5b299",
    color4: "fcdec0",
    url: "https://colorhunt.co/palette/7d5a50b4846ce5b299fcdec0"
  },
  {
    color1: "fcd1d1",
    color2: "ece2e1",
    color3: "d3e0dc",
    color4: "aee1e1",
    url: "https://colorhunt.co/palette/fcd1d1ece2e1d3e0dcaee1e1"
  },
  {
    color1: "f8ede3",
    color2: "bdd2b6",
    color3: "a2b29f",
    color4: "798777",
    url: "https://colorhunt.co/palette/f8ede3bdd2b6a2b29f798777"
  },
  {
    color1: "ffeddb",
    color2: "edcdbb",
    color3: "e3b7a0",
    color4: "bf9270",
    url: "https://colorhunt.co/palette/ffeddbedcdbbe3b7a0bf9270"
  },
  {
    color1: "f67280",
    color2: "c06c84",
    color3: "6c5b7b",
    color4: "355c7d",
    url: "https://colorhunt.co/palette/f67280c06c846c5b7b355c7d"
  },
  {
    color1: "e4f9f5",
    color2: "30e3ca",
    color3: "11999e",
    color4: "40514e",
    url: "https://colorhunt.co/palette/e4f9f530e3ca11999e40514e"
  },
  {
    color1: "f5efe6",
    color2: "e8dfca",
    color3: "aebdca",
    color4: "7895b2",
    url: "https://colorhunt.co/palette/f5efe6e8dfcaaebdca7895b2"
  },
  {
    color1: "2b2e4a",
    color2: "e84545",
    color3: "903749",
    color4: "53354a",
    url: "https://colorhunt.co/palette/2b2e4ae8454590374953354a"
  },
  {
    color1: "fff8ea",
    color2: "9e7676",
    color3: "815b5b",
    color4: "594545",
    url: "https://colorhunt.co/palette/fff8ea9e7676815b5b594545"
  },
  {
    color1: "fcd8d4",
    color2: "fdf6f0",
    color3: "f8e2cf",
    color4: "f5c6aa",
    url: "https://colorhunt.co/palette/fcd8d4fdf6f0f8e2cff5c6aa"
  },
  {
    color1: "212121",
    color2: "323232",
    color3: "0d7377",
    color4: "14ffec",
    url: "https://colorhunt.co/palette/2121213232320d737714ffec"
  },
  {
    color1: "f7fbfc",
    color2: "d6e6f2",
    color3: "b9d7ea",
    color4: "769fcd",
    url: "https://colorhunt.co/palette/f7fbfcd6e6f2b9d7ea769fcd"
  },
  {
    color1: "bad7df",
    color2: "ffe2e2",
    color3: "f6f6f6",
    color4: "99ddcc",
    url: "https://colorhunt.co/palette/bad7dfffe2e2f6f6f699ddcc"
  },
  {
    color1: "f8ede3",
    color2: "dfd3c3",
    color3: "d0b8a8",
    color4: "7d6e83",
    url: "https://colorhunt.co/palette/f8ede3dfd3c3d0b8a87d6e83"
  },
  {
    color1: "6096b4",
    color2: "93bfcf",
    color3: "bdcdd6",
    color4: "eee9da",
    url: "https://colorhunt.co/palette/6096b493bfcfbdcdd6eee9da"
  },
  {
    color1: "fdefef",
    color2: "f4dfd0",
    color3: "dad0c2",
    color4: "cdbba7",
    url: "https://colorhunt.co/palette/fdefeff4dfd0dad0c2cdbba7"
  },
  {
    color1: "e23e57",
    color2: "88304e",
    color3: "522546",
    color4: "311d3f",
    url: "https://colorhunt.co/palette/e23e5788304e522546311d3f"
  },
  {
    color1: "ffd5cd",
    color2: "efbbcf",
    color3: "c3aed6",
    color4: "8675a9",
    url: "https://colorhunt.co/palette/ffd5cdefbbcfc3aed68675a9"
  },
  {
    color1: "ffe6e6",
    color2: "f2d1d1",
    color3: "daeaf1",
    color4: "c6dce4",
    url: "https://colorhunt.co/palette/ffe6e6f2d1d1daeaf1c6dce4"
  },
  {
    color1: "ffcfdf",
    color2: "fefdca",
    color3: "e0f9b5",
    color4: "a5dee5",
    url: "https://colorhunt.co/palette/ffcfdffefdcae0f9b5a5dee5"
  },
  {
    color1: "f6f6f6",
    color2: "ffe2e2",
    color3: "ffc7c7",
    color4: "aaaaaa",
    url: "https://colorhunt.co/palette/f6f6f6ffe2e2ffc7c7aaaaaa"
  },
  {
    color1: "93b5c6",
    color2: "c9ccd5",
    color3: "e4d8dc",
    color4: "ffe3e3",
    url: "https://colorhunt.co/palette/93b5c6c9ccd5e4d8dcffe3e3"
  },
  {
    color1: "fefcf3",
    color2: "f5ebe0",
    color3: "f0dbdb",
    color4: "dba39a",
    url: "https://colorhunt.co/palette/fefcf3f5ebe0f0dbdbdba39a"
  },
  {
    color1: "fef5ed",
    color2: "d3e4cd",
    color3: "adc2a9",
    color4: "99a799",
    url: "https://colorhunt.co/palette/fef5edd3e4cdadc2a999a799"
  },
  {
    color1: "2c3639",
    color2: "3f4e4f",
    color3: "a27b5c",
    color4: "dcd7c9",
    url: "https://colorhunt.co/palette/2c36393f4e4fa27b5cdcd7c9"
  },
  {
    color1: "ff9292",
    color2: "ffb4b4",
    color3: "ffdcdc",
    color4: "ffe8e8",
    url: "https://colorhunt.co/palette/ff9292ffb4b4ffdcdcffe8e8"
  },
  {
    color1: "f0f5f9",
    color2: "c9d6df",
    color3: "52616b",
    color4: "1e2022",
    url: "https://colorhunt.co/palette/f0f5f9c9d6df52616b1e2022"
  },
  {
    color1: "00b8a9",
    color2: "f8f3d4",
    color3: "f6416c",
    color4: "ffde7d",
    url: "https://colorhunt.co/palette/00b8a9f8f3d4f6416cffde7d"
  },
  {
    color1: "8d7b68",
    color2: "a4907c",
    color3: "c8b6a6",
    color4: "f1dec9",
    url: "https://colorhunt.co/palette/8d7b68a4907cc8b6a6f1dec9"
  },
  {
    color1: "a8e6cf",
    color2: "dcedc1",
    color3: "ffd3b6",
    color4: "ffaaa5",
    url: "https://colorhunt.co/palette/a8e6cfdcedc1ffd3b6ffaaa5"
  },
  {
    color1: "edf1d6",
    color2: "9dc08b",
    color3: "609966",
    color4: "40513b",
    url: "https://colorhunt.co/palette/edf1d69dc08b60996640513b"
  },
  {
    color1: "feffde",
    color2: "ddffbc",
    color3: "91c788",
    color4: "52734d",
    url: "https://colorhunt.co/palette/feffdeddffbc91c78852734d"
  },
  {
    color1: "be9fe1",
    color2: "c9b6e4",
    color3: "e1ccec",
    color4: "f1f1f6",
    url: "https://colorhunt.co/palette/be9fe1c9b6e4e1ccecf1f1f6"
  },
  {
    color1: "b5eaea",
    color2: "edf6e5",
    color3: "ffbcbc",
    color4: "f38ba0",
    url: "https://colorhunt.co/palette/b5eaeaedf6e5ffbcbcf38ba0"
  },
  {
    color1: "2d4059",
    color2: "ea5455",
    color3: "f07b3f",
    color4: "ffd460",
    url: "https://colorhunt.co/palette/2d4059ea5455f07b3fffd460"
  },
  {
    color1: "fcf8e8",
    color2: "d4e2d4",
    color3: "ecb390",
    color4: "df7861",
    url: "https://colorhunt.co/palette/fcf8e8d4e2d4ecb390df7861"
  },
  {
    color1: "a0937d",
    color2: "e7d4b5",
    color3: "f6e6cb",
    color4: "e3cdc1",
    url: "https://colorhunt.co/palette/a0937de7d4b5f6e6cbe3cdc1"
  },
  {
    color1: "f2d7d9",
    color2: "d3cedf",
    color3: "9cb4cc",
    color4: "748da6",
    url: "https://colorhunt.co/palette/f2d7d9d3cedf9cb4cc748da6"
  },
  {
    color1: "f0ebe3",
    color2: "e4dccf",
    color3: "7d9d9c",
    color4: "576f72",
    url: "https://colorhunt.co/palette/f0ebe3e4dccf7d9d9c576f72"
  },
  {
    color1: "7d5a5a",
    color2: "f1d1d1",
    color3: "f3e1e1",
    color4: "faf2f2",
    url: "https://colorhunt.co/palette/7d5a5af1d1d1f3e1e1faf2f2"
  },
  {
    color1: "fff5e4",
    color2: "ffc4c4",
    color3: "ee6983",
    color4: "850e35",
    url: "https://colorhunt.co/palette/fff5e4ffc4c4ee6983850e35"
  },
  {
    color1: "ffc8c8",
    color2: "ff9999",
    color3: "444f5a",
    color4: "3e4149",
    url: "https://colorhunt.co/palette/ffc8c8ff9999444f5a3e4149"
  },
  {
    color1: "48466d",
    color2: "3d84a8",
    color3: "46cdcf",
    color4: "abedd8",
    url: "https://colorhunt.co/palette/48466d3d84a846cdcfabedd8"
  },
  {
    color1: "98ddca",
    color2: "d5ecc2",
    color3: "ffd3b4",
    color4: "ffaaa7",
    url: "https://colorhunt.co/palette/98ddcad5ecc2ffd3b4ffaaa7"
  },
  {
    color1: "faf3e0",
    color2: "eabf9f",
    color3: "b68973",
    color4: "1e212d",
    url: "https://colorhunt.co/palette/faf3e0eabf9fb689731e212d"
  },
  {
    color1: "968c83",
    color2: "d6d2c4",
    color3: "fff5ea",
    color4: "f7dad9",
    url: "https://colorhunt.co/palette/968c83d6d2c4fff5eaf7dad9"
  },
  {
    color1: "cdf0ea",
    color2: "f9f9f9",
    color3: "f7dbf0",
    color4: "beaee2",
    url: "https://colorhunt.co/palette/cdf0eaf9f9f9f7dbf0beaee2"
  },
  {
    color1: "2c3333",
    color2: "395b64",
    color3: "a5c9ca",
    color4: "e7f6f2",
    url: "https://colorhunt.co/palette/2c3333395b64a5c9cae7f6f2"
  },
  {
    color1: "999b84",
    color2: "d8ac9c",
    color3: "efd9d1",
    color4: "f4eeed",
    url: "https://colorhunt.co/palette/999b84d8ac9cefd9d1f4eeed"
  },
  {
    color1: "142850",
    color2: "27496d",
    color3: "0c7b93",
    color4: "00a8cc",
    url: "https://colorhunt.co/palette/14285027496d0c7b9300a8cc"
  },
  {
    color1: "e5d9b6",
    color2: "a4be7b",
    color3: "5f8d4e",
    color4: "285430",
    url: "https://colorhunt.co/palette/e5d9b6a4be7b5f8d4e285430"
  },
  {
    color1: "a75d5d",
    color2: "d3756b",
    color3: "f0997d",
    color4: "ffc3a1",
    url: "https://colorhunt.co/palette/a75d5dd3756bf0997dffc3a1"
  },
  {
    color1: "f5e8c7",
    color2: "deba9d",
    color3: "9e7777",
    color4: "6f4c5b",
    url: "https://colorhunt.co/palette/f5e8c7deba9d9e77776f4c5b"
  },
  {
    color1: "a1eafb",
    color2: "fdfdfd",
    color3: "ffcef3",
    color4: "cabbe9",
    url: "https://colorhunt.co/palette/a1eafbfdfdfdffcef3cabbe9"
  },
  {
    color1: "3ec1d3",
    color2: "f6f7d7",
    color3: "ff9a00",
    color4: "ff165d",
    url: "https://colorhunt.co/palette/3ec1d3f6f7d7ff9a00ff165d"
  },
  {
    color1: "eac7c7",
    color2: "a0c3d2",
    color3: "f7f5eb",
    color4: "eae0da",
    url: "https://colorhunt.co/palette/eac7c7a0c3d2f7f5ebeae0da"
  },
  {
    color1: "5f7161",
    color2: "6d8b74",
    color3: "efead8",
    color4: "d0c9c0",
    url: "https://colorhunt.co/palette/5f71616d8b74efead8d0c9c0"
  },
  {
    color1: "def5e5",
    color2: "bcead5",
    color3: "9ed5c5",
    color4: "8ec3b0",
    url: "https://colorhunt.co/palette/def5e5bcead59ed5c58ec3b0"
  },
  {
    color1: "1fab89",
    color2: "62d2a2",
    color3: "9df3c4",
    color4: "d7fbe8",
    url: "https://colorhunt.co/palette/1fab8962d2a29df3c4d7fbe8"
  },
  {
    color1: "fdffbc",
    color2: "ffeebb",
    color3: "ffdcb8",
    color4: "ffc1b6",
    url: "https://colorhunt.co/palette/fdffbcffeebbffdcb8ffc1b6"
  },
  {
    color1: "ffe8df",
    color2: "ffffff",
    color3: "f0f0f0",
    color4: "888888",
    url: "https://colorhunt.co/palette/ffe8dffffffff0f0f0888888"
  },
  {
    color1: "ffb6b9",
    color2: "fae3d9",
    color3: "bbded6",
    color4: "8ac6d1",
    url: "https://colorhunt.co/palette/ffb6b9fae3d9bbded68ac6d1"
  },
  {
    color1: "f8ede3",
    color2: "dfd3c3",
    color3: "d0b8a8",
    color4: "85586f",
    url: "https://colorhunt.co/palette/f8ede3dfd3c3d0b8a885586f"
  },
  {
    color1: "87805e",
    color2: "b09b71",
    color3: "d8cca3",
    color4: "eddfb3",
    url: "https://colorhunt.co/palette/87805eb09b71d8cca3eddfb3"
  },
  {
    color1: "f0ece3",
    color2: "dfd3c3",
    color3: "c7b198",
    color4: "596e79",
    url: "https://colorhunt.co/palette/f0ece3dfd3c3c7b198596e79"
  },
  {
    color1: "f9ecec",
    color2: "f0d9da",
    color3: "c8d9eb",
    color4: "ecf2f9",
    url: "https://colorhunt.co/palette/f9ececf0d9dac8d9ebecf2f9"
  },
  {
    color1: "867070",
    color2: "d5b4b4",
    color3: "e4d0d0",
    color4: "f5ebeb",
    url: "https://colorhunt.co/palette/867070d5b4b4e4d0d0f5ebeb"
  },
  {
    color1: "753422",
    color2: "b05b3b",
    color3: "d79771",
    color4: "ffebc9",
    url: "https://colorhunt.co/palette/753422b05b3bd79771ffebc9"
  },
  {
    color1: "3c6255",
    color2: "61876e",
    color3: "a6bb8d",
    color4: "eae7b1",
    url: "https://colorhunt.co/palette/3c625561876ea6bb8deae7b1"
  },
  {
    color1: "ffbbcc",
    color2: "ffcccc",
    color3: "ffddcc",
    color4: "ffeecc",
    url: "https://colorhunt.co/palette/ffbbccffccccffddccffeecc"
  },
  {
    color1: "fdeedc",
    color2: "ffd8a9",
    color3: "f1a661",
    color4: "e38b29",
    url: "https://colorhunt.co/palette/fdeedcffd8a9f1a661e38b29"
  },
  {
    color1: "f4f4f2",
    color2: "e8e8e8",
    color3: "bbbfca",
    color4: "495464",
    url: "https://colorhunt.co/palette/f4f4f2e8e8e8bbbfca495464"
  },
  {
    color1: "557571",
    color2: "d49a89",
    color3: "f7d1ba",
    color4: "f4f4f4",
    url: "https://colorhunt.co/palette/557571d49a89f7d1baf4f4f4"
  },
  {
    color1: "000000",
    color2: "52057b",
    color3: "892cdc",
    color4: "bc6ff1",
    url: "https://colorhunt.co/palette/00000052057b892cdcbc6ff1"
  },
  {
    color1: "ea907a",
    color2: "fbc687",
    color3: "f4f7c5",
    color4: "aacdbe",
    url: "https://colorhunt.co/palette/ea907afbc687f4f7c5aacdbe"
  },
  {
    color1: "fcf5ee",
    color2: "fbe8e7",
    color3: "f7ddde",
    color4: "ffc4d0",
    url: "https://colorhunt.co/palette/fcf5eefbe8e7f7dddeffc4d0"
  },
  {
    color1: "000000",
    color2: "3d0000",
    color3: "950101",
    color4: "ff0000",
    url: "https://colorhunt.co/palette/0000003d0000950101ff0000"
  },
  {
    color1: "d4a5a5",
    color2: "ffecda",
    color3: "f9ffea",
    color4: "a6d0e4",
    url: "https://colorhunt.co/palette/d4a5a5ffecdaf9ffeaa6d0e4"
  },
  {
    color1: "f5eee6",
    color2: "f3d7ca",
    color3: "e6a4b4",
    color4: "c86b85",
    url: "https://colorhunt.co/palette/f5eee6f3d7cae6a4b4c86b85"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "ffd369",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/222831393e46ffd369eeeeee"
  },
  {
    color1: "ffb6b6",
    color2: "fde2e2",
    color3: "aacfcf",
    color4: "679b9b",
    url: "https://colorhunt.co/palette/ffb6b6fde2e2aacfcf679b9b"
  },
  {
    color1: "f39189",
    color2: "bb8082",
    color3: "6e7582",
    color4: "046582",
    url: "https://colorhunt.co/palette/f39189bb80826e7582046582"
  },
  {
    color1: "dff4f3",
    color2: "dde7f2",
    color3: "b9bbdf",
    color4: "878ecd",
    url: "https://colorhunt.co/palette/dff4f3dde7f2b9bbdf878ecd"
  },
  {
    color1: "f4f9f9",
    color2: "ccf2f4",
    color3: "a4ebf3",
    color4: "aaaaaa",
    url: "https://colorhunt.co/palette/f4f9f9ccf2f4a4ebf3aaaaaa"
  },
  {
    color1: "395144",
    color2: "4e6c50",
    color3: "aa8b56",
    color4: "f0ebce",
    url: "https://colorhunt.co/palette/3951444e6c50aa8b56f0ebce"
  },
  {
    color1: "fff5eb",
    color2: "deedf0",
    color3: "f4c7ab",
    color4: "b2b8a3",
    url: "https://colorhunt.co/palette/fff5ebdeedf0f4c7abb2b8a3"
  },
  {
    color1: "f1f6f9",
    color2: "14274e",
    color3: "394867",
    color4: "9ba4b4",
    url: "https://colorhunt.co/palette/f1f6f914274e3948679ba4b4"
  },
  {
    color1: "8e806a",
    color2: "c3b091",
    color3: "e4cda7",
    color4: "ffe6bc",
    url: "https://colorhunt.co/palette/8e806ac3b091e4cda7ffe6bc"
  },
  {
    color1: "fef7dc",
    color2: "e6ddc6",
    color3: "c2b8a3",
    color4: "a19882",
    url: "https://colorhunt.co/palette/fef7dce6ddc6c2b8a3a19882"
  },
  {
    color1: "ffd4d4",
    color2: "ffffe8",
    color3: "cde990",
    color4: "aacb73",
    url: "https://colorhunt.co/palette/ffd4d4ffffe8cde990aacb73"
  },
  {
    color1: "f6f5f5",
    color2: "d3e0ea",
    color3: "1687a7",
    color4: "276678",
    url: "https://colorhunt.co/palette/f6f5f5d3e0ea1687a7276678"
  },
  {
    color1: "ccd5ae",
    color2: "e9edc9",
    color3: "fefae0",
    color4: "faedcd",
    url: "https://colorhunt.co/palette/ccd5aee9edc9fefae0faedcd"
  },
  {
    color1: "0a2647",
    color2: "144272",
    color3: "205295",
    color4: "2c74b3",
    url: "https://colorhunt.co/palette/0a26471442722052952c74b3"
  },
  {
    color1: "557153",
    color2: "7d8f69",
    color3: "a9af7e",
    color4: "e6e5a3",
    url: "https://colorhunt.co/palette/5571537d8f69a9af7ee6e5a3"
  },
  {
    color1: "645caa",
    color2: "a084ca",
    color3: "bface0",
    color4: "ebc7e8",
    url: "https://colorhunt.co/palette/645caaa084cabface0ebc7e8"
  },
  {
    color1: "ffb9b9",
    color2: "ffddd2",
    color3: "ffacc7",
    color4: "ff8dc7",
    url: "https://colorhunt.co/palette/ffb9b9ffddd2ffacc7ff8dc7"
  },
  {
    color1: "fbf0f0",
    color2: "dfd3d3",
    color3: "b8b0b0",
    color4: "7c7575",
    url: "https://colorhunt.co/palette/fbf0f0dfd3d3b8b0b07c7575"
  },
  {
    color1: "303841",
    color2: "00adb5",
    color3: "eeeeee",
    color4: "ff5722",
    url: "https://colorhunt.co/palette/30384100adb5eeeeeeff5722"
  },
  {
    color1: "f3f1f5",
    color2: "f0d9ff",
    color3: "bfa2db",
    color4: "7f7c82",
    url: "https://colorhunt.co/palette/f3f1f5f0d9ffbfa2db7f7c82"
  },
  {
    color1: "dddddd",
    color2: "222831",
    color3: "30475e",
    color4: "f05454",
    url: "https://colorhunt.co/palette/dddddd22283130475ef05454"
  },
  {
    color1: "fcecdd",
    color2: "ffc288",
    color3: "fea82f",
    color4: "ff6701",
    url: "https://colorhunt.co/palette/fcecddffc288fea82fff6701"
  },
  {
    color1: "faf8f1",
    color2: "faeab1",
    color3: "e5ba73",
    color4: "c58940",
    url: "https://colorhunt.co/palette/faf8f1faeab1e5ba73c58940"
  },
  {
    color1: "f3c5c5",
    color2: "c1a3a3",
    color3: "886f6f",
    color4: "694e4e",
    url: "https://colorhunt.co/palette/f3c5c5c1a3a3886f6f694e4e"
  },
  {
    color1: "caf7e3",
    color2: "edffec",
    color3: "f6dfeb",
    color4: "e4bad4",
    url: "https://colorhunt.co/palette/caf7e3edffecf6dfebe4bad4"
  },
  {
    color1: "698474",
    color2: "889e81",
    color3: "bac7a7",
    color4: "e5e4cc",
    url: "https://colorhunt.co/palette/698474889e81bac7a7e5e4cc"
  },
  {
    color1: "f9f5f6",
    color2: "f8e8ee",
    color3: "fdcedf",
    color4: "f2bed1",
    url: "https://colorhunt.co/palette/f9f5f6f8e8eefdcedff2bed1"
  },
  {
    color1: "838383",
    color2: "ad9d9d",
    color3: "d9adad",
    color4: "fccbcb",
    url: "https://colorhunt.co/palette/838383ad9d9dd9adadfccbcb"
  },
  {
    color1: "d9e4dd",
    color2: "fbf7f0",
    color3: "cdc9c3",
    color4: "555555",
    url: "https://colorhunt.co/palette/d9e4ddfbf7f0cdc9c3555555"
  },
  {
    color1: "ffd5e5",
    color2: "ffffdd",
    color3: "a0ffe6",
    color4: "81f5ff",
    url: "https://colorhunt.co/palette/ffd5e5ffffdda0ffe681f5ff"
  },
  {
    color1: "937dc2",
    color2: "c689c6",
    color3: "ffabe1",
    color4: "ffe6f7",
    url: "https://colorhunt.co/palette/937dc2c689c6ffabe1ffe6f7"
  },
  {
    color1: "ccd6a6",
    color2: "dae2b6",
    color3: "f4ead5",
    color4: "fffbe9",
    url: "https://colorhunt.co/palette/ccd6a6dae2b6f4ead5fffbe9"
  },
  {
    color1: "876445",
    color2: "ca965c",
    color3: "eec373",
    color4: "f4dfba",
    url: "https://colorhunt.co/palette/876445ca965ceec373f4dfba"
  },
  {
    color1: "e5e3c9",
    color2: "b4cfb0",
    color3: "94b49f",
    color4: "789395",
    url: "https://colorhunt.co/palette/e5e3c9b4cfb094b49f789395"
  },
  {
    color1: "155263",
    color2: "ff6f3c",
    color3: "ff9a3c",
    color4: "ffc93c",
    url: "https://colorhunt.co/palette/155263ff6f3cff9a3cffc93c"
  },
  {
    color1: "f8ecd1",
    color2: "deb6ab",
    color3: "ac7d88",
    color4: "85586f",
    url: "https://colorhunt.co/palette/f8ecd1deb6abac7d8885586f"
  },
  {
    color1: "7c9473",
    color2: "cfdac8",
    color3: "e8eae6",
    color4: "cdd0cb",
    url: "https://colorhunt.co/palette/7c9473cfdac8e8eae6cdd0cb"
  },
  {
    color1: "fcf8ec",
    color2: "d0e8f2",
    color3: "79a3b1",
    color4: "456268",
    url: "https://colorhunt.co/palette/fcf8ecd0e8f279a3b1456268"
  },
  {
    color1: "a9907e",
    color2: "f3deba",
    color3: "abc4aa",
    color4: "675d50",
    url: "https://colorhunt.co/palette/a9907ef3debaabc4aa675d50"
  },
  {
    color1: "e0ece4",
    color2: "f7f2e7",
    color3: "d8d3cd",
    color4: "797a7e",
    url: "https://colorhunt.co/palette/e0ece4f7f2e7d8d3cd797a7e"
  },
  {
    color1: "ccf6c8",
    color2: "fafcc2",
    color3: "f6d6ad",
    color4: "f9c0c0",
    url: "https://colorhunt.co/palette/ccf6c8fafcc2f6d6adf9c0c0"
  },
  {
    color1: "e1f2fb",
    color2: "f1f9f9",
    color3: "f3dfe3",
    color4: "e9b2bc",
    url: "https://colorhunt.co/palette/e1f2fbf1f9f9f3dfe3e9b2bc"
  },
  {
    color1: "f7ecde",
    color2: "e9dac1",
    color3: "9ed2c6",
    color4: "54bab9",
    url: "https://colorhunt.co/palette/f7ecdee9dac19ed2c654bab9"
  },
  {
    color1: "402218",
    color2: "865439",
    color3: "c68b59",
    color4: "d7b19d",
    url: "https://colorhunt.co/palette/402218865439c68b59d7b19d"
  },
  {
    color1: "483434",
    color2: "6b4f4f",
    color3: "eed6c4",
    color4: "fff3e4",
    url: "https://colorhunt.co/palette/4834346b4f4feed6c4fff3e4"
  },
  {
    color1: "6fe7dd",
    color2: "3490de",
    color3: "6639a6",
    color4: "521262",
    url: "https://colorhunt.co/palette/6fe7dd3490de6639a6521262"
  },
  {
    color1: "27374d",
    color2: "526d82",
    color3: "9db2bf",
    color4: "dde6ed",
    url: "https://colorhunt.co/palette/27374d526d829db2bfdde6ed"
  },
  {
    color1: "ede4e0",
    color2: "c8dbbe",
    color3: "9f8772",
    color4: "665a48",
    url: "https://colorhunt.co/palette/ede4e0c8dbbe9f8772665a48"
  },
  {
    color1: "edcfa9",
    color2: "e89f71",
    color3: "d57149",
    color4: "aa4a30",
    url: "https://colorhunt.co/palette/edcfa9e89f71d57149aa4a30"
  },
  {
    color1: "07689f",
    color2: "a2d5f2",
    color3: "fafafa",
    color4: "ff7e67",
    url: "https://colorhunt.co/palette/07689fa2d5f2fafafaff7e67"
  },
  {
    color1: "2f5d62",
    color2: "5e8b7e",
    color3: "a7c4bc",
    color4: "dfeeea",
    url: "https://colorhunt.co/palette/2f5d625e8b7ea7c4bcdfeeea"
  },
  {
    color1: "8ef6e4",
    color2: "9896f1",
    color3: "d59bf6",
    color4: "edb1f1",
    url: "https://colorhunt.co/palette/8ef6e49896f1d59bf6edb1f1"
  },
  {
    color1: "303841",
    color2: "3a4750",
    color3: "d72323",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/3038413a4750d72323eeeeee"
  },
  {
    color1: "f5e8c7",
    color2: "ecccb2",
    color3: "deb6ab",
    color4: "ac7088",
    url: "https://colorhunt.co/palette/f5e8c7ecccb2deb6abac7088"
  },
  {
    color1: "ffe6e6",
    color2: "ffabe1",
    color3: "a685e2",
    color4: "6155a6",
    url: "https://colorhunt.co/palette/ffe6e6ffabe1a685e26155a6"
  },
  {
    color1: "a7727d",
    color2: "eddbc7",
    color3: "f8ead8",
    color4: "f9f5e7",
    url: "https://colorhunt.co/palette/a7727deddbc7f8ead8f9f5e7"
  },
  {
    color1: "a8e6cf",
    color2: "fdffab",
    color3: "ffd3b6",
    color4: "ffaaa5",
    url: "https://colorhunt.co/palette/a8e6cffdffabffd3b6ffaaa5"
  },
  {
    color1: "f5f0bb",
    color2: "c4dfaa",
    color3: "90c8ac",
    color4: "73a9ad",
    url: "https://colorhunt.co/palette/f5f0bbc4dfaa90c8ac73a9ad"
  },
  {
    color1: "f4bfbf",
    color2: "ffd9c0",
    color3: "faf0d7",
    color4: "8cc0de",
    url: "https://colorhunt.co/palette/f4bfbfffd9c0faf0d78cc0de"
  },
  {
    color1: "2d2424",
    color2: "5c3d2e",
    color3: "b85c38",
    color4: "e0c097",
    url: "https://colorhunt.co/palette/2d24245c3d2eb85c38e0c097"
  },
  {
    color1: "f0ece2",
    color2: "dfd3c3",
    color3: "c7b198",
    color4: "596e79",
    url: "https://colorhunt.co/palette/f0ece2dfd3c3c7b198596e79"
  },
  {
    color1: "bfcba8",
    color2: "5b8a72",
    color3: "56776c",
    color4: "464f41",
    url: "https://colorhunt.co/palette/bfcba85b8a7256776c464f41"
  },
  {
    color1: "7579e7",
    color2: "9ab3f5",
    color3: "a3d8f4",
    color4: "b9fffc",
    url: "https://colorhunt.co/palette/7579e79ab3f5a3d8f4b9fffc"
  },
  {
    color1: "94b49f",
    color2: "cee5d0",
    color3: "fcf8e8",
    color4: "ecb390",
    url: "https://colorhunt.co/palette/94b49fcee5d0fcf8e8ecb390"
  },
  {
    color1: "dbd0c0",
    color2: "faeee0",
    color3: "f9e4c8",
    color4: "f9cf93",
    url: "https://colorhunt.co/palette/dbd0c0faeee0f9e4c8f9cf93"
  },
  {
    color1: "fafafa",
    color2: "e8f1f5",
    color3: "005691",
    color4: "004a7c",
    url: "https://colorhunt.co/palette/fafafae8f1f5005691004a7c"
  },
  {
    color1: "fee3ec",
    color2: "f9c5d5",
    color3: "f999b7",
    color4: "f2789f",
    url: "https://colorhunt.co/palette/fee3ecf9c5d5f999b7f2789f"
  },
  {
    color1: "1a374d",
    color2: "406882",
    color3: "6998ab",
    color4: "b1d0e0",
    url: "https://colorhunt.co/palette/1a374d4068826998abb1d0e0"
  },
  {
    color1: "f0e5cf",
    color2: "f7f6f2",
    color3: "c8c6c6",
    color4: "4b6587",
    url: "https://colorhunt.co/palette/f0e5cff7f6f2c8c6c64b6587"
  },
  {
    color1: "363062",
    color2: "4d4c7d",
    color3: "827397",
    color4: "d8b9c3",
    url: "https://colorhunt.co/palette/3630624d4c7d827397d8b9c3"
  },
  {
    color1: "8e3200",
    color2: "a64b2a",
    color3: "d7a86e",
    color4: "ffebc1",
    url: "https://colorhunt.co/palette/8e3200a64b2ad7a86effebc1"
  },
  {
    color1: "142850",
    color2: "27496d",
    color3: "00909e",
    color4: "dae1e7",
    url: "https://colorhunt.co/palette/14285027496d00909edae1e7"
  },
  {
    color1: "61764b",
    color2: "9ba17b",
    color3: "cfb997",
    color4: "fad6a5",
    url: "https://colorhunt.co/palette/61764b9ba17bcfb997fad6a5"
  },
  {
    color1: "171717",
    color2: "444444",
    color3: "da0037",
    color4: "ededed",
    url: "https://colorhunt.co/palette/171717444444da0037ededed"
  },
  {
    color1: "472d2d",
    color2: "553939",
    color3: "704f4f",
    color4: "a77979",
    url: "https://colorhunt.co/palette/472d2d553939704f4fa77979"
  },
  {
    color1: "bce6eb",
    color2: "fdcfdf",
    color3: "fbbedf",
    color4: "fca3cc",
    url: "https://colorhunt.co/palette/bce6ebfdcfdffbbedffca3cc"
  },
  {
    color1: "dcedc2",
    color2: "ffd3b5",
    color3: "ffaaa6",
    color4: "ff8c94",
    url: "https://colorhunt.co/palette/dcedc2ffd3b5ffaaa6ff8c94"
  },
  {
    color1: "be8abf",
    color2: "ea9abb",
    color3: "fea5ad",
    color4: "f8c3af",
    url: "https://colorhunt.co/palette/be8abfea9abbfea5adf8c3af"
  },
  {
    color1: "cc9b6d",
    color2: "f1ca89",
    color3: "f2dac3",
    color4: "c8c2bc",
    url: "https://colorhunt.co/palette/cc9b6df1ca89f2dac3c8c2bc"
  },
  {
    color1: "d8e3e7",
    color2: "51c4d3",
    color3: "126e82",
    color4: "132c33",
    url: "https://colorhunt.co/palette/d8e3e751c4d3126e82132c33"
  },
  {
    color1: "faebe0",
    color2: "c9e4c5",
    color3: "b5cda3",
    color4: "c1ac95",
    url: "https://colorhunt.co/palette/faebe0c9e4c5b5cda3c1ac95"
  },
  {
    color1: "f6e5f5",
    color2: "fbf4f9",
    color3: "f6e7e6",
    color4: "b9cced",
    url: "https://colorhunt.co/palette/f6e5f5fbf4f9f6e7e6b9cced"
  },
  {
    color1: "fcf8e8",
    color2: "ecdfc8",
    color3: "ecb390",
    color4: "df7861",
    url: "https://colorhunt.co/palette/fcf8e8ecdfc8ecb390df7861"
  },
  {
    color1: "7286d3",
    color2: "8ea7e9",
    color3: "e5e0ff",
    color4: "fff2f2",
    url: "https://colorhunt.co/palette/7286d38ea7e9e5e0fffff2f2"
  },
  {
    color1: "f3f8ff",
    color2: "deecff",
    color3: "c6cfff",
    color4: "e8d3ff",
    url: "https://colorhunt.co/palette/f3f8ffdeecffc6cfffe8d3ff"
  },
  {
    color1: "f85f73",
    color2: "fbe8d3",
    color3: "928a97",
    color4: "283c63",
    url: "https://colorhunt.co/palette/f85f73fbe8d3928a97283c63"
  },
  {
    color1: "e4fbff",
    color2: "b8b5ff",
    color3: "7868e6",
    color4: "edeef7",
    url: "https://colorhunt.co/palette/e4fbffb8b5ff7868e6edeef7"
  },
  {
    color1: "9e9d89",
    color2: "e4d3cf",
    color3: "e2bcb7",
    color4: "b67162",
    url: "https://colorhunt.co/palette/9e9d89e4d3cfe2bcb7b67162"
  },
  {
    color1: "d9d7f1",
    color2: "fffdde",
    color3: "e7fbbe",
    color4: "ffcbcb",
    url: "https://colorhunt.co/palette/d9d7f1fffddee7fbbeffcbcb"
  },
  {
    color1: "071a52",
    color2: "086972",
    color3: "17b978",
    color4: "a7ff83",
    url: "https://colorhunt.co/palette/071a5208697217b978a7ff83"
  },
  {
    color1: "fce2db",
    color2: "f1c6d3",
    color3: "e4a3d4",
    color4: "c295d8",
    url: "https://colorhunt.co/palette/fce2dbf1c6d3e4a3d4c295d8"
  },
  {
    color1: "ccd6a6",
    color2: "dae2b6",
    color3: "dfe8cc",
    color4: "f7eddb",
    url: "https://colorhunt.co/palette/ccd6a6dae2b6dfe8ccf7eddb"
  },
  {
    color1: "fb929e",
    color2: "ffdfdf",
    color3: "fff6f6",
    color4: "aedefc",
    url: "https://colorhunt.co/palette/fb929effdfdffff6f6aedefc"
  },
  {
    color1: "e6ba95",
    color2: "fafdd6",
    color3: "e4e9be",
    color4: "a2b38b",
    url: "https://colorhunt.co/palette/e6ba95fafdd6e4e9bea2b38b"
  },
  {
    color1: "ffacac",
    color2: "ffbfa9",
    color3: "ffebb4",
    color4: "fbffb1",
    url: "https://colorhunt.co/palette/ffacacffbfa9ffebb4fbffb1"
  },
  {
    color1: "85603f",
    color2: "9e7540",
    color3: "bd9354",
    color4: "e3d18a",
    url: "https://colorhunt.co/palette/85603f9e7540bd9354e3d18a"
  },
  {
    color1: "1c6758",
    color2: "3d8361",
    color3: "d6cda4",
    color4: "eef2e6",
    url: "https://colorhunt.co/palette/1c67583d8361d6cda4eef2e6"
  },
  {
    color1: "b983ff",
    color2: "94b3fd",
    color3: "94daff",
    color4: "99feff",
    url: "https://colorhunt.co/palette/b983ff94b3fd94daff99feff"
  },
  {
    color1: "272343",
    color2: "ffffff",
    color3: "e3f6f5",
    color4: "bae8e8",
    url: "https://colorhunt.co/palette/272343ffffffe3f6f5bae8e8"
  },
  {
    color1: "fbc6a4",
    color2: "f4a9a8",
    color3: "ce97b0",
    color4: "afb9c8",
    url: "https://colorhunt.co/palette/fbc6a4f4a9a8ce97b0afb9c8"
  },
  {
    color1: "ff8787",
    color2: "f8c4b4",
    color3: "e5ebb2",
    color4: "bce29e",
    url: "https://colorhunt.co/palette/ff8787f8c4b4e5ebb2bce29e"
  },
  {
    color1: "cee5d0",
    color2: "f3f0d7",
    color3: "fed2aa",
    color4: "ffbf86",
    url: "https://colorhunt.co/palette/cee5d0f3f0d7fed2aaffbf86"
  },
  {
    color1: "ecf9ff",
    color2: "fffbeb",
    color3: "ffe7cc",
    color4: "f8cba6",
    url: "https://colorhunt.co/palette/ecf9fffffbebffe7ccf8cba6"
  },
  {
    color1: "99e1e5",
    color2: "f3e8cb",
    color3: "f2c6b4",
    color4: "fbafaf",
    url: "https://colorhunt.co/palette/99e1e5f3e8cbf2c6b4fbafaf"
  },
  {
    color1: "e8ded2",
    color2: "a3d2ca",
    color3: "5eaaa8",
    color4: "056676",
    url: "https://colorhunt.co/palette/e8ded2a3d2ca5eaaa8056676"
  },
  {
    color1: "cc7351",
    color2: "e08f62",
    color3: "ded7b1",
    color4: "9dab86",
    url: "https://colorhunt.co/palette/cc7351e08f62ded7b19dab86"
  },
  {
    color1: "faf7f0",
    color2: "cdfcf6",
    color3: "bccef8",
    color4: "98a8f8",
    url: "https://colorhunt.co/palette/faf7f0cdfcf6bccef898a8f8"
  },
  {
    color1: "c4dfdf",
    color2: "d2e9e9",
    color3: "e3f4f4",
    color4: "f8f6f4",
    url: "https://colorhunt.co/palette/c4dfdfd2e9e9e3f4f4f8f6f4"
  },
  {
    color1: "e97777",
    color2: "ff9f9f",
    color3: "fcddb0",
    color4: "fffad7",
    url: "https://colorhunt.co/palette/e97777ff9f9ffcddb0fffad7"
  },
  {
    color1: "bedcfa",
    color2: "98acf8",
    color3: "b088f9",
    color4: "da9ff9",
    url: "https://colorhunt.co/palette/bedcfa98acf8b088f9da9ff9"
  },
  {
    color1: "beebe9",
    color2: "f4dada",
    color3: "ffb6b9",
    color4: "f6eec7",
    url: "https://colorhunt.co/palette/beebe9f4dadaffb6b9f6eec7"
  },
  {
    color1: "eeebdd",
    color2: "810000",
    color3: "630000",
    color4: "1b1717",
    url: "https://colorhunt.co/palette/eeebdd8100006300001b1717"
  },
  {
    color1: "645cbb",
    color2: "a084dc",
    color3: "bface2",
    color4: "ebc7e6",
    url: "https://colorhunt.co/palette/645cbba084dcbface2ebc7e6"
  },
  {
    color1: "cffffe",
    color2: "f9f7d9",
    color3: "fce2ce",
    color4: "ffc1f3",
    url: "https://colorhunt.co/palette/cffffef9f7d9fce2ceffc1f3"
  },
  {
    color1: "1c3879",
    color2: "607eaa",
    color3: "eae3d2",
    color4: "f9f5eb",
    url: "https://colorhunt.co/palette/1c3879607eaaeae3d2f9f5eb"
  },
  {
    color1: "fff0f0",
    color2: "ebd4d4",
    color3: "835858",
    color4: "463333",
    url: "https://colorhunt.co/palette/fff0f0ebd4d4835858463333"
  },
  {
    color1: "d4ecdd",
    color2: "345b63",
    color3: "152d35",
    color4: "112031",
    url: "https://colorhunt.co/palette/d4ecdd345b63152d35112031"
  },
  {
    color1: "ffd4b2",
    color2: "fff6bd",
    color3: "ceedc7",
    color4: "86c8bc",
    url: "https://colorhunt.co/palette/ffd4b2fff6bdceedc786c8bc"
  },
  {
    color1: "ffeeee",
    color2: "fff6ea",
    color3: "f7e9d7",
    color4: "ebd8c3",
    url: "https://colorhunt.co/palette/ffeeeefff6eaf7e9d7ebd8c3"
  },
  {
    color1: "d3e4cd",
    color2: "99a799",
    color3: "f2ddc1",
    color4: "e2c2b9",
    url: "https://colorhunt.co/palette/d3e4cd99a799f2ddc1e2c2b9"
  },
  {
    color1: "eeebdd",
    color2: "ce1212",
    color3: "810000",
    color4: "1b1717",
    url: "https://colorhunt.co/palette/eeebddce12128100001b1717"
  },
  {
    color1: "f0e4d7",
    color2: "f5c0c0",
    color3: "ff7171",
    color4: "9fd8df",
    url: "https://colorhunt.co/palette/f0e4d7f5c0c0ff71719fd8df"
  },
  {
    color1: "1a120b",
    color2: "3c2a21",
    color3: "d5cea3",
    color4: "e5e5cb",
    url: "https://colorhunt.co/palette/1a120b3c2a21d5cea3e5e5cb"
  },
  {
    color1: "fef1e6",
    color2: "f9d5a7",
    color3: "ffb085",
    color4: "90aacb",
    url: "https://colorhunt.co/palette/fef1e6f9d5a7ffb08590aacb"
  },
  {
    color1: "faf1e6",
    color2: "fdfaf6",
    color3: "e4efe7",
    color4: "064420",
    url: "https://colorhunt.co/palette/faf1e6fdfaf6e4efe7064420"
  },
  {
    color1: "e9d5da",
    color2: "827397",
    color3: "4d4c7d",
    color4: "363062",
    url: "https://colorhunt.co/palette/e9d5da8273974d4c7d363062"
  },
  {
    color1: "fcffa6",
    color2: "c1ffd7",
    color3: "b5deff",
    color4: "cab8ff",
    url: "https://colorhunt.co/palette/fcffa6c1ffd7b5deffcab8ff"
  },
  {
    color1: "ffc996",
    color2: "ff8474",
    color3: "9f5f80",
    color4: "583d72",
    url: "https://colorhunt.co/palette/ffc996ff84749f5f80583d72"
  },
  {
    color1: "e5dcc3",
    color2: "c7bea2",
    color3: "aaa492",
    color4: "9a9483",
    url: "https://colorhunt.co/palette/e5dcc3c7bea2aaa4929a9483"
  },
  {
    color1: "f6f6f6",
    color2: "d6e4f0",
    color3: "1e56a0",
    color4: "163172",
    url: "https://colorhunt.co/palette/f6f6f6d6e4f01e56a0163172"
  },
  {
    color1: "232931",
    color2: "393e46",
    color3: "4ecca3",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/232931393e464ecca3eeeeee"
  },
  {
    color1: "fcf8e8",
    color2: "94b49f",
    color3: "ecb390",
    color4: "df7861",
    url: "https://colorhunt.co/palette/fcf8e894b49fecb390df7861"
  },
  {
    color1: "f7f7e8",
    color2: "c7cfb7",
    color3: "9dad7f",
    color4: "557174",
    url: "https://colorhunt.co/palette/f7f7e8c7cfb79dad7f557174"
  },
  {
    color1: "f1f6f9",
    color2: "394867",
    color3: "212a3e",
    color4: "9ba4b5",
    url: "https://colorhunt.co/palette/f1f6f9394867212a3e9ba4b5"
  },
  {
    color1: "79b4b7",
    color2: "fefbf3",
    color3: "f8f0df",
    color4: "9d9d9d",
    url: "https://colorhunt.co/palette/79b4b7fefbf3f8f0df9d9d9d"
  },
  {
    color1: "440a67",
    color2: "93329e",
    color3: "b4aee8",
    color4: "ffe3fe",
    url: "https://colorhunt.co/palette/440a6793329eb4aee8ffe3fe"
  },
  {
    color1: "194350",
    color2: "ff8882",
    color3: "ffc2b4",
    color4: "9dbeb9",
    url: "https://colorhunt.co/palette/194350ff8882ffc2b49dbeb9"
  },
  {
    color1: "f1ecc3",
    color2: "c9d8b6",
    color3: "57837b",
    color4: "515e63",
    url: "https://colorhunt.co/palette/f1ecc3c9d8b657837b515e63"
  },
  {
    color1: "cee5d0",
    color2: "f3f0d7",
    color3: "d8b384",
    color4: "5e454b",
    url: "https://colorhunt.co/palette/cee5d0f3f0d7d8b3845e454b"
  },
  {
    color1: "fbfacd",
    color2: "debace",
    color3: "ba94d1",
    color4: "7f669d",
    url: "https://colorhunt.co/palette/fbfacddebaceba94d17f669d"
  },
  {
    color1: "caf7e3",
    color2: "f8eded",
    color3: "f6dfeb",
    color4: "e4bad4",
    url: "https://colorhunt.co/palette/caf7e3f8ededf6dfebe4bad4"
  },
  {
    color1: "f9ebc8",
    color2: "fefbe7",
    color3: "dae5d0",
    color4: "a0bcc2",
    url: "https://colorhunt.co/palette/f9ebc8fefbe7dae5d0a0bcc2"
  },
  {
    color1: "f7fd04",
    color2: "f9b208",
    color3: "f98404",
    color4: "fc5404",
    url: "https://colorhunt.co/palette/f7fd04f9b208f98404fc5404"
  },
  {
    color1: "00e0ff",
    color2: "74f9ff",
    color3: "a6fff2",
    color4: "e8ffe8",
    url: "https://colorhunt.co/palette/00e0ff74f9ffa6fff2e8ffe8"
  },
  {
    color1: "393232",
    color2: "4d4545",
    color3: "8d6262",
    color4: "ed8d8d",
    url: "https://colorhunt.co/palette/3932324d45458d6262ed8d8d"
  },
  {
    color1: "ebfffa",
    color2: "c6fce5",
    color3: "6ef3d6",
    color4: "0dceda",
    url: "https://colorhunt.co/palette/ebfffac6fce56ef3d60dceda"
  },
  {
    color1: "f3d5c0",
    color2: "d4b499",
    color3: "889eaf",
    color4: "506d84",
    url: "https://colorhunt.co/palette/f3d5c0d4b499889eaf506d84"
  },
  {
    color1: "204051",
    color2: "3b6978",
    color3: "84a9ac",
    color4: "cae8d5",
    url: "https://colorhunt.co/palette/2040513b697884a9accae8d5"
  },
  {
    color1: "faf3f3",
    color2: "e1e5ea",
    color3: "a7bbc7",
    color4: "da7f8f",
    url: "https://colorhunt.co/palette/faf3f3e1e5eaa7bbc7da7f8f"
  },
  {
    color1: "2b3a55",
    color2: "ce7777",
    color3: "e8c4c4",
    color4: "f2e5e5",
    url: "https://colorhunt.co/palette/2b3a55ce7777e8c4c4f2e5e5"
  },
  {
    color1: "99bbad",
    color2: "ebd8b7",
    color3: "c6a9a3",
    color4: "9a8194",
    url: "https://colorhunt.co/palette/99bbadebd8b7c6a9a39a8194"
  },
  {
    color1: "f1d4d4",
    color2: "ddb6c6",
    color3: "ac8daf",
    color4: "484c7f",
    url: "https://colorhunt.co/palette/f1d4d4ddb6c6ac8daf484c7f"
  },
  {
    color1: "f6d7a7",
    color2: "f6eabe",
    color3: "c8e3d4",
    color4: "87aaaa",
    url: "https://colorhunt.co/palette/f6d7a7f6eabec8e3d487aaaa"
  },
  {
    color1: "dab88b",
    color2: "f3e9dd",
    color3: "fdf6ec",
    color4: "b7cadb",
    url: "https://colorhunt.co/palette/dab88bf3e9ddfdf6ecb7cadb"
  },
  {
    color1: "d14d72",
    color2: "ffabab",
    color3: "fcc8d1",
    color4: "fef2f4",
    url: "https://colorhunt.co/palette/d14d72ffababfcc8d1fef2f4"
  },
  {
    color1: "334257",
    color2: "476072",
    color3: "548ca8",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/334257476072548ca8eeeeee"
  },
  {
    color1: "fff9ca",
    color2: "ffdeb4",
    color3: "ffb4b4",
    color4: "b2a4ff",
    url: "https://colorhunt.co/palette/fff9caffdeb4ffb4b4b2a4ff"
  },
  {
    color1: "e6e6e6",
    color2: "c5a880",
    color3: "532e1c",
    color4: "0f0f0f",
    url: "https://colorhunt.co/palette/e6e6e6c5a880532e1c0f0f0f"
  },
  {
    color1: "404258",
    color2: "474e68",
    color3: "50577a",
    color4: "6b728e",
    url: "https://colorhunt.co/palette/404258474e6850577a6b728e"
  },
  {
    color1: "8294c4",
    color2: "acb1d6",
    color3: "dbdfea",
    color4: "ffead2",
    url: "https://colorhunt.co/palette/8294c4acb1d6dbdfeaffead2"
  },
  {
    color1: "f5efe3",
    color2: "e6e7e5",
    color3: "f7d3ba",
    color4: "a6aa9c",
    url: "https://colorhunt.co/palette/f5efe3e6e7e5f7d3baa6aa9c"
  },
  {
    color1: "82aae3",
    color2: "91d8e4",
    color3: "bfeaf5",
    color4: "eafdfc",
    url: "https://colorhunt.co/palette/82aae391d8e4bfeaf5eafdfc"
  },
  {
    color1: "ffab73",
    color2: "ffd384",
    color3: "fff9b0",
    color4: "ffaec0",
    url: "https://colorhunt.co/palette/ffab73ffd384fff9b0ffaec0"
  },
  {
    color1: "f1f3f8",
    color2: "d6e0f0",
    color3: "8d93ab",
    color4: "393b44",
    url: "https://colorhunt.co/palette/f1f3f8d6e0f08d93ab393b44"
  },
  {
    color1: "384259",
    color2: "f73859",
    color3: "7ac7c4",
    color4: "c4edde",
    url: "https://colorhunt.co/palette/384259f738597ac7c4c4edde"
  },
  {
    color1: "002b5b",
    color2: "2b4865",
    color3: "256d85",
    color4: "8fe3cf",
    url: "https://colorhunt.co/palette/002b5b2b4865256d858fe3cf"
  },
  {
    color1: "e8e8e8",
    color2: "5588a3",
    color3: "145374",
    color4: "00334e",
    url: "https://colorhunt.co/palette/e8e8e85588a314537400334e"
  },
  {
    color1: "0f044c",
    color2: "141e61",
    color3: "787a91",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/0f044c141e61787a91eeeeee"
  },
  {
    color1: "ffb3b3",
    color2: "ffdba4",
    color3: "ffe9ae",
    color4: "c1efff",
    url: "https://colorhunt.co/palette/ffb3b3ffdba4ffe9aec1efff"
  },
  {
    color1: "3a3845",
    color2: "f7ccac",
    color3: "c69b7b",
    color4: "826f66",
    url: "https://colorhunt.co/palette/3a3845f7ccacc69b7b826f66"
  },
  {
    color1: "f9f3df",
    color2: "fdfce5",
    color3: "d7e9f7",
    color4: "f4d19b",
    url: "https://colorhunt.co/palette/f9f3dffdfce5d7e9f7f4d19b"
  },
  {
    color1: "191a19",
    color2: "1e5128",
    color3: "4e9f3d",
    color4: "d8e9a8",
    url: "https://colorhunt.co/palette/191a191e51284e9f3dd8e9a8"
  },
  {
    color1: "eb6383",
    color2: "fa9191",
    color3: "ffe9c5",
    color4: "b4f2e1",
    url: "https://colorhunt.co/palette/eb6383fa9191ffe9c5b4f2e1"
  },
  {
    color1: "698269",
    color2: "b99b6b",
    color3: "f1dbbf",
    color4: "aa5656",
    url: "https://colorhunt.co/palette/698269b99b6bf1dbbfaa5656"
  },
  {
    color1: "1c0c5b",
    color2: "3d2c8d",
    color3: "916bbf",
    color4: "c996cc",
    url: "https://colorhunt.co/palette/1c0c5b3d2c8d916bbfc996cc"
  },
  {
    color1: "2c3333",
    color2: "2e4f4f",
    color3: "0e8388",
    color4: "cbe4de",
    url: "https://colorhunt.co/palette/2c33332e4f4f0e8388cbe4de"
  },
  {
    color1: "b2a4ff",
    color2: "ffb4b4",
    color3: "ffdeb4",
    color4: "fdf7c3",
    url: "https://colorhunt.co/palette/b2a4ffffb4b4ffdeb4fdf7c3"
  },
  {
    color1: "ffdfd3",
    color2: "fec8d8",
    color3: "d291bc",
    color4: "957dad",
    url: "https://colorhunt.co/palette/ffdfd3fec8d8d291bc957dad"
  },
  {
    color1: "cdf0ea",
    color2: "f9f9f9",
    color3: "f6c6ea",
    color4: "c490e4",
    url: "https://colorhunt.co/palette/cdf0eaf9f9f9f6c6eac490e4"
  },
  {
    color1: "ffa45b",
    color2: "ffda77",
    color3: "fbf6f0",
    color4: "aee6e6",
    url: "https://colorhunt.co/palette/ffa45bffda77fbf6f0aee6e6"
  },
  {
    color1: "7fb77e",
    color2: "b1d7b4",
    color3: "f7f6dc",
    color4: "ffc090",
    url: "https://colorhunt.co/palette/7fb77eb1d7b4f7f6dcffc090"
  },
  {
    color1: "151515",
    color2: "301b3f",
    color3: "3c415c",
    color4: "b4a5a5",
    url: "https://colorhunt.co/palette/151515301b3f3c415cb4a5a5"
  },
  {
    color1: "ecf2ff",
    color2: "e3dffd",
    color3: "e5d1fa",
    color4: "fff4d2",
    url: "https://colorhunt.co/palette/ecf2ffe3dffde5d1fafff4d2"
  },
  {
    color1: "362706",
    color2: "464e2e",
    color3: "acb992",
    color4: "e9e5d6",
    url: "https://colorhunt.co/palette/362706464e2eacb992e9e5d6"
  },
  {
    color1: "fdf4f5",
    color2: "e8a0bf",
    color3: "ba90c6",
    color4: "c0dbea",
    url: "https://colorhunt.co/palette/fdf4f5e8a0bfba90c6c0dbea"
  },
  {
    color1: "5b6d5b",
    color2: "ca8a8b",
    color3: "e2bcb7",
    color4: "f6e6e4",
    url: "https://colorhunt.co/palette/5b6d5bca8a8be2bcb7f6e6e4"
  },
  {
    color1: "f2e9d0",
    color2: "eaceb4",
    color3: "e79e85",
    color4: "bb5a5a",
    url: "https://colorhunt.co/palette/f2e9d0eaceb4e79e85bb5a5a"
  },
  {
    color1: "e7e7de",
    color2: "008891",
    color3: "00587a",
    color4: "0f3057",
    url: "https://colorhunt.co/palette/e7e7de00889100587a0f3057"
  },
  {
    color1: "252525",
    color2: "ff0000",
    color3: "af0404",
    color4: "414141",
    url: "https://colorhunt.co/palette/252525ff0000af0404414141"
  },
  {
    color1: "f4f9f9",
    color2: "f1d1d0",
    color3: "fbaccc",
    color4: "f875aa",
    url: "https://colorhunt.co/palette/f4f9f9f1d1d0fbacccf875aa"
  },
  {
    color1: "fee2b3",
    color2: "ffa299",
    color3: "ad6989",
    color4: "562349",
    url: "https://colorhunt.co/palette/fee2b3ffa299ad6989562349"
  },
  {
    color1: "181d31",
    color2: "678983",
    color3: "e6ddc4",
    color4: "f0e9d2",
    url: "https://colorhunt.co/palette/181d31678983e6ddc4f0e9d2"
  },
  {
    color1: "7effdb",
    color2: "b693fe",
    color3: "8c82fc",
    color4: "ff9de2",
    url: "https://colorhunt.co/palette/7effdbb693fe8c82fcff9de2"
  },
  {
    color1: "2d132c",
    color2: "801336",
    color3: "c72c41",
    color4: "ee4540",
    url: "https://colorhunt.co/palette/2d132c801336c72c41ee4540"
  },
  {
    color1: "333333",
    color2: "ffffff",
    color3: "e1f4f3",
    color4: "706c61",
    url: "https://colorhunt.co/palette/333333ffffffe1f4f3706c61"
  },
  {
    color1: "2a2f4f",
    color2: "917fb3",
    color3: "e5beec",
    color4: "fde2f3",
    url: "https://colorhunt.co/palette/2a2f4f917fb3e5beecfde2f3"
  },
  {
    color1: "22577a",
    color2: "38a3a5",
    color3: "57cc99",
    color4: "80ed99",
    url: "https://colorhunt.co/palette/22577a38a3a557cc9980ed99"
  },
  {
    color1: "ffe6eb",
    color2: "defcfc",
    color3: "cbf1f5",
    color4: "a6e3e9",
    url: "https://colorhunt.co/palette/ffe6ebdefcfccbf1f5a6e3e9"
  },
  {
    color1: "e7e0c9",
    color2: "c1cfc0",
    color3: "6b7aa1",
    color4: "11324d",
    url: "https://colorhunt.co/palette/e7e0c9c1cfc06b7aa111324d"
  },
  {
    color1: "fabea7",
    color2: "fbe2e5",
    color3: "9cada4",
    color4: "767c77",
    url: "https://colorhunt.co/palette/fabea7fbe2e59cada4767c77"
  },
  {
    color1: "495c83",
    color2: "7a86b6",
    color3: "a8a4ce",
    color4: "c8b6e2",
    url: "https://colorhunt.co/palette/495c837a86b6a8a4cec8b6e2"
  },
  {
    color1: "6e85b7",
    color2: "b2c8df",
    color3: "c4d7e0",
    color4: "f8f9d7",
    url: "https://colorhunt.co/palette/6e85b7b2c8dfc4d7e0f8f9d7"
  },
  {
    color1: "f7a4a4",
    color2: "febe8c",
    color3: "fffbc1",
    color4: "b6e2a1",
    url: "https://colorhunt.co/palette/f7a4a4febe8cfffbc1b6e2a1"
  },
  {
    color1: "0c056d",
    color2: "590d82",
    color3: "b61aae",
    color4: "f25d9c",
    url: "https://colorhunt.co/palette/0c056d590d82b61aaef25d9c"
  },
  {
    color1: "dddddd",
    color2: "fab7b7",
    color3: "f5a8a8",
    color4: "e19999",
    url: "https://colorhunt.co/palette/ddddddfab7b7f5a8a8e19999"
  },
  {
    color1: "2a363b",
    color2: "e84a5f",
    color3: "ff847c",
    color4: "fecea8",
    url: "https://colorhunt.co/palette/2a363be84a5fff847cfecea8"
  },
  {
    color1: "e1ffb1",
    color2: "c7f2a4",
    color3: "b6e388",
    color4: "fcffb2",
    url: "https://colorhunt.co/palette/e1ffb1c7f2a4b6e388fcffb2"
  },
  {
    color1: "716f81",
    color2: "b97a95",
    color3: "f6ae99",
    color4: "f2e1c1",
    url: "https://colorhunt.co/palette/716f81b97a95f6ae99f2e1c1"
  },
  {
    color1: "511845",
    color2: "900c3f",
    color3: "c70039",
    color4: "ff5733",
    url: "https://colorhunt.co/palette/511845900c3fc70039ff5733"
  },
  {
    color1: "06283d",
    color2: "256d85",
    color3: "47b5ff",
    color4: "dff6ff",
    url: "https://colorhunt.co/palette/06283d256d8547b5ffdff6ff"
  },
  {
    color1: "f6e7d8",
    color2: "f68989",
    color3: "c65d7b",
    color4: "874356",
    url: "https://colorhunt.co/palette/f6e7d8f68989c65d7b874356"
  },
  {
    color1: "28df99",
    color2: "99f3bd",
    color3: "d2f6c5",
    color4: "f6f7d4",
    url: "https://colorhunt.co/palette/28df9999f3bdd2f6c5f6f7d4"
  },
  {
    color1: "0a043c",
    color2: "03506f",
    color3: "bbbbbb",
    color4: "ffe3d8",
    url: "https://colorhunt.co/palette/0a043c03506fbbbbbbffe3d8"
  },
  {
    color1: "f7dad9",
    color2: "fff5da",
    color3: "d6d2c4",
    color4: "5d534a",
    url: "https://colorhunt.co/palette/f7dad9fff5dad6d2c45d534a"
  },
  {
    color1: "0b2447",
    color2: "19376d",
    color3: "576cbc",
    color4: "a5d7e8",
    url: "https://colorhunt.co/palette/0b244719376d576cbca5d7e8"
  },
  {
    color1: "e4e3e3",
    color2: "84a9ac",
    color3: "3b6978",
    color4: "204051",
    url: "https://colorhunt.co/palette/e4e3e384a9ac3b6978204051"
  },
  {
    color1: "9babb8",
    color2: "eee3cb",
    color3: "d7c0ae",
    color4: "967e76",
    url: "https://colorhunt.co/palette/9babb8eee3cbd7c0ae967e76"
  },
  {
    color1: "f47c7c",
    color2: "ef9f9f",
    color3: "fad4d4",
    color4: "fff2f2",
    url: "https://colorhunt.co/palette/f47c7cef9f9ffad4d4fff2f2"
  },
  {
    color1: "635985",
    color2: "443c68",
    color3: "393053",
    color4: "18122b",
    url: "https://colorhunt.co/palette/635985443c6839305318122b"
  },
  {
    color1: "bbd6b8",
    color2: "aec2b6",
    color3: "94af9f",
    color4: "dbe4c6",
    url: "https://colorhunt.co/palette/bbd6b8aec2b694af9fdbe4c6"
  },
  {
    color1: "f4abc4",
    color2: "595b83",
    color3: "333456",
    color4: "060930",
    url: "https://colorhunt.co/palette/f4abc4595b83333456060930"
  },
  {
    color1: "ff6464",
    color2: "ff8264",
    color3: "ffaa64",
    color4: "fff5a5",
    url: "https://colorhunt.co/palette/ff6464ff8264ffaa64fff5a5"
  },
  {
    color1: "ff75a0",
    color2: "fce38a",
    color3: "eaffd0",
    color4: "95e1d3",
    url: "https://colorhunt.co/palette/ff75a0fce38aeaffd095e1d3"
  },
  {
    color1: "7c83fd",
    color2: "96baff",
    color3: "7dedff",
    color4: "88fff7",
    url: "https://colorhunt.co/palette/7c83fd96baff7dedff88fff7"
  },
  {
    color1: "f6f1f1",
    color2: "afd3e2",
    color3: "19a7ce",
    color4: "146c94",
    url: "https://colorhunt.co/palette/f6f1f1afd3e219a7ce146c94"
  },
  {
    color1: "eeebdd",
    color2: "d8b6a4",
    color3: "630000",
    color4: "000000",
    url: "https://colorhunt.co/palette/eeebddd8b6a4630000000000"
  },
  {
    color1: "ddf3f5",
    color2: "a6dcef",
    color3: "f2aaaa",
    color4: "e36387",
    url: "https://colorhunt.co/palette/ddf3f5a6dceff2aaaae36387"
  },
  {
    color1: "dddddd",
    color2: "f9f3f3",
    color3: "f7d9d9",
    color4: "f25287",
    url: "https://colorhunt.co/palette/ddddddf9f3f3f7d9d9f25287"
  },
  {
    color1: "cff6cf",
    color2: "cfe5cf",
    color3: "e5cfe5",
    color4: "f6def6",
    url: "https://colorhunt.co/palette/cff6cfcfe5cfe5cfe5f6def6"
  },
  {
    color1: "000000",
    color2: "150050",
    color3: "3f0071",
    color4: "610094",
    url: "https://colorhunt.co/palette/0000001500503f0071610094"
  },
  {
    color1: "cff5e7",
    color2: "a0e4cb",
    color3: "59c1bd",
    color4: "0d4c92",
    url: "https://colorhunt.co/palette/cff5e7a0e4cb59c1bd0d4c92"
  },
  {
    color1: "e7dec8",
    color2: "cbaf87",
    color3: "7e8a97",
    color4: "30475e",
    url: "https://colorhunt.co/palette/e7dec8cbaf877e8a9730475e"
  },
  {
    color1: "493323",
    color2: "91684a",
    color3: "eaac7f",
    color4: "ffdf91",
    url: "https://colorhunt.co/palette/49332391684aeaac7fffdf91"
  },
  {
    color1: "f2f2f2",
    color2: "ebd5d5",
    color3: "ea8a8a",
    color4: "685454",
    url: "https://colorhunt.co/palette/f2f2f2ebd5d5ea8a8a685454"
  },
  {
    color1: "439a97",
    color2: "62b6b7",
    color3: "97dece",
    color4: "cbedd5",
    url: "https://colorhunt.co/palette/439a9762b6b797dececbedd5"
  },
  {
    color1: "f7e8f6",
    color2: "f1c6e7",
    color3: "e5b0ea",
    color4: "bd83ce",
    url: "https://colorhunt.co/palette/f7e8f6f1c6e7e5b0eabd83ce"
  },
  {
    color1: "f2deba",
    color2: "ffefd6",
    color3: "0e5e6f",
    color4: "3a8891",
    url: "https://colorhunt.co/palette/f2debaffefd60e5e6f3a8891"
  },
  {
    color1: "fdfdbd",
    color2: "c8ffd4",
    color3: "b8e8fc",
    color4: "b1afff",
    url: "https://colorhunt.co/palette/fdfdbdc8ffd4b8e8fcb1afff"
  },
  {
    color1: "de8971",
    color2: "7b6079",
    color3: "a7d0cd",
    color4: "ffe9d6",
    url: "https://colorhunt.co/palette/de89717b6079a7d0cdffe9d6"
  },
  {
    color1: "1f1d36",
    color2: "3f3351",
    color3: "864879",
    color4: "e9a6a6",
    url: "https://colorhunt.co/palette/1f1d363f3351864879e9a6a6"
  },
  {
    color1: "f7c8e0",
    color2: "dfffd8",
    color3: "b4e4ff",
    color4: "95bdff",
    url: "https://colorhunt.co/palette/f7c8e0dfffd8b4e4ff95bdff"
  },
  {
    color1: "1c0a00",
    color2: "361500",
    color3: "603601",
    color4: "cc9544",
    url: "https://colorhunt.co/palette/1c0a00361500603601cc9544"
  },
  {
    color1: "e7dfd5",
    color2: "84a9ac",
    color3: "3b6978",
    color4: "204051",
    url: "https://colorhunt.co/palette/e7dfd584a9ac3b6978204051"
  },
  {
    color1: "e8ffff",
    color2: "a6f6f1",
    color3: "41aea9",
    color4: "213e3b",
    url: "https://colorhunt.co/palette/e8ffffa6f6f141aea9213e3b"
  },
  {
    color1: "ffefe0",
    color2: "fed9ca",
    color3: "c5c5c5",
    color4: "7d7d7d",
    url: "https://colorhunt.co/palette/ffefe0fed9cac5c5c57d7d7d"
  },
  {
    color1: "04009a",
    color2: "77acf1",
    color3: "3edbf0",
    color4: "c0fefc",
    url: "https://colorhunt.co/palette/04009a77acf13edbf0c0fefc"
  },
  {
    color1: "e0d8b0",
    color2: "fcffe7",
    color3: "dea057",
    color4: "ce9461",
    url: "https://colorhunt.co/palette/e0d8b0fcffe7dea057ce9461"
  },
  {
    color1: "ffdecf",
    color2: "ba7967",
    color3: "5e6f64",
    color4: "3f4441",
    url: "https://colorhunt.co/palette/ffdecfba79675e6f643f4441"
  },
  {
    color1: "f8b595",
    color2: "f67280",
    color3: "c06c84",
    color4: "6c5b7c",
    url: "https://colorhunt.co/palette/f8b595f67280c06c846c5b7c"
  },
  {
    color1: "9adcff",
    color2: "fff89a",
    color3: "ffb2a6",
    color4: "ff8aae",
    url: "https://colorhunt.co/palette/9adcfffff89affb2a6ff8aae"
  },
  {
    color1: "ff9a76",
    color2: "ffeadb",
    color3: "679b9b",
    color4: "637373",
    url: "https://colorhunt.co/palette/ff9a76ffeadb679b9b637373"
  },
  {
    color1: "999b84",
    color2: "926e6f",
    color3: "ca8a8b",
    color4: "e6c4c0",
    url: "https://colorhunt.co/palette/999b84926e6fca8a8be6c4c0"
  },
  {
    color1: "27296d",
    color2: "5e63b6",
    color3: "a393eb",
    color4: "f5c7f7",
    url: "https://colorhunt.co/palette/27296d5e63b6a393ebf5c7f7"
  },
  {
    color1: "1d2d50",
    color2: "133b5c",
    color3: "1e5f74",
    color4: "fcdab7",
    url: "https://colorhunt.co/palette/1d2d50133b5c1e5f74fcdab7"
  },
  {
    color1: "ddffbb",
    color2: "c7e9b0",
    color3: "b3c99c",
    color4: "a4bc92",
    url: "https://colorhunt.co/palette/ddffbbc7e9b0b3c99ca4bc92"
  },
  {
    color1: "ffadad",
    color2: "ffdac7",
    color3: "ffefbc",
    color4: "fffeb7",
    url: "https://colorhunt.co/palette/ffadadffdac7ffefbcfffeb7"
  },
  {
    color1: "fbfad3",
    color2: "c6e377",
    color3: "729d39",
    color4: "36622b",
    url: "https://colorhunt.co/palette/fbfad3c6e377729d3936622b"
  },
  {
    color1: "9be3de",
    color2: "beebe9",
    color3: "fffdf9",
    color4: "ffe3ed",
    url: "https://colorhunt.co/palette/9be3debeebe9fffdf9ffe3ed"
  },
  {
    color1: "d68060",
    color2: "f1ae89",
    color3: "dff3e3",
    color4: "86aba1",
    url: "https://colorhunt.co/palette/d68060f1ae89dff3e386aba1"
  },
  {
    color1: "faf2da",
    color2: "8e9775",
    color3: "4a503d",
    color4: "e28f83",
    url: "https://colorhunt.co/palette/faf2da8e97754a503de28f83"
  },
  {
    color1: "ff577f",
    color2: "ff884b",
    color3: "ffc764",
    color4: "cdfffc",
    url: "https://colorhunt.co/palette/ff577fff884bffc764cdfffc"
  },
  {
    color1: "fffbeb",
    color2: "495579",
    color3: "263159",
    color4: "251749",
    url: "https://colorhunt.co/palette/fffbeb495579263159251749"
  },
  {
    color1: "898aa6",
    color2: "c9bbcf",
    color3: "b7d3df",
    color4: "d6efed",
    url: "https://colorhunt.co/palette/898aa6c9bbcfb7d3dfd6efed"
  },
  {
    color1: "290001",
    color2: "87431d",
    color3: "c87941",
    color4: "dbcbbd",
    url: "https://colorhunt.co/palette/29000187431dc87941dbcbbd"
  },
  {
    color1: "865858",
    color2: "8e7f7f",
    color3: "bbbbbb",
    color4: "e2d5d5",
    url: "https://colorhunt.co/palette/8658588e7f7fbbbbbbe2d5d5"
  },
  {
    color1: "f9f9f9",
    color2: "ffe0ac",
    color3: "ffacb7",
    color4: "6886c5",
    url: "https://colorhunt.co/palette/f9f9f9ffe0acffacb76886c5"
  },
  {
    color1: "e8e8e8",
    color2: "f05454",
    color3: "30475e",
    color4: "222831",
    url: "https://colorhunt.co/palette/e8e8e8f0545430475e222831"
  },
  {
    color1: "f0e9d2",
    color2: "e6ddc4",
    color3: "678983",
    color4: "181d31",
    url: "https://colorhunt.co/palette/f0e9d2e6ddc4678983181d31"
  },
  {
    color1: "c2ded1",
    color2: "ece5c7",
    color3: "cdc2ae",
    color4: "354259",
    url: "https://colorhunt.co/palette/c2ded1ece5c7cdc2ae354259"
  },
  {
    color1: "283149",
    color2: "404b69",
    color3: "f73859",
    color4: "dbedf3",
    url: "https://colorhunt.co/palette/283149404b69f73859dbedf3"
  },
  {
    color1: "d3dedc",
    color2: "92a9bd",
    color3: "7c99ac",
    color4: "ffefef",
    url: "https://colorhunt.co/palette/d3dedc92a9bd7c99acffefef"
  },
  {
    color1: "6c4a4a",
    color2: "c89595",
    color3: "ddbebe",
    color4: "ededed",
    url: "https://colorhunt.co/palette/6c4a4ac89595ddbebeededed"
  },
  {
    color1: "fcdada",
    color2: "ffa5a5",
    color3: "5c969e",
    color4: "3d7ea6",
    url: "https://colorhunt.co/palette/fcdadaffa5a55c969e3d7ea6"
  },
  {
    color1: "120078",
    color2: "9d0191",
    color3: "fd3a69",
    color4: "fecd1a",
    url: "https://colorhunt.co/palette/1200789d0191fd3a69fecd1a"
  },
  {
    color1: "261c2c",
    color2: "3e2c41",
    color3: "5c527f",
    color4: "6e85b2",
    url: "https://colorhunt.co/palette/261c2c3e2c415c527f6e85b2"
  },
  {
    color1: "393e46",
    color2: "6d9886",
    color3: "f2e7d5",
    color4: "f7f7f7",
    url: "https://colorhunt.co/palette/393e466d9886f2e7d5f7f7f7"
  },
  {
    color1: "251b37",
    color2: "372948",
    color3: "ffcaca",
    color4: "ffecef",
    url: "https://colorhunt.co/palette/251b37372948ffcacaffecef"
  },
  {
    color1: "a0c49d",
    color2: "c4d7b2",
    color3: "e1ecc8",
    color4: "f7ffe5",
    url: "https://colorhunt.co/palette/a0c49dc4d7b2e1ecc8f7ffe5"
  },
  {
    color1: "fff3e2",
    color2: "ffe5ca",
    color3: "fa9884",
    color4: "e74646",
    url: "https://colorhunt.co/palette/fff3e2ffe5cafa9884e74646"
  },
  {
    color1: "f0e3ca",
    color2: "ff8303",
    color3: "a35709",
    color4: "1b1a17",
    url: "https://colorhunt.co/palette/f0e3caff8303a357091b1a17"
  },
  {
    color1: "94d0cc",
    color2: "eec4c4",
    color3: "f29191",
    color4: "d1d9d9",
    url: "https://colorhunt.co/palette/94d0cceec4c4f29191d1d9d9"
  },
  {
    color1: "ffefa0",
    color2: "ffd57e",
    color3: "fca652",
    color4: "ac4b1c",
    url: "https://colorhunt.co/palette/ffefa0ffd57efca652ac4b1c"
  },
  {
    color1: "e9efc0",
    color2: "b4e197",
    color3: "83bd75",
    color4: "4e944f",
    url: "https://colorhunt.co/palette/e9efc0b4e19783bd754e944f"
  },
  {
    color1: "cefff1",
    color2: "ace7ef",
    color3: "a6acec",
    color4: "a56cc1",
    url: "https://colorhunt.co/palette/cefff1ace7efa6aceca56cc1"
  },
  {
    color1: "420516",
    color2: "7d1935",
    color3: "b42b51",
    color4: "e63e6d",
    url: "https://colorhunt.co/palette/4205167d1935b42b51e63e6d"
  },
  {
    color1: "99a98f",
    color2: "c1d0b5",
    color3: "d6e8db",
    color4: "fff8de",
    url: "https://colorhunt.co/palette/99a98fc1d0b5d6e8dbfff8de"
  },
  {
    color1: "303a52",
    color2: "574b90",
    color3: "9e579d",
    color4: "fc85ae",
    url: "https://colorhunt.co/palette/303a52574b909e579dfc85ae"
  },
  {
    color1: "822659",
    color2: "b34180",
    color3: "e36bae",
    color4: "f8a1d1",
    url: "https://colorhunt.co/palette/822659b34180e36baef8a1d1"
  },
  {
    color1: "00204a",
    color2: "005792",
    color3: "00bbf0",
    color4: "d9faff",
    url: "https://colorhunt.co/palette/00204a00579200bbf0d9faff"
  },
  {
    color1: "fef0ff",
    color2: "d6c8ff",
    color3: "c79ecf",
    color4: "7e6bc4",
    url: "https://colorhunt.co/palette/fef0ffd6c8ffc79ecf7e6bc4"
  },
  {
    color1: "faf6e9",
    color2: "ece8d9",
    color3: "fffdf6",
    color4: "494949",
    url: "https://colorhunt.co/palette/faf6e9ece8d9fffdf6494949"
  },
  {
    color1: "212121",
    color2: "6d9886",
    color3: "d9cab3",
    color4: "f6f6f6",
    url: "https://colorhunt.co/palette/2121216d9886d9cab3f6f6f6"
  },
  {
    color1: "e8f3d6",
    color2: "fcf9be",
    color3: "ffdca9",
    color4: "faab78",
    url: "https://colorhunt.co/palette/e8f3d6fcf9beffdca9faab78"
  },
  {
    color1: "362222",
    color2: "171010",
    color3: "423f3e",
    color4: "2b2b2b",
    url: "https://colorhunt.co/palette/362222171010423f3e2b2b2b"
  },
  {
    color1: "d92027",
    color2: "ff9234",
    color3: "ffcd3c",
    color4: "35d0ba",
    url: "https://colorhunt.co/palette/d92027ff9234ffcd3c35d0ba"
  },
  {
    color1: "041c32",
    color2: "04293a",
    color3: "064663",
    color4: "ecb365",
    url: "https://colorhunt.co/palette/041c3204293a064663ecb365"
  },
  {
    color1: "fa7070",
    color2: "fbf2cf",
    color3: "c6ebc5",
    color4: "a1c298",
    url: "https://colorhunt.co/palette/fa7070fbf2cfc6ebc5a1c298"
  },
  {
    color1: "f8f5f1",
    color2: "f8a488",
    color3: "5aa897",
    color4: "45526c",
    url: "https://colorhunt.co/palette/f8f5f1f8a4885aa89745526c"
  },
  {
    color1: "b9f3fc",
    color2: "aee2ff",
    color3: "93c6e7",
    color4: "fedeff",
    url: "https://colorhunt.co/palette/b9f3fcaee2ff93c6e7fedeff"
  },
  {
    color1: "ffc93c",
    color2: "07689f",
    color3: "40a8c4",
    color4: "a2d5f2",
    url: "https://colorhunt.co/palette/ffc93c07689f40a8c4a2d5f2"
  },
  {
    color1: "c8c6a7",
    color2: "92967d",
    color3: "6e7c7c",
    color4: "435560",
    url: "https://colorhunt.co/palette/c8c6a792967d6e7c7c435560"
  },
  {
    color1: "96ceb4",
    color2: "ffeead",
    color3: "d9534f",
    color4: "ffad60",
    url: "https://colorhunt.co/palette/96ceb4ffeeadd9534fffad60"
  },
  {
    color1: "35477d",
    color2: "6c5b7b",
    color3: "c06c84",
    color4: "f67280",
    url: "https://colorhunt.co/palette/35477d6c5b7bc06c84f67280"
  },
  {
    color1: "f3d1f4",
    color2: "f5fcc1",
    color3: "bae5e5",
    color4: "98d6ea",
    url: "https://colorhunt.co/palette/f3d1f4f5fcc1bae5e598d6ea"
  },
  {
    color1: "6867ac",
    color2: "a267ac",
    color3: "ce7bb0",
    color4: "ffbcd1",
    url: "https://colorhunt.co/palette/6867aca267acce7bb0ffbcd1"
  },
  {
    color1: "15b7b9",
    color2: "10ddc2",
    color3: "f5f5f5",
    color4: "f57170",
    url: "https://colorhunt.co/palette/15b7b910ddc2f5f5f5f57170"
  },
  {
    color1: "ffeedb",
    color2: "ffd8cc",
    color3: "ffbd9b",
    color4: "0a1d37",
    url: "https://colorhunt.co/palette/ffeedbffd8ccffbd9b0a1d37"
  },
  {
    color1: "68b0ab",
    color2: "8fc0a9",
    color3: "c8d5b9",
    color4: "faf3dd",
    url: "https://colorhunt.co/palette/68b0ab8fc0a9c8d5b9faf3dd"
  },
  {
    color1: "f9f7cf",
    color2: "f2dcbb",
    color3: "bbbbbb",
    color4: "aaaaaa",
    url: "https://colorhunt.co/palette/f9f7cff2dcbbbbbbbbaaaaaa"
  },
  {
    color1: "94b4a4",
    color2: "d2f5e3",
    color3: "e5c5b5",
    color4: "f4d9c6",
    url: "https://colorhunt.co/palette/94b4a4d2f5e3e5c5b5f4d9c6"
  },
  {
    color1: "1a1a2e",
    color2: "16213e",
    color3: "0f3460",
    color4: "e94560",
    url: "https://colorhunt.co/palette/1a1a2e16213e0f3460e94560"
  },
  {
    color1: "eff5f5",
    color2: "d6e4e5",
    color3: "497174",
    color4: "eb6440",
    url: "https://colorhunt.co/palette/eff5f5d6e4e5497174eb6440"
  },
  {
    color1: "a2d2ff",
    color2: "fef9ef",
    color3: "ff865e",
    color4: "fee440",
    url: "https://colorhunt.co/palette/a2d2fffef9efff865efee440"
  },
  {
    color1: "cdf0ea",
    color2: "f9f9f9",
    color3: "ecc5fb",
    color4: "faf4b7",
    url: "https://colorhunt.co/palette/cdf0eaf9f9f9ecc5fbfaf4b7"
  },
  {
    color1: "383e56",
    color2: "f69e7b",
    color3: "eedad1",
    color4: "d4b5b0",
    url: "https://colorhunt.co/palette/383e56f69e7beedad1d4b5b0"
  },
  {
    color1: "f1d4d4",
    color2: "e6739f",
    color3: "cc0e74",
    color4: "790c5a",
    url: "https://colorhunt.co/palette/f1d4d4e6739fcc0e74790c5a"
  },
  {
    color1: "ffafaf",
    color2: "fbffe2",
    color3: "ffebcc",
    color4: "ff9999",
    url: "https://colorhunt.co/palette/ffafaffbffe2ffebccff9999"
  },
  {
    color1: "fffbf5",
    color2: "f7efe5",
    color3: "c3acd0",
    color4: "674188",
    url: "https://colorhunt.co/palette/fffbf5f7efe5c3acd0674188"
  },
  {
    color1: "ffe5b9",
    color2: "eff8ff",
    color3: "c9cbff",
    color4: "a6a9b6",
    url: "https://colorhunt.co/palette/ffe5b9eff8ffc9cbffa6a9b6"
  },
  {
    color1: "f9e0ae",
    color2: "fc8621",
    color3: "c24914",
    color4: "682c0e",
    url: "https://colorhunt.co/palette/f9e0aefc8621c24914682c0e"
  },
  {
    color1: "f1e3cb",
    color2: "f9b384",
    color3: "ca5116",
    color4: "581c0c",
    url: "https://colorhunt.co/palette/f1e3cbf9b384ca5116581c0c"
  },
  {
    color1: "52006a",
    color2: "cd113b",
    color3: "ff7600",
    color4: "ffa900",
    url: "https://colorhunt.co/palette/52006acd113bff7600ffa900"
  },
  {
    color1: "f4f3f3",
    color2: "dfdfdf",
    color3: "bfd8d5",
    color4: "b1bed5",
    url: "https://colorhunt.co/palette/f4f3f3dfdfdfbfd8d5b1bed5"
  },
  {
    color1: "fbf8f1",
    color2: "f7ecde",
    color3: "e9dac1",
    color4: "54bab9",
    url: "https://colorhunt.co/palette/fbf8f1f7ecdee9dac154bab9"
  },
  {
    color1: "ffcb91",
    color2: "ffefa1",
    color3: "94ebcd",
    color4: "6ddccf",
    url: "https://colorhunt.co/palette/ffcb91ffefa194ebcd6ddccf"
  },
  {
    color1: "34626c",
    color2: "839b97",
    color3: "cfd3ce",
    color4: "c6b497",
    url: "https://colorhunt.co/palette/34626c839b97cfd3cec6b497"
  },
  {
    color1: "5d5b6a",
    color2: "758184",
    color3: "cfb495",
    color4: "f5cdaa",
    url: "https://colorhunt.co/palette/5d5b6a758184cfb495f5cdaa"
  },
  {
    color1: "f0e9e9",
    color2: "c19191",
    color3: "aa7070",
    color4: "8b5d5d",
    url: "https://colorhunt.co/palette/f0e9e9c19191aa70708b5d5d"
  },
  {
    color1: "a7d2cb",
    color2: "f2d388",
    color3: "c98474",
    color4: "874c62",
    url: "https://colorhunt.co/palette/a7d2cbf2d388c98474874c62"
  },
  {
    color1: "66bfbf",
    color2: "eaf6f6",
    color3: "fcfefe",
    color4: "f76b8a",
    url: "https://colorhunt.co/palette/66bfbfeaf6f6fcfefef76b8a"
  },
  {
    color1: "37306b",
    color2: "66347f",
    color3: "9e4784",
    color4: "d27685",
    url: "https://colorhunt.co/palette/37306b66347f9e4784d27685"
  },
  {
    color1: "65647c",
    color2: "8b7e74",
    color3: "c7bca1",
    color4: "f1d3b3",
    url: "https://colorhunt.co/palette/65647c8b7e74c7bca1f1d3b3"
  },
  {
    color1: "e26a2c",
    color2: "ff8243",
    color3: "fda65d",
    color4: "ffd07f",
    url: "https://colorhunt.co/palette/e26a2cff8243fda65dffd07f"
  },
  {
    color1: "3db2ff",
    color2: "ffedda",
    color3: "ffb830",
    color4: "ff2442",
    url: "https://colorhunt.co/palette/3db2ffffeddaffb830ff2442"
  },
  {
    color1: "e9d5ca",
    color2: "827397",
    color3: "4d4c7d",
    color4: "363062",
    url: "https://colorhunt.co/palette/e9d5ca8273974d4c7d363062"
  },
  {
    color1: "cee5d0",
    color2: "f3f0d7",
    color3: "e0c097",
    color4: "ff7878",
    url: "https://colorhunt.co/palette/cee5d0f3f0d7e0c097ff7878"
  },
  {
    color1: "0c134f",
    color2: "1d267d",
    color3: "5c469c",
    color4: "d4adfc",
    url: "https://colorhunt.co/palette/0c134f1d267d5c469cd4adfc"
  },
  {
    color1: "f6f6f6",
    color2: "c7ffd8",
    color3: "98ded9",
    color4: "161d6f",
    url: "https://colorhunt.co/palette/f6f6f6c7ffd898ded9161d6f"
  },
  {
    color1: "ff731d",
    color2: "fff7e9",
    color3: "5f9df7",
    color4: "1746a2",
    url: "https://colorhunt.co/palette/ff731dfff7e95f9df71746a2"
  },
  {
    color1: "b590ca",
    color2: "a8d3da",
    color3: "f5cab3",
    color4: "f3ecb8",
    url: "https://colorhunt.co/palette/b590caa8d3daf5cab3f3ecb8"
  },
  {
    color1: "ccafaf",
    color2: "ffcac2",
    color3: "fc9d9d",
    color4: "900c3f",
    url: "https://colorhunt.co/palette/ccafafffcac2fc9d9d900c3f"
  },
  {
    color1: "161616",
    color2: "346751",
    color3: "c84b31",
    color4: "ecdbba",
    url: "https://colorhunt.co/palette/161616346751c84b31ecdbba"
  },
  {
    color1: "fffafa",
    color2: "ffe0e0",
    color3: "ffc0d0",
    color4: "efdfbf",
    url: "https://colorhunt.co/palette/fffafaffe0e0ffc0d0efdfbf"
  },
  {
    color1: "00a19d",
    color2: "fff8e5",
    color3: "ffb344",
    color4: "e05d5d",
    url: "https://colorhunt.co/palette/00a19dfff8e5ffb344e05d5d"
  },
  {
    color1: "06283d",
    color2: "1363df",
    color3: "47b5ff",
    color4: "dff6ff",
    url: "https://colorhunt.co/palette/06283d1363df47b5ffdff6ff"
  },
  {
    color1: "e3d9ca",
    color2: "95a792",
    color3: "596c68",
    color4: "403f48",
    url: "https://colorhunt.co/palette/e3d9ca95a792596c68403f48"
  },
  {
    color1: "32502e",
    color2: "406343",
    color3: "ece7b4",
    color4: "f3efcc",
    url: "https://colorhunt.co/palette/32502e406343ece7b4f3efcc"
  },
  {
    color1: "c3f8ff",
    color2: "abd9ff",
    color3: "fff6bf",
    color4: "ffebad",
    url: "https://colorhunt.co/palette/c3f8ffabd9fffff6bfffebad"
  },
  {
    color1: "e4eddb",
    color2: "307672",
    color3: "144d53",
    color4: "1a3c40",
    url: "https://colorhunt.co/palette/e4eddb307672144d531a3c40"
  },
  {
    color1: "fceef5",
    color2: "f3bad6",
    color3: "ea86b6",
    color4: "e05297",
    url: "https://colorhunt.co/palette/fceef5f3bad6ea86b6e05297"
  },
  {
    color1: "ff4646",
    color2: "ff8585",
    color3: "ffb396",
    color4: "fff5c0",
    url: "https://colorhunt.co/palette/ff4646ff8585ffb396fff5c0"
  },
  {
    color1: "632626",
    color2: "9d5353",
    color3: "bf8b67",
    color4: "dacc96",
    url: "https://colorhunt.co/palette/6326269d5353bf8b67dacc96"
  },
  {
    color1: "206a5d",
    color2: "81b214",
    color3: "ffcc29",
    color4: "f58634",
    url: "https://colorhunt.co/palette/206a5d81b214ffcc29f58634"
  },
  {
    color1: "ffaaa5",
    color2: "fcf8f3",
    color3: "ffd3b6",
    color4: "698474",
    url: "https://colorhunt.co/palette/ffaaa5fcf8f3ffd3b6698474"
  },
  {
    color1: "a9eee6",
    color2: "fefaec",
    color3: "f9a1bc",
    color4: "625772",
    url: "https://colorhunt.co/palette/a9eee6fefaecf9a1bc625772"
  },
  {
    color1: "082032",
    color2: "2c394b",
    color3: "334756",
    color4: "ff4c29",
    url: "https://colorhunt.co/palette/0820322c394b334756ff4c29"
  },
  {
    color1: "f6ffde",
    color2: "e3f2c1",
    color3: "c9dbb2",
    color4: "aac8a7",
    url: "https://colorhunt.co/palette/f6ffdee3f2c1c9dbb2aac8a7"
  },
  {
    color1: "e8ecf1",
    color2: "b5cfd8",
    color3: "7393a7",
    color4: "6c737e",
    url: "https://colorhunt.co/palette/e8ecf1b5cfd87393a76c737e"
  },
  {
    color1: "ff7b54",
    color2: "ffb26b",
    color3: "ffd56b",
    color4: "939b62",
    url: "https://colorhunt.co/palette/ff7b54ffb26bffd56b939b62"
  },
  {
    color1: "937dc2",
    color2: "c689c6",
    color3: "e8a0bf",
    color4: "fcc5c0",
    url: "https://colorhunt.co/palette/937dc2c689c6e8a0bffcc5c0"
  },
  {
    color1: "907fa4",
    color2: "a58faa",
    color3: "a6d6d6",
    color4: "ededd0",
    url: "https://colorhunt.co/palette/907fa4a58faaa6d6d6ededd0"
  },
  {
    color1: "effffd",
    color2: "b8fff9",
    color3: "85f4ff",
    color4: "42c2ff",
    url: "https://colorhunt.co/palette/effffdb8fff985f4ff42c2ff"
  },
  {
    color1: "863a6f",
    color2: "975c8d",
    color3: "d989b5",
    color4: "ffadbc",
    url: "https://colorhunt.co/palette/863a6f975c8dd989b5ffadbc"
  },
  {
    color1: "e7e6e1",
    color2: "f7f6e7",
    color3: "f2a154",
    color4: "314e52",
    url: "https://colorhunt.co/palette/e7e6e1f7f6e7f2a154314e52"
  },
  {
    color1: "ffa5a5",
    color2: "ffffc2",
    color3: "c8e7ed",
    color4: "bfcfff",
    url: "https://colorhunt.co/palette/ffa5a5ffffc2c8e7edbfcfff"
  },
  {
    color1: "579bb1",
    color2: "e1d7c6",
    color3: "ece8dd",
    color4: "f8f4ea",
    url: "https://colorhunt.co/palette/579bb1e1d7c6ece8ddf8f4ea"
  },
  {
    color1: "a66cff",
    color2: "9c9efe",
    color3: "afb4ff",
    color4: "b1e1ff",
    url: "https://colorhunt.co/palette/a66cff9c9efeafb4ffb1e1ff"
  },
  {
    color1: "dbe9b7",
    color2: "fdfdf6",
    color3: "f4dada",
    color4: "b8b2a6",
    url: "https://colorhunt.co/palette/dbe9b7fdfdf6f4dadab8b2a6"
  },
  {
    color1: "fa26a0",
    color2: "05dfd7",
    color3: "a3f7bf",
    color4: "fff591",
    url: "https://colorhunt.co/palette/fa26a005dfd7a3f7bffff591"
  },
  {
    color1: "75cfb8",
    color2: "bbdfc8",
    color3: "f0e5d8",
    color4: "ffc478",
    url: "https://colorhunt.co/palette/75cfb8bbdfc8f0e5d8ffc478"
  },
  {
    color1: "7fbcd2",
    color2: "a5f1e9",
    color3: "e1ffee",
    color4: "ffeeaf",
    url: "https://colorhunt.co/palette/7fbcd2a5f1e9e1ffeeffeeaf"
  },
  {
    color1: "11cbd7",
    color2: "c6f1e7",
    color3: "f0fff3",
    color4: "fa4659",
    url: "https://colorhunt.co/palette/11cbd7c6f1e7f0fff3fa4659"
  },
  {
    color1: "f5efe7",
    color2: "d8c4b6",
    color3: "4f709c",
    color4: "213555",
    url: "https://colorhunt.co/palette/f5efe7d8c4b64f709c213555"
  },
  {
    color1: "d06224",
    color2: "ae431e",
    color3: "8a8635",
    color4: "e9c891",
    url: "https://colorhunt.co/palette/d06224ae431e8a8635e9c891"
  },
  {
    color1: "e2c2b9",
    color2: "bfd8b8",
    color3: "e7eab5",
    color4: "f1f7e7",
    url: "https://colorhunt.co/palette/e2c2b9bfd8b8e7eab5f1f7e7"
  },
  {
    color1: "884a39",
    color2: "c38154",
    color3: "ffc26f",
    color4: "f9e0bb",
    url: "https://colorhunt.co/palette/884a39c38154ffc26ff9e0bb"
  },
  {
    color1: "3c4245",
    color2: "5f6769",
    color3: "719192",
    color4: "dfcdc3",
    url: "https://colorhunt.co/palette/3c42455f6769719192dfcdc3"
  },
  {
    color1: "ada2ff",
    color2: "c0deff",
    color3: "ffe5f1",
    color4: "fff8e1",
    url: "https://colorhunt.co/palette/ada2ffc0deffffe5f1fff8e1"
  },
  {
    color1: "c0d8c0",
    color2: "f5eedc",
    color3: "dd4a48",
    color4: "ecb390",
    url: "https://colorhunt.co/palette/c0d8c0f5eedcdd4a48ecb390"
  },
  {
    color1: "fcf9ea",
    color2: "badfdb",
    color3: "f8a978",
    color4: "ffc5a1",
    url: "https://colorhunt.co/palette/fcf9eabadfdbf8a978ffc5a1"
  },
  {
    color1: "ffdada",
    color2: "dbf6e9",
    color3: "9ddfd3",
    color4: "31326f",
    url: "https://colorhunt.co/palette/ffdadadbf6e99ddfd331326f"
  },
  {
    color1: "e8505b",
    color2: "f9d56e",
    color3: "f3ecc2",
    color4: "14b1ab",
    url: "https://colorhunt.co/palette/e8505bf9d56ef3ecc214b1ab"
  },
  {
    color1: "cabfab",
    color2: "dfd8c8",
    color3: "41444b",
    color4: "52575d",
    url: "https://colorhunt.co/palette/cabfabdfd8c841444b52575d"
  },
  {
    color1: "316b83",
    color2: "6d8299",
    color3: "8ca1a5",
    color4: "d5bfbf",
    url: "https://colorhunt.co/palette/316b836d82998ca1a5d5bfbf"
  },
  {
    color1: "beebe9",
    color2: "fffdf9",
    color3: "ffe3ed",
    color4: "8ac6d1",
    url: "https://colorhunt.co/palette/beebe9fffdf9ffe3ed8ac6d1"
  },
  {
    color1: "aae3e2",
    color2: "d9acf5",
    color3: "ffcefe",
    color4: "fdebed",
    url: "https://colorhunt.co/palette/aae3e2d9acf5ffcefefdebed"
  },
  {
    color1: "d3f6f3",
    color2: "f9fce1",
    color3: "fee9b2",
    color4: "fbd1b7",
    url: "https://colorhunt.co/palette/d3f6f3f9fce1fee9b2fbd1b7"
  },
  {
    color1: "f0e3ff",
    color2: "d89cf6",
    color3: "916dd5",
    color4: "3e206d",
    url: "https://colorhunt.co/palette/f0e3ffd89cf6916dd53e206d"
  },
  {
    color1: "89b5af",
    color2: "96c7c1",
    color3: "ded9c4",
    color4: "d0cab2",
    url: "https://colorhunt.co/palette/89b5af96c7c1ded9c4d0cab2"
  },
  {
    color1: "ffa41b",
    color2: "000839",
    color3: "005082",
    color4: "00a8cc",
    url: "https://colorhunt.co/palette/ffa41b00083900508200a8cc"
  },
  {
    color1: "3a0088",
    color2: "930077",
    color3: "e61c5d",
    color4: "ffbd39",
    url: "https://colorhunt.co/palette/3a0088930077e61c5dffbd39"
  },
  {
    color1: "162447",
    color2: "1f4068",
    color3: "1b1b2f",
    color4: "e43f5a",
    url: "https://colorhunt.co/palette/1624471f40681b1b2fe43f5a"
  },
  {
    color1: "f7f7f7",
    color2: "eeeeee",
    color3: "393e46",
    color4: "929aab",
    url: "https://colorhunt.co/palette/f7f7f7eeeeee393e46929aab"
  },
  {
    color1: "a9eee6",
    color2: "fefaec",
    color3: "f38181",
    color4: "625772",
    url: "https://colorhunt.co/palette/a9eee6fefaecf38181625772"
  },
  {
    color1: "911f27",
    color2: "630a10",
    color3: "fcf0c8",
    color4: "face7f",
    url: "https://colorhunt.co/palette/911f27630a10fcf0c8face7f"
  },
  {
    color1: "eaafaf",
    color2: "a2738c",
    color3: "645c84",
    color4: "427996",
    url: "https://colorhunt.co/palette/eaafafa2738c645c84427996"
  },
  {
    color1: "ffe15d",
    color2: "f49d1a",
    color3: "dc3535",
    color4: "b01e68",
    url: "https://colorhunt.co/palette/ffe15df49d1adc3535b01e68"
  },
  {
    color1: "d7e9b9",
    color2: "fffbac",
    color3: "ffd495",
    color4: "faab78",
    url: "https://colorhunt.co/palette/d7e9b9fffbacffd495faab78"
  },
  {
    color1: "628395",
    color2: "262a53",
    color3: "ffa0a0",
    color4: "ffe3e3",
    url: "https://colorhunt.co/palette/628395262a53ffa0a0ffe3e3"
  },
  {
    color1: "053742",
    color2: "39a2db",
    color3: "a2dbfa",
    color4: "e8f0f2",
    url: "https://colorhunt.co/palette/05374239a2dba2dbfae8f0f2"
  },
  {
    color1: "00af91",
    color2: "007965",
    color3: "f58634",
    color4: "ffcc29",
    url: "https://colorhunt.co/palette/00af91007965f58634ffcc29"
  },
  {
    color1: "4c3a51",
    color2: "774360",
    color3: "b25068",
    color4: "e7ab79",
    url: "https://colorhunt.co/palette/4c3a51774360b25068e7ab79"
  },
  {
    color1: "f4f9f4",
    color2: "c4e3cb",
    color3: "8aae92",
    color4: "616161",
    url: "https://colorhunt.co/palette/f4f9f4c4e3cb8aae92616161"
  },
  {
    color1: "d77fa1",
    color2: "e6b2c6",
    color3: "fef6fb",
    color4: "d6e5fa",
    url: "https://colorhunt.co/palette/d77fa1e6b2c6fef6fbd6e5fa"
  },
  {
    color1: "ffdede",
    color2: "fdf5ca",
    color3: "ffdfaf",
    color4: "f2bb7b",
    url: "https://colorhunt.co/palette/ffdedefdf5caffdfaff2bb7b"
  },
  {
    color1: "f7f4e3",
    color2: "d2e1c8",
    color3: "fee4a6",
    color4: "f9c4aa",
    url: "https://colorhunt.co/palette/f7f4e3d2e1c8fee4a6f9c4aa"
  },
  {
    color1: "845460",
    color2: "ead3cb",
    color3: "bdc7c9",
    color4: "2b4f60",
    url: "https://colorhunt.co/palette/845460ead3cbbdc7c92b4f60"
  },
  {
    color1: "ef4f4f",
    color2: "ee9595",
    color3: "ffcda3",
    color4: "74c7b8",
    url: "https://colorhunt.co/palette/ef4f4fee9595ffcda374c7b8"
  },
  {
    color1: "070d59",
    color2: "1f3c88",
    color3: "5893d4",
    color4: "ceddef",
    url: "https://colorhunt.co/palette/070d591f3c885893d4ceddef"
  },
  {
    color1: "f1c5c5",
    color2: "faf0af",
    color3: "e5edb7",
    color4: "8bcdcd",
    url: "https://colorhunt.co/palette/f1c5c5faf0afe5edb78bcdcd"
  },
  {
    color1: "f3f4ed",
    color2: "536162",
    color3: "424642",
    color4: "c06014",
    url: "https://colorhunt.co/palette/f3f4ed536162424642c06014"
  },
  {
    color1: "f8b400",
    color2: "faf5e4",
    color3: "2c786c",
    color4: "004445",
    url: "https://colorhunt.co/palette/f8b400faf5e42c786c004445"
  },
  {
    color1: "864000",
    color2: "d44000",
    color3: "ff7a00",
    color4: "ffefcf",
    url: "https://colorhunt.co/palette/864000d44000ff7a00ffefcf"
  },
  {
    color1: "ffc93c",
    color2: "dbf6e9",
    color3: "9ddfd3",
    color4: "31326f",
    url: "https://colorhunt.co/palette/ffc93cdbf6e99ddfd331326f"
  },
  {
    color1: "9fc088",
    color2: "e8c07d",
    color3: "cc704b",
    color4: "614124",
    url: "https://colorhunt.co/palette/9fc088e8c07dcc704b614124"
  },
  {
    color1: "371b58",
    color2: "4c3575",
    color3: "5b4b8a",
    color4: "7858a6",
    url: "https://colorhunt.co/palette/371b584c35755b4b8a7858a6"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "00adb5",
    color4: "00fff5",
    url: "https://colorhunt.co/palette/222831393e4600adb500fff5"
  },
  {
    color1: "2f8f9d",
    color2: "3bacb6",
    color3: "82dbd8",
    color4: "b3e8e5",
    url: "https://colorhunt.co/palette/2f8f9d3bacb682dbd8b3e8e5"
  },
  {
    color1: "f7f3e9",
    color2: "a3d2ca",
    color3: "5eaaa8",
    color4: "f05945",
    url: "https://colorhunt.co/palette/f7f3e9a3d2ca5eaaa8f05945"
  },
  {
    color1: "7fc8a9",
    color2: "d5eebb",
    color3: "5f7a61",
    color4: "444941",
    url: "https://colorhunt.co/palette/7fc8a9d5eebb5f7a61444941"
  },
  {
    color1: "060047",
    color2: "b3005e",
    color3: "e90064",
    color4: "ff5f9e",
    url: "https://colorhunt.co/palette/060047b3005ee90064ff5f9e"
  },
  {
    color1: "f9f8eb",
    color2: "a7d7c5",
    color3: "74b49b",
    color4: "5c8d89",
    url: "https://colorhunt.co/palette/f9f8eba7d7c574b49b5c8d89"
  },
  {
    color1: "766161",
    color2: "87a7b3",
    color3: "cdc7be",
    color4: "e1f1dd",
    url: "https://colorhunt.co/palette/76616187a7b3cdc7bee1f1dd"
  },
  {
    color1: "e7e6e1",
    color2: "f7f6e7",
    color3: "c1c0b9",
    color4: "537791",
    url: "https://colorhunt.co/palette/e7e6e1f7f6e7c1c0b9537791"
  },
  {
    color1: "f5f4f4",
    color2: "cae4db",
    color3: "cdac81",
    color4: "00303f",
    url: "https://colorhunt.co/palette/f5f4f4cae4dbcdac8100303f"
  },
  {
    color1: "5800ff",
    color2: "0096ff",
    color3: "00d7ff",
    color4: "72ffff",
    url: "https://colorhunt.co/palette/5800ff0096ff00d7ff72ffff"
  },
  {
    color1: "a6e4e7",
    color2: "f9f9f9",
    color3: "ebcbae",
    color4: "8f8787",
    url: "https://colorhunt.co/palette/a6e4e7f9f9f9ebcbae8f8787"
  },
  {
    color1: "e0fcff",
    color2: "90f2ff",
    color3: "6eb6ff",
    color4: "7098da",
    url: "https://colorhunt.co/palette/e0fcff90f2ff6eb6ff7098da"
  },
  {
    color1: "ffe1e1",
    color2: "90a17d",
    color3: "829460",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/ffe1e190a17d829460eeeeee"
  },
  {
    color1: "f5c6a5",
    color2: "ff7777",
    color3: "a2416b",
    color4: "852747",
    url: "https://colorhunt.co/palette/f5c6a5ff7777a2416b852747"
  },
  {
    color1: "cdf0ea",
    color2: "f9f9f9",
    color3: "f6c6ea",
    color4: "faf4b7",
    url: "https://colorhunt.co/palette/cdf0eaf9f9f9f6c6eafaf4b7"
  },
  {
    color1: "483838",
    color2: "42855b",
    color3: "90b77d",
    color4: "d2d79f",
    url: "https://colorhunt.co/palette/48383842855b90b77dd2d79f"
  },
  {
    color1: "f4f9f4",
    color2: "a7d7c5",
    color3: "74b49b",
    color4: "5c8d89",
    url: "https://colorhunt.co/palette/f4f9f4a7d7c574b49b5c8d89"
  },
  {
    color1: "ffe699",
    color2: "fff9b6",
    color3: "ff9292",
    color4: "ffccd2",
    url: "https://colorhunt.co/palette/ffe699fff9b6ff9292ffccd2"
  },
  {
    color1: "eb455f",
    color2: "fcffe7",
    color3: "bad7e9",
    color4: "2b3467",
    url: "https://colorhunt.co/palette/eb455ffcffe7bad7e92b3467"
  },
  {
    color1: "6c4ab6",
    color2: "8d72e1",
    color3: "8d9eff",
    color4: "b9e0ff",
    url: "https://colorhunt.co/palette/6c4ab68d72e18d9effb9e0ff"
  },
  {
    color1: "726a95",
    color2: "709fb0",
    color3: "a0c1b8",
    color4: "f4ebc1",
    url: "https://colorhunt.co/palette/726a95709fb0a0c1b8f4ebc1"
  },
  {
    color1: "191825",
    color2: "865dff",
    color3: "e384ff",
    color4: "ffa3fd",
    url: "https://colorhunt.co/palette/191825865dffe384ffffa3fd"
  },
  {
    color1: "9ad3bc",
    color2: "f3eac2",
    color3: "f5b461",
    color4: "ec524b",
    url: "https://colorhunt.co/palette/9ad3bcf3eac2f5b461ec524b"
  },
  {
    color1: "382933",
    color2: "3b5249",
    color3: "519872",
    color4: "a4b494",
    url: "https://colorhunt.co/palette/3829333b5249519872a4b494"
  },
  {
    color1: "2e0249",
    color2: "570a57",
    color3: "a91079",
    color4: "f806cc",
    url: "https://colorhunt.co/palette/2e0249570a57a91079f806cc"
  },
  {
    color1: "99b898",
    color2: "feceab",
    color3: "ff847c",
    color4: "e84a5f",
    url: "https://colorhunt.co/palette/99b898feceabff847ce84a5f"
  },
  {
    color1: "4b778d",
    color2: "28b5b5",
    color3: "8fd9a8",
    color4: "d2e69c",
    url: "https://colorhunt.co/palette/4b778d28b5b58fd9a8d2e69c"
  },
  {
    color1: "8fbdd3",
    color2: "e4d1b9",
    color3: "be8c63",
    color4: "a97155",
    url: "https://colorhunt.co/palette/8fbdd3e4d1b9be8c63a97155"
  },
  {
    color1: "c7f3ff",
    color2: "fdc7ff",
    color3: "ffdcf5",
    color4: "f2f4c3",
    url: "https://colorhunt.co/palette/c7f3fffdc7ffffdcf5f2f4c3"
  },
  {
    color1: "567189",
    color2: "7b8fa1",
    color3: "cfb997",
    color4: "fad6a5",
    url: "https://colorhunt.co/palette/5671897b8fa1cfb997fad6a5"
  },
  {
    color1: "f3f9fb",
    color2: "87c0cd",
    color3: "226597",
    color4: "113f67",
    url: "https://colorhunt.co/palette/f3f9fb87c0cd226597113f67"
  },
  {
    color1: "000000",
    color2: "3e065f",
    color3: "700b97",
    color4: "8e05c2",
    url: "https://colorhunt.co/palette/0000003e065f700b978e05c2"
  },
  {
    color1: "ede6db",
    color2: "417d7a",
    color3: "1d5c63",
    color4: "1a3c40",
    url: "https://colorhunt.co/palette/ede6db417d7a1d5c631a3c40"
  },
  {
    color1: "ff8ba7",
    color2: "ffc6c7",
    color3: "faeee7",
    color4: "c3f0ca",
    url: "https://colorhunt.co/palette/ff8ba7ffc6c7faeee7c3f0ca"
  },
  {
    color1: "eeeeee",
    color2: "32e0c4",
    color3: "0d7377",
    color4: "212121",
    url: "https://colorhunt.co/palette/eeeeee32e0c40d7377212121"
  },
  {
    color1: "fdd2bf",
    color2: "e98580",
    color3: "df5e5e",
    color4: "492f10",
    url: "https://colorhunt.co/palette/fdd2bfe98580df5e5e492f10"
  },
  {
    color1: "393e46",
    color2: "00adb5",
    color3: "aad8d3",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/393e4600adb5aad8d3eeeeee"
  },
  {
    color1: "e14d2a",
    color2: "fd841f",
    color3: "3e6d9c",
    color4: "001253",
    url: "https://colorhunt.co/palette/e14d2afd841f3e6d9c001253"
  },
  {
    color1: "a1cae2",
    color2: "c2b092",
    color3: "cfc5a5",
    color4: "eae3c8",
    url: "https://colorhunt.co/palette/a1cae2c2b092cfc5a5eae3c8"
  },
  {
    color1: "e93b81",
    color2: "f5abc9",
    color3: "ffe5e2",
    color4: "b6c9f0",
    url: "https://colorhunt.co/palette/e93b81f5abc9ffe5e2b6c9f0"
  },
  {
    color1: "3f3b6c",
    color2: "624f82",
    color3: "9f73ab",
    color4: "a3c7d6",
    url: "https://colorhunt.co/palette/3f3b6c624f829f73aba3c7d6"
  },
  {
    color1: "4e89ae",
    color2: "43658b",
    color3: "ed6663",
    color4: "ffa372",
    url: "https://colorhunt.co/palette/4e89ae43658bed6663ffa372"
  },
  {
    color1: "94b5c0",
    color2: "350b40",
    color3: "ad6c80",
    color4: "ee99a0",
    url: "https://colorhunt.co/palette/94b5c0350b40ad6c80ee99a0"
  },
  {
    color1: "dbd8e3",
    color2: "5c5470",
    color3: "352f44",
    color4: "2a2438",
    url: "https://colorhunt.co/palette/dbd8e35c5470352f442a2438"
  },
  {
    color1: "064635",
    color2: "519259",
    color3: "f0bb62",
    color4: "f4eea9",
    url: "https://colorhunt.co/palette/064635519259f0bb62f4eea9"
  },
  {
    color1: "ffbaba",
    color2: "ffeadb",
    color3: "f7c5a8",
    color4: "678a74",
    url: "https://colorhunt.co/palette/ffbabaffeadbf7c5a8678a74"
  },
  {
    color1: "4c0033",
    color2: "790252",
    color3: "af0171",
    color4: "e80f88",
    url: "https://colorhunt.co/palette/4c0033790252af0171e80f88"
  },
  {
    color1: "425f57",
    color2: "749f82",
    color3: "a8e890",
    color4: "cfff8d",
    url: "https://colorhunt.co/palette/425f57749f82a8e890cfff8d"
  },
  {
    color1: "120136",
    color2: "035aa6",
    color3: "40bad5",
    color4: "fcbf1e",
    url: "https://colorhunt.co/palette/120136035aa640bad5fcbf1e"
  },
  {
    color1: "f5eddc",
    color2: "cfd2cf",
    color3: "fa9494",
    color4: "eb1d36",
    url: "https://colorhunt.co/palette/f5eddccfd2cffa9494eb1d36"
  },
  {
    color1: "000000",
    color2: "6a097d",
    color3: "c060a1",
    color4: "f1d4d4",
    url: "https://colorhunt.co/palette/0000006a097dc060a1f1d4d4"
  },
  {
    color1: "fcefee",
    color2: "fccde2",
    color3: "fc5c9c",
    color4: "c5e3f6",
    url: "https://colorhunt.co/palette/fcefeefccde2fc5c9cc5e3f6"
  },
  {
    color1: "eca3f5",
    color2: "fdbaf8",
    color3: "b0efeb",
    color4: "edffa9",
    url: "https://colorhunt.co/palette/eca3f5fdbaf8b0efebedffa9"
  },
  {
    color1: "000000",
    color2: "3e3636",
    color3: "d72323",
    color4: "f5eded",
    url: "https://colorhunt.co/palette/0000003e3636d72323f5eded"
  },
  {
    color1: "3a98b9",
    color2: "fff1dc",
    color3: "e8d5c4",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/3a98b9fff1dce8d5c4eeeeee"
  },
  {
    color1: "2f2519",
    color2: "4a3f35",
    color3: "fa7d09",
    color4: "ff4301",
    url: "https://colorhunt.co/palette/2f25194a3f35fa7d09ff4301"
  },
  {
    color1: "ccffbd",
    color2: "7eca9c",
    color3: "40394a",
    color4: "1c1427",
    url: "https://colorhunt.co/palette/ccffbd7eca9c40394a1c1427"
  },
  {
    color1: "2d033b",
    color2: "810ca8",
    color3: "c147e9",
    color4: "e5b8f4",
    url: "https://colorhunt.co/palette/2d033b810ca8c147e9e5b8f4"
  },
  {
    color1: "bb3b0e",
    color2: "dd7631",
    color3: "708160",
    color4: "d8c593",
    url: "https://colorhunt.co/palette/bb3b0edd7631708160d8c593"
  },
  {
    color1: "f0ece3",
    color2: "dfd3c3",
    color3: "c7b198",
    color4: "a68dad",
    url: "https://colorhunt.co/palette/f0ece3dfd3c3c7b198a68dad"
  },
  {
    color1: "5f939a",
    color2: "d8ac9c",
    color3: "eac8af",
    color4: "1b2021",
    url: "https://colorhunt.co/palette/5f939ad8ac9ceac8af1b2021"
  },
  {
    color1: "d77fa1",
    color2: "baabda",
    color3: "d6e5fa",
    color4: "fff9f9",
    url: "https://colorhunt.co/palette/d77fa1baabdad6e5fafff9f9"
  },
  {
    color1: "39375b",
    color2: "745c97",
    color3: "d597ce",
    color4: "f5b0cb",
    url: "https://colorhunt.co/palette/39375b745c97d597cef5b0cb"
  },
  {
    color1: "111d5e",
    color2: "c70039",
    color3: "f37121",
    color4: "ffbd69",
    url: "https://colorhunt.co/palette/111d5ec70039f37121ffbd69"
  },
  {
    color1: "7b2869",
    color2: "9d3c72",
    color3: "c85c8e",
    color4: "ffbaba",
    url: "https://colorhunt.co/palette/7b28699d3c72c85c8effbaba"
  },
  {
    color1: "100f0f",
    color2: "0f3d3e",
    color3: "e2dcc8",
    color4: "f1f1f1",
    url: "https://colorhunt.co/palette/100f0f0f3d3ee2dcc8f1f1f1"
  },
  {
    color1: "ecfcff",
    color2: "b2fcff",
    color3: "5edfff",
    color4: "3e64ff",
    url: "https://colorhunt.co/palette/ecfcffb2fcff5edfff3e64ff"
  },
  {
    color1: "233142",
    color2: "455d7a",
    color3: "f95959",
    color4: "e3e3e3",
    url: "https://colorhunt.co/palette/233142455d7af95959e3e3e3"
  },
  {
    color1: "ff597b",
    color2: "ff8e9e",
    color3: "f9b5d0",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/ff597bff8e9ef9b5d0eeeeee"
  },
  {
    color1: "4d3e3e",
    color2: "fff3cd",
    color3: "ffc38b",
    color4: "ff926b",
    url: "https://colorhunt.co/palette/4d3e3efff3cdffc38bff926b"
  },
  {
    color1: "f47c7c",
    color2: "f7f48b",
    color3: "a1de93",
    color4: "70a1d7",
    url: "https://colorhunt.co/palette/f47c7cf7f48ba1de9370a1d7"
  },
  {
    color1: "f9f9f9",
    color2: "bcbab8",
    color3: "9d8f8f",
    color4: "625757",
    url: "https://colorhunt.co/palette/f9f9f9bcbab89d8f8f625757"
  },
  {
    color1: "643843",
    color2: "99627a",
    color3: "c88ea7",
    color4: "e7cbcb",
    url: "https://colorhunt.co/palette/64384399627ac88ea7e7cbcb"
  },
  {
    color1: "f2f6f5",
    color2: "c8dad3",
    color3: "93b5b3",
    color4: "63707e",
    url: "https://colorhunt.co/palette/f2f6f5c8dad393b5b363707e"
  },
  {
    color1: "206a5d",
    color2: "81b214",
    color3: "bfdcae",
    color4: "f1f1e8",
    url: "https://colorhunt.co/palette/206a5d81b214bfdcaef1f1e8"
  },
  {
    color1: "865439",
    color2: "c68b59",
    color3: "fcdec0",
    color4: "8fc1d4",
    url: "https://colorhunt.co/palette/865439c68b59fcdec08fc1d4"
  },
  {
    color1: "85a392",
    color2: "f5b971",
    color3: "fdd998",
    color4: "ffecc7",
    url: "https://colorhunt.co/palette/85a392f5b971fdd998ffecc7"
  },
  {
    color1: "fff2cc",
    color2: "ffd966",
    color3: "f4b183",
    color4: "dfa67b",
    url: "https://colorhunt.co/palette/fff2ccffd966f4b183dfa67b"
  },
  {
    color1: "b9eddd",
    color2: "87cbb9",
    color3: "569daa",
    color4: "577d86",
    url: "https://colorhunt.co/palette/b9eddd87cbb9569daa577d86"
  },
  {
    color1: "f5f5f5",
    color2: "f05454",
    color3: "30475e",
    color4: "121212",
    url: "https://colorhunt.co/palette/f5f5f5f0545430475e121212"
  },
  {
    color1: "fdfdc4",
    color2: "ffe8cf",
    color3: "ffdede",
    color4: "ccffec",
    url: "https://colorhunt.co/palette/fdfdc4ffe8cfffdedeccffec"
  },
  {
    color1: "92b4ec",
    color2: "ffffff",
    color3: "ffe69a",
    color4: "ffd24c",
    url: "https://colorhunt.co/palette/92b4ecffffffffe69affd24c"
  },
  {
    color1: "fff5fd",
    color2: "ff96ad",
    color3: "005a8d",
    color4: "022e57",
    url: "https://colorhunt.co/palette/fff5fdff96ad005a8d022e57"
  },
  {
    color1: "dff6f0",
    color2: "46b3e6",
    color3: "4d80e4",
    color4: "2e279d",
    url: "https://colorhunt.co/palette/dff6f046b3e64d80e42e279d"
  },
  {
    color1: "cff1ef",
    color2: "ffffff",
    color3: "fbcffc",
    color4: "be79df",
    url: "https://colorhunt.co/palette/cff1effffffffbcffcbe79df"
  },
  {
    color1: "277bc0",
    color2: "ffb200",
    color3: "ffcb42",
    color4: "fff4cf",
    url: "https://colorhunt.co/palette/277bc0ffb200ffcb42fff4cf"
  },
  {
    color1: "ff5c58",
    color2: "fe8f8f",
    color3: "fcd2d1",
    color4: "ffedd3",
    url: "https://colorhunt.co/palette/ff5c58fe8f8ffcd2d1ffedd3"
  },
  {
    color1: "f8b195",
    color2: "f67280",
    color3: "c06c84",
    color4: "355c7d",
    url: "https://colorhunt.co/palette/f8b195f67280c06c84355c7d"
  },
  {
    color1: "8c0000",
    color2: "bd2000",
    color3: "fa1e0e",
    color4: "ffbe0f",
    url: "https://colorhunt.co/palette/8c0000bd2000fa1e0effbe0f"
  },
  {
    color1: "184d47",
    color2: "96bb7c",
    color3: "d6efc7",
    color4: "fad586",
    url: "https://colorhunt.co/palette/184d4796bb7cd6efc7fad586"
  },
  {
    color1: "1572a1",
    color2: "9ad0ec",
    color3: "efdad7",
    color4: "e3bec6",
    url: "https://colorhunt.co/palette/1572a19ad0ecefdad7e3bec6"
  },
  {
    color1: "d789d7",
    color2: "9d65c9",
    color3: "5d54a4",
    color4: "2a3d66",
    url: "https://colorhunt.co/palette/d789d79d65c95d54a42a3d66"
  },
  {
    color1: "071e3d",
    color2: "1f4287",
    color3: "278ea5",
    color4: "21e6c1",
    url: "https://colorhunt.co/palette/071e3d1f4287278ea521e6c1"
  },
  {
    color1: "ff7b54",
    color2: "ffb26b",
    color3: "ffd56f",
    color4: "939b62",
    url: "https://colorhunt.co/palette/ff7b54ffb26bffd56f939b62"
  },
  {
    color1: "325288",
    color2: "f4eee8",
    color3: "f5cebe",
    color4: "114e60",
    url: "https://colorhunt.co/palette/325288f4eee8f5cebe114e60"
  },
  {
    color1: "16697a",
    color2: "db6400",
    color3: "ffa62b",
    color4: "f8f1f1",
    url: "https://colorhunt.co/palette/16697adb6400ffa62bf8f1f1"
  },
  {
    color1: "fd841f",
    color2: "e14d2a",
    color3: "cd104d",
    color4: "9c2c77",
    url: "https://colorhunt.co/palette/fd841fe14d2acd104d9c2c77"
  },
  {
    color1: "00ead3",
    color2: "fff5b7",
    color3: "ff449f",
    color4: "005f99",
    url: "https://colorhunt.co/palette/00ead3fff5b7ff449f005f99"
  },
  {
    color1: "000000",
    color2: "3e432e",
    color3: "616f39",
    color4: "a7d129",
    url: "https://colorhunt.co/palette/0000003e432e616f39a7d129"
  },
  {
    color1: "03045e",
    color2: "00b4d8",
    color3: "90e0ef",
    color4: "caf0f8",
    url: "https://colorhunt.co/palette/03045e00b4d890e0efcaf0f8"
  },
  {
    color1: "321f28",
    color2: "734046",
    color3: "a05344",
    color4: "e79e4f",
    url: "https://colorhunt.co/palette/321f28734046a05344e79e4f"
  },
  {
    color1: "253b6e",
    color2: "1f5f8b",
    color3: "1891ac",
    color4: "d2ecf9",
    url: "https://colorhunt.co/palette/253b6e1f5f8b1891acd2ecf9"
  },
  {
    color1: "bedbbb",
    color2: "8db596",
    color3: "92817a",
    color4: "707070",
    url: "https://colorhunt.co/palette/bedbbb8db59692817a707070"
  },
  {
    color1: "553c8b",
    color2: "9ea9f0",
    color3: "ccc1ff",
    color4: "ffeafe",
    url: "https://colorhunt.co/palette/553c8b9ea9f0ccc1ffffeafe"
  },
  {
    color1: "efee9d",
    color2: "d1eaa3",
    color3: "dbc6eb",
    color4: "abc2e8",
    url: "https://colorhunt.co/palette/efee9dd1eaa3dbc6ebabc2e8"
  },
  {
    color1: "525252",
    color2: "414141",
    color3: "313131",
    color4: "ca3e47",
    url: "https://colorhunt.co/palette/525252414141313131ca3e47"
  },
  {
    color1: "4d455d",
    color2: "e96479",
    color3: "f5e9cf",
    color4: "7db9b6",
    url: "https://colorhunt.co/palette/4d455de96479f5e9cf7db9b6"
  },
  {
    color1: "cd5d7d",
    color2: "f6ecf0",
    color3: "a7c5eb",
    color4: "949cdf",
    url: "https://colorhunt.co/palette/cd5d7df6ecf0a7c5eb949cdf"
  },
  {
    color1: "2b3467",
    color2: "bad7e9",
    color3: "fcffe7",
    color4: "eb455f",
    url: "https://colorhunt.co/palette/2b3467bad7e9fcffe7eb455f"
  },
  {
    color1: "481380",
    color2: "7f78d2",
    color3: "efb1ff",
    color4: "ffe2ff",
    url: "https://colorhunt.co/palette/4813807f78d2efb1ffffe2ff"
  },
  {
    color1: "000000",
    color2: "323232",
    color3: "ff1e56",
    color4: "ffac41",
    url: "https://colorhunt.co/palette/000000323232ff1e56ffac41"
  },
  {
    color1: "f4f7f7",
    color2: "aacfd0",
    color3: "79a8a9",
    color4: "1f4e5f",
    url: "https://colorhunt.co/palette/f4f7f7aacfd079a8a91f4e5f"
  },
  {
    color1: "242f9b",
    color2: "646fd4",
    color3: "9ba3eb",
    color4: "dbdffd",
    url: "https://colorhunt.co/palette/242f9b646fd49ba3ebdbdffd"
  },
  {
    color1: "ffd9e8",
    color2: "de95ba",
    color3: "7f4a88",
    color4: "4a266a",
    url: "https://colorhunt.co/palette/ffd9e8de95ba7f4a884a266a"
  },
  {
    color1: "00bcd4",
    color2: "b2ebf2",
    color3: "ff5722",
    color4: "dd2c00",
    url: "https://colorhunt.co/palette/00bcd4b2ebf2ff5722dd2c00"
  },
  {
    color1: "e0ffcd",
    color2: "fdffcd",
    color3: "ffebbb",
    color4: "ffcab0",
    url: "https://colorhunt.co/palette/e0ffcdfdffcdffebbbffcab0"
  },
  {
    color1: "eeb76b",
    color2: "e2703a",
    color3: "9c3d54",
    color4: "310b0b",
    url: "https://colorhunt.co/palette/eeb76be2703a9c3d54310b0b"
  },
  {
    color1: "7eb5a6",
    color2: "c36839",
    color3: "86340a",
    color4: "e8d0b3",
    url: "https://colorhunt.co/palette/7eb5a6c3683986340ae8d0b3"
  },
  {
    color1: "efa8e4",
    color2: "f8e1f4",
    color3: "fff0f5",
    color4: "97e5ef",
    url: "https://colorhunt.co/palette/efa8e4f8e1f4fff0f597e5ef"
  },
  {
    color1: "0a4d68",
    color2: "088395",
    color3: "05bfdb",
    color4: "00ffca",
    url: "https://colorhunt.co/palette/0a4d6808839505bfdb00ffca"
  },
  {
    color1: "fce2db",
    color2: "ff8fb1",
    color3: "b270a2",
    color4: "7a4495",
    url: "https://colorhunt.co/palette/fce2dbff8fb1b270a27a4495"
  },
  {
    color1: "fbe0c4",
    color2: "8ab6d6",
    color3: "2978b5",
    color4: "0061a8",
    url: "https://colorhunt.co/palette/fbe0c48ab6d62978b50061a8"
  },
  {
    color1: "721b65",
    color2: "b80d57",
    color3: "f8615a",
    color4: "ffd868",
    url: "https://colorhunt.co/palette/721b65b80d57f8615affd868"
  },
  {
    color1: "fff4e0",
    color2: "ffbf9b",
    color3: "b46060",
    color4: "4d4d4d",
    url: "https://colorhunt.co/palette/fff4e0ffbf9bb460604d4d4d"
  },
  {
    color1: "022c43",
    color2: "053f5e",
    color3: "115173",
    color4: "ffd700",
    url: "https://colorhunt.co/palette/022c43053f5e115173ffd700"
  },
  {
    color1: "ffe194",
    color2: "e8f6ef",
    color3: "b8dfd8",
    color4: "4c4c6d",
    url: "https://colorhunt.co/palette/ffe194e8f6efb8dfd84c4c6d"
  },
  {
    color1: "222831",
    color2: "30475e",
    color3: "c1a57b",
    color4: "ececec",
    url: "https://colorhunt.co/palette/22283130475ec1a57bececec"
  },
  {
    color1: "fd8a8a",
    color2: "f1f7b5",
    color3: "a8d1d1",
    color4: "9ea1d4",
    url: "https://colorhunt.co/palette/fd8a8af1f7b5a8d1d19ea1d4"
  },
  {
    color1: "eba83a",
    color2: "bb371a",
    color3: "fff8d9",
    color4: "d5dbb3",
    url: "https://colorhunt.co/palette/eba83abb371afff8d9d5dbb3"
  },
  {
    color1: "351f39",
    color2: "726a95",
    color3: "719fb0",
    color4: "a0c1b8",
    url: "https://colorhunt.co/palette/351f39726a95719fb0a0c1b8"
  },
  {
    color1: "f6f4eb",
    color2: "91c8e4",
    color3: "749bc2",
    color4: "4682a9",
    url: "https://colorhunt.co/palette/f6f4eb91c8e4749bc24682a9"
  },
  {
    color1: "c7f5fe",
    color2: "fcc8f8",
    color3: "eab4f8",
    color4: "f3f798",
    url: "https://colorhunt.co/palette/c7f5fefcc8f8eab4f8f3f798"
  },
  {
    color1: "72147e",
    color2: "f21170",
    color3: "fa9905",
    color4: "ff5200",
    url: "https://colorhunt.co/palette/72147ef21170fa9905ff5200"
  },
  {
    color1: "39065a",
    color2: "6a0572",
    color3: "9a0f98",
    color4: "ea0599",
    url: "https://colorhunt.co/palette/39065a6a05729a0f98ea0599"
  },
  {
    color1: "f9ceee",
    color2: "f9f3ee",
    color3: "ccf3ee",
    color4: "97c4b8",
    url: "https://colorhunt.co/palette/f9ceeef9f3eeccf3ee97c4b8"
  },
  {
    color1: "e60965",
    color2: "f94892",
    color3: "ffa1c9",
    color4: "fbe5e5",
    url: "https://colorhunt.co/palette/e60965f94892ffa1c9fbe5e5"
  },
  {
    color1: "7d0633",
    color2: "31112c",
    color3: "f2a07b",
    color4: "fbdcc4",
    url: "https://colorhunt.co/palette/7d063331112cf2a07bfbdcc4"
  },
  {
    color1: "14279b",
    color2: "3d56b2",
    color3: "5c7aea",
    color4: "e6e6e6",
    url: "https://colorhunt.co/palette/14279b3d56b25c7aeae6e6e6"
  },
  {
    color1: "0e3150",
    color2: "6dc9c8",
    color3: "ffc0c2",
    color4: "f7e9e3",
    url: "https://colorhunt.co/palette/0e31506dc9c8ffc0c2f7e9e3"
  },
  {
    color1: "d83a56",
    color2: "ff616d",
    color3: "ffeac9",
    color4: "66de93",
    url: "https://colorhunt.co/palette/d83a56ff616dffeac966de93"
  },
  {
    color1: "454545",
    color2: "ff6000",
    color3: "ffa559",
    color4: "ffe6c7",
    url: "https://colorhunt.co/palette/454545ff6000ffa559ffe6c7"
  },
  {
    color1: "252525",
    color2: "6930c3",
    color3: "64dfdf",
    color4: "80ffdb",
    url: "https://colorhunt.co/palette/2525256930c364dfdf80ffdb"
  },
  {
    color1: "57c5b6",
    color2: "159895",
    color3: "1a5f7a",
    color4: "002b5b",
    url: "https://colorhunt.co/palette/57c5b61598951a5f7a002b5b"
  },
  {
    color1: "e5dfdf",
    color2: "6ba8a9",
    color3: "357376",
    color4: "1d4d4f",
    url: "https://colorhunt.co/palette/e5dfdf6ba8a93573761d4d4f"
  },
  {
    color1: "ff9898",
    color2: "cf455c",
    color3: "971549",
    color4: "470031",
    url: "https://colorhunt.co/palette/ff9898cf455c971549470031"
  },
  {
    color1: "ff74b1",
    color2: "ffa1cf",
    color3: "ffd6ec",
    color4: "a7ffe4",
    url: "https://colorhunt.co/palette/ff74b1ffa1cfffd6eca7ffe4"
  },
  {
    color1: "ea047e",
    color2: "ff6d28",
    color3: "fce700",
    color4: "00f5ff",
    url: "https://colorhunt.co/palette/ea047eff6d28fce70000f5ff"
  },
  {
    color1: "eeeeee",
    color2: "32e0c4",
    color3: "393e46",
    color4: "222831",
    url: "https://colorhunt.co/palette/eeeeee32e0c4393e46222831"
  },
  {
    color1: "ffdede",
    color2: "f7f3ce",
    color3: "c5ecbe",
    color4: "4797b1",
    url: "https://colorhunt.co/palette/ffdedef7f3cec5ecbe4797b1"
  },
  {
    color1: "f9fbe7",
    color2: "f0edd4",
    color3: "eccdb4",
    color4: "fea1a1",
    url: "https://colorhunt.co/palette/f9fbe7f0edd4eccdb4fea1a1"
  },
  {
    color1: "ff9a76",
    color2: "ffeadb",
    color3: "f7c5a8",
    color4: "679b9b",
    url: "https://colorhunt.co/palette/ff9a76ffeadbf7c5a8679b9b"
  },
  {
    color1: "66806a",
    color2: "b4c6a6",
    color3: "ffc286",
    color4: "fff1af",
    url: "https://colorhunt.co/palette/66806ab4c6a6ffc286fff1af"
  },
  {
    color1: "006e7f",
    color2: "f8cb2e",
    color3: "ee5007",
    color4: "b22727",
    url: "https://colorhunt.co/palette/006e7ff8cb2eee5007b22727"
  },
  {
    color1: "f4f4f4",
    color2: "f0a500",
    color3: "cf7500",
    color4: "1a1c20",
    url: "https://colorhunt.co/palette/f4f4f4f0a500cf75001a1c20"
  },
  {
    color1: "62959c",
    color2: "c19277",
    color3: "e1bc91",
    color4: "e3d0b9",
    url: "https://colorhunt.co/palette/62959cc19277e1bc91e3d0b9"
  },
  {
    color1: "2ec1ac",
    color2: "3e978b",
    color3: "d2e603",
    color4: "eff48e",
    url: "https://colorhunt.co/palette/2ec1ac3e978bd2e603eff48e"
  },
  {
    color1: "150485",
    color2: "590995",
    color3: "c62a88",
    color4: "03c4a1",
    url: "https://colorhunt.co/palette/150485590995c62a8803c4a1"
  },
  {
    color1: "655d8a",
    color2: "7897ab",
    color3: "d885a3",
    color4: "fdceb9",
    url: "https://colorhunt.co/palette/655d8a7897abd885a3fdceb9"
  },
  {
    color1: "f12b6b",
    color2: "ff467e",
    color3: "fd94b4",
    color4: "f6c7c7",
    url: "https://colorhunt.co/palette/f12b6bff467efd94b4f6c7c7"
  },
  {
    color1: "0a043c",
    color2: "03506f",
    color3: "a3ddcb",
    color4: "ffe3de",
    url: "https://colorhunt.co/palette/0a043c03506fa3ddcbffe3de"
  },
  {
    color1: "ffcbcb",
    color2: "70adb5",
    color3: "407088",
    color4: "132743",
    url: "https://colorhunt.co/palette/ffcbcb70adb5407088132743"
  },
  {
    color1: "eef9bf",
    color2: "a7e9af",
    color3: "75b79e",
    color4: "6a8caf",
    url: "https://colorhunt.co/palette/eef9bfa7e9af75b79e6a8caf"
  },
  {
    color1: "3a6351",
    color2: "f2edd7",
    color3: "e48257",
    color4: "393232",
    url: "https://colorhunt.co/palette/3a6351f2edd7e48257393232"
  },
  {
    color1: "f9e4d4",
    color2: "d67d3e",
    color3: "9c0f48",
    color4: "470d21",
    url: "https://colorhunt.co/palette/f9e4d4d67d3e9c0f48470d21"
  },
  {
    color1: "f4fcd9",
    color2: "c5d8a4",
    color3: "bb9981",
    color4: "534340",
    url: "https://colorhunt.co/palette/f4fcd9c5d8a4bb9981534340"
  },
  {
    color1: "000000",
    color2: "bd4b4b",
    color3: "efb7b7",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/000000bd4b4befb7b7eeeeee"
  },
  {
    color1: "45eba5",
    color2: "21aba5",
    color3: "1d566e",
    color4: "163a5f",
    url: "https://colorhunt.co/palette/45eba521aba51d566e163a5f"
  },
  {
    color1: "4b5d67",
    color2: "322f3d",
    color3: "59405c",
    color4: "87556f",
    url: "https://colorhunt.co/palette/4b5d67322f3d59405c87556f"
  },
  {
    color1: "072227",
    color2: "35858b",
    color3: "4fbdba",
    color4: "aefeff",
    url: "https://colorhunt.co/palette/07222735858b4fbdbaaefeff"
  },
  {
    color1: "ff5959",
    color2: "ffad5a",
    color3: "4f9da6",
    color4: "1a0841",
    url: "https://colorhunt.co/palette/ff5959ffad5a4f9da61a0841"
  },
  {
    color1: "e3c770",
    color2: "fecd70",
    color3: "ffae6d",
    color4: "f3e0b5",
    url: "https://colorhunt.co/palette/e3c770fecd70ffae6df3e0b5"
  },
  {
    color1: "f0ff42",
    color2: "82cd47",
    color3: "54b435",
    color4: "379237",
    url: "https://colorhunt.co/palette/f0ff4282cd4754b435379237"
  },
  {
    color1: "a35638",
    color2: "e08f62",
    color3: "d7c79e",
    color4: "9dab86",
    url: "https://colorhunt.co/palette/a35638e08f62d7c79e9dab86"
  },
  {
    color1: "16213e",
    color2: "0f3460",
    color3: "533483",
    color4: "e94560",
    url: "https://colorhunt.co/palette/16213e0f3460533483e94560"
  },
  {
    color1: "ffd6b6",
    color2: "ea7362",
    color3: "b74242",
    color4: "5c2626",
    url: "https://colorhunt.co/palette/ffd6b6ea7362b742425c2626"
  },
  {
    color1: "f9f3df",
    color2: "cdf2ca",
    color3: "ffdefa",
    color4: "ffc898",
    url: "https://colorhunt.co/palette/f9f3dfcdf2caffdefaffc898"
  },
  {
    color1: "1d3e53",
    color2: "254b62",
    color3: "476d7c",
    color4: "77abb7",
    url: "https://colorhunt.co/palette/1d3e53254b62476d7c77abb7"
  },
  {
    color1: "393646",
    color2: "4f4557",
    color3: "6d5d6e",
    color4: "f4eee0",
    url: "https://colorhunt.co/palette/3936464f45576d5d6ef4eee0"
  },
  {
    color1: "f4f4f4",
    color2: "ff7315",
    color3: "3a3535",
    color4: "232020",
    url: "https://colorhunt.co/palette/f4f4f4ff73153a3535232020"
  },
  {
    color1: "0a1931",
    color2: "185adb",
    color3: "ffc947",
    color4: "efefef",
    url: "https://colorhunt.co/palette/0a1931185adbffc947efefef"
  },
  {
    color1: "556052",
    color2: "af6b58",
    color3: "cbbcb1",
    color4: "f2efea",
    url: "https://colorhunt.co/palette/556052af6b58cbbcb1f2efea"
  },
  {
    color1: "e7b2a5",
    color2: "f1935c",
    color3: "ba6b57",
    color4: "30475e",
    url: "https://colorhunt.co/palette/e7b2a5f1935cba6b5730475e"
  },
  {
    color1: "ffb400",
    color2: "fffbe0",
    color3: "2994b2",
    color4: "474744",
    url: "https://colorhunt.co/palette/ffb400fffbe02994b2474744"
  },
  {
    color1: "ffd1bd",
    color2: "ffb0cd",
    color3: "ffffff",
    color4: "c2f0fc",
    url: "https://colorhunt.co/palette/ffd1bdffb0cdffffffc2f0fc"
  },
  {
    color1: "b799ff",
    color2: "acbcff",
    color3: "aee2ff",
    color4: "e6fffd",
    url: "https://colorhunt.co/palette/b799ffacbcffaee2ffe6fffd"
  },
  {
    color1: "f6acc8",
    color2: "af8baf",
    color3: "584153",
    color4: "26191b",
    url: "https://colorhunt.co/palette/f6acc8af8baf58415326191b"
  },
  {
    color1: "22577e",
    color2: "5584ac",
    color3: "95d1cc",
    color4: "f6f2d4",
    url: "https://colorhunt.co/palette/22577e5584ac95d1ccf6f2d4"
  },
  {
    color1: "f1f1f1",
    color2: "fdb827",
    color3: "21209c",
    color4: "23120b",
    url: "https://colorhunt.co/palette/f1f1f1fdb82721209c23120b"
  },
  {
    color1: "f6edcf",
    color2: "f0dab1",
    color3: "daf1f9",
    color4: "a4d7e1",
    url: "https://colorhunt.co/palette/f6edcff0dab1daf1f9a4d7e1"
  },
  {
    color1: "dd5353",
    color2: "b73e3e",
    color3: "dbc8ac",
    color4: "eddbc0",
    url: "https://colorhunt.co/palette/dd5353b73e3edbc8aceddbc0"
  },
  {
    color1: "76ba99",
    color2: "adcf9f",
    color3: "ced89e",
    color4: "ffdcae",
    url: "https://colorhunt.co/palette/76ba99adcf9fced89effdcae"
  },
  {
    color1: "781d42",
    color2: "a3423c",
    color3: "de834d",
    color4: "f0d290",
    url: "https://colorhunt.co/palette/781d42a3423cde834df0d290"
  },
  {
    color1: "96b6c5",
    color2: "adc4ce",
    color3: "eee0c9",
    color4: "f1f0e8",
    url: "https://colorhunt.co/palette/96b6c5adc4ceeee0c9f1f0e8"
  },
  {
    color1: "2c2e43",
    color2: "595260",
    color3: "b2b1b9",
    color4: "ffd523",
    url: "https://colorhunt.co/palette/2c2e43595260b2b1b9ffd523"
  },
  {
    color1: "effcef",
    color2: "ccedd2",
    color3: "94d3ac",
    color4: "655c56",
    url: "https://colorhunt.co/palette/effcefccedd294d3ac655c56"
  },
  {
    color1: "1c315e",
    color2: "227c70",
    color3: "88a47c",
    color4: "e6e2c3",
    url: "https://colorhunt.co/palette/1c315e227c7088a47ce6e2c3"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "d65a31",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/222831393e46d65a31eeeeee"
  },
  {
    color1: "f0a500",
    color2: "334756",
    color3: "082032",
    color4: "000000",
    url: "https://colorhunt.co/palette/f0a500334756082032000000"
  },
  {
    color1: "ecfbfc",
    color2: "ffebd9",
    color3: "ffc8bd",
    color4: "235952",
    url: "https://colorhunt.co/palette/ecfbfcffebd9ffc8bd235952"
  },
  {
    color1: "c36a2d",
    color2: "e2c275",
    color3: "eadca6",
    color4: "fbfbfb",
    url: "https://colorhunt.co/palette/c36a2de2c275eadca6fbfbfb"
  },
  {
    color1: "283149",
    color2: "404b69",
    color3: "00818a",
    color4: "dbedf3",
    url: "https://colorhunt.co/palette/283149404b6900818adbedf3"
  },
  {
    color1: "a1d9ff",
    color2: "ca82f8",
    color3: "ed93cb",
    color4: "f2bbbb",
    url: "https://colorhunt.co/palette/a1d9ffca82f8ed93cbf2bbbb"
  },
  {
    color1: "a3ddcb",
    color2: "e8e9a1",
    color3: "e6b566",
    color4: "e5707e",
    url: "https://colorhunt.co/palette/a3ddcbe8e9a1e6b566e5707e"
  },
  {
    color1: "c3ba85",
    color2: "dad5ab",
    color3: "f0f0cb",
    color4: "feffe2",
    url: "https://colorhunt.co/palette/c3ba85dad5abf0f0cbfeffe2"
  },
  {
    color1: "ffb319",
    color2: "ffe194",
    color3: "e8f6ef",
    color4: "b8dfd8",
    url: "https://colorhunt.co/palette/ffb319ffe194e8f6efb8dfd8"
  },
  {
    color1: "c0eee4",
    color2: "f8f988",
    color3: "ffcac8",
    color4: "ff9e9e",
    url: "https://colorhunt.co/palette/c0eee4f8f988ffcac8ff9e9e"
  },
  {
    color1: "191919",
    color2: "2d4263",
    color3: "c84b31",
    color4: "ecdbba",
    url: "https://colorhunt.co/palette/1919192d4263c84b31ecdbba"
  },
  {
    color1: "69779b",
    color2: "9692af",
    color3: "acdbdf",
    color4: "d7eaea",
    url: "https://colorhunt.co/palette/69779b9692afacdbdfd7eaea"
  },
  {
    color1: "ffb0b0",
    color2: "fe7171",
    color3: "335d2d",
    color4: "7ea04d",
    url: "https://colorhunt.co/palette/ffb0b0fe7171335d2d7ea04d"
  },
  {
    color1: "f8b195",
    color2: "f67280",
    color3: "c06c84",
    color4: "6c567b",
    url: "https://colorhunt.co/palette/f8b195f67280c06c846c567b"
  },
  {
    color1: "010a43",
    color2: "ffc2c2",
    color3: "ff9d9d",
    color4: "ff2e63",
    url: "https://colorhunt.co/palette/010a43ffc2c2ff9d9dff2e63"
  },
  {
    color1: "243763",
    color2: "ff6e31",
    color3: "ffebb7",
    color4: "ad8e70",
    url: "https://colorhunt.co/palette/243763ff6e31ffebb7ad8e70"
  },
  {
    color1: "eb5353",
    color2: "f9d923",
    color3: "36ae7c",
    color4: "187498",
    url: "https://colorhunt.co/palette/eb5353f9d92336ae7c187498"
  },
  {
    color1: "794c74",
    color2: "c56183",
    color3: "fadcaa",
    color4: "b2deec",
    url: "https://colorhunt.co/palette/794c74c56183fadcaab2deec"
  },
  {
    color1: "28527a",
    color2: "8ac4d0",
    color3: "f4d160",
    color4: "fbeeac",
    url: "https://colorhunt.co/palette/28527a8ac4d0f4d160fbeeac"
  },
  {
    color1: "28ffbf",
    color2: "bcffb9",
    color3: "f5fdb0",
    color4: "f7e6ad",
    url: "https://colorhunt.co/palette/28ffbfbcffb9f5fdb0f7e6ad"
  },
  {
    color1: "ffe3a9",
    color2: "ffc3c3",
    color3: "ff8c8c",
    color4: "ff5d5d",
    url: "https://colorhunt.co/palette/ffe3a9ffc3c3ff8c8cff5d5d"
  },
  {
    color1: "f5e6ca",
    color2: "fb9300",
    color3: "f54748",
    color4: "343f56",
    url: "https://colorhunt.co/palette/f5e6cafb9300f54748343f56"
  },
  {
    color1: "3fc5f0",
    color2: "42dee1",
    color3: "6decb9",
    color4: "eef5b2",
    url: "https://colorhunt.co/palette/3fc5f042dee16decb9eef5b2"
  },
  {
    color1: "13005a",
    color2: "00337c",
    color3: "1c82ad",
    color4: "03c988",
    url: "https://colorhunt.co/palette/13005a00337c1c82ad03c988"
  },
  {
    color1: "111f4d",
    color2: "f2f4f7",
    color3: "e43a19",
    color4: "020205",
    url: "https://colorhunt.co/palette/111f4df2f4f7e43a19020205"
  },
  {
    color1: "fa4659",
    color2: "feffe4",
    color3: "a3de83",
    color4: "2eb872",
    url: "https://colorhunt.co/palette/fa4659feffe4a3de832eb872"
  },
  {
    color1: "fafaf6",
    color2: "00fff0",
    color3: "00d1ff",
    color4: "3d6cb9",
    url: "https://colorhunt.co/palette/fafaf600fff000d1ff3d6cb9"
  },
  {
    color1: "f6f1f1",
    color2: "19a7ce",
    color3: "146c94",
    color4: "000000",
    url: "https://colorhunt.co/palette/f6f1f119a7ce146c94000000"
  },
  {
    color1: "fef9a7",
    color2: "fac213",
    color3: "f77e21",
    color4: "d61c4e",
    url: "https://colorhunt.co/palette/fef9a7fac213f77e21d61c4e"
  },
  {
    color1: "d1e8e4",
    color2: "c37b89",
    color3: "bccc9a",
    color4: "eae7c6",
    url: "https://colorhunt.co/palette/d1e8e4c37b89bccc9aeae7c6"
  },
  {
    color1: "f76e11",
    color2: "ff9f45",
    color3: "ffbc80",
    color4: "fc4f4f",
    url: "https://colorhunt.co/palette/f76e11ff9f45ffbc80fc4f4f"
  },
  {
    color1: "a20a0a",
    color2: "ffa36c",
    color3: "f6eec9",
    color4: "799351",
    url: "https://colorhunt.co/palette/a20a0affa36cf6eec9799351"
  },
  {
    color1: "0f1021",
    color2: "d01257",
    color3: "fb90b7",
    color4: "ffcee4",
    url: "https://colorhunt.co/palette/0f1021d01257fb90b7ffcee4"
  },
  {
    color1: "deecfc",
    color2: "b9ceeb",
    color3: "87a8d0",
    color4: "c3b4d2",
    url: "https://colorhunt.co/palette/deecfcb9ceeb87a8d0c3b4d2"
  },
  {
    color1: "7fa998",
    color2: "f1f1b0",
    color3: "df8543",
    color4: "9d2503",
    url: "https://colorhunt.co/palette/7fa998f1f1b0df85439d2503"
  },
  {
    color1: "d8d9cf",
    color2: "ededed",
    color3: "ff8787",
    color4: "e26868",
    url: "https://colorhunt.co/palette/d8d9cfedededff8787e26868"
  },
  {
    color1: "fd5e53",
    color2: "f9fcfb",
    color3: "b0eacd",
    color4: "21bf73",
    url: "https://colorhunt.co/palette/fd5e53f9fcfbb0eacd21bf73"
  },
  {
    color1: "fda403",
    color2: "e8751a",
    color3: "c51350",
    color4: "8a1253",
    url: "https://colorhunt.co/palette/fda403e8751ac513508a1253"
  },
  {
    color1: "e8f9fd",
    color2: "79dae8",
    color3: "0aa1dd",
    color4: "2155cd",
    url: "https://colorhunt.co/palette/e8f9fd79dae80aa1dd2155cd"
  },
  {
    color1: "ebebeb",
    color2: "f5a25d",
    color3: "fa7f72",
    color4: "389393",
    url: "https://colorhunt.co/palette/ebebebf5a25dfa7f72389393"
  },
  {
    color1: "e1701a",
    color2: "f7a440",
    color3: "f6dcbf",
    color4: "aaaaaa",
    url: "https://colorhunt.co/palette/e1701af7a440f6dcbfaaaaaa"
  },
  {
    color1: "ab93c9",
    color2: "d698b9",
    color3: "eda1ab",
    color4: "ffbea3",
    url: "https://colorhunt.co/palette/ab93c9d698b9eda1abffbea3"
  },
  {
    color1: "b9f3e4",
    color2: "ea8fea",
    color3: "ffaacf",
    color4: "f6e6c2",
    url: "https://colorhunt.co/palette/b9f3e4ea8feaffaacff6e6c2"
  },
  {
    color1: "f3efe0",
    color2: "434242",
    color3: "222222",
    color4: "22a39f",
    url: "https://colorhunt.co/palette/f3efe043424222222222a39f"
  },
  {
    color1: "dddddd",
    color2: "d9adad",
    color3: "84a9ac",
    color4: "89c9b8",
    url: "https://colorhunt.co/palette/ddddddd9adad84a9ac89c9b8"
  },
  {
    color1: "f1ddbf",
    color2: "525e75",
    color3: "78938a",
    color4: "92ba92",
    url: "https://colorhunt.co/palette/f1ddbf525e7578938a92ba92"
  },
  {
    color1: "bc658d",
    color2: "82c4c3",
    color3: "f9d89c",
    color4: "f5a7a7",
    url: "https://colorhunt.co/palette/bc658d82c4c3f9d89cf5a7a7"
  },
  {
    color1: "b91646",
    color2: "dfd8ca",
    color3: "fbf3e4",
    color4: "105652",
    url: "https://colorhunt.co/palette/b91646dfd8cafbf3e4105652"
  },
  {
    color1: "fbf9fa",
    color2: "fd0054",
    color3: "a80038",
    color4: "2b2024",
    url: "https://colorhunt.co/palette/fbf9fafd0054a800382b2024"
  },
  {
    color1: "6b0848",
    color2: "a40a3c",
    color3: "ec610a",
    color4: "ffc300",
    url: "https://colorhunt.co/palette/6b0848a40a3cec610affc300"
  },
  {
    color1: "443737",
    color2: "272121",
    color3: "ff0000",
    color4: "ff4d00",
    url: "https://colorhunt.co/palette/443737272121ff0000ff4d00"
  },
  {
    color1: "cee5d0",
    color2: "f3f0d7",
    color3: "f7d59c",
    color4: "5e454b",
    url: "https://colorhunt.co/palette/cee5d0f3f0d7f7d59c5e454b"
  },
  {
    color1: "9d0b0b",
    color2: "da2d2d",
    color3: "eb8242",
    color4: "f6da63",
    url: "https://colorhunt.co/palette/9d0b0bda2d2deb8242f6da63"
  },
  {
    color1: "293b5f",
    color2: "47597e",
    color3: "dbe6fd",
    color4: "b2ab8c",
    url: "https://colorhunt.co/palette/293b5f47597edbe6fdb2ab8c"
  },
  {
    color1: "9ddcdc",
    color2: "fff4e1",
    color3: "ffebb7",
    color4: "e67a7a",
    url: "https://colorhunt.co/palette/9ddcdcfff4e1ffebb7e67a7a"
  },
  {
    color1: "c8f4de",
    color2: "a4e5d9",
    color3: "66c6ba",
    color4: "649dad",
    url: "https://colorhunt.co/palette/c8f4dea4e5d966c6ba649dad"
  },
  {
    color1: "000000",
    color2: "150050",
    color3: "3f0071",
    color4: "fb2576",
    url: "https://colorhunt.co/palette/0000001500503f0071fb2576"
  },
  {
    color1: "986d8e",
    color2: "87a8a4",
    color3: "d9cab3",
    color4: "efe3d0",
    url: "https://colorhunt.co/palette/986d8e87a8a4d9cab3efe3d0"
  },
  {
    color1: "fbdff0",
    color2: "f6c3e5",
    color3: "a278b5",
    color4: "381460",
    url: "https://colorhunt.co/palette/fbdff0f6c3e5a278b5381460"
  },
  {
    color1: "c6ebc9",
    color2: "70af85",
    color3: "f0e2d0",
    color4: "aa8976",
    url: "https://colorhunt.co/palette/c6ebc970af85f0e2d0aa8976"
  },
  {
    color1: "ffdfdf",
    color2: "fbc1bc",
    color3: "315b96",
    color4: "233567",
    url: "https://colorhunt.co/palette/ffdfdffbc1bc315b96233567"
  },
  {
    color1: "845ec2",
    color2: "ffc75f",
    color3: "f9f871",
    color4: "ff5e78",
    url: "https://colorhunt.co/palette/845ec2ffc75ff9f871ff5e78"
  },
  {
    color1: "ff87ca",
    color2: "ffc4e1",
    color3: "eaeaea",
    color4: "eed7ce",
    url: "https://colorhunt.co/palette/ff87caffc4e1eaeaeaeed7ce"
  },
  {
    color1: "e9e2d0",
    color2: "ea9085",
    color3: "d45d79",
    color4: "6e5773",
    url: "https://colorhunt.co/palette/e9e2d0ea9085d45d796e5773"
  },
  {
    color1: "202040",
    color2: "202060",
    color3: "602080",
    color4: "b030b0",
    url: "https://colorhunt.co/palette/202040202060602080b030b0"
  },
  {
    color1: "0cecdd",
    color2: "fff338",
    color3: "ff67e7",
    color4: "c400ff",
    url: "https://colorhunt.co/palette/0cecddfff338ff67e7c400ff"
  },
  {
    color1: "bfccb5",
    color2: "7c96ab",
    color3: "b7b7b7",
    color4: "edc6b1",
    url: "https://colorhunt.co/palette/bfccb57c96abb7b7b7edc6b1"
  },
  {
    color1: "f8f8f8",
    color2: "f1d6ab",
    color3: "e3b04b",
    color4: "2b2b28",
    url: "https://colorhunt.co/palette/f8f8f8f1d6abe3b04b2b2b28"
  },
  {
    color1: "000000",
    color2: "cf0a0a",
    color3: "dc5f00",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/000000cf0a0adc5f00eeeeee"
  },
  {
    color1: "7fdbda",
    color2: "ade498",
    color3: "ede682",
    color4: "febf63",
    url: "https://colorhunt.co/palette/7fdbdaade498ede682febf63"
  },
  {
    color1: "fbfbfb",
    color2: "b9e1dc",
    color3: "f38181",
    color4: "756c83",
    url: "https://colorhunt.co/palette/fbfbfbb9e1dcf38181756c83"
  },
  {
    color1: "f94892",
    color2: "ff7f3f",
    color3: "fbdf07",
    color4: "89cffd",
    url: "https://colorhunt.co/palette/f94892ff7f3ffbdf0789cffd"
  },
  {
    color1: "fffcca",
    color2: "55e9bc",
    color3: "11d3bc",
    color4: "537780",
    url: "https://colorhunt.co/palette/fffcca55e9bc11d3bc537780"
  },
  {
    color1: "c5d7bd",
    color2: "9fb8ad",
    color3: "383e56",
    color4: "fb743e",
    url: "https://colorhunt.co/palette/c5d7bd9fb8ad383e56fb743e"
  },
  {
    color1: "f5b5fc",
    color2: "96f7d2",
    color3: "f0f696",
    color4: "fcb1b1",
    url: "https://colorhunt.co/palette/f5b5fc96f7d2f0f696fcb1b1"
  },
  {
    color1: "2d4059",
    color2: "ea5455",
    color3: "decdc3",
    color4: "e5e5e5",
    url: "https://colorhunt.co/palette/2d4059ea5455decdc3e5e5e5"
  },
  {
    color1: "820000",
    color2: "4e6c50",
    color3: "f2deba",
    color4: "faecd6",
    url: "https://colorhunt.co/palette/8200004e6c50f2debafaecd6"
  },
  {
    color1: "64c9cf",
    color2: "fde49c",
    color3: "ffb740",
    color4: "df711b",
    url: "https://colorhunt.co/palette/64c9cffde49cffb740df711b"
  },
  {
    color1: "f0134d",
    color2: "ff6f5e",
    color3: "f5f0e3",
    color4: "40bfc1",
    url: "https://colorhunt.co/palette/f0134dff6f5ef5f0e340bfc1"
  },
  {
    color1: "02475e",
    color2: "687980",
    color3: "f3bda1",
    color4: "fefecc",
    url: "https://colorhunt.co/palette/02475e687980f3bda1fefecc"
  },
  {
    color1: "ee8572",
    color2: "35495e",
    color3: "347474",
    color4: "63b7af",
    url: "https://colorhunt.co/palette/ee857235495e34747463b7af"
  },
  {
    color1: "00ad7c",
    color2: "52d681",
    color3: "b5ff7d",
    color4: "fff8b5",
    url: "https://colorhunt.co/palette/00ad7c52d681b5ff7dfff8b5"
  },
  {
    color1: "1c658c",
    color2: "398ab9",
    color3: "d8d2cb",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/1c658c398ab9d8d2cbeeeeee"
  },
  {
    color1: "03001c",
    color2: "301e67",
    color3: "5b8fb9",
    color4: "b6eada",
    url: "https://colorhunt.co/palette/03001c301e675b8fb9b6eada"
  },
  {
    color1: "ff4d4d",
    color2: "ff8364",
    color3: "fdb87d",
    color4: "ffe8d5",
    url: "https://colorhunt.co/palette/ff4d4dff8364fdb87dffe8d5"
  },
  {
    color1: "f8f1f1",
    color2: "11698e",
    color3: "19456b",
    color4: "16c79a",
    url: "https://colorhunt.co/palette/f8f1f111698e19456b16c79a"
  },
  {
    color1: "4d606e",
    color2: "3fbac2",
    color3: "d3d4d8",
    color4: "f5f5f5",
    url: "https://colorhunt.co/palette/4d606e3fbac2d3d4d8f5f5f5"
  },
  {
    color1: "dcffcc",
    color2: "9fdfcd",
    color3: "baabda",
    color4: "d79abc",
    url: "https://colorhunt.co/palette/dcffcc9fdfcdbaabdad79abc"
  },
  {
    color1: "111d5e",
    color2: "c70039",
    color3: "f37121",
    color4: "c0e218",
    url: "https://colorhunt.co/palette/111d5ec70039f37121c0e218"
  },
  {
    color1: "ffffd0",
    color2: "f3ccff",
    color3: "d09cfa",
    color4: "a555ec",
    url: "https://colorhunt.co/palette/ffffd0f3ccffd09cfaa555ec"
  },
  {
    color1: "aa2b1d",
    color2: "cc561e",
    color3: "ef8d32",
    color4: "beca5c",
    url: "https://colorhunt.co/palette/aa2b1dcc561eef8d32beca5c"
  },
  {
    color1: "e0ece4",
    color2: "ff4b5c",
    color3: "056674",
    color4: "66bfbf",
    url: "https://colorhunt.co/palette/e0ece4ff4b5c05667466bfbf"
  },
  {
    color1: "184d47",
    color2: "96bb7c",
    color3: "fad586",
    color4: "c64756",
    url: "https://colorhunt.co/palette/184d4796bb7cfad586c64756"
  },
  {
    color1: "1e6f5c",
    color2: "289672",
    color3: "29bb89",
    color4: "e6dd3b",
    url: "https://colorhunt.co/palette/1e6f5c28967229bb89e6dd3b"
  },
  {
    color1: "0081c9",
    color2: "5bc0f8",
    color3: "86e5ff",
    color4: "ffc93c",
    url: "https://colorhunt.co/palette/0081c95bc0f886e5ffffc93c"
  },
  {
    color1: "bffff0",
    color2: "f0ffc2",
    color3: "ffe4c0",
    color4: "ffbbbb",
    url: "https://colorhunt.co/palette/bffff0f0ffc2ffe4c0ffbbbb"
  },
  {
    color1: "5f939a",
    color2: "3a6351",
    color3: "a0937d",
    color4: "f2edd7",
    url: "https://colorhunt.co/palette/5f939a3a6351a0937df2edd7"
  },
  {
    color1: "303841",
    color2: "3a4750",
    color3: "f6c90e",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/3038413a4750f6c90eeeeeee"
  },
  {
    color1: "dff5f2",
    color2: "87dfd6",
    color3: "46b7b9",
    color4: "2f9296",
    url: "https://colorhunt.co/palette/dff5f287dfd646b7b92f9296"
  },
  {
    color1: "f35588",
    color2: "05dfd7",
    color3: "a3f7bf",
    color4: "fff591",
    url: "https://colorhunt.co/palette/f3558805dfd7a3f7bffff591"
  },
  {
    color1: "f7f7f7",
    color2: "cceabb",
    color3: "3f3f44",
    color4: "fdcb9e",
    url: "https://colorhunt.co/palette/f7f7f7cceabb3f3f44fdcb9e"
  },
  {
    color1: "00abb3",
    color2: "3c4048",
    color3: "b2b2b2",
    color4: "eaeaea",
    url: "https://colorhunt.co/palette/00abb33c4048b2b2b2eaeaea"
  },
  {
    color1: "2a0944",
    color2: "3b185f",
    color3: "a12568",
    color4: "fec260",
    url: "https://colorhunt.co/palette/2a09443b185fa12568fec260"
  },
  {
    color1: "000000",
    color2: "1a4d2e",
    color3: "ff9f29",
    color4: "faf3e3",
    url: "https://colorhunt.co/palette/0000001a4d2eff9f29faf3e3"
  },
  {
    color1: "f4f7f7",
    color2: "aacfd0",
    color3: "5da0a2",
    color4: "34495e",
    url: "https://colorhunt.co/palette/f4f7f7aacfd05da0a234495e"
  },
  {
    color1: "9d5c0d",
    color2: "e5890a",
    color3: "f7d08a",
    color4: "fafafa",
    url: "https://colorhunt.co/palette/9d5c0de5890af7d08afafafa"
  },
  {
    color1: "233e8b",
    color2: "1eae98",
    color3: "a9f1df",
    color4: "ffffc7",
    url: "https://colorhunt.co/palette/233e8b1eae98a9f1dfffffc7"
  },
  {
    color1: "c6d57e",
    color2: "d57e7e",
    color3: "a2cdcd",
    color4: "ffe1af",
    url: "https://colorhunt.co/palette/c6d57ed57e7ea2cdcdffe1af"
  },
  {
    color1: "8fcfd1",
    color2: "df5e88",
    color3: "f6ab6c",
    color4: "f6efa6",
    url: "https://colorhunt.co/palette/8fcfd1df5e88f6ab6cf6efa6"
  },
  {
    color1: "558776",
    color2: "a3a847",
    color3: "7f8b52",
    color4: "eae2b6",
    url: "https://colorhunt.co/palette/558776a3a8477f8b52eae2b6"
  },
  {
    color1: "efe9cc",
    color2: "eadea6",
    color3: "f6cd90",
    color4: "deb881",
    url: "https://colorhunt.co/palette/efe9cceadea6f6cd90deb881"
  },
  {
    color1: "343a40",
    color2: "7952b3",
    color3: "ffc107",
    color4: "e1e8eb",
    url: "https://colorhunt.co/palette/343a407952b3ffc107e1e8eb"
  },
  {
    color1: "f6f4e6",
    color2: "fddb3a",
    color3: "52575d",
    color4: "41444b",
    url: "https://colorhunt.co/palette/f6f4e6fddb3a52575d41444b"
  },
  {
    color1: "6f69ac",
    color2: "95dac1",
    color3: "ffeba1",
    color4: "fd6f96",
    url: "https://colorhunt.co/palette/6f69ac95dac1ffeba1fd6f96"
  },
  {
    color1: "ffeadd",
    color2: "fcaeae",
    color3: "ff8989",
    color4: "ff6666",
    url: "https://colorhunt.co/palette/ffeaddfcaeaeff8989ff6666"
  },
  {
    color1: "f7f7f7",
    color2: "393e46",
    color3: "5c636e",
    color4: "f8b500",
    url: "https://colorhunt.co/palette/f7f7f7393e465c636ef8b500"
  },
  {
    color1: "202040",
    color2: "543864",
    color3: "ff6363",
    color4: "ffbd69",
    url: "https://colorhunt.co/palette/202040543864ff6363ffbd69"
  },
  {
    color1: "f9dfdc",
    color2: "0a81ab",
    color3: "0c4271",
    color4: "000000",
    url: "https://colorhunt.co/palette/f9dfdc0a81ab0c4271000000"
  },
  {
    color1: "f9f5eb",
    color2: "e4dccf",
    color3: "ea5455",
    color4: "002b5b",
    url: "https://colorhunt.co/palette/f9f5ebe4dccfea5455002b5b"
  },
  {
    color1: "23049d",
    color2: "aa2ee6",
    color3: "ff79cd",
    color4: "ffdf6b",
    url: "https://colorhunt.co/palette/23049daa2ee6ff79cdffdf6b"
  },
  {
    color1: "c21010",
    color2: "e64848",
    color3: "fffde3",
    color4: "cfe8a9",
    url: "https://colorhunt.co/palette/c21010e64848fffde3cfe8a9"
  },
  {
    color1: "bee5d3",
    color2: "d6b0b1",
    color3: "8b5e83",
    color4: "3b5360",
    url: "https://colorhunt.co/palette/bee5d3d6b0b18b5e833b5360"
  },
  {
    color1: "f2e3db",
    color2: "41644a",
    color3: "263a29",
    color4: "e86a33",
    url: "https://colorhunt.co/palette/f2e3db41644a263a29e86a33"
  },
  {
    color1: "433520",
    color2: "025955",
    color3: "00917c",
    color4: "fde8cd",
    url: "https://colorhunt.co/palette/43352002595500917cfde8cd"
  },
  {
    color1: "d3f6d1",
    color2: "a7d7c5",
    color3: "74b49b",
    color4: "5c8d89",
    url: "https://colorhunt.co/palette/d3f6d1a7d7c574b49b5c8d89"
  },
  {
    color1: "eda1c1",
    color2: "fab2ac",
    color3: "bee4d2",
    color4: "d7f8f7",
    url: "https://colorhunt.co/palette/eda1c1fab2acbee4d2d7f8f7"
  },
  {
    color1: "2a363b",
    color2: "e84a5f",
    color3: "ff847b",
    color4: "fecea8",
    url: "https://colorhunt.co/palette/2a363be84a5fff847bfecea8"
  },
  {
    color1: "003638",
    color2: "055052",
    color3: "53b8bb",
    color4: "f3f2c9",
    url: "https://colorhunt.co/palette/00363805505253b8bbf3f2c9"
  },
  {
    color1: "3aa6b9",
    color2: "ffd0d0",
    color3: "ff9eaa",
    color4: "c1ece4",
    url: "https://colorhunt.co/palette/3aa6b9ffd0d0ff9eaac1ece4"
  },
  {
    color1: "26001b",
    color2: "810034",
    color3: "ff005c",
    color4: "fff600",
    url: "https://colorhunt.co/palette/26001b810034ff005cfff600"
  },
  {
    color1: "700961",
    color2: "b80d57",
    color3: "e03e36",
    color4: "ff7c38",
    url: "https://colorhunt.co/palette/700961b80d57e03e36ff7c38"
  },
  {
    color1: "ececec",
    color2: "9fd3c7",
    color3: "385170",
    color4: "142d4c",
    url: "https://colorhunt.co/palette/ececec9fd3c7385170142d4c"
  },
  {
    color1: "fadcac",
    color2: "158467",
    color3: "197163",
    color4: "065446",
    url: "https://colorhunt.co/palette/fadcac158467197163065446"
  },
  {
    color1: "fff3e2",
    color2: "ebcfc4",
    color3: "706897",
    color4: "9088d4",
    url: "https://colorhunt.co/palette/fff3e2ebcfc47068979088d4"
  },
  {
    color1: "ecf4f3",
    color2: "68b0ab",
    color3: "006a71",
    color4: "ff7e67",
    url: "https://colorhunt.co/palette/ecf4f368b0ab006a71ff7e67"
  },
  {
    color1: "ebf0f6",
    color2: "98ccd3",
    color3: "364e68",
    color4: "132238",
    url: "https://colorhunt.co/palette/ebf0f698ccd3364e68132238"
  },
  {
    color1: "3c5186",
    color2: "9b72aa",
    color3: "c6b4ce",
    color4: "fff5de",
    url: "https://colorhunt.co/palette/3c51869b72aac6b4cefff5de"
  },
  {
    color1: "b7472a",
    color2: "eb9788",
    color3: "ffd5ab",
    color4: "fff2e5",
    url: "https://colorhunt.co/palette/b7472aeb9788ffd5abfff2e5"
  },
  {
    color1: "e7eaf6",
    color2: "a2a8d3",
    color3: "38598b",
    color4: "113f67",
    url: "https://colorhunt.co/palette/e7eaf6a2a8d338598b113f67"
  },
  {
    color1: "d9ecf2",
    color2: "f56a79",
    color3: "ff414d",
    color4: "1aa6b7",
    url: "https://colorhunt.co/palette/d9ecf2f56a79ff414d1aa6b7"
  },
  {
    color1: "28544b",
    color2: "acbd86",
    color3: "ffd6a0",
    color4: "ffa06f",
    url: "https://colorhunt.co/palette/28544bacbd86ffd6a0ffa06f"
  },
  {
    color1: "ffcbcb",
    color2: "ffb5b5",
    color3: "407088",
    color4: "132743",
    url: "https://colorhunt.co/palette/ffcbcbffb5b5407088132743"
  },
  {
    color1: "f97b22",
    color2: "fee8b0",
    color3: "9ca777",
    color4: "7c9070",
    url: "https://colorhunt.co/palette/f97b22fee8b09ca7777c9070"
  },
  {
    color1: "a7efe9",
    color2: "7fdfd4",
    color3: "fbe1b6",
    color4: "fbac91",
    url: "https://colorhunt.co/palette/a7efe97fdfd4fbe1b6fbac91"
  },
  {
    color1: "ecf2ff",
    color2: "3e54ac",
    color3: "655dbb",
    color4: "bface2",
    url: "https://colorhunt.co/palette/ecf2ff3e54ac655dbbbface2"
  },
  {
    color1: "151965",
    color2: "32407b",
    color3: "515585",
    color4: "46b5d1",
    url: "https://colorhunt.co/palette/15196532407b51558546b5d1"
  },
  {
    color1: "112b3c",
    color2: "205375",
    color3: "f66b0e",
    color4: "efefef",
    url: "https://colorhunt.co/palette/112b3c205375f66b0eefefef"
  },
  {
    color1: "b9fff8",
    color2: "6fedd6",
    color3: "ff9551",
    color4: "ff4a4a",
    url: "https://colorhunt.co/palette/b9fff86fedd6ff9551ff4a4a"
  },
  {
    color1: "040303",
    color2: "461111",
    color3: "a13333",
    color4: "b3541e",
    url: "https://colorhunt.co/palette/040303461111a13333b3541e"
  },
  {
    color1: "ffffc1",
    color2: "ffd2a5",
    color3: "ffa8b8",
    color4: "d988bc",
    url: "https://colorhunt.co/palette/ffffc1ffd2a5ffa8b8d988bc"
  },
  {
    color1: "2d4059",
    color2: "ffb400",
    color3: "f6f6f6",
    color4: "ea5455",
    url: "https://colorhunt.co/palette/2d4059ffb400f6f6f6ea5455"
  },
  {
    color1: "ffabe5",
    color2: "c7f5ff",
    color3: "d89fff",
    color4: "f6fcae",
    url: "https://colorhunt.co/palette/ffabe5c7f5ffd89ffff6fcae"
  },
  {
    color1: "1a1a40",
    color2: "270082",
    color3: "7a0bc0",
    color4: "fa58b6",
    url: "https://colorhunt.co/palette/1a1a402700827a0bc0fa58b6"
  },
  {
    color1: "f0d9e7",
    color2: "ff94cc",
    color3: "a239ea",
    color4: "5c33f6",
    url: "https://colorhunt.co/palette/f0d9e7ff94cca239ea5c33f6"
  },
  {
    color1: "a1ccd1",
    color2: "f4f2de",
    color3: "e9b384",
    color4: "7c9d96",
    url: "https://colorhunt.co/palette/a1ccd1f4f2dee9b3847c9d96"
  },
  {
    color1: "d9f9f4",
    color2: "9cd9de",
    color3: "86c1d4",
    color4: "5a92af",
    url: "https://colorhunt.co/palette/d9f9f49cd9de86c1d45a92af"
  },
  {
    color1: "e4fffe",
    color2: "a4f6f9",
    color3: "ff99fe",
    color4: "ba52ed",
    url: "https://colorhunt.co/palette/e4fffea4f6f9ff99feba52ed"
  },
  {
    color1: "bae5d5",
    color2: "d7acd4",
    color3: "eec2c2",
    color4: "f2f2b0",
    url: "https://colorhunt.co/palette/bae5d5d7acd4eec2c2f2f2b0"
  },
  {
    color1: "1c2b2d",
    color2: "1f6f8b",
    color3: "99a8b2",
    color4: "e6d5b8",
    url: "https://colorhunt.co/palette/1c2b2d1f6f8b99a8b2e6d5b8"
  },
  {
    color1: "eadeb8",
    color2: "cfb784",
    color3: "c56824",
    color4: "a09f57",
    url: "https://colorhunt.co/palette/eadeb8cfb784c56824a09f57"
  },
  {
    color1: "adf7d1",
    color2: "95e8d7",
    color3: "7dace4",
    color4: "8971d0",
    url: "https://colorhunt.co/palette/adf7d195e8d77dace48971d0"
  },
  {
    color1: "6e3cbc",
    color2: "7267cb",
    color3: "98bae7",
    color4: "b8e4f0",
    url: "https://colorhunt.co/palette/6e3cbc7267cb98bae7b8e4f0"
  },
  {
    color1: "faf3dd",
    color2: "64958f",
    color3: "065c6f",
    color4: "ffbb91",
    url: "https://colorhunt.co/palette/faf3dd64958f065c6fffbb91"
  },
  {
    color1: "5c4d4d",
    color2: "915b4a",
    color3: "a96851",
    color4: "f2f1e7",
    url: "https://colorhunt.co/palette/5c4d4d915b4aa96851f2f1e7"
  },
  {
    color1: "323643",
    color2: "606470",
    color3: "93deff",
    color4: "f7f7f7",
    url: "https://colorhunt.co/palette/32364360647093defff7f7f7"
  },
  {
    color1: "303841",
    color2: "3a4750",
    color3: "00adb5",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/3038413a475000adb5eeeeee"
  },
  {
    color1: "f2fcfc",
    color2: "bdf1f6",
    color3: "8fbaf3",
    color4: "0245a3",
    url: "https://colorhunt.co/palette/f2fcfcbdf1f68fbaf30245a3"
  },
  {
    color1: "3a4f7a",
    color2: "ffc6d3",
    color3: "fea1bf",
    color4: "e98ead",
    url: "https://colorhunt.co/palette/3a4f7affc6d3fea1bfe98ead"
  },
  {
    color1: "041562",
    color2: "11468f",
    color3: "da1212",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/04156211468fda1212eeeeee"
  },
  {
    color1: "00005c",
    color2: "6a097d",
    color3: "c060a1",
    color4: "ffdcb4",
    url: "https://colorhunt.co/palette/00005c6a097dc060a1ffdcb4"
  },
  {
    color1: "3c486b",
    color2: "f0f0f0",
    color3: "f9d949",
    color4: "f45050",
    url: "https://colorhunt.co/palette/3c486bf0f0f0f9d949f45050"
  },
  {
    color1: "f9f3e6",
    color2: "e2dcd5",
    color3: "e8aa8c",
    color4: "5e616a",
    url: "https://colorhunt.co/palette/f9f3e6e2dcd5e8aa8c5e616a"
  },
  {
    color1: "4a3933",
    color2: "f0a500",
    color3: "e45826",
    color4: "e6d5b8",
    url: "https://colorhunt.co/palette/4a3933f0a500e45826e6d5b8"
  },
  {
    color1: "dc0000",
    color2: "850000",
    color3: "ffdb89",
    color4: "fff6c3",
    url: "https://colorhunt.co/palette/dc0000850000ffdb89fff6c3"
  },
  {
    color1: "4f0e0e",
    color2: "bb8760",
    color3: "ffdada",
    color4: "fff1f1",
    url: "https://colorhunt.co/palette/4f0e0ebb8760ffdadafff1f1"
  },
  {
    color1: "1b1a17",
    color2: "f0a500",
    color3: "e45826",
    color4: "e6d5b8",
    url: "https://colorhunt.co/palette/1b1a17f0a500e45826e6d5b8"
  },
  {
    color1: "ff577f",
    color2: "ff884b",
    color3: "ffd384",
    color4: "fff9b0",
    url: "https://colorhunt.co/palette/ff577fff884bffd384fff9b0"
  },
  {
    color1: "eeeeee",
    color2: "686d76",
    color3: "373a40",
    color4: "19d3da",
    url: "https://colorhunt.co/palette/eeeeee686d76373a4019d3da"
  },
  {
    color1: "f6f6c9",
    color2: "bad1c2",
    color3: "4fa095",
    color4: "153462",
    url: "https://colorhunt.co/palette/f6f6c9bad1c24fa095153462"
  },
  {
    color1: "f90716",
    color2: "ff5403",
    color3: "ffca03",
    color4: "fff323",
    url: "https://colorhunt.co/palette/f90716ff5403ffca03fff323"
  },
  {
    color1: "dddddd",
    color2: "125d98",
    color3: "3c8dad",
    color4: "f5a962",
    url: "https://colorhunt.co/palette/dddddd125d983c8dadf5a962"
  },
  {
    color1: "f0fff3",
    color2: "c6f1e7",
    color3: "70acb1",
    color4: "59606d",
    url: "https://colorhunt.co/palette/f0fff3c6f1e770acb159606d"
  },
  {
    color1: "e9e9e5",
    color2: "d4d6c8",
    color3: "9a9b94",
    color4: "52524e",
    url: "https://colorhunt.co/palette/e9e9e5d4d6c89a9b9452524e"
  },
  {
    color1: "4700d8",
    color2: "9900f0",
    color3: "f900bf",
    color4: "ff85b3",
    url: "https://colorhunt.co/palette/4700d89900f0f900bfff85b3"
  },
  {
    color1: "809a6f",
    color2: "a25b5b",
    color3: "cc9c75",
    color4: "d5d8b5",
    url: "https://colorhunt.co/palette/809a6fa25b5bcc9c75d5d8b5"
  },
  {
    color1: "9a86a4",
    color2: "b1bce6",
    color3: "b7e5dd",
    color4: "f1f0c0",
    url: "https://colorhunt.co/palette/9a86a4b1bce6b7e5ddf1f0c0"
  },
  {
    color1: "ffb2a7",
    color2: "e6739f",
    color3: "cc0e74",
    color4: "790c5a",
    url: "https://colorhunt.co/palette/ffb2a7e6739fcc0e74790c5a"
  },
  {
    color1: "ffdbc5",
    color2: "cf1b1b",
    color3: "900d0d",
    color4: "423144",
    url: "https://colorhunt.co/palette/ffdbc5cf1b1b900d0d423144"
  },
  {
    color1: "4c0027",
    color2: "570530",
    color3: "750550",
    color4: "980f5a",
    url: "https://colorhunt.co/palette/4c0027570530750550980f5a"
  },
  {
    color1: "f64662",
    color2: "c61951",
    color3: "741938",
    color4: "56132a",
    url: "https://colorhunt.co/palette/f64662c6195174193856132a"
  },
  {
    color1: "f6f5f5",
    color2: "145374",
    color3: "00334e",
    color4: "ee6f57",
    url: "https://colorhunt.co/palette/f6f5f514537400334eee6f57"
  },
  {
    color1: "524a4e",
    color2: "fdeff4",
    color3: "ffc0d3",
    color4: "ff5c8d",
    url: "https://colorhunt.co/palette/524a4efdeff4ffc0d3ff5c8d"
  },
  {
    color1: "f70776",
    color2: "c3195d",
    color3: "680747",
    color4: "141010",
    url: "https://colorhunt.co/palette/f70776c3195d680747141010"
  },
  {
    color1: "8946a6",
    color2: "b762c1",
    color3: "ea99d5",
    color4: "ffcddd",
    url: "https://colorhunt.co/palette/8946a6b762c1ea99d5ffcddd"
  },
  {
    color1: "f6a9a9",
    color2: "ffbf86",
    color3: "fff47d",
    color4: "c2f784",
    url: "https://colorhunt.co/palette/f6a9a9ffbf86fff47dc2f784"
  },
  {
    color1: "21094e",
    color2: "511281",
    color3: "4ca1a3",
    color4: "a5e1ad",
    url: "https://colorhunt.co/palette/21094e5112814ca1a3a5e1ad"
  },
  {
    color1: "ffc4a3",
    color2: "ff9a76",
    color3: "f96d80",
    color4: "bb596b",
    url: "https://colorhunt.co/palette/ffc4a3ff9a76f96d80bb596b"
  },
  {
    color1: "ffcece",
    color2: "ffc1c8",
    color3: "ffe3b0",
    color4: "8ed6ff",
    url: "https://colorhunt.co/palette/ffceceffc1c8ffe3b08ed6ff"
  },
  {
    color1: "025464",
    color2: "e57c23",
    color3: "e8aa42",
    color4: "f8f1f1",
    url: "https://colorhunt.co/palette/025464e57c23e8aa42f8f1f1"
  },
  {
    color1: "ff6b6b",
    color2: "ffd93d",
    color3: "6bcb77",
    color4: "4d96ff",
    url: "https://colorhunt.co/palette/ff6b6bffd93d6bcb774d96ff"
  },
  {
    color1: "00ffab",
    color2: "14c38e",
    color3: "b8f1b0",
    color4: "e3fcbf",
    url: "https://colorhunt.co/palette/00ffab14c38eb8f1b0e3fcbf"
  },
  {
    color1: "21243d",
    color2: "ff7c7c",
    color3: "ffd082",
    color4: "88e1f2",
    url: "https://colorhunt.co/palette/21243dff7c7cffd08288e1f2"
  },
  {
    color1: "27323a",
    color2: "435055",
    color3: "29a19c",
    color4: "a3f7bf",
    url: "https://colorhunt.co/palette/27323a43505529a19ca3f7bf"
  },
  {
    color1: "000000",
    color2: "5800ff",
    color3: "e900ff",
    color4: "ffc600",
    url: "https://colorhunt.co/palette/0000005800ffe900ffffc600"
  },
  {
    color1: "f6e3c5",
    color2: "a0d995",
    color3: "6cc4a1",
    color4: "4cacbc",
    url: "https://colorhunt.co/palette/f6e3c5a0d9956cc4a14cacbc"
  },
  {
    color1: "f8f1f1",
    color2: "a3d2ca",
    color3: "5eaaa8",
    color4: "eb5e0b",
    url: "https://colorhunt.co/palette/f8f1f1a3d2ca5eaaa8eb5e0b"
  },
  {
    color1: "ffe6e6",
    color2: "ff2626",
    color3: "bd1616",
    color4: "000000",
    url: "https://colorhunt.co/palette/ffe6e6ff2626bd1616000000"
  },
  {
    color1: "25316d",
    color2: "5f6f94",
    color3: "97d2ec",
    color4: "fef5ac",
    url: "https://colorhunt.co/palette/25316d5f6f9497d2ecfef5ac"
  },
  {
    color1: "495371",
    color2: "74959a",
    color3: "98b4aa",
    color4: "f1e0ac",
    url: "https://colorhunt.co/palette/49537174959a98b4aaf1e0ac"
  },
  {
    color1: "f33535",
    color2: "d8e9f0",
    color3: "33425b",
    color4: "29252c",
    url: "https://colorhunt.co/palette/f33535d8e9f033425b29252c"
  },
  {
    color1: "305f72",
    color2: "f1d1b5",
    color3: "f0b7a4",
    color4: "f18c8e",
    url: "https://colorhunt.co/palette/305f72f1d1b5f0b7a4f18c8e"
  },
  {
    color1: "97bfb4",
    color2: "f5eedc",
    color3: "dd4a48",
    color4: "4f091d",
    url: "https://colorhunt.co/palette/97bfb4f5eedcdd4a484f091d"
  },
  {
    color1: "f06868",
    color2: "fab57a",
    color3: "edf798",
    color4: "80d6ff",
    url: "https://colorhunt.co/palette/f06868fab57aedf79880d6ff"
  },
  {
    color1: "ffeecc",
    color2: "ffddcc",
    color3: "ffcccc",
    color4: "febbcc",
    url: "https://colorhunt.co/palette/ffeeccffddccffccccfebbcc"
  },
  {
    color1: "65c18c",
    color2: "c1f4c5",
    color3: "ffbed8",
    color4: "ff7ba9",
    url: "https://colorhunt.co/palette/65c18cc1f4c5ffbed8ff7ba9"
  },
  {
    color1: "394a6d",
    color2: "3c9d9b",
    color3: "52de97",
    color4: "c0ffb3",
    url: "https://colorhunt.co/palette/394a6d3c9d9b52de97c0ffb3"
  },
  {
    color1: "ffcbcb",
    color2: "d291bc",
    color3: "aacfcf",
    color4: "679b9b",
    url: "https://colorhunt.co/palette/ffcbcbd291bcaacfcf679b9b"
  },
  {
    color1: "fcf876",
    color2: "cee397",
    color3: "8bcdcd",
    color4: "3797a4",
    url: "https://colorhunt.co/palette/fcf876cee3978bcdcd3797a4"
  },
  {
    color1: "28abb9",
    color2: "2d6187",
    color3: "effad3",
    color4: "a8dda8",
    url: "https://colorhunt.co/palette/28abb92d6187effad3a8dda8"
  },
  {
    color1: "fed049",
    color2: "007580",
    color3: "282846",
    color4: "d8ebe4",
    url: "https://colorhunt.co/palette/fed049007580282846d8ebe4"
  },
  {
    color1: "413c69",
    color2: "4a47a3",
    color3: "709fb0",
    color4: "a7c5eb",
    url: "https://colorhunt.co/palette/413c694a47a3709fb0a7c5eb"
  },
  {
    color1: "9eb23b",
    color2: "c7d36f",
    color3: "fcf9c6",
    color4: "e0deca",
    url: "https://colorhunt.co/palette/9eb23bc7d36ffcf9c6e0deca"
  },
  {
    color1: "fff8d6",
    color2: "f7e1ae",
    color3: "a4d0a4",
    color4: "617a55",
    url: "https://colorhunt.co/palette/fff8d6f7e1aea4d0a4617a55"
  },
  {
    color1: "80558c",
    color2: "af7ab3",
    color3: "cba0ae",
    color4: "e4d192",
    url: "https://colorhunt.co/palette/80558caf7ab3cba0aee4d192"
  },
  {
    color1: "feffdb",
    color2: "ffc60b",
    color3: "ff8b00",
    color4: "444444",
    url: "https://colorhunt.co/palette/feffdbffc60bff8b00444444"
  },
  {
    color1: "f7e7bd",
    color2: "d9c6a5",
    color3: "a35d6a",
    color4: "c26565",
    url: "https://colorhunt.co/palette/f7e7bdd9c6a5a35d6ac26565"
  },
  {
    color1: "13334c",
    color2: "005792",
    color3: "f6f6e9",
    color4: "fd5f00",
    url: "https://colorhunt.co/palette/13334c005792f6f6e9fd5f00"
  },
  {
    color1: "91091e",
    color2: "da723c",
    color3: "c39e5c",
    color4: "fdf1d6",
    url: "https://colorhunt.co/palette/91091eda723cc39e5cfdf1d6"
  },
  {
    color1: "ffeaca",
    color2: "ffbcbc",
    color3: "f08fc0",
    color4: "835151",
    url: "https://colorhunt.co/palette/ffeacaffbcbcf08fc0835151"
  },
  {
    color1: "ffe7bf",
    color2: "ffc4c4",
    color3: "ff869e",
    color4: "a10035",
    url: "https://colorhunt.co/palette/ffe7bfffc4c4ff869ea10035"
  },
  {
    color1: "e8e4e1",
    color2: "f9c49a",
    color3: "ec823a",
    color4: "7c3c21",
    url: "https://colorhunt.co/palette/e8e4e1f9c49aec823a7c3c21"
  },
  {
    color1: "f6f5f5",
    color2: "e3e3e3",
    color3: "3bb4c1",
    color4: "048998",
    url: "https://colorhunt.co/palette/f6f5f5e3e3e33bb4c1048998"
  },
  {
    color1: "ff6363",
    color2: "ffab76",
    color3: "fffda2",
    color4: "baffb4",
    url: "https://colorhunt.co/palette/ff6363ffab76fffda2baffb4"
  },
  {
    color1: "1db9c3",
    color2: "7027a0",
    color3: "c32bad",
    color4: "f56fad",
    url: "https://colorhunt.co/palette/1db9c37027a0c32badf56fad"
  },
  {
    color1: "ffffc1",
    color2: "ffd2a5",
    color3: "d38cad",
    color4: "8a79af",
    url: "https://colorhunt.co/palette/ffffc1ffd2a5d38cad8a79af"
  },
  {
    color1: "d7fffd",
    color2: "a1e6e3",
    color3: "eca0b6",
    color4: "fafba4",
    url: "https://colorhunt.co/palette/d7fffda1e6e3eca0b6fafba4"
  },
  {
    color1: "4a55a2",
    color2: "7895cb",
    color3: "a0bfe0",
    color4: "c5dff8",
    url: "https://colorhunt.co/palette/4a55a27895cba0bfe0c5dff8"
  },
  {
    color1: "143a52",
    color2: "6e828a",
    color3: "cde3eb",
    color4: "e3eff3",
    url: "https://colorhunt.co/palette/143a526e828acde3ebe3eff3"
  },
  {
    color1: "170055",
    color2: "3e00ff",
    color3: "ae00fb",
    color4: "b5ffd9",
    url: "https://colorhunt.co/palette/1700553e00ffae00fbb5ffd9"
  },
  {
    color1: "9a0680",
    color2: "79018c",
    color3: "4c0070",
    color4: "160040",
    url: "https://colorhunt.co/palette/9a068079018c4c0070160040"
  },
  {
    color1: "ff008e",
    color2: "d22779",
    color3: "612897",
    color4: "0c1e7f",
    url: "https://colorhunt.co/palette/ff008ed227796128970c1e7f"
  },
  {
    color1: "15133c",
    color2: "73777b",
    color3: "ec994b",
    color4: "f1eee9",
    url: "https://colorhunt.co/palette/15133c73777bec994bf1eee9"
  },
  {
    color1: "dbdbdb",
    color2: "f0a500",
    color3: "cf7500",
    color4: "000000",
    url: "https://colorhunt.co/palette/dbdbdbf0a500cf7500000000"
  },
  {
    color1: "c4ddff",
    color2: "7fb5ff",
    color3: "001d6e",
    color4: "fee2c5",
    url: "https://colorhunt.co/palette/c4ddff7fb5ff001d6efee2c5"
  },
  {
    color1: "24a19c",
    color2: "6ebfb5",
    color3: "ffc7c7",
    color4: "ff5f40",
    url: "https://colorhunt.co/palette/24a19c6ebfb5ffc7c7ff5f40"
  },
  {
    color1: "ffe7d1",
    color2: "f6c89f",
    color3: "4b8e8d",
    color4: "396362",
    url: "https://colorhunt.co/palette/ffe7d1f6c89f4b8e8d396362"
  },
  {
    color1: "76ba99",
    color2: "876445",
    color3: "ca955c",
    color4: "eddfb3",
    url: "https://colorhunt.co/palette/76ba99876445ca955ceddfb3"
  },
  {
    color1: "61481c",
    color2: "a47e3b",
    color3: "bf9742",
    color4: "e6b325",
    url: "https://colorhunt.co/palette/61481ca47e3bbf9742e6b325"
  },
  {
    color1: "dddddd",
    color2: "113c4a",
    color3: "265a5c",
    color4: "3f7b70",
    url: "https://colorhunt.co/palette/dddddd113c4a265a5c3f7b70"
  },
  {
    color1: "92817a",
    color2: "bedbbb",
    color3: "8db596",
    color4: "707070",
    url: "https://colorhunt.co/palette/92817abedbbb8db596707070"
  },
  {
    color1: "ffd31d",
    color2: "fae7cb",
    color3: "ffb385",
    color4: "ff7272",
    url: "https://colorhunt.co/palette/ffd31dfae7cbffb385ff7272"
  },
  {
    color1: "ffe6eb",
    color2: "ffcdcd",
    color3: "6a65d8",
    color4: "1d2786",
    url: "https://colorhunt.co/palette/ffe6ebffcdcd6a65d81d2786"
  },
  {
    color1: "fafafa",
    color2: "c7eeff",
    color3: "0077c0",
    color4: "1d242b",
    url: "https://colorhunt.co/palette/fafafac7eeff0077c01d242b"
  },
  {
    color1: "f4f4f4",
    color2: "f0a500",
    color3: "cf7500",
    color4: "000000",
    url: "https://colorhunt.co/palette/f4f4f4f0a500cf7500000000"
  },
  {
    color1: "193498",
    color2: "113cfc",
    color3: "1597e5",
    color4: "69dadb",
    url: "https://colorhunt.co/palette/193498113cfc1597e569dadb"
  },
  {
    color1: "464159",
    color2: "6c7b95",
    color3: "8bbabb",
    color4: "c7f0db",
    url: "https://colorhunt.co/palette/4641596c7b958bbabbc7f0db"
  },
  {
    color1: "f4f4f4",
    color2: "8ec6c5",
    color3: "6983aa",
    color4: "8566aa",
    url: "https://colorhunt.co/palette/f4f4f48ec6c56983aa8566aa"
  },
  {
    color1: "513252",
    color2: "7a4069",
    color3: "ca4e79",
    color4: "ffc18e",
    url: "https://colorhunt.co/palette/5132527a4069ca4e79ffc18e"
  },
  {
    color1: "faad80",
    color2: "ff6767",
    color3: "ff3d68",
    color4: "a73489",
    url: "https://colorhunt.co/palette/faad80ff6767ff3d68a73489"
  },
  {
    color1: "00425a",
    color2: "1f8a70",
    color3: "bfdb38",
    color4: "fc7300",
    url: "https://colorhunt.co/palette/00425a1f8a70bfdb38fc7300"
  },
  {
    color1: "29c6cd",
    color2: "f6e4c4",
    color3: "fea386",
    color4: "f19584",
    url: "https://colorhunt.co/palette/29c6cdf6e4c4fea386f19584"
  },
  {
    color1: "d2d3c9",
    color2: "0e918c",
    color3: "f6830f",
    color4: "bb2205",
    url: "https://colorhunt.co/palette/d2d3c90e918cf6830fbb2205"
  },
  {
    color1: "ff6d60",
    color2: "f7d060",
    color3: "f3e99f",
    color4: "98d8aa",
    url: "https://colorhunt.co/palette/ff6d60f7d060f3e99f98d8aa"
  },
  {
    color1: "3498db",
    color2: "ecf0f1",
    color3: "34495e",
    color4: "f1c40f",
    url: "https://colorhunt.co/palette/3498dbecf0f134495ef1c40f"
  },
  {
    color1: "006a71",
    color2: "ffffdd",
    color3: "cbeaed",
    color4: "d3de32",
    url: "https://colorhunt.co/palette/006a71ffffddcbeaedd3de32"
  },
  {
    color1: "faf1e6",
    color2: "ffc074",
    color3: "b6c867",
    color4: "01937c",
    url: "https://colorhunt.co/palette/faf1e6ffc074b6c86701937c"
  },
  {
    color1: "2192ff",
    color2: "38e54d",
    color3: "9cff2e",
    color4: "fdff00",
    url: "https://colorhunt.co/palette/2192ff38e54d9cff2efdff00"
  },
  {
    color1: "d3d6db",
    color2: "3a4750",
    color3: "303841",
    color4: "be3144",
    url: "https://colorhunt.co/palette/d3d6db3a4750303841be3144"
  },
  {
    color1: "848ccf",
    color2: "93b5e1",
    color3: "ffe4e4",
    color4: "be5683",
    url: "https://colorhunt.co/palette/848ccf93b5e1ffe4e4be5683"
  },
  {
    color1: "ff5200",
    color2: "6f0000",
    color3: "00263b",
    color4: "00a1ab",
    url: "https://colorhunt.co/palette/ff52006f000000263b00a1ab"
  },
  {
    color1: "fbf46d",
    color2: "b4fe98",
    color3: "77e4d4",
    color4: "998ceb",
    url: "https://colorhunt.co/palette/fbf46db4fe9877e4d4998ceb"
  },
  {
    color1: "f8dc81",
    color2: "eff7e1",
    color3: "a2d0c1",
    color4: "214151",
    url: "https://colorhunt.co/palette/f8dc81eff7e1a2d0c1214151"
  },
  {
    color1: "f56eb3",
    color2: "cb1c8d",
    color3: "7f167f",
    color4: "460c68",
    url: "https://colorhunt.co/palette/f56eb3cb1c8d7f167f460c68"
  },
  {
    color1: "7a08fa",
    color2: "a82ffc",
    color3: "c264fe",
    color4: "f8ecfd",
    url: "https://colorhunt.co/palette/7a08faa82ffcc264fef8ecfd"
  },
  {
    color1: "fafafa",
    color2: "ffe9e3",
    color3: "c4c1e0",
    color4: "7c73e6",
    url: "https://colorhunt.co/palette/fafafaffe9e3c4c1e07c73e6"
  },
  {
    color1: "f8fcfb",
    color2: "c9fdd7",
    color3: "79d1c3",
    color4: "6892d5",
    url: "https://colorhunt.co/palette/f8fcfbc9fdd779d1c36892d5"
  },
  {
    color1: "f7f7f7",
    color2: "43d8c9",
    color3: "95389e",
    color4: "100303",
    url: "https://colorhunt.co/palette/f7f7f743d8c995389e100303"
  },
  {
    color1: "6c567b",
    color2: "c06c84",
    color3: "f67280",
    color4: "f8b195",
    url: "https://colorhunt.co/palette/6c567bc06c84f67280f8b195"
  },
  {
    color1: "4a403a",
    color2: "a45d5d",
    color3: "ffc069",
    color4: "efefef",
    url: "https://colorhunt.co/palette/4a403aa45d5dffc069efefef"
  },
  {
    color1: "f67280",
    color2: "c06c84",
    color3: "6c5b7b",
    color4: "35477d",
    url: "https://colorhunt.co/palette/f67280c06c846c5b7b35477d"
  },
  {
    color1: "2b580c",
    color2: "639a67",
    color3: "d8ebb5",
    color4: "d9bf77",
    url: "https://colorhunt.co/palette/2b580c639a67d8ebb5d9bf77"
  },
  {
    color1: "fbe6c2",
    color2: "f0c929",
    color3: "f48b29",
    color4: "ac0d0d",
    url: "https://colorhunt.co/palette/fbe6c2f0c929f48b29ac0d0d"
  },
  {
    color1: "4f3961",
    color2: "ea728c",
    color3: "fc9d9d",
    color4: "f3d4d4",
    url: "https://colorhunt.co/palette/4f3961ea728cfc9d9df3d4d4"
  },
  {
    color1: "2f1b41",
    color2: "872341",
    color3: "be3144",
    color4: "f05941",
    url: "https://colorhunt.co/palette/2f1b41872341be3144f05941"
  },
  {
    color1: "ffe0f7",
    color2: "fe91ca",
    color3: "d3dbff",
    color4: "251f44",
    url: "https://colorhunt.co/palette/ffe0f7fe91cad3dbff251f44"
  },
  {
    color1: "155e63",
    color2: "76b39d",
    color3: "f9f8eb",
    color4: "eae7e7",
    url: "https://colorhunt.co/palette/155e6376b39df9f8ebeae7e7"
  },
  {
    color1: "f69d9d",
    color2: "ffeab6",
    color3: "fdffba",
    color4: "c0ffc2",
    url: "https://colorhunt.co/palette/f69d9dffeab6fdffbac0ffc2"
  },
  {
    color1: "581845",
    color2: "900c3f",
    color3: "c70039",
    color4: "ff5733",
    url: "https://colorhunt.co/palette/581845900c3fc70039ff5733"
  },
  {
    color1: "f4f4f4",
    color2: "eadca6",
    color3: "e2c275",
    color4: "c36a2d",
    url: "https://colorhunt.co/palette/f4f4f4eadca6e2c275c36a2d"
  },
  {
    color1: "f6f5f5",
    color2: "ee6f57",
    color3: "1f3c88",
    color4: "070d59",
    url: "https://colorhunt.co/palette/f6f5f5ee6f571f3c88070d59"
  },
  {
    color1: "f5e1da",
    color2: "f1f1f1",
    color3: "40a798",
    color4: "476269",
    url: "https://colorhunt.co/palette/f5e1daf1f1f140a798476269"
  },
  {
    color1: "931a25",
    color2: "e97171",
    color3: "ffcb8e",
    color4: "f5efef",
    url: "https://colorhunt.co/palette/931a25e97171ffcb8ef5efef"
  },
  {
    color1: "b6ffea",
    color2: "fce2ae",
    color3: "ffb3b3",
    color4: "ffdcf7",
    url: "https://colorhunt.co/palette/b6ffeafce2aeffb3b3ffdcf7"
  },
  {
    color1: "001c30",
    color2: "176b87",
    color3: "64ccc5",
    color4: "dafffb",
    url: "https://colorhunt.co/palette/001c30176b8764ccc5dafffb"
  },
  {
    color1: "e7f0d2",
    color2: "d2ea9b",
    color3: "abcb89",
    color4: "83b271",
    url: "https://colorhunt.co/palette/e7f0d2d2ea9babcb8983b271"
  },
  {
    color1: "1eb2a6",
    color2: "d4f8e8",
    color3: "ffa34d",
    color4: "f67575",
    url: "https://colorhunt.co/palette/1eb2a6d4f8e8ffa34df67575"
  },
  {
    color1: "faf3f0",
    color2: "d4e2d4",
    color3: "ffcacc",
    color4: "dbc4f0",
    url: "https://colorhunt.co/palette/faf3f0d4e2d4ffcaccdbc4f0"
  },
  {
    color1: "f2f4d1",
    color2: "b2d3be",
    color3: "89a3b2",
    color4: "5e6073",
    url: "https://colorhunt.co/palette/f2f4d1b2d3be89a3b25e6073"
  },
  {
    color1: "565d47",
    color2: "b49c73",
    color3: "eaac9d",
    color4: "f0daa4",
    url: "https://colorhunt.co/palette/565d47b49c73eaac9df0daa4"
  },
  {
    color1: "240041",
    color2: "900048",
    color3: "ff4057",
    color4: "ff8260",
    url: "https://colorhunt.co/palette/240041900048ff4057ff8260"
  },
  {
    color1: "020438",
    color2: "284184",
    color3: "1f8ea3",
    color4: "00eaff",
    url: "https://colorhunt.co/palette/0204382841841f8ea300eaff"
  },
  {
    color1: "ff9234",
    color2: "ffcd3c",
    color3: "fefed5",
    color4: "35d0ba",
    url: "https://colorhunt.co/palette/ff9234ffcd3cfefed535d0ba"
  },
  {
    color1: "363434",
    color2: "5c5757",
    color3: "62929a",
    color4: "efecec",
    url: "https://colorhunt.co/palette/3634345c575762929aefecec"
  },
  {
    color1: "f79071",
    color2: "fa744f",
    color3: "16817a",
    color4: "024249",
    url: "https://colorhunt.co/palette/f79071fa744f16817a024249"
  },
  {
    color1: "c2dedc",
    color2: "ece5c7",
    color3: "cdc2ae",
    color4: "116a7b",
    url: "https://colorhunt.co/palette/c2dedcece5c7cdc2ae116a7b"
  },
  {
    color1: "f6f1e9",
    color2: "ffd93d",
    color3: "ff8400",
    color4: "4f200d",
    url: "https://colorhunt.co/palette/f6f1e9ffd93dff84004f200d"
  },
  {
    color1: "68a7ad",
    color2: "99c4c8",
    color3: "e5cb9f",
    color4: "eee4ab",
    url: "https://colorhunt.co/palette/68a7ad99c4c8e5cb9feee4ab"
  },
  {
    color1: "fff3e6",
    color2: "1a508b",
    color3: "0d335d",
    color4: "c1a1d3",
    url: "https://colorhunt.co/palette/fff3e61a508b0d335dc1a1d3"
  },
  {
    color1: "f5f5c6",
    color2: "7da87b",
    color3: "326765",
    color4: "27253d",
    url: "https://colorhunt.co/palette/f5f5c67da87b32676527253d"
  },
  {
    color1: "ffa3ac",
    color2: "00043c",
    color3: "005d6c",
    color4: "00c9b1",
    url: "https://colorhunt.co/palette/ffa3ac00043c005d6c00c9b1"
  },
  {
    color1: "d3ebcd",
    color2: "aedbce",
    color3: "839aa8",
    color4: "635666",
    url: "https://colorhunt.co/palette/d3ebcdaedbce839aa8635666"
  },
  {
    color1: "ff8080",
    color2: "ffba92",
    color3: "e0f5b9",
    color4: "c6f1d6",
    url: "https://colorhunt.co/palette/ff8080ffba92e0f5b9c6f1d6"
  },
  {
    color1: "e8e2db",
    color2: "fab95b",
    color3: "f5564e",
    color4: "1a3263",
    url: "https://colorhunt.co/palette/e8e2dbfab95bf5564e1a3263"
  },
  {
    color1: "effffb",
    color2: "50d890",
    color3: "4f98ca",
    color4: "272727",
    url: "https://colorhunt.co/palette/effffb50d8904f98ca272727"
  },
  {
    color1: "22a699",
    color2: "f2be22",
    color3: "f29727",
    color4: "f24c3d",
    url: "https://colorhunt.co/palette/22a699f2be22f29727f24c3d"
  },
  {
    color1: "f8f0e5",
    color2: "eadbc8",
    color3: "dac0a3",
    color4: "102c57",
    url: "https://colorhunt.co/palette/f8f0e5eadbc8dac0a3102c57"
  },
  {
    color1: "560764",
    color2: "913175",
    color3: "dd5b82",
    color4: "fe9797",
    url: "https://colorhunt.co/palette/560764913175dd5b82fe9797"
  },
  {
    color1: "bc5148",
    color2: "fef8e6",
    color3: "7bcecc",
    color4: "3090a1",
    url: "https://colorhunt.co/palette/bc5148fef8e67bcecc3090a1"
  },
  {
    color1: "2a0944",
    color2: "3fa796",
    color3: "fec260",
    color4: "a10035",
    url: "https://colorhunt.co/palette/2a09443fa796fec260a10035"
  },
  {
    color1: "2c061f",
    color2: "374045",
    color3: "d89216",
    color4: "e1d89f",
    url: "https://colorhunt.co/palette/2c061f374045d89216e1d89f"
  },
  {
    color1: "001e6c",
    color2: "035397",
    color3: "5089c6",
    color4: "ffaa4c",
    url: "https://colorhunt.co/palette/001e6c0353975089c6ffaa4c"
  },
  {
    color1: "f76262",
    color2: "216583",
    color3: "65c0ba",
    color4: "cffdf8",
    url: "https://colorhunt.co/palette/f7626221658365c0bacffdf8"
  },
  {
    color1: "3c2317",
    color2: "628e90",
    color3: "b4cde6",
    color4: "f5efe6",
    url: "https://colorhunt.co/palette/3c2317628e90b4cde6f5efe6"
  },
  {
    color1: "c67ace",
    color2: "d8f8b7",
    color3: "ff9a8c",
    color4: "ce1f6a",
    url: "https://colorhunt.co/palette/c67aced8f8b7ff9a8cce1f6a"
  },
  {
    color1: "f6e1c3",
    color2: "e9a178",
    color3: "a84448",
    color4: "7a3e65",
    url: "https://colorhunt.co/palette/f6e1c3e9a178a844487a3e65"
  },
  {
    color1: "184d47",
    color2: "96bb7c",
    color3: "d6efc7",
    color4: "eebb4d",
    url: "https://colorhunt.co/palette/184d4796bb7cd6efc7eebb4d"
  },
  {
    color1: "3b0944",
    color2: "5f1854",
    color3: "a12559",
    color4: "f1bbd5",
    url: "https://colorhunt.co/palette/3b09445f1854a12559f1bbd5"
  },
  {
    color1: "ff4848",
    color2: "ffd371",
    color3: "c2ffd9",
    color4: "9ddac6",
    url: "https://colorhunt.co/palette/ff4848ffd371c2ffd99ddac6"
  },
  {
    color1: "bb6464",
    color2: "cdb699",
    color3: "c3dbd9",
    color4: "c8f2ef",
    url: "https://colorhunt.co/palette/bb6464cdb699c3dbd9c8f2ef"
  },
  {
    color1: "faf9f9",
    color2: "add2c9",
    color3: "5ea3a3",
    color4: "488b8f",
    url: "https://colorhunt.co/palette/faf9f9add2c95ea3a3488b8f"
  },
  {
    color1: "f4f6ff",
    color2: "ffcb74",
    color3: "ea907a",
    color4: "4f8a8b",
    url: "https://colorhunt.co/palette/f4f6ffffcb74ea907a4f8a8b"
  },
  {
    color1: "2a1a5e",
    color2: "f45905",
    color3: "fb9224",
    color4: "fbe555",
    url: "https://colorhunt.co/palette/2a1a5ef45905fb9224fbe555"
  },
  {
    color1: "f23557",
    color2: "f0d43a",
    color3: "22b2da",
    color4: "3b4a6b",
    url: "https://colorhunt.co/palette/f23557f0d43a22b2da3b4a6b"
  },
  {
    color1: "42032c",
    color2: "d36b00",
    color3: "e6d2aa",
    color4: "f1efdc",
    url: "https://colorhunt.co/palette/42032cd36b00e6d2aaf1efdc"
  },
  {
    color1: "fae3e3",
    color2: "b7b7b7",
    color3: "137083",
    color4: "3d0240",
    url: "https://colorhunt.co/palette/fae3e3b7b7b71370833d0240"
  },
  {
    color1: "f6d186",
    color2: "fcf7bb",
    color3: "cbe2b0",
    color4: "f19292",
    url: "https://colorhunt.co/palette/f6d186fcf7bbcbe2b0f19292"
  },
  {
    color1: "161853",
    color2: "292c6d",
    color3: "faedf0",
    color4: "ec255a",
    url: "https://colorhunt.co/palette/161853292c6dfaedf0ec255a"
  },
  {
    color1: "b0deff",
    color2: "ffc5a1",
    color3: "ffd19a",
    color4: "fff8a6",
    url: "https://colorhunt.co/palette/b0deffffc5a1ffd19afff8a6"
  },
  {
    color1: "a6d0dd",
    color2: "ff6969",
    color3: "ffd3b0",
    color4: "fff9de",
    url: "https://colorhunt.co/palette/a6d0ddff6969ffd3b0fff9de"
  },
  {
    color1: "9dab86",
    color2: "e6a157",
    color3: "eb8242",
    color4: "c9753d",
    url: "https://colorhunt.co/palette/9dab86e6a157eb8242c9753d"
  },
  {
    color1: "f7f1e5",
    color2: "e7b10a",
    color3: "898121",
    color4: "4c4b16",
    url: "https://colorhunt.co/palette/f7f1e5e7b10a8981214c4b16"
  },
  {
    color1: "fc345c",
    color2: "49beb7",
    color3: "afffdf",
    color4: "eafff7",
    url: "https://colorhunt.co/palette/fc345c49beb7afffdfeafff7"
  },
  {
    color1: "dfe2fe",
    color2: "b1cbfa",
    color3: "8e98f5",
    color4: "7874f2",
    url: "https://colorhunt.co/palette/dfe2feb1cbfa8e98f57874f2"
  },
  {
    color1: "23374d",
    color2: "1089ff",
    color3: "e5e5e5",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/23374d1089ffe5e5e5eeeeee"
  },
  {
    color1: "e01171",
    color2: "ab0e86",
    color3: "59057b",
    color4: "0f0766",
    url: "https://colorhunt.co/palette/e01171ab0e8659057b0f0766"
  },
  {
    color1: "eac696",
    color2: "c8ae7d",
    color3: "765827",
    color4: "65451f",
    url: "https://colorhunt.co/palette/eac696c8ae7d76582765451f"
  },
  {
    color1: "37e2d5",
    color2: "590696",
    color3: "c70a80",
    color4: "fbcb0a",
    url: "https://colorhunt.co/palette/37e2d5590696c70a80fbcb0a"
  },
  {
    color1: "78dec7",
    color2: "d62ad0",
    color3: "fb7afc",
    color4: "fbc7f7",
    url: "https://colorhunt.co/palette/78dec7d62ad0fb7afcfbc7f7"
  },
  {
    color1: "7882a4",
    color2: "c0a080",
    color3: "d1d1d1",
    color4: "efefef",
    url: "https://colorhunt.co/palette/7882a4c0a080d1d1d1efefef"
  },
  {
    color1: "eff0f4",
    color2: "d3d6db",
    color3: "415f9d",
    color4: "233b6e",
    url: "https://colorhunt.co/palette/eff0f4d3d6db415f9d233b6e"
  },
  {
    color1: "6e5773",
    color2: "d45d79",
    color3: "ea9085",
    color4: "e9e2d0",
    url: "https://colorhunt.co/palette/6e5773d45d79ea9085e9e2d0"
  },
  {
    color1: "f5f5f5",
    color2: "f2ead3",
    color3: "dfd7bf",
    color4: "3f2305",
    url: "https://colorhunt.co/palette/f5f5f5f2ead3dfd7bf3f2305"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "0092ca",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/222831393e460092caeeeeee"
  },
  {
    color1: "ffcc1d",
    color2: "0b4619",
    color3: "116530",
    color4: "e8e8cc",
    url: "https://colorhunt.co/palette/ffcc1d0b4619116530e8e8cc"
  },
  {
    color1: "f9f8ed",
    color2: "c4e3cb",
    color3: "6a9c78",
    color4: "fff1bc",
    url: "https://colorhunt.co/palette/f9f8edc4e3cb6a9c78fff1bc"
  },
  {
    color1: "294a66",
    color2: "0b3846",
    color3: "ffbbbb",
    color4: "fcd2c2",
    url: "https://colorhunt.co/palette/294a660b3846ffbbbbfcd2c2"
  },
  {
    color1: "f6f578",
    color2: "f6d743",
    color3: "649d66",
    color4: "06623b",
    url: "https://colorhunt.co/palette/f6f578f6d743649d6606623b"
  },
  {
    color1: "fcf9ec",
    color2: "b0f4e6",
    color3: "67eaca",
    color4: "12d3cf",
    url: "https://colorhunt.co/palette/fcf9ecb0f4e667eaca12d3cf"
  },
  {
    color1: "245953",
    color2: "408e91",
    color3: "e49393",
    color4: "d8d8d8",
    url: "https://colorhunt.co/palette/245953408e91e49393d8d8d8"
  },
  {
    color1: "ffb84c",
    color2: "f266ab",
    color3: "a459d1",
    color4: "2cd3e1",
    url: "https://colorhunt.co/palette/ffb84cf266aba459d12cd3e1"
  },
  {
    color1: "ebebe3",
    color2: "2b2b28",
    color3: "4a4a48",
    color4: "c19898",
    url: "https://colorhunt.co/palette/ebebe32b2b284a4a48c19898"
  },
  {
    color1: "cdb30c",
    color2: "62760c",
    color3: "535204",
    color4: "523906",
    url: "https://colorhunt.co/palette/cdb30c62760c535204523906"
  },
  {
    color1: "125b50",
    color2: "f8b400",
    color3: "faf5e4",
    color4: "ff6363",
    url: "https://colorhunt.co/palette/125b50f8b400faf5e4ff6363"
  },
  {
    color1: "eeedde",
    color2: "e0ddaa",
    color3: "203239",
    color4: "141e27",
    url: "https://colorhunt.co/palette/eeeddee0ddaa203239141e27"
  },
  {
    color1: "0779e4",
    color2: "4cbbb9",
    color3: "77d8d8",
    color4: "eff3c6",
    url: "https://colorhunt.co/palette/0779e44cbbb977d8d8eff3c6"
  },
  {
    color1: "ffffff",
    color2: "f9f6f7",
    color3: "ffe8d6",
    color4: "ff971d",
    url: "https://colorhunt.co/palette/fffffff9f6f7ffe8d6ff971d"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "29a19c",
    color4: "a3f7bf",
    url: "https://colorhunt.co/palette/222831393e4629a19ca3f7bf"
  },
  {
    color1: "051367",
    color2: "2d31fa",
    color3: "5d8bf4",
    color4: "dff6ff",
    url: "https://colorhunt.co/palette/0513672d31fa5d8bf4dff6ff"
  },
  {
    color1: "f8f5f1",
    color2: "e9896a",
    color3: "387c6d",
    color4: "343f56",
    url: "https://colorhunt.co/palette/f8f5f1e9896a387c6d343f56"
  },
  {
    color1: "f8f4e1",
    color2: "897853",
    color3: "4e3620",
    color4: "c8eed9",
    url: "https://colorhunt.co/palette/f8f4e18978534e3620c8eed9"
  },
  {
    color1: "35013f",
    color2: "561050",
    color3: "951556",
    color4: "e9b5d2",
    url: "https://colorhunt.co/palette/35013f561050951556e9b5d2"
  },
  {
    color1: "0f3057",
    color2: "00587a",
    color3: "008891",
    color4: "e7e7de",
    url: "https://colorhunt.co/palette/0f305700587a008891e7e7de"
  },
  {
    color1: "381460",
    color2: "b21f66",
    color3: "fe346e",
    color4: "ffbd69",
    url: "https://colorhunt.co/palette/381460b21f66fe346effbd69"
  },
  {
    color1: "ffb99a",
    color2: "ff6464",
    color3: "db3056",
    color4: "851d41",
    url: "https://colorhunt.co/palette/ffb99aff6464db3056851d41"
  },
  {
    color1: "58b4ae",
    color2: "ffe277",
    color3: "ffb367",
    color4: "ffe2bc",
    url: "https://colorhunt.co/palette/58b4aeffe277ffb367ffe2bc"
  },
  {
    color1: "606c5d",
    color2: "fff4f4",
    color3: "f7e6c4",
    color4: "f1c376",
    url: "https://colorhunt.co/palette/606c5dfff4f4f7e6c4f1c376"
  },
  {
    color1: "1b2430",
    color2: "51557e",
    color3: "816797",
    color4: "d6d5a8",
    url: "https://colorhunt.co/palette/1b243051557e816797d6d5a8"
  },
  {
    color1: "f4f6ff",
    color2: "f3c623",
    color3: "127681",
    color4: "10375c",
    url: "https://colorhunt.co/palette/f4f6fff3c62312768110375c"
  },
  {
    color1: "7c0a02",
    color2: "b22222",
    color3: "e25822",
    color4: "f1bc31",
    url: "https://colorhunt.co/palette/7c0a02b22222e25822f1bc31"
  },
  {
    color1: "aa3a3a",
    color2: "a4b787",
    color3: "f4f4f4",
    color4: "f8e4b7",
    url: "https://colorhunt.co/palette/aa3a3aa4b787f4f4f4f8e4b7"
  },
  {
    color1: "f8efd4",
    color2: "edc988",
    color3: "d7385e",
    color4: "132743",
    url: "https://colorhunt.co/palette/f8efd4edc988d7385e132743"
  },
  {
    color1: "432c7a",
    color2: "80489c",
    color3: "ff8fb1",
    color4: "fce2db",
    url: "https://colorhunt.co/palette/432c7a80489cff8fb1fce2db"
  },
  {
    color1: "086972",
    color2: "01a9b4",
    color3: "87dfd6",
    color4: "fbfd8a",
    url: "https://colorhunt.co/palette/08697201a9b487dfd6fbfd8a"
  },
  {
    color1: "413c69",
    color2: "4a47a3",
    color3: "ad62aa",
    color4: "eab9c9",
    url: "https://colorhunt.co/palette/413c694a47a3ad62aaeab9c9"
  },
  {
    color1: "511e78",
    color2: "8b2f97",
    color3: "cf56a1",
    color4: "fcb2bf",
    url: "https://colorhunt.co/palette/511e788b2f97cf56a1fcb2bf"
  },
  {
    color1: "000000",
    color2: "86003c",
    color3: "e41f7b",
    color4: "ff8ba0",
    url: "https://colorhunt.co/palette/00000086003ce41f7bff8ba0"
  },
  {
    color1: "17223b",
    color2: "263859",
    color3: "6b778d",
    color4: "ff6768",
    url: "https://colorhunt.co/palette/17223b2638596b778dff6768"
  },
  {
    color1: "b6eb7a",
    color2: "f7f7ee",
    color3: "fb7813",
    color4: "17706e",
    url: "https://colorhunt.co/palette/b6eb7af7f7eefb781317706e"
  },
  {
    color1: "f0dd92",
    color2: "ffffc5",
    color3: "d6e4aa",
    color4: "83b582",
    url: "https://colorhunt.co/palette/f0dd92ffffc5d6e4aa83b582"
  },
  {
    color1: "010038",
    color2: "293a80",
    color3: "537ec5",
    color4: "f39422",
    url: "https://colorhunt.co/palette/010038293a80537ec5f39422"
  },
  {
    color1: "005874",
    color2: "1c819e",
    color3: "e6e6d4",
    color4: "ffbe00",
    url: "https://colorhunt.co/palette/0058741c819ee6e6d4ffbe00"
  },
  {
    color1: "eff0f4",
    color2: "74dbef",
    color3: "0074e4",
    color4: "264e86",
    url: "https://colorhunt.co/palette/eff0f474dbef0074e4264e86"
  },
  {
    color1: "e99497",
    color2: "f3c583",
    color3: "e8e46e",
    color4: "b3e283",
    url: "https://colorhunt.co/palette/e99497f3c583e8e46eb3e283"
  },
  {
    color1: "3a1078",
    color2: "4e31aa",
    color3: "2f58cd",
    color4: "3795bd",
    url: "https://colorhunt.co/palette/3a10784e31aa2f58cd3795bd"
  },
  {
    color1: "ffb4ac",
    color2: "679186",
    color3: "264e70",
    color4: "ffebd3",
    url: "https://colorhunt.co/palette/ffb4ac679186264e70ffebd3"
  },
  {
    color1: "990000",
    color2: "ff5b00",
    color3: "d4d925",
    color4: "ffee63",
    url: "https://colorhunt.co/palette/990000ff5b00d4d925ffee63"
  },
  {
    color1: "6f4a8e",
    color2: "221f3b",
    color3: "050505",
    color4: "ebebeb",
    url: "https://colorhunt.co/palette/6f4a8e221f3b050505ebebeb"
  },
  {
    color1: "9ede73",
    color2: "f7ea00",
    color3: "e48900",
    color4: "be0000",
    url: "https://colorhunt.co/palette/9ede73f7ea00e48900be0000"
  },
  {
    color1: "525252",
    color2: "414141",
    color3: "313131",
    color4: "ec625f",
    url: "https://colorhunt.co/palette/525252414141313131ec625f"
  },
  {
    color1: "34374c",
    color2: "2c2e3e",
    color3: "ee2b47",
    color4: "f6f6f6",
    url: "https://colorhunt.co/palette/34374c2c2e3eee2b47f6f6f6"
  },
  {
    color1: "faeee7",
    color2: "f54291",
    color3: "4cd3c2",
    color4: "0a97b0",
    url: "https://colorhunt.co/palette/faeee7f542914cd3c20a97b0"
  },
  {
    color1: "6bd5e1",
    color2: "ffd98e",
    color3: "ffb677",
    color4: "ff8364",
    url: "https://colorhunt.co/palette/6bd5e1ffd98effb677ff8364"
  },
  {
    color1: "445c3c",
    color2: "fda77f",
    color3: "c9d99e",
    color4: "fae8c8",
    url: "https://colorhunt.co/palette/445c3cfda77fc9d99efae8c8"
  },
  {
    color1: "f5e1da",
    color2: "f1f1f1",
    color3: "40a798",
    color4: "476268",
    url: "https://colorhunt.co/palette/f5e1daf1f1f140a798476268"
  },
  {
    color1: "18587a",
    color2: "fc624d",
    color3: "fca7a7",
    color4: "ffd6d6",
    url: "https://colorhunt.co/palette/18587afc624dfca7a7ffd6d6"
  },
  {
    color1: "a3f3eb",
    color2: "f1ffab",
    color3: "fbd341",
    color4: "fb9a40",
    url: "https://colorhunt.co/palette/a3f3ebf1ffabfbd341fb9a40"
  },
  {
    color1: "f1f3f4",
    color2: "79bac1",
    color3: "2a7886",
    color4: "512b58",
    url: "https://colorhunt.co/palette/f1f3f479bac12a7886512b58"
  },
  {
    color1: "233142",
    color2: "455d7a",
    color3: "f95959",
    color4: "facf5a",
    url: "https://colorhunt.co/palette/233142455d7af95959facf5a"
  },
  {
    color1: "000d6b",
    color2: "9c19e0",
    color3: "ff5da2",
    color4: "99ddcc",
    url: "https://colorhunt.co/palette/000d6b9c19e0ff5da299ddcc"
  },
  {
    color1: "aa77ff",
    color2: "c9eeff",
    color3: "97deff",
    color4: "62cdff",
    url: "https://colorhunt.co/palette/aa77ffc9eeff97deff62cdff"
  },
  {
    color1: "b0cac7",
    color2: "f7d6bf",
    color3: "318fb5",
    color4: "005086",
    url: "https://colorhunt.co/palette/b0cac7f7d6bf318fb5005086"
  },
  {
    color1: "7b113a",
    color2: "150e56",
    color3: "1597bb",
    color4: "8fd6e1",
    url: "https://colorhunt.co/palette/7b113a150e561597bb8fd6e1"
  },
  {
    color1: "4e6e81",
    color2: "f9dbbb",
    color3: "ff0303",
    color4: "2e3840",
    url: "https://colorhunt.co/palette/4e6e81f9dbbbff03032e3840"
  },
  {
    color1: "d3d5fd",
    color2: "929aab",
    color3: "474a56",
    color4: "0b0b0d",
    url: "https://colorhunt.co/palette/d3d5fd929aab474a560b0b0d"
  },
  {
    color1: "0e2431",
    color2: "fc3a52",
    color3: "f9b248",
    color4: "e8d5b7",
    url: "https://colorhunt.co/palette/0e2431fc3a52f9b248e8d5b7"
  },
  {
    color1: "4b3869",
    color2: "664e88",
    color3: "63b4b8",
    color4: "a9e4d7",
    url: "https://colorhunt.co/palette/4b3869664e8863b4b8a9e4d7"
  },
  {
    color1: "7900ff",
    color2: "548cff",
    color3: "93ffd8",
    color4: "cfffdc",
    url: "https://colorhunt.co/palette/7900ff548cff93ffd8cfffdc"
  },
  {
    color1: "10a19d",
    color2: "540375",
    color3: "ff7000",
    color4: "ffbf00",
    url: "https://colorhunt.co/palette/10a19d540375ff7000ffbf00"
  },
  {
    color1: "143f6b",
    color2: "f55353",
    color3: "feb139",
    color4: "f6f54d",
    url: "https://colorhunt.co/palette/143f6bf55353feb139f6f54d"
  },
  {
    color1: "b980f0",
    color2: "fe9898",
    color3: "f5e79d",
    color4: "e5fbb8",
    url: "https://colorhunt.co/palette/b980f0fe9898f5e79de5fbb8"
  },
  {
    color1: "658864",
    color2: "b7b78a",
    color3: "dddddd",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/658864b7b78addddddeeeeee"
  },
  {
    color1: "eb586f",
    color2: "d8e9f0",
    color3: "4aa0d5",
    color4: "454553",
    url: "https://colorhunt.co/palette/eb586fd8e9f04aa0d5454553"
  },
  {
    color1: "63b7af",
    color2: "abf0e9",
    color3: "d4f3ef",
    color4: "ee8572",
    url: "https://colorhunt.co/palette/63b7afabf0e9d4f3efee8572"
  },
  {
    color1: "ec5858",
    color2: "fd8c04",
    color3: "edf285",
    color4: "93abd3",
    url: "https://colorhunt.co/palette/ec5858fd8c04edf28593abd3"
  },
  {
    color1: "583d72",
    color2: "9f5f80",
    color3: "ffba93",
    color4: "ff8e71",
    url: "https://colorhunt.co/palette/583d729f5f80ffba93ff8e71"
  },
  {
    color1: "ede9d5",
    color2: "e7ab9a",
    color3: "df7857",
    color4: "617143",
    url: "https://colorhunt.co/palette/ede9d5e7ab9adf7857617143"
  },
  {
    color1: "293462",
    color2: "216583",
    color3: "00818a",
    color4: "f7be16",
    url: "https://colorhunt.co/palette/29346221658300818af7be16"
  },
  {
    color1: "d5fdff",
    color2: "9de5ff",
    color3: "aca8ff",
    color4: "ac73ff",
    url: "https://colorhunt.co/palette/d5fdff9de5ffaca8ffac73ff"
  },
  {
    color1: "dff0ea",
    color2: "95adbe",
    color3: "574f7d",
    color4: "4f3a65",
    url: "https://colorhunt.co/palette/dff0ea95adbe574f7d4f3a65"
  },
  {
    color1: "776d8a",
    color2: "f3e6e3",
    color3: "dbe3e5",
    color4: "d3c09a",
    url: "https://colorhunt.co/palette/776d8af3e6e3dbe3e5d3c09a"
  },
  {
    color1: "f5f0bb",
    color2: "dbdfaa",
    color3: "b3c890",
    color4: "73a9ad",
    url: "https://colorhunt.co/palette/f5f0bbdbdfaab3c89073a9ad"
  },
  {
    color1: "d7aef3",
    color2: "94f6f2",
    color3: "f7f680",
    color4: "fbd0f5",
    url: "https://colorhunt.co/palette/d7aef394f6f2f7f680fbd0f5"
  },
  {
    color1: "f2f9f1",
    color2: "ddeedf",
    color3: "b6cdbd",
    color4: "5c715e",
    url: "https://colorhunt.co/palette/f2f9f1ddeedfb6cdbd5c715e"
  },
  {
    color1: "f3c892",
    color2: "fff1bd",
    color3: "a3da8d",
    color4: "146356",
    url: "https://colorhunt.co/palette/f3c892fff1bda3da8d146356"
  },
  {
    color1: "ea5959",
    color2: "f98b60",
    color3: "ffc057",
    color4: "ffe084",
    url: "https://colorhunt.co/palette/ea5959f98b60ffc057ffe084"
  },
  {
    color1: "fffbdf",
    color2: "c6ffc1",
    color3: "34656d",
    color4: "334443",
    url: "https://colorhunt.co/palette/fffbdfc6ffc134656d334443"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "fd7014",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/222831393e46fd7014eeeeee"
  },
  {
    color1: "fafafa",
    color2: "e1eeff",
    color3: "c2cfd8",
    color4: "543a3a",
    url: "https://colorhunt.co/palette/fafafae1eeffc2cfd8543a3a"
  },
  {
    color1: "61d4b3",
    color2: "fdd365",
    color3: "fb8d62",
    color4: "fd2eb3",
    url: "https://colorhunt.co/palette/61d4b3fdd365fb8d62fd2eb3"
  },
  {
    color1: "fffe9f",
    color2: "ffd480",
    color3: "fca180",
    color4: "f56262",
    url: "https://colorhunt.co/palette/fffe9fffd480fca180f56262"
  },
  {
    color1: "2d4356",
    color2: "435b66",
    color3: "a76f6f",
    color4: "eab2a0",
    url: "https://colorhunt.co/palette/2d4356435b66a76f6feab2a0"
  },
  {
    color1: "ffcc00",
    color2: "ff6666",
    color3: "cc0066",
    color4: "66cccc",
    url: "https://colorhunt.co/palette/ffcc00ff6666cc006666cccc"
  },
  {
    color1: "e3e8f8",
    color2: "c0c5cd",
    color3: "3e588f",
    color4: "203562",
    url: "https://colorhunt.co/palette/e3e8f8c0c5cd3e588f203562"
  },
  {
    color1: "ffae8f",
    color2: "ff677d",
    color3: "cd6684",
    color4: "6f5a7e",
    url: "https://colorhunt.co/palette/ffae8fff677dcd66846f5a7e"
  },
  {
    color1: "214252",
    color2: "f05454",
    color3: "af2d2d",
    color4: "ce6262",
    url: "https://colorhunt.co/palette/214252f05454af2d2dce6262"
  },
  {
    color1: "eeeeee",
    color2: "222831",
    color3: "4f8a8b",
    color4: "fbd46d",
    url: "https://colorhunt.co/palette/eeeeee2228314f8a8bfbd46d"
  },
  {
    color1: "ffc7c7",
    color2: "ff80b0",
    color3: "9399ff",
    color4: "a9fffd",
    url: "https://colorhunt.co/palette/ffc7c7ff80b09399ffa9fffd"
  },
  {
    color1: "2c2d34",
    color2: "e94822",
    color3: "f2910a",
    color4: "efd510",
    url: "https://colorhunt.co/palette/2c2d34e94822f2910aefd510"
  },
  {
    color1: "fa163f",
    color2: "12cad6",
    color3: "0fabbc",
    color4: "e4f9ff",
    url: "https://colorhunt.co/palette/fa163f12cad60fabbce4f9ff"
  },
  {
    color1: "9a1663",
    color2: "e0144c",
    color3: "ff5858",
    color4: "ff97c1",
    url: "https://colorhunt.co/palette/9a1663e0144cff5858ff97c1"
  },
  {
    color1: "f48fb1",
    color2: "f06292",
    color3: "ad1457",
    color4: "880e4f",
    url: "https://colorhunt.co/palette/f48fb1f06292ad1457880e4f"
  },
  {
    color1: "e7d9ea",
    color2: "11698e",
    color3: "19456b",
    color4: "16c79a",
    url: "https://colorhunt.co/palette/e7d9ea11698e19456b16c79a"
  },
  {
    color1: "4baea0",
    color2: "b6e6bd",
    color3: "f1f0cf",
    color4: "f0c9c9",
    url: "https://colorhunt.co/palette/4baea0b6e6bdf1f0cff0c9c9"
  },
  {
    color1: "4d089a",
    color2: "323edd",
    color3: "dc2ade",
    color4: "e8f044",
    url: "https://colorhunt.co/palette/4d089a323edddc2adee8f044"
  },
  {
    color1: "d8dfe2",
    color2: "71adb5",
    color3: "176d81",
    color4: "0d3446",
    url: "https://colorhunt.co/palette/d8dfe271adb5176d810d3446"
  },
  {
    color1: "f6eec7",
    color2: "f7d695",
    color3: "ee8972",
    color4: "d15a7c",
    url: "https://colorhunt.co/palette/f6eec7f7d695ee8972d15a7c"
  },
  {
    color1: "fcf1f1",
    color2: "ffd5cd",
    color3: "f9813a",
    color4: "1a1c20",
    url: "https://colorhunt.co/palette/fcf1f1ffd5cdf9813a1a1c20"
  },
  {
    color1: "f9f2ed",
    color2: "3ab0ff",
    color3: "ffb562",
    color4: "f87474",
    url: "https://colorhunt.co/palette/f9f2ed3ab0ffffb562f87474"
  },
  {
    color1: "00bdaa",
    color2: "400082",
    color3: "fe346e",
    color4: "f1e7b6",
    url: "https://colorhunt.co/palette/00bdaa400082fe346ef1e7b6"
  },
  {
    color1: "f55c47",
    color2: "9fe6a0",
    color3: "4aa96c",
    color4: "564a4a",
    url: "https://colorhunt.co/palette/f55c479fe6a04aa96c564a4a"
  },
  {
    color1: "000000",
    color2: "282a3a",
    color3: "735f32",
    color4: "c69749",
    url: "https://colorhunt.co/palette/000000282a3a735f32c69749"
  },
  {
    color1: "01c5c4",
    color2: "b8de6f",
    color3: "f1e189",
    color4: "f39233",
    url: "https://colorhunt.co/palette/01c5c4b8de6ff1e189f39233"
  },
  {
    color1: "86a3b8",
    color2: "e8d2a6",
    color3: "f48484",
    color4: "f55050",
    url: "https://colorhunt.co/palette/86a3b8e8d2a6f48484f55050"
  },
  {
    color1: "d61355",
    color2: "f94a29",
    color3: "fce22a",
    color4: "30e3df",
    url: "https://colorhunt.co/palette/d61355f94a29fce22a30e3df"
  },
  {
    color1: "00a8b5",
    color2: "774898",
    color3: "e62a76",
    color4: "fbb901",
    url: "https://colorhunt.co/palette/00a8b5774898e62a76fbb901"
  },
  {
    color1: "edf7fa",
    color2: "5f6caf",
    color3: "ffb677",
    color4: "ff8364",
    url: "https://colorhunt.co/palette/edf7fa5f6cafffb677ff8364"
  },
  {
    color1: "feff86",
    color2: "b0daff",
    color3: "b9e9fc",
    color4: "daf5ff",
    url: "https://colorhunt.co/palette/feff86b0daffb9e9fcdaf5ff"
  },
  {
    color1: "fcf0c8",
    color2: "f7d098",
    color3: "911f27",
    color4: "630a10",
    url: "https://colorhunt.co/palette/fcf0c8f7d098911f27630a10"
  },
  {
    color1: "c2e8ce",
    color2: "f2eee5",
    color3: "f6ad7b",
    color4: "be7575",
    url: "https://colorhunt.co/palette/c2e8cef2eee5f6ad7bbe7575"
  },
  {
    color1: "1b1f3a",
    color2: "53354a",
    color3: "a64942",
    color4: "ff7844",
    url: "https://colorhunt.co/palette/1b1f3a53354aa64942ff7844"
  },
  {
    color1: "61b15a",
    color2: "adce74",
    color3: "fff76a",
    color4: "ffce89",
    url: "https://colorhunt.co/palette/61b15aadce74fff76affce89"
  },
  {
    color1: "5fdde5",
    color2: "f4ea8e",
    color3: "f37121",
    color4: "d92027",
    url: "https://colorhunt.co/palette/5fdde5f4ea8ef37121d92027"
  },
  {
    color1: "db6b97",
    color2: "f2ffe9",
    color3: "a6cf98",
    color4: "557c55",
    url: "https://colorhunt.co/palette/db6b97f2ffe9a6cf98557c55"
  },
  {
    color1: "f3c1c6",
    color2: "f0f69f",
    color3: "b0e0a8",
    color4: "d8eff0",
    url: "https://colorhunt.co/palette/f3c1c6f0f69fb0e0a8d8eff0"
  },
  {
    color1: "363333",
    color2: "272121",
    color3: "e16428",
    color4: "f6e9e9",
    url: "https://colorhunt.co/palette/363333272121e16428f6e9e9"
  },
  {
    color1: "512d6d",
    color2: "f8485e",
    color3: "eeeeee",
    color4: "00c1d4",
    url: "https://colorhunt.co/palette/512d6df8485eeeeeee00c1d4"
  },
  {
    color1: "411530",
    color2: "d1512d",
    color3: "f5c7a9",
    color4: "f5e8e4",
    url: "https://colorhunt.co/palette/411530d1512df5c7a9f5e8e4"
  },
  {
    color1: "343434",
    color2: "e6b31e",
    color3: "fcfaf1",
    color4: "cacaca",
    url: "https://colorhunt.co/palette/343434e6b31efcfaf1cacaca"
  },
  {
    color1: "f8f3eb",
    color2: "c3edea",
    color3: "fc7e2f",
    color4: "f40552",
    url: "https://colorhunt.co/palette/f8f3ebc3edeafc7e2ff40552"
  },
  {
    color1: "4d4646",
    color2: "5b5656",
    color3: "7fcd91",
    color4: "f5eaea",
    url: "https://colorhunt.co/palette/4d46465b56567fcd91f5eaea"
  },
  {
    color1: "1b262c",
    color2: "0f4c75",
    color3: "00b7c2",
    color4: "fdcb9e",
    url: "https://colorhunt.co/palette/1b262c0f4c7500b7c2fdcb9e"
  },
  {
    color1: "3d1860",
    color2: "643579",
    color3: "bb99cd",
    color4: "f5edf7",
    url: "https://colorhunt.co/palette/3d1860643579bb99cdf5edf7"
  },
  {
    color1: "11052c",
    color2: "3d087b",
    color3: "f43b86",
    color4: "ffe459",
    url: "https://colorhunt.co/palette/11052c3d087bf43b86ffe459"
  },
  {
    color1: "79e0ee",
    color2: "98eecc",
    color3: "d0f5be",
    color4: "fbffdc",
    url: "https://colorhunt.co/palette/79e0ee98eeccd0f5befbffdc"
  },
  {
    color1: "8d8daa",
    color2: "dfdfde",
    color3: "f7f5f2",
    color4: "f56d91",
    url: "https://colorhunt.co/palette/8d8daadfdfdef7f5f2f56d91"
  },
  {
    color1: "009dae",
    color2: "71dfe7",
    color3: "c2fff9",
    color4: "ffe652",
    url: "https://colorhunt.co/palette/009dae71dfe7c2fff9ffe652"
  },
  {
    color1: "219f94",
    color2: "c1deae",
    color3: "f2f5c8",
    color4: "e8e8a6",
    url: "https://colorhunt.co/palette/219f94c1deaef2f5c8e8e8a6"
  },
  {
    color1: "d6f8b8",
    color2: "acdeaa",
    color3: "8fbbaf",
    color4: "6b7b8e",
    url: "https://colorhunt.co/palette/d6f8b8acdeaa8fbbaf6b7b8e"
  },
  {
    color1: "f76a8c",
    color2: "f8dc88",
    color3: "f8fab8",
    color4: "ccf0e1",
    url: "https://colorhunt.co/palette/f76a8cf8dc88f8fab8ccf0e1"
  },
  {
    color1: "f65a83",
    color2: "ff87b2",
    color3: "ffe898",
    color4: "fff8bc",
    url: "https://colorhunt.co/palette/f65a83ff87b2ffe898fff8bc"
  },
  {
    color1: "293462",
    color2: "1cd6ce",
    color3: "fedb39",
    color4: "d61c4e",
    url: "https://colorhunt.co/palette/2934621cd6cefedb39d61c4e"
  },
  {
    color1: "af460f",
    color2: "fe8761",
    color3: "fed39f",
    color4: "f6eec9",
    url: "https://colorhunt.co/palette/af460ffe8761fed39ff6eec9"
  },
  {
    color1: "083358",
    color2: "0f4471",
    color3: "fc3c3c",
    color4: "f6f6f6",
    url: "https://colorhunt.co/palette/0833580f4471fc3c3cf6f6f6"
  },
  {
    color1: "f1fdf3",
    color2: "e5f4e7",
    color3: "d1e9d2",
    color4: "99cda9",
    url: "https://colorhunt.co/palette/f1fdf3e5f4e7d1e9d299cda9"
  },
  {
    color1: "331d2c",
    color2: "3f2e3e",
    color3: "a78295",
    color4: "efe1d1",
    url: "https://colorhunt.co/palette/331d2c3f2e3ea78295efe1d1"
  },
  {
    color1: "1b262c",
    color2: "0f4c81",
    color3: "ed6663",
    color4: "ffa372",
    url: "https://colorhunt.co/palette/1b262c0f4c81ed6663ffa372"
  },
  {
    color1: "eff7d3",
    color2: "cedcc3",
    color3: "a7b99e",
    color4: "535a3b",
    url: "https://colorhunt.co/palette/eff7d3cedcc3a7b99e535a3b"
  },
  {
    color1: "99154e",
    color2: "ffc93c",
    color3: "ffddcc",
    color4: "ffbbcc",
    url: "https://colorhunt.co/palette/99154effc93cffddccffbbcc"
  },
  {
    color1: "ffed99",
    color2: "f6b8b8",
    color3: "ac66cc",
    color4: "3b14a7",
    url: "https://colorhunt.co/palette/ffed99f6b8b8ac66cc3b14a7"
  },
  {
    color1: "59886b",
    color2: "c05555",
    color3: "ffc85c",
    color4: "fff8c1",
    url: "https://colorhunt.co/palette/59886bc05555ffc85cfff8c1"
  },
  {
    color1: "222831",
    color2: "30475e",
    color3: "f2a365",
    color4: "ececec",
    url: "https://colorhunt.co/palette/22283130475ef2a365ececec"
  },
  {
    color1: "554994",
    color2: "f675a8",
    color3: "f29393",
    color4: "ffccb3",
    url: "https://colorhunt.co/palette/554994f675a8f29393ffccb3"
  },
  {
    color1: "fe9801",
    color2: "f4eec7",
    color3: "ccda46",
    color4: "697c37",
    url: "https://colorhunt.co/palette/fe9801f4eec7ccda46697c37"
  },
  {
    color1: "d35d6e",
    color2: "efb08c",
    color3: "f8d49d",
    color4: "5aa469",
    url: "https://colorhunt.co/palette/d35d6eefb08cf8d49d5aa469"
  },
  {
    color1: "fbd6d2",
    color2: "f190b7",
    color3: "ce49bf",
    color4: "a63ec5",
    url: "https://colorhunt.co/palette/fbd6d2f190b7ce49bfa63ec5"
  },
  {
    color1: "ff00e4",
    color2: "ed50f1",
    color3: "fdb9fc",
    color4: "ffeded",
    url: "https://colorhunt.co/palette/ff00e4ed50f1fdb9fcffeded"
  },
  {
    color1: "e4f1fe",
    color2: "8dc6ff",
    color3: "22313f",
    color4: "34495e",
    url: "https://colorhunt.co/palette/e4f1fe8dc6ff22313f34495e"
  },
  {
    color1: "88e0ef",
    color2: "161e54",
    color3: "ff5151",
    color4: "ff9b6a",
    url: "https://colorhunt.co/palette/88e0ef161e54ff5151ff9b6a"
  },
  {
    color1: "856c8b",
    color2: "d4ebd0",
    color3: "a4c5c6",
    color4: "ffeb99",
    url: "https://colorhunt.co/palette/856c8bd4ebd0a4c5c6ffeb99"
  },
  {
    color1: "900c3f",
    color2: "c70039",
    color3: "ff5733",
    color4: "ffc300",
    url: "https://colorhunt.co/palette/900c3fc70039ff5733ffc300"
  },
  {
    color1: "181818",
    color2: "8758ff",
    color3: "5cb8e4",
    color4: "f2f2f2",
    url: "https://colorhunt.co/palette/1818188758ff5cb8e4f2f2f2"
  },
  {
    color1: "f3f2da",
    color2: "4e8d7c",
    color3: "045762",
    color4: "ea97ad",
    url: "https://colorhunt.co/palette/f3f2da4e8d7c045762ea97ad"
  },
  {
    color1: "ea5c2b",
    color2: "ff7f3f",
    color3: "f6d860",
    color4: "95cd41",
    url: "https://colorhunt.co/palette/ea5c2bff7f3ff6d86095cd41"
  },
  {
    color1: "b8ffd0",
    color2: "ecffc1",
    color3: "ffe6cc",
    color4: "dfbaf7",
    url: "https://colorhunt.co/palette/b8ffd0ecffc1ffe6ccdfbaf7"
  },
  {
    color1: "11009e",
    color2: "4942e4",
    color3: "8696fe",
    color4: "c4b0ff",
    url: "https://colorhunt.co/palette/11009e4942e48696fec4b0ff"
  },
  {
    color1: "343434",
    color2: "2d4059",
    color3: "ea5455",
    color4: "fde9c9",
    url: "https://colorhunt.co/palette/3434342d4059ea5455fde9c9"
  },
  {
    color1: "f5eddc",
    color2: "cfd2cf",
    color3: "a2b5bb",
    color4: "eb1d36",
    url: "https://colorhunt.co/palette/f5eddccfd2cfa2b5bbeb1d36"
  },
  {
    color1: "015668",
    color2: "263f44",
    color3: "ffd369",
    color4: "fff1cf",
    url: "https://colorhunt.co/palette/015668263f44ffd369fff1cf"
  },
  {
    color1: "fa1616",
    color2: "12cad6",
    color3: "0fabbc",
    color4: "e4f9ff",
    url: "https://colorhunt.co/palette/fa161612cad60fabbce4f9ff"
  },
  {
    color1: "f88f01",
    color2: "e27802",
    color3: "6a492b",
    color4: "58391c",
    url: "https://colorhunt.co/palette/f88f01e278026a492b58391c"
  },
  {
    color1: "bd574e",
    color2: "fa877f",
    color3: "ffad87",
    color4: "dedef0",
    url: "https://colorhunt.co/palette/bd574efa877fffad87dedef0"
  },
  {
    color1: "153e90",
    color2: "0e49b5",
    color3: "54e346",
    color4: "fffaa4",
    url: "https://colorhunt.co/palette/153e900e49b554e346fffaa4"
  },
  {
    color1: "d2f3e0",
    color2: "feb9c8",
    color3: "f6a7ba",
    color4: "f5fbf1",
    url: "https://colorhunt.co/palette/d2f3e0feb9c8f6a7baf5fbf1"
  },
  {
    color1: "eeeeee",
    color2: "393e46",
    color3: "76ead7",
    color4: "c4fb6d",
    url: "https://colorhunt.co/palette/eeeeee393e4676ead7c4fb6d"
  },
  {
    color1: "20262e",
    color2: "913175",
    color3: "cd5888",
    color4: "e9e8e8",
    url: "https://colorhunt.co/palette/20262e913175cd5888e9e8e8"
  },
  {
    color1: "693c72",
    color2: "c15050",
    color3: "d97642",
    color4: "d49d42",
    url: "https://colorhunt.co/palette/693c72c15050d97642d49d42"
  },
  {
    color1: "01024e",
    color2: "543864",
    color3: "8b4367",
    color4: "ff6464",
    url: "https://colorhunt.co/palette/01024e5438648b4367ff6464"
  },
  {
    color1: "a26ea1",
    color2: "f18a9b",
    color3: "ffb480",
    color4: "ffff9d",
    url: "https://colorhunt.co/palette/a26ea1f18a9bffb480ffff9d"
  },
  {
    color1: "ff78c4",
    color2: "e1aeff",
    color3: "ffbdf7",
    color4: "ffecec",
    url: "https://colorhunt.co/palette/ff78c4e1aeffffbdf7ffecec"
  },
  {
    color1: "b9ac92",
    color2: "ffa931",
    color3: "fecb89",
    color4: "fbe6d4",
    url: "https://colorhunt.co/palette/b9ac92ffa931fecb89fbe6d4"
  },
  {
    color1: "7c3e66",
    color2: "f2ebe9",
    color3: "a5becc",
    color4: "243a73",
    url: "https://colorhunt.co/palette/7c3e66f2ebe9a5becc243a73"
  },
  {
    color1: "d1f4fa",
    color2: "005792",
    color3: "ffe6eb",
    color4: "ffcdcd",
    url: "https://colorhunt.co/palette/d1f4fa005792ffe6ebffcdcd"
  },
  {
    color1: "d9f8c4",
    color2: "f9f9c5",
    color3: "fad9a1",
    color4: "f37878",
    url: "https://colorhunt.co/palette/d9f8c4f9f9c5fad9a1f37878"
  },
  {
    color1: "6f38c5",
    color2: "87a2fb",
    color3: "adddd0",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/6f38c587a2fbadddd0eeeeee"
  },
  {
    color1: "f4ff61",
    color2: "a8ff3e",
    color3: "32ff6a",
    color4: "27aa80",
    url: "https://colorhunt.co/palette/f4ff61a8ff3e32ff6a27aa80"
  },
  {
    color1: "f0bebe",
    color2: "5ea3a6",
    color3: "3a718c",
    color4: "ffffdf",
    url: "https://colorhunt.co/palette/f0bebe5ea3a63a718cffffdf"
  },
  {
    color1: "ffcccc",
    color2: "caabd8",
    color3: "9873b9",
    color4: "714288",
    url: "https://colorhunt.co/palette/ffcccccaabd89873b9714288"
  },
  {
    color1: "fff6fb",
    color2: "ffbee3",
    color3: "fc5bb6",
    color4: "ff0592",
    url: "https://colorhunt.co/palette/fff6fbffbee3fc5bb6ff0592"
  },
  {
    color1: "80a3a2",
    color2: "abcecf",
    color3: "c4dce0",
    color4: "daf4f5",
    url: "https://colorhunt.co/palette/80a3a2abcecfc4dce0daf4f5"
  },
  {
    color1: "42240c",
    color2: "c81912",
    color3: "f64b3c",
    color4: "fdba9a",
    url: "https://colorhunt.co/palette/42240cc81912f64b3cfdba9a"
  },
  {
    color1: "29d2e4",
    color2: "13829b",
    color3: "fcc29a",
    color4: "fde9c9",
    url: "https://colorhunt.co/palette/29d2e413829bfcc29afde9c9"
  },
  {
    color1: "e02401",
    color2: "f78812",
    color3: "ab6d23",
    color4: "51050f",
    url: "https://colorhunt.co/palette/e02401f78812ab6d2351050f"
  },
  {
    color1: "d47ae8",
    color2: "f4beee",
    color3: "a8ece7",
    color4: "fdff8f",
    url: "https://colorhunt.co/palette/d47ae8f4beeea8ece7fdff8f"
  },
  {
    color1: "ffef82",
    color2: "efd345",
    color3: "babd42",
    color4: "82954b",
    url: "https://colorhunt.co/palette/ffef82efd345babd4282954b"
  },
  {
    color1: "542e71",
    color2: "fb3640",
    color3: "fdca40",
    color4: "a799b7",
    url: "https://colorhunt.co/palette/542e71fb3640fdca40a799b7"
  },
  {
    color1: "f9f9f9",
    color2: "ded5c4",
    color3: "ef7e56",
    color4: "305973",
    url: "https://colorhunt.co/palette/f9f9f9ded5c4ef7e56305973"
  },
  {
    color1: "f7e2e2",
    color2: "61a4bc",
    color3: "5b7db1",
    color4: "1a132f",
    url: "https://colorhunt.co/palette/f7e2e261a4bc5b7db11a132f"
  },
  {
    color1: "faf1e4",
    color2: "cedebd",
    color3: "9eb384",
    color4: "435334",
    url: "https://colorhunt.co/palette/faf1e4cedebd9eb384435334"
  },
  {
    color1: "ea2c62",
    color2: "ff9a8c",
    color3: "fad5ad",
    color4: "adb36e",
    url: "https://colorhunt.co/palette/ea2c62ff9a8cfad5adadb36e"
  },
  {
    color1: "d3eca7",
    color2: "a1b57d",
    color3: "b33030",
    color4: "19282f",
    url: "https://colorhunt.co/palette/d3eca7a1b57db3303019282f"
  },
  {
    color1: "e6dedd",
    color2: "8f1d14",
    color3: "1b120f",
    color4: "f89d13",
    url: "https://colorhunt.co/palette/e6dedd8f1d141b120ff89d13"
  },
  {
    color1: "091353",
    color2: "9d84b7",
    color3: "d5d5d5",
    color4: "b2f9fc",
    url: "https://colorhunt.co/palette/0913539d84b7d5d5d5b2f9fc"
  },
  {
    color1: "fefbe9",
    color2: "e1eedd",
    color3: "f0a04b",
    color4: "183a1d",
    url: "https://colorhunt.co/palette/fefbe9e1eeddf0a04b183a1d"
  },
  {
    color1: "ffe227",
    color2: "eb596e",
    color3: "4d375d",
    color4: "121013",
    url: "https://colorhunt.co/palette/ffe227eb596e4d375d121013"
  },
  {
    color1: "541690",
    color2: "ff4949",
    color3: "ff8d29",
    color4: "ffcd38",
    url: "https://colorhunt.co/palette/541690ff4949ff8d29ffcd38"
  },
  {
    color1: "f8b195",
    color2: "f67280",
    color3: "c06c84",
    color4: "6c5b7b",
    url: "https://colorhunt.co/palette/f8b195f67280c06c846c5b7b"
  },
  {
    color1: "970747",
    color2: "fef4e8",
    color3: "1989ac",
    color4: "283e56",
    url: "https://colorhunt.co/palette/970747fef4e81989ac283e56"
  },
  {
    color1: "f6f6f6",
    color2: "ffbb91",
    color3: "ff8e6e",
    color4: "515070",
    url: "https://colorhunt.co/palette/f6f6f6ffbb91ff8e6e515070"
  },
  {
    color1: "f07dea",
    color2: "a460ed",
    color3: "9fc9f3",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/f07deaa460ed9fc9f3eeeeee"
  },
  {
    color1: "004445",
    color2: "2c7873",
    color3: "6fb98f",
    color4: "ffd800",
    url: "https://colorhunt.co/palette/0044452c78736fb98fffd800"
  },
  {
    color1: "6effbf",
    color2: "dcaee8",
    color3: "ffc5e6",
    color4: "fcf2db",
    url: "https://colorhunt.co/palette/6effbfdcaee8ffc5e6fcf2db"
  },
  {
    color1: "e2eff1",
    color2: "b6d5e1",
    color3: "65799b",
    color4: "555273",
    url: "https://colorhunt.co/palette/e2eff1b6d5e165799b555273"
  },
  {
    color1: "fff8cd",
    color2: "ffe05d",
    color3: "ff9642",
    color4: "646464",
    url: "https://colorhunt.co/palette/fff8cdffe05dff9642646464"
  },
  {
    color1: "293462",
    color2: "f24c4c",
    color3: "ec9b3b",
    color4: "f7d716",
    url: "https://colorhunt.co/palette/293462f24c4cec9b3bf7d716"
  },
  {
    color1: "a6f0c6",
    color2: "a98b98",
    color3: "4e3d53",
    color4: "0f1123",
    url: "https://colorhunt.co/palette/a6f0c6a98b984e3d530f1123"
  },
  {
    color1: "eee2de",
    color2: "ea906c",
    color3: "b31312",
    color4: "2b2a4c",
    url: "https://colorhunt.co/palette/eee2deea906cb313122b2a4c"
  },
  {
    color1: "c7ffff",
    color2: "fbeeff",
    color3: "ebc6ff",
    color4: "7e80ff",
    url: "https://colorhunt.co/palette/c7fffffbeeffebc6ff7e80ff"
  },
  {
    color1: "2c3e50",
    color2: "34495e",
    color3: "ecf0f1",
    color4: "bdc3c7",
    url: "https://colorhunt.co/palette/2c3e5034495eecf0f1bdc3c7"
  },
  {
    color1: "ff5d9e",
    color2: "8f71ff",
    color3: "82acff",
    color4: "8bffff",
    url: "https://colorhunt.co/palette/ff5d9e8f71ff82acff8bffff"
  },
  {
    color1: "343434",
    color2: "8e8b82",
    color3: "e9dcbe",
    color4: "f3f3f3",
    url: "https://colorhunt.co/palette/3434348e8b82e9dcbef3f3f3"
  },
  {
    color1: "302939",
    color2: "50595c",
    color3: "e99b9b",
    color4: "ffd8d8",
    url: "https://colorhunt.co/palette/30293950595ce99b9bffd8d8"
  },
  {
    color1: "8cba51",
    color2: "deff8b",
    color3: "fbceb5",
    color4: "ff5d6c",
    url: "https://colorhunt.co/palette/8cba51deff8bfbceb5ff5d6c"
  },
  {
    color1: "daebee",
    color2: "b6d7de",
    color3: "fcedda",
    color4: "ff5126",
    url: "https://colorhunt.co/palette/daebeeb6d7defceddaff5126"
  },
  {
    color1: "125c13",
    color2: "3e7c17",
    color3: "f4a442",
    color4: "e8e1d9",
    url: "https://colorhunt.co/palette/125c133e7c17f4a442e8e1d9"
  },
  {
    color1: "eeecda",
    color2: "f08a5d",
    color3: "b83b5e",
    color4: "6a2c70",
    url: "https://colorhunt.co/palette/eeecdaf08a5db83b5e6a2c70"
  },
  {
    color1: "11cbd7",
    color2: "9feed1",
    color3: "fff6a2",
    color4: "f60c86",
    url: "https://colorhunt.co/palette/11cbd79feed1fff6a2f60c86"
  },
  {
    color1: "522d5b",
    color2: "d7385e",
    color3: "fb7b6b",
    color4: "e7d39f",
    url: "https://colorhunt.co/palette/522d5bd7385efb7b6be7d39f"
  },
  {
    color1: "fed049",
    color2: "cffde1",
    color3: "68b984",
    color4: "3d5656",
    url: "https://colorhunt.co/palette/fed049cffde168b9843d5656"
  },
  {
    color1: "f8efd4",
    color2: "edc988",
    color3: "de4463",
    color4: "821752",
    url: "https://colorhunt.co/palette/f8efd4edc988de4463821752"
  },
  {
    color1: "fdf0f6",
    color2: "951555",
    color3: "771144",
    color4: "1e0411",
    url: "https://colorhunt.co/palette/fdf0f69515557711441e0411"
  },
  {
    color1: "f1f3de",
    color2: "eb8f8f",
    color3: "ec0101",
    color4: "cd0a0a",
    url: "https://colorhunt.co/palette/f1f3deeb8f8fec0101cd0a0a"
  },
  {
    color1: "f5e1da",
    color2: "f1f1f1",
    color3: "49beb7",
    color4: "085f63",
    url: "https://colorhunt.co/palette/f5e1daf1f1f149beb7085f63"
  },
  {
    color1: "494ca2",
    color2: "8186d5",
    color3: "c6cbef",
    color4: "e3e7f1",
    url: "https://colorhunt.co/palette/494ca28186d5c6cbefe3e7f1"
  },
  {
    color1: "377d71",
    color2: "fbc5c5",
    color3: "fba1a1",
    color4: "8879b0",
    url: "https://colorhunt.co/palette/377d71fbc5c5fba1a18879b0"
  },
  {
    color1: "e7305b",
    color2: "e2979c",
    color3: "f7f5dd",
    color4: "9bdeac",
    url: "https://colorhunt.co/palette/e7305be2979cf7f5dd9bdeac"
  },
  {
    color1: "fcf9f9",
    color2: "f1f864",
    color3: "bceb3c",
    color4: "7cbd1e",
    url: "https://colorhunt.co/palette/fcf9f9f1f864bceb3c7cbd1e"
  },
  {
    color1: "f3f3f3",
    color2: "ffdd67",
    color3: "ffcd38",
    color4: "4a4a4a",
    url: "https://colorhunt.co/palette/f3f3f3ffdd67ffcd384a4a4a"
  },
  {
    color1: "042f4b",
    color2: "fff6da",
    color3: "fbc99d",
    color4: "ed1250",
    url: "https://colorhunt.co/palette/042f4bfff6dafbc99ded1250"
  },
  {
    color1: "062925",
    color2: "044a42",
    color3: "3a9188",
    color4: "b8e1dd",
    url: "https://colorhunt.co/palette/062925044a423a9188b8e1dd"
  },
  {
    color1: "1a1a1b",
    color2: "333f44",
    color3: "37aa9c",
    color4: "94f3e4",
    url: "https://colorhunt.co/palette/1a1a1b333f4437aa9c94f3e4"
  },
  {
    color1: "194769",
    color2: "f6f6e9",
    color3: "d7eef2",
    color4: "f2855e",
    url: "https://colorhunt.co/palette/194769f6f6e9d7eef2f2855e"
  },
  {
    color1: "06113c",
    color2: "ff8c32",
    color3: "dddddd",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/06113cff8c32ddddddeeeeee"
  },
  {
    color1: "5ba19b",
    color2: "fceaea",
    color3: "f5d9d9",
    color4: "fbead1",
    url: "https://colorhunt.co/palette/5ba19bfceaeaf5d9d9fbead1"
  },
  {
    color1: "fdd2bf",
    color2: "ff6b6b",
    color3: "b61919",
    color4: "012443",
    url: "https://colorhunt.co/palette/fdd2bfff6b6bb61919012443"
  },
  {
    color1: "ec7272",
    color2: "f7a76c",
    color3: "e0d98c",
    color4: "c3ff99",
    url: "https://colorhunt.co/palette/ec7272f7a76ce0d98cc3ff99"
  },
  {
    color1: "005792",
    color2: "53cde2",
    color3: "d1f4fa",
    color4: "edf9fc",
    url: "https://colorhunt.co/palette/00579253cde2d1f4faedf9fc"
  },
  {
    color1: "f38181",
    color2: "fce38a",
    color3: "d6f7ad",
    color4: "95e1d3",
    url: "https://colorhunt.co/palette/f38181fce38ad6f7ad95e1d3"
  },
  {
    color1: "182952",
    color2: "2b3595",
    color3: "7045af",
    color4: "e14594",
    url: "https://colorhunt.co/palette/1829522b35957045afe14594"
  },
  {
    color1: "f9989f",
    color2: "fccb8f",
    color3: "faf096",
    color4: "c5f8c8",
    url: "https://colorhunt.co/palette/f9989ffccb8ffaf096c5f8c8"
  },
  {
    color1: "b7fbff",
    color2: "fff6be",
    color3: "ffe0a3",
    color4: "ffa1ac",
    url: "https://colorhunt.co/palette/b7fbfffff6beffe0a3ffa1ac"
  },
  {
    color1: "f9f8ed",
    color2: "f4e7d3",
    color3: "0881a3",
    color4: "1f4e5f",
    url: "https://colorhunt.co/palette/f9f8edf4e7d30881a31f4e5f"
  },
  {
    color1: "ff4545",
    color2: "ff9867",
    color3: "ffbf87",
    color4: "ffedb2",
    url: "https://colorhunt.co/palette/ff4545ff9867ffbf87ffedb2"
  },
  {
    color1: "297f87",
    color2: "fff7ae",
    color3: "f6d167",
    color4: "df2e2e",
    url: "https://colorhunt.co/palette/297f87fff7aef6d167df2e2e"
  },
  {
    color1: "b4ff9f",
    color2: "f9ffa4",
    color3: "ffd59e",
    color4: "ffa1a1",
    url: "https://colorhunt.co/palette/b4ff9ff9ffa4ffd59effa1a1"
  },
  {
    color1: "071952",
    color2: "0b666a",
    color3: "35a29f",
    color4: "97feed",
    url: "https://colorhunt.co/palette/0719520b666a35a29f97feed"
  },
  {
    color1: "ff004d",
    color2: "9d0b28",
    color3: "5a082d",
    color4: "33030d",
    url: "https://colorhunt.co/palette/ff004d9d0b285a082d33030d"
  },
  {
    color1: "ef7b7b",
    color2: "fcf3ca",
    color3: "c4eada",
    color4: "919190",
    url: "https://colorhunt.co/palette/ef7b7bfcf3cac4eada919190"
  },
  {
    color1: "905e96",
    color2: "d58bdd",
    color3: "ff99d7",
    color4: "ffd372",
    url: "https://colorhunt.co/palette/905e96d58bddff99d7ffd372"
  },
  {
    color1: "fba1b7",
    color2: "ffd1da",
    color3: "fff0f5",
    color4: "ffdbaa",
    url: "https://colorhunt.co/palette/fba1b7ffd1dafff0f5ffdbaa"
  },
  {
    color1: "9ac5f4",
    color2: "99dbf5",
    color3: "a7ecee",
    color4: "ffeebb",
    url: "https://colorhunt.co/palette/9ac5f499dbf5a7eceeffeebb"
  },
  {
    color1: "f0ebcc",
    color2: "3d84b8",
    color3: "344fa1",
    color4: "3f3697",
    url: "https://colorhunt.co/palette/f0ebcc3d84b8344fa13f3697"
  },
  {
    color1: "085f63",
    color2: "49beb7",
    color3: "facf5a",
    color4: "ff5959",
    url: "https://colorhunt.co/palette/085f6349beb7facf5aff5959"
  },
  {
    color1: "24a19c",
    color2: "faeee7",
    color3: "325288",
    color4: "d96098",
    url: "https://colorhunt.co/palette/24a19cfaeee7325288d96098"
  },
  {
    color1: "f4eec0",
    color2: "aed09e",
    color3: "61b292",
    color4: "7e6752",
    url: "https://colorhunt.co/palette/f4eec0aed09e61b2927e6752"
  },
  {
    color1: "625261",
    color2: "a6a6a4",
    color3: "e8e8e8",
    color4: "89beb3",
    url: "https://colorhunt.co/palette/625261a6a6a4e8e8e889beb3"
  },
  {
    color1: "2e4c6d",
    color2: "396eb0",
    color3: "daddfc",
    color4: "fc997c",
    url: "https://colorhunt.co/palette/2e4c6d396eb0daddfcfc997c"
  },
  {
    color1: "533e85",
    color2: "488fb1",
    color3: "4fd3c4",
    color4: "c1f8cf",
    url: "https://colorhunt.co/palette/533e85488fb14fd3c4c1f8cf"
  },
  {
    color1: "ff9b9b",
    color2: "ffd6a5",
    color3: "fffec4",
    color4: "cbffa9",
    url: "https://colorhunt.co/palette/ff9b9bffd6a5fffec4cbffa9"
  },
  {
    color1: "f6e1e1",
    color2: "ff9d76",
    color3: "eb4d55",
    color4: "333366",
    url: "https://colorhunt.co/palette/f6e1e1ff9d76eb4d55333366"
  },
  {
    color1: "ffb100",
    color2: "fbc252",
    color3: "f0eccf",
    color4: "a3bb98",
    url: "https://colorhunt.co/palette/ffb100fbc252f0eccfa3bb98"
  },
  {
    color1: "eeeeee",
    color2: "dedede",
    color3: "ff4949",
    color4: "c10000",
    url: "https://colorhunt.co/palette/eeeeeedededeff4949c10000"
  },
  {
    color1: "04009a",
    color2: "77acf1",
    color3: "3edbf0",
    color4: "f0ebcc",
    url: "https://colorhunt.co/palette/04009a77acf13edbf0f0ebcc"
  },
  {
    color1: "f8f8f8",
    color2: "faebcd",
    color3: "f7c873",
    color4: "434343",
    url: "https://colorhunt.co/palette/f8f8f8faebcdf7c873434343"
  },
  {
    color1: "1b2a49",
    color2: "465881",
    color3: "00909e",
    color4: "c9d1d3",
    url: "https://colorhunt.co/palette/1b2a4946588100909ec9d1d3"
  },
  {
    color1: "21325e",
    color2: "3e497a",
    color3: "f1d00a",
    color4: "f0f0f0",
    url: "https://colorhunt.co/palette/21325e3e497af1d00af0f0f0"
  },
  {
    color1: "ffdcb6",
    color2: "ecc9ee",
    color3: "c9a7eb",
    color4: "9384d1",
    url: "https://colorhunt.co/palette/ffdcb6ecc9eec9a7eb9384d1"
  },
  {
    color1: "b6ffce",
    color2: "f6ffa4",
    color3: "fdd7aa",
    color4: "ffa8a8",
    url: "https://colorhunt.co/palette/b6ffcef6ffa4fdd7aaffa8a8"
  },
  {
    color1: "feffdf",
    color2: "ffe79a",
    color3: "ffa952",
    color4: "ef5a5a",
    url: "https://colorhunt.co/palette/feffdfffe79affa952ef5a5a"
  },
  {
    color1: "fff4e3",
    color2: "ffcdab",
    color3: "ffa45c",
    color4: "5d5d5a",
    url: "https://colorhunt.co/palette/fff4e3ffcdabffa45c5d5d5a"
  },
  {
    color1: "6e3b3b",
    color2: "ac3f21",
    color3: "be6a15",
    color4: "f3cf7a",
    url: "https://colorhunt.co/palette/6e3b3bac3f21be6a15f3cf7a"
  },
  {
    color1: "cdffeb",
    color2: "009f9d",
    color3: "07456f",
    color4: "0f0a3c",
    url: "https://colorhunt.co/palette/cdffeb009f9d07456f0f0a3c"
  },
  {
    color1: "001e6c",
    color2: "035397",
    color3: "e8630a",
    color4: "fcd900",
    url: "https://colorhunt.co/palette/001e6c035397e8630afcd900"
  },
  {
    color1: "1fffff",
    color2: "fffde1",
    color3: "ff9d76",
    color4: "ff4273",
    url: "https://colorhunt.co/palette/1ffffffffde1ff9d76ff4273"
  },
  {
    color1: "fff3da",
    color2: "dfccfb",
    color3: "d0bfff",
    color4: "beadfa",
    url: "https://colorhunt.co/palette/fff3dadfccfbd0bfffbeadfa"
  },
  {
    color1: "293462",
    color2: "d61c4e",
    color3: "feb139",
    color4: "fff80a",
    url: "https://colorhunt.co/palette/293462d61c4efeb139fff80a"
  },
  {
    color1: "36d1c4",
    color2: "a0eecc",
    color3: "fff2be",
    color4: "f6318c",
    url: "https://colorhunt.co/palette/36d1c4a0eeccfff2bef6318c"
  },
  {
    color1: "820000",
    color2: "b9005b",
    color3: "ff7c7c",
    color4: "fee0c0",
    url: "https://colorhunt.co/palette/820000b9005bff7c7cfee0c0"
  },
  {
    color1: "d63447",
    color2: "f57b51",
    color3: "f6eedf",
    color4: "d1cebd",
    url: "https://colorhunt.co/palette/d63447f57b51f6eedfd1cebd"
  },
  {
    color1: "dad992",
    color2: "e6df9a",
    color3: "f3ed9e",
    color4: "fffea9",
    url: "https://colorhunt.co/palette/dad992e6df9af3ed9efffea9"
  },
  {
    color1: "354649",
    color2: "6c7a89",
    color3: "a3c6c4",
    color4: "e0e7e9",
    url: "https://colorhunt.co/palette/3546496c7a89a3c6c4e0e7e9"
  },
  {
    color1: "ebecf1",
    color2: "206a5d",
    color3: "1f4068",
    color4: "1b1c25",
    url: "https://colorhunt.co/palette/ebecf1206a5d1f40681b1c25"
  },
  {
    color1: "ab46d2",
    color2: "ff6fb5",
    color3: "55d8c1",
    color4: "fcf69c",
    url: "https://colorhunt.co/palette/ab46d2ff6fb555d8c1fcf69c"
  },
  {
    color1: "fbecec",
    color2: "91d18b",
    color3: "e11d74",
    color4: "440047",
    url: "https://colorhunt.co/palette/fbecec91d18be11d74440047"
  },
  {
    color1: "54436b",
    color2: "50cb93",
    color3: "71efa3",
    color4: "acffad",
    url: "https://colorhunt.co/palette/54436b50cb9371efa3acffad"
  },
  {
    color1: "eae7ed",
    color2: "b793e6",
    color3: "646ecb",
    color4: "3532a7",
    url: "https://colorhunt.co/palette/eae7edb793e6646ecb3532a7"
  },
  {
    color1: "ffe9a0",
    color2: "367e18",
    color3: "f57328",
    color4: "cc3636",
    url: "https://colorhunt.co/palette/ffe9a0367e18f57328cc3636"
  },
  {
    color1: "ffca61",
    color2: "ffec85",
    color3: "f2ffdf",
    color4: "c9f0d6",
    url: "https://colorhunt.co/palette/ffca61ffec85f2ffdfc9f0d6"
  },
  {
    color1: "1a2c5b",
    color2: "3e4e88",
    color3: "7971ea",
    color4: "b8dff0",
    url: "https://colorhunt.co/palette/1a2c5b3e4e887971eab8dff0"
  },
  {
    color1: "bff4ed",
    color2: "280f34",
    color3: "e41655",
    color4: "b30753",
    url: "https://colorhunt.co/palette/bff4ed280f34e41655b30753"
  },
  {
    color1: "0e9aa7",
    color2: "3da4ab",
    color3: "f6cd61",
    color4: "fe8a71",
    url: "https://colorhunt.co/palette/0e9aa73da4abf6cd61fe8a71"
  },
  {
    color1: "45046a",
    color2: "5c2a9d",
    color3: "b5076b",
    color4: "f1ebbb",
    url: "https://colorhunt.co/palette/45046a5c2a9db5076bf1ebbb"
  },
  {
    color1: "413c69",
    color2: "4a47a3",
    color3: "ad62aa",
    color4: "f4b0c7",
    url: "https://colorhunt.co/palette/413c694a47a3ad62aaf4b0c7"
  },
  {
    color1: "fdebf7",
    color2: "fbcaff",
    color3: "ffadf0",
    color4: "fc28fb",
    url: "https://colorhunt.co/palette/fdebf7fbcaffffadf0fc28fb"
  },
  {
    color1: "0881a3",
    color2: "fffdfb",
    color3: "fde9df",
    color4: "ffd6a4",
    url: "https://colorhunt.co/palette/0881a3fffdfbfde9dfffd6a4"
  },
  {
    color1: "010101",
    color2: "69779b",
    color3: "acdbdf",
    color4: "f0ece2",
    url: "https://colorhunt.co/palette/01010169779bacdbdff0ece2"
  },
  {
    color1: "c4aff0",
    color2: "fffeec",
    color3: "64d7d6",
    color4: "5782bb",
    url: "https://colorhunt.co/palette/c4aff0fffeec64d7d65782bb"
  },
  {
    color1: "ff5f00",
    color2: "b20600",
    color3: "00092c",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/ff5f00b2060000092ceeeeee"
  },
  {
    color1: "60a9a6",
    color2: "caf2d7",
    color3: "f5fec0",
    color4: "fddede",
    url: "https://colorhunt.co/palette/60a9a6caf2d7f5fec0fddede"
  },
  {
    color1: "0e2954",
    color2: "1f6e8c",
    color3: "2e8a99",
    color4: "84a7a1",
    url: "https://colorhunt.co/palette/0e29541f6e8c2e8a9984a7a1"
  },
  {
    color1: "233142",
    color2: "36506c",
    color3: "a5def1",
    color4: "ebf7fd",
    url: "https://colorhunt.co/palette/23314236506ca5def1ebf7fd"
  },
  {
    color1: "3f0071",
    color2: "fb2576",
    color3: "332fd0",
    color4: "0002a1",
    url: "https://colorhunt.co/palette/3f0071fb2576332fd00002a1"
  },
  {
    color1: "64638f",
    color2: "9795cf",
    color3: "aba9e9",
    color4: "cbc9ff",
    url: "https://colorhunt.co/palette/64638f9795cfaba9e9cbc9ff"
  },
  {
    color1: "f6bed6",
    color2: "e79cc2",
    color3: "1d1b38",
    color4: "336d88",
    url: "https://colorhunt.co/palette/f6bed6e79cc21d1b38336d88"
  },
  {
    color1: "ff6473",
    color2: "757882",
    color3: "5cc1b3",
    color4: "6ef7c8",
    url: "https://colorhunt.co/palette/ff64737578825cc1b36ef7c8"
  },
  {
    color1: "180a0a",
    color2: "711a75",
    color3: "f10086",
    color4: "f582a7",
    url: "https://colorhunt.co/palette/180a0a711a75f10086f582a7"
  },
  {
    color1: "1d1ce5",
    color2: "4649ff",
    color3: "7978ff",
    color4: "c47aff",
    url: "https://colorhunt.co/palette/1d1ce54649ff7978ffc47aff"
  },
  {
    color1: "aa530e",
    color2: "df8931",
    color3: "f5c16c",
    color4: "f3eded",
    url: "https://colorhunt.co/palette/aa530edf8931f5c16cf3eded"
  },
  {
    color1: "464660",
    color2: "368b85",
    color3: "b4b897",
    color4: "f1e9e5",
    url: "https://colorhunt.co/palette/464660368b85b4b897f1e9e5"
  },
  {
    color1: "092532",
    color2: "89c9b8",
    color3: "c7e2b2",
    color4: "e1ffc2",
    url: "https://colorhunt.co/palette/09253289c9b8c7e2b2e1ffc2"
  },
  {
    color1: "472183",
    color2: "4b56d2",
    color3: "82c3ec",
    color4: "f1f6f5",
    url: "https://colorhunt.co/palette/4721834b56d282c3ecf1f6f5"
  },
  {
    color1: "110133",
    color2: "00918e",
    color3: "4dd599",
    color4: "ffdc34",
    url: "https://colorhunt.co/palette/11013300918e4dd599ffdc34"
  },
  {
    color1: "4c3f91",
    color2: "9145b6",
    color3: "b958a5",
    color4: "ff5677",
    url: "https://colorhunt.co/palette/4c3f919145b6b958a5ff5677"
  },
  {
    color1: "fa9579",
    color2: "654062",
    color3: "65d6ce",
    color4: "ffe9d6",
    url: "https://colorhunt.co/palette/fa957965406265d6ceffe9d6"
  },
  {
    color1: "b80257",
    color2: "dd356e",
    color3: "fc7fb6",
    color4: "ffbbe1",
    url: "https://colorhunt.co/palette/b80257dd356efc7fb6ffbbe1"
  },
  {
    color1: "f5d7a1",
    color2: "f0a28e",
    color3: "ba6476",
    color4: "812d58",
    url: "https://colorhunt.co/palette/f5d7a1f0a28eba6476812d58"
  },
  {
    color1: "fd5d5d",
    color2: "ff8080",
    color3: "fff7bc",
    color4: "c0eda6",
    url: "https://colorhunt.co/palette/fd5d5dff8080fff7bcc0eda6"
  },
  {
    color1: "621055",
    color2: "b52b65",
    color3: "ed6663",
    color4: "ffa372",
    url: "https://colorhunt.co/palette/621055b52b65ed6663ffa372"
  },
  {
    color1: "fafafa",
    color2: "ff6699",
    color3: "c54c82",
    color4: "512e67",
    url: "https://colorhunt.co/palette/fafafaff6699c54c82512e67"
  },
  {
    color1: "f7aa00",
    color2: "235784",
    color3: "40a8c4",
    color4: "bcdbdf",
    url: "https://colorhunt.co/palette/f7aa0023578440a8c4bcdbdf"
  },
  {
    color1: "bbe9db",
    color2: "aeccc6",
    color3: "9ba6a5",
    color4: "757a79",
    url: "https://colorhunt.co/palette/bbe9dbaeccc69ba6a5757a79"
  },
  {
    color1: "8c7676",
    color2: "99f0ca",
    color3: "c9fdd7",
    color4: "fdffe7",
    url: "https://colorhunt.co/palette/8c767699f0cac9fdd7fdffe7"
  },
  {
    color1: "282f44",
    color2: "e6af2e",
    color3: "f5d061",
    color4: "ececec",
    url: "https://colorhunt.co/palette/282f44e6af2ef5d061ececec"
  },
  {
    color1: "181823",
    color2: "537fe7",
    color3: "c0eef2",
    color4: "e9f8f9",
    url: "https://colorhunt.co/palette/181823537fe7c0eef2e9f8f9"
  },
  {
    color1: "f0cf85",
    color2: "e7f0c3",
    color3: "a4d4ae",
    color4: "32afa9",
    url: "https://colorhunt.co/palette/f0cf85e7f0c3a4d4ae32afa9"
  },
  {
    color1: "73f7dd",
    color2: "2cc4cb",
    color3: "1972a4",
    color4: "2e3a87",
    url: "https://colorhunt.co/palette/73f7dd2cc4cb1972a42e3a87"
  },
  {
    color1: "c9485b",
    color2: "e89da2",
    color3: "f5c3bc",
    color4: "96d1c7",
    url: "https://colorhunt.co/palette/c9485be89da2f5c3bc96d1c7"
  },
  {
    color1: "abc9ff",
    color2: "ffdede",
    color3: "ff8b8b",
    color4: "eb4747",
    url: "https://colorhunt.co/palette/abc9ffffdedeff8b8beb4747"
  },
  {
    color1: "2e99b0",
    color2: "fcd77f",
    color3: "ff2e4c",
    color4: "1e1548",
    url: "https://colorhunt.co/palette/2e99b0fcd77fff2e4c1e1548"
  },
  {
    color1: "293462",
    color2: "00818a",
    color3: "ec9b3b",
    color4: "f7be16",
    url: "https://colorhunt.co/palette/29346200818aec9b3bf7be16"
  },
  {
    color1: "0f0e0e",
    color2: "541212",
    color3: "8b9a46",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/0f0e0e5412128b9a46eeeeee"
  },
  {
    color1: "7189bf",
    color2: "df7599",
    color3: "ffc785",
    color4: "72d6c9",
    url: "https://colorhunt.co/palette/7189bfdf7599ffc78572d6c9"
  },
  {
    color1: "1b6ca8",
    color2: "0a97b0",
    color3: "ffd3e1",
    color4: "fce8d5",
    url: "https://colorhunt.co/palette/1b6ca80a97b0ffd3e1fce8d5"
  },
  {
    color1: "000000",
    color2: "aa14f0",
    color3: "bc8cf2",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/000000aa14f0bc8cf2eeeeee"
  },
  {
    color1: "866ec7",
    color2: "8f71ff",
    color3: "82acff",
    color4: "b7fbff",
    url: "https://colorhunt.co/palette/866ec78f71ff82acffb7fbff"
  },
  {
    color1: "54bab9",
    color2: "18978f",
    color3: "e9dac1",
    color4: "f7ecde",
    url: "https://colorhunt.co/palette/54bab918978fe9dac1f7ecde"
  },
  {
    color1: "b5f1cc",
    color2: "e5fdd1",
    color3: "c9f4aa",
    color4: "fcc2fc",
    url: "https://colorhunt.co/palette/b5f1cce5fdd1c9f4aafcc2fc"
  },
  {
    color1: "810000",
    color2: "e97171",
    color3: "ffcb8e",
    color4: "f5efef",
    url: "https://colorhunt.co/palette/810000e97171ffcb8ef5efef"
  },
  {
    color1: "ecf0f1",
    color2: "33cccc",
    color3: "2980b9",
    color4: "2c3e50",
    url: "https://colorhunt.co/palette/ecf0f133cccc2980b92c3e50"
  },
  {
    color1: "231e23",
    color2: "39a6a3",
    color3: "deeeea",
    color4: "bf1363",
    url: "https://colorhunt.co/palette/231e2339a6a3deeeeabf1363"
  },
  {
    color1: "f4f6ff",
    color2: "fbd46d",
    color3: "4f8a8b",
    color4: "07031a",
    url: "https://colorhunt.co/palette/f4f6fffbd46d4f8a8b07031a"
  },
  {
    color1: "2f5d62",
    color2: "364547",
    color3: "ffe268",
    color4: "ffb037",
    url: "https://colorhunt.co/palette/2f5d62364547ffe268ffb037"
  },
  {
    color1: "d54062",
    color2: "ffa36c",
    color3: "ebdc87",
    color4: "799351",
    url: "https://colorhunt.co/palette/d54062ffa36cebdc87799351"
  },
  {
    color1: "00fff6",
    color2: "00e7ff",
    color3: "009eff",
    color4: "0014ff",
    url: "https://colorhunt.co/palette/00fff600e7ff009eff0014ff"
  },
  {
    color1: "280b45",
    color2: "61105e",
    color3: "c84771",
    color4: "ffe98a",
    url: "https://colorhunt.co/palette/280b4561105ec84771ffe98a"
  },
  {
    color1: "fd9191",
    color2: "fddd8a",
    color3: "f5fc9e",
    color4: "9efcb4",
    url: "https://colorhunt.co/palette/fd9191fddd8af5fc9e9efcb4"
  },
  {
    color1: "616f39",
    color2: "ffd98e",
    color3: "ffb677",
    color4: "ff8364",
    url: "https://colorhunt.co/palette/616f39ffd98effb677ff8364"
  },
  {
    color1: "0b032d",
    color2: "843b62",
    color3: "f67e7d",
    color4: "ffb997",
    url: "https://colorhunt.co/palette/0b032d843b62f67e7dffb997"
  },
  {
    color1: "ffd31d",
    color2: "d63447",
    color3: "f57b51",
    color4: "f6eedf",
    url: "https://colorhunt.co/palette/ffd31dd63447f57b51f6eedf"
  },
  {
    color1: "fa86be",
    color2: "a275e3",
    color3: "9aebed",
    color4: "fffcab",
    url: "https://colorhunt.co/palette/fa86bea275e39aebedfffcab"
  },
  {
    color1: "1b5a7a",
    color2: "1aa59a",
    color3: "a6ed8e",
    color4: "f3ffb9",
    url: "https://colorhunt.co/palette/1b5a7a1aa59aa6ed8ef3ffb9"
  },
  {
    color1: "d5def5",
    color2: "8594e4",
    color3: "6643b5",
    color4: "430f58",
    url: "https://colorhunt.co/palette/d5def58594e46643b5430f58"
  },
  {
    color1: "312c51",
    color2: "48426d",
    color3: "f0c38e",
    color4: "f1aa9b",
    url: "https://colorhunt.co/palette/312c5148426df0c38ef1aa9b"
  },
  {
    color1: "561f55",
    color2: "8b2f97",
    color3: "cf56a1",
    color4: "fcb2bf",
    url: "https://colorhunt.co/palette/561f558b2f97cf56a1fcb2bf"
  },
  {
    color1: "ffc6ac",
    color2: "fff6dc",
    color3: "c4c1a4",
    color4: "9e9fa5",
    url: "https://colorhunt.co/palette/ffc6acfff6dcc4c1a49e9fa5"
  },
  {
    color1: "ffd7e8",
    color2: "f2c0ff",
    color3: "bf9fee",
    color4: "866ec7",
    url: "https://colorhunt.co/palette/ffd7e8f2c0ffbf9fee866ec7"
  },
  {
    color1: "66bfbf",
    color2: "eaf6f6",
    color3: "ffffff",
    color4: "ff0063",
    url: "https://colorhunt.co/palette/66bfbfeaf6f6ffffffff0063"
  },
  {
    color1: "ffe75e",
    color2: "feb72b",
    color3: "899857",
    color4: "527318",
    url: "https://colorhunt.co/palette/ffe75efeb72b899857527318"
  },
  {
    color1: "f65c78",
    color2: "ffd271",
    color3: "fff3af",
    color4: "c3f584",
    url: "https://colorhunt.co/palette/f65c78ffd271fff3afc3f584"
  },
  {
    color1: "fff8f3",
    color2: "a3e4db",
    color3: "1c6dd0",
    color4: "fed1ef",
    url: "https://colorhunt.co/palette/fff8f3a3e4db1c6dd0fed1ef"
  },
  {
    color1: "ffcb74",
    color2: "b1b493",
    color3: "4f8a8b",
    color4: "07031a",
    url: "https://colorhunt.co/palette/ffcb74b1b4934f8a8b07031a"
  },
  {
    color1: "ddf5f7",
    color2: "c0d9e5",
    color3: "44679f",
    color4: "3b577d",
    url: "https://colorhunt.co/palette/ddf5f7c0d9e544679f3b577d"
  },
  {
    color1: "ecfeff",
    color2: "00b7c2",
    color3: "128494",
    color4: "4ef037",
    url: "https://colorhunt.co/palette/ecfeff00b7c21284944ef037"
  },
  {
    color1: "ffea20",
    color2: "8dcbe6",
    color3: "9df1df",
    color4: "e3f6ff",
    url: "https://colorhunt.co/palette/ffea208dcbe69df1dfe3f6ff"
  },
  {
    color1: "222222",
    color2: "045757",
    color3: "044343",
    color4: "e4e4e4",
    url: "https://colorhunt.co/palette/222222045757044343e4e4e4"
  },
  {
    color1: "ff9595",
    color2: "342b38",
    color3: "80bdab",
    color4: "bbf1c8",
    url: "https://colorhunt.co/palette/ff9595342b3880bdabbbf1c8"
  },
  {
    color1: "1e3163",
    color2: "2d46b9",
    color3: "f037a5",
    color4: "f8f8f8",
    url: "https://colorhunt.co/palette/1e31632d46b9f037a5f8f8f8"
  },
  {
    color1: "537188",
    color2: "cbb279",
    color3: "e1d4bb",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/537188cbb279e1d4bbeeeeee"
  },
  {
    color1: "e40017",
    color2: "f4c983",
    color3: "5b6d5b",
    color4: "484018",
    url: "https://colorhunt.co/palette/e40017f4c9835b6d5b484018"
  },
  {
    color1: "f59aa3",
    color2: "f5e4c3",
    color3: "34a7b2",
    color4: "5b2e35",
    url: "https://colorhunt.co/palette/f59aa3f5e4c334a7b25b2e35"
  },
  {
    color1: "f5f5f5",
    color2: "e0dede",
    color3: "ffa5b0",
    color4: "6a197d",
    url: "https://colorhunt.co/palette/f5f5f5e0dedeffa5b06a197d"
  },
  {
    color1: "ff0075",
    color2: "172774",
    color3: "77d970",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/ff007517277477d970eeeeee"
  },
  {
    color1: "de7119",
    color2: "dee3e2",
    color3: "116979",
    color4: "18b0b0",
    url: "https://colorhunt.co/palette/de7119dee3e211697918b0b0"
  },
  {
    color1: "342ead",
    color2: "ea6227",
    color3: "f2a51a",
    color4: "b9ebcc",
    url: "https://colorhunt.co/palette/342eadea6227f2a51ab9ebcc"
  },
  {
    color1: "654062",
    color2: "ff9c71",
    color3: "fbd46d",
    color4: "e8ead3",
    url: "https://colorhunt.co/palette/654062ff9c71fbd46de8ead3"
  },
  {
    color1: "ff1700",
    color2: "ff8e00",
    color3: "ffe400",
    color4: "06ff00",
    url: "https://colorhunt.co/palette/ff1700ff8e00ffe40006ff00"
  },
  {
    color1: "446a46",
    color2: "82a284",
    color3: "e4aec5",
    color4: "ffc4dd",
    url: "https://colorhunt.co/palette/446a4682a284e4aec5ffc4dd"
  },
  {
    color1: "fad9e6",
    color2: "e4aec5",
    color3: "5f7464",
    color4: "243d25",
    url: "https://colorhunt.co/palette/fad9e6e4aec55f7464243d25"
  },
  {
    color1: "015051",
    color2: "04837b",
    color3: "01a7a3",
    color4: "04f2d5",
    url: "https://colorhunt.co/palette/01505104837b01a7a304f2d5"
  },
  {
    color1: "111d5e",
    color2: "b21f66",
    color3: "fe346e",
    color4: "ffbd69",
    url: "https://colorhunt.co/palette/111d5eb21f66fe346effbd69"
  },
  {
    color1: "ffd36e",
    color2: "fff56d",
    color3: "99ffcd",
    color4: "9fb4ff",
    url: "https://colorhunt.co/palette/ffd36efff56d99ffcd9fb4ff"
  },
  {
    color1: "557b83",
    color2: "39aea9",
    color3: "a2d5ab",
    color4: "e5efc1",
    url: "https://colorhunt.co/palette/557b8339aea9a2d5abe5efc1"
  },
  {
    color1: "005555",
    color2: "069a8e",
    color3: "a1e3d8",
    color4: "f7ff93",
    url: "https://colorhunt.co/palette/005555069a8ea1e3d8f7ff93"
  },
  {
    color1: "fafafa",
    color2: "e3e3e3",
    color3: "ee6f57",
    color4: "cb3737",
    url: "https://colorhunt.co/palette/fafafae3e3e3ee6f57cb3737"
  },
  {
    color1: "22577e",
    color2: "5584ac",
    color3: "95d1cc",
    color4: "faffaf",
    url: "https://colorhunt.co/palette/22577e5584ac95d1ccfaffaf"
  },
  {
    color1: "faf0e4",
    color2: "9bcdd2",
    color3: "ff8551",
    color4: "ffdede",
    url: "https://colorhunt.co/palette/faf0e49bcdd2ff8551ffdede"
  },
  {
    color1: "f99b7d",
    color2: "e76161",
    color3: "b04759",
    color4: "8bacaa",
    url: "https://colorhunt.co/palette/f99b7de76161b047598bacaa"
  },
  {
    color1: "64868e",
    color2: "98b4a6",
    color3: "d1e4d1",
    color4: "f3fbf1",
    url: "https://colorhunt.co/palette/64868e98b4a6d1e4d1f3fbf1"
  },
  {
    color1: "ff9900",
    color2: "ca431d",
    color3: "8b104e",
    color4: "520556",
    url: "https://colorhunt.co/palette/ff9900ca431d8b104e520556"
  },
  {
    color1: "231955",
    color2: "1f4690",
    color3: "e8aa42",
    color4: "ffe5b4",
    url: "https://colorhunt.co/palette/2319551f4690e8aa42ffe5b4"
  },
  {
    color1: "fcfcfc",
    color2: "83ffe6",
    color3: "ff5f5f",
    color4: "2c2c2c",
    url: "https://colorhunt.co/palette/fcfcfc83ffe6ff5f5f2c2c2c"
  },
  {
    color1: "f09ae9",
    color2: "ffc1fa",
    color3: "ffe78f",
    color4: "ffd36b",
    url: "https://colorhunt.co/palette/f09ae9ffc1faffe78fffd36b"
  },
  {
    color1: "cdc733",
    color2: "966c3b",
    color3: "d0af84",
    color4: "ffe6ca",
    url: "https://colorhunt.co/palette/cdc733966c3bd0af84ffe6ca"
  },
  {
    color1: "54123b",
    color2: "84142d",
    color3: "c02739",
    color4: "29c7ac",
    url: "https://colorhunt.co/palette/54123b84142dc0273929c7ac"
  },
  {
    color1: "7a9eaf",
    color2: "655989",
    color3: "de88a5",
    color4: "ffcebb",
    url: "https://colorhunt.co/palette/7a9eaf655989de88a5ffcebb"
  },
  {
    color1: "b2e4d5",
    color2: "f2a6a6",
    color3: "b18ea6",
    color4: "e7f3ee",
    url: "https://colorhunt.co/palette/b2e4d5f2a6a6b18ea6e7f3ee"
  },
  {
    color1: "83ffe1",
    color2: "7045ff",
    color3: "c768ff",
    color4: "ffaded",
    url: "https://colorhunt.co/palette/83ffe17045ffc768ffffaded"
  },
  {
    color1: "eae509",
    color2: "7dce13",
    color3: "5bb318",
    color4: "2b7a0b",
    url: "https://colorhunt.co/palette/eae5097dce135bb3182b7a0b"
  },
  {
    color1: "97dbae",
    color2: "c3e5ae",
    color3: "f1e1a6",
    color4: "f4bbbb",
    url: "https://colorhunt.co/palette/97dbaec3e5aef1e1a6f4bbbb"
  },
  {
    color1: "f0eec9",
    color2: "9ee6cf",
    color3: "50c9ba",
    color4: "4ba2ac",
    url: "https://colorhunt.co/palette/f0eec99ee6cf50c9ba4ba2ac"
  },
  {
    color1: "062743",
    color2: "113a5d",
    color3: "ff7a8a",
    color4: "f9f9f9",
    url: "https://colorhunt.co/palette/062743113a5dff7a8af9f9f9"
  },
  {
    color1: "fee9d7",
    color2: "f9bf8f",
    color3: "e2434b",
    color4: "34222e",
    url: "https://colorhunt.co/palette/fee9d7f9bf8fe2434b34222e"
  },
  {
    color1: "9ffbfb",
    color2: "a100ff",
    color3: "db97ff",
    color4: "ffb6ff",
    url: "https://colorhunt.co/palette/9ffbfba100ffdb97ffffb6ff"
  },
  {
    color1: "e9e2d0",
    color2: "ea9085",
    color3: "6e5773",
    color4: "4f323b",
    url: "https://colorhunt.co/palette/e9e2d0ea90856e57734f323b"
  },
  {
    color1: "7de5ed",
    color2: "81c6e8",
    color3: "5da7db",
    color4: "5837d0",
    url: "https://colorhunt.co/palette/7de5ed81c6e85da7db5837d0"
  },
  {
    color1: "fffde8",
    color2: "f7e0a3",
    color3: "f09c67",
    color4: "4c8492",
    url: "https://colorhunt.co/palette/fffde8f7e0a3f09c674c8492"
  },
  {
    color1: "fff1e9",
    color2: "ffd5d5",
    color3: "fc7fb2",
    color4: "45454d",
    url: "https://colorhunt.co/palette/fff1e9ffd5d5fc7fb245454d"
  },
  {
    color1: "51eaea",
    color2: "fffde1",
    color3: "ff9d76",
    color4: "fb3569",
    url: "https://colorhunt.co/palette/51eaeafffde1ff9d76fb3569"
  },
  {
    color1: "31e1f7",
    color2: "400d51",
    color3: "d800a6",
    color4: "ff7777",
    url: "https://colorhunt.co/palette/31e1f7400d51d800a6ff7777"
  },
  {
    color1: "1d5b79",
    color2: "468b97",
    color3: "ef6262",
    color4: "f3aa60",
    url: "https://colorhunt.co/palette/1d5b79468b97ef6262f3aa60"
  },
  {
    color1: "b5d5c5",
    color2: "b08bbb",
    color3: "eca869",
    color4: "f5f5dc",
    url: "https://colorhunt.co/palette/b5d5c5b08bbbeca869f5f5dc"
  },
  {
    color1: "0e185f",
    color2: "2fa4ff",
    color3: "00ffdd",
    color4: "e8ffc2",
    url: "https://colorhunt.co/palette/0e185f2fa4ff00ffdde8ffc2"
  },
  {
    color1: "233142",
    color2: "4f9da6",
    color3: "facf5a",
    color4: "ff5959",
    url: "https://colorhunt.co/palette/2331424f9da6facf5aff5959"
  },
  {
    color1: "6e5773",
    color2: "d45079",
    color3: "ea9085",
    color4: "e9e1cc",
    url: "https://colorhunt.co/palette/6e5773d45079ea9085e9e1cc"
  },
  {
    color1: "fdef96",
    color2: "f7b71d",
    color3: "afa939",
    color4: "2b580c",
    url: "https://colorhunt.co/palette/fdef96f7b71dafa9392b580c"
  },
  {
    color1: "ffbcbc",
    color2: "363636",
    color3: "4cd3c2",
    color4: "b7efcd",
    url: "https://colorhunt.co/palette/ffbcbc3636364cd3c2b7efcd"
  },
  {
    color1: "363636",
    color2: "99d8d0",
    color3: "b7efcd",
    color4: "ffbcbc",
    url: "https://colorhunt.co/palette/36363699d8d0b7efcdffbcbc"
  },
  {
    color1: "2fc5cc",
    color2: "6df1cc",
    color3: "e3ffc3",
    color4: "ff89c0",
    url: "https://colorhunt.co/palette/2fc5cc6df1cce3ffc3ff89c0"
  },
  {
    color1: "f9f6f2",
    color2: "f1d6ab",
    color3: "a0855b",
    color4: "38470b",
    url: "https://colorhunt.co/palette/f9f6f2f1d6aba0855b38470b"
  },
  {
    color1: "0079ff",
    color2: "00dfa2",
    color3: "f6fa70",
    color4: "ff0060",
    url: "https://colorhunt.co/palette/0079ff00dfa2f6fa70ff0060"
  },
  {
    color1: "f9fd50",
    color2: "85ef47",
    color3: "00bd56",
    color4: "207dff",
    url: "https://colorhunt.co/palette/f9fd5085ef4700bd56207dff"
  },
  {
    color1: "222831",
    color2: "2d4059",
    color3: "ff5722",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/2228312d4059ff5722eeeeee"
  },
  {
    color1: "d2f6fc",
    color2: "a9d2ff",
    color3: "7984ee",
    color4: "6730ec",
    url: "https://colorhunt.co/palette/d2f6fca9d2ff7984ee6730ec"
  },
  {
    color1: "feece9",
    color2: "ccd1e4",
    color3: "fe7e6d",
    color4: "2f3a8f",
    url: "https://colorhunt.co/palette/feece9ccd1e4fe7e6d2f3a8f"
  },
  {
    color1: "d3f4ff",
    color2: "b2dffb",
    color3: "e7a4e4",
    color4: "ffc55c",
    url: "https://colorhunt.co/palette/d3f4ffb2dffbe7a4e4ffc55c"
  },
  {
    color1: "9a208c",
    color2: "e11299",
    color3: "ffeaea",
    color4: "f5c6ec",
    url: "https://colorhunt.co/palette/9a208ce11299ffeaeaf5c6ec"
  },
  {
    color1: "344d67",
    color2: "6eccaf",
    color3: "ade792",
    color4: "f3ecb0",
    url: "https://colorhunt.co/palette/344d676eccafade792f3ecb0"
  },
  {
    color1: "fffbbe",
    color2: "eec1ea",
    color3: "be97dc",
    color4: "a374d5",
    url: "https://colorhunt.co/palette/fffbbeeec1eabe97dca374d5"
  },
  {
    color1: "2d3561",
    color2: "c05c7e",
    color3: "f3826f",
    color4: "ffb961",
    url: "https://colorhunt.co/palette/2d3561c05c7ef3826fffb961"
  },
  {
    color1: "241e92",
    color2: "5432d3",
    color3: "7b6cf6",
    color4: "e5a5ff",
    url: "https://colorhunt.co/palette/241e925432d37b6cf6e5a5ff"
  },
  {
    color1: "192965",
    color2: "f0efef",
    color3: "bbcfff",
    color4: "faafff",
    url: "https://colorhunt.co/palette/192965f0efefbbcffffaafff"
  },
  {
    color1: "eb89b5",
    color2: "ffd7e9",
    color3: "fffbf3",
    color4: "fff8d2",
    url: "https://colorhunt.co/palette/eb89b5ffd7e9fffbf3fff8d2"
  },
  {
    color1: "c7f0db",
    color2: "8bbabb",
    color3: "6c7b95",
    color4: "464159",
    url: "https://colorhunt.co/palette/c7f0db8bbabb6c7b95464159"
  },
  {
    color1: "ecf4f3",
    color2: "d1eecc",
    color3: "76dbd1",
    color4: "57a99a",
    url: "https://colorhunt.co/palette/ecf4f3d1eecc76dbd157a99a"
  },
  {
    color1: "e7f5f2",
    color2: "f9c7cf",
    color3: "12776f",
    color4: "0f4137",
    url: "https://colorhunt.co/palette/e7f5f2f9c7cf12776f0f4137"
  },
  {
    color1: "6b76ff",
    color2: "a5aeff",
    color3: "c8e4fe",
    color4: "feffe0",
    url: "https://colorhunt.co/palette/6b76ffa5aeffc8e4fefeffe0"
  },
  {
    color1: "09015f",
    color2: "af0069",
    color3: "55b3b1",
    color4: "f6c065",
    url: "https://colorhunt.co/palette/09015faf006955b3b1f6c065"
  },
  {
    color1: "f2d8d8",
    color2: "5c8984",
    color3: "545b77",
    color4: "374259",
    url: "https://colorhunt.co/palette/f2d8d85c8984545b77374259"
  },
  {
    color1: "232855",
    color2: "215b63",
    color3: "5fcc9c",
    color4: "aaffc7",
    url: "https://colorhunt.co/palette/232855215b635fcc9caaffc7"
  },
  {
    color1: "10316b",
    color2: "000000",
    color3: "e25822",
    color4: "ececeb",
    url: "https://colorhunt.co/palette/10316b000000e25822ececeb"
  },
  {
    color1: "ff6107",
    color2: "e9290f",
    color3: "c40018",
    color4: "292725",
    url: "https://colorhunt.co/palette/ff6107e9290fc40018292725"
  },
  {
    color1: "f8bd7f",
    color2: "00416d",
    color3: "f5f1da",
    color4: "e3dfc8",
    url: "https://colorhunt.co/palette/f8bd7f00416df5f1dae3dfc8"
  },
  {
    color1: "ffce45",
    color2: "d4ac2b",
    color3: "b05e27",
    color4: "7e370c",
    url: "https://colorhunt.co/palette/ffce45d4ac2bb05e277e370c"
  },
  {
    color1: "fff7d4",
    color2: "ffd95a",
    color3: "c07f00",
    color4: "4c3d3d",
    url: "https://colorhunt.co/palette/fff7d4ffd95ac07f004c3d3d"
  },
  {
    color1: "8bbccc",
    color2: "4c6793",
    color3: "5c2e7e",
    color4: "000000",
    url: "https://colorhunt.co/palette/8bbccc4c67935c2e7e000000"
  },
  {
    color1: "ff7396",
    color2: "f4e06d",
    color3: "ffffde",
    color4: "c499ba",
    url: "https://colorhunt.co/palette/ff7396f4e06dffffdec499ba"
  },
  {
    color1: "ebfffb",
    color2: "7efaff",
    color3: "13abc4",
    color4: "3161a3",
    url: "https://colorhunt.co/palette/ebfffb7efaff13abc43161a3"
  },
  {
    color1: "0f2c67",
    color2: "cd1818",
    color3: "f3950d",
    color4: "f4e185",
    url: "https://colorhunt.co/palette/0f2c67cd1818f3950df4e185"
  },
  {
    color1: "002366",
    color2: "0f52ba",
    color3: "fa8072",
    color4: "ffdab9",
    url: "https://colorhunt.co/palette/0023660f52bafa8072ffdab9"
  },
  {
    color1: "ff6d24",
    color2: "4e413b",
    color3: "857671",
    color4: "e2ded3",
    url: "https://colorhunt.co/palette/ff6d244e413b857671e2ded3"
  },
  {
    color1: "f6f5f5",
    color2: "e9e4e6",
    color3: "3bb4c1",
    color4: "048998",
    url: "https://colorhunt.co/palette/f6f5f5e9e4e63bb4c1048998"
  },
  {
    color1: "f4efd3",
    color2: "cccccc",
    color3: "c2b0c9",
    color4: "9656a1",
    url: "https://colorhunt.co/palette/f4efd3ccccccc2b0c99656a1"
  },
  {
    color1: "e4f5e5",
    color2: "a6dfde",
    color3: "88a6e5",
    color4: "8d6ec8",
    url: "https://colorhunt.co/palette/e4f5e5a6dfde88a6e58d6ec8"
  },
  {
    color1: "0c084c",
    color2: "096386",
    color3: "00b7a8",
    color4: "f0eec8",
    url: "https://colorhunt.co/palette/0c084c09638600b7a8f0eec8"
  },
  {
    color1: "000272",
    color2: "341677",
    color3: "a32f80",
    color4: "ff6363",
    url: "https://colorhunt.co/palette/000272341677a32f80ff6363"
  },
  {
    color1: "e1f5f2",
    color2: "6bc5d2",
    color3: "5a5d9d",
    color4: "390050",
    url: "https://colorhunt.co/palette/e1f5f26bc5d25a5d9d390050"
  },
  {
    color1: "293462",
    color2: "216583",
    color3: "f76262",
    color4: "fff1c1",
    url: "https://colorhunt.co/palette/293462216583f76262fff1c1"
  },
  {
    color1: "fad3cf",
    color2: "a696c8",
    color3: "2470a0",
    color4: "060608",
    url: "https://colorhunt.co/palette/fad3cfa696c82470a0060608"
  },
  {
    color1: "113f67",
    color2: "34699a",
    color3: "408ab4",
    color4: "65c6c4",
    url: "https://colorhunt.co/palette/113f6734699a408ab465c6c4"
  },
  {
    color1: "323232",
    color2: "fa4eab",
    color3: "fe83c6",
    color4: "fff2f9",
    url: "https://colorhunt.co/palette/323232fa4eabfe83c6fff2f9"
  },
  {
    color1: "303841",
    color2: "3a4750",
    color3: "ea9215",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/3038413a4750ea9215eeeeee"
  },
  {
    color1: "fde8cd",
    color2: "433520",
    color3: "00917c",
    color4: "dfe0df",
    url: "https://colorhunt.co/palette/fde8cd43352000917cdfe0df"
  },
  {
    color1: "f8f1f1",
    color2: "a3d2ca",
    color3: "5eaaa8",
    color4: "db6400",
    url: "https://colorhunt.co/palette/f8f1f1a3d2ca5eaaa8db6400"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "b55400",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/222831393e46b55400eeeeee"
  },
  {
    color1: "f1fcfc",
    color2: "40e0d0",
    color3: "72b5b7",
    color4: "633a82",
    url: "https://colorhunt.co/palette/f1fcfc40e0d072b5b7633a82"
  },
  {
    color1: "303960",
    color2: "ea9a96",
    color3: "f8b24f",
    color4: "e5e5e5",
    url: "https://colorhunt.co/palette/303960ea9a96f8b24fe5e5e5"
  },
  {
    color1: "fbf4e9",
    color2: "b1e693",
    color3: "6ecb63",
    color4: "ec9cd3",
    url: "https://colorhunt.co/palette/fbf4e9b1e6936ecb63ec9cd3"
  },
  {
    color1: "3330e4",
    color2: "f637ec",
    color3: "fbb454",
    color4: "faea48",
    url: "https://colorhunt.co/palette/3330e4f637ecfbb454faea48"
  },
  {
    color1: "a9eca2",
    color2: "f5ffcb",
    color3: "ffe3b0",
    color4: "f5c8bd",
    url: "https://colorhunt.co/palette/a9eca2f5ffcbffe3b0f5c8bd"
  },
  {
    color1: "edd2f3",
    color2: "fffcdc",
    color3: "84dfff",
    color4: "516beb",
    url: "https://colorhunt.co/palette/edd2f3fffcdc84dfff516beb"
  },
  {
    color1: "eb4559",
    color2: "f78259",
    color3: "aeefec",
    color4: "f8eeee",
    url: "https://colorhunt.co/palette/eb4559f78259aeefecf8eeee"
  },
  {
    color1: "3b064d",
    color2: "8105d8",
    color3: "ed0cef",
    color4: "fe59d7",
    url: "https://colorhunt.co/palette/3b064d8105d8ed0ceffe59d7"
  },
  {
    color1: "feff89",
    color2: "ff9f68",
    color3: "f85959",
    color4: "ac005d",
    url: "https://colorhunt.co/palette/feff89ff9f68f85959ac005d"
  },
  {
    color1: "a1c45a",
    color2: "fff9e0",
    color3: "f1c550",
    color4: "ea4c4c",
    url: "https://colorhunt.co/palette/a1c45afff9e0f1c550ea4c4c"
  },
  {
    color1: "f5b17b",
    color2: "4e709d",
    color3: "89a4c7",
    color4: "cdd5e0",
    url: "https://colorhunt.co/palette/f5b17b4e709d89a4c7cdd5e0"
  },
  {
    color1: "f9d5bb",
    color2: "f66767",
    color3: "d35656",
    color4: "3c3d47",
    url: "https://colorhunt.co/palette/f9d5bbf66767d356563c3d47"
  },
  {
    color1: "e0fcff",
    color2: "bde4f4",
    color3: "404969",
    color4: "ff7f50",
    url: "https://colorhunt.co/palette/e0fcffbde4f4404969ff7f50"
  },
  {
    color1: "b9f9ff",
    color2: "dafdff",
    color3: "f7e590",
    color4: "f5cd6d",
    url: "https://colorhunt.co/palette/b9f9ffdafdfff7e590f5cd6d"
  },
  {
    color1: "eab0d9",
    color2: "f1c6de",
    color3: "f7e8f0",
    color4: "feb377",
    url: "https://colorhunt.co/palette/eab0d9f1c6def7e8f0feb377"
  },
  {
    color1: "2c003e",
    color2: "512b58",
    color3: "fe346e",
    color4: "d2fafb",
    url: "https://colorhunt.co/palette/2c003e512b58fe346ed2fafb"
  },
  {
    color1: "57385c",
    color2: "a75265",
    color3: "ec7263",
    color4: "febe7e",
    url: "https://colorhunt.co/palette/57385ca75265ec7263febe7e"
  },
  {
    color1: "e5df88",
    color2: "e8e8e8",
    color3: "a37eba",
    color4: "4c4c4c",
    url: "https://colorhunt.co/palette/e5df88e8e8e8a37eba4c4c4c"
  },
  {
    color1: "f1ffd9",
    color2: "8bdbf5",
    color3: "b292ea",
    color4: "eb55bf",
    url: "https://colorhunt.co/palette/f1ffd98bdbf5b292eaeb55bf"
  },
  {
    color1: "090088",
    color2: "930077",
    color3: "e4007c",
    color4: "ffbd39",
    url: "https://colorhunt.co/palette/090088930077e4007cffbd39"
  },
  {
    color1: "867ae9",
    color2: "fff5ab",
    color3: "ffcead",
    color4: "c449c2",
    url: "https://colorhunt.co/palette/867ae9fff5abffceadc449c2"
  },
  {
    color1: "9a1f40",
    color2: "d9455f",
    color3: "74d4c0",
    color4: "def4f0",
    url: "https://colorhunt.co/palette/9a1f40d9455f74d4c0def4f0"
  },
  {
    color1: "019267",
    color2: "00c897",
    color3: "ffd365",
    color4: "fdffa9",
    url: "https://colorhunt.co/palette/01926700c897ffd365fdffa9"
  },
  {
    color1: "003545",
    color2: "00454a",
    color3: "3c6562",
    color4: "ed6363",
    url: "https://colorhunt.co/palette/00354500454a3c6562ed6363"
  },
  {
    color1: "0e1555",
    color2: "4e1184",
    color3: "932b77",
    color4: "fd367e",
    url: "https://colorhunt.co/palette/0e15554e1184932b77fd367e"
  },
  {
    color1: "e3dfc8",
    color2: "f5f1da",
    color3: "96bb7c",
    color4: "eebb4d",
    url: "https://colorhunt.co/palette/e3dfc8f5f1da96bb7ceebb4d"
  },
  {
    color1: "0278ae",
    color2: "51dacf",
    color3: "9ef5cf",
    color4: "e8ffc1",
    url: "https://colorhunt.co/palette/0278ae51dacf9ef5cfe8ffc1"
  },
  {
    color1: "ff006c",
    color2: "d62b70",
    color3: "973961",
    color4: "623448",
    url: "https://colorhunt.co/palette/ff006cd62b70973961623448"
  },
  {
    color1: "faffb8",
    color2: "c5f0a4",
    color3: "35b0ab",
    color4: "226b80",
    url: "https://colorhunt.co/palette/faffb8c5f0a435b0ab226b80"
  },
  {
    color1: "f05a28",
    color2: "f7931e",
    color3: "fff0bc",
    color4: "fefcdb",
    url: "https://colorhunt.co/palette/f05a28f7931efff0bcfefcdb"
  },
  {
    color1: "ff5335",
    color2: "dfe0d4",
    color3: "3e92a3",
    color4: "353940",
    url: "https://colorhunt.co/palette/ff5335dfe0d43e92a3353940"
  },
  {
    color1: "11144c",
    color2: "3a9679",
    color3: "fabc60",
    color4: "e16262",
    url: "https://colorhunt.co/palette/11144c3a9679fabc60e16262"
  },
  {
    color1: "9bb899",
    color2: "fcceaa",
    color3: "f5827d",
    color4: "ea4961",
    url: "https://colorhunt.co/palette/9bb899fcceaaf5827dea4961"
  },
  {
    color1: "dfddc7",
    color2: "f58b54",
    color3: "a34a28",
    color4: "211717",
    url: "https://colorhunt.co/palette/dfddc7f58b54a34a28211717"
  },
  {
    color1: "588da8",
    color2: "ccafaf",
    color3: "e58a8a",
    color4: "d8345f",
    url: "https://colorhunt.co/palette/588da8ccafafe58a8ad8345f"
  },
  {
    color1: "f0f0f0",
    color2: "43dde6",
    color3: "364f6b",
    color4: "fc5185",
    url: "https://colorhunt.co/palette/f0f0f043dde6364f6bfc5185"
  },
  {
    color1: "ecfffb",
    color2: "b4f1f1",
    color3: "2d767f",
    color4: "1e6262",
    url: "https://colorhunt.co/palette/ecfffbb4f1f12d767f1e6262"
  },
  {
    color1: "fff4c9",
    color2: "c7e78b",
    color3: "81ae64",
    color4: "709053",
    url: "https://colorhunt.co/palette/fff4c9c7e78b81ae64709053"
  },
  {
    color1: "ff5959",
    color2: "676fa3",
    color3: "cddeff",
    color4: "eef2ff",
    url: "https://colorhunt.co/palette/ff5959676fa3cddeffeef2ff"
  },
  {
    color1: "ededed",
    color2: "ffa41b",
    color3: "ff5151",
    color4: "9818d6",
    url: "https://colorhunt.co/palette/edededffa41bff51519818d6"
  },
  {
    color1: "2fc4b2",
    color2: "12947f",
    color3: "e71414",
    color4: "f17808",
    url: "https://colorhunt.co/palette/2fc4b212947fe71414f17808"
  },
  {
    color1: "16a596",
    color2: "898b8a",
    color3: "fae0df",
    color4: "f6f5f1",
    url: "https://colorhunt.co/palette/16a596898b8afae0dff6f5f1"
  },
  {
    color1: "fffbcc",
    color2: "fd2e2e",
    color3: "cf1b1b",
    color4: "900d0d",
    url: "https://colorhunt.co/palette/fffbccfd2e2ecf1b1b900d0d"
  },
  {
    color1: "0278ae",
    color2: "51adcf",
    color3: "a5ecd7",
    color4: "e8ffc1",
    url: "https://colorhunt.co/palette/0278ae51adcfa5ecd7e8ffc1"
  },
  {
    color1: "f7f7f7",
    color2: "ffbc97",
    color3: "ff7800",
    color4: "ffe300",
    url: "https://colorhunt.co/palette/f7f7f7ffbc97ff7800ffe300"
  },
  {
    color1: "f54291",
    color2: "ff78ae",
    color3: "ffa0d2",
    color4: "fff8cd",
    url: "https://colorhunt.co/palette/f54291ff78aeffa0d2fff8cd"
  },
  {
    color1: "ef6c57",
    color2: "7ed3b2",
    color3: "b9e6d3",
    color4: "f2f2f2",
    url: "https://colorhunt.co/palette/ef6c577ed3b2b9e6d3f2f2f2"
  },
  {
    color1: "062743",
    color2: "113a5d",
    color3: "c4ffdd",
    color4: "f9f9f9",
    url: "https://colorhunt.co/palette/062743113a5dc4ffddf9f9f9"
  },
  {
    color1: "000957",
    color2: "344cb7",
    color3: "577bc1",
    color4: "ebe645",
    url: "https://colorhunt.co/palette/000957344cb7577bc1ebe645"
  },
  {
    color1: "2e2b2b",
    color2: "388186",
    color3: "a5e9e1",
    color4: "fdf6f6",
    url: "https://colorhunt.co/palette/2e2b2b388186a5e9e1fdf6f6"
  },
  {
    color1: "ff55bb",
    color2: "ffd3a3",
    color3: "fcffb2",
    color4: "b6eafa",
    url: "https://colorhunt.co/palette/ff55bbffd3a3fcffb2b6eafa"
  },
  {
    color1: "1f441e",
    color2: "cee6b4",
    color3: "9ecca4",
    color4: "9b3675",
    url: "https://colorhunt.co/palette/1f441ecee6b49ecca49b3675"
  },
  {
    color1: "6e2142",
    color2: "943855",
    color3: "e16363",
    color4: "ffd692",
    url: "https://colorhunt.co/palette/6e2142943855e16363ffd692"
  },
  {
    color1: "fffcef",
    color2: "d2ebcd",
    color3: "ff7f5b",
    color4: "393939",
    url: "https://colorhunt.co/palette/fffcefd2ebcdff7f5b393939"
  },
  {
    color1: "f2cd5c",
    color2: "f2921d",
    color3: "a61f69",
    color4: "400e32",
    url: "https://colorhunt.co/palette/f2cd5cf2921da61f69400e32"
  },
  {
    color1: "ffffe3",
    color2: "87e0ff",
    color3: "53c7f0",
    color4: "1d97c1",
    url: "https://colorhunt.co/palette/ffffe387e0ff53c7f01d97c1"
  },
  {
    color1: "f2f7ff",
    color2: "0b409c",
    color3: "10316b",
    color4: "ffe867",
    url: "https://colorhunt.co/palette/f2f7ff0b409c10316bffe867"
  },
  {
    color1: "39311d",
    color2: "7e7474",
    color3: "c4b6b6",
    color4: "ffdd93",
    url: "https://colorhunt.co/palette/39311d7e7474c4b6b6ffdd93"
  },
  {
    color1: "f2d974",
    color2: "c7956d",
    color3: "965d62",
    color4: "534e52",
    url: "https://colorhunt.co/palette/f2d974c7956d965d62534e52"
  },
  {
    color1: "dddddd",
    color2: "574e6d",
    color3: "43405d",
    color4: "4b586e",
    url: "https://colorhunt.co/palette/dddddd574e6d43405d4b586e"
  },
  {
    color1: "e4a5ff",
    color2: "ffaac9",
    color3: "ffcda8",
    color4: "ffe7ce",
    url: "https://colorhunt.co/palette/e4a5ffffaac9ffcda8ffe7ce"
  },
  {
    color1: "e2eff1",
    color2: "65799b",
    color3: "555273",
    color4: "e23e57",
    url: "https://colorhunt.co/palette/e2eff165799b555273e23e57"
  },
  {
    color1: "fff0f8",
    color2: "ffc2e9",
    color3: "cca2e1",
    color4: "543e5c",
    url: "https://colorhunt.co/palette/fff0f8ffc2e9cca2e1543e5c"
  },
  {
    color1: "480032",
    color2: "df0054",
    color3: "ff8b6a",
    color4: "ffd2bb",
    url: "https://colorhunt.co/palette/480032df0054ff8b6affd2bb"
  },
  {
    color1: "f2d1a8",
    color2: "ebebeb",
    color3: "669b7c",
    color4: "557669",
    url: "https://colorhunt.co/palette/f2d1a8ebebeb669b7c557669"
  },
  {
    color1: "6c5070",
    color2: "df6a6a",
    color3: "f6f6e3",
    color4: "c2dbc1",
    url: "https://colorhunt.co/palette/6c5070df6a6af6f6e3c2dbc1"
  },
  {
    color1: "5eb7b7",
    color2: "96d1c7",
    color3: "fc7978",
    color4: "ffafb0",
    url: "https://colorhunt.co/palette/5eb7b796d1c7fc7978ffafb0"
  },
  {
    color1: "118df0",
    color2: "0e2f56",
    color3: "ff304f",
    color4: "ececda",
    url: "https://colorhunt.co/palette/118df00e2f56ff304fececda"
  },
  {
    color1: "22559c",
    color2: "f27370",
    color3: "fa9856",
    color4: "ede862",
    url: "https://colorhunt.co/palette/22559cf27370fa9856ede862"
  },
  {
    color1: "f4f5db",
    color2: "d9dab0",
    color3: "487e95",
    color4: "23689b",
    url: "https://colorhunt.co/palette/f4f5dbd9dab0487e9523689b"
  },
  {
    color1: "00235b",
    color2: "e21818",
    color3: "ffdd83",
    color4: "98dfd6",
    url: "https://colorhunt.co/palette/00235be21818ffdd8398dfd6"
  },
  {
    color1: "fafbd4",
    color2: "b2ebf9",
    color3: "aea1ea",
    color4: "8c54a1",
    url: "https://colorhunt.co/palette/fafbd4b2ebf9aea1ea8c54a1"
  },
  {
    color1: "51eaea",
    color2: "ffdbc5",
    color3: "ff9d76",
    color4: "ef4339",
    url: "https://colorhunt.co/palette/51eaeaffdbc5ff9d76ef4339"
  },
  {
    color1: "7ecfc0",
    color2: "f2e3c9",
    color3: "ec8f6a",
    color4: "ef4b4b",
    url: "https://colorhunt.co/palette/7ecfc0f2e3c9ec8f6aef4b4b"
  },
  {
    color1: "ff1e00",
    color2: "e8f9fd",
    color3: "59ce8f",
    color4: "000000",
    url: "https://colorhunt.co/palette/ff1e00e8f9fd59ce8f000000"
  },
  {
    color1: "f7f7f7",
    color2: "f5b553",
    color3: "854836",
    color4: "000000",
    url: "https://colorhunt.co/palette/f7f7f7f5b553854836000000"
  },
  {
    color1: "247881",
    color2: "43919b",
    color3: "30aadd",
    color4: "00ffc6",
    url: "https://colorhunt.co/palette/24788143919b30aadd00ffc6"
  },
  {
    color1: "b3ffae",
    color2: "f8ffdb",
    color3: "ff6464",
    color4: "ff7d7d",
    url: "https://colorhunt.co/palette/b3ffaef8ffdbff6464ff7d7d"
  },
  {
    color1: "283149",
    color2: "404b69",
    color3: "da0463",
    color4: "dbedf3",
    url: "https://colorhunt.co/palette/283149404b69da0463dbedf3"
  },
  {
    color1: "251d3a",
    color2: "2a2550",
    color3: "e04d01",
    color4: "ff7700",
    url: "https://colorhunt.co/palette/251d3a2a2550e04d01ff7700"
  },
  {
    color1: "05004e",
    color2: "ff0000",
    color3: "fb7777",
    color4: "ffcccc",
    url: "https://colorhunt.co/palette/05004eff0000fb7777ffcccc"
  },
  {
    color1: "364f6b",
    color2: "3fc1c9",
    color3: "fce38a",
    color4: "fc5185",
    url: "https://colorhunt.co/palette/364f6b3fc1c9fce38afc5185"
  },
  {
    color1: "7d1e6a",
    color2: "eeb0b0",
    color3: "ffe59d",
    color4: "bde6f1",
    url: "https://colorhunt.co/palette/7d1e6aeeb0b0ffe59dbde6f1"
  },
  {
    color1: "dd0a35",
    color2: "e4d1d3",
    color3: "1687a7",
    color4: "014955",
    url: "https://colorhunt.co/palette/dd0a35e4d1d31687a7014955"
  },
  {
    color1: "d2fafb",
    color2: "51dacf",
    color3: "41aaa8",
    color4: "2c003e",
    url: "https://colorhunt.co/palette/d2fafb51dacf41aaa82c003e"
  },
  {
    color1: "444444",
    color2: "f30067",
    color3: "00d1cd",
    color4: "eaeaea",
    url: "https://colorhunt.co/palette/444444f3006700d1cdeaeaea"
  },
  {
    color1: "fefbf6",
    color2: "a6d1e6",
    color3: "7f5283",
    color4: "3d3c42",
    url: "https://colorhunt.co/palette/fefbf6a6d1e67f52833d3c42"
  },
  {
    color1: "4ac6b7",
    color2: "4f5e7f",
    color3: "965f8a",
    color4: "ff7070",
    url: "https://colorhunt.co/palette/4ac6b74f5e7f965f8aff7070"
  },
  {
    color1: "392f2f",
    color2: "3a7563",
    color3: "59a985",
    color4: "e6d3a7",
    url: "https://colorhunt.co/palette/392f2f3a756359a985e6d3a7"
  },
  {
    color1: "303481",
    color2: "d6e6f2",
    color3: "f5f5f5",
    color4: "fff200",
    url: "https://colorhunt.co/palette/303481d6e6f2f5f5f5fff200"
  },
  {
    color1: "211717",
    color2: "a34a28",
    color3: "f58b54",
    color4: "dfddc7",
    url: "https://colorhunt.co/palette/211717a34a28f58b54dfddc7"
  },
  {
    color1: "303242",
    color2: "394359",
    color3: "f2be8d",
    color4: "ba6c65",
    url: "https://colorhunt.co/palette/303242394359f2be8dba6c65"
  },
  {
    color1: "3e1e68",
    color2: "583c87",
    color3: "e45a84",
    color4: "ffacac",
    url: "https://colorhunt.co/palette/3e1e68583c87e45a84ffacac"
  },
  {
    color1: "b70404",
    color2: "db005b",
    color3: "f79327",
    color4: "ffe569",
    url: "https://colorhunt.co/palette/b70404db005bf79327ffe569"
  },
  {
    color1: "f3cba5",
    color2: "975a5e",
    color3: "453953",
    color4: "25161b",
    url: "https://colorhunt.co/palette/f3cba5975a5e45395325161b"
  },
  {
    color1: "ffb997",
    color2: "f67e7d",
    color3: "843b62",
    color4: "0b032d",
    url: "https://colorhunt.co/palette/ffb997f67e7d843b620b032d"
  },
  {
    color1: "5463ff",
    color2: "ececec",
    color3: "ffc300",
    color4: "ff1818",
    url: "https://colorhunt.co/palette/5463ffecececffc300ff1818"
  },
  {
    color1: "f9f5f0",
    color2: "f2ead3",
    color3: "f4991a",
    color4: "321313",
    url: "https://colorhunt.co/palette/f9f5f0f2ead3f4991a321313"
  },
  {
    color1: "e6f8f6",
    color2: "a0f6d2",
    color3: "72dfd0",
    color4: "03414d",
    url: "https://colorhunt.co/palette/e6f8f6a0f6d272dfd003414d"
  },
  {
    color1: "abedd8",
    color2: "46cdcf",
    color3: "0081c6",
    color4: "48466d",
    url: "https://colorhunt.co/palette/abedd846cdcf0081c648466d"
  },
  {
    color1: "faa9e0",
    color2: "f8b3eb",
    color3: "eaa3fc",
    color4: "fce4b0",
    url: "https://colorhunt.co/palette/faa9e0f8b3ebeaa3fcfce4b0"
  },
  {
    color1: "faf5ef",
    color2: "d7d1c9",
    color3: "99b19c",
    color4: "672f2f",
    url: "https://colorhunt.co/palette/faf5efd7d1c999b19c672f2f"
  },
  {
    color1: "182747",
    color2: "562b08",
    color3: "647e68",
    color4: "d8d8d8",
    url: "https://colorhunt.co/palette/182747562b08647e68d8d8d8"
  },
  {
    color1: "e1ffcf",
    color2: "cfcbf1",
    color3: "bab5f6",
    color4: "4d3664",
    url: "https://colorhunt.co/palette/e1ffcfcfcbf1bab5f64d3664"
  },
  {
    color1: "0a1931",
    color2: "185adb",
    color3: "ffc947",
    color4: "feddbe",
    url: "https://colorhunt.co/palette/0a1931185adbffc947feddbe"
  },
  {
    color1: "ed6663",
    color2: "b52b65",
    color3: "3c2c3e",
    color4: "59405c",
    url: "https://colorhunt.co/palette/ed6663b52b653c2c3e59405c"
  },
  {
    color1: "88bef5",
    color2: "ba53de",
    color3: "f469a9",
    color4: "f4fa9c",
    url: "https://colorhunt.co/palette/88bef5ba53def469a9f4fa9c"
  },
  {
    color1: "000b49",
    color2: "9b0000",
    color3: "ff7272",
    color4: "ffb5b5",
    url: "https://colorhunt.co/palette/000b499b0000ff7272ffb5b5"
  },
  {
    color1: "39b5e0",
    color2: "a31acb",
    color3: "ff78f0",
    color4: "f5ea5a",
    url: "https://colorhunt.co/palette/39b5e0a31acbff78f0f5ea5a"
  },
  {
    color1: "de5b7b",
    color2: "eccfd1",
    color3: "f0e3c4",
    color4: "98ded3",
    url: "https://colorhunt.co/palette/de5b7beccfd1f0e3c498ded3"
  },
  {
    color1: "f3f6f6",
    color2: "90eee1",
    color3: "55b3f3",
    color4: "6356e5",
    url: "https://colorhunt.co/palette/f3f6f690eee155b3f36356e5"
  },
  {
    color1: "000249",
    color2: "0f4392",
    color3: "ff5151",
    color4: "ff8b8b",
    url: "https://colorhunt.co/palette/0002490f4392ff5151ff8b8b"
  },
  {
    color1: "400082",
    color2: "7e0cf5",
    color3: "cd4dcc",
    color4: "f7beff",
    url: "https://colorhunt.co/palette/4000827e0cf5cd4dccf7beff"
  },
  {
    color1: "0e2e3b",
    color2: "166678",
    color3: "7db9b3",
    color4: "d8d7c3",
    url: "https://colorhunt.co/palette/0e2e3b1666787db9b3d8d7c3"
  },
  {
    color1: "f688bb",
    color2: "e8f9e9",
    color3: "baf1a1",
    color4: "9de3d0",
    url: "https://colorhunt.co/palette/f688bbe8f9e9baf1a19de3d0"
  },
  {
    color1: "f2e8c6",
    color2: "f5841a",
    color3: "bb0029",
    color4: "03002c",
    url: "https://colorhunt.co/palette/f2e8c6f5841abb002903002c"
  },
  {
    color1: "fcf9ea",
    color2: "badfdb",
    color3: "49beb7",
    color4: "ff8a5c",
    url: "https://colorhunt.co/palette/fcf9eabadfdb49beb7ff8a5c"
  },
  {
    color1: "f96666",
    color2: "674747",
    color3: "829460",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/f96666674747829460eeeeee"
  },
  {
    color1: "1b1919",
    color2: "616f39",
    color3: "a7d129",
    color4: "f8eeb4",
    url: "https://colorhunt.co/palette/1b1919616f39a7d129f8eeb4"
  },
  {
    color1: "ff8484",
    color2: "d84c73",
    color3: "5c3b6f",
    color4: "35234b",
    url: "https://colorhunt.co/palette/ff8484d84c735c3b6f35234b"
  },
  {
    color1: "f6f6f6",
    color2: "eae9e9",
    color3: "d4d7dd",
    color4: "420000",
    url: "https://colorhunt.co/palette/f6f6f6eae9e9d4d7dd420000"
  },
  {
    color1: "282d4f",
    color2: "23103a",
    color3: "a0204c",
    color4: "ff6c00",
    url: "https://colorhunt.co/palette/282d4f23103aa0204cff6c00"
  },
  {
    color1: "c2faf1",
    color2: "f6f6f6",
    color3: "dfeff0",
    color4: "295e6a",
    url: "https://colorhunt.co/palette/c2faf1f6f6f6dfeff0295e6a"
  },
  {
    color1: "ffe162",
    color2: "ff6464",
    color3: "91c483",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/ffe162ff646491c483eeeeee"
  },
  {
    color1: "fcf8e8",
    color2: "94b49f",
    color3: "df7861",
    color4: "76549a",
    url: "https://colorhunt.co/palette/fcf8e894b49fdf786176549a"
  },
  {
    color1: "f9d371",
    color2: "f47340",
    color3: "ef2f88",
    color4: "8843f2",
    url: "https://colorhunt.co/palette/f9d371f47340ef2f888843f2"
  },
  {
    color1: "f9f8eb",
    color2: "ffe1b6",
    color3: "7a9eb1",
    color4: "415865",
    url: "https://colorhunt.co/palette/f9f8ebffe1b67a9eb1415865"
  },
  {
    color1: "3b2e5a",
    color2: "394989",
    color3: "4ea0ae",
    color4: "fff48f",
    url: "https://colorhunt.co/palette/3b2e5a3949894ea0aefff48f"
  },
  {
    color1: "feceab",
    color2: "ff847c",
    color3: "eb4a5f",
    color4: "2a363b",
    url: "https://colorhunt.co/palette/feceabff847ceb4a5f2a363b"
  },
  {
    color1: "3e8e7e",
    color2: "7cd1b8",
    color3: "fabb51",
    color4: "faedc6",
    url: "https://colorhunt.co/palette/3e8e7e7cd1b8fabb51faedc6"
  },
  {
    color1: "1a2f4b",
    color2: "28475c",
    color3: "2f8886",
    color4: "84c69b",
    url: "https://colorhunt.co/palette/1a2f4b28475c2f888684c69b"
  },
  {
    color1: "d2001a",
    color2: "ffde00",
    color3: "fffae7",
    color4: "efefef",
    url: "https://colorhunt.co/palette/d2001affde00fffae7efefef"
  },
  {
    color1: "0078aa",
    color2: "3ab4f2",
    color3: "f2df3a",
    color4: "f6f6f6",
    url: "https://colorhunt.co/palette/0078aa3ab4f2f2df3af6f6f6"
  },
  {
    color1: "c54c82",
    color2: "ec729c",
    color3: "f4aeba",
    color4: "fdfdcb",
    url: "https://colorhunt.co/palette/c54c82ec729cf4aebafdfdcb"
  },
  {
    color1: "d8c292",
    color2: "5b5b5b",
    color3: "b67171",
    color4: "c19065",
    url: "https://colorhunt.co/palette/d8c2925b5b5bb67171c19065"
  },
  {
    color1: "33313b",
    color2: "4592af",
    color3: "e3c4a8",
    color4: "f6f5f5",
    url: "https://colorhunt.co/palette/33313b4592afe3c4a8f6f5f5"
  },
  {
    color1: "a21232",
    color2: "1a1831",
    color3: "20615b",
    color4: "dece9c",
    url: "https://colorhunt.co/palette/a212321a183120615bdece9c"
  },
  {
    color1: "f54ea2",
    color2: "a94caf",
    color3: "7b3b8c",
    color4: "41228e",
    url: "https://colorhunt.co/palette/f54ea2a94caf7b3b8c41228e"
  },
  {
    color1: "272829",
    color2: "61677a",
    color3: "d8d9da",
    color4: "fff6e0",
    url: "https://colorhunt.co/palette/27282961677ad8d9dafff6e0"
  },
  {
    color1: "d1f5d3",
    color2: "9dc6a7",
    color3: "7d5e2a",
    color4: "231903",
    url: "https://colorhunt.co/palette/d1f5d39dc6a77d5e2a231903"
  },
  {
    color1: "ff5656",
    color2: "edf2f6",
    color3: "6a7efc",
    color4: "494953",
    url: "https://colorhunt.co/palette/ff5656edf2f66a7efc494953"
  },
  {
    color1: "3c415e",
    color2: "738598",
    color3: "dfe2e2",
    color4: "1cb3c8",
    url: "https://colorhunt.co/palette/3c415e738598dfe2e21cb3c8"
  },
  {
    color1: "e5f9db",
    color2: "a0d8b3",
    color3: "a2a378",
    color4: "83764f",
    url: "https://colorhunt.co/palette/e5f9dba0d8b3a2a37883764f"
  },
  {
    color1: "f4f6f6",
    color2: "ff9c91",
    color3: "cd3f3e",
    color4: "1c2938",
    url: "https://colorhunt.co/palette/f4f6f6ff9c91cd3f3e1c2938"
  },
  {
    color1: "c2fcd9",
    color2: "a0e4b0",
    color3: "f8fba2",
    color4: "fa7f7f",
    url: "https://colorhunt.co/palette/c2fcd9a0e4b0f8fba2fa7f7f"
  },
  {
    color1: "f1fafb",
    color2: "a0e4f1",
    color3: "9dc6ff",
    color4: "4993fa",
    url: "https://colorhunt.co/palette/f1fafba0e4f19dc6ff4993fa"
  },
  {
    color1: "394a51",
    color2: "7fa99b",
    color3: "fbf2d5",
    color4: "fdc57b",
    url: "https://colorhunt.co/palette/394a517fa99bfbf2d5fdc57b"
  },
  {
    color1: "eef2f5",
    color2: "ea168e",
    color3: "612570",
    color4: "1eafed",
    url: "https://colorhunt.co/palette/eef2f5ea168e6125701eafed"
  },
  {
    color1: "332fd0",
    color2: "9254c8",
    color3: "e15fed",
    color4: "6edcd9",
    url: "https://colorhunt.co/palette/332fd09254c8e15fed6edcd9"
  },
  {
    color1: "45171d",
    color2: "e84a5f",
    color3: "ff847c",
    color4: "fecea8",
    url: "https://colorhunt.co/palette/45171de84a5fff847cfecea8"
  },
  {
    color1: "f9a828",
    color2: "ececeb",
    color3: "07617d",
    color4: "2e383f",
    url: "https://colorhunt.co/palette/f9a828ececeb07617d2e383f"
  },
  {
    color1: "0e0220",
    color2: "e40475",
    color3: "48e0e4",
    color4: "d7fbf6",
    url: "https://colorhunt.co/palette/0e0220e4047548e0e4d7fbf6"
  },
  {
    color1: "53bf9d",
    color2: "f94c66",
    color3: "bd4291",
    color4: "ffc54d",
    url: "https://colorhunt.co/palette/53bf9df94c66bd4291ffc54d"
  },
  {
    color1: "183661",
    color2: "1c4b82",
    color3: "dd6b4d",
    color4: "dae1e7",
    url: "https://colorhunt.co/palette/1836611c4b82dd6b4ddae1e7"
  },
  {
    color1: "afffff",
    color2: "74dbef",
    color3: "5e88fc",
    color4: "264e86",
    url: "https://colorhunt.co/palette/afffff74dbef5e88fc264e86"
  },
  {
    color1: "f8d5f0",
    color2: "58d5d3",
    color3: "41a4c3",
    color4: "3f4b83",
    url: "https://colorhunt.co/palette/f8d5f058d5d341a4c33f4b83"
  },
  {
    color1: "e1eacd",
    color2: "bad8b6",
    color3: "61b390",
    color4: "01352c",
    url: "https://colorhunt.co/palette/e1eacdbad8b661b39001352c"
  },
  {
    color1: "f3f0d1",
    color2: "e29c68",
    color3: "c85108",
    color4: "a20e0e",
    url: "https://colorhunt.co/palette/f3f0d1e29c68c85108a20e0e"
  },
  {
    color1: "142f43",
    color2: "ffab4c",
    color3: "ff5f7e",
    color4: "b000b9",
    url: "https://colorhunt.co/palette/142f43ffab4cff5f7eb000b9"
  },
  {
    color1: "f2f4b2",
    color2: "cce490",
    color3: "0c907d",
    color4: "0d627a",
    url: "https://colorhunt.co/palette/f2f4b2cce4900c907d0d627a"
  },
  {
    color1: "e3dfc8",
    color2: "f5f1da",
    color3: "808c6c",
    color4: "fdac61",
    url: "https://colorhunt.co/palette/e3dfc8f5f1da808c6cfdac61"
  },
  {
    color1: "04879c",
    color2: "0c3c78",
    color3: "090030",
    color4: "f30a49",
    url: "https://colorhunt.co/palette/04879c0c3c78090030f30a49"
  },
  {
    color1: "970747",
    color2: "fef4e8",
    color3: "13445a",
    color4: "446878",
    url: "https://colorhunt.co/palette/970747fef4e813445a446878"
  },
  {
    color1: "e41749",
    color2: "f5587b",
    color3: "ff8a5c",
    color4: "fff591",
    url: "https://colorhunt.co/palette/e41749f5587bff8a5cfff591"
  },
  {
    color1: "352961",
    color2: "774181",
    color3: "e6b2c6",
    color4: "f6e5e5",
    url: "https://colorhunt.co/palette/352961774181e6b2c6f6e5e5"
  },
  {
    color1: "ec4646",
    color2: "663f3f",
    color3: "51c2d5",
    color4: "bbf1fa",
    url: "https://colorhunt.co/palette/ec4646663f3f51c2d5bbf1fa"
  },
  {
    color1: "504658",
    color2: "f0decb",
    color3: "ffb5b5",
    color4: "ce2e6c",
    url: "https://colorhunt.co/palette/504658f0decbffb5b5ce2e6c"
  },
  {
    color1: "f68787",
    color2: "f8a978",
    color3: "f1eb9a",
    color4: "a4f6a5",
    url: "https://colorhunt.co/palette/f68787f8a978f1eb9aa4f6a5"
  },
  {
    color1: "cbf9da",
    color2: "3dd2cc",
    color3: "3e6b89",
    color4: "122d42",
    url: "https://colorhunt.co/palette/cbf9da3dd2cc3e6b89122d42"
  },
  {
    color1: "36b5b0",
    color2: "9dd8c8",
    color3: "f09595",
    color4: "fcf5b0",
    url: "https://colorhunt.co/palette/36b5b09dd8c8f09595fcf5b0"
  },
  {
    color1: "691a40",
    color2: "9e3668",
    color3: "f6a9ce",
    color4: "fde3f0",
    url: "https://colorhunt.co/palette/691a409e3668f6a9cefde3f0"
  },
  {
    color1: "83afa6",
    color2: "58727f",
    color3: "e5e5e5",
    color4: "d3a284",
    url: "https://colorhunt.co/palette/83afa658727fe5e5e5d3a284"
  },
  {
    color1: "a3a7e4",
    color2: "bae2be",
    color3: "f0f1b3",
    color4: "c5e5e3",
    url: "https://colorhunt.co/palette/a3a7e4bae2bef0f1b3c5e5e3"
  },
  {
    color1: "018383",
    color2: "02a8a8",
    color3: "42e6a4",
    color4: "f5dea3",
    url: "https://colorhunt.co/palette/01838302a8a842e6a4f5dea3"
  },
  {
    color1: "f7fbe1",
    color2: "bac964",
    color3: "438a5e",
    color4: "436f8a",
    url: "https://colorhunt.co/palette/f7fbe1bac964438a5e436f8a"
  },
  {
    color1: "fff89a",
    color2: "ffc900",
    color3: "086e7d",
    color4: "1a5f7a",
    url: "https://colorhunt.co/palette/fff89affc900086e7d1a5f7a"
  },
  {
    color1: "ffaaaa",
    color2: "e37070",
    color3: "c7004c",
    color4: "8f1537",
    url: "https://colorhunt.co/palette/ffaaaae37070c7004c8f1537"
  },
  {
    color1: "e9f679",
    color2: "9bdf46",
    color3: "25a55f",
    color4: "346473",
    url: "https://colorhunt.co/palette/e9f6799bdf4625a55f346473"
  },
  {
    color1: "fffb97",
    color2: "97ffcf",
    color3: "2fe1d6",
    color4: "38c6bd",
    url: "https://colorhunt.co/palette/fffb9797ffcf2fe1d638c6bd"
  },
  {
    color1: "302387",
    color2: "ff3796",
    color3: "00faac",
    color4: "fffdaf",
    url: "https://colorhunt.co/palette/302387ff379600faacfffdaf"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "f96d00",
    color4: "f2f2f2",
    url: "https://colorhunt.co/palette/222831393e46f96d00f2f2f2"
  },
  {
    color1: "2c003e",
    color2: "512b58",
    color3: "ffa372",
    color4: "ea9085",
    url: "https://colorhunt.co/palette/2c003e512b58ffa372ea9085"
  },
  {
    color1: "78c4d4",
    color2: "8f4f4f",
    color3: "b7657b",
    color4: "f2b4b4",
    url: "https://colorhunt.co/palette/78c4d48f4f4fb7657bf2b4b4"
  },
  {
    color1: "eeeded",
    color2: "5c6e91",
    color3: "8f384d",
    color4: "dd9866",
    url: "https://colorhunt.co/palette/eeeded5c6e918f384ddd9866"
  },
  {
    color1: "1d2323",
    color2: "5c848e",
    color3: "decdc3",
    color4: "e0e0ec",
    url: "https://colorhunt.co/palette/1d23235c848edecdc3e0e0ec"
  },
  {
    color1: "35013f",
    color2: "b643cd",
    color3: "ff5da2",
    color4: "99ddcc",
    url: "https://colorhunt.co/palette/35013fb643cdff5da299ddcc"
  },
  {
    color1: "fff1ac",
    color2: "f9bcdd",
    color3: "d5a4cf",
    color4: "b689b0",
    url: "https://colorhunt.co/palette/fff1acf9bcddd5a4cfb689b0"
  },
  {
    color1: "9b5d73",
    color2: "b0757c",
    color3: "c38b8b",
    color4: "fff1c5",
    url: "https://colorhunt.co/palette/9b5d73b0757cc38b8bfff1c5"
  },
  {
    color1: "851de0",
    color2: "aa26da",
    color3: "c355f5",
    color4: "f1fa3c",
    url: "https://colorhunt.co/palette/851de0aa26dac355f5f1fa3c"
  },
  {
    color1: "ca3e6b",
    color2: "fa8383",
    color3: "9dd3cc",
    color4: "ffe4b3",
    url: "https://colorhunt.co/palette/ca3e6bfa83839dd3ccffe4b3"
  },
  {
    color1: "dcb5ff",
    color2: "d9f2ff",
    color3: "a5bdfd",
    color4: "77529e",
    url: "https://colorhunt.co/palette/dcb5ffd9f2ffa5bdfd77529e"
  },
  {
    color1: "7d156d",
    color2: "b94e8a",
    color3: "d87ca1",
    color4: "ffd7f1",
    url: "https://colorhunt.co/palette/7d156db94e8ad87ca1ffd7f1"
  },
  {
    color1: "c9182b",
    color2: "f23a3a",
    color3: "e3f3ac",
    color4: "44c662",
    url: "https://colorhunt.co/palette/c9182bf23a3ae3f3ac44c662"
  },
  {
    color1: "7ebdb4",
    color2: "f6d198",
    color3: "f4a548",
    color4: "862a5c",
    url: "https://colorhunt.co/palette/7ebdb4f6d198f4a548862a5c"
  },
  {
    color1: "ff6138",
    color2: "ffff9d",
    color3: "beeb9f",
    color4: "79bd8f",
    url: "https://colorhunt.co/palette/ff6138ffff9dbeeb9f79bd8f"
  },
  {
    color1: "481380",
    color2: "742dd2",
    color3: "efb1ff",
    color4: "ffe2ff",
    url: "https://colorhunt.co/palette/481380742dd2efb1ffffe2ff"
  },
  {
    color1: "15eda3",
    color2: "0ea47a",
    color3: "068b80",
    color4: "127780",
    url: "https://colorhunt.co/palette/15eda30ea47a068b80127780"
  },
  {
    color1: "fff3b2",
    color2: "ffe0d8",
    color3: "ff9b93",
    color4: "41584b",
    url: "https://colorhunt.co/palette/fff3b2ffe0d8ff9b9341584b"
  },
  {
    color1: "2a2b5f",
    color2: "393c83",
    color3: "3dc4d0",
    color4: "44d9e6",
    url: "https://colorhunt.co/palette/2a2b5f393c833dc4d044d9e6"
  },
  {
    color1: "8b1874",
    color2: "b71375",
    color3: "fc4f00",
    color4: "f79540",
    url: "https://colorhunt.co/palette/8b1874b71375fc4f00f79540"
  },
  {
    color1: "2185d5",
    color2: "3a4750",
    color3: "303841",
    color4: "f3f3f3",
    url: "https://colorhunt.co/palette/2185d53a4750303841f3f3f3"
  },
  {
    color1: "033fff",
    color2: "4a9ff5",
    color3: "5ff4ee",
    color4: "c2fcf6",
    url: "https://colorhunt.co/palette/033fff4a9ff55ff4eec2fcf6"
  },
  {
    color1: "00ffd1",
    color2: "31c6d4",
    color3: "ffff00",
    color4: "ff1e1e",
    url: "https://colorhunt.co/palette/00ffd131c6d4ffff00ff1e1e"
  },
  {
    color1: "ebd9dd",
    color2: "d8aed3",
    color3: "9182c4",
    color4: "486989",
    url: "https://colorhunt.co/palette/ebd9ddd8aed39182c4486989"
  },
  {
    color1: "314a52",
    color2: "52686a",
    color3: "acbdc5",
    color4: "ffded5",
    url: "https://colorhunt.co/palette/314a5252686aacbdc5ffded5"
  },
  {
    color1: "000000",
    color2: "262a56",
    color3: "b8621b",
    color4: "e3ccae",
    url: "https://colorhunt.co/palette/000000262a56b8621be3ccae"
  },
  {
    color1: "f3f6f6",
    color2: "30e3ca",
    color3: "11999e",
    color4: "40514e",
    url: "https://colorhunt.co/palette/f3f6f630e3ca11999e40514e"
  },
  {
    color1: "f8b500",
    color2: "ece8d9",
    color3: "00adb5",
    color4: "393e46",
    url: "https://colorhunt.co/palette/f8b500ece8d900adb5393e46"
  },
  {
    color1: "e8e2db",
    color2: "fab95b",
    color3: "f16821",
    color4: "1a3263",
    url: "https://colorhunt.co/palette/e8e2dbfab95bf168211a3263"
  },
  {
    color1: "a5f1e9",
    color2: "7fe9de",
    color3: "fff6bf",
    color4: "ffebad",
    url: "https://colorhunt.co/palette/a5f1e97fe9defff6bfffebad"
  },
  {
    color1: "14103b",
    color2: "f02a71",
    color3: "7ec0e4",
    color4: "6789ba",
    url: "https://colorhunt.co/palette/14103bf02a717ec0e46789ba"
  },
  {
    color1: "ffc6be",
    color2: "ffa1c5",
    color3: "a773c3",
    color4: "854777",
    url: "https://colorhunt.co/palette/ffc6beffa1c5a773c3854777"
  },
  {
    color1: "f9f9f9",
    color2: "f6ecbf",
    color3: "caadde",
    color4: "c886e5",
    url: "https://colorhunt.co/palette/f9f9f9f6ecbfcaaddec886e5"
  },
  {
    color1: "4d77ff",
    color2: "56bbf1",
    color3: "5ee6eb",
    color4: "f2fa5a",
    url: "https://colorhunt.co/palette/4d77ff56bbf15ee6ebf2fa5a"
  },
  {
    color1: "faf4ff",
    color2: "f3c623",
    color3: "844685",
    color4: "10375c",
    url: "https://colorhunt.co/palette/faf4fff3c62384468510375c"
  },
  {
    color1: "f1f4f6",
    color2: "5ac8d8",
    color3: "597fca",
    color4: "2552ac",
    url: "https://colorhunt.co/palette/f1f4f65ac8d8597fca2552ac"
  },
  {
    color1: "ff007b",
    color2: "ff5757",
    color3: "ff8585",
    color4: "ffebeb",
    url: "https://colorhunt.co/palette/ff007bff5757ff8585ffebeb"
  },
  {
    color1: "40dfef",
    color2: "b9f8d3",
    color3: "fffbe7",
    color4: "e78ea9",
    url: "https://colorhunt.co/palette/40dfefb9f8d3fffbe7e78ea9"
  },
  {
    color1: "393e46",
    color2: "5c636e",
    color3: "f96d00",
    color4: "f2f2f2",
    url: "https://colorhunt.co/palette/393e465c636ef96d00f2f2f2"
  },
  {
    color1: "dfbb9d",
    color2: "f7e2d6",
    color3: "9dd6df",
    color4: "a084cf",
    url: "https://colorhunt.co/palette/dfbb9df7e2d69dd6dfa084cf"
  },
  {
    color1: "2f86a6",
    color2: "34be82",
    color3: "2fdd92",
    color4: "f2f013",
    url: "https://colorhunt.co/palette/2f86a634be822fdd92f2f013"
  },
  {
    color1: "f5f7b2",
    color2: "1cc5dc",
    color3: "890596",
    color4: "cf0000",
    url: "https://colorhunt.co/palette/f5f7b21cc5dc890596cf0000"
  },
  {
    color1: "f35588",
    color2: "ffbbb4",
    color3: "71a95a",
    color4: "007944",
    url: "https://colorhunt.co/palette/f35588ffbbb471a95a007944"
  },
  {
    color1: "3a0088",
    color2: "930077",
    color3: "e61c5d",
    color4: "ffe98a",
    url: "https://colorhunt.co/palette/3a0088930077e61c5dffe98a"
  },
  {
    color1: "313552",
    color2: "b8405e",
    color3: "2eb086",
    color4: "eee6ce",
    url: "https://colorhunt.co/palette/313552b8405e2eb086eee6ce"
  },
  {
    color1: "a03c78",
    color2: "ed8e7c",
    color3: "cdf3a2",
    color4: "93d9a3",
    url: "https://colorhunt.co/palette/a03c78ed8e7ccdf3a293d9a3"
  },
  {
    color1: "e6f8f9",
    color2: "b1e8ed",
    color3: "edb5f5",
    color4: "e86ed0",
    url: "https://colorhunt.co/palette/e6f8f9b1e8ededb5f5e86ed0"
  },
  {
    color1: "015668",
    color2: "06648c",
    color3: "0f81c7",
    color4: "0de2ea",
    url: "https://colorhunt.co/palette/01566806648c0f81c70de2ea"
  },
  {
    color1: "00334e",
    color2: "145374",
    color3: "5588a3",
    color4: "e8e8e8",
    url: "https://colorhunt.co/palette/00334e1453745588a3e8e8e8"
  },
  {
    color1: "fbe0d8",
    color2: "4d727e",
    color3: "283644",
    color4: "7a6552",
    url: "https://colorhunt.co/palette/fbe0d84d727e2836447a6552"
  },
  {
    color1: "01005e",
    color2: "22267b",
    color3: "28518a",
    color4: "17b794",
    url: "https://colorhunt.co/palette/01005e22267b28518a17b794"
  },
  {
    color1: "303841",
    color2: "47555e",
    color3: "7aa5d2",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/30384147555e7aa5d2eeeeee"
  },
  {
    color1: "1f4690",
    color2: "3a5ba0",
    color3: "ffa500",
    color4: "ffe5b4",
    url: "https://colorhunt.co/palette/1f46903a5ba0ffa500ffe5b4"
  },
  {
    color1: "525fe1",
    color2: "f86f03",
    color3: "ffa41b",
    color4: "fff6f4",
    url: "https://colorhunt.co/palette/525fe1f86f03ffa41bfff6f4"
  },
  {
    color1: "b2e672",
    color2: "fffd88",
    color3: "ffd478",
    color4: "f96b85",
    url: "https://colorhunt.co/palette/b2e672fffd88ffd478f96b85"
  },
  {
    color1: "fffcea",
    color2: "a5f2e7",
    color3: "8983f3",
    color4: "3a0077",
    url: "https://colorhunt.co/palette/fffceaa5f2e78983f33a0077"
  },
  {
    color1: "00649f",
    color2: "01aac1",
    color3: "00dbe7",
    color4: "97ecc5",
    url: "https://colorhunt.co/palette/00649f01aac100dbe797ecc5"
  },
  {
    color1: "e5f9bd",
    color2: "a0e418",
    color3: "7fb414",
    color4: "525050",
    url: "https://colorhunt.co/palette/e5f9bda0e4187fb414525050"
  },
  {
    color1: "f5fac8",
    color2: "aee8e6",
    color3: "8bcfcc",
    color4: "539092",
    url: "https://colorhunt.co/palette/f5fac8aee8e68bcfcc539092"
  },
  {
    color1: "ffed78",
    color2: "feffea",
    color3: "addce4",
    color4: "586b8f",
    url: "https://colorhunt.co/palette/ffed78feffeaaddce4586b8f"
  },
  {
    color1: "003f5c",
    color2: "472b62",
    color3: "bc4873",
    color4: "fb5b5a",
    url: "https://colorhunt.co/palette/003f5c472b62bc4873fb5b5a"
  },
  {
    color1: "a07676",
    color2: "825959",
    color3: "8ad7c1",
    color4: "c6fced",
    url: "https://colorhunt.co/palette/a076768259598ad7c1c6fced"
  },
  {
    color1: "696464",
    color2: "e9e5dd",
    color3: "d04925",
    color4: "992e24",
    url: "https://colorhunt.co/palette/696464e9e5ddd04925992e24"
  },
  {
    color1: "fff1bc",
    color2: "7dc383",
    color3: "6a9c78",
    color4: "446e5c",
    url: "https://colorhunt.co/palette/fff1bc7dc3836a9c78446e5c"
  },
  {
    color1: "070d59",
    color2: "1f3c88",
    color3: "5893d4",
    color4: "f7b633",
    url: "https://colorhunt.co/palette/070d591f3c885893d4f7b633"
  },
  {
    color1: "ccf0c3",
    color2: "bca3ca",
    color3: "7c4789",
    color4: "4a0e5c",
    url: "https://colorhunt.co/palette/ccf0c3bca3ca7c47894a0e5c"
  },
  {
    color1: "f2f2f2",
    color2: "cdcdcd",
    color3: "005691",
    color4: "004a7c",
    url: "https://colorhunt.co/palette/f2f2f2cdcdcd005691004a7c"
  },
  {
    color1: "c780fa",
    color2: "e3acf9",
    color3: "fada9d",
    color4: "fbf1d3",
    url: "https://colorhunt.co/palette/c780fae3acf9fada9dfbf1d3"
  },
  {
    color1: "ff895d",
    color2: "d5eeff",
    color3: "78bbe6",
    color4: "1b435d",
    url: "https://colorhunt.co/palette/ff895dd5eeff78bbe61b435d"
  },
  {
    color1: "630606",
    color2: "890f0d",
    color3: "e83a14",
    color4: "d9ce3f",
    url: "https://colorhunt.co/palette/630606890f0de83a14d9ce3f"
  },
  {
    color1: "363b4e",
    color2: "4f3b78",
    color3: "927fbf",
    color4: "c4bbf0",
    url: "https://colorhunt.co/palette/363b4e4f3b78927fbfc4bbf0"
  },
  {
    color1: "588c73",
    color2: "f2e394",
    color3: "f2ae72",
    color4: "d96459",
    url: "https://colorhunt.co/palette/588c73f2e394f2ae72d96459"
  },
  {
    color1: "f4e8c1",
    color2: "a0c1b8",
    color3: "726a95",
    color4: "351f39",
    url: "https://colorhunt.co/palette/f4e8c1a0c1b8726a95351f39"
  },
  {
    color1: "eb76ff",
    color2: "ffa8ec",
    color3: "ffccfc",
    color4: "fbffb1",
    url: "https://colorhunt.co/palette/eb76ffffa8ecffccfcfbffb1"
  },
  {
    color1: "453c67",
    color2: "6d67e4",
    color3: "46c2cb",
    color4: "f2f7a1",
    url: "https://colorhunt.co/palette/453c676d67e446c2cbf2f7a1"
  },
  {
    color1: "89f8ce",
    color2: "f5fac7",
    color3: "dec8ed",
    color4: "cc99f9",
    url: "https://colorhunt.co/palette/89f8cef5fac7dec8edcc99f9"
  },
  {
    color1: "324e7b",
    color2: "86a6df",
    color3: "5068a9",
    color4: "f8f8f8",
    url: "https://colorhunt.co/palette/324e7b86a6df5068a9f8f8f8"
  },
  {
    color1: "085f63",
    color2: "49beb7",
    color3: "fccf4d",
    color4: "ef255f",
    url: "https://colorhunt.co/palette/085f6349beb7fccf4def255f"
  },
  {
    color1: "eeeeee",
    color2: "acc6aa",
    color3: "71a0a5",
    color4: "77628c",
    url: "https://colorhunt.co/palette/eeeeeeacc6aa71a0a577628c"
  },
  {
    color1: "ececeb",
    color2: "f9a828",
    color3: "07617d",
    color4: "2e383f",
    url: "https://colorhunt.co/palette/ececebf9a82807617d2e383f"
  },
  {
    color1: "00204a",
    color2: "005792",
    color3: "00bbf0",
    color4: "fdb44b",
    url: "https://colorhunt.co/palette/00204a00579200bbf0fdb44b"
  },
  {
    color1: "ff7171",
    color2: "ffaa71",
    color3: "6e6d6d",
    color4: "ececec",
    url: "https://colorhunt.co/palette/ff7171ffaa716e6d6dececec"
  },
  {
    color1: "83e4b5",
    color2: "3ec8ac",
    color3: "4e90a4",
    color4: "6e60a0",
    url: "https://colorhunt.co/palette/83e4b53ec8ac4e90a46e60a0"
  },
  {
    color1: "f2f2f0",
    color2: "ff5e3a",
    color3: "2c365d",
    color4: "272e4f",
    url: "https://colorhunt.co/palette/f2f2f0ff5e3a2c365d272e4f"
  },
  {
    color1: "6a67ce",
    color2: "947ec3",
    color3: "b689c0",
    color4: "eef3d2",
    url: "https://colorhunt.co/palette/6a67ce947ec3b689c0eef3d2"
  },
  {
    color1: "f1c27b",
    color2: "ffd89c",
    color3: "a2cdb0",
    color4: "85a389",
    url: "https://colorhunt.co/palette/f1c27bffd89ca2cdb085a389"
  },
  {
    color1: "f0d78c",
    color2: "fcfafa",
    color3: "64c4ed",
    color4: "4f81c7",
    url: "https://colorhunt.co/palette/f0d78cfcfafa64c4ed4f81c7"
  },
  {
    color1: "000000",
    color2: "f58840",
    color3: "b85252",
    color4: "eadede",
    url: "https://colorhunt.co/palette/000000f58840b85252eadede"
  },
  {
    color1: "a85cf9",
    color2: "5534a5",
    color3: "4b7be5",
    color4: "6fdfdf",
    url: "https://colorhunt.co/palette/a85cf95534a54b7be56fdfdf"
  },
  {
    color1: "feffea",
    color2: "a3de83",
    color3: "2eb872",
    color4: "ff5d6e",
    url: "https://colorhunt.co/palette/feffeaa3de832eb872ff5d6e"
  },
  {
    color1: "f9e090",
    color2: "ff935c",
    color3: "dc5353",
    color4: "a72461",
    url: "https://colorhunt.co/palette/f9e090ff935cdc5353a72461"
  },
  {
    color1: "544179",
    color2: "6166b3",
    color3: "32c1cd",
    color4: "17d7a0",
    url: "https://colorhunt.co/palette/5441796166b332c1cd17d7a0"
  },
  {
    color1: "b8f7d4",
    color2: "6fe7db",
    color3: "7fa6ee",
    color4: "835af1",
    url: "https://colorhunt.co/palette/b8f7d46fe7db7fa6ee835af1"
  },
  {
    color1: "ffd8a6",
    color2: "fc8210",
    color3: "ff427f",
    color4: "007892",
    url: "https://colorhunt.co/palette/ffd8a6fc8210ff427f007892"
  },
  {
    color1: "388e3c",
    color2: "8bc34a",
    color3: "dce775",
    color4: "fff59d",
    url: "https://colorhunt.co/palette/388e3c8bc34adce775fff59d"
  },
  {
    color1: "c6de41",
    color2: "2d6e7e",
    color3: "153b44",
    color4: "071c21",
    url: "https://colorhunt.co/palette/c6de412d6e7e153b44071c21"
  },
  {
    color1: "20716a",
    color2: "23a393",
    color3: "ffc0c2",
    color4: "f7e9e3",
    url: "https://colorhunt.co/palette/20716a23a393ffc0c2f7e9e3"
  },
  {
    color1: "45171d",
    color2: "f03861",
    color3: "ff847c",
    color4: "fecea8",
    url: "https://colorhunt.co/palette/45171df03861ff847cfecea8"
  },
  {
    color1: "2e3b3e",
    color2: "50666b",
    color3: "f9b8be",
    color4: "fd6378",
    url: "https://colorhunt.co/palette/2e3b3e50666bf9b8befd6378"
  },
  {
    color1: "ffd571",
    color2: "bbd196",
    color3: "56556e",
    color4: "3c2946",
    url: "https://colorhunt.co/palette/ffd571bbd19656556e3c2946"
  },
  {
    color1: "090089",
    color2: "0060ca",
    color3: "91ceff",
    color4: "fcdc74",
    url: "https://colorhunt.co/palette/0900890060ca91cefffcdc74"
  },
  {
    color1: "448ef6",
    color2: "75c2f6",
    color3: "65daf7",
    color4: "ffe981",
    url: "https://colorhunt.co/palette/448ef675c2f665daf7ffe981"
  },
  {
    color1: "e95280",
    color2: "23b1a5",
    color3: "ffdd7e",
    color4: "f3f3f3",
    url: "https://colorhunt.co/palette/e9528023b1a5ffdd7ef3f3f3"
  },
  {
    color1: "08ffc8",
    color2: "fff7f7",
    color3: "dadada",
    color4: "204969",
    url: "https://colorhunt.co/palette/08ffc8fff7f7dadada204969"
  },
  {
    color1: "feffdf",
    color2: "dde0ab",
    color3: "97cba9",
    color4: "668ba4",
    url: "https://colorhunt.co/palette/feffdfdde0ab97cba9668ba4"
  },
  {
    color1: "ffba5a",
    color2: "c0ffb3",
    color3: "52de97",
    color4: "2c7873",
    url: "https://colorhunt.co/palette/ffba5ac0ffb352de972c7873"
  },
  {
    color1: "303841",
    color2: "2e4750",
    color3: "f6c90e",
    color4: "f7f7f7",
    url: "https://colorhunt.co/palette/3038412e4750f6c90ef7f7f7"
  },
  {
    color1: "fafdcb",
    color2: "aee7e8",
    color3: "28c3d4",
    color4: "248ea9",
    url: "https://colorhunt.co/palette/fafdcbaee7e828c3d4248ea9"
  },
  {
    color1: "001f3f",
    color2: "083358",
    color3: "0d63a5",
    color4: "ffd717",
    url: "https://colorhunt.co/palette/001f3f0833580d63a5ffd717"
  },
  {
    color1: "657dc4",
    color2: "838ed9",
    color3: "ece8e5",
    color4: "f59292",
    url: "https://colorhunt.co/palette/657dc4838ed9ece8e5f59292"
  },
  {
    color1: "9376e0",
    color2: "e893cf",
    color3: "f3bcc8",
    color4: "f6ffa6",
    url: "https://colorhunt.co/palette/9376e0e893cff3bcc8f6ffa6"
  },
  {
    color1: "ff6464",
    color2: "ffbd67",
    color3: "f8fe85",
    color4: "5be7a9",
    url: "https://colorhunt.co/palette/ff6464ffbd67f8fe855be7a9"
  },
  {
    color1: "f7ff56",
    color2: "94fc13",
    color3: "4be3ac",
    color4: "032d3c",
    url: "https://colorhunt.co/palette/f7ff5694fc134be3ac032d3c"
  },
  {
    color1: "323232",
    color2: "295f4e",
    color3: "6db193",
    color4: "f4e5c2",
    url: "https://colorhunt.co/palette/323232295f4e6db193f4e5c2"
  },
  {
    color1: "3c9099",
    color2: "5fbdb0",
    color3: "e3e2c3",
    color4: "f0efe2",
    url: "https://colorhunt.co/palette/3c90995fbdb0e3e2c3f0efe2"
  },
  {
    color1: "763857",
    color2: "8f4068",
    color3: "bfb051",
    color4: "eff0b6",
    url: "https://colorhunt.co/palette/7638578f4068bfb051eff0b6"
  },
  {
    color1: "6528f7",
    color2: "a076f9",
    color3: "d7bbf5",
    color4: "ede4ff",
    url: "https://colorhunt.co/palette/6528f7a076f9d7bbf5ede4ff"
  },
  {
    color1: "333c4a",
    color2: "495664",
    color3: "f6f7d3",
    color4: "f8fceb",
    url: "https://colorhunt.co/palette/333c4a495664f6f7d3f8fceb"
  },
  {
    color1: "ac4425",
    color2: "224b0c",
    color3: "c1d5a4",
    color4: "f0f2b6",
    url: "https://colorhunt.co/palette/ac4425224b0cc1d5a4f0f2b6"
  },
  {
    color1: "7c203a",
    color2: "f85959",
    color3: "ff9f68",
    color4: "feff89",
    url: "https://colorhunt.co/palette/7c203af85959ff9f68feff89"
  },
  {
    color1: "ffee93",
    color2: "f5d782",
    color3: "e97878",
    color4: "9b5151",
    url: "https://colorhunt.co/palette/ffee93f5d782e978789b5151"
  },
  {
    color1: "fdd2bf",
    color2: "b97a95",
    color3: "8236cb",
    color4: "290fba",
    url: "https://colorhunt.co/palette/fdd2bfb97a958236cb290fba"
  },
  {
    color1: "7bc74d",
    color2: "222831",
    color3: "393e46",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/7bc74d222831393e46eeeeee"
  },
  {
    color1: "f5f7fa",
    color2: "5be7c4",
    color3: "4fc1e9",
    color4: "7a57d1",
    url: "https://colorhunt.co/palette/f5f7fa5be7c44fc1e97a57d1"
  },
  {
    color1: "d7f7f5",
    color2: "75cac3",
    color3: "2a6171",
    color4: "f34573",
    url: "https://colorhunt.co/palette/d7f7f575cac32a6171f34573"
  },
  {
    color1: "49ff00",
    color2: "fbff00",
    color3: "ff9300",
    color4: "ff0000",
    url: "https://colorhunt.co/palette/49ff00fbff00ff9300ff0000"
  },
  {
    color1: "f7f7f8",
    color2: "4eeaf6",
    color3: "c82586",
    color4: "291f71",
    url: "https://colorhunt.co/palette/f7f7f84eeaf6c82586291f71"
  },
  {
    color1: "f9f8eb",
    color2: "76b39d",
    color3: "05004e",
    color4: "fd5f00",
    url: "https://colorhunt.co/palette/f9f8eb76b39d05004efd5f00"
  },
  {
    color1: "9fe8fa",
    color2: "26baee",
    color3: "73d2f3",
    color4: "fff4e0",
    url: "https://colorhunt.co/palette/9fe8fa26baee73d2f3fff4e0"
  },
  {
    color1: "f9c4ac",
    color2: "626f92",
    color3: "474168",
    color4: "272637",
    url: "https://colorhunt.co/palette/f9c4ac626f92474168272637"
  },
  {
    color1: "20decb",
    color2: "41eecb",
    color3: "f9f296",
    color4: "fcd78e",
    url: "https://colorhunt.co/palette/20decb41eecbf9f296fcd78e"
  },
  {
    color1: "ecf4f3",
    color2: "76dbd1",
    color3: "57a99a",
    color4: "555151",
    url: "https://colorhunt.co/palette/ecf4f376dbd157a99a555151"
  },
  {
    color1: "f7f7f7",
    color2: "3b0944",
    color3: "5f1854",
    color4: "1abb9c",
    url: "https://colorhunt.co/palette/f7f7f73b09445f18541abb9c"
  },
  {
    color1: "ddfee4",
    color2: "28cc9e",
    color3: "196b69",
    color4: "132f2b",
    url: "https://colorhunt.co/palette/ddfee428cc9e196b69132f2b"
  },
  {
    color1: "1b3c59",
    color2: "456173",
    color3: "11bfae",
    color4: "f2f2f0",
    url: "https://colorhunt.co/palette/1b3c5945617311bfaef2f2f0"
  },
  {
    color1: "f5fac8",
    color2: "a5f0e4",
    color3: "82c7eb",
    color4: "8ea1f0",
    url: "https://colorhunt.co/palette/f5fac8a5f0e482c7eb8ea1f0"
  },
  {
    color1: "b31313",
    color2: "ff9000",
    color3: "fdda16",
    color4: "ffee82",
    url: "https://colorhunt.co/palette/b31313ff9000fdda16ffee82"
  },
  {
    color1: "654062",
    color2: "ffd66b",
    color3: "ff9d72",
    color4: "f4f4f4",
    url: "https://colorhunt.co/palette/654062ffd66bff9d72f4f4f4"
  },
  {
    color1: "ff7676",
    color2: "f6f49d",
    color3: "5dae8b",
    color4: "466c95",
    url: "https://colorhunt.co/palette/ff7676f6f49d5dae8b466c95"
  },
  {
    color1: "040d12",
    color2: "183d3d",
    color3: "5c8374",
    color4: "93b1a6",
    url: "https://colorhunt.co/palette/040d12183d3d5c837493b1a6"
  },
  {
    color1: "fbffe0",
    color2: "ffd6a6",
    color3: "ff8ab4",
    color4: "d86eff",
    url: "https://colorhunt.co/palette/fbffe0ffd6a6ff8ab4d86eff"
  },
  {
    color1: "5b8c85",
    color2: "434e52",
    color3: "b0a160",
    color4: "ecce6d",
    url: "https://colorhunt.co/palette/5b8c85434e52b0a160ecce6d"
  },
  {
    color1: "232931",
    color2: "f73859",
    color3: "f1d18a",
    color4: "ededed",
    url: "https://colorhunt.co/palette/232931f73859f1d18aededed"
  },
  {
    color1: "151d3b",
    color2: "d82148",
    color3: "6ebf8b",
    color4: "dadbbd",
    url: "https://colorhunt.co/palette/151d3bd821486ebf8bdadbbd"
  },
  {
    color1: "0c2233",
    color2: "065471",
    color3: "0a91ab",
    color4: "ffc045",
    url: "https://colorhunt.co/palette/0c22330654710a91abffc045"
  },
  {
    color1: "587850",
    color2: "709078",
    color3: "78b0a0",
    color4: "f8d0b0",
    url: "https://colorhunt.co/palette/58785070907878b0a0f8d0b0"
  },
  {
    color1: "2e94b9",
    color2: "fffdc1",
    color3: "f0b775",
    color4: "fd5959",
    url: "https://colorhunt.co/palette/2e94b9fffdc1f0b775fd5959"
  },
  {
    color1: "46244c",
    color2: "712b75",
    color3: "c74b50",
    color4: "d49b54",
    url: "https://colorhunt.co/palette/46244c712b75c74b50d49b54"
  },
  {
    color1: "37474f",
    color2: "607d8b",
    color3: "90a4ae",
    color4: "f7b633",
    url: "https://colorhunt.co/palette/37474f607d8b90a4aef7b633"
  },
  {
    color1: "0c005a",
    color2: "bc2525",
    color3: "ff0000",
    color4: "eaeaea",
    url: "https://colorhunt.co/palette/0c005abc2525ff0000eaeaea"
  },
  {
    color1: "ba135d",
    color2: "f4cca4",
    color3: "d99879",
    color4: "000000",
    url: "https://colorhunt.co/palette/ba135df4cca4d99879000000"
  },
  {
    color1: "639cd9",
    color2: "5454c5",
    color3: "342056",
    color4: "220e24",
    url: "https://colorhunt.co/palette/639cd95454c5342056220e24"
  },
  {
    color1: "7fa99b",
    color2: "f6e79c",
    color3: "f79c1d",
    color4: "9c2c2c",
    url: "https://colorhunt.co/palette/7fa99bf6e79cf79c1d9c2c2c"
  },
  {
    color1: "333c83",
    color2: "f24a72",
    color3: "fdaf75",
    color4: "eaea7f",
    url: "https://colorhunt.co/palette/333c83f24a72fdaf75eaea7f"
  },
  {
    color1: "781c68",
    color2: "319da0",
    color3: "ffd39a",
    color4: "fff5e1",
    url: "https://colorhunt.co/palette/781c68319da0ffd39afff5e1"
  },
  {
    color1: "006778",
    color2: "0093ab",
    color3: "00afc1",
    color4: "ffd124",
    url: "https://colorhunt.co/palette/0067780093ab00afc1ffd124"
  },
  {
    color1: "081f37",
    color2: "5fc9f3",
    color3: "2e79ba",
    color4: "1e549f",
    url: "https://colorhunt.co/palette/081f375fc9f32e79ba1e549f"
  },
  {
    color1: "442727",
    color2: "eae7d9",
    color3: "d2c6b2",
    color4: "937d14",
    url: "https://colorhunt.co/palette/442727eae7d9d2c6b2937d14"
  },
  {
    color1: "fffdef",
    color2: "f1f1f1",
    color3: "e70000",
    color4: "c50000",
    url: "https://colorhunt.co/palette/fffdeff1f1f1e70000c50000"
  },
  {
    color1: "edf0c7",
    color2: "4e9525",
    color3: "2e5a1c",
    color4: "ff5c00",
    url: "https://colorhunt.co/palette/edf0c74e95252e5a1cff5c00"
  },
  {
    color1: "ffa258",
    color2: "fff7c2",
    color3: "a02a63",
    color4: "4b125c",
    url: "https://colorhunt.co/palette/ffa258fff7c2a02a634b125c"
  },
  {
    color1: "300532",
    color2: "aa3763",
    color3: "f6dec4",
    color4: "fef8dd",
    url: "https://colorhunt.co/palette/300532aa3763f6dec4fef8dd"
  },
  {
    color1: "6807f9",
    color2: "9852f9",
    color3: "c299fc",
    color4: "ffd739",
    url: "https://colorhunt.co/palette/6807f99852f9c299fcffd739"
  },
  {
    color1: "610c63",
    color2: "810955",
    color3: "ee81b3",
    color4: "fff9d7",
    url: "https://colorhunt.co/palette/610c63810955ee81b3fff9d7"
  },
  {
    color1: "383838",
    color2: "066163",
    color3: "cdbe78",
    color4: "f2f2f2",
    url: "https://colorhunt.co/palette/383838066163cdbe78f2f2f2"
  },
  {
    color1: "faf4f4",
    color2: "ef962d",
    color3: "9c5518",
    color4: "5a3f11",
    url: "https://colorhunt.co/palette/faf4f4ef962d9c55185a3f11"
  },
  {
    color1: "eeeeee",
    color2: "7971ea",
    color3: "393e46",
    color4: "222831",
    url: "https://colorhunt.co/palette/eeeeee7971ea393e46222831"
  },
  {
    color1: "1d5d9b",
    color2: "75c2f6",
    color3: "f4d160",
    color4: "fbeeac",
    url: "https://colorhunt.co/palette/1d5d9b75c2f6f4d160fbeeac"
  },
  {
    color1: "fcf8f3",
    color2: "aedadd",
    color3: "db996c",
    color4: "6e7da2",
    url: "https://colorhunt.co/palette/fcf8f3aedadddb996c6e7da2"
  },
  {
    color1: "552244",
    color2: "596157",
    color3: "5b8c5a",
    color4: "cfd186",
    url: "https://colorhunt.co/palette/5522445961575b8c5acfd186"
  },
  {
    color1: "295939",
    color2: "e9b0df",
    color3: "adeecf",
    color4: "e8efeb",
    url: "https://colorhunt.co/palette/295939e9b0dfadeecfe8efeb"
  },
  {
    color1: "070a52",
    color2: "d21312",
    color3: "ed2b2a",
    color4: "f15a59",
    url: "https://colorhunt.co/palette/070a52d21312ed2b2af15a59"
  },
  {
    color1: "ff8fe5",
    color2: "fbff64",
    color3: "76e3ff",
    color4: "7bc7fa",
    url: "https://colorhunt.co/palette/ff8fe5fbff6476e3ff7bc7fa"
  },
  {
    color1: "cd4545",
    color2: "f16821",
    color3: "f3a333",
    color4: "fffe9a",
    url: "https://colorhunt.co/palette/cd4545f16821f3a333fffe9a"
  },
  {
    color1: "bdd8f1",
    color2: "82a6cb",
    color3: "3667a6",
    color4: "214177",
    url: "https://colorhunt.co/palette/bdd8f182a6cb3667a6214177"
  },
  {
    color1: "e9fadd",
    color2: "b8e4c9",
    color3: "3f5468",
    color4: "42291c",
    url: "https://colorhunt.co/palette/e9faddb8e4c93f546842291c"
  },
  {
    color1: "6c3428",
    color2: "ba704f",
    color3: "dfa878",
    color4: "cee6f3",
    url: "https://colorhunt.co/palette/6c3428ba704fdfa878cee6f3"
  },
  {
    color1: "f4f7f7",
    color2: "79a8a9",
    color3: "4d727e",
    color4: "1f4e5f",
    url: "https://colorhunt.co/palette/f4f7f779a8a94d727e1f4e5f"
  },
  {
    color1: "f8fdc3",
    color2: "facbf8",
    color3: "efa7f3",
    color4: "f677f7",
    url: "https://colorhunt.co/palette/f8fdc3facbf8efa7f3f677f7"
  },
  {
    color1: "454d66",
    color2: "009975",
    color3: "58b368",
    color4: "d9d872",
    url: "https://colorhunt.co/palette/454d6600997558b368d9d872"
  },
  {
    color1: "283148",
    color2: "913535",
    color3: "bbbbbb",
    color4: "e9eec9",
    url: "https://colorhunt.co/palette/283148913535bbbbbbe9eec9"
  },
  {
    color1: "00005c",
    color2: "3b185f",
    color3: "c060a1",
    color4: "f0caa3",
    url: "https://colorhunt.co/palette/00005c3b185fc060a1f0caa3"
  },
  {
    color1: "5d3891",
    color2: "f99417",
    color3: "e8e2e2",
    color4: "f5f5f5",
    url: "https://colorhunt.co/palette/5d3891f99417e8e2e2f5f5f5"
  },
  {
    color1: "ffde74",
    color2: "ffa974",
    color3: "ff715a",
    color4: "ff3757",
    url: "https://colorhunt.co/palette/ffde74ffa974ff715aff3757"
  },
  {
    color1: "006c9a",
    color2: "00bebe",
    color3: "00f3e4",
    color4: "9ff9c1",
    url: "https://colorhunt.co/palette/006c9a00bebe00f3e49ff9c1"
  },
  {
    color1: "57d1c9",
    color2: "ed5485",
    color3: "fffbcb",
    color4: "ffe869",
    url: "https://colorhunt.co/palette/57d1c9ed5485fffbcbffe869"
  },
  {
    color1: "fcf9f4",
    color2: "ffc97c",
    color3: "ea7659",
    color4: "c1c1c1",
    url: "https://colorhunt.co/palette/fcf9f4ffc97cea7659c1c1c1"
  },
  {
    color1: "fbe3b9",
    color2: "fab696",
    color3: "0c9463",
    color4: "2d334a",
    url: "https://colorhunt.co/palette/fbe3b9fab6960c94632d334a"
  },
  {
    color1: "ff896b",
    color2: "e8d4b4",
    color3: "ebe6e6",
    color4: "f3f3f3",
    url: "https://colorhunt.co/palette/ff896be8d4b4ebe6e6f3f3f3"
  },
  {
    color1: "f1fcfd",
    color2: "c7eeff",
    color3: "4d6de3",
    color4: "393737",
    url: "https://colorhunt.co/palette/f1fcfdc7eeff4d6de3393737"
  },
  {
    color1: "aeeff0",
    color2: "f1f0d1",
    color3: "f0e3c4",
    color4: "daa592",
    url: "https://colorhunt.co/palette/aeeff0f1f0d1f0e3c4daa592"
  },
  {
    color1: "bb2253",
    color2: "ec185d",
    color3: "ff9171",
    color4: "ffb383",
    url: "https://colorhunt.co/palette/bb2253ec185dff9171ffb383"
  },
  {
    color1: "f1fafb",
    color2: "a0e4f1",
    color3: "7ea6f4",
    color4: "4a4de7",
    url: "https://colorhunt.co/palette/f1fafba0e4f17ea6f44a4de7"
  },
  {
    color1: "f6f4e6",
    color2: "ede59a",
    color3: "d5c455",
    color4: "fddb3a",
    url: "https://colorhunt.co/palette/f6f4e6ede59ad5c455fddb3a"
  },
  {
    color1: "a8df65",
    color2: "edf492",
    color3: "efb960",
    color4: "ee91bc",
    url: "https://colorhunt.co/palette/a8df65edf492efb960ee91bc"
  },
  {
    color1: "f4f4f4",
    color2: "6decb9",
    color3: "11999e",
    color4: "3c3c3c",
    url: "https://colorhunt.co/palette/f4f4f46decb911999e3c3c3c"
  },
  {
    color1: "23425f",
    color2: "a64942",
    color3: "ff7844",
    color4: "ffab5e",
    url: "https://colorhunt.co/palette/23425fa64942ff7844ffab5e"
  },
  {
    color1: "ffd96a",
    color2: "f34949",
    color3: "ff9090",
    color4: "ffb6b9",
    url: "https://colorhunt.co/palette/ffd96af34949ff9090ffb6b9"
  },
  {
    color1: "003865",
    color2: "ef5b0c",
    color3: "d4f6cc",
    color4: "3ccf4e",
    url: "https://colorhunt.co/palette/003865ef5b0cd4f6cc3ccf4e"
  },
  {
    color1: "f2f4f6",
    color2: "1ee3cf",
    color3: "6b48ff",
    color4: "0d3f67",
    url: "https://colorhunt.co/palette/f2f4f61ee3cf6b48ff0d3f67"
  },
  {
    color1: "fff6da",
    color2: "84f2d6",
    color3: "fc6b3f",
    color4: "262525",
    url: "https://colorhunt.co/palette/fff6da84f2d6fc6b3f262525"
  },
  {
    color1: "df2e38",
    color2: "ddf7e3",
    color3: "c7e8ca",
    color4: "5d9c59",
    url: "https://colorhunt.co/palette/df2e38ddf7e3c7e8ca5d9c59"
  },
  {
    color1: "c1f6e7",
    color2: "ffcbcb",
    color3: "bb7171",
    color4: "4e3440",
    url: "https://colorhunt.co/palette/c1f6e7ffcbcbbb71714e3440"
  },
  {
    color1: "070f4e",
    color2: "2772db",
    color3: "3ab1c8",
    color4: "f5ebeb",
    url: "https://colorhunt.co/palette/070f4e2772db3ab1c8f5ebeb"
  },
  {
    color1: "ffac8e",
    color2: "fd7792",
    color3: "3f4d71",
    color4: "55ae95",
    url: "https://colorhunt.co/palette/ffac8efd77923f4d7155ae95"
  },
  {
    color1: "827055",
    color2: "a79e8b",
    color3: "d4ceb0",
    color4: "ede7cf",
    url: "https://colorhunt.co/palette/827055a79e8bd4ceb0ede7cf"
  },
  {
    color1: "44000d",
    color2: "83142c",
    color3: "ad1d45",
    color4: "f9d276",
    url: "https://colorhunt.co/palette/44000d83142cad1d45f9d276"
  },
  {
    color1: "b0dedb",
    color2: "e3f3f7",
    color3: "fc6e5e",
    color4: "583131",
    url: "https://colorhunt.co/palette/b0dedbe3f3f7fc6e5e583131"
  },
  {
    color1: "0d7e83",
    color2: "13293d",
    color3: "ffaf87",
    color4: "eef0f2",
    url: "https://colorhunt.co/palette/0d7e8313293dffaf87eef0f2"
  },
  {
    color1: "539165",
    color2: "3f497f",
    color3: "f7c04a",
    color4: "f8f5e4",
    url: "https://colorhunt.co/palette/5391653f497ff7c04af8f5e4"
  },
  {
    color1: "084177",
    color2: "687466",
    color3: "cd8d7b",
    color4: "fbc490",
    url: "https://colorhunt.co/palette/084177687466cd8d7bfbc490"
  },
  {
    color1: "ffbdd4",
    color2: "ffe5b9",
    color3: "ffc77f",
    color4: "ff5c5c",
    url: "https://colorhunt.co/palette/ffbdd4ffe5b9ffc77fff5c5c"
  },
  {
    color1: "fbfbfb",
    color2: "fff1c1",
    color3: "78b7bb",
    color4: "808b97",
    url: "https://colorhunt.co/palette/fbfbfbfff1c178b7bb808b97"
  },
  {
    color1: "40128b",
    color2: "9336b4",
    color3: "dd58d6",
    color4: "ffe79b",
    url: "https://colorhunt.co/palette/40128b9336b4dd58d6ffe79b"
  },
  {
    color1: "faf4d0",
    color2: "c14545",
    color3: "ea4c4c",
    color4: "703b3b",
    url: "https://colorhunt.co/palette/faf4d0c14545ea4c4c703b3b"
  },
  {
    color1: "104455",
    color2: "0a3442",
    color3: "3ad3cd",
    color4: "7fffd6",
    url: "https://colorhunt.co/palette/1044550a34423ad3cd7fffd6"
  },
  {
    color1: "f9fcfd",
    color2: "c9eff9",
    color3: "07a4b5",
    color4: "fed8a7",
    url: "https://colorhunt.co/palette/f9fcfdc9eff907a4b5fed8a7"
  },
  {
    color1: "f5e965",
    color2: "ff9668",
    color3: "db456f",
    color4: "a74faf",
    url: "https://colorhunt.co/palette/f5e965ff9668db456fa74faf"
  },
  {
    color1: "f2f9f1",
    color2: "388e3c",
    color3: "8bc34a",
    color4: "ddeedf",
    url: "https://colorhunt.co/palette/f2f9f1388e3c8bc34addeedf"
  },
  {
    color1: "d9d9d9",
    color2: "e88a1a",
    color3: "cf3030",
    color4: "141414",
    url: "https://colorhunt.co/palette/d9d9d9e88a1acf3030141414"
  },
  {
    color1: "f6f7c1",
    color2: "bef0cb",
    color3: "d1fff3",
    color4: "c1aefc",
    url: "https://colorhunt.co/palette/f6f7c1bef0cbd1fff3c1aefc"
  },
  {
    color1: "5d1451",
    color2: "2f416d",
    color3: "14868c",
    color4: "94ceca",
    url: "https://colorhunt.co/palette/5d14512f416d14868c94ceca"
  },
  {
    color1: "f5f5f5",
    color2: "30e3ca",
    color3: "2f89fc",
    color4: "40514e",
    url: "https://colorhunt.co/palette/f5f5f530e3ca2f89fc40514e"
  },
  {
    color1: "c85c5c",
    color2: "f9975d",
    color3: "fbd148",
    color4: "b2ea70",
    url: "https://colorhunt.co/palette/c85c5cf9975dfbd148b2ea70"
  },
  {
    color1: "002c6a",
    color2: "e45171",
    color3: "f8a79b",
    color4: "f8d99b",
    url: "https://colorhunt.co/palette/002c6ae45171f8a79bf8d99b"
  },
  {
    color1: "7acfdf",
    color2: "f47645",
    color3: "f9ad8d",
    color4: "fde3d9",
    url: "https://colorhunt.co/palette/7acfdff47645f9ad8dfde3d9"
  },
  {
    color1: "e0fffb",
    color2: "29cdb5",
    color3: "008698",
    color4: "f39c9c",
    url: "https://colorhunt.co/palette/e0fffb29cdb5008698f39c9c"
  },
  {
    color1: "ffe3b7",
    color2: "840404",
    color3: "cb0101",
    color4: "ffaf00",
    url: "https://colorhunt.co/palette/ffe3b7840404cb0101ffaf00"
  },
  {
    color1: "f73d93",
    color2: "16003b",
    color3: "413f42",
    color4: "7f8487",
    url: "https://colorhunt.co/palette/f73d9316003b413f427f8487"
  },
  {
    color1: "d34848",
    color2: "ff8162",
    color3: "ffcd60",
    color4: "fffa67",
    url: "https://colorhunt.co/palette/d34848ff8162ffcd60fffa67"
  },
  {
    color1: "fdf1db",
    color2: "a6cb12",
    color3: "e00543",
    color4: "84253e",
    url: "https://colorhunt.co/palette/fdf1dba6cb12e0054384253e"
  },
  {
    color1: "092a35",
    color2: "658525",
    color3: "cfee91",
    color4: "f8eeb4",
    url: "https://colorhunt.co/palette/092a35658525cfee91f8eeb4"
  },
  {
    color1: "fff200",
    color2: "f5f5f5",
    color3: "d6e6f2",
    color4: "303841",
    url: "https://colorhunt.co/palette/fff200f5f5f5d6e6f2303841"
  },
  {
    color1: "fb0091",
    color2: "fb8691",
    color3: "fb9e91",
    color4: "fbda91",
    url: "https://colorhunt.co/palette/fb0091fb8691fb9e91fbda91"
  },
  {
    color1: "fac0e1",
    color2: "caa5f1",
    color3: "59d4e8",
    color4: "39bdc8",
    url: "https://colorhunt.co/palette/fac0e1caa5f159d4e839bdc8"
  },
  {
    color1: "004a2f",
    color2: "002f35",
    color3: "ff6337",
    color4: "ffa323",
    url: "https://colorhunt.co/palette/004a2f002f35ff6337ffa323"
  },
  {
    color1: "d9dd6b",
    color2: "ecefa4",
    color3: "d54c4c",
    color4: "8d2828",
    url: "https://colorhunt.co/palette/d9dd6becefa4d54c4c8d2828"
  },
  {
    color1: "dde8b9",
    color2: "e8d2ae",
    color3: "cb8589",
    color4: "796465",
    url: "https://colorhunt.co/palette/dde8b9e8d2aecb8589796465"
  },
  {
    color1: "002e94",
    color2: "083aa9",
    color3: "e1ceb5",
    color4: "ffe7cc",
    url: "https://colorhunt.co/palette/002e94083aa9e1ceb5ffe7cc"
  },
  {
    color1: "ff5ab0",
    color2: "f7fed4",
    color3: "4df4ff",
    color4: "1bb5ec",
    url: "https://colorhunt.co/palette/ff5ab0f7fed44df4ff1bb5ec"
  },
  {
    color1: "f3ecc8",
    color2: "78c2c3",
    color3: "3f6699",
    color4: "0d1b4c",
    url: "https://colorhunt.co/palette/f3ecc878c2c33f66990d1b4c"
  },
  {
    color1: "ffffe7",
    color2: "c6e5f3",
    color3: "539ddb",
    color4: "084a83",
    url: "https://colorhunt.co/palette/ffffe7c6e5f3539ddb084a83"
  },
  {
    color1: "314357",
    color2: "456672",
    color3: "e3b587",
    color4: "c98c70",
    url: "https://colorhunt.co/palette/314357456672e3b587c98c70"
  },
  {
    color1: "99f0ca",
    color2: "c9fdd7",
    color3: "fdffe7",
    color4: "8c7676",
    url: "https://colorhunt.co/palette/99f0cac9fdd7fdffe78c7676"
  },
  {
    color1: "ca5fa6",
    color2: "f36886",
    color3: "fa8282",
    color4: "ffaf65",
    url: "https://colorhunt.co/palette/ca5fa6f36886fa8282ffaf65"
  },
  {
    color1: "b5c99a",
    color2: "862b0d",
    color3: "fff9c9",
    color4: "ffc95f",
    url: "https://colorhunt.co/palette/b5c99a862b0dfff9c9ffc95f"
  },
  {
    color1: "dce8ba",
    color2: "f3d179",
    color3: "f09872",
    color4: "f46060",
    url: "https://colorhunt.co/palette/dce8baf3d179f09872f46060"
  },
  {
    color1: "ff487e",
    color2: "ff9776",
    color3: "ffd5be",
    color4: "ffedff",
    url: "https://colorhunt.co/palette/ff487eff9776ffd5beffedff"
  },
  {
    color1: "f79486",
    color2: "faf885",
    color3: "fcffc9",
    color4: "8ff5d2",
    url: "https://colorhunt.co/palette/f79486faf885fcffc98ff5d2"
  },
  {
    color1: "db3b61",
    color2: "ef3f61",
    color3: "3a3a59",
    color4: "555574",
    url: "https://colorhunt.co/palette/db3b61ef3f613a3a59555574"
  },
  {
    color1: "331940",
    color2: "5e366a",
    color3: "0cca98",
    color4: "00ffcc",
    url: "https://colorhunt.co/palette/3319405e366a0cca9800ffcc"
  },
  {
    color1: "38486f",
    color2: "584f84",
    color3: "876a96",
    color4: "d7c1e0",
    url: "https://colorhunt.co/palette/38486f584f84876a96d7c1e0"
  },
  {
    color1: "faf0d7",
    color2: "ffd9c0",
    color3: "8cc0de",
    color4: "cceebc",
    url: "https://colorhunt.co/palette/faf0d7ffd9c08cc0decceebc"
  },
  {
    color1: "423737",
    color2: "5d5d5d",
    color3: "00adb5",
    color4: "a3f7bf",
    url: "https://colorhunt.co/palette/4237375d5d5d00adb5a3f7bf"
  },
  {
    color1: "212125",
    color2: "239d60",
    color3: "a3de83",
    color4: "f7f39a",
    url: "https://colorhunt.co/palette/212125239d60a3de83f7f39a"
  },
  {
    color1: "90aeff",
    color2: "cefc86",
    color3: "60efb8",
    color4: "f9f7f7",
    url: "https://colorhunt.co/palette/90aeffcefc8660efb8f9f7f7"
  },
  {
    color1: "b8eef1",
    color2: "bf68f6",
    color3: "fd89dd",
    color4: "f0e48e",
    url: "https://colorhunt.co/palette/b8eef1bf68f6fd89ddf0e48e"
  },
  {
    color1: "fbeed7",
    color2: "ffba5a",
    color3: "ff7657",
    color4: "665c84",
    url: "https://colorhunt.co/palette/fbeed7ffba5aff7657665c84"
  },
  {
    color1: "222831",
    color2: "393e46",
    color3: "ff5722",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/222831393e46ff5722eeeeee"
  },
  {
    color1: "f0eeed",
    color2: "609ea2",
    color3: "c92c6d",
    color4: "332c39",
    url: "https://colorhunt.co/palette/f0eeed609ea2c92c6d332c39"
  },
  {
    color1: "5628b4",
    color2: "d80e70",
    color3: "e7455f",
    color4: "f7b236",
    url: "https://colorhunt.co/palette/5628b4d80e70e7455ff7b236"
  },
  {
    color1: "abc270",
    color2: "fec868",
    color3: "fda769",
    color4: "473c33",
    url: "https://colorhunt.co/palette/abc270fec868fda769473c33"
  },
  {
    color1: "fcf876",
    color2: "3797a4",
    color3: "8ccbbe",
    color4: "e4e4e4",
    url: "https://colorhunt.co/palette/fcf8763797a48ccbbee4e4e4"
  },
  {
    color1: "ffe0a3",
    color2: "e18237",
    color3: "943939",
    color4: "6a2634",
    url: "https://colorhunt.co/palette/ffe0a3e182379439396a2634"
  },
  {
    color1: "20716a",
    color2: "23a393",
    color3: "f4a9c7",
    color4: "fff78c",
    url: "https://colorhunt.co/palette/20716a23a393f4a9c7fff78c"
  },
  {
    color1: "deddfa",
    color2: "dab8f3",
    color3: "ea7ad7",
    color4: "ce0f3d",
    url: "https://colorhunt.co/palette/deddfadab8f3ea7ad7ce0f3d"
  },
  {
    color1: "fffcc1",
    color2: "fdeaab",
    color3: "cba1d2",
    color4: "ab72c0",
    url: "https://colorhunt.co/palette/fffcc1fdeaabcba1d2ab72c0"
  },
  {
    color1: "a3f7bf",
    color2: "29a19c",
    color3: "4b6289",
    color4: "60316e",
    url: "https://colorhunt.co/palette/a3f7bf29a19c4b628960316e"
  },
  {
    color1: "100720",
    color2: "31087b",
    color3: "fa2fb5",
    color4: "ffc23c",
    url: "https://colorhunt.co/palette/10072031087bfa2fb5ffc23c"
  },
  {
    color1: "4c4c6d",
    color2: "1b9c85",
    color3: "e8f6ef",
    color4: "ffe194",
    url: "https://colorhunt.co/palette/4c4c6d1b9c85e8f6efffe194"
  },
  {
    color1: "265961",
    color2: "227066",
    color3: "76a665",
    color4: "ffdd5c",
    url: "https://colorhunt.co/palette/26596122706676a665ffdd5c"
  },
  {
    color1: "ffd369",
    color2: "e26241",
    color3: "940a37",
    color4: "5b0909",
    url: "https://colorhunt.co/palette/ffd369e26241940a375b0909"
  },
  {
    color1: "f15412",
    color2: "000000",
    color3: "34b3f1",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/f1541200000034b3f1eeeeee"
  },
  {
    color1: "152744",
    color2: "367591",
    color3: "61d2b4",
    color4: "9dfdc7",
    url: "https://colorhunt.co/palette/15274436759161d2b49dfdc7"
  },
  {
    color1: "5d414d",
    color2: "7e858b",
    color3: "abd4c1",
    color4: "e5f6c6",
    url: "https://colorhunt.co/palette/5d414d7e858babd4c1e5f6c6"
  },
  {
    color1: "ffeed0",
    color2: "f79f24",
    color3: "f12d2d",
    color4: "7c064d",
    url: "https://colorhunt.co/palette/ffeed0f79f24f12d2d7c064d"
  },
  {
    color1: "230444",
    color2: "90303d",
    color3: "ed8240",
    color4: "d2ebe9",
    url: "https://colorhunt.co/palette/23044490303ded8240d2ebe9"
  },
  {
    color1: "fde5ec",
    color2: "fcbaad",
    color3: "e48586",
    color4: "916db3",
    url: "https://colorhunt.co/palette/fde5ecfcbaade48586916db3"
  },
  {
    color1: "feff86",
    color2: "b0daff",
    color3: "19a7ce",
    color4: "146c94",
    url: "https://colorhunt.co/palette/feff86b0daff19a7ce146c94"
  },
  {
    color1: "1b435d",
    color2: "78bbe6",
    color3: "d5eeff",
    color4: "ff895d",
    url: "https://colorhunt.co/palette/1b435d78bbe6d5eeffff895d"
  },
  {
    color1: "c8e4b2",
    color2: "9ed2be",
    color3: "7eaa92",
    color4: "ffd9b7",
    url: "https://colorhunt.co/palette/c8e4b29ed2be7eaa92ffd9b7"
  },
  {
    color1: "007ab5",
    color2: "005a85",
    color3: "004262",
    color4: "d8e6ec",
    url: "https://colorhunt.co/palette/007ab5005a85004262d8e6ec"
  },
  {
    color1: "aac8a7",
    color2: "c3edc0",
    color3: "e9ffc2",
    color4: "fdffae",
    url: "https://colorhunt.co/palette/aac8a7c3edc0e9ffc2fdffae"
  },
  {
    color1: "61f2f5",
    color2: "ffffff",
    color3: "e0e0e0",
    color4: "723881",
    url: "https://colorhunt.co/palette/61f2f5ffffffe0e0e0723881"
  },
  {
    color1: "be0eaa",
    color2: "ea2ba2",
    color3: "fb9696",
    color4: "f6ca97",
    url: "https://colorhunt.co/palette/be0eaaea2ba2fb9696f6ca97"
  },
  {
    color1: "42b883",
    color2: "347474",
    color3: "35495e",
    color4: "ff7e67",
    url: "https://colorhunt.co/palette/42b88334747435495eff7e67"
  },
  {
    color1: "512c96",
    color2: "3c6f9c",
    color3: "dd6892",
    color4: "f9c6ba",
    url: "https://colorhunt.co/palette/512c963c6f9cdd6892f9c6ba"
  },
  {
    color1: "7149c6",
    color2: "fc2947",
    color3: "fe6244",
    color4: "ffdeb9",
    url: "https://colorhunt.co/palette/7149c6fc2947fe6244ffdeb9"
  },
  {
    color1: "f75940",
    color2: "334252",
    color3: "364857",
    color4: "3dc7be",
    url: "https://colorhunt.co/palette/f759403342523648573dc7be"
  },
  {
    color1: "cb9b42",
    color2: "b1d1c5",
    color3: "f2f3ee",
    color4: "dbd7cb",
    url: "https://colorhunt.co/palette/cb9b42b1d1c5f2f3eedbd7cb"
  },
  {
    color1: "f4f7ed",
    color2: "86ee60",
    color3: "2e6e65",
    color4: "2b3752",
    url: "https://colorhunt.co/palette/f4f7ed86ee602e6e652b3752"
  },
  {
    color1: "353941",
    color2: "26282b",
    color3: "5f85db",
    color4: "90b8f8",
    url: "https://colorhunt.co/palette/35394126282b5f85db90b8f8"
  },
  {
    color1: "003459",
    color2: "028090",
    color3: "02c39a",
    color4: "fce38a",
    url: "https://colorhunt.co/palette/00345902809002c39afce38a"
  },
  {
    color1: "ff1f5a",
    color2: "ffd615",
    color3: "f9ff21",
    color4: "1e2a78",
    url: "https://colorhunt.co/palette/ff1f5affd615f9ff211e2a78"
  },
  {
    color1: "0081b4",
    color2: "fad3e7",
    color3: "efa3c8",
    color4: "f4d9e7",
    url: "https://colorhunt.co/palette/0081b4fad3e7efa3c8f4d9e7"
  },
  {
    color1: "f4f4ec",
    color2: "76e2f4",
    color3: "615dec",
    color4: "301781",
    url: "https://colorhunt.co/palette/f4f4ec76e2f4615dec301781"
  },
  {
    color1: "fffeec",
    color2: "aeddcd",
    color3: "e4508f",
    color4: "556fb5",
    url: "https://colorhunt.co/palette/fffeecaeddcde4508f556fb5"
  },
  {
    color1: "a13939",
    color2: "e75151",
    color3: "fcc88a",
    color4: "c2c57f",
    url: "https://colorhunt.co/palette/a13939e75151fcc88ac2c57f"
  },
  {
    color1: "6900ff",
    color2: "9951ff",
    color3: "ffd700",
    color4: "faf7ff",
    url: "https://colorhunt.co/palette/6900ff9951ffffd700faf7ff"
  },
  {
    color1: "a8df8e",
    color2: "f3fde8",
    color3: "ffe5e5",
    color4: "ffbfbf",
    url: "https://colorhunt.co/palette/a8df8ef3fde8ffe5e5ffbfbf"
  },
  {
    color1: "fd5959",
    color2: "ff9c6d",
    color3: "fcff82",
    color4: "afc5ff",
    url: "https://colorhunt.co/palette/fd5959ff9c6dfcff82afc5ff"
  },
  {
    color1: "e4f2f0",
    color2: "99d8d0",
    color3: "70416d",
    color4: "170a19",
    url: "https://colorhunt.co/palette/e4f2f099d8d070416d170a19"
  },
  {
    color1: "0c4762",
    color2: "51dacf",
    color3: "9ef5cf",
    color4: "f4eeee",
    url: "https://colorhunt.co/palette/0c476251dacf9ef5cff4eeee"
  },
  {
    color1: "343434",
    color2: "055e68",
    color3: "62a388",
    color4: "b9d2d2",
    url: "https://colorhunt.co/palette/343434055e6862a388b9d2d2"
  },
  {
    color1: "ff9090",
    color2: "ffcf7f",
    color3: "fffa62",
    color4: "89c4ff",
    url: "https://colorhunt.co/palette/ff9090ffcf7ffffa6289c4ff"
  },
  {
    color1: "6a759b",
    color2: "21273d",
    color3: "b9d4f1",
    color4: "f1f6f8",
    url: "https://colorhunt.co/palette/6a759b21273db9d4f1f1f6f8"
  },
  {
    color1: "f1f6f5",
    color2: "9ef4e6",
    color3: "12cc94",
    color4: "6088bb",
    url: "https://colorhunt.co/palette/f1f6f59ef4e612cc946088bb"
  },
  {
    color1: "eeeeee",
    color2: "59569d",
    color3: "f25292",
    color4: "fea096",
    url: "https://colorhunt.co/palette/eeeeee59569df25292fea096"
  },
  {
    color1: "87e5da",
    color2: "92a4c0",
    color3: "f4adad",
    color4: "e58cdb",
    url: "https://colorhunt.co/palette/87e5da92a4c0f4adade58cdb"
  },
  {
    color1: "e3c4a8",
    color2: "4592af",
    color3: "226089",
    color4: "000000",
    url: "https://colorhunt.co/palette/e3c4a84592af226089000000"
  },
  {
    color1: "eaefc4",
    color2: "9bdf46",
    color3: "25a55f",
    color4: "346473",
    url: "https://colorhunt.co/palette/eaefc49bdf4625a55f346473"
  },
  {
    color1: "df0e62",
    color2: "fac70b",
    color3: "127681",
    color4: "21174a",
    url: "https://colorhunt.co/palette/df0e62fac70b12768121174a"
  },
  {
    color1: "f2f4c0",
    color2: "e4e978",
    color3: "cad315",
    color4: "d37815",
    url: "https://colorhunt.co/palette/f2f4c0e4e978cad315d37815"
  },
  {
    color1: "33313b",
    color2: "3c4f65",
    color3: "834c69",
    color4: "e6f5ff",
    url: "https://colorhunt.co/palette/33313b3c4f65834c69e6f5ff"
  },
  {
    color1: "eafbea",
    color2: "6f9a8d",
    color3: "1f6650",
    color4: "ea5e5e",
    url: "https://colorhunt.co/palette/eafbea6f9a8d1f6650ea5e5e"
  },
  {
    color1: "dffcb5",
    color2: "b7f5de",
    color3: "add1fc",
    color4: "9870fc",
    url: "https://colorhunt.co/palette/dffcb5b7f5deadd1fc9870fc"
  },
  {
    color1: "e5f1e3",
    color2: "a3cd9e",
    color3: "529471",
    color4: "35635b",
    url: "https://colorhunt.co/palette/e5f1e3a3cd9e52947135635b"
  },
  {
    color1: "e9007f",
    color2: "7cdfff",
    color3: "d5fffb",
    color4: "fcffc8",
    url: "https://colorhunt.co/palette/e9007f7cdfffd5fffbfcffc8"
  },
  {
    color1: "f185b3",
    color2: "d52484",
    color3: "90007f",
    color4: "3d0043",
    url: "https://colorhunt.co/palette/f185b3d5248490007f3d0043"
  },
  {
    color1: "421b9b",
    color2: "a06ee1",
    color3: "cbbcf6",
    color4: "cef9e2",
    url: "https://colorhunt.co/palette/421b9ba06ee1cbbcf6cef9e2"
  },
  {
    color1: "432160",
    color2: "ff7a5a",
    color3: "50e3c2",
    color4: "fcf4d9",
    url: "https://colorhunt.co/palette/432160ff7a5a50e3c2fcf4d9"
  },
  {
    color1: "fd5f00",
    color2: "00204a",
    color3: "005792",
    color4: "d9faff",
    url: "https://colorhunt.co/palette/fd5f0000204a005792d9faff"
  },
  {
    color1: "92e6e6",
    color2: "fff9af",
    color3: "d65d7a",
    color4: "524c84",
    url: "https://colorhunt.co/palette/92e6e6fff9afd65d7a524c84"
  },
  {
    color1: "362fd9",
    color2: "3c84ab",
    color3: "85cdfd",
    color4: "defcf9",
    url: "https://colorhunt.co/palette/362fd93c84ab85cdfddefcf9"
  },
  {
    color1: "360982",
    color2: "b72a67",
    color3: "ff9797",
    color4: "fde8cb",
    url: "https://colorhunt.co/palette/360982b72a67ff9797fde8cb"
  },
  {
    color1: "3e3e3e",
    color2: "405559",
    color3: "68868c",
    color4: "ededed",
    url: "https://colorhunt.co/palette/3e3e3e40555968868cededed"
  },
  {
    color1: "415f77",
    color2: "d1e9ea",
    color3: "fc5050",
    color4: "ffd00c",
    url: "https://colorhunt.co/palette/415f77d1e9eafc5050ffd00c"
  },
  {
    color1: "edffea",
    color2: "75daad",
    color3: "216353",
    color4: "7a4d1d",
    url: "https://colorhunt.co/palette/edffea75daad2163537a4d1d"
  },
  {
    color1: "4a304d",
    color2: "b17179",
    color3: "ffb37b",
    color4: "fff199",
    url: "https://colorhunt.co/palette/4a304db17179ffb37bfff199"
  },
  {
    color1: "faf1e4",
    color2: "cedebd",
    color3: "9eb384",
    color4: "435334",
    url: "https://colorhunt.co/palette/faf1e4cedebd9eb384435334"
  },
  {
    color1: "fff3da",
    color2: "dfccfb",
    color3: "d0bfff",
    color4: "beadfa",
    url: "https://colorhunt.co/palette/fff3dadfccfbd0bfffbeadfa"
  },
  {
    color1: "040d12",
    color2: "183d3d",
    color3: "5c8374",
    color4: "93b1a6",
    url: "https://colorhunt.co/palette/040d12183d3d5c837493b1a6"
  },
  {
    color1: "a8df8e",
    color2: "f3fde8",
    color3: "ffe5e5",
    color4: "ffbfbf",
    url: "https://colorhunt.co/palette/a8df8ef3fde8ffe5e5ffbfbf"
  },
  {
    color1: "352f44",
    color2: "5c5470",
    color3: "b9b4c7",
    color4: "faf0e6",
    url: "https://colorhunt.co/palette/352f445c5470b9b4c7faf0e6"
  },
  {
    color1: "9a3b3b",
    color2: "c08261",
    color3: "e2c799",
    color4: "f2ecbe",
    url: "https://colorhunt.co/palette/9a3b3bc08261e2c799f2ecbe"
  },
  {
    color1: "e19898",
    color2: "a2678a",
    color3: "4d3c77",
    color4: "3f1d38",
    url: "https://colorhunt.co/palette/e19898a2678a4d3c773f1d38"
  },
  {
    color1: "313866",
    color2: "504099",
    color3: "974ec3",
    color4: "fe7be5",
    url: "https://colorhunt.co/palette/313866504099974ec3fe7be5"
  },
  {
    color1: "94a684",
    color2: "aec3ae",
    color3: "e4e4d0",
    color4: "ffeef4",
    url: "https://colorhunt.co/palette/94a684aec3aee4e4d0ffeef4"
  },
  {
    color1: "fff5e0",
    color2: "ff6969",
    color3: "bb2525",
    color4: "141e46",
    url: "https://colorhunt.co/palette/fff5e0ff6969bb2525141e46"
  },
  {
    color1: "191d88",
    color2: "1450a3",
    color3: "337ccf",
    color4: "ffc436",
    url: "https://colorhunt.co/palette/191d881450a3337ccfffc436"
  },
  {
    color1: "fbf0b2",
    color2: "ffc7ea",
    color3: "d8b4f8",
    color4: "caedff",
    url: "https://colorhunt.co/palette/fbf0b2ffc7ead8b4f8caedff"
  },
  {
    color1: "79155b",
    color2: "c23373",
    color3: "f6635c",
    color4: "ffba86",
    url: "https://colorhunt.co/palette/79155bc23373f6635cffba86"
  },
  {
    color1: "0c356a",
    color2: "279eff",
    color3: "40f8ff",
    color4: "d5ffd0",
    url: "https://colorhunt.co/palette/0c356a279eff40f8ffd5ffd0"
  },
  {
    color1: "614bc3",
    color2: "33bbc5",
    color3: "85e6c5",
    color4: "c8ffe0",
    url: "https://colorhunt.co/palette/614bc333bbc585e6c5c8ffe0"
  },
  {
    color1: "ebe76c",
    color2: "f0b86e",
    color3: "ed7b7b",
    color4: "836096",
    url: "https://colorhunt.co/palette/ebe76cf0b86eed7b7b836096"
  },
  {
    color1: "ffbb5c",
    color2: "ff9b50",
    color3: "e25e3e",
    color4: "c63d2f",
    url: "https://colorhunt.co/palette/ffbb5cff9b50e25e3ec63d2f"
  },
  {
    color1: "053b50",
    color2: "176b87",
    color3: "64ccc5",
    color4: "eeeeee",
    url: "https://colorhunt.co/palette/053b50176b8764ccc5eeeeee"
  },
  {
    color1: "96c291",
    color2: "ffdbaa",
    color3: "ffb7b7",
    color4: "f4eeee",
    url: "https://colorhunt.co/palette/96c291ffdbaaffb7b7f4eeee"
  },
  {
    color1: "0e21a0",
    color2: "4d2db7",
    color3: "9d44c0",
    color4: "ec53b0",
    url: "https://colorhunt.co/palette/0e21a04d2db79d44c0ec53b0"
  },
  {
    color1: "952323",
    color2: "a73121",
    color3: "dad4b5",
    color4: "f2e8c6",
    url: "https://colorhunt.co/palette/952323a73121dad4b5f2e8c6"
  },
  {
    color1: "016a70",
    color2: "ffffdd",
    color3: "d2de32",
    color4: "a2c579",
    url: "https://colorhunt.co/palette/016a70ffffddd2de32a2c579"
  },
  {
    color1: "793fdf",
    color2: "7091f5",
    color3: "97fff4",
    color4: "fffd8c",
    url: "https://colorhunt.co/palette/793fdf7091f597fff4fffd8c"
  },
  {
    color1: "45ffca",
    color2: "feffac",
    color3: "ffb6d9",
    color4: "d67bff",
    url: "https://colorhunt.co/palette/45ffcafeffacffb6d9d67bff"
  },
  {
    color1: "ef9595",
    color2: "efb495",
    color3: "efd595",
    color4: "ebef95",
    url: "https://colorhunt.co/palette/ef9595efb495efd595ebef95"
  },
  {
    color1: "27005d",
    color2: "9400ff",
    color3: "aed2ff",
    color4: "e4f1ff",
    url: "https://colorhunt.co/palette/27005d9400ffaed2ffe4f1ff"
  },
  {
    color1: "ffa1f5",
    color2: "bc7af9",
    color3: "f8ff95",
    color4: "a6ff96",
    url: "https://colorhunt.co/palette/ffa1f5bc7af9f8ff95a6ff96"
  },
  {
    color1: "f0f0f0",
    color2: "213555",
    color3: "4f709c",
    color4: "e5d283",
    url: "https://colorhunt.co/palette/f0f0f02135554f709ce5d283"
  },
  {
    color1: "57375d",
    color2: "ff3fa4",
    color3: "ff9b82",
    color4: "ffc8c8",
    url: "https://colorhunt.co/palette/57375dff3fa4ff9b82ffc8c8"
  },
  {
    color1: "f8f0e5",
    color2: "eadbc8",
    color3: "dac0a3",
    color4: "0f2c59",
    url: "https://colorhunt.co/palette/f8f0e5eadbc8dac0a30f2c59"
  }
];
function fc(_) {
  let P = "";
  return _.indexOf("_") > 0 ? _.replace(/[a-z]/g, "").length == _.length ? P = _.split(/_/).reduce((t, S) => t + S.charAt(0) + S.substring(1).toLowerCase() + " ", "").trim() : P = _.replace(/_/g, " ").trim() : (P = _.replace(/([A-Z])/g, " $1").trim(), P = P.charAt(0).toUpperCase() + P.substring(1).trim()), P;
}
function Yo(_, P) {
  let t = Object.keys(_).filter((l) => !P.includes(l)), S = [];
  return t.reduce((l, a) => (l.push({
    label: a,
    text: fc(a)
  }), l), S);
}
const ac = function(_, P, t, S = []) {
  let b;
  if (typeof _ == "object" && Array.isArray(_))
    if (_.length > 0)
      if (Array.isArray(_[0])) {
        let l = [];
        for (let a = 0; a < _.length; a++) {
          const e = _[a];
          if (e.length > 0) {
            const n = Yo(e[0], S);
            l.push({
              headers: n,
              data: e
            });
          }
        }
        b = {
          sheet: l
        };
      } else
        _.length > 0 ? b = {
          sheet: [
            {
              headers: Yo(_[0], S),
              data: _
            }
          ]
        } : b = {
          sheet: []
        };
    else
      b = {
        sheet: []
      };
  else
    b = _;
  if (P < Ko.length) {
    let l = "color" + (t && t.rIndex ? t.rIndex : 4).toString(), a = "color" + (t && t.hIndex ? t.hIndex : 1).toString(), e = Ko[P], n = e[a], p = e[l], v;
    t != null && t.hColor ? v = t == null ? void 0 : t.hColor : v = t && t.nColor ? Go(n) : Vo(n);
    let g;
    t != null && t.rColor ? g = t == null ? void 0 : t.rColor : g = t && t.nColor ? Go(p) : Vo(p), typeof b.styles > "u" && (b.styles = {}), b.styles.themeStyleHeader = {
      backgroundColor: n,
      color: v
    }, b.styles.themeStyleBody = {
      backgroundColor: p,
      color: g
    };
    const w = b.sheet.length;
    for (let f = 0; f < w; f++)
      b.sheet[f].styleCellCondition = function(s, c, h, d, m, k) {
        return m ? "themeStyleHeader" : "themeStyleBody";
      };
  }
  return typeof (t == null ? void 0 : t.fieName) == "string" && (b.fileName = t.fieName), b;
};
function dc(_, P, t, S, b, l, a, e) {
  let n = [], p = "both", v = [];
  !P || P === 0 ? (P = 1, p = "col") : v.push(P - 1), !_ || _ === 0 ? (_ = 0, p = "row") : v.push(_ - 1);
  let g = b || {};
  g.mergeType = e && e.mergeType ? [...e.mergeType, p] : [p], g.mergeValue = e && e.mergeValue ? [...e.mergeValue, v] : [v], g.mergeStart = e && e.mergeStart ? [...e.mergeStart, t] : [t];
  for (let w = 0; w < P; w++) {
    let f = _;
    for (let s = 0; s < S; s++)
      t <= s ? f >= 1 ? (g["c" + s] = l, l = "", a += "*", f--) : P >= 2 && t == s ? (g["c" + s] = l, l = "", a += "+") : a += "-" : w > 0 && (a += "-");
    n.push({
      ...g,
      mergeString: a
    }), g = {}, a = "";
  }
  return n;
}
function nc(_, P, t, S, b) {
  var g;
  if (!_ && !P)
    throw "Error: One of the function inputs is required.";
  let l;
  _ ? l = (g = document.querySelector(_)) == null ? void 0 : g.querySelectorAll("tr") : l = P == null ? void 0 : P.querySelectorAll("tr");
  let a = [], e = [], n = {
    header: {},
    rows: []
  }, p = 40;
  if (l) {
    let w = !1, f = 0;
    l.forEach((s, c) => {
      var h = [].slice.call(s.children);
      const d = window.getComputedStyle(s, null);
      let m = Fo(d.backgroundColor);
      if (!w)
        f = h.length, w = !0, typeof S == "function" ? p = S(
          Number(d.height.substring(0, d.height.length - 2)),
          c,
          !0
        ) : p = Number(
          d.height.substring(0, d.height.length - 2)
        ), h.forEach((k, F) => {
          let C = window.getComputedStyle(k, null), B = null;
          C.borderBottomWidth !== "0px" && (B || (B = {}), B.bottom = {
            style: "thin",
            color: Fo(C.borderBottomColor)
          }), C.borderTopWidth !== "0px" && (B || (B = {}), B.top = {
            style: "thin",
            color: Fo(C.borderTopColor)
          }), C.borderLeftWidth !== "0px" && (B || (B = {}), B.left = {
            style: "thin",
            color: Fo(C.borderLeftColor)
          }), C.borderRightWidth !== "0px" && (B || (B = {}), B.right = {
            style: "thin",
            color: Fo(C.borderRightColor)
          });
          let z = Fo(C.backgroundColor);
          !z && m && (z = m);
          let N = {
            ...z ? { backgroundColor: z } : {},
            bold: parseInt(C.fontWeight) > 500,
            size: parseInt(
              C.fontSize.substring(0, C.fontSize.indexOf("p"))
            ),
            ...B ? { border: B } : {},
            alignment: {
              horizontal: C.textAlign,
              vertical: "center",
              ...C.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          n.header[c + "-" + F] = N;
          let E;
          typeof b == "function" ? E = b(
            Number(C.width.substring(0, C.width.length - 2)),
            F
          ) : E = Number(C.width.substring(0, C.width.length - 2)) * 0.15, a.push({
            label: "c" + F,
            colspan: k.getAttribute("colspan"),
            rowspan: k.getAttribute("rowspan"),
            text: k.textContent,
            size: E
          });
        });
      else {
        let k = {}, F = "", C = !1;
        e.length >= c && (k = e[c - 1], F = "mergeString" in k ? k.mergeString : "", C = !0);
        let B = 0;
        h.forEach((z, N) => {
          if ("c" + (N + B) in k)
            for (let R = 0; R <= f + 1 && "c" + (N + R) in k; R++)
              B++;
          N += B;
          let E = window.getComputedStyle(z, null);
          if (z.getAttribute("colspan") || z.getAttribute("rowspan")) {
            let R = dc(
              z.getAttribute("colspan") * 1,
              z.getAttribute("rowspan") * 1,
              N,
              f,
              k,
              z.textContent,
              F,
              k
            );
            e.length < c ? e.push(...R) : R.forEach((r, j) => {
              e.length < c + j ? e.push(...R) : e[c + j] = {
                ...e[c + j],
                ...r
              };
            }), k = R[0], F = R[0].mergeString, C = !0;
          } else
            C || (F += "-");
          let $ = null;
          E.borderBottomWidth !== "0px" && ($ || ($ = {}), $.bottom = {
            style: "thin",
            color: Fo(E.borderBottomColor)
          }), E.borderTopWidth !== "0px" && ($ || ($ = {}), $.top = {
            style: "thin",
            color: Fo(E.borderTopColor)
          }), E.borderLeftWidth !== "0px" && ($ || ($ = {}), $.left = {
            style: "thin",
            color: Fo(E.borderLeftColor)
          }), E.borderRightWidth !== "0px" && ($ || ($ = {}), $.right = {
            style: "thin",
            color: Fo(E.borderRightColor)
          });
          let J = Fo(E.backgroundColor);
          !J && m && (J = m);
          let x = {
            ...J ? { backgroundColor: J } : {},
            bold: parseInt(E.fontWeight) > 500,
            size: parseInt(
              E.fontSize.substring(0, E.fontSize.indexOf("p"))
            ),
            ...$ ? { border: $ } : {},
            // backgroundColor: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: E.textAlign,
              vertical: "center",
              direction: E.direction,
              ...E.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          n.header[c + "-" + N] = x, k["c" + N] = z.textContent;
        }), typeof S == "function" ? k.height = S(
          Number(d.height.substring(0, d.height.length - 2)),
          c,
          !1
        ) : k.height = d.height.substring(0, d.height.length - 2), e.length < c ? e.push(k) : e[c - 1] = k;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: n.header,
    sheet: [
      {
        headerHeight: p,
        styleCellCondition: function(w, f, s, c, h, d) {
          return t ? d.includes(c - 1 + "-" + s) ? c - 1 + "-" + s : "" : null;
        },
        data: e,
        headers: a
      }
    ]
  };
}
function Wo(_, P, t = "", S = [], b = 0) {
  const l = _.length;
  for (let a = 0; a < l; a++)
    S.push(t + _[a]);
  return P < S.length ? S : Wo(
    _,
    P,
    S[b + 1],
    S,
    b + 1
  );
}
function hc(_, P) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (_.format.count > 0 ? '<numFmts count="' + _.format.count + '">' + _.format.value + "</numFmts>" : "") + ' <fonts count="' + _.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + _.font.value + ' </fonts> <fills count="' + _.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + _.fill.value + ' </fills> <borders count="' + _.border.count + '"> <border />' + _.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + _.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + _.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> ' + (P ? '<dxfs count="' + _.conditinalFormating.count + '" >' + _.conditinalFormating.value + "</dxfs>" : '<dxfs count="0" />') + " </styleSheet>";
}
function sc(_, P, t, S) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/> <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /> <Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + t.reduce((b, l) => l == "svg" ? b + '<Default Extension="png" ContentType="image/png"/> <Default Extension="svg" ContentType="image/svg+xml"/>' : l == "jpeg" || l == "jpg" ? b + '<Default Extension="' + l + '" ContentType="image/jpeg"/>' : b + '<Default Extension="' + l + '" ContentType="image/' + l + '" />', "") + P.reduce((b, l) => b + '<Override PartName="/xl/comments' + l + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />', "") + _ + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' + S.reduce((b, l) => b + '<Override PartName="/xl/drawings/' + l + '" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />', "") + ' <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function uc(_, P) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + _ + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + _ + '" baseType="lpstr"> ' + P + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function Lo(_, P, t) {
  let S = _.replace(/[0-9]/g, ""), b = parseInt(_.substr(S.length)), l = '<c r="' + _ + '" ' + (t && typeof P.styleId == "string" && t[P.styleId] ? 's="' + t[P.styleId].index + '" ' : "") + ">     <f>" + P.type + "(" + P.start + ":" + P.end + ")</f> </c>";
  return {
    column: S,
    row: b,
    cell: l
  };
}
function jo(_, P, t) {
  let S = !1, b, l;
  if (typeof _ == "object") {
    if ("author" in _ && _.author && (S = !0, l = _.author), "styleId" in _ && typeof _.styleId == "string") {
      let a = P[_.styleId];
      typeof a == "string" && (t = a);
    }
    b = "comment" in _ && typeof _.comment == "string" ? Xo(_.comment) : [""];
  } else
    b = _ ? Xo(_) : [""];
  return S && b.unshift(l + ":"), {
    hasAuthour: S,
    author: l,
    commentStyl: t,
    commentStr: b
  };
}
function Xo(_) {
  var P = _.split(/\r?\n|\r|\n/g);
  return P;
}
function Uo(_, P, t, S) {
  let b = '<comment ref="' + _ + '" authorId="' + Math.max(0, S - 1) + '" shapeId="0"> <text>', l = "";
  return P.forEach((a, e) => {
    let n = "";
    if (a.length == 0) {
      l += `
`;
      return;
    }
    e > 0 && (n = 'xml:space="preserve"', l += `
`), b += "<r>" + t + "<t " + n + " >" + l + a + "</t></r>", l = "";
  }), b += "</text></comment>", b;
}
const bc = '<rPr> <b /> <sz val="9" /> <color rgb="000000" /> <rFont val="Tahoma" /></rPr>', Ro = function(_) {
  return _.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};
function Bo(_, P) {
  let t = {
    result: [],
    str: P
  }, S = _.reduce((b, l) => {
    let a = b.str.indexOf(l);
    return b.result.push(b.str.substring(0, a)), b.str = b.str.substring(a + l.length), b;
  }, t);
  return S.result.push(S.str), S.result;
}
function Jo(_, P, t, S, b, l, a, e, n) {
  if (S) {
    let p = [], v = [], g = [];
    const w = l.length;
    b.forEach((f, s) => {
      let c;
      try {
        c = f.match(_);
      } catch (h) {
        if (typeof _ == "string")
          c = f.match("\\" + _);
        else
          throw h;
      }
      if (c)
        if (e) {
          let h;
          n ? h = Bo(c, f) : h = f.split(_), p.push(...h), v.push(...c), g.push(
            ...c.reduce((d, m) => [...d, P], [])
          );
        } else {
          let h;
          n ? h = Bo(c, f) : h = f.split(_).reduce((d, m, k) => k >= 2 ? (d[1] += _ + m, d) : [...d, m], []), p.push(...h), g.push(P), v.push(_.toString());
        }
      else
        p.push(f);
      w > s && (v.push(l[s]), g.push(a[s]));
    }), b = p, l = v, a = g;
  } else {
    let p;
    try {
      p = t.match(_);
    } catch (v) {
      if (typeof _ == "string")
        p = t.match("\\" + _);
      else
        throw v;
    }
    p ? e ? (l.push(...p), a.push(
      ...p.reduce((v, g) => [...v, P], [])
    ), n ? b = Bo(p, t) : b = t.split(_)) : (l.push(_.toString()), a.push(P), n ? b = Bo(p, t) : b = t.split(_).reduce((v, g, w) => w >= 2 ? (v[1] += _ + g, v) : [...v, g], [])) : b.push(t), S = !0;
  }
  return {
    v: _,
    text: t,
    textSplited: S,
    splitValue: b,
    matchValue: l,
    styleMatchValue: a
  };
}
function $o(_, P, t, S, b) {
  if (typeof _ == "object") {
    let l = "", a = [], e = [], n = [], p = !1;
    if (Object.keys(_).forEach((f) => {
      const s = _[f];
      if (f !== "reg") {
        let c = Jo(
          f,
          typeof s == "string" ? s : "",
          P,
          p,
          n,
          a,
          e,
          !1,
          b
        );
        p = c.textSplited, n = c.splitValue, a = c.matchValue, e = c.styleMatchValue;
      }
    }), "reg" in _ && Array.isArray(_.reg)) {
      const f = _.reg.length;
      for (let s = 0; s < f; s++) {
        const c = _.reg[s];
        if ("reg" in c && "styleId" in c) {
          typeof c.reg == "string" && (c.reg = new RegExp(c.reg, "g"));
          let h = Jo(
            c.reg,
            c.styleId,
            P,
            p,
            n,
            a,
            e,
            !0,
            b
          );
          p = h.textSplited, n = h.splitValue, a = h.matchValue, e = h.styleMatchValue;
        }
      }
    }
    const g = n.length - 1, w = S in t ? t[S] : "";
    for (let f = 0; f < g; f++) {
      const s = n[f], c = a[f], h = e[f];
      s.length > 0 && (l += "<r> " + w + ' <t xml:space="preserve">' + s + "</t></r>"), c.length > 0 && (l += " <r> " + t[h] + ' <t xml:space="preserve">' + c + "</t> </r>");
    }
    return n[g].length > 0 ? l = "<si>" + l + "<r>" + w + "<t>" + Ro(n[g]) + "</t></r></si>" : l = "<si>" + l + "</si>", l;
  } else
    return "<si><t>" + Ro(P) + "</t></si>";
}
const pc = {
  time: {
    key: 165,
    value: '<numFmt numFmtId="165" formatCode="[$-F400]h:mm:ss\\ AM/PM" />'
  },
  date: {
    key: 187,
    value: '<numFmt numFmtId="187" formatCode="[$-F800]dddd\\,\\ mmmm\\ dd\\,\\ yyyy" />'
  },
  short_date: {
    key: 14
  },
  fraction: {
    key: 13
  },
  percentage: {
    key: 9
  },
  float_1: { key: 180, value: '<numFmt numFmtId="180" formatCode="0.0" />' },
  float_2: { key: 181, value: '<numFmt numFmtId="181" formatCode="0.00" />' },
  float_3: {
    key: 164,
    value: '<numFmt numFmtId="164" formatCode="0.000" />'
  },
  float_4: {
    key: 182,
    value: '<numFmt numFmtId="182" formatCode="0.0000" />'
  },
  dollar_2: {
    key: 183,
    value: '<numFmt numFmtId="183" formatCode="&quot;$&quot;#,##0.00" />'
  },
  num_sep: {
    key: 184,
    value: '<numFmt numFmtId="184" formatCode="#,##0" />'
  },
  num_sep_1: {
    key: 185,
    value: '<numFmt numFmtId="185" formatCode="#,##0.0" />'
  },
  num_sep_2: {
    key: 186,
    value: '<numFmt numFmtId="186" formatCode="#,##0.00" />'
  },
  dollar: {
    key: 163,
    value: '<numFmt numFmtId="163" formatCode="_([$$-409]* #,##0.00_);_([$$-409]* \\(#,##0.00\\);_([$$-409]* &quot;-&quot;??_);_(@_)" />'
  },
  $: {
    key: 163,
    value: '<numFmt numFmtId="163" formatCode="_([$$-409]* #,##0.00_);_([$$-409]* \\(#,##0.00\\);_([$$-409]* &quot;-&quot;??_);_(@_)" />'
  },
  pound: {
    key: 162,
    value: '<numFmt numFmtId="162" formatCode="_-[$£-809]* #,##0.00_-;\\-[$£-809]* #,##0.00_-;_-[$£-809]* &quot;-&quot;??_-;_-@_-" />'
  },
  "£": {
    key: 162,
    value: '<numFmt numFmtId="162" formatCode="_-[$£-809]* #,##0.00_-;\\-[$£-809]* #,##0.00_-;_-[$£-809]* &quot;-&quot;??_-;_-@_-" />'
  },
  euro: {
    key: 161,
    value: '<numFmt numFmtId="161" formatCode="_([$€-2]\\ * #,##0.00_);_([$€-2]\\ * \\(#,##0.00\\);_([$€-2]\\ * &quot;-&quot;??_);_(@_)" />'
  },
  "€": {
    key: 161,
    value: '<numFmt numFmtId="161" formatCode="_([$€-2]\\ * #,##0.00_);_([$€-2]\\ * \\(#,##0.00\\);_([$€-2]\\ * &quot;-&quot;??_);_(@_)" />'
  },
  yen: {
    key: 160,
    value: '<numFmt numFmtId="160" formatCode="_ [$¥-804]* #,##0.00_ ;_ [$¥-804]* \\-#,##0.00_ ;_ [$¥-804]* &quot;-&quot;??_ ;_ @_ " />'
  },
  "¥": {
    key: 160,
    value: '<numFmt numFmtId="160" formatCode="_ [$¥-804]* #,##0.00_ ;_ [$¥-804]* \\-#,##0.00_ ;_ [$¥-804]* &quot;-&quot;??_ ;_ @_ " />'
  },
  CHF: {
    key: 179,
    value: '<numFmt numFmtId="179" formatCode="_-* #,##0.00\\ [$CHF-100C]_-;\\-* #,##0.00\\ [$CHF-100C]_-;_-* &quot;-&quot;??\\ [$CHF-100C]_-;_-@_-" />'
  },
  ruble: {
    key: 178,
    value: '<numFmt numFmtId="178" formatCode="_-* #,##0.00\\ [$₽-419]_-;\\-* #,##0.00\\ [$₽-419]_-;_-* &quot;-&quot;??\\ [$₽-419]_-;_-@_-" />'
  },
  "₽": {
    key: 178,
    value: '<numFmt numFmtId="178" formatCode="_-* #,##0.00\\ [$₽-419]_-;\\-* #,##0.00\\ [$₽-419]_-;_-* &quot;-&quot;??\\ [$₽-419]_-;_-@_-" />'
  },
  "֏": {
    key: 177,
    value: '<numFmt numFmtId="177" formatCode="_-* #,##0.00\\ [$֏-42B]_-;\\-* #,##0.00\\ [$֏-42B]_-;_-* &quot;-&quot;??\\ [$֏-42B]_-;_-@_-" />'
  },
  manat: {
    key: 176,
    value: '<numFmt numFmtId="176" formatCode="_-* #,##0.00\\ [$₼-82C]_-;\\-* #,##0.00\\ [$₼-82C]_-;_-* &quot;-&quot;??\\ [$₼-82C]_-;_-@_-" />'
  },
  "₼": {
    key: 176,
    value: '<numFmt numFmtId="176" formatCode="_-* #,##0.00\\ [$₼-82C]_-;\\-* #,##0.00\\ [$₼-82C]_-;_-* &quot;-&quot;??\\ [$₼-82C]_-;_-@_-" />'
  },
  "₼1": {
    key: 175,
    value: '<numFmt numFmtId="175" formatCode="_-* #,##0.00\\ [$₼-42C]_-;\\-* #,##0.00\\ [$₼-42C]_-;_-* &quot;-&quot;??\\ [$₼-42C]_-;_-@_-" />'
  },
  "₽1": {
    key: 174,
    value: '<numFmt numFmtId="174" formatCode="_-* #,##0.00\\ [$₽-46D]_-;\\-* #,##0.00\\ [$₽-46D]_-;_-* &quot;-&quot;??\\ [$₽-46D]_-;_-@_-" />'
  },
  "₽2": {
    key: 173,
    value: '<numFmt numFmtId="173" formatCode="_-* #,##0.00\\ [$₽-485]_-;\\-* #,##0.00\\ [$₽-485]_-;_-* &quot;-&quot;??\\ [$₽-485]_-;_-@_-" />'
  },
  "₽3": {
    key: 172,
    value: '<numFmt numFmtId="172" formatCode="_-* #,##0.00\\ [$₽-444]_-;\\-* #,##0.00\\ [$₽-444]_-;_-* &quot;-&quot;??\\ [$₽-444]_-;_-@_-" />'
  },
  ريال: {
    key: 171,
    value: '<numFmt numFmtId="171" formatCode="_ * #,##0.00_-[$ريال-429]_ ;_ * #,##0.00\\-[$ريال-429]_ ;_ * &quot;-&quot;??_-[$ريال-429]_ ;_ @_ " />'
  }
}, oc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
], ic = (_, P) => fetch(_).then((t) => (console.log(t), t.blob())).then((t) => new File([t], P)).catch((t) => {
  console.error(t);
});
function Mo(_, P) {
  let t = _.replace(/[0-9]/g, ""), S = parseInt(_.substring(t.length));
  isNaN(S) && (S = 0), S = Math.max(0, S - 1);
  let b = P.indexOf(t);
  return b < 0 && (P = Wo(P, Math.pow(10, t.length + 1), ""), b = P.indexOf(t), b < 0 && (b = 0)), {
    col: b,
    row: S
  };
}
async function mc(_) {
  const P = {
    lt: "lessThan",
    gt: "greaterThan",
    between: "between",
    ct: "containsText",
    eq: "equal"
  };
  let t = [...oc];
  _.numberOfColumn && _.numberOfColumn > 25 && (t = Wo(t, _.numberOfColumn));
  const b = (await Promise.resolve().then(() => yc)).default;
  let l = new b();
  const a = _.sheet.length;
  let e = l.folder("xl"), n = e == null ? void 0 : e.folder("media"), p = e == null ? void 0 : e.folder("drawings"), v = p == null ? void 0 : p.folder("_rels");
  _.styles || (_.styles = {}), _.addDefaultTitleStyle && (_.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const g = Object.keys(_.styles), w = bc, f = _.activateConditinalFormating ? _.activateConditinalFormating : !1, s = {};
  let c = g.reduce(
    (A, y, U) => {
      const D = _.styles[y];
      if (f && typeof D.type == "string" && D.type && (D.type == "conditinalFormating" || D.type.toUpperCase() == "CF")) {
        s[y] = A.conditinalFormating.count;
        let to = Eo(D.color, _.backend), _o = Eo(D.backgroundColor, _.backend);
        return A.conditinalFormating.value += '<dxf><font><color rgb="' + to + '"/></font><fill> <patternFill> <bgColor rgb="' + _o + '"/></patternFill></fill></dxf>', A.conditinalFormating.count++, A;
      }
      const W = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (D.backgroundColor) {
        let to = Eo(D.backgroundColor, _.backend);
        W.fillIndex = A.fill.count, A.fill.count++, A.fill.value = A.fill.value + '<fill><patternFill patternType="solid">' + (to ? '<fgColor rgb="' + to.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (D.color || D.fontFamily || D.size || D.bold || D.italic || D.underline || D.doubleUnderline) {
        const to = Eo(D.color, _.backend);
        W.fontIndex = A.font.count, A.font.count++, A.font.value = A.font.value + "<font>" + (D.bold ? "<b/>" : "") + (D.italic ? "<i />" : "") + (D.underline || D.doubleUnderline ? "<u " + (D.doubleUnderline ? ' val="double" ' : "") + "/>" : "") + (D.size ? '<sz val="' + D.size + '" />' : "") + (to ? '<color rgb="' + to.replace("#", "") + '" />' : "") + (D.fontFamily ? '<name val="' + D.fontFamily + '" />' : "") + "</font>", A.commentSintax.value[y] = "<rPr>" + (D.bold ? "<b/>" : "") + (D.italic ? "<i />" : "") + (D.underline || D.doubleUnderline ? "<u " + (D.doubleUnderline ? 'val="double" ' : "") + "/>" : "") + '<sz val="' + (D.size ? D.size : "9") + '" />' + (to ? '<color rgb="' + to.replace("#", "") + '" />' : "") + '<rFont val="' + (D.fontFamily ? D.fontFamily : "Tahoma") + '" /></rPr>';
      }
      let go = "/>";
      D.alignment && (D.alignment.rtl && (D.alignment.readingOrder = 2), delete D.alignment.rtl, D.alignment.ltr && (D.alignment.readingOrder = 1), delete D.alignment.ltr, go = ' applyAlignment="1"><alignment ' + Object.keys(D.alignment).reduce((to, _o) => to + " " + _o + '="' + D.alignment[_o] + '" ', "") + " /></xf>");
      const oo = D.border;
      let ro = "";
      if (typeof oo == "object" && ((oo.left || oo.full) && (ro += '<left style="' + (oo.left || oo.full).style + '"><color rgb="' + Eo(
        (oo.left || oo.full).color,
        _.backend
      ).replace("#", "") + '" /></left>'), (oo.right || oo.full) && (ro += '<right style="' + (oo.right || oo.full).style + '"><color rgb="' + Eo(
        (oo.right || oo.full).color,
        _.backend
      ).replace("#", "") + '" /></right>'), (oo.top || oo.full) && (ro += '<top style="' + (oo.top || oo.full).style + '"><color rgb="' + Eo(
        (oo.top || oo.full).color,
        _.backend
      ).replace("#", "") + '" /></top>'), (oo.bottom || oo.full) && (ro += '<bottom style="' + (oo.bottom || oo.full).style + '"><color rgb="' + Eo(
        (oo.bottom || oo.full).color,
        _.backend
      ).replace("#", "") + '" /></bottom>'), W.borderIndex = A.border.count, A.border.count++, A.border.value += "<border>" + ro + "<diagonal /></border>"), D.format) {
        const to = pc[D.format];
        to && (W.formatIndex = to.key, "value" in to && (A.format.count++, A.format.value += to.value));
      }
      return A.cell.value = A.cell.value + '<xf numFmtId="' + W.formatIndex + '" fontId="' + W.fontIndex + '" fillId="' + W.fillIndex + '" borderId="' + W.borderIndex + '" xfId="0"' + (W.borderIndex > 0 ? ' applyBorder="1" ' : "") + (W.fillIndex > 0 ? ' applyFill="1" ' : "") + (W.fontIndex >= 0 ? ' applyFont="1" ' : "") + (W.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + go, _.styles[y].index = A.cell.count, A.cell.count++, A;
    },
    {
      conditinalFormating: {
        count: f ? 1 : 0,
        value: '<dxf><font><color rgb="FF9C0006"/></font><fill> <patternFill> <bgColor rgb="FFFFC7CE"/></patternFill></fill></dxf>'
      },
      commentSintax: {
        value: {}
      },
      format: {
        count: 0,
        value: ""
      },
      border: {
        count: 1,
        value: ""
      },
      fill: {
        count: 2,
        value: ""
      },
      font: {
        count: 2,
        value: ""
      },
      cell: {
        count: 2,
        value: ""
      }
    }
  );
  e == null || e.file("styles.xml", hc(c, f));
  let h = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />', d = "", m = 0, k = "", F = "", C = {};
  const B = {};
  let z = "", N = 4, E = !1, $ = -1, J = [];
  for (let A = 0; A < a; A++) {
    const y = _.sheet[A];
    let U = y.shiftTop ? y.shiftTop : 1, D = "", W = "", go = "", oo = Object.assign([], y.merges), ro = Object.assign({}, y.formula), to = Object.assign(
      [],
      y.conditinalFormating
    ), _o = !1, po = [], Co = "", ko = [], o = [], L = [], T = [], i = {}, u;
    y.images && (u = Promise.all([
      ...y.images.map(async (Q, V) => {
        let mo = Q.url.lastIndexOf("."), q;
        return mo > 0 ? (q = Q.url.substring(mo + 1).toLowerCase(), q.length > 4 && (q.indexOf("gif") >= 0 ? q = "gif" : q.indexOf("jpg") >= 0 ? q = "jpg" : q.indexOf("jpeg") >= 0 ? q = "jpeg" : q = "png")) : q = "png", J.push(q), {
          type: q,
          image: await ic(Q.url, "image" + V + "." + q),
          obj: Q,
          i: V
        };
      })
    ]));
    const I = y.headers.length;
    if (Array.isArray(y.headers) && I) {
      let Q = "";
      if (y.title) {
        const q = y.title, fo = q.comment, no = q.shiftTop ? q.shiftTop : 0, wo = y.shiftLeft ? y.shiftLeft : 0, co = q.shiftLeft ? q.shiftLeft + wo : wo, uo = q.consommeRow ? q.consommeRow - 1 : 1, Ao = q.consommeCol ? q.consommeCol : I, yo = uo == 0 && typeof q.height == "number" ? ' ht="' + q.height + '" customHeight="1" ' : "", xo = q.styleId ? q.styleId : "titleStyle", so = t[co] + "" + (U + no);
        if (oo.push(
          so + ":" + t[co + Ao - 1] + (U + uo + no)
        ), typeof fo < "u") {
          _o = !0;
          const bo = jo(
            fo,
            c.commentSintax.value,
            w
          );
          let vo = po.length;
          if (bo.hasAuthour && typeof bo.author < "u") {
            let Io = bo.author.toString();
            const zo = po.indexOf(Io);
            zo < 0 ? po.push(Io) : vo = zo;
          }
          ko.push({
            row: U + no - 1,
            col: co
          }), Co += Uo(
            so,
            bo.commentStr,
            bo.commentStyl,
            vo
          );
        }
        typeof q.text == "string" && (Q += '<row r="' + (U + no) + '" ' + yo + ' spans="1:' + (co + Ao - 1) + '">', Q += '<c r="' + so + '" ' + (_.styles[xo] ? ' s="' + _.styles[xo].index + '" ' : "") + ' t="s"><v>' + m + "</v></c>", Q += "</row>", m++, C[q.text] = q.text, q.multiStyleValue ? d += $o(
          q.multiStyleValue,
          q.text,
          c.commentSintax.value,
          xo,
          y.useSplitBaseOnMatch
        ) : d += "<si><t>" + Ro(q.text) + "</t></si>"), U += no + uo + 1;
      }
      let V = y.headerStyleKey ? y.headerStyleKey : null, mo = 0;
      if (typeof y.shiftLeft == "number" && (mo = y.shiftLeft), y.headers.forEach((q, fo) => {
        if (mo && (fo += mo), q.formula && L.push(fo), q.conditinalFormating && T.push(fo), o.push(q.label), y.mergeRowDataCondition && typeof y.mergeRowDataCondition == "function" && y.mergeRowDataCondition(
          q,
          null,
          fo,
          !0
        ) === !0 && (i[t[fo]] = {
          inProgress: !0,
          start: U
        }), y.styleCellCondition && typeof y.styleCellCondition == "function" && (V = y.styleCellCondition(
          q,
          q,
          fo,
          U,
          !0,
          g
        ) || V), q.size && q.size > 0 && (W += '<col min="' + (fo + 1) + '" max="' + (fo + 1) + '" width="' + q.size + '" customWidth="1" />'), y.withoutHeader)
          return;
        const no = t[fo] + "" + U;
        if (typeof y.commentCodition == "function") {
          const co = y.commentCodition(
            q,
            null,
            q.label,
            U,
            fo,
            !0
          );
          co && (q.comment = co);
        }
        if (q.comment) {
          _o = !0;
          const co = jo(
            q.comment,
            c.commentSintax.value,
            w
          );
          let uo = po.length;
          if (co.hasAuthour && typeof co.author < "u") {
            let Ao = co.author.toString();
            const yo = po.indexOf(Ao);
            yo < 0 ? po.push(Ao) : uo = yo;
          }
          ko.push({
            row: U - 1,
            col: fo
          }), Co += Uo(
            no,
            co.commentStr,
            co.commentStyl,
            uo
          );
        }
        const wo = ro && ro[no];
        if (wo)
          D += Lo(
            no,
            wo,
            _.styles
          ).cell, delete ro[no];
        else {
          if (D += '<c r="' + t[fo] + U + '" ' + (V && _.styles && _.styles[V] ? ' s="' + _.styles[V].index + '" ' : "") + ' t="s"><v>' + m + "</v></c>", typeof y.multiStyleConditin == "function") {
            const co = y.multiStyleConditin(
              q,
              null,
              q.label,
              U,
              fo,
              !0
            );
            co && (q.multiStyleValue = co);
          }
          q.multiStyleValue ? d += $o(
            q.multiStyleValue,
            q.text,
            c.commentSintax.value,
            V || "",
            y.useSplitBaseOnMatch
          ) : d += "<si><t>" + Ro(q.text) + "</t></si>", C[q.text] = q.text, m++;
        }
      }), y.withoutHeader ? D += Q : (D = Q + '<row r="' + U + '" spans="1:' + I + '" ' + (y.headerHeight ? 'ht="' + y.headerHeight + '" customHeight="1"' : "") + (y.headerRowOption ? Object.keys(y.headerRowOption).reduce((q, fo) => q + " " + fo + '="' + y.headerRowOption[fo] + '" ', "  ") : "") + ">" + D + "</row>", U++), Array.isArray(y.data)) {
        const q = _.mapSheetDataOption && _.mapSheetDataOption.outlineLevel ? _.mapSheetDataOption.outlineLevel : "outlineLevel", fo = _.mapSheetDataOption && _.mapSheetDataOption.hidden ? _.mapSheetDataOption.hidden : "hidden", no = _.mapSheetDataOption && _.mapSheetDataOption.height ? _.mapSheetDataOption.height : "height", wo = y.data.length;
        y.data.forEach((co, uo) => {
          if (co.mergeType)
            for (let yo = 0; yo < co.mergeType.length; yo++) {
              const xo = co.mergeType[yo], so = co.mergeStart[yo], bo = co.mergeValue[A];
              let vo = "";
              xo == "both" ? vo = t[so] + "" + U + ":" + t[so + bo[1]] + (U + bo[0]) : xo == "col" ? vo = t[so] + "" + U + ":" + t[so + bo[0]] + U : vo = t[so] + "" + U + ":" + t[so] + (U + bo[0]), oo.push(vo);
            }
          const Ao = co.rowStyle;
          D += '<row r="' + U + '" spans="1:' + I + '" ' + (no in co ? 'ht="' + co[no] + '" customHeight="1"' : "") + (q in co ? ' outlineLevel="' + co[q] + '"' : "") + (fo in co ? ' hidden="' + co[fo] + '"' : "") + " >", o.forEach((yo, xo) => {
            mo && (xo += mo);
            const so = co[yo] * 1;
            let bo = y.convertStringToNumber && !isNaN(so) ? so : co[yo], vo = Ao;
            if (y.styleCellCondition && typeof y.styleCellCondition == "function" && (vo = y.styleCellCondition(
              bo,
              co,
              xo,
              U,
              !1,
              g
            ) || Ao), y.mergeRowDataCondition && typeof y.mergeRowDataCondition == "function") {
              let Oo = y.mergeRowDataCondition(
                bo,
                yo,
                xo,
                !1
              );
              const So = t[xo];
              let To = i[So];
              Oo === !0 ? (!To || To && !To.inProgress) && (i[So] = {
                inProgress: !0,
                start: U
              }) : To && To.inProgress && (oo.push(
                So + To.start + ":" + So + (U - 1)
              ), i[So] = {
                inProgress: !1,
                start: -1
              });
            }
            typeof bo > "u" && (bo = "");
            const Io = t[xo] + "" + U;
            if (typeof y.commentCodition == "function") {
              const Oo = y.commentCodition(
                bo,
                co,
                yo,
                U,
                xo,
                !1
              );
              Oo && (typeof co.comment != "object" && (co.comment = {}), co.comment[yo] = Oo);
            }
            if (typeof co.comment == "object" && yo in co.comment) {
              const Oo = co.comment[yo];
              _o = !0;
              const So = jo(
                Oo,
                c.commentSintax.value,
                w
              );
              So.hasAuthour && typeof So.author < "u" && po.push(So.author.toString()), ko.push({
                row: U - 1,
                col: xo
              });
              let To = po.length;
              if (So.hasAuthour && typeof So.author < "u") {
                let Ho = So.author.toString();
                const qo = po.indexOf(Ho);
                qo < 0 ? po.push(Ho) : To = qo;
              }
              Co += Uo(
                Io,
                So.commentStr,
                So.commentStyl,
                To
              );
            }
            const zo = ro && ro[Io];
            if (zo)
              D += Lo(Io, zo).cell, delete ro[Io];
            else if (typeof bo == "string") {
              if (D += '<c r="' + t[xo] + U + '" t="s" ' + (vo && _.styles && _.styles[vo] ? 's="' + _.styles[vo].index + '"' : "") + "><v>" + m + "</v></c>", typeof y.multiStyleConditin == "function") {
                const Oo = y.multiStyleConditin(
                  bo,
                  co,
                  yo,
                  U,
                  xo,
                  !1
                );
                Oo && ((!("multiStyleValue" in co) || typeof co.multiStyleValue > "u") && (co.multiStyleValue = {}), co.multiStyleValue[yo] = Oo);
              }
              "multiStyleValue" in co && co.multiStyleValue && yo in co.multiStyleValue ? d += $o(
                co.multiStyleValue[yo],
                bo,
                c.commentSintax.value,
                vo || "",
                y.useSplitBaseOnMatch
              ) : d += "<si><t>" + Ro(bo) + "</t></si>", C[bo] = bo, m++;
            } else
              D += '<c r="' + t[xo] + U + '" ' + (vo && _.styles && _.styles[vo] ? 's="' + _.styles[vo].index + '"' : "") + "><v>" + bo + "</v></c>";
          }), wo - 1 == uo && Object.keys(i).forEach((yo) => {
            i[yo].inProgress && oo.push(
              yo + i[yo].start + ":" + yo + U
            );
          }), U++, D += "</row>";
        }), y.sortAndfilter && (y.sortAndfilter.mode == "all" ? go += '<autoFilter ref="A1:' + t[I - 1] + (U - 1) + '" />' : typeof y.sortAndfilter.ref == "string" && y.sortAndfilter.ref.length > 0 && (go += '<autoFilter ref="' + y.sortAndfilter.ref + '" />'));
      }
      if (L.length > 0 && L.forEach((q) => {
        const fo = y.headers[q];
        ro[t[q] + "" + U] = {
          start: y.withoutHeader ? t[q] + "1" : t[q] + "2",
          end: t[q] + "" + (U - 1),
          type: fo.formula.type,
          ...fo.formula.styleId ? { styleId: fo.formula.styleId } : {}
        };
      }), T.length > 0 && T.forEach((q) => {
        const fo = y.headers[q];
        fo.conditinalFormating && to.push({
          ...fo.conditinalFormating,
          start: y.withoutHeader ? t[q] + "1" : t[q] + "2",
          end: t[q] + "" + (U - 1)
        });
      }), ro) {
        const q = Object.keys(ro);
        if (q.length) {
          let fo = {};
          q.forEach((no) => {
            const wo = Lo(no, ro[no], _.styles);
            fo[wo.row] ? fo[wo.row] += wo.cell : fo[wo.row] = wo.cell;
          }), Object.keys(fo).forEach((no) => {
            const wo = fo[no];
            D += '<row r="' + no + '" spans="1:' + I + '"  >' + wo + "</row>";
          });
        }
      }
    }
    A > 0 && (h += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (A + 1) + '.xml" />');
    const M = y.name ? y.name : "sheet" + (A + 1), Z = y.state ? y.state : "visible";
    k += '<sheet state="' + Z + '" name="' + M + '" sheetId="' + (A + 1) + '" r:id="rId' + (N + 1) + '" />', F += '<Relationship Id="rId' + (N + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (A + 1) + '.xml" />', z += "<vt:lpstr>" + ("sheet" + (A + 1)) + "</vt:lpstr>", y.selected && (E = !0, $ = A);
    const O = y.sortAndfilter ? 'filterMode="1"' : "";
    let K = !1, X = "", Y = "";
    u && (K = !0, await u.then((Q) => {
      console.log(Q, "res");
      let V = "";
      Q.forEach((mo, q) => {
        const fo = q + 1;
        var no = mo.image, wo = mo.obj.from, co = mo.obj.to, uo = mo.obj.margin, Ao = mo.type, yo = mo.obj.type, xo = mo.obj.extent;
        typeof xo > "u" && (xo = {
          cx: 2e5,
          cy: 2e5
        });
        var so = {
          start: {
            col: 0,
            row: 0,
            mL: 0,
            mT: 0
          },
          end: {
            col: 1,
            row: 1,
            mR: 0,
            mB: 0
          }
        };
        if (typeof wo == "string" && wo.length >= 2) {
          var bo = Mo(wo, t);
          so.start = {
            ...bo
          }, so.end = {
            col: bo.col + 1,
            row: bo.row + 1
          };
        }
        if (typeof co == "string" && co.length >= 2) {
          var bo = Mo(co, t);
          bo.row += 1, bo.col += 1, so.end = {
            ...bo
          };
        }
        so.end.mR = 0, so.end.mB = 0, so.start.mL = 0, so.start.mT = 0, uo && ((uo.all || uo.right) && (so.end.mR = uo.all || uo.right), (uo.all || uo.bottom) && (so.end.mB = uo.all || uo.bottom), (uo.all || uo.left) && (so.start.mL = uo.all || uo.left), (uo.all || uo.top) && (so.start.mT = uo.all || uo.top)), yo == "one" ? X += "<xdr:oneCellAnchor><xdr:from><xdr:col>" + so.start.col + "</xdr:col><xdr:colOff>" + so.start.mT + "</xdr:colOff><xdr:row>" + so.start.row + "</xdr:row><xdr:rowOff>" + so.start.mL + '</xdr:rowOff></xdr:from><xdr:ext cx="' + xo.cx + '" cy="' + xo.cy + '"/><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + fo + '" name="Picture ' + fo + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + fo + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:oneCellAnchor>' : X += '<xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + so.start.col + "</xdr:col><xdr:colOff>" + so.start.mT + "</xdr:colOff><xdr:row>" + so.start.row + "</xdr:row><xdr:rowOff>" + so.start.mL + "</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + so.end.col + "</xdr:col><xdr:colOff>" + so.end.mB + "</xdr:colOff><xdr:row>" + so.end.row + "</xdr:row><xdr:rowOff>" + so.end.mR + '</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + fo + '" name="Picture ' + fo + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + fo + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:twoCellAnchor>';
        const vo = "image" + fo + "." + Ao;
        n == null || n.file(vo, no), V += '<Relationship Id="rId' + fo + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/' + vo + '" />';
      }), Y = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` + V + "</Relationships>";
    })), oo = [...new Set(oo)];
    let eo = "", io = 1;
    to.length > 0 && (eo = to.reduce((Q, V) => {
      if (V.type == "cells")
        return V.operator == "ct" ? Q + `
                    <conditionalFormatting sqref="${V.start}:${V.end}">
    <cfRule type="containsText" dxfId="${V.styleId ? s[V.styleId] : 0}" priority="${V.priority ? V.priority : io++}"  operator="containsText" text="${V.value}">
           <formula>NOT(ISERROR(SEARCH("${V.value}",${V.start})))</formula>
    </cfRule>
  </conditionalFormatting>` : typeof V.operator > "u" || typeof P[V.operator] > "u" ? Q : Q + `
                    <conditionalFormatting sqref="${V.start}:${V.end}">
    <cfRule type="cellIs" dxfId="${V.styleId ? s[V.styleId] : 0}" priority="${V.priority ? V.priority : io++}" operator="${P[V.operator]}">
     ${Array.isArray(V.value) ? V.value.reduce((mo, q) => mo + `<formula>${q.value}</formula>`, "") : `<formula>${V.value}</formula>`}
    </cfRule>
  </conditionalFormatting>`;
      if (V.type == "top")
        return Q + `<conditionalFormatting sqref="${V.start}:${V.end}">
        <cfRule type="${V.operator ? "aboveAverage" : "top10"}" dxfId="${V.styleId ? s[V.styleId] : 0}" priority="${V.priority ? V.priority : io++}" ${V.bottom ? 'bottom="1"' : ""} ${V.percent ? 'percent="1"' : ""}  rank="${V.value}" ${V.operator == "belowAverage" ? 'aboveAverage="0"' : ""}/>
    </conditionalFormatting>`;
      if (V.type == "iconSet") {
        let mo = "";
        return typeof V.operator > "u" ? Q : (V.operator.indexOf("5") == 0 ? mo = `
                <cfvo type="percent" val="0"/>
                <cfvo type="percent" val="20"/>
                <cfvo type="percent" val="40"/>
                <cfvo type="percent" val="60"/>
                <cfvo type="percent" val="80"/>` : V.operator.indexOf("4") == 0 ? mo = `<cfvo type="percent" val="0"/>
                <cfvo type="percent" val="25"/>
                <cfvo type="percent" val="50"/>
                <cfvo type="percent" val="75"/>` : mo = `<cfvo type="percent" val="0"/>
                <cfvo type="percent" val="33"/>
                <cfvo type="percent" val="67"/>`, Q + `<conditionalFormatting sqref="${V.start}:${V.end}">
        <cfRule type="iconSet" priority="${V.priority ? V.priority : io++}">
            <iconSet iconSet="${V.operator}">
                ${mo}
            </iconSet>
        </cfRule>
    </conditionalFormatting>`);
      } else
        return V.type == "colorScale" ? Q + `<conditionalFormatting sqref="${V.start}:${V.end}">
        <cfRule type="colorScale" priority="${V.priority ? V.priority : io++}">
            <colorScale>
                <cfvo type="min"/>
                ${V.operator == "percentile" ? `<cfvo type="percentile" val="${V.value}"/>` : ""}
                <cfvo type="max"/>
                ${V.colors && Array.isArray(V.colors) ? V.colors.reduce((mo, q) => mo + `<color rgb="${Eo(
          q,
          _.backend
        )}"/>`, "") : `<color rgb="FFF8696B"/>
                <color rgb="FFFFEB84"/>
                <color rgb="FF63BE7B"/>`}
            </colorScale>
        </cfRule>
    </conditionalFormatting>` : V.type == "dataBar" ? Q + `<conditionalFormatting sqref="${V.start}:${V.end}">
        <cfRule type="dataBar" priority="${V.priority ? V.priority : io++}">
            <dataBar>
                <cfvo type="min"/>
                <cfvo type="max"/>
                ${V.colors && Array.isArray(V.colors) ? V.colors.reduce((mo, q) => mo + `<color rgb="${Eo(
          q,
          _.backend
        )}"/>`, "") : '<color rgb="FF638EC6"/>'}
            </dataBar>
        </cfRule>
    </conditionalFormatting>` : Q;
    }, "")), B["sheet" + (A + 1)] = {
      indexId: N + 1,
      key: "sheet" + (A + 1),
      sheetName: M,
      sheetDataString: D,
      hasComment: _o,
      drawersContent: X,
      cFDataString: eo,
      drawersRels: Y,
      hasImages: K,
      commentString: Co,
      commentAuthor: po,
      shapeCommentRowCol: ko,
      sheetSizeString: W.length > 0 ? "<cols>" + W + "</cols>" : "",
      protectionOption: y.protectionOption ? Object.keys(y.protectionOption).reduce((Q, V) => Q + " " + V + '="' + y.protectionOption[V] + '" ', "<sheetProtection ") + "/>" : "",
      merges: oo.length > 0 ? oo.reduce((Q, V) => Q + ' <mergeCell ref="' + V + '" />', '<mergeCells count="' + oo.length + '">') + " </mergeCells>" : "",
      selectedView: y.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: go,
      tabColor: y.tabColor ? '<sheetPr codeName="' + ("Sheet" + (A + 1)) + '" ' + O + ' ><tabColor rgb="' + y.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + O + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, N++;
  }
  let x = Object.keys(B), R = l.folder("_rels");
  R == null || R.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  let r = l.folder("docProps");
  r == null || r.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (_.creator ? "<dc:creator>" + _.creator + "</dc:creator>" : "") + (_.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + _.created + "</dcterms:created>" : "") + (_.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + _.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), r == null || r.file("app.xml", uc(a, z)), e == null || e.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr />` + (E ? '<bookViews><workbookView xWindow="3540" yWindow="1365" windowWidth="21600" windowHeight="11325" activeTab="' + $ + '"/></bookViews>' : "") + " <sheets>  " + k + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), e == null || e.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (m - 1) + '" uniqueCount="' + Object.keys(C).length + '"> ' + d + "</sst>"
  );
  let j = e == null ? void 0 : e.folder("_rels");
  j == null || j.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + F + " </Relationships>"
  );
  let ao = e == null ? void 0 : e.folder("theme");
  ao == null || ao.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  let H = e == null ? void 0 : e.folder("worksheets"), ho = [];
  const G = H == null ? void 0 : H.folder("_rels");
  let lo = [];
  if (x.forEach((A, y) => {
    const U = B[A];
    let D = "";
    if (U.hasImages) {
      const W = "drawing" + (lo.length + 1) + ".xml";
      lo.push(W), p == null || p.file(
        W,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"  xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"  xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer"  xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer">` + U.drawersContent + "</xdr:wsDr>"
      ), v == null || v.file(
        W + ".rels",
        U.drawersRels.toString()
      ), D += '<Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"  Target="../drawings/' + W + '" />';
    }
    if (U.hasComment) {
      ho.push(y + 1);
      let W = U.commentAuthor;
      e == null || e.file(
        "comments" + (y + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><authors>` + (Array.isArray(W) && W.length > 0 ? W.reduce(
          (go, oo) => go + "<author>" + oo + "</author>",
          ""
        ) : "<author></author>") + "</authors><commentList>" + U.commentString + "</commentList></comments>"
      ), D += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" Target="../comments' + (y + 1) + '.xml" /><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (y + 1) + '.vml" />', p == null || p.file(
        "vmlDrawing" + (y + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">  <o:shapelayout v:ext="edit">    <o:idmap v:ext="edit" data="1"/>  </o:shapelayout>  <v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"     path="m,l,21600r21600,l21600,xe">    <v:stroke joinstyle="miter"/>    <v:path gradientshapeok="t" o:connecttype="rect"/>  </v:shapetype>` + U.shapeCommentRowCol.reduce((go, oo) => go + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;visibility:hidden' fillcolor="#ffffe1">  <v:fill color2="#ffffe1"/>  <v:shadow on="t" color="black" obscured="t"/>  <v:path o:connecttype="none"/>  <v:textbox>   <div style='text-align:left'></div>  </v:textbox>  <x:ClientData ObjectType="Note">   <x:MoveWithCells/>   <x:SizeWithCells/>   <x:Anchor>    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>   <x:AutoFill>False</x:AutoFill>   <x:Row>` + oo.row + "</x:Row>   <x:Column>" + oo.col + "</x:Column>  </x:ClientData></v:shape>", "") + "</xml>"
      );
    }
    (U.hasImages || U.hasComment) && (G == null || G.file(
      "sheet" + (y + 1) + ".xml.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> ` + D + "</Relationships>"
    )), H == null || H.file(
      U.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + U.tabColor + U.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + U.sheetSizeString + "<sheetData>" + U.sheetDataString + "</sheetData>" + U.protectionOption + U.sheetSortFilter + U.merges + U.cFDataString + (U.hasImages ? '<drawing r:id="rId2" />' : "") + (U.hasComment ? '<legacyDrawing r:id="rId3" />' : "") + "</worksheet>"
    );
  }), l.file(
    "[Content_Types].xml",
    sc(
      h,
      ho,
      [...new Set(J)],
      lo
    )
  ), _.backend)
    return l.generateAsync({
      type: _.generateType ? _.generateType : "nodebuffer"
    }).then((A) => A);
  if (_.notSave)
    return l.generateAsync({ type: "blob" }).then((A) => A.slice(
      0,
      A.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  l.generateAsync({ type: "blob" }).then(function(A) {
    import("./FileSaver.min-e0c82a49.mjs").then((y) => y.F).then((y) => {
      const { saveAs: U } = y;
      U(
        A,
        (_.fileName ? _.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
var Do = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gc(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
function Po(_) {
  throw new Error('Could not dynamically require "' + _ + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var cc = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(_, P) {
  (function(t) {
    _.exports = t();
  })(function() {
    return function t(S, b, l) {
      function a(p, v) {
        if (!b[p]) {
          if (!S[p]) {
            var g = typeof Po == "function" && Po;
            if (!v && g)
              return g(p, !0);
            if (e)
              return e(p, !0);
            var w = new Error("Cannot find module '" + p + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var f = b[p] = { exports: {} };
          S[p][0].call(f.exports, function(s) {
            var c = S[p][1][s];
            return a(c || s);
          }, f, f.exports, t, S, b, l);
        }
        return b[p].exports;
      }
      for (var e = typeof Po == "function" && Po, n = 0; n < l.length; n++)
        a(l[n]);
      return a;
    }({ 1: [function(t, S, b) {
      var l = t("./utils"), a = t("./support"), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      b.encode = function(n) {
        for (var p, v, g, w, f, s, c, h = [], d = 0, m = n.length, k = m, F = l.getTypeOf(n) !== "string"; d < n.length; )
          k = m - d, g = F ? (p = n[d++], v = d < m ? n[d++] : 0, d < m ? n[d++] : 0) : (p = n.charCodeAt(d++), v = d < m ? n.charCodeAt(d++) : 0, d < m ? n.charCodeAt(d++) : 0), w = p >> 2, f = (3 & p) << 4 | v >> 4, s = 1 < k ? (15 & v) << 2 | g >> 6 : 64, c = 2 < k ? 63 & g : 64, h.push(e.charAt(w) + e.charAt(f) + e.charAt(s) + e.charAt(c));
        return h.join("");
      }, b.decode = function(n) {
        var p, v, g, w, f, s, c = 0, h = 0, d = "data:";
        if (n.substr(0, d.length) === d)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var m, k = 3 * (n = n.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (n.charAt(n.length - 1) === e.charAt(64) && k--, n.charAt(n.length - 2) === e.charAt(64) && k--, k % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (m = a.uint8array ? new Uint8Array(0 | k) : new Array(0 | k); c < n.length; )
          p = e.indexOf(n.charAt(c++)) << 2 | (w = e.indexOf(n.charAt(c++))) >> 4, v = (15 & w) << 4 | (f = e.indexOf(n.charAt(c++))) >> 2, g = (3 & f) << 6 | (s = e.indexOf(n.charAt(c++))), m[h++] = p, f !== 64 && (m[h++] = v), s !== 64 && (m[h++] = g);
        return m;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(t, S, b) {
      var l = t("./external"), a = t("./stream/DataWorker"), e = t("./stream/Crc32Probe"), n = t("./stream/DataLengthProbe");
      function p(v, g, w, f, s) {
        this.compressedSize = v, this.uncompressedSize = g, this.crc32 = w, this.compression = f, this.compressedContent = s;
      }
      p.prototype = { getContentWorker: function() {
        var v = new a(l.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new n("data_length")), g = this;
        return v.on("end", function() {
          if (this.streamInfo.data_length !== g.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), v;
      }, getCompressedWorker: function() {
        return new a(l.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, p.createWorkerFrom = function(v, g, w) {
        return v.pipe(new e()).pipe(new n("uncompressedSize")).pipe(g.compressWorker(w)).pipe(new n("compressedSize")).withStreamInfo("compression", g);
      }, S.exports = p;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t, S, b) {
      var l = t("./stream/GenericWorker");
      b.STORE = { magic: "\0\0", compressWorker: function() {
        return new l("STORE compression");
      }, uncompressWorker: function() {
        return new l("STORE decompression");
      } }, b.DEFLATE = t("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t, S, b) {
      var l = t("./utils"), a = function() {
        for (var e, n = [], p = 0; p < 256; p++) {
          e = p;
          for (var v = 0; v < 8; v++)
            e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
          n[p] = e;
        }
        return n;
      }();
      S.exports = function(e, n) {
        return e !== void 0 && e.length ? l.getTypeOf(e) !== "string" ? function(p, v, g, w) {
          var f = a, s = w + g;
          p ^= -1;
          for (var c = w; c < s; c++)
            p = p >>> 8 ^ f[255 & (p ^ v[c])];
          return -1 ^ p;
        }(0 | n, e, e.length, 0) : function(p, v, g, w) {
          var f = a, s = w + g;
          p ^= -1;
          for (var c = w; c < s; c++)
            p = p >>> 8 ^ f[255 & (p ^ v.charCodeAt(c))];
          return -1 ^ p;
        }(0 | n, e, e.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(t, S, b) {
      b.base64 = !1, b.binary = !1, b.dir = !1, b.createFolders = !0, b.date = null, b.compression = null, b.compressionOptions = null, b.comment = null, b.unixPermissions = null, b.dosPermissions = null;
    }, {}], 6: [function(t, S, b) {
      var l = null;
      l = typeof Promise < "u" ? Promise : t("lie"), S.exports = { Promise: l };
    }, { lie: 37 }], 7: [function(t, S, b) {
      var l = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = t("pako"), e = t("./utils"), n = t("./stream/GenericWorker"), p = l ? "uint8array" : "array";
      function v(g, w) {
        n.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = w, this.meta = {};
      }
      b.magic = "\b\0", e.inherits(v, n), v.prototype.processChunk = function(g) {
        this.meta = g.meta, this._pako === null && this._createPako(), this._pako.push(e.transformTo(p, g.data), !1);
      }, v.prototype.flush = function() {
        n.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, v.prototype.cleanUp = function() {
        n.prototype.cleanUp.call(this), this._pako = null;
      }, v.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var g = this;
        this._pako.onData = function(w) {
          g.push({ data: w, meta: g.meta });
        };
      }, b.compressWorker = function(g) {
        return new v("Deflate", g);
      }, b.uncompressWorker = function() {
        return new v("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, S, b) {
      function l(f, s) {
        var c, h = "";
        for (c = 0; c < s; c++)
          h += String.fromCharCode(255 & f), f >>>= 8;
        return h;
      }
      function a(f, s, c, h, d, m) {
        var k, F, C = f.file, B = f.compression, z = m !== p.utf8encode, N = e.transformTo("string", m(C.name)), E = e.transformTo("string", p.utf8encode(C.name)), $ = C.comment, J = e.transformTo("string", m($)), x = e.transformTo("string", p.utf8encode($)), R = E.length !== C.name.length, r = x.length !== $.length, j = "", ao = "", H = "", ho = C.dir, G = C.date, lo = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        s && !c || (lo.crc32 = f.crc32, lo.compressedSize = f.compressedSize, lo.uncompressedSize = f.uncompressedSize);
        var A = 0;
        s && (A |= 8), z || !R && !r || (A |= 2048);
        var y = 0, U = 0;
        ho && (y |= 16), d === "UNIX" ? (U = 798, y |= function(W, go) {
          var oo = W;
          return W || (oo = go ? 16893 : 33204), (65535 & oo) << 16;
        }(C.unixPermissions, ho)) : (U = 20, y |= function(W) {
          return 63 & (W || 0);
        }(C.dosPermissions)), k = G.getUTCHours(), k <<= 6, k |= G.getUTCMinutes(), k <<= 5, k |= G.getUTCSeconds() / 2, F = G.getUTCFullYear() - 1980, F <<= 4, F |= G.getUTCMonth() + 1, F <<= 5, F |= G.getUTCDate(), R && (ao = l(1, 1) + l(v(N), 4) + E, j += "up" + l(ao.length, 2) + ao), r && (H = l(1, 1) + l(v(J), 4) + x, j += "uc" + l(H.length, 2) + H);
        var D = "";
        return D += `
\0`, D += l(A, 2), D += B.magic, D += l(k, 2), D += l(F, 2), D += l(lo.crc32, 4), D += l(lo.compressedSize, 4), D += l(lo.uncompressedSize, 4), D += l(N.length, 2), D += l(j.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + D + N + j, dirRecord: g.CENTRAL_FILE_HEADER + l(U, 2) + D + l(J.length, 2) + "\0\0\0\0" + l(y, 4) + l(h, 4) + N + j + J };
      }
      var e = t("../utils"), n = t("../stream/GenericWorker"), p = t("../utf8"), v = t("../crc32"), g = t("../signature");
      function w(f, s, c, h) {
        n.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = s, this.zipPlatform = c, this.encodeFileName = h, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      e.inherits(w, n), w.prototype.push = function(f) {
        var s = f.meta.percent || 0, c = this.entriesCount, h = this._sources.length;
        this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, n.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: c ? (s + 100 * (c - h - 1)) / c : 100 } }));
      }, w.prototype.openedSource = function(f) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
        var s = this.streamFiles && !f.file.dir;
        if (s) {
          var c = a(f, s, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: c.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, w.prototype.closedSource = function(f) {
        this.accumulate = !1;
        var s = this.streamFiles && !f.file.dir, c = a(f, s, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(c.dirRecord), s)
          this.push({ data: function(h) {
            return g.DATA_DESCRIPTOR + l(h.crc32, 4) + l(h.compressedSize, 4) + l(h.uncompressedSize, 4);
          }(f), meta: { percent: 100 } });
        else
          for (this.push({ data: c.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, w.prototype.flush = function() {
        for (var f = this.bytesWritten, s = 0; s < this.dirRecords.length; s++)
          this.push({ data: this.dirRecords[s], meta: { percent: 100 } });
        var c = this.bytesWritten - f, h = function(d, m, k, F, C) {
          var B = e.transformTo("string", C(F));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + l(d, 2) + l(d, 2) + l(m, 4) + l(k, 4) + l(B.length, 2) + B;
        }(this.dirRecords.length, c, f, this.zipComment, this.encodeFileName);
        this.push({ data: h, meta: { percent: 100 } });
      }, w.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, w.prototype.registerPrevious = function(f) {
        this._sources.push(f);
        var s = this;
        return f.on("data", function(c) {
          s.processChunk(c);
        }), f.on("end", function() {
          s.closedSource(s.previous.streamInfo), s._sources.length ? s.prepareNextSource() : s.end();
        }), f.on("error", function(c) {
          s.error(c);
        }), this;
      }, w.prototype.resume = function() {
        return !!n.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, w.prototype.error = function(f) {
        var s = this._sources;
        if (!n.prototype.error.call(this, f))
          return !1;
        for (var c = 0; c < s.length; c++)
          try {
            s[c].error(f);
          } catch {
          }
        return !0;
      }, w.prototype.lock = function() {
        n.prototype.lock.call(this);
        for (var f = this._sources, s = 0; s < f.length; s++)
          f[s].lock();
      }, S.exports = w;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, S, b) {
      var l = t("../compressions"), a = t("./ZipFileWorker");
      b.generateWorker = function(e, n, p) {
        var v = new a(n.streamFiles, p, n.platform, n.encodeFileName), g = 0;
        try {
          e.forEach(function(w, f) {
            g++;
            var s = function(m, k) {
              var F = m || k, C = l[F];
              if (!C)
                throw new Error(F + " is not a valid compression method !");
              return C;
            }(f.options.compression, n.compression), c = f.options.compressionOptions || n.compressionOptions || {}, h = f.dir, d = f.date;
            f._compressWorker(s, c).withStreamInfo("file", { name: w, dir: h, date: d, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(v);
          }), v.entriesCount = g;
        } catch (w) {
          v.error(w);
        }
        return v;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t, S, b) {
      function l() {
        if (!(this instanceof l))
          return new l();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new l();
          for (var e in this)
            typeof this[e] != "function" && (a[e] = this[e]);
          return a;
        };
      }
      (l.prototype = t("./object")).loadAsync = t("./load"), l.support = t("./support"), l.defaults = t("./defaults"), l.version = "3.10.1", l.loadAsync = function(a, e) {
        return new l().loadAsync(a, e);
      }, l.external = t("./external"), S.exports = l;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t, S, b) {
      var l = t("./utils"), a = t("./external"), e = t("./utf8"), n = t("./zipEntries"), p = t("./stream/Crc32Probe"), v = t("./nodejsUtils");
      function g(w) {
        return new a.Promise(function(f, s) {
          var c = w.decompressed.getContentWorker().pipe(new p());
          c.on("error", function(h) {
            s(h);
          }).on("end", function() {
            c.streamInfo.crc32 !== w.decompressed.crc32 ? s(new Error("Corrupted zip : CRC32 mismatch")) : f();
          }).resume();
        });
      }
      S.exports = function(w, f) {
        var s = this;
        return f = l.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: e.utf8decode }), v.isNode && v.isStream(w) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : l.prepareContent("the loaded zip file", w, !0, f.optimizedBinaryString, f.base64).then(function(c) {
          var h = new n(f);
          return h.load(c), h;
        }).then(function(c) {
          var h = [a.Promise.resolve(c)], d = c.files;
          if (f.checkCRC32)
            for (var m = 0; m < d.length; m++)
              h.push(g(d[m]));
          return a.Promise.all(h);
        }).then(function(c) {
          for (var h = c.shift(), d = h.files, m = 0; m < d.length; m++) {
            var k = d[m], F = k.fileNameStr, C = l.resolve(k.fileNameStr);
            s.file(C, k.decompressed, { binary: !0, optimizedBinaryString: !0, date: k.date, dir: k.dir, comment: k.fileCommentStr.length ? k.fileCommentStr : null, unixPermissions: k.unixPermissions, dosPermissions: k.dosPermissions, createFolders: f.createFolders }), k.dir || (s.file(C).unsafeOriginalName = F);
          }
          return h.zipComment.length && (s.comment = h.zipComment), s;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t, S, b) {
      var l = t("../utils"), a = t("../stream/GenericWorker");
      function e(n, p) {
        a.call(this, "Nodejs stream input adapter for " + n), this._upstreamEnded = !1, this._bindStream(p);
      }
      l.inherits(e, a), e.prototype._bindStream = function(n) {
        var p = this;
        (this._stream = n).pause(), n.on("data", function(v) {
          p.push({ data: v, meta: { percent: 0 } });
        }).on("error", function(v) {
          p.isPaused ? this.generatedError = v : p.error(v);
        }).on("end", function() {
          p.isPaused ? p._upstreamEnded = !0 : p.end();
        });
      }, e.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, e.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, S.exports = e;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t, S, b) {
      var l = t("readable-stream").Readable;
      function a(e, n, p) {
        l.call(this, n), this._helper = e;
        var v = this;
        e.on("data", function(g, w) {
          v.push(g) || v._helper.pause(), p && p(w);
        }).on("error", function(g) {
          v.emit("error", g);
        }).on("end", function() {
          v.push(null);
        });
      }
      t("../utils").inherits(a, l), a.prototype._read = function() {
        this._helper.resume();
      }, S.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t, S, b) {
      S.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(l, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(l, a);
        if (typeof l == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(l, a);
      }, allocBuffer: function(l) {
        if (Buffer.alloc)
          return Buffer.alloc(l);
        var a = new Buffer(l);
        return a.fill(0), a;
      }, isBuffer: function(l) {
        return Buffer.isBuffer(l);
      }, isStream: function(l) {
        return l && typeof l.on == "function" && typeof l.pause == "function" && typeof l.resume == "function";
      } };
    }, {}], 15: [function(t, S, b) {
      function l(C, B, z) {
        var N, E = e.getTypeOf(B), $ = e.extend(z || {}, v);
        $.date = $.date || /* @__PURE__ */ new Date(), $.compression !== null && ($.compression = $.compression.toUpperCase()), typeof $.unixPermissions == "string" && ($.unixPermissions = parseInt($.unixPermissions, 8)), $.unixPermissions && 16384 & $.unixPermissions && ($.dir = !0), $.dosPermissions && 16 & $.dosPermissions && ($.dir = !0), $.dir && (C = d(C)), $.createFolders && (N = h(C)) && m.call(this, N, !0);
        var J = E === "string" && $.binary === !1 && $.base64 === !1;
        z && z.binary !== void 0 || ($.binary = !J), (B instanceof g && B.uncompressedSize === 0 || $.dir || !B || B.length === 0) && ($.base64 = !1, $.binary = !0, B = "", $.compression = "STORE", E = "string");
        var x = null;
        x = B instanceof g || B instanceof n ? B : s.isNode && s.isStream(B) ? new c(C, B) : e.prepareContent(C, B, $.binary, $.optimizedBinaryString, $.base64);
        var R = new w(C, x, $);
        this.files[C] = R;
      }
      var a = t("./utf8"), e = t("./utils"), n = t("./stream/GenericWorker"), p = t("./stream/StreamHelper"), v = t("./defaults"), g = t("./compressedObject"), w = t("./zipObject"), f = t("./generate"), s = t("./nodejsUtils"), c = t("./nodejs/NodejsStreamInputAdapter"), h = function(C) {
        C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
        var B = C.lastIndexOf("/");
        return 0 < B ? C.substring(0, B) : "";
      }, d = function(C) {
        return C.slice(-1) !== "/" && (C += "/"), C;
      }, m = function(C, B) {
        return B = B !== void 0 ? B : v.createFolders, C = d(C), this.files[C] || l.call(this, C, null, { dir: !0, createFolders: B }), this.files[C];
      };
      function k(C) {
        return Object.prototype.toString.call(C) === "[object RegExp]";
      }
      var F = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(C) {
        var B, z, N;
        for (B in this.files)
          N = this.files[B], (z = B.slice(this.root.length, B.length)) && B.slice(0, this.root.length) === this.root && C(z, N);
      }, filter: function(C) {
        var B = [];
        return this.forEach(function(z, N) {
          C(z, N) && B.push(N);
        }), B;
      }, file: function(C, B, z) {
        if (arguments.length !== 1)
          return C = this.root + C, l.call(this, C, B, z), this;
        if (k(C)) {
          var N = C;
          return this.filter(function($, J) {
            return !J.dir && N.test($);
          });
        }
        var E = this.files[this.root + C];
        return E && !E.dir ? E : null;
      }, folder: function(C) {
        if (!C)
          return this;
        if (k(C))
          return this.filter(function(E, $) {
            return $.dir && C.test(E);
          });
        var B = this.root + C, z = m.call(this, B), N = this.clone();
        return N.root = z.name, N;
      }, remove: function(C) {
        C = this.root + C;
        var B = this.files[C];
        if (B || (C.slice(-1) !== "/" && (C += "/"), B = this.files[C]), B && !B.dir)
          delete this.files[C];
        else
          for (var z = this.filter(function(E, $) {
            return $.name.slice(0, C.length) === C;
          }), N = 0; N < z.length; N++)
            delete this.files[z[N].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(C) {
        var B, z = {};
        try {
          if ((z = e.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = z.type.toLowerCase(), z.compression = z.compression.toUpperCase(), z.type === "binarystring" && (z.type = "string"), !z.type)
            throw new Error("No output type specified.");
          e.checkSupport(z.type), z.platform !== "darwin" && z.platform !== "freebsd" && z.platform !== "linux" && z.platform !== "sunos" || (z.platform = "UNIX"), z.platform === "win32" && (z.platform = "DOS");
          var N = z.comment || this.comment || "";
          B = f.generateWorker(this, z, N);
        } catch (E) {
          (B = new n("error")).error(E);
        }
        return new p(B, z.type || "string", z.mimeType);
      }, generateAsync: function(C, B) {
        return this.generateInternalStream(C).accumulate(B);
      }, generateNodeStream: function(C, B) {
        return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(B);
      } };
      S.exports = F;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t, S, b) {
      S.exports = t("stream");
    }, { stream: void 0 }], 17: [function(t, S, b) {
      var l = t("./DataReader");
      function a(e) {
        l.call(this, e);
        for (var n = 0; n < this.data.length; n++)
          e[n] = 255 & e[n];
      }
      t("../utils").inherits(a, l), a.prototype.byteAt = function(e) {
        return this.data[this.zero + e];
      }, a.prototype.lastIndexOfSignature = function(e) {
        for (var n = e.charCodeAt(0), p = e.charCodeAt(1), v = e.charCodeAt(2), g = e.charCodeAt(3), w = this.length - 4; 0 <= w; --w)
          if (this.data[w] === n && this.data[w + 1] === p && this.data[w + 2] === v && this.data[w + 3] === g)
            return w - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(e) {
        var n = e.charCodeAt(0), p = e.charCodeAt(1), v = e.charCodeAt(2), g = e.charCodeAt(3), w = this.readData(4);
        return n === w[0] && p === w[1] && v === w[2] && g === w[3];
      }, a.prototype.readData = function(e) {
        if (this.checkOffset(e), e === 0)
          return [];
        var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, n;
      }, S.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t, S, b) {
      var l = t("../utils");
      function a(e) {
        this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(e) {
        this.checkIndex(this.index + e);
      }, checkIndex: function(e) {
        if (this.length < this.zero + e || e < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
      }, setIndex: function(e) {
        this.checkIndex(e), this.index = e;
      }, skip: function(e) {
        this.setIndex(this.index + e);
      }, byteAt: function() {
      }, readInt: function(e) {
        var n, p = 0;
        for (this.checkOffset(e), n = this.index + e - 1; n >= this.index; n--)
          p = (p << 8) + this.byteAt(n);
        return this.index += e, p;
      }, readString: function(e) {
        return l.transformTo("string", this.readData(e));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var e = this.readInt(4);
        return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
      } }, S.exports = a;
    }, { "../utils": 32 }], 19: [function(t, S, b) {
      var l = t("./Uint8ArrayReader");
      function a(e) {
        l.call(this, e);
      }
      t("../utils").inherits(a, l), a.prototype.readData = function(e) {
        this.checkOffset(e);
        var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, n;
      }, S.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t, S, b) {
      var l = t("./DataReader");
      function a(e) {
        l.call(this, e);
      }
      t("../utils").inherits(a, l), a.prototype.byteAt = function(e) {
        return this.data.charCodeAt(this.zero + e);
      }, a.prototype.lastIndexOfSignature = function(e) {
        return this.data.lastIndexOf(e) - this.zero;
      }, a.prototype.readAndCheckSignature = function(e) {
        return e === this.readData(4);
      }, a.prototype.readData = function(e) {
        this.checkOffset(e);
        var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, n;
      }, S.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t, S, b) {
      var l = t("./ArrayReader");
      function a(e) {
        l.call(this, e);
      }
      t("../utils").inherits(a, l), a.prototype.readData = function(e) {
        if (this.checkOffset(e), e === 0)
          return new Uint8Array(0);
        var n = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, n;
      }, S.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t, S, b) {
      var l = t("../utils"), a = t("../support"), e = t("./ArrayReader"), n = t("./StringReader"), p = t("./NodeBufferReader"), v = t("./Uint8ArrayReader");
      S.exports = function(g) {
        var w = l.getTypeOf(g);
        return l.checkSupport(w), w !== "string" || a.uint8array ? w === "nodebuffer" ? new p(g) : a.uint8array ? new v(l.transformTo("uint8array", g)) : new e(l.transformTo("array", g)) : new n(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t, S, b) {
      b.LOCAL_FILE_HEADER = "PK", b.CENTRAL_FILE_HEADER = "PK", b.CENTRAL_DIRECTORY_END = "PK", b.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", b.ZIP64_CENTRAL_DIRECTORY_END = "PK", b.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(t, S, b) {
      var l = t("./GenericWorker"), a = t("../utils");
      function e(n) {
        l.call(this, "ConvertWorker to " + n), this.destType = n;
      }
      a.inherits(e, l), e.prototype.processChunk = function(n) {
        this.push({ data: a.transformTo(this.destType, n.data), meta: n.meta });
      }, S.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t, S, b) {
      var l = t("./GenericWorker"), a = t("../crc32");
      function e() {
        l.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      t("../utils").inherits(e, l), e.prototype.processChunk = function(n) {
        this.streamInfo.crc32 = a(n.data, this.streamInfo.crc32 || 0), this.push(n);
      }, S.exports = e;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t, S, b) {
      var l = t("../utils"), a = t("./GenericWorker");
      function e(n) {
        a.call(this, "DataLengthProbe for " + n), this.propName = n, this.withStreamInfo(n, 0);
      }
      l.inherits(e, a), e.prototype.processChunk = function(n) {
        if (n) {
          var p = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = p + n.data.length;
        }
        a.prototype.processChunk.call(this, n);
      }, S.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t, S, b) {
      var l = t("../utils"), a = t("./GenericWorker");
      function e(n) {
        a.call(this, "DataWorker");
        var p = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, n.then(function(v) {
          p.dataIsReady = !0, p.data = v, p.max = v && v.length || 0, p.type = l.getTypeOf(v), p.isPaused || p._tickAndRepeat();
        }, function(v) {
          p.error(v);
        });
      }
      l.inherits(e, a), e.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, e.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, l.delay(this._tickAndRepeat, [], this)), !0);
      }, e.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (l.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, e.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var n = null, p = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            n = this.data.substring(this.index, p);
            break;
          case "uint8array":
            n = this.data.subarray(this.index, p);
            break;
          case "array":
          case "nodebuffer":
            n = this.data.slice(this.index, p);
        }
        return this.index = p, this.push({ data: n, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, S.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t, S, b) {
      function l(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      l.prototype = { push: function(a) {
        this.emit("data", a);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (a) {
          this.emit("error", a);
        }
        return !0;
      }, error: function(a) {
        return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
      }, on: function(a, e) {
        return this._listeners[a].push(e), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, e) {
        if (this._listeners[a])
          for (var n = 0; n < this._listeners[a].length; n++)
            this._listeners[a][n].call(this, e);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var e = this;
        return a.on("data", function(n) {
          e.processChunk(n);
        }), a.on("end", function() {
          e.end();
        }), a.on("error", function(n) {
          e.error(n);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var a = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
      }, flush: function() {
      }, processChunk: function(a) {
        this.push(a);
      }, withStreamInfo: function(a, e) {
        return this.extraStreamInfo[a] = e, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var a in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var a = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + a : a;
      } }, S.exports = l;
    }, {}], 29: [function(t, S, b) {
      var l = t("../utils"), a = t("./ConvertWorker"), e = t("./GenericWorker"), n = t("../base64"), p = t("../support"), v = t("../external"), g = null;
      if (p.nodestream)
        try {
          g = t("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function w(s, c) {
        return new v.Promise(function(h, d) {
          var m = [], k = s._internalType, F = s._outputType, C = s._mimeType;
          s.on("data", function(B, z) {
            m.push(B), c && c(z);
          }).on("error", function(B) {
            m = [], d(B);
          }).on("end", function() {
            try {
              var B = function(z, N, E) {
                switch (z) {
                  case "blob":
                    return l.newBlob(l.transformTo("arraybuffer", N), E);
                  case "base64":
                    return n.encode(N);
                  default:
                    return l.transformTo(z, N);
                }
              }(F, function(z, N) {
                var E, $ = 0, J = null, x = 0;
                for (E = 0; E < N.length; E++)
                  x += N[E].length;
                switch (z) {
                  case "string":
                    return N.join("");
                  case "array":
                    return Array.prototype.concat.apply([], N);
                  case "uint8array":
                    for (J = new Uint8Array(x), E = 0; E < N.length; E++)
                      J.set(N[E], $), $ += N[E].length;
                    return J;
                  case "nodebuffer":
                    return Buffer.concat(N);
                  default:
                    throw new Error("concat : unsupported type '" + z + "'");
                }
              }(k, m), C);
              h(B);
            } catch (z) {
              d(z);
            }
            m = [];
          }).resume();
        });
      }
      function f(s, c, h) {
        var d = c;
        switch (c) {
          case "blob":
          case "arraybuffer":
            d = "uint8array";
            break;
          case "base64":
            d = "string";
        }
        try {
          this._internalType = d, this._outputType = c, this._mimeType = h, l.checkSupport(d), this._worker = s.pipe(new a(d)), s.lock();
        } catch (m) {
          this._worker = new e("error"), this._worker.error(m);
        }
      }
      f.prototype = { accumulate: function(s) {
        return w(this, s);
      }, on: function(s, c) {
        var h = this;
        return s === "data" ? this._worker.on(s, function(d) {
          c.call(h, d.data, d.meta);
        }) : this._worker.on(s, function() {
          l.delay(c, arguments, h);
        }), this;
      }, resume: function() {
        return l.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(s) {
        if (l.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new g(this, { objectMode: this._outputType !== "nodebuffer" }, s);
      } }, S.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t, S, b) {
      if (b.base64 = !0, b.array = !0, b.string = !0, b.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", b.nodebuffer = typeof Buffer < "u", b.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        b.blob = !1;
      else {
        var l = new ArrayBuffer(0);
        try {
          b.blob = new Blob([l], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(l), b.blob = a.getBlob("application/zip").size === 0;
          } catch {
            b.blob = !1;
          }
        }
      }
      try {
        b.nodestream = !!t("readable-stream").Readable;
      } catch {
        b.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(t, S, b) {
      for (var l = t("./utils"), a = t("./support"), e = t("./nodejsUtils"), n = t("./stream/GenericWorker"), p = new Array(256), v = 0; v < 256; v++)
        p[v] = 252 <= v ? 6 : 248 <= v ? 5 : 240 <= v ? 4 : 224 <= v ? 3 : 192 <= v ? 2 : 1;
      p[254] = p[254] = 1;
      function g() {
        n.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function w() {
        n.call(this, "utf-8 encode");
      }
      b.utf8encode = function(f) {
        return a.nodebuffer ? e.newBufferFrom(f, "utf-8") : function(s) {
          var c, h, d, m, k, F = s.length, C = 0;
          for (m = 0; m < F; m++)
            (64512 & (h = s.charCodeAt(m))) == 55296 && m + 1 < F && (64512 & (d = s.charCodeAt(m + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (d - 56320), m++), C += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
          for (c = a.uint8array ? new Uint8Array(C) : new Array(C), m = k = 0; k < C; m++)
            (64512 & (h = s.charCodeAt(m))) == 55296 && m + 1 < F && (64512 & (d = s.charCodeAt(m + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (d - 56320), m++), h < 128 ? c[k++] = h : (h < 2048 ? c[k++] = 192 | h >>> 6 : (h < 65536 ? c[k++] = 224 | h >>> 12 : (c[k++] = 240 | h >>> 18, c[k++] = 128 | h >>> 12 & 63), c[k++] = 128 | h >>> 6 & 63), c[k++] = 128 | 63 & h);
          return c;
        }(f);
      }, b.utf8decode = function(f) {
        return a.nodebuffer ? l.transformTo("nodebuffer", f).toString("utf-8") : function(s) {
          var c, h, d, m, k = s.length, F = new Array(2 * k);
          for (c = h = 0; c < k; )
            if ((d = s[c++]) < 128)
              F[h++] = d;
            else if (4 < (m = p[d]))
              F[h++] = 65533, c += m - 1;
            else {
              for (d &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && c < k; )
                d = d << 6 | 63 & s[c++], m--;
              1 < m ? F[h++] = 65533 : d < 65536 ? F[h++] = d : (d -= 65536, F[h++] = 55296 | d >> 10 & 1023, F[h++] = 56320 | 1023 & d);
            }
          return F.length !== h && (F.subarray ? F = F.subarray(0, h) : F.length = h), l.applyFromCharCode(F);
        }(f = l.transformTo(a.uint8array ? "uint8array" : "array", f));
      }, l.inherits(g, n), g.prototype.processChunk = function(f) {
        var s = l.transformTo(a.uint8array ? "uint8array" : "array", f.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var c = s;
            (s = new Uint8Array(c.length + this.leftOver.length)).set(this.leftOver, 0), s.set(c, this.leftOver.length);
          } else
            s = this.leftOver.concat(s);
          this.leftOver = null;
        }
        var h = function(m, k) {
          var F;
          for ((k = k || m.length) > m.length && (k = m.length), F = k - 1; 0 <= F && (192 & m[F]) == 128; )
            F--;
          return F < 0 || F === 0 ? k : F + p[m[F]] > k ? F : k;
        }(s), d = s;
        h !== s.length && (a.uint8array ? (d = s.subarray(0, h), this.leftOver = s.subarray(h, s.length)) : (d = s.slice(0, h), this.leftOver = s.slice(h, s.length))), this.push({ data: b.utf8decode(d), meta: f.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: b.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, b.Utf8DecodeWorker = g, l.inherits(w, n), w.prototype.processChunk = function(f) {
        this.push({ data: b.utf8encode(f.data), meta: f.meta });
      }, b.Utf8EncodeWorker = w;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, S, b) {
      var l = t("./support"), a = t("./base64"), e = t("./nodejsUtils"), n = t("./external");
      function p(c) {
        return c;
      }
      function v(c, h) {
        for (var d = 0; d < c.length; ++d)
          h[d] = 255 & c.charCodeAt(d);
        return h;
      }
      t("setimmediate"), b.newBlob = function(c, h) {
        b.checkSupport("blob");
        try {
          return new Blob([c], { type: h });
        } catch {
          try {
            var d = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return d.append(c), d.getBlob(h);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(c, h, d) {
        var m = [], k = 0, F = c.length;
        if (F <= d)
          return String.fromCharCode.apply(null, c);
        for (; k < F; )
          h === "array" || h === "nodebuffer" ? m.push(String.fromCharCode.apply(null, c.slice(k, Math.min(k + d, F)))) : m.push(String.fromCharCode.apply(null, c.subarray(k, Math.min(k + d, F)))), k += d;
        return m.join("");
      }, stringifyByChar: function(c) {
        for (var h = "", d = 0; d < c.length; d++)
          h += String.fromCharCode(c[d]);
        return h;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return l.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return l.nodebuffer && String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function w(c) {
        var h = 65536, d = b.getTypeOf(c), m = !0;
        if (d === "uint8array" ? m = g.applyCanBeUsed.uint8array : d === "nodebuffer" && (m = g.applyCanBeUsed.nodebuffer), m)
          for (; 1 < h; )
            try {
              return g.stringifyByChunk(c, d, h);
            } catch {
              h = Math.floor(h / 2);
            }
        return g.stringifyByChar(c);
      }
      function f(c, h) {
        for (var d = 0; d < c.length; d++)
          h[d] = c[d];
        return h;
      }
      b.applyFromCharCode = w;
      var s = {};
      s.string = { string: p, array: function(c) {
        return v(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return s.string.uint8array(c).buffer;
      }, uint8array: function(c) {
        return v(c, new Uint8Array(c.length));
      }, nodebuffer: function(c) {
        return v(c, e.allocBuffer(c.length));
      } }, s.array = { string: w, array: p, arraybuffer: function(c) {
        return new Uint8Array(c).buffer;
      }, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return e.newBufferFrom(c);
      } }, s.arraybuffer = { string: function(c) {
        return w(new Uint8Array(c));
      }, array: function(c) {
        return f(new Uint8Array(c), new Array(c.byteLength));
      }, arraybuffer: p, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return e.newBufferFrom(new Uint8Array(c));
      } }, s.uint8array = { string: w, array: function(c) {
        return f(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return c.buffer;
      }, uint8array: p, nodebuffer: function(c) {
        return e.newBufferFrom(c);
      } }, s.nodebuffer = { string: w, array: function(c) {
        return f(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return s.nodebuffer.uint8array(c).buffer;
      }, uint8array: function(c) {
        return f(c, new Uint8Array(c.length));
      }, nodebuffer: p }, b.transformTo = function(c, h) {
        if (h = h || "", !c)
          return h;
        b.checkSupport(c);
        var d = b.getTypeOf(h);
        return s[d][c](h);
      }, b.resolve = function(c) {
        for (var h = c.split("/"), d = [], m = 0; m < h.length; m++) {
          var k = h[m];
          k === "." || k === "" && m !== 0 && m !== h.length - 1 || (k === ".." ? d.pop() : d.push(k));
        }
        return d.join("/");
      }, b.getTypeOf = function(c) {
        return typeof c == "string" ? "string" : Object.prototype.toString.call(c) === "[object Array]" ? "array" : l.nodebuffer && e.isBuffer(c) ? "nodebuffer" : l.uint8array && c instanceof Uint8Array ? "uint8array" : l.arraybuffer && c instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, b.checkSupport = function(c) {
        if (!l[c.toLowerCase()])
          throw new Error(c + " is not supported by this platform");
      }, b.MAX_VALUE_16BITS = 65535, b.MAX_VALUE_32BITS = -1, b.pretty = function(c) {
        var h, d, m = "";
        for (d = 0; d < (c || "").length; d++)
          m += "\\x" + ((h = c.charCodeAt(d)) < 16 ? "0" : "") + h.toString(16).toUpperCase();
        return m;
      }, b.delay = function(c, h, d) {
        setImmediate(function() {
          c.apply(d || null, h || []);
        });
      }, b.inherits = function(c, h) {
        function d() {
        }
        d.prototype = h.prototype, c.prototype = new d();
      }, b.extend = function() {
        var c, h, d = {};
        for (c = 0; c < arguments.length; c++)
          for (h in arguments[c])
            Object.prototype.hasOwnProperty.call(arguments[c], h) && d[h] === void 0 && (d[h] = arguments[c][h]);
        return d;
      }, b.prepareContent = function(c, h, d, m, k) {
        return n.Promise.resolve(h).then(function(F) {
          return l.blob && (F instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(F)) !== -1) && typeof FileReader < "u" ? new n.Promise(function(C, B) {
            var z = new FileReader();
            z.onload = function(N) {
              C(N.target.result);
            }, z.onerror = function(N) {
              B(N.target.error);
            }, z.readAsArrayBuffer(F);
          }) : F;
        }).then(function(F) {
          var C = b.getTypeOf(F);
          return C ? (C === "arraybuffer" ? F = b.transformTo("uint8array", F) : C === "string" && (k ? F = a.decode(F) : d && m !== !0 && (F = function(B) {
            return v(B, l.uint8array ? new Uint8Array(B.length) : new Array(B.length));
          }(F))), F) : n.Promise.reject(new Error("Can't read the data of '" + c + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, S, b) {
      var l = t("./reader/readerFor"), a = t("./utils"), e = t("./signature"), n = t("./zipEntry"), p = t("./support");
      function v(g) {
        this.files = [], this.loadOptions = g;
      }
      v.prototype = { checkSignature: function(g) {
        if (!this.reader.readAndCheckSignature(g)) {
          this.reader.index -= 4;
          var w = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(w) + ", expected " + a.pretty(g) + ")");
        }
      }, isSignature: function(g, w) {
        var f = this.reader.index;
        this.reader.setIndex(g);
        var s = this.reader.readString(4) === w;
        return this.reader.setIndex(f), s;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var g = this.reader.readData(this.zipCommentLength), w = p.uint8array ? "uint8array" : "array", f = a.transformTo(w, g);
        this.zipComment = this.loadOptions.decodeFileName(f);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var g, w, f, s = this.zip64EndOfCentralSize - 44; 0 < s; )
          g = this.reader.readInt(2), w = this.reader.readInt(4), f = this.reader.readData(w), this.zip64ExtensibleData[g] = { id: g, length: w, value: f };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var g, w;
        for (g = 0; g < this.files.length; g++)
          w = this.files[g], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(e.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
      }, readCentralDir: function() {
        var g;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(e.CENTRAL_FILE_HEADER); )
          (g = new n({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(g);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var g = this.reader.lastIndexOfSignature(e.CENTRAL_DIRECTORY_END);
        if (g < 0)
          throw this.isSignature(0, e.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(g);
        var w = g;
        if (this.checkSignature(e.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (g = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(g), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, e.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var f = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
        var s = w - f;
        if (0 < s)
          this.isSignature(w, e.CENTRAL_FILE_HEADER) || (this.reader.zero = s);
        else if (s < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(s) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = l(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, S.exports = v;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, S, b) {
      var l = t("./reader/readerFor"), a = t("./utils"), e = t("./compressedObject"), n = t("./crc32"), p = t("./utf8"), v = t("./compressions"), g = t("./support");
      function w(f, s) {
        this.options = f, this.loadOptions = s;
      }
      w.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(f) {
        var s, c;
        if (f.skip(22), this.fileNameLength = f.readInt(2), c = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(c), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((s = function(h) {
          for (var d in v)
            if (Object.prototype.hasOwnProperty.call(v, d) && v[d].magic === h)
              return v[d];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new e(this.compressedSize, this.uncompressedSize, this.crc32, s, f.readData(this.compressedSize));
      }, readCentralPart: function(f) {
        this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
        var s = f.readInt(2);
        if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        f.skip(s), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var f = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var f = l(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
        }
      }, readExtraFields: function(f) {
        var s, c, h, d = f.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); f.index + 4 < d; )
          s = f.readInt(2), c = f.readInt(2), h = f.readData(c), this.extraFields[s] = { id: s, length: c, value: h };
        f.setIndex(d);
      }, handleUTF8: function() {
        var f = g.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
        else {
          var s = this.findExtraFieldUnicodePath();
          if (s !== null)
            this.fileNameStr = s;
          else {
            var c = a.transformTo(f, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(c);
          }
          var h = this.findExtraFieldUnicodeComment();
          if (h !== null)
            this.fileCommentStr = h;
          else {
            var d = a.transformTo(f, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(d);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var f = this.extraFields[28789];
        if (f) {
          var s = l(f.value);
          return s.readInt(1) !== 1 || n(this.fileName) !== s.readInt(4) ? null : p.utf8decode(s.readData(f.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var f = this.extraFields[25461];
        if (f) {
          var s = l(f.value);
          return s.readInt(1) !== 1 || n(this.fileComment) !== s.readInt(4) ? null : p.utf8decode(s.readData(f.length - 5));
        }
        return null;
      } }, S.exports = w;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, S, b) {
      function l(s, c, h) {
        this.name = s, this.dir = h.dir, this.date = h.date, this.comment = h.comment, this.unixPermissions = h.unixPermissions, this.dosPermissions = h.dosPermissions, this._data = c, this._dataBinary = h.binary, this.options = { compression: h.compression, compressionOptions: h.compressionOptions };
      }
      var a = t("./stream/StreamHelper"), e = t("./stream/DataWorker"), n = t("./utf8"), p = t("./compressedObject"), v = t("./stream/GenericWorker");
      l.prototype = { internalStream: function(s) {
        var c = null, h = "string";
        try {
          if (!s)
            throw new Error("No output type specified.");
          var d = (h = s.toLowerCase()) === "string" || h === "text";
          h !== "binarystring" && h !== "text" || (h = "string"), c = this._decompressWorker();
          var m = !this._dataBinary;
          m && !d && (c = c.pipe(new n.Utf8EncodeWorker())), !m && d && (c = c.pipe(new n.Utf8DecodeWorker()));
        } catch (k) {
          (c = new v("error")).error(k);
        }
        return new a(c, h, "");
      }, async: function(s, c) {
        return this.internalStream(s).accumulate(c);
      }, nodeStream: function(s, c) {
        return this.internalStream(s || "nodebuffer").toNodejsStream(c);
      }, _compressWorker: function(s, c) {
        if (this._data instanceof p && this._data.compression.magic === s.magic)
          return this._data.getCompressedWorker();
        var h = this._decompressWorker();
        return this._dataBinary || (h = h.pipe(new n.Utf8EncodeWorker())), p.createWorkerFrom(h, s, c);
      }, _decompressWorker: function() {
        return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof v ? this._data : new e(this._data);
      } };
      for (var g = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < g.length; f++)
        l.prototype[g[f]] = w;
      S.exports = l;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, S, b) {
      (function(l) {
        var a, e, n = l.MutationObserver || l.WebKitMutationObserver;
        if (n) {
          var p = 0, v = new n(s), g = l.document.createTextNode("");
          v.observe(g, { characterData: !0 }), a = function() {
            g.data = p = ++p % 2;
          };
        } else if (l.setImmediate || l.MessageChannel === void 0)
          a = "document" in l && "onreadystatechange" in l.document.createElement("script") ? function() {
            var c = l.document.createElement("script");
            c.onreadystatechange = function() {
              s(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null;
            }, l.document.documentElement.appendChild(c);
          } : function() {
            setTimeout(s, 0);
          };
        else {
          var w = new l.MessageChannel();
          w.port1.onmessage = s, a = function() {
            w.port2.postMessage(0);
          };
        }
        var f = [];
        function s() {
          var c, h;
          e = !0;
          for (var d = f.length; d; ) {
            for (h = f, f = [], c = -1; ++c < d; )
              h[c]();
            d = f.length;
          }
          e = !1;
        }
        S.exports = function(c) {
          f.push(c) !== 1 || e || a();
        };
      }).call(this, typeof Do < "u" ? Do : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(t, S, b) {
      var l = t("immediate");
      function a() {
      }
      var e = {}, n = ["REJECTED"], p = ["FULFILLED"], v = ["PENDING"];
      function g(d) {
        if (typeof d != "function")
          throw new TypeError("resolver must be a function");
        this.state = v, this.queue = [], this.outcome = void 0, d !== a && c(this, d);
      }
      function w(d, m, k) {
        this.promise = d, typeof m == "function" && (this.onFulfilled = m, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
      }
      function f(d, m, k) {
        l(function() {
          var F;
          try {
            F = m(k);
          } catch (C) {
            return e.reject(d, C);
          }
          F === d ? e.reject(d, new TypeError("Cannot resolve promise with itself")) : e.resolve(d, F);
        });
      }
      function s(d) {
        var m = d && d.then;
        if (d && (typeof d == "object" || typeof d == "function") && typeof m == "function")
          return function() {
            m.apply(d, arguments);
          };
      }
      function c(d, m) {
        var k = !1;
        function F(z) {
          k || (k = !0, e.reject(d, z));
        }
        function C(z) {
          k || (k = !0, e.resolve(d, z));
        }
        var B = h(function() {
          m(C, F);
        });
        B.status === "error" && F(B.value);
      }
      function h(d, m) {
        var k = {};
        try {
          k.value = d(m), k.status = "success";
        } catch (F) {
          k.status = "error", k.value = F;
        }
        return k;
      }
      (S.exports = g).prototype.finally = function(d) {
        if (typeof d != "function")
          return this;
        var m = this.constructor;
        return this.then(function(k) {
          return m.resolve(d()).then(function() {
            return k;
          });
        }, function(k) {
          return m.resolve(d()).then(function() {
            throw k;
          });
        });
      }, g.prototype.catch = function(d) {
        return this.then(null, d);
      }, g.prototype.then = function(d, m) {
        if (typeof d != "function" && this.state === p || typeof m != "function" && this.state === n)
          return this;
        var k = new this.constructor(a);
        return this.state !== v ? f(k, this.state === p ? d : m, this.outcome) : this.queue.push(new w(k, d, m)), k;
      }, w.prototype.callFulfilled = function(d) {
        e.resolve(this.promise, d);
      }, w.prototype.otherCallFulfilled = function(d) {
        f(this.promise, this.onFulfilled, d);
      }, w.prototype.callRejected = function(d) {
        e.reject(this.promise, d);
      }, w.prototype.otherCallRejected = function(d) {
        f(this.promise, this.onRejected, d);
      }, e.resolve = function(d, m) {
        var k = h(s, m);
        if (k.status === "error")
          return e.reject(d, k.value);
        var F = k.value;
        if (F)
          c(d, F);
        else {
          d.state = p, d.outcome = m;
          for (var C = -1, B = d.queue.length; ++C < B; )
            d.queue[C].callFulfilled(m);
        }
        return d;
      }, e.reject = function(d, m) {
        d.state = n, d.outcome = m;
        for (var k = -1, F = d.queue.length; ++k < F; )
          d.queue[k].callRejected(m);
        return d;
      }, g.resolve = function(d) {
        return d instanceof this ? d : e.resolve(new this(a), d);
      }, g.reject = function(d) {
        var m = new this(a);
        return e.reject(m, d);
      }, g.all = function(d) {
        var m = this;
        if (Object.prototype.toString.call(d) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var k = d.length, F = !1;
        if (!k)
          return this.resolve([]);
        for (var C = new Array(k), B = 0, z = -1, N = new this(a); ++z < k; )
          E(d[z], z);
        return N;
        function E($, J) {
          m.resolve($).then(function(x) {
            C[J] = x, ++B !== k || F || (F = !0, e.resolve(N, C));
          }, function(x) {
            F || (F = !0, e.reject(N, x));
          });
        }
      }, g.race = function(d) {
        var m = this;
        if (Object.prototype.toString.call(d) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var k = d.length, F = !1;
        if (!k)
          return this.resolve([]);
        for (var C = -1, B = new this(a); ++C < k; )
          z = d[C], m.resolve(z).then(function(N) {
            F || (F = !0, e.resolve(B, N));
          }, function(N) {
            F || (F = !0, e.reject(B, N));
          });
        var z;
        return B;
      };
    }, { immediate: 36 }], 38: [function(t, S, b) {
      var l = {};
      (0, t("./lib/utils/common").assign)(l, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), S.exports = l;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, S, b) {
      var l = t("./zlib/deflate"), a = t("./utils/common"), e = t("./utils/strings"), n = t("./zlib/messages"), p = t("./zlib/zstream"), v = Object.prototype.toString, g = 0, w = -1, f = 0, s = 8;
      function c(d) {
        if (!(this instanceof c))
          return new c(d);
        this.options = a.assign({ level: w, method: s, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, d || {});
        var m = this.options;
        m.raw && 0 < m.windowBits ? m.windowBits = -m.windowBits : m.gzip && 0 < m.windowBits && m.windowBits < 16 && (m.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var k = l.deflateInit2(this.strm, m.level, m.method, m.windowBits, m.memLevel, m.strategy);
        if (k !== g)
          throw new Error(n[k]);
        if (m.header && l.deflateSetHeader(this.strm, m.header), m.dictionary) {
          var F;
          if (F = typeof m.dictionary == "string" ? e.string2buf(m.dictionary) : v.call(m.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(m.dictionary) : m.dictionary, (k = l.deflateSetDictionary(this.strm, F)) !== g)
            throw new Error(n[k]);
          this._dict_set = !0;
        }
      }
      function h(d, m) {
        var k = new c(m);
        if (k.push(d, !0), k.err)
          throw k.msg || n[k.err];
        return k.result;
      }
      c.prototype.push = function(d, m) {
        var k, F, C = this.strm, B = this.options.chunkSize;
        if (this.ended)
          return !1;
        F = m === ~~m ? m : m === !0 ? 4 : 0, typeof d == "string" ? C.input = e.string2buf(d) : v.call(d) === "[object ArrayBuffer]" ? C.input = new Uint8Array(d) : C.input = d, C.next_in = 0, C.avail_in = C.input.length;
        do {
          if (C.avail_out === 0 && (C.output = new a.Buf8(B), C.next_out = 0, C.avail_out = B), (k = l.deflate(C, F)) !== 1 && k !== g)
            return this.onEnd(k), !(this.ended = !0);
          C.avail_out !== 0 && (C.avail_in !== 0 || F !== 4 && F !== 2) || (this.options.to === "string" ? this.onData(e.buf2binstring(a.shrinkBuf(C.output, C.next_out))) : this.onData(a.shrinkBuf(C.output, C.next_out)));
        } while ((0 < C.avail_in || C.avail_out === 0) && k !== 1);
        return F === 4 ? (k = l.deflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === g) : F !== 2 || (this.onEnd(g), !(C.avail_out = 0));
      }, c.prototype.onData = function(d) {
        this.chunks.push(d);
      }, c.prototype.onEnd = function(d) {
        d === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, b.Deflate = c, b.deflate = h, b.deflateRaw = function(d, m) {
        return (m = m || {}).raw = !0, h(d, m);
      }, b.gzip = function(d, m) {
        return (m = m || {}).gzip = !0, h(d, m);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, S, b) {
      var l = t("./zlib/inflate"), a = t("./utils/common"), e = t("./utils/strings"), n = t("./zlib/constants"), p = t("./zlib/messages"), v = t("./zlib/zstream"), g = t("./zlib/gzheader"), w = Object.prototype.toString;
      function f(c) {
        if (!(this instanceof f))
          return new f(c);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, c || {});
        var h = this.options;
        h.raw && 0 <= h.windowBits && h.windowBits < 16 && (h.windowBits = -h.windowBits, h.windowBits === 0 && (h.windowBits = -15)), !(0 <= h.windowBits && h.windowBits < 16) || c && c.windowBits || (h.windowBits += 32), 15 < h.windowBits && h.windowBits < 48 && !(15 & h.windowBits) && (h.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new v(), this.strm.avail_out = 0;
        var d = l.inflateInit2(this.strm, h.windowBits);
        if (d !== n.Z_OK)
          throw new Error(p[d]);
        this.header = new g(), l.inflateGetHeader(this.strm, this.header);
      }
      function s(c, h) {
        var d = new f(h);
        if (d.push(c, !0), d.err)
          throw d.msg || p[d.err];
        return d.result;
      }
      f.prototype.push = function(c, h) {
        var d, m, k, F, C, B, z = this.strm, N = this.options.chunkSize, E = this.options.dictionary, $ = !1;
        if (this.ended)
          return !1;
        m = h === ~~h ? h : h === !0 ? n.Z_FINISH : n.Z_NO_FLUSH, typeof c == "string" ? z.input = e.binstring2buf(c) : w.call(c) === "[object ArrayBuffer]" ? z.input = new Uint8Array(c) : z.input = c, z.next_in = 0, z.avail_in = z.input.length;
        do {
          if (z.avail_out === 0 && (z.output = new a.Buf8(N), z.next_out = 0, z.avail_out = N), (d = l.inflate(z, n.Z_NO_FLUSH)) === n.Z_NEED_DICT && E && (B = typeof E == "string" ? e.string2buf(E) : w.call(E) === "[object ArrayBuffer]" ? new Uint8Array(E) : E, d = l.inflateSetDictionary(this.strm, B)), d === n.Z_BUF_ERROR && $ === !0 && (d = n.Z_OK, $ = !1), d !== n.Z_STREAM_END && d !== n.Z_OK)
            return this.onEnd(d), !(this.ended = !0);
          z.next_out && (z.avail_out !== 0 && d !== n.Z_STREAM_END && (z.avail_in !== 0 || m !== n.Z_FINISH && m !== n.Z_SYNC_FLUSH) || (this.options.to === "string" ? (k = e.utf8border(z.output, z.next_out), F = z.next_out - k, C = e.buf2string(z.output, k), z.next_out = F, z.avail_out = N - F, F && a.arraySet(z.output, z.output, k, F, 0), this.onData(C)) : this.onData(a.shrinkBuf(z.output, z.next_out)))), z.avail_in === 0 && z.avail_out === 0 && ($ = !0);
        } while ((0 < z.avail_in || z.avail_out === 0) && d !== n.Z_STREAM_END);
        return d === n.Z_STREAM_END && (m = n.Z_FINISH), m === n.Z_FINISH ? (d = l.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === n.Z_OK) : m !== n.Z_SYNC_FLUSH || (this.onEnd(n.Z_OK), !(z.avail_out = 0));
      }, f.prototype.onData = function(c) {
        this.chunks.push(c);
      }, f.prototype.onEnd = function(c) {
        c === n.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
      }, b.Inflate = f, b.inflate = s, b.inflateRaw = function(c, h) {
        return (h = h || {}).raw = !0, s(c, h);
      }, b.ungzip = s;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, S, b) {
      var l = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      b.assign = function(n) {
        for (var p = Array.prototype.slice.call(arguments, 1); p.length; ) {
          var v = p.shift();
          if (v) {
            if (typeof v != "object")
              throw new TypeError(v + "must be non-object");
            for (var g in v)
              v.hasOwnProperty(g) && (n[g] = v[g]);
          }
        }
        return n;
      }, b.shrinkBuf = function(n, p) {
        return n.length === p ? n : n.subarray ? n.subarray(0, p) : (n.length = p, n);
      };
      var a = { arraySet: function(n, p, v, g, w) {
        if (p.subarray && n.subarray)
          n.set(p.subarray(v, v + g), w);
        else
          for (var f = 0; f < g; f++)
            n[w + f] = p[v + f];
      }, flattenChunks: function(n) {
        var p, v, g, w, f, s;
        for (p = g = 0, v = n.length; p < v; p++)
          g += n[p].length;
        for (s = new Uint8Array(g), p = w = 0, v = n.length; p < v; p++)
          f = n[p], s.set(f, w), w += f.length;
        return s;
      } }, e = { arraySet: function(n, p, v, g, w) {
        for (var f = 0; f < g; f++)
          n[w + f] = p[v + f];
      }, flattenChunks: function(n) {
        return [].concat.apply([], n);
      } };
      b.setTyped = function(n) {
        n ? (b.Buf8 = Uint8Array, b.Buf16 = Uint16Array, b.Buf32 = Int32Array, b.assign(b, a)) : (b.Buf8 = Array, b.Buf16 = Array, b.Buf32 = Array, b.assign(b, e));
      }, b.setTyped(l);
    }, {}], 42: [function(t, S, b) {
      var l = t("./common"), a = !0, e = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        e = !1;
      }
      for (var n = new l.Buf8(256), p = 0; p < 256; p++)
        n[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
      function v(g, w) {
        if (w < 65537 && (g.subarray && e || !g.subarray && a))
          return String.fromCharCode.apply(null, l.shrinkBuf(g, w));
        for (var f = "", s = 0; s < w; s++)
          f += String.fromCharCode(g[s]);
        return f;
      }
      n[254] = n[254] = 1, b.string2buf = function(g) {
        var w, f, s, c, h, d = g.length, m = 0;
        for (c = 0; c < d; c++)
          (64512 & (f = g.charCodeAt(c))) == 55296 && c + 1 < d && (64512 & (s = g.charCodeAt(c + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (s - 56320), c++), m += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
        for (w = new l.Buf8(m), c = h = 0; h < m; c++)
          (64512 & (f = g.charCodeAt(c))) == 55296 && c + 1 < d && (64512 & (s = g.charCodeAt(c + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (s - 56320), c++), f < 128 ? w[h++] = f : (f < 2048 ? w[h++] = 192 | f >>> 6 : (f < 65536 ? w[h++] = 224 | f >>> 12 : (w[h++] = 240 | f >>> 18, w[h++] = 128 | f >>> 12 & 63), w[h++] = 128 | f >>> 6 & 63), w[h++] = 128 | 63 & f);
        return w;
      }, b.buf2binstring = function(g) {
        return v(g, g.length);
      }, b.binstring2buf = function(g) {
        for (var w = new l.Buf8(g.length), f = 0, s = w.length; f < s; f++)
          w[f] = g.charCodeAt(f);
        return w;
      }, b.buf2string = function(g, w) {
        var f, s, c, h, d = w || g.length, m = new Array(2 * d);
        for (f = s = 0; f < d; )
          if ((c = g[f++]) < 128)
            m[s++] = c;
          else if (4 < (h = n[c]))
            m[s++] = 65533, f += h - 1;
          else {
            for (c &= h === 2 ? 31 : h === 3 ? 15 : 7; 1 < h && f < d; )
              c = c << 6 | 63 & g[f++], h--;
            1 < h ? m[s++] = 65533 : c < 65536 ? m[s++] = c : (c -= 65536, m[s++] = 55296 | c >> 10 & 1023, m[s++] = 56320 | 1023 & c);
          }
        return v(m, s);
      }, b.utf8border = function(g, w) {
        var f;
        for ((w = w || g.length) > g.length && (w = g.length), f = w - 1; 0 <= f && (192 & g[f]) == 128; )
          f--;
        return f < 0 || f === 0 ? w : f + n[g[f]] > w ? f : w;
      };
    }, { "./common": 41 }], 43: [function(t, S, b) {
      S.exports = function(l, a, e, n) {
        for (var p = 65535 & l | 0, v = l >>> 16 & 65535 | 0, g = 0; e !== 0; ) {
          for (e -= g = 2e3 < e ? 2e3 : e; v = v + (p = p + a[n++] | 0) | 0, --g; )
            ;
          p %= 65521, v %= 65521;
        }
        return p | v << 16 | 0;
      };
    }, {}], 44: [function(t, S, b) {
      S.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(t, S, b) {
      var l = function() {
        for (var a, e = [], n = 0; n < 256; n++) {
          a = n;
          for (var p = 0; p < 8; p++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          e[n] = a;
        }
        return e;
      }();
      S.exports = function(a, e, n, p) {
        var v = l, g = p + n;
        a ^= -1;
        for (var w = p; w < g; w++)
          a = a >>> 8 ^ v[255 & (a ^ e[w])];
        return -1 ^ a;
      };
    }, {}], 46: [function(t, S, b) {
      var l, a = t("../utils/common"), e = t("./trees"), n = t("./adler32"), p = t("./crc32"), v = t("./messages"), g = 0, w = 4, f = 0, s = -2, c = -1, h = 4, d = 2, m = 8, k = 9, F = 286, C = 30, B = 19, z = 2 * F + 1, N = 15, E = 3, $ = 258, J = $ + E + 1, x = 42, R = 113, r = 1, j = 2, ao = 3, H = 4;
      function ho(o, L) {
        return o.msg = v[L], L;
      }
      function G(o) {
        return (o << 1) - (4 < o ? 9 : 0);
      }
      function lo(o) {
        for (var L = o.length; 0 <= --L; )
          o[L] = 0;
      }
      function A(o) {
        var L = o.state, T = L.pending;
        T > o.avail_out && (T = o.avail_out), T !== 0 && (a.arraySet(o.output, L.pending_buf, L.pending_out, T, o.next_out), o.next_out += T, L.pending_out += T, o.total_out += T, o.avail_out -= T, L.pending -= T, L.pending === 0 && (L.pending_out = 0));
      }
      function y(o, L) {
        e._tr_flush_block(o, 0 <= o.block_start ? o.block_start : -1, o.strstart - o.block_start, L), o.block_start = o.strstart, A(o.strm);
      }
      function U(o, L) {
        o.pending_buf[o.pending++] = L;
      }
      function D(o, L) {
        o.pending_buf[o.pending++] = L >>> 8 & 255, o.pending_buf[o.pending++] = 255 & L;
      }
      function W(o, L) {
        var T, i, u = o.max_chain_length, I = o.strstart, M = o.prev_length, Z = o.nice_match, O = o.strstart > o.w_size - J ? o.strstart - (o.w_size - J) : 0, K = o.window, X = o.w_mask, Y = o.prev, eo = o.strstart + $, io = K[I + M - 1], Q = K[I + M];
        o.prev_length >= o.good_match && (u >>= 2), Z > o.lookahead && (Z = o.lookahead);
        do
          if (K[(T = L) + M] === Q && K[T + M - 1] === io && K[T] === K[I] && K[++T] === K[I + 1]) {
            I += 2, T++;
            do
              ;
            while (K[++I] === K[++T] && K[++I] === K[++T] && K[++I] === K[++T] && K[++I] === K[++T] && K[++I] === K[++T] && K[++I] === K[++T] && K[++I] === K[++T] && K[++I] === K[++T] && I < eo);
            if (i = $ - (eo - I), I = eo - $, M < i) {
              if (o.match_start = L, Z <= (M = i))
                break;
              io = K[I + M - 1], Q = K[I + M];
            }
          }
        while ((L = Y[L & X]) > O && --u != 0);
        return M <= o.lookahead ? M : o.lookahead;
      }
      function go(o) {
        var L, T, i, u, I, M, Z, O, K, X, Y = o.w_size;
        do {
          if (u = o.window_size - o.lookahead - o.strstart, o.strstart >= Y + (Y - J)) {
            for (a.arraySet(o.window, o.window, Y, Y, 0), o.match_start -= Y, o.strstart -= Y, o.block_start -= Y, L = T = o.hash_size; i = o.head[--L], o.head[L] = Y <= i ? i - Y : 0, --T; )
              ;
            for (L = T = Y; i = o.prev[--L], o.prev[L] = Y <= i ? i - Y : 0, --T; )
              ;
            u += Y;
          }
          if (o.strm.avail_in === 0)
            break;
          if (M = o.strm, Z = o.window, O = o.strstart + o.lookahead, K = u, X = void 0, X = M.avail_in, K < X && (X = K), T = X === 0 ? 0 : (M.avail_in -= X, a.arraySet(Z, M.input, M.next_in, X, O), M.state.wrap === 1 ? M.adler = n(M.adler, Z, X, O) : M.state.wrap === 2 && (M.adler = p(M.adler, Z, X, O)), M.next_in += X, M.total_in += X, X), o.lookahead += T, o.lookahead + o.insert >= E)
            for (I = o.strstart - o.insert, o.ins_h = o.window[I], o.ins_h = (o.ins_h << o.hash_shift ^ o.window[I + 1]) & o.hash_mask; o.insert && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[I + E - 1]) & o.hash_mask, o.prev[I & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = I, I++, o.insert--, !(o.lookahead + o.insert < E)); )
              ;
        } while (o.lookahead < J && o.strm.avail_in !== 0);
      }
      function oo(o, L) {
        for (var T, i; ; ) {
          if (o.lookahead < J) {
            if (go(o), o.lookahead < J && L === g)
              return r;
            if (o.lookahead === 0)
              break;
          }
          if (T = 0, o.lookahead >= E && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + E - 1]) & o.hash_mask, T = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart), T !== 0 && o.strstart - T <= o.w_size - J && (o.match_length = W(o, T)), o.match_length >= E)
            if (i = e._tr_tally(o, o.strstart - o.match_start, o.match_length - E), o.lookahead -= o.match_length, o.match_length <= o.max_lazy_match && o.lookahead >= E) {
              for (o.match_length--; o.strstart++, o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + E - 1]) & o.hash_mask, T = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart, --o.match_length != 0; )
                ;
              o.strstart++;
            } else
              o.strstart += o.match_length, o.match_length = 0, o.ins_h = o.window[o.strstart], o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + 1]) & o.hash_mask;
          else
            i = e._tr_tally(o, 0, o.window[o.strstart]), o.lookahead--, o.strstart++;
          if (i && (y(o, !1), o.strm.avail_out === 0))
            return r;
        }
        return o.insert = o.strstart < E - 1 ? o.strstart : E - 1, L === w ? (y(o, !0), o.strm.avail_out === 0 ? ao : H) : o.last_lit && (y(o, !1), o.strm.avail_out === 0) ? r : j;
      }
      function ro(o, L) {
        for (var T, i, u; ; ) {
          if (o.lookahead < J) {
            if (go(o), o.lookahead < J && L === g)
              return r;
            if (o.lookahead === 0)
              break;
          }
          if (T = 0, o.lookahead >= E && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + E - 1]) & o.hash_mask, T = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart), o.prev_length = o.match_length, o.prev_match = o.match_start, o.match_length = E - 1, T !== 0 && o.prev_length < o.max_lazy_match && o.strstart - T <= o.w_size - J && (o.match_length = W(o, T), o.match_length <= 5 && (o.strategy === 1 || o.match_length === E && 4096 < o.strstart - o.match_start) && (o.match_length = E - 1)), o.prev_length >= E && o.match_length <= o.prev_length) {
            for (u = o.strstart + o.lookahead - E, i = e._tr_tally(o, o.strstart - 1 - o.prev_match, o.prev_length - E), o.lookahead -= o.prev_length - 1, o.prev_length -= 2; ++o.strstart <= u && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + E - 1]) & o.hash_mask, T = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart), --o.prev_length != 0; )
              ;
            if (o.match_available = 0, o.match_length = E - 1, o.strstart++, i && (y(o, !1), o.strm.avail_out === 0))
              return r;
          } else if (o.match_available) {
            if ((i = e._tr_tally(o, 0, o.window[o.strstart - 1])) && y(o, !1), o.strstart++, o.lookahead--, o.strm.avail_out === 0)
              return r;
          } else
            o.match_available = 1, o.strstart++, o.lookahead--;
        }
        return o.match_available && (i = e._tr_tally(o, 0, o.window[o.strstart - 1]), o.match_available = 0), o.insert = o.strstart < E - 1 ? o.strstart : E - 1, L === w ? (y(o, !0), o.strm.avail_out === 0 ? ao : H) : o.last_lit && (y(o, !1), o.strm.avail_out === 0) ? r : j;
      }
      function to(o, L, T, i, u) {
        this.good_length = o, this.max_lazy = L, this.nice_length = T, this.max_chain = i, this.func = u;
      }
      function _o() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = m, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * z), this.dyn_dtree = new a.Buf16(2 * (2 * C + 1)), this.bl_tree = new a.Buf16(2 * (2 * B + 1)), lo(this.dyn_ltree), lo(this.dyn_dtree), lo(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(N + 1), this.heap = new a.Buf16(2 * F + 1), lo(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * F + 1), lo(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function po(o) {
        var L;
        return o && o.state ? (o.total_in = o.total_out = 0, o.data_type = d, (L = o.state).pending = 0, L.pending_out = 0, L.wrap < 0 && (L.wrap = -L.wrap), L.status = L.wrap ? x : R, o.adler = L.wrap === 2 ? 0 : 1, L.last_flush = g, e._tr_init(L), f) : ho(o, s);
      }
      function Co(o) {
        var L = po(o);
        return L === f && function(T) {
          T.window_size = 2 * T.w_size, lo(T.head), T.max_lazy_match = l[T.level].max_lazy, T.good_match = l[T.level].good_length, T.nice_match = l[T.level].nice_length, T.max_chain_length = l[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = E - 1, T.match_available = 0, T.ins_h = 0;
        }(o.state), L;
      }
      function ko(o, L, T, i, u, I) {
        if (!o)
          return s;
        var M = 1;
        if (L === c && (L = 6), i < 0 ? (M = 0, i = -i) : 15 < i && (M = 2, i -= 16), u < 1 || k < u || T !== m || i < 8 || 15 < i || L < 0 || 9 < L || I < 0 || h < I)
          return ho(o, s);
        i === 8 && (i = 9);
        var Z = new _o();
        return (o.state = Z).strm = o, Z.wrap = M, Z.gzhead = null, Z.w_bits = i, Z.w_size = 1 << Z.w_bits, Z.w_mask = Z.w_size - 1, Z.hash_bits = u + 7, Z.hash_size = 1 << Z.hash_bits, Z.hash_mask = Z.hash_size - 1, Z.hash_shift = ~~((Z.hash_bits + E - 1) / E), Z.window = new a.Buf8(2 * Z.w_size), Z.head = new a.Buf16(Z.hash_size), Z.prev = new a.Buf16(Z.w_size), Z.lit_bufsize = 1 << u + 6, Z.pending_buf_size = 4 * Z.lit_bufsize, Z.pending_buf = new a.Buf8(Z.pending_buf_size), Z.d_buf = 1 * Z.lit_bufsize, Z.l_buf = 3 * Z.lit_bufsize, Z.level = L, Z.strategy = I, Z.method = T, Co(o);
      }
      l = [new to(0, 0, 0, 0, function(o, L) {
        var T = 65535;
        for (T > o.pending_buf_size - 5 && (T = o.pending_buf_size - 5); ; ) {
          if (o.lookahead <= 1) {
            if (go(o), o.lookahead === 0 && L === g)
              return r;
            if (o.lookahead === 0)
              break;
          }
          o.strstart += o.lookahead, o.lookahead = 0;
          var i = o.block_start + T;
          if ((o.strstart === 0 || o.strstart >= i) && (o.lookahead = o.strstart - i, o.strstart = i, y(o, !1), o.strm.avail_out === 0) || o.strstart - o.block_start >= o.w_size - J && (y(o, !1), o.strm.avail_out === 0))
            return r;
        }
        return o.insert = 0, L === w ? (y(o, !0), o.strm.avail_out === 0 ? ao : H) : (o.strstart > o.block_start && (y(o, !1), o.strm.avail_out), r);
      }), new to(4, 4, 8, 4, oo), new to(4, 5, 16, 8, oo), new to(4, 6, 32, 32, oo), new to(4, 4, 16, 16, ro), new to(8, 16, 32, 32, ro), new to(8, 16, 128, 128, ro), new to(8, 32, 128, 256, ro), new to(32, 128, 258, 1024, ro), new to(32, 258, 258, 4096, ro)], b.deflateInit = function(o, L) {
        return ko(o, L, m, 15, 8, 0);
      }, b.deflateInit2 = ko, b.deflateReset = Co, b.deflateResetKeep = po, b.deflateSetHeader = function(o, L) {
        return o && o.state ? o.state.wrap !== 2 ? s : (o.state.gzhead = L, f) : s;
      }, b.deflate = function(o, L) {
        var T, i, u, I;
        if (!o || !o.state || 5 < L || L < 0)
          return o ? ho(o, s) : s;
        if (i = o.state, !o.output || !o.input && o.avail_in !== 0 || i.status === 666 && L !== w)
          return ho(o, o.avail_out === 0 ? -5 : s);
        if (i.strm = o, T = i.last_flush, i.last_flush = L, i.status === x)
          if (i.wrap === 2)
            o.adler = 0, U(i, 31), U(i, 139), U(i, 8), i.gzhead ? (U(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), U(i, 255 & i.gzhead.time), U(i, i.gzhead.time >> 8 & 255), U(i, i.gzhead.time >> 16 & 255), U(i, i.gzhead.time >> 24 & 255), U(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (U(i, 255 & i.gzhead.extra.length), U(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (o.adler = p(o.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 3), i.status = R);
          else {
            var M = m + (i.w_bits - 8 << 4) << 8;
            M |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6, i.strstart !== 0 && (M |= 32), M += 31 - M % 31, i.status = R, D(i, M), i.strstart !== 0 && (D(i, o.adler >>> 16), D(i, 65535 & o.adler)), o.adler = 1;
          }
        if (i.status === 69)
          if (i.gzhead.extra) {
            for (u = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > u && (o.adler = p(o.adler, i.pending_buf, i.pending - u, u)), A(o), u = i.pending, i.pending !== i.pending_buf_size)); )
              U(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
            i.gzhead.hcrc && i.pending > u && (o.adler = p(o.adler, i.pending_buf, i.pending - u, u)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
          } else
            i.status = 73;
        if (i.status === 73)
          if (i.gzhead.name) {
            u = i.pending;
            do {
              if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > u && (o.adler = p(o.adler, i.pending_buf, i.pending - u, u)), A(o), u = i.pending, i.pending === i.pending_buf_size)) {
                I = 1;
                break;
              }
              I = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, U(i, I);
            } while (I !== 0);
            i.gzhead.hcrc && i.pending > u && (o.adler = p(o.adler, i.pending_buf, i.pending - u, u)), I === 0 && (i.gzindex = 0, i.status = 91);
          } else
            i.status = 91;
        if (i.status === 91)
          if (i.gzhead.comment) {
            u = i.pending;
            do {
              if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > u && (o.adler = p(o.adler, i.pending_buf, i.pending - u, u)), A(o), u = i.pending, i.pending === i.pending_buf_size)) {
                I = 1;
                break;
              }
              I = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, U(i, I);
            } while (I !== 0);
            i.gzhead.hcrc && i.pending > u && (o.adler = p(o.adler, i.pending_buf, i.pending - u, u)), I === 0 && (i.status = 103);
          } else
            i.status = 103;
        if (i.status === 103 && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && A(o), i.pending + 2 <= i.pending_buf_size && (U(i, 255 & o.adler), U(i, o.adler >> 8 & 255), o.adler = 0, i.status = R)) : i.status = R), i.pending !== 0) {
          if (A(o), o.avail_out === 0)
            return i.last_flush = -1, f;
        } else if (o.avail_in === 0 && G(L) <= G(T) && L !== w)
          return ho(o, -5);
        if (i.status === 666 && o.avail_in !== 0)
          return ho(o, -5);
        if (o.avail_in !== 0 || i.lookahead !== 0 || L !== g && i.status !== 666) {
          var Z = i.strategy === 2 ? function(O, K) {
            for (var X; ; ) {
              if (O.lookahead === 0 && (go(O), O.lookahead === 0)) {
                if (K === g)
                  return r;
                break;
              }
              if (O.match_length = 0, X = e._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++, X && (y(O, !1), O.strm.avail_out === 0))
                return r;
            }
            return O.insert = 0, K === w ? (y(O, !0), O.strm.avail_out === 0 ? ao : H) : O.last_lit && (y(O, !1), O.strm.avail_out === 0) ? r : j;
          }(i, L) : i.strategy === 3 ? function(O, K) {
            for (var X, Y, eo, io, Q = O.window; ; ) {
              if (O.lookahead <= $) {
                if (go(O), O.lookahead <= $ && K === g)
                  return r;
                if (O.lookahead === 0)
                  break;
              }
              if (O.match_length = 0, O.lookahead >= E && 0 < O.strstart && (Y = Q[eo = O.strstart - 1]) === Q[++eo] && Y === Q[++eo] && Y === Q[++eo]) {
                io = O.strstart + $;
                do
                  ;
                while (Y === Q[++eo] && Y === Q[++eo] && Y === Q[++eo] && Y === Q[++eo] && Y === Q[++eo] && Y === Q[++eo] && Y === Q[++eo] && Y === Q[++eo] && eo < io);
                O.match_length = $ - (io - eo), O.match_length > O.lookahead && (O.match_length = O.lookahead);
              }
              if (O.match_length >= E ? (X = e._tr_tally(O, 1, O.match_length - E), O.lookahead -= O.match_length, O.strstart += O.match_length, O.match_length = 0) : (X = e._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++), X && (y(O, !1), O.strm.avail_out === 0))
                return r;
            }
            return O.insert = 0, K === w ? (y(O, !0), O.strm.avail_out === 0 ? ao : H) : O.last_lit && (y(O, !1), O.strm.avail_out === 0) ? r : j;
          }(i, L) : l[i.level].func(i, L);
          if (Z !== ao && Z !== H || (i.status = 666), Z === r || Z === ao)
            return o.avail_out === 0 && (i.last_flush = -1), f;
          if (Z === j && (L === 1 ? e._tr_align(i) : L !== 5 && (e._tr_stored_block(i, 0, 0, !1), L === 3 && (lo(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), A(o), o.avail_out === 0))
            return i.last_flush = -1, f;
        }
        return L !== w ? f : i.wrap <= 0 ? 1 : (i.wrap === 2 ? (U(i, 255 & o.adler), U(i, o.adler >> 8 & 255), U(i, o.adler >> 16 & 255), U(i, o.adler >> 24 & 255), U(i, 255 & o.total_in), U(i, o.total_in >> 8 & 255), U(i, o.total_in >> 16 & 255), U(i, o.total_in >> 24 & 255)) : (D(i, o.adler >>> 16), D(i, 65535 & o.adler)), A(o), 0 < i.wrap && (i.wrap = -i.wrap), i.pending !== 0 ? f : 1);
      }, b.deflateEnd = function(o) {
        var L;
        return o && o.state ? (L = o.state.status) !== x && L !== 69 && L !== 73 && L !== 91 && L !== 103 && L !== R && L !== 666 ? ho(o, s) : (o.state = null, L === R ? ho(o, -3) : f) : s;
      }, b.deflateSetDictionary = function(o, L) {
        var T, i, u, I, M, Z, O, K, X = L.length;
        if (!o || !o.state || (I = (T = o.state).wrap) === 2 || I === 1 && T.status !== x || T.lookahead)
          return s;
        for (I === 1 && (o.adler = n(o.adler, L, X, 0)), T.wrap = 0, X >= T.w_size && (I === 0 && (lo(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), K = new a.Buf8(T.w_size), a.arraySet(K, L, X - T.w_size, T.w_size, 0), L = K, X = T.w_size), M = o.avail_in, Z = o.next_in, O = o.input, o.avail_in = X, o.next_in = 0, o.input = L, go(T); T.lookahead >= E; ) {
          for (i = T.strstart, u = T.lookahead - (E - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[i + E - 1]) & T.hash_mask, T.prev[i & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = i, i++, --u; )
            ;
          T.strstart = i, T.lookahead = E - 1, go(T);
        }
        return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = E - 1, T.match_available = 0, o.next_in = Z, o.input = O, o.avail_in = M, T.wrap = I, f;
      }, b.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, S, b) {
      S.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(t, S, b) {
      S.exports = function(l, a) {
        var e, n, p, v, g, w, f, s, c, h, d, m, k, F, C, B, z, N, E, $, J, x, R, r, j;
        e = l.state, n = l.next_in, r = l.input, p = n + (l.avail_in - 5), v = l.next_out, j = l.output, g = v - (a - l.avail_out), w = v + (l.avail_out - 257), f = e.dmax, s = e.wsize, c = e.whave, h = e.wnext, d = e.window, m = e.hold, k = e.bits, F = e.lencode, C = e.distcode, B = (1 << e.lenbits) - 1, z = (1 << e.distbits) - 1;
        o:
          do {
            k < 15 && (m += r[n++] << k, k += 8, m += r[n++] << k, k += 8), N = F[m & B];
            c:
              for (; ; ) {
                if (m >>>= E = N >>> 24, k -= E, (E = N >>> 16 & 255) === 0)
                  j[v++] = 65535 & N;
                else {
                  if (!(16 & E)) {
                    if (!(64 & E)) {
                      N = F[(65535 & N) + (m & (1 << E) - 1)];
                      continue c;
                    }
                    if (32 & E) {
                      e.mode = 12;
                      break o;
                    }
                    l.msg = "invalid literal/length code", e.mode = 30;
                    break o;
                  }
                  $ = 65535 & N, (E &= 15) && (k < E && (m += r[n++] << k, k += 8), $ += m & (1 << E) - 1, m >>>= E, k -= E), k < 15 && (m += r[n++] << k, k += 8, m += r[n++] << k, k += 8), N = C[m & z];
                  e:
                    for (; ; ) {
                      if (m >>>= E = N >>> 24, k -= E, !(16 & (E = N >>> 16 & 255))) {
                        if (!(64 & E)) {
                          N = C[(65535 & N) + (m & (1 << E) - 1)];
                          continue e;
                        }
                        l.msg = "invalid distance code", e.mode = 30;
                        break o;
                      }
                      if (J = 65535 & N, k < (E &= 15) && (m += r[n++] << k, (k += 8) < E && (m += r[n++] << k, k += 8)), f < (J += m & (1 << E) - 1)) {
                        l.msg = "invalid distance too far back", e.mode = 30;
                        break o;
                      }
                      if (m >>>= E, k -= E, (E = v - g) < J) {
                        if (c < (E = J - E) && e.sane) {
                          l.msg = "invalid distance too far back", e.mode = 30;
                          break o;
                        }
                        if (R = d, (x = 0) === h) {
                          if (x += s - E, E < $) {
                            for ($ -= E; j[v++] = d[x++], --E; )
                              ;
                            x = v - J, R = j;
                          }
                        } else if (h < E) {
                          if (x += s + h - E, (E -= h) < $) {
                            for ($ -= E; j[v++] = d[x++], --E; )
                              ;
                            if (x = 0, h < $) {
                              for ($ -= E = h; j[v++] = d[x++], --E; )
                                ;
                              x = v - J, R = j;
                            }
                          }
                        } else if (x += h - E, E < $) {
                          for ($ -= E; j[v++] = d[x++], --E; )
                            ;
                          x = v - J, R = j;
                        }
                        for (; 2 < $; )
                          j[v++] = R[x++], j[v++] = R[x++], j[v++] = R[x++], $ -= 3;
                        $ && (j[v++] = R[x++], 1 < $ && (j[v++] = R[x++]));
                      } else {
                        for (x = v - J; j[v++] = j[x++], j[v++] = j[x++], j[v++] = j[x++], 2 < ($ -= 3); )
                          ;
                        $ && (j[v++] = j[x++], 1 < $ && (j[v++] = j[x++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (n < p && v < w);
        n -= $ = k >> 3, m &= (1 << (k -= $ << 3)) - 1, l.next_in = n, l.next_out = v, l.avail_in = n < p ? p - n + 5 : 5 - (n - p), l.avail_out = v < w ? w - v + 257 : 257 - (v - w), e.hold = m, e.bits = k;
      };
    }, {}], 49: [function(t, S, b) {
      var l = t("../utils/common"), a = t("./adler32"), e = t("./crc32"), n = t("./inffast"), p = t("./inftrees"), v = 1, g = 2, w = 0, f = -2, s = 1, c = 852, h = 592;
      function d(x) {
        return (x >>> 24 & 255) + (x >>> 8 & 65280) + ((65280 & x) << 8) + ((255 & x) << 24);
      }
      function m() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new l.Buf16(320), this.work = new l.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function k(x) {
        var R;
        return x && x.state ? (R = x.state, x.total_in = x.total_out = R.total = 0, x.msg = "", R.wrap && (x.adler = 1 & R.wrap), R.mode = s, R.last = 0, R.havedict = 0, R.dmax = 32768, R.head = null, R.hold = 0, R.bits = 0, R.lencode = R.lendyn = new l.Buf32(c), R.distcode = R.distdyn = new l.Buf32(h), R.sane = 1, R.back = -1, w) : f;
      }
      function F(x) {
        var R;
        return x && x.state ? ((R = x.state).wsize = 0, R.whave = 0, R.wnext = 0, k(x)) : f;
      }
      function C(x, R) {
        var r, j;
        return x && x.state ? (j = x.state, R < 0 ? (r = 0, R = -R) : (r = 1 + (R >> 4), R < 48 && (R &= 15)), R && (R < 8 || 15 < R) ? f : (j.window !== null && j.wbits !== R && (j.window = null), j.wrap = r, j.wbits = R, F(x))) : f;
      }
      function B(x, R) {
        var r, j;
        return x ? (j = new m(), (x.state = j).window = null, (r = C(x, R)) !== w && (x.state = null), r) : f;
      }
      var z, N, E = !0;
      function $(x) {
        if (E) {
          var R;
          for (z = new l.Buf32(512), N = new l.Buf32(32), R = 0; R < 144; )
            x.lens[R++] = 8;
          for (; R < 256; )
            x.lens[R++] = 9;
          for (; R < 280; )
            x.lens[R++] = 7;
          for (; R < 288; )
            x.lens[R++] = 8;
          for (p(v, x.lens, 0, 288, z, 0, x.work, { bits: 9 }), R = 0; R < 32; )
            x.lens[R++] = 5;
          p(g, x.lens, 0, 32, N, 0, x.work, { bits: 5 }), E = !1;
        }
        x.lencode = z, x.lenbits = 9, x.distcode = N, x.distbits = 5;
      }
      function J(x, R, r, j) {
        var ao, H = x.state;
        return H.window === null && (H.wsize = 1 << H.wbits, H.wnext = 0, H.whave = 0, H.window = new l.Buf8(H.wsize)), j >= H.wsize ? (l.arraySet(H.window, R, r - H.wsize, H.wsize, 0), H.wnext = 0, H.whave = H.wsize) : (j < (ao = H.wsize - H.wnext) && (ao = j), l.arraySet(H.window, R, r - j, ao, H.wnext), (j -= ao) ? (l.arraySet(H.window, R, r - j, j, 0), H.wnext = j, H.whave = H.wsize) : (H.wnext += ao, H.wnext === H.wsize && (H.wnext = 0), H.whave < H.wsize && (H.whave += ao))), 0;
      }
      b.inflateReset = F, b.inflateReset2 = C, b.inflateResetKeep = k, b.inflateInit = function(x) {
        return B(x, 15);
      }, b.inflateInit2 = B, b.inflate = function(x, R) {
        var r, j, ao, H, ho, G, lo, A, y, U, D, W, go, oo, ro, to, _o, po, Co, ko, o, L, T, i, u = 0, I = new l.Buf8(4), M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!x || !x.state || !x.output || !x.input && x.avail_in !== 0)
          return f;
        (r = x.state).mode === 12 && (r.mode = 13), ho = x.next_out, ao = x.output, lo = x.avail_out, H = x.next_in, j = x.input, G = x.avail_in, A = r.hold, y = r.bits, U = G, D = lo, L = w;
        o:
          for (; ; )
            switch (r.mode) {
              case s:
                if (r.wrap === 0) {
                  r.mode = 13;
                  break;
                }
                for (; y < 16; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                if (2 & r.wrap && A === 35615) {
                  I[r.check = 0] = 255 & A, I[1] = A >>> 8 & 255, r.check = e(r.check, I, 2, 0), y = A = 0, r.mode = 2;
                  break;
                }
                if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & A) << 8) + (A >> 8)) % 31) {
                  x.msg = "incorrect header check", r.mode = 30;
                  break;
                }
                if ((15 & A) != 8) {
                  x.msg = "unknown compression method", r.mode = 30;
                  break;
                }
                if (y -= 4, o = 8 + (15 & (A >>>= 4)), r.wbits === 0)
                  r.wbits = o;
                else if (o > r.wbits) {
                  x.msg = "invalid window size", r.mode = 30;
                  break;
                }
                r.dmax = 1 << o, x.adler = r.check = 1, r.mode = 512 & A ? 10 : 12, y = A = 0;
                break;
              case 2:
                for (; y < 16; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                if (r.flags = A, (255 & r.flags) != 8) {
                  x.msg = "unknown compression method", r.mode = 30;
                  break;
                }
                if (57344 & r.flags) {
                  x.msg = "unknown header flags set", r.mode = 30;
                  break;
                }
                r.head && (r.head.text = A >> 8 & 1), 512 & r.flags && (I[0] = 255 & A, I[1] = A >>> 8 & 255, r.check = e(r.check, I, 2, 0)), y = A = 0, r.mode = 3;
              case 3:
                for (; y < 32; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                r.head && (r.head.time = A), 512 & r.flags && (I[0] = 255 & A, I[1] = A >>> 8 & 255, I[2] = A >>> 16 & 255, I[3] = A >>> 24 & 255, r.check = e(r.check, I, 4, 0)), y = A = 0, r.mode = 4;
              case 4:
                for (; y < 16; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                r.head && (r.head.xflags = 255 & A, r.head.os = A >> 8), 512 & r.flags && (I[0] = 255 & A, I[1] = A >>> 8 & 255, r.check = e(r.check, I, 2, 0)), y = A = 0, r.mode = 5;
              case 5:
                if (1024 & r.flags) {
                  for (; y < 16; ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  r.length = A, r.head && (r.head.extra_len = A), 512 & r.flags && (I[0] = 255 & A, I[1] = A >>> 8 & 255, r.check = e(r.check, I, 2, 0)), y = A = 0;
                } else
                  r.head && (r.head.extra = null);
                r.mode = 6;
              case 6:
                if (1024 & r.flags && (G < (W = r.length) && (W = G), W && (r.head && (o = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), l.arraySet(r.head.extra, j, H, W, o)), 512 & r.flags && (r.check = e(r.check, j, W, H)), G -= W, H += W, r.length -= W), r.length))
                  break o;
                r.length = 0, r.mode = 7;
              case 7:
                if (2048 & r.flags) {
                  if (G === 0)
                    break o;
                  for (W = 0; o = j[H + W++], r.head && o && r.length < 65536 && (r.head.name += String.fromCharCode(o)), o && W < G; )
                    ;
                  if (512 & r.flags && (r.check = e(r.check, j, W, H)), G -= W, H += W, o)
                    break o;
                } else
                  r.head && (r.head.name = null);
                r.length = 0, r.mode = 8;
              case 8:
                if (4096 & r.flags) {
                  if (G === 0)
                    break o;
                  for (W = 0; o = j[H + W++], r.head && o && r.length < 65536 && (r.head.comment += String.fromCharCode(o)), o && W < G; )
                    ;
                  if (512 & r.flags && (r.check = e(r.check, j, W, H)), G -= W, H += W, o)
                    break o;
                } else
                  r.head && (r.head.comment = null);
                r.mode = 9;
              case 9:
                if (512 & r.flags) {
                  for (; y < 16; ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  if (A !== (65535 & r.check)) {
                    x.msg = "header crc mismatch", r.mode = 30;
                    break;
                  }
                  y = A = 0;
                }
                r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), x.adler = r.check = 0, r.mode = 12;
                break;
              case 10:
                for (; y < 32; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                x.adler = r.check = d(A), y = A = 0, r.mode = 11;
              case 11:
                if (r.havedict === 0)
                  return x.next_out = ho, x.avail_out = lo, x.next_in = H, x.avail_in = G, r.hold = A, r.bits = y, 2;
                x.adler = r.check = 1, r.mode = 12;
              case 12:
                if (R === 5 || R === 6)
                  break o;
              case 13:
                if (r.last) {
                  A >>>= 7 & y, y -= 7 & y, r.mode = 27;
                  break;
                }
                for (; y < 3; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                switch (r.last = 1 & A, y -= 1, 3 & (A >>>= 1)) {
                  case 0:
                    r.mode = 14;
                    break;
                  case 1:
                    if ($(r), r.mode = 20, R !== 6)
                      break;
                    A >>>= 2, y -= 2;
                    break o;
                  case 2:
                    r.mode = 17;
                    break;
                  case 3:
                    x.msg = "invalid block type", r.mode = 30;
                }
                A >>>= 2, y -= 2;
                break;
              case 14:
                for (A >>>= 7 & y, y -= 7 & y; y < 32; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                if ((65535 & A) != (A >>> 16 ^ 65535)) {
                  x.msg = "invalid stored block lengths", r.mode = 30;
                  break;
                }
                if (r.length = 65535 & A, y = A = 0, r.mode = 15, R === 6)
                  break o;
              case 15:
                r.mode = 16;
              case 16:
                if (W = r.length) {
                  if (G < W && (W = G), lo < W && (W = lo), W === 0)
                    break o;
                  l.arraySet(ao, j, H, W, ho), G -= W, H += W, lo -= W, ho += W, r.length -= W;
                  break;
                }
                r.mode = 12;
                break;
              case 17:
                for (; y < 14; ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                if (r.nlen = 257 + (31 & A), A >>>= 5, y -= 5, r.ndist = 1 + (31 & A), A >>>= 5, y -= 5, r.ncode = 4 + (15 & A), A >>>= 4, y -= 4, 286 < r.nlen || 30 < r.ndist) {
                  x.msg = "too many length or distance symbols", r.mode = 30;
                  break;
                }
                r.have = 0, r.mode = 18;
              case 18:
                for (; r.have < r.ncode; ) {
                  for (; y < 3; ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  r.lens[M[r.have++]] = 7 & A, A >>>= 3, y -= 3;
                }
                for (; r.have < 19; )
                  r.lens[M[r.have++]] = 0;
                if (r.lencode = r.lendyn, r.lenbits = 7, T = { bits: r.lenbits }, L = p(0, r.lens, 0, 19, r.lencode, 0, r.work, T), r.lenbits = T.bits, L) {
                  x.msg = "invalid code lengths set", r.mode = 30;
                  break;
                }
                r.have = 0, r.mode = 19;
              case 19:
                for (; r.have < r.nlen + r.ndist; ) {
                  for (; to = (u = r.lencode[A & (1 << r.lenbits) - 1]) >>> 16 & 255, _o = 65535 & u, !((ro = u >>> 24) <= y); ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  if (_o < 16)
                    A >>>= ro, y -= ro, r.lens[r.have++] = _o;
                  else {
                    if (_o === 16) {
                      for (i = ro + 2; y < i; ) {
                        if (G === 0)
                          break o;
                        G--, A += j[H++] << y, y += 8;
                      }
                      if (A >>>= ro, y -= ro, r.have === 0) {
                        x.msg = "invalid bit length repeat", r.mode = 30;
                        break;
                      }
                      o = r.lens[r.have - 1], W = 3 + (3 & A), A >>>= 2, y -= 2;
                    } else if (_o === 17) {
                      for (i = ro + 3; y < i; ) {
                        if (G === 0)
                          break o;
                        G--, A += j[H++] << y, y += 8;
                      }
                      y -= ro, o = 0, W = 3 + (7 & (A >>>= ro)), A >>>= 3, y -= 3;
                    } else {
                      for (i = ro + 7; y < i; ) {
                        if (G === 0)
                          break o;
                        G--, A += j[H++] << y, y += 8;
                      }
                      y -= ro, o = 0, W = 11 + (127 & (A >>>= ro)), A >>>= 7, y -= 7;
                    }
                    if (r.have + W > r.nlen + r.ndist) {
                      x.msg = "invalid bit length repeat", r.mode = 30;
                      break;
                    }
                    for (; W--; )
                      r.lens[r.have++] = o;
                  }
                }
                if (r.mode === 30)
                  break;
                if (r.lens[256] === 0) {
                  x.msg = "invalid code -- missing end-of-block", r.mode = 30;
                  break;
                }
                if (r.lenbits = 9, T = { bits: r.lenbits }, L = p(v, r.lens, 0, r.nlen, r.lencode, 0, r.work, T), r.lenbits = T.bits, L) {
                  x.msg = "invalid literal/lengths set", r.mode = 30;
                  break;
                }
                if (r.distbits = 6, r.distcode = r.distdyn, T = { bits: r.distbits }, L = p(g, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, T), r.distbits = T.bits, L) {
                  x.msg = "invalid distances set", r.mode = 30;
                  break;
                }
                if (r.mode = 20, R === 6)
                  break o;
              case 20:
                r.mode = 21;
              case 21:
                if (6 <= G && 258 <= lo) {
                  x.next_out = ho, x.avail_out = lo, x.next_in = H, x.avail_in = G, r.hold = A, r.bits = y, n(x, D), ho = x.next_out, ao = x.output, lo = x.avail_out, H = x.next_in, j = x.input, G = x.avail_in, A = r.hold, y = r.bits, r.mode === 12 && (r.back = -1);
                  break;
                }
                for (r.back = 0; to = (u = r.lencode[A & (1 << r.lenbits) - 1]) >>> 16 & 255, _o = 65535 & u, !((ro = u >>> 24) <= y); ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                if (to && !(240 & to)) {
                  for (po = ro, Co = to, ko = _o; to = (u = r.lencode[ko + ((A & (1 << po + Co) - 1) >> po)]) >>> 16 & 255, _o = 65535 & u, !(po + (ro = u >>> 24) <= y); ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  A >>>= po, y -= po, r.back += po;
                }
                if (A >>>= ro, y -= ro, r.back += ro, r.length = _o, to === 0) {
                  r.mode = 26;
                  break;
                }
                if (32 & to) {
                  r.back = -1, r.mode = 12;
                  break;
                }
                if (64 & to) {
                  x.msg = "invalid literal/length code", r.mode = 30;
                  break;
                }
                r.extra = 15 & to, r.mode = 22;
              case 22:
                if (r.extra) {
                  for (i = r.extra; y < i; ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  r.length += A & (1 << r.extra) - 1, A >>>= r.extra, y -= r.extra, r.back += r.extra;
                }
                r.was = r.length, r.mode = 23;
              case 23:
                for (; to = (u = r.distcode[A & (1 << r.distbits) - 1]) >>> 16 & 255, _o = 65535 & u, !((ro = u >>> 24) <= y); ) {
                  if (G === 0)
                    break o;
                  G--, A += j[H++] << y, y += 8;
                }
                if (!(240 & to)) {
                  for (po = ro, Co = to, ko = _o; to = (u = r.distcode[ko + ((A & (1 << po + Co) - 1) >> po)]) >>> 16 & 255, _o = 65535 & u, !(po + (ro = u >>> 24) <= y); ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  A >>>= po, y -= po, r.back += po;
                }
                if (A >>>= ro, y -= ro, r.back += ro, 64 & to) {
                  x.msg = "invalid distance code", r.mode = 30;
                  break;
                }
                r.offset = _o, r.extra = 15 & to, r.mode = 24;
              case 24:
                if (r.extra) {
                  for (i = r.extra; y < i; ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  r.offset += A & (1 << r.extra) - 1, A >>>= r.extra, y -= r.extra, r.back += r.extra;
                }
                if (r.offset > r.dmax) {
                  x.msg = "invalid distance too far back", r.mode = 30;
                  break;
                }
                r.mode = 25;
              case 25:
                if (lo === 0)
                  break o;
                if (W = D - lo, r.offset > W) {
                  if ((W = r.offset - W) > r.whave && r.sane) {
                    x.msg = "invalid distance too far back", r.mode = 30;
                    break;
                  }
                  go = W > r.wnext ? (W -= r.wnext, r.wsize - W) : r.wnext - W, W > r.length && (W = r.length), oo = r.window;
                } else
                  oo = ao, go = ho - r.offset, W = r.length;
                for (lo < W && (W = lo), lo -= W, r.length -= W; ao[ho++] = oo[go++], --W; )
                  ;
                r.length === 0 && (r.mode = 21);
                break;
              case 26:
                if (lo === 0)
                  break o;
                ao[ho++] = r.length, lo--, r.mode = 21;
                break;
              case 27:
                if (r.wrap) {
                  for (; y < 32; ) {
                    if (G === 0)
                      break o;
                    G--, A |= j[H++] << y, y += 8;
                  }
                  if (D -= lo, x.total_out += D, r.total += D, D && (x.adler = r.check = r.flags ? e(r.check, ao, D, ho - D) : a(r.check, ao, D, ho - D)), D = lo, (r.flags ? A : d(A)) !== r.check) {
                    x.msg = "incorrect data check", r.mode = 30;
                    break;
                  }
                  y = A = 0;
                }
                r.mode = 28;
              case 28:
                if (r.wrap && r.flags) {
                  for (; y < 32; ) {
                    if (G === 0)
                      break o;
                    G--, A += j[H++] << y, y += 8;
                  }
                  if (A !== (4294967295 & r.total)) {
                    x.msg = "incorrect length check", r.mode = 30;
                    break;
                  }
                  y = A = 0;
                }
                r.mode = 29;
              case 29:
                L = 1;
                break o;
              case 30:
                L = -3;
                break o;
              case 31:
                return -4;
              case 32:
              default:
                return f;
            }
        return x.next_out = ho, x.avail_out = lo, x.next_in = H, x.avail_in = G, r.hold = A, r.bits = y, (r.wsize || D !== x.avail_out && r.mode < 30 && (r.mode < 27 || R !== 4)) && J(x, x.output, x.next_out, D - x.avail_out) ? (r.mode = 31, -4) : (U -= x.avail_in, D -= x.avail_out, x.total_in += U, x.total_out += D, r.total += D, r.wrap && D && (x.adler = r.check = r.flags ? e(r.check, ao, D, x.next_out - D) : a(r.check, ao, D, x.next_out - D)), x.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === 12 ? 128 : 0) + (r.mode === 20 || r.mode === 15 ? 256 : 0), (U == 0 && D === 0 || R === 4) && L === w && (L = -5), L);
      }, b.inflateEnd = function(x) {
        if (!x || !x.state)
          return f;
        var R = x.state;
        return R.window && (R.window = null), x.state = null, w;
      }, b.inflateGetHeader = function(x, R) {
        var r;
        return x && x.state && 2 & (r = x.state).wrap ? ((r.head = R).done = !1, w) : f;
      }, b.inflateSetDictionary = function(x, R) {
        var r, j = R.length;
        return x && x.state ? (r = x.state).wrap !== 0 && r.mode !== 11 ? f : r.mode === 11 && a(1, R, j, 0) !== r.check ? -3 : J(x, R, j, j) ? (r.mode = 31, -4) : (r.havedict = 1, w) : f;
      }, b.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, S, b) {
      var l = t("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], e = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], n = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      S.exports = function(v, g, w, f, s, c, h, d) {
        var m, k, F, C, B, z, N, E, $, J = d.bits, x = 0, R = 0, r = 0, j = 0, ao = 0, H = 0, ho = 0, G = 0, lo = 0, A = 0, y = null, U = 0, D = new l.Buf16(16), W = new l.Buf16(16), go = null, oo = 0;
        for (x = 0; x <= 15; x++)
          D[x] = 0;
        for (R = 0; R < f; R++)
          D[g[w + R]]++;
        for (ao = J, j = 15; 1 <= j && D[j] === 0; j--)
          ;
        if (j < ao && (ao = j), j === 0)
          return s[c++] = 20971520, s[c++] = 20971520, d.bits = 1, 0;
        for (r = 1; r < j && D[r] === 0; r++)
          ;
        for (ao < r && (ao = r), x = G = 1; x <= 15; x++)
          if (G <<= 1, (G -= D[x]) < 0)
            return -1;
        if (0 < G && (v === 0 || j !== 1))
          return -1;
        for (W[1] = 0, x = 1; x < 15; x++)
          W[x + 1] = W[x] + D[x];
        for (R = 0; R < f; R++)
          g[w + R] !== 0 && (h[W[g[w + R]]++] = R);
        if (z = v === 0 ? (y = go = h, 19) : v === 1 ? (y = a, U -= 257, go = e, oo -= 257, 256) : (y = n, go = p, -1), x = r, B = c, ho = R = A = 0, F = -1, C = (lo = 1 << (H = ao)) - 1, v === 1 && 852 < lo || v === 2 && 592 < lo)
          return 1;
        for (; ; ) {
          for (N = x - ho, $ = h[R] < z ? (E = 0, h[R]) : h[R] > z ? (E = go[oo + h[R]], y[U + h[R]]) : (E = 96, 0), m = 1 << x - ho, r = k = 1 << H; s[B + (A >> ho) + (k -= m)] = N << 24 | E << 16 | $ | 0, k !== 0; )
            ;
          for (m = 1 << x - 1; A & m; )
            m >>= 1;
          if (m !== 0 ? (A &= m - 1, A += m) : A = 0, R++, --D[x] == 0) {
            if (x === j)
              break;
            x = g[w + h[R]];
          }
          if (ao < x && (A & C) !== F) {
            for (ho === 0 && (ho = ao), B += r, G = 1 << (H = x - ho); H + ho < j && !((G -= D[H + ho]) <= 0); )
              H++, G <<= 1;
            if (lo += 1 << H, v === 1 && 852 < lo || v === 2 && 592 < lo)
              return 1;
            s[F = A & C] = ao << 24 | H << 16 | B - c | 0;
          }
        }
        return A !== 0 && (s[B + A] = x - ho << 24 | 64 << 16 | 0), d.bits = ao, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(t, S, b) {
      S.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(t, S, b) {
      var l = t("../utils/common"), a = 0, e = 1;
      function n(u) {
        for (var I = u.length; 0 <= --I; )
          u[I] = 0;
      }
      var p = 0, v = 29, g = 256, w = g + 1 + v, f = 30, s = 19, c = 2 * w + 1, h = 15, d = 16, m = 7, k = 256, F = 16, C = 17, B = 18, z = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], N = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], J = new Array(2 * (w + 2));
      n(J);
      var x = new Array(2 * f);
      n(x);
      var R = new Array(512);
      n(R);
      var r = new Array(256);
      n(r);
      var j = new Array(v);
      n(j);
      var ao, H, ho, G = new Array(f);
      function lo(u, I, M, Z, O) {
        this.static_tree = u, this.extra_bits = I, this.extra_base = M, this.elems = Z, this.max_length = O, this.has_stree = u && u.length;
      }
      function A(u, I) {
        this.dyn_tree = u, this.max_code = 0, this.stat_desc = I;
      }
      function y(u) {
        return u < 256 ? R[u] : R[256 + (u >>> 7)];
      }
      function U(u, I) {
        u.pending_buf[u.pending++] = 255 & I, u.pending_buf[u.pending++] = I >>> 8 & 255;
      }
      function D(u, I, M) {
        u.bi_valid > d - M ? (u.bi_buf |= I << u.bi_valid & 65535, U(u, u.bi_buf), u.bi_buf = I >> d - u.bi_valid, u.bi_valid += M - d) : (u.bi_buf |= I << u.bi_valid & 65535, u.bi_valid += M);
      }
      function W(u, I, M) {
        D(u, M[2 * I], M[2 * I + 1]);
      }
      function go(u, I) {
        for (var M = 0; M |= 1 & u, u >>>= 1, M <<= 1, 0 < --I; )
          ;
        return M >>> 1;
      }
      function oo(u, I, M) {
        var Z, O, K = new Array(h + 1), X = 0;
        for (Z = 1; Z <= h; Z++)
          K[Z] = X = X + M[Z - 1] << 1;
        for (O = 0; O <= I; O++) {
          var Y = u[2 * O + 1];
          Y !== 0 && (u[2 * O] = go(K[Y]++, Y));
        }
      }
      function ro(u) {
        var I;
        for (I = 0; I < w; I++)
          u.dyn_ltree[2 * I] = 0;
        for (I = 0; I < f; I++)
          u.dyn_dtree[2 * I] = 0;
        for (I = 0; I < s; I++)
          u.bl_tree[2 * I] = 0;
        u.dyn_ltree[2 * k] = 1, u.opt_len = u.static_len = 0, u.last_lit = u.matches = 0;
      }
      function to(u) {
        8 < u.bi_valid ? U(u, u.bi_buf) : 0 < u.bi_valid && (u.pending_buf[u.pending++] = u.bi_buf), u.bi_buf = 0, u.bi_valid = 0;
      }
      function _o(u, I, M, Z) {
        var O = 2 * I, K = 2 * M;
        return u[O] < u[K] || u[O] === u[K] && Z[I] <= Z[M];
      }
      function po(u, I, M) {
        for (var Z = u.heap[M], O = M << 1; O <= u.heap_len && (O < u.heap_len && _o(I, u.heap[O + 1], u.heap[O], u.depth) && O++, !_o(I, Z, u.heap[O], u.depth)); )
          u.heap[M] = u.heap[O], M = O, O <<= 1;
        u.heap[M] = Z;
      }
      function Co(u, I, M) {
        var Z, O, K, X, Y = 0;
        if (u.last_lit !== 0)
          for (; Z = u.pending_buf[u.d_buf + 2 * Y] << 8 | u.pending_buf[u.d_buf + 2 * Y + 1], O = u.pending_buf[u.l_buf + Y], Y++, Z === 0 ? W(u, O, I) : (W(u, (K = r[O]) + g + 1, I), (X = z[K]) !== 0 && D(u, O -= j[K], X), W(u, K = y(--Z), M), (X = N[K]) !== 0 && D(u, Z -= G[K], X)), Y < u.last_lit; )
            ;
        W(u, k, I);
      }
      function ko(u, I) {
        var M, Z, O, K = I.dyn_tree, X = I.stat_desc.static_tree, Y = I.stat_desc.has_stree, eo = I.stat_desc.elems, io = -1;
        for (u.heap_len = 0, u.heap_max = c, M = 0; M < eo; M++)
          K[2 * M] !== 0 ? (u.heap[++u.heap_len] = io = M, u.depth[M] = 0) : K[2 * M + 1] = 0;
        for (; u.heap_len < 2; )
          K[2 * (O = u.heap[++u.heap_len] = io < 2 ? ++io : 0)] = 1, u.depth[O] = 0, u.opt_len--, Y && (u.static_len -= X[2 * O + 1]);
        for (I.max_code = io, M = u.heap_len >> 1; 1 <= M; M--)
          po(u, K, M);
        for (O = eo; M = u.heap[1], u.heap[1] = u.heap[u.heap_len--], po(u, K, 1), Z = u.heap[1], u.heap[--u.heap_max] = M, u.heap[--u.heap_max] = Z, K[2 * O] = K[2 * M] + K[2 * Z], u.depth[O] = (u.depth[M] >= u.depth[Z] ? u.depth[M] : u.depth[Z]) + 1, K[2 * M + 1] = K[2 * Z + 1] = O, u.heap[1] = O++, po(u, K, 1), 2 <= u.heap_len; )
          ;
        u.heap[--u.heap_max] = u.heap[1], function(Q, V) {
          var mo, q, fo, no, wo, co, uo = V.dyn_tree, Ao = V.max_code, yo = V.stat_desc.static_tree, xo = V.stat_desc.has_stree, so = V.stat_desc.extra_bits, bo = V.stat_desc.extra_base, vo = V.stat_desc.max_length, Io = 0;
          for (no = 0; no <= h; no++)
            Q.bl_count[no] = 0;
          for (uo[2 * Q.heap[Q.heap_max] + 1] = 0, mo = Q.heap_max + 1; mo < c; mo++)
            vo < (no = uo[2 * uo[2 * (q = Q.heap[mo]) + 1] + 1] + 1) && (no = vo, Io++), uo[2 * q + 1] = no, Ao < q || (Q.bl_count[no]++, wo = 0, bo <= q && (wo = so[q - bo]), co = uo[2 * q], Q.opt_len += co * (no + wo), xo && (Q.static_len += co * (yo[2 * q + 1] + wo)));
          if (Io !== 0) {
            do {
              for (no = vo - 1; Q.bl_count[no] === 0; )
                no--;
              Q.bl_count[no]--, Q.bl_count[no + 1] += 2, Q.bl_count[vo]--, Io -= 2;
            } while (0 < Io);
            for (no = vo; no !== 0; no--)
              for (q = Q.bl_count[no]; q !== 0; )
                Ao < (fo = Q.heap[--mo]) || (uo[2 * fo + 1] !== no && (Q.opt_len += (no - uo[2 * fo + 1]) * uo[2 * fo], uo[2 * fo + 1] = no), q--);
          }
        }(u, I), oo(K, io, u.bl_count);
      }
      function o(u, I, M) {
        var Z, O, K = -1, X = I[1], Y = 0, eo = 7, io = 4;
        for (X === 0 && (eo = 138, io = 3), I[2 * (M + 1) + 1] = 65535, Z = 0; Z <= M; Z++)
          O = X, X = I[2 * (Z + 1) + 1], ++Y < eo && O === X || (Y < io ? u.bl_tree[2 * O] += Y : O !== 0 ? (O !== K && u.bl_tree[2 * O]++, u.bl_tree[2 * F]++) : Y <= 10 ? u.bl_tree[2 * C]++ : u.bl_tree[2 * B]++, K = O, io = (Y = 0) === X ? (eo = 138, 3) : O === X ? (eo = 6, 3) : (eo = 7, 4));
      }
      function L(u, I, M) {
        var Z, O, K = -1, X = I[1], Y = 0, eo = 7, io = 4;
        for (X === 0 && (eo = 138, io = 3), Z = 0; Z <= M; Z++)
          if (O = X, X = I[2 * (Z + 1) + 1], !(++Y < eo && O === X)) {
            if (Y < io)
              for (; W(u, O, u.bl_tree), --Y != 0; )
                ;
            else
              O !== 0 ? (O !== K && (W(u, O, u.bl_tree), Y--), W(u, F, u.bl_tree), D(u, Y - 3, 2)) : Y <= 10 ? (W(u, C, u.bl_tree), D(u, Y - 3, 3)) : (W(u, B, u.bl_tree), D(u, Y - 11, 7));
            K = O, io = (Y = 0) === X ? (eo = 138, 3) : O === X ? (eo = 6, 3) : (eo = 7, 4);
          }
      }
      n(G);
      var T = !1;
      function i(u, I, M, Z) {
        D(u, (p << 1) + (Z ? 1 : 0), 3), function(O, K, X, Y) {
          to(O), Y && (U(O, X), U(O, ~X)), l.arraySet(O.pending_buf, O.window, K, X, O.pending), O.pending += X;
        }(u, I, M, !0);
      }
      b._tr_init = function(u) {
        T || (function() {
          var I, M, Z, O, K, X = new Array(h + 1);
          for (O = Z = 0; O < v - 1; O++)
            for (j[O] = Z, I = 0; I < 1 << z[O]; I++)
              r[Z++] = O;
          for (r[Z - 1] = O, O = K = 0; O < 16; O++)
            for (G[O] = K, I = 0; I < 1 << N[O]; I++)
              R[K++] = O;
          for (K >>= 7; O < f; O++)
            for (G[O] = K << 7, I = 0; I < 1 << N[O] - 7; I++)
              R[256 + K++] = O;
          for (M = 0; M <= h; M++)
            X[M] = 0;
          for (I = 0; I <= 143; )
            J[2 * I + 1] = 8, I++, X[8]++;
          for (; I <= 255; )
            J[2 * I + 1] = 9, I++, X[9]++;
          for (; I <= 279; )
            J[2 * I + 1] = 7, I++, X[7]++;
          for (; I <= 287; )
            J[2 * I + 1] = 8, I++, X[8]++;
          for (oo(J, w + 1, X), I = 0; I < f; I++)
            x[2 * I + 1] = 5, x[2 * I] = go(I, 5);
          ao = new lo(J, z, g + 1, w, h), H = new lo(x, N, 0, f, h), ho = new lo(new Array(0), E, 0, s, m);
        }(), T = !0), u.l_desc = new A(u.dyn_ltree, ao), u.d_desc = new A(u.dyn_dtree, H), u.bl_desc = new A(u.bl_tree, ho), u.bi_buf = 0, u.bi_valid = 0, ro(u);
      }, b._tr_stored_block = i, b._tr_flush_block = function(u, I, M, Z) {
        var O, K, X = 0;
        0 < u.level ? (u.strm.data_type === 2 && (u.strm.data_type = function(Y) {
          var eo, io = 4093624447;
          for (eo = 0; eo <= 31; eo++, io >>>= 1)
            if (1 & io && Y.dyn_ltree[2 * eo] !== 0)
              return a;
          if (Y.dyn_ltree[18] !== 0 || Y.dyn_ltree[20] !== 0 || Y.dyn_ltree[26] !== 0)
            return e;
          for (eo = 32; eo < g; eo++)
            if (Y.dyn_ltree[2 * eo] !== 0)
              return e;
          return a;
        }(u)), ko(u, u.l_desc), ko(u, u.d_desc), X = function(Y) {
          var eo;
          for (o(Y, Y.dyn_ltree, Y.l_desc.max_code), o(Y, Y.dyn_dtree, Y.d_desc.max_code), ko(Y, Y.bl_desc), eo = s - 1; 3 <= eo && Y.bl_tree[2 * $[eo] + 1] === 0; eo--)
            ;
          return Y.opt_len += 3 * (eo + 1) + 5 + 5 + 4, eo;
        }(u), O = u.opt_len + 3 + 7 >>> 3, (K = u.static_len + 3 + 7 >>> 3) <= O && (O = K)) : O = K = M + 5, M + 4 <= O && I !== -1 ? i(u, I, M, Z) : u.strategy === 4 || K === O ? (D(u, 2 + (Z ? 1 : 0), 3), Co(u, J, x)) : (D(u, 4 + (Z ? 1 : 0), 3), function(Y, eo, io, Q) {
          var V;
          for (D(Y, eo - 257, 5), D(Y, io - 1, 5), D(Y, Q - 4, 4), V = 0; V < Q; V++)
            D(Y, Y.bl_tree[2 * $[V] + 1], 3);
          L(Y, Y.dyn_ltree, eo - 1), L(Y, Y.dyn_dtree, io - 1);
        }(u, u.l_desc.max_code + 1, u.d_desc.max_code + 1, X + 1), Co(u, u.dyn_ltree, u.dyn_dtree)), ro(u), Z && to(u);
      }, b._tr_tally = function(u, I, M) {
        return u.pending_buf[u.d_buf + 2 * u.last_lit] = I >>> 8 & 255, u.pending_buf[u.d_buf + 2 * u.last_lit + 1] = 255 & I, u.pending_buf[u.l_buf + u.last_lit] = 255 & M, u.last_lit++, I === 0 ? u.dyn_ltree[2 * M]++ : (u.matches++, I--, u.dyn_ltree[2 * (r[M] + g + 1)]++, u.dyn_dtree[2 * y(I)]++), u.last_lit === u.lit_bufsize - 1;
      }, b._tr_align = function(u) {
        D(u, 2, 3), W(u, k, J), function(I) {
          I.bi_valid === 16 ? (U(I, I.bi_buf), I.bi_buf = 0, I.bi_valid = 0) : 8 <= I.bi_valid && (I.pending_buf[I.pending++] = 255 & I.bi_buf, I.bi_buf >>= 8, I.bi_valid -= 8);
        }(u);
      };
    }, { "../utils/common": 41 }], 53: [function(t, S, b) {
      S.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(t, S, b) {
      (function(l) {
        (function(a, e) {
          if (!a.setImmediate) {
            var n, p, v, g, w = 1, f = {}, s = !1, c = a.document, h = Object.getPrototypeOf && Object.getPrototypeOf(a);
            h = h && h.setTimeout ? h : a, n = {}.toString.call(a.process) === "[object process]" ? function(F) {
              process.nextTick(function() {
                m(F);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var F = !0, C = a.onmessage;
                return a.onmessage = function() {
                  F = !1;
                }, a.postMessage("", "*"), a.onmessage = C, F;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", k, !1) : a.attachEvent("onmessage", k), function(F) {
              a.postMessage(g + F, "*");
            }) : a.MessageChannel ? ((v = new MessageChannel()).port1.onmessage = function(F) {
              m(F.data);
            }, function(F) {
              v.port2.postMessage(F);
            }) : c && "onreadystatechange" in c.createElement("script") ? (p = c.documentElement, function(F) {
              var C = c.createElement("script");
              C.onreadystatechange = function() {
                m(F), C.onreadystatechange = null, p.removeChild(C), C = null;
              }, p.appendChild(C);
            }) : function(F) {
              setTimeout(m, 0, F);
            }, h.setImmediate = function(F) {
              typeof F != "function" && (F = new Function("" + F));
              for (var C = new Array(arguments.length - 1), B = 0; B < C.length; B++)
                C[B] = arguments[B + 1];
              var z = { callback: F, args: C };
              return f[w] = z, n(w), w++;
            }, h.clearImmediate = d;
          }
          function d(F) {
            delete f[F];
          }
          function m(F) {
            if (s)
              setTimeout(m, 0, F);
            else {
              var C = f[F];
              if (C) {
                s = !0;
                try {
                  (function(B) {
                    var z = B.callback, N = B.args;
                    switch (N.length) {
                      case 0:
                        z();
                        break;
                      case 1:
                        z(N[0]);
                        break;
                      case 2:
                        z(N[0], N[1]);
                        break;
                      case 3:
                        z(N[0], N[1], N[2]);
                        break;
                      default:
                        z.apply(e, N);
                    }
                  })(C);
                } finally {
                  d(F), s = !1;
                }
              }
            }
          }
          function k(F) {
            F.source === a && typeof F.data == "string" && F.data.indexOf(g) === 0 && m(+F.data.slice(g.length));
          }
        })(typeof self > "u" ? l === void 0 ? this : l : self);
      }).call(this, typeof Do < "u" ? Do : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(cc);
var ec = cc.exports;
const rc = /* @__PURE__ */ gc(ec), yc = /* @__PURE__ */ tc({
  __proto__: null,
  default: rc
}, [ec]);
function _c(_) {
  return /t="s".*?<v/.test(_);
}
function vc(_) {
  const P = /<t.*?>(.*?)<\/t>/, t = _.match(P);
  return t ? t[1] : null;
}
function wc(_) {
  const P = /<v.*?>(.*?)<\/v>/, t = _.match(P);
  return t ? t[1] : null;
}
function xc(_) {
  const P = /r="(.*?)"/, t = _.match(P);
  return t ? t[1] : null;
}
async function kc(_) {
  let P = [], t = [], S = !1;
  function b(l, a) {
    let e = [], n = a.match(/<c[\s\S\n]*?<\/c>/g);
    Array.isArray(n) && (n.forEach((p) => {
      let v = wc(p);
      _c(p) && v && (v = t[parseInt(v)]);
      const g = xc(p);
      let w = Mo(g, oc);
      typeof e[w.row] > "u" && (e[w.row] = []), e[w.row][w.col] = v;
    }), console.log(e));
  }
  return await fetch(_).then((l) => (console.log(l), l.blob())).then(async (l) => await rc.loadAsync(l).then(function(a) {
    return Object.keys(a.files).forEach(function(e) {
      a.files[e].async("string").then(function(n) {
        if (e.indexOf("sharedStrings") >= 0) {
          let p = n.match(/<si[\s\S\n]*?<\/si>/g);
          Array.isArray(p) && p.forEach((v) => {
            let g = v.match(/<t[\s\S\n]*?<\/t>/g);
            if (Array.isArray(g)) {
              let w = g.reduce((f, s) => f + vc(s), "");
              t.push(w);
            }
          }), S = !0, P.length > 0 && (P.forEach((v) => {
            b(v.filename, v.fileData);
          }), P = []);
        }
        e.indexOf("sheet") >= 0 && (S ? b(e, n) : P.push({
          filename: e,
          fileData: n
        }));
      });
    }), "done";
  }));
}
function Cc(_) {
  const P = _.length;
  let t = 0, S = {}, b = {}, l = {};
  for (let p = 0; p < P; p++) {
    const v = _[p], g = v.length;
    let w = {};
    for (let f = 0; f < g; f++) {
      t++;
      const s = v[f];
      let c;
      s.sheetName ? c = s.sheetName : c = "Sheet 1", c in S || (S[c] = {
        headers: [],
        data: [],
        labelConter: 0,
        seenAt: p
      }), c in b || (b[c] = {
        index: p,
        value: 0
      }), c in l || (S[c].labelConter = 0, l[c] = !0);
      let h = [];
      const d = S[c].headers.length;
      let m = {}, k = S[c].seenAt == p, F = s.headers.reduce((N, E, $) => (S[c].labelConter++, d < S[c].labelConter && h.push({
        label: "c" + S[c].labelConter,
        text: k ? E.text : ""
      }), m["c" + S[c].labelConter] = E.text, {
        ...N,
        [E.label]: "c" + S[c].labelConter
      }), {});
      if (S[c].headers.push(...h), s.spaceX)
        for (let N = 0; N < s.spaceX; N++)
          S[c].labelConter++, d <= S[c].labelConter && S[c].headers.push({
            label: "c" + S[c].labelConter,
            text: ""
          });
      b[c].index + 1 == p && (w[c] = b[c].value);
      let C = w[c] || 0;
      C > 0 && (!S[c].headerIndex || S[c].headerIndex && S[c].headerIndex != C ? S[c].data.push(m) : S[c].data[C] = {
        ...S[c].data[C],
        ...m
      }, S[c].headerIndex = C, C++);
      let B = Object.keys(F), z = s.data.length >= S[c].data.length;
      if (S[c].data = s.data.reduce((N, E, $) => {
        let J = {};
        return N.length > $ + C ? J = N[$ + C] : N.push(J), B.forEach((x) => {
          let R = F[x];
          J[R] = E[x] ? E[x] : "";
        }), J.tableIndex = t, J.tableStringIndex = $ + "," + f, N[$ + C] = J, N;
      }, S[c].data), z && s.spaceY) {
        const N = S[c].headers.length;
        for (let E = 0; E < s.spaceY; E++) {
          let $ = {};
          for (let J = 0; J < N; J++) {
            const x = S[c].headers[J];
            $[x.label] = "";
          }
          S[c].data.push($);
        }
      }
      b[c] = {
        value: Math.max(S[c].data.length, b[c].value),
        index: p
      };
    }
    l = {};
  }
  let a = Object.keys(S), e = [];
  return a.reduce(
    (p, v) => {
      let g = S[v];
      return p.sheet.push({
        ...g,
        name: v
      }), p;
    },
    { sheet: e }
  );
}
const Zo = mc;
function Sc(_, P, t, S, b) {
  const l = nc(
    _,
    P,
    t,
    S,
    b
  );
  return Zo(l);
}
function Ac(_) {
  const P = Cc(_);
  return Zo(P);
}
function Ic(_, P, t) {
  return Zo(ac(_, P, t));
}
const Fc = kc;
export {
  Zo as a,
  Sc as b,
  Do as c,
  Fc as e,
  gc as g,
  Ac as s,
  Ic as t
};
