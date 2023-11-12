function serialize(arr) {
  return arr.map(num => num.toString(36)).join(',');
}

function deserialize(str) {
  return str.split(',').map(numStr => parseInt(numStr, 36));
}

function runTests() {
  const tests = [
    [1, 2, 3, 4, 5],  // простейшие короткие
    [15, 25, 35, 45, 55, 65, 75, 85, 95, 105],  // случайные - 50 чисел
    Array.from({ length: 100 }, (_, i) => i + 1),  // 100 чисел
    Array.from({ length: 500 }, (_, i) => i + 1),  // 500 чисел
    Array.from({ length: 1000 }, (_, i) => i + 1),  // 1000 чисел
    Array.from({ length: 9 }, (_, i) => i + 1),  // граничный - все числа 1 знака
    Array.from({ length: 90 }, (_, i) => i + 10),  // граничный - все числа из 2х знаков
    Array.from({ length: 900 }, (_, i) => i + 100),  // граничный - все числа из 3х знаков
    Array.from({ length: 300 }, (_, i) => i % 3 + 1),  // граничный - каждого числа по 3, всего чисел 900
  ];

  tests.forEach(test => {
    const originalArray = test.slice();
    const serializedString = serialize(originalArray);
    const deserializedArray = deserialize(serializedString);

    const compressionRatio = (serializedString.length / (originalArray.length * 4)).toFixed(2);

    console.log("Original Array:", originalArray);
    console.log("Serialized String:", serializedString);
    console.log("Deserialized Array:", deserializedArray);
    console.log("Compression Ratio:", compressionRatio);
    console.log("------------------------");
  });
}

runTests();
