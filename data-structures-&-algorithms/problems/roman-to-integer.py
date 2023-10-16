# prompt:

# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

# For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

# Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

# I can be placed before V (5) and X (10) to make 4 and 9. 
# X can be placed before L (50) and C (100) to make 40 and 90. 
# C can be placed before D (500) and M (1000) to make 400 and 900.

# Given a roman numeral, convert it to an integer.

# all we have to do is declare which values correspond to which symbols, then add up the values of each symbol
# there is one complication however:
# roman numerals are arranged in descending order, starting with M, going to D, C, and so on.
# but sometimes they are arranged in reverse to indicate subtraction, which allows all numbers to be represented in romans. 
# for example, IV is arranged in ascending order. this means V, the higher number, minus I, the lower number. 
# to get around this issue, as we iteratively add up the symbols, we will keep track of the previous symbol.
# then at each new symbol, we check to see if the current symbol is greater than the previous - to see if the pair are arranged in ascending order. 
# if it is, we must substract the previous value from the total - twice
# why twice? because we already added that value to our total in the last iteration, so we undo that, add the new value, and subtract the previous once again

class Solution:
    def romanToInt(self, s: str) -> int:
        # init table of values
        table = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        
        # init running total
        total = 0

        # init previous symbol to 'M' so that it exists in the table, but won't ever trigger subtraction
        # on the first iteration because there is no symbol greater than 'M'
        prev = 'M'
        
        # iterate over the string
        for i in s:
            # add the value of current roman symbol to running total
            total += table[i]

            # check to see if the previous symbol is smaller than current
            if table[prev] < table[i]:

                # if it is, we subtract that previous value from the total, twice
                # once to undo the last iteration, 
                # twice to subtract it from the current value being added
                total -= (table[prev] * 2)

            # set the prev value to current and go to next iteration
            prev = i
            
            
        # return the total 
        return total


        # could also be done like:

        for i in s:
            total += table[i]
            if table[prev] > table[i]:
                prev = i 
                continue
            total -= (table[prev] * 2)            