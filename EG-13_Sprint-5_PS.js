/** 01. Remove Duplicates from Sorted Array */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let insertPos = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  return insertPos;
};

/** 02. Binary Search */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

//** 03. Search Insert Position */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

/**04. Maximum Depth of Binary Tree */
var maxDepth = function (root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/** 05. Invert Binary Tree */
var invertTree = function (root) {
  if (root === null) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

/** 06. Product of Array Except Self */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
};

/**07. Rotate Array */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

/**08. Min Stack */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  } else {
    this.minStack.push(this.minStack[this.minStack.length - 1]);
  }
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/** 09. Continuous Subarray Sum */
var checkSubarraySum = function (nums, k) {
  const remainderMap = { 0: -1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const remainder = sum % k;
    if (remainderMap.hasOwnProperty(remainder)) {
      if (i - remainderMap[remainder] > 1) return true;
    } else {
      remainderMap[remainder] = i;
    }
  }
  return false;
};

//** 10. Daily Temperatures */ 
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
};
