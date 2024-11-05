// Função para trocar os valores de duas posições de um vetor
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
      const idx1 = Math.floor(Math.random() * arr.length);
      const idx2 = Math.floor(Math.random() * arr.length);
      swap(arr, idx1, idx2);
    }
  };
  
  // Função de ordenação Bubble Sort
  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
      }
    }
  };
  
  // Função de ordenação Selection Sort
  const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      swap(arr, i, minIdx);
    }
  };
  
  // Função de particionamento para Quick Sort
  const partition = (arr, start, end) => {
    const pivot = arr[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) swap(arr, ++i, j);
    }
    swap(arr, i + 1, end);
    return i + 1;
  };
  
  // Função de ordenação Quick Sort
  const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if (start < end) {
      const pIndex = partition(arr, start, end);
      quickSort(arr, start, pIndex - 1);
      quickSort(arr, pIndex + 1, end);
    }
  };
  