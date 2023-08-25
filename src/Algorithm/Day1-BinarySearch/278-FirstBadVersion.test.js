const { solution } = require("./278-FirstBadVersion");

test("n = 1, bad = 1", () => {
  const n = 1;
  const bad = 1;
  const isBadVersion = (i) => {
    return i >= bad;
  };
  expect(solution(isBadVersion)(n)).toBe(bad);
});

test("n = 2, bad = 1", () => {
  const n = 2;
  const bad = 1;
  const isBadVersion = (i) => {
    return i >= bad;
  };
  expect(solution(isBadVersion)(n)).toBe(bad);
});

test("n = 2, bad = 2", () => {
  const n = 2;
  const bad = 2;
  const isBadVersion = (i) => {
    return i >= bad;
  };
  expect(solution(isBadVersion)(n)).toBe(bad);
});

test("n = 3, bad = 1", () => {
  const n = 3;
  const bad = 1;
  const isBadVersion = (i) => {
    return i >= bad;
  };
  expect(solution(isBadVersion)(n)).toBe(bad);
});

test("n = 3, bad = 2", () => {
  const n = 3;
  const bad = 2;
  const isBadVersion = (i) => {
    return i >= bad;
  };
  expect(solution(isBadVersion)(n)).toBe(bad);
});

test("n = 3, bad = 3", () => {
  const n = 3;
  const bad = 3;
  const isBadVersion = (i) => {
    return i >= bad;
  };
  expect(solution(isBadVersion)(n)).toBe(bad);
});

test("n = 5, bad = 4", () => {
  const n = 5;
  const bad = 4;
  const isBadVersion = (i) => {
    return i >= bad;
  };
  expect(solution(isBadVersion)(n)).toBe(bad);
});
