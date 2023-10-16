class Solution:
    def generic_binary_search(self, array: List[int], target: int) -> int:
        array.sort()

        high_pointer = len(array - 1)
        low_pointer = 0

        while hi >= lo:
            mid_pointer = (hi + lo) // 2
            if array[mid_pointer] == target:
                return mid_pointer
            elif array[mid_pointer] > target:
                right_pointer = mid_pointer - 1
            else:
                left_pointer = mid_pointer + 1
        return - 1
