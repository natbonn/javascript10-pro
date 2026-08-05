const arr = [ 2, 2, 3, 2, 5, 2 ];

const deleteBackwards = (arr, val) => {

    if (!Array.isArray(arr)) return;

    // Ελέγχει από το τέλος προς την αρχή
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === val) {
            arr.splice(i, 1)
        }
    }
}