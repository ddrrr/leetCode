/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => { return a - b; });
    let len = nums.length;
    let result = [];
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        //最小值都太大了，那不用再往后找了
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }

        //最大值太小了，那这个i不够用了，再往后找
        if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
            continue;
        }

        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }

            //最小值都太大了，那不用再往后找了
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }

            //最大值太小了，那这个j不够用了，再往后找
            if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
                continue;
            }

            let left = j + 1;
            let right = len - 1;

            while (left < right) {
                let tmp = nums[i] + nums[j] + nums[left] + nums[right];
                if (tmp > target) {
                    right--;
                }
                else if (tmp < target) {
                    left++;
                }
                else {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (nums[left] == nums[left + 1]) {
                        left++;
                    }
                    while (nums[right] == nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
            }
        }
    }

    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));