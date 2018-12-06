function ObjectCompare(a, b) {
  const uniqueKeys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const key of uniqueKeys) {
    if (a[key] === void 0 || b[key] === void 0) {
      return false;
    }

    if (a[key] !== b[key]) {
      switch (typeof a[key]) {
        case 'object':
          if ( ! ObjectCompare(a[key], b[key])) {
            return false;
          }
          break;
        case 'number':
          if (Number.isNaN(a[key]) !== Number.isNaN(b[key])) {
            return false;
          }
          break;
        case 'function':
          if (a[key].toString() !== b[key].toString()) {
            return false;
          }
          break;
        default:
          return false;
          break;
      }
    }
  }

  return true;
};


export default ObjectCompare