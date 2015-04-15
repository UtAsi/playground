var sample1 = [
  { name: 'A', id: 1 },
  { name: 'B', id: 2 },
  { name: 'C', id: 3 },
  { name: 'D', id: 4 },
  { name: 'E', id: 5 },
  { name: 'F', id: 6 }
];

var sample2 = [
  { name: 'あ', id: 1 },
  { name: 'い', id: 2 },
  { name: 'う', id: 3 },
  { name: 'え', id: 4 },
  { name: 'お', id: 5 },
  { name: 'か', id: 6 }
];

var sample3 = [
  { name: '1', id: 1 },
  { name: '2', id: 2 },
  { name: '3', id: 3 },
  { name: '4', id: 4 },
  { name: '5', id: 5 },
  { name: '6', id: 6 }
];


var DummyApi = {
  get: function (n) {
    var arr;
    if (n === '1') {
      arr = sample1;
    } else if (n === '2') {
      arr = sample2;
    } else if (n === '3') {
      arr = sample3;
    }
    return arr;
  }
};

module.exports = DummyApi;