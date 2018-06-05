/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= m;
    }
    return result;
}

pow(3, 4);