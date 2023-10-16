
# prompt: 
# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
# A subarray is a contiguous part of an array.

# this is also known as Kadanes algorithm, because it was created by Joseph Born Kadane

# BRUTE FORCE
# the brute force approach in this situation is to search the space of all possible contiguous subarrays, and keep track of the highest sum you find.
# the space of all possible subarrays in an array of size n is 2^n - 1. 
# This means our brute force algorithm will run in exponential time. 

# KADANES ALGORITHM
# Kadane's approach starts by abstracting the problem into a more approachable form:
# instead of looking generally for the maximum among all possible subarrays, we can iterate over the list to find the max subarray that ends at a particular index. 
# this of course will cover the space of all possible subarrays, so long as we check each index. 
# similar to very many other efficient algorithms, kadanes algorithm excludes many of the possibilities using reasoning. 
# in this case, we can guarantee mathematically that if we know the sum of the max subarray that ends at a particular index, the max subarray that ends at the next index can only have two possibilities:
# either the max subarray which ends at that index is the sum of itself and the max subarray ending at the previous index, 
# or it is just that index itself. And to be clear, it is the maximum of these two possiblities. 
# knowing this with mathematical certainty makes our lives much easier because at each index we need only make one comparison, meaning our algorithm will run in linear time.

# so to start out we can initialize 'current' and 'highest' variables to track the current highest sum ending at the current index, 
# and the overall highest sum we find as we iterate. both are initialized to the first item in the array
# obviously the max subarray ending at the 0 index is just the item at that index, since there is nothing before it.

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        #check that list exists
        if not nums: 
            return 0
        # init curr sum & highest sum variables to the first item
        highest = current = nums[0]
        #iterate over the rest of the array
        for i in nums[1:]:
            # set the curr value to the max subarray ending at the current index, guaranteed by kadanes mathematical reasoning
            current = max(i, i + current)
            # set the highest sum to the max between itself and the current highest sum, so that it will always resolve to the highest sum in the list
            highest = max(highest, current)
        #return the highest sum
        return highest