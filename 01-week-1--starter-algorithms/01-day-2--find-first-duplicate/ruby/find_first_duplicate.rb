def find_first_duplicate(arr)
  hash_count = Hash.new(0)

  arr.each do |e|
    hash_count[e] = hash_count[e] += 1
    return e if hash_count[e] > 1
  end
  return -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  
  puts

  puts "Expecting: -1"
  puts find_first_duplicate([])

  puts

  puts "Expecting: -1"
  puts find_first_duplicate([7])


  # Don't forget to add your own!
end
#given an array, find the furst duplicate that occurs and return it.

# Please add your pseudocode to this file
# create a counter hash that keeps track of values
# pass in default of 0 so can add on to the hash and increment a counter
# iterate over the array and call counter hash with each element passed in as key
# and increment as soon as find a duplicate
# once there is a value in hash, return that key (dupliucate element)
# else return -1



# And a written explanation of your solution
# iterate through the arr passed in as an argumnet passing in each element as a key and value of 1
# when the incrementer hits a repeated value hash[e] = hash[e], it will increment and then give a value greater than one. Can then return the value 


