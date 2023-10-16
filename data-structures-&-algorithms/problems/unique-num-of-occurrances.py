class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        # brute force
        # get list of occurances of each #
        # check that items in list are unique
        
        # sort array
        # iterate over the. array
        # keep a running count and add it to a count array once a new item is found
        # at the end, sort the count array 
        # iterate iver tha count array
        # return false if a dupe is found
        
        #arr of occurrances
        counts = []
        
        # sort arr
        arr.sort()

        # init count, this will be # of occurrances for each unique # in arr
        count = 0
        for i in range(len(arr)):
            count += 1
            # if the next # is the same, just keep counting
            if i != len(arr) - 1 and arr[i + 1] == arr[i]:
                continue
            # otherwise, counts is set to # of occurrances so we add it to counts and reset to 0
            else: 
                counts.append(count)
                count = 0
        
        # sort counts to get dupes next to each other
        counts.sort()
        
        for i in range(len(counts)):
            # if we find any dupes return false, else return True
            if i != len(counts) - 1 and counts[i + 1] == counts[i]:
                
                return False
        return True
        
        